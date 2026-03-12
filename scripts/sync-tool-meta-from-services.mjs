#!/usr/bin/env node
/**
 * public/tools/{slug}/index.html의 title·description·og·twitter 메타를
 * app/lib/services.js 기준으로 덮어씀. description 50자 미만이면 접미어로 보강.
 * 사용: node scripts/sync-tool-meta-from-services.mjs [--dry-run]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const TOOLS_DIR = path.join(ROOT, "public", "tools");
const MIN_TITLE_LEN = 10;
const MIN_DESC_LEN = 50;
const TITLE_SUFFIX = " | FunnyFunny Cloud";
const DESC_SUFFIX = " 무료로 사용할 수 있습니다. FunnyFunny Cloud에서 제공하는 도구입니다.";

async function getSlugToMeta() {
  const servicesPath = path.join(ROOT, "app", "lib", "services.js");
  const mod = await import(pathToFileURL(servicesPath).href);
  const services = mod.getAllServices("ko");
  const map = new Map();
  for (const s of services) {
    const slug = mod.hrefToSlug(s.href);
    if (slug) map.set(slug, { title: s.title, desc: s.desc || s.title });
  }
  return map;
}

function escapeHtml(s) {
  if (!s) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function ensureMinLength(title, desc) {
  let t = String(title || "").trim();
  let d = String(desc || title || "").trim();
  while (t.length < MIN_TITLE_LEN) t = (t + TITLE_SUFFIX).trim();
  while (d.length < MIN_DESC_LEN) d = (d + DESC_SUFFIX).trim();
  return { title: t.slice(0, 60), desc: d.slice(0, 160) };
}

function replaceMeta(html, slug, title, desc) {
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(desc);
  let out = html;

  out = out.replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`);

  const metaDescRe = /<meta[^>]+name\s*=\s*["']description["'][^>]*>/i;
  if (metaDescRe.test(out)) {
    out = out.replace(metaDescRe, `<meta name="description" content="${safeDesc}" />`);
  } else {
    out = out.replace(/\s*<\/head\s*>/i, `\n    <meta name="description" content="${safeDesc}" />\n  </head>`);
  }

  const ogTitleRe = /<meta[^>]+property\s*=\s*["']og:title["'][^>]*>/i;
  const ogDescRe = /<meta[^>]+property\s*=\s*["']og:description["'][^>]*>/i;
  const twTitleRe = /<meta[^>]+name\s*=\s*["']twitter:title["'][^>]*>/i;
  const twDescRe = /<meta[^>]+name\s*=\s*["']twitter:description["'][^>]*>/i;

  if (ogTitleRe.test(out)) {
    out = out.replace(ogTitleRe, `<meta property="og:title" content="${safeTitle}" />`);
  }
  if (ogDescRe.test(out)) {
    out = out.replace(ogDescRe, `<meta property="og:description" content="${safeDesc}" />`);
  }
  if (twTitleRe.test(out)) {
    out = out.replace(twTitleRe, `<meta name="twitter:title" content="${safeTitle}" />`);
  }
  if (twDescRe.test(out)) {
    out = out.replace(twDescRe, `<meta name="twitter:description" content="${safeDesc}" />`);
  }

  return out;
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const slugToMeta = await getSlugToMeta();
  const dirs = fs.readdirSync(TOOLS_DIR).filter((n) => {
    const stat = fs.statSync(path.join(TOOLS_DIR, n));
    return stat.isDirectory();
  });
  let updated = 0;
  for (const slug of dirs) {
    const indexPath = path.join(TOOLS_DIR, slug, "index.html");
    if (!fs.existsSync(indexPath)) continue;
    const meta = slugToMeta.get(slug) || { title: slug, desc: `FunnyFunny Cloud — ${slug}` };
    const { title, desc } = ensureMinLength(meta.title, meta.desc);
    const html = fs.readFileSync(indexPath, "utf8");
    const newHtml = replaceMeta(html, slug, title, desc);
    if (newHtml === html) continue;
    if (!dryRun) fs.writeFileSync(indexPath, newHtml, "utf8");
    updated++;
    console.log(dryRun ? "[dry-run] sync: " : "sync: ", slug);
  }
  console.log("\n결과: updated", updated);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
