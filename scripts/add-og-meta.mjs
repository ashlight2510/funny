#!/usr/bin/env node
/**
 * OG/메타가 없는 도구 index.html에 title·description·og·twitter 메타 삽입.
 * app/lib/services.js에서 slug별 title/desc 가져옴.
 * 사용: node scripts/add-og-meta.mjs [--dry-run]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const TOOLS_DIR = path.join(ROOT, "public", "tools");
const BASE = "https://funnyfunny.cloud";
const DEFAULT_OG_IMAGE = "https://dummyimage.com/1200x630/0f172a/94a3b8&text=FunnyFunny+Cloud";

async function getSlugToMeta() {
  const servicesPath = path.join(ROOT, "app", "lib", "services.js");
  const url = pathToFileURL(servicesPath).href;
  const mod = await import(url);
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

function hasOgTitle(html) {
  return /<meta[^>]+property\s*=\s*["']og:title["']/i.test(html);
}

function metaBlock(slug, title, desc) {
  const url = `${BASE}/tools/${slug}/`;
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml((desc || title).slice(0, 160));
  const img = DEFAULT_OG_IMAGE;
  return `
    <meta name="description" content="${safeDesc}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDesc}" />
    <meta property="og:image" content="${img}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDesc}" />
    <meta name="twitter:image" content="${img}" />
`;
}

function injectOg(html, slug, title, desc) {
  if (hasOgTitle(html)) return null;
  const block = metaBlock(slug, title, desc);
  const newHtml = html.replace(/\s*<\/head\s*>/i, block + "\n  </head>");
  return newHtml === html ? null : newHtml;
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const slugToMeta = await getSlugToMeta();
  const dirs = fs.readdirSync(TOOLS_DIR).filter((name) => {
    const stat = fs.statSync(path.join(TOOLS_DIR, name));
    return stat.isDirectory();
  });
  let added = 0;
  let skipped = 0;
  for (const slug of dirs) {
    const indexPath = path.join(TOOLS_DIR, slug, "index.html");
    if (!fs.existsSync(indexPath)) continue;
    const meta = slugToMeta.get(slug) || {
      title: slug,
      desc: `FunnyFunny Cloud — ${slug}`,
    };
    const html = fs.readFileSync(indexPath, "utf8");
    const newHtml = injectOg(html, slug, meta.title, meta.desc);
    if (newHtml === null) {
      skipped++;
      continue;
    }
    if (!dryRun) fs.writeFileSync(indexPath, newHtml, "utf8");
    added++;
    console.log(dryRun ? "[dry-run] would add OG: " : "added OG: ", slug);
  }
  console.log("\n결과:", { added, skipped });
  if (dryRun && added > 0) console.log("실제 적용하려면 --dry-run 없이 실행하세요.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
