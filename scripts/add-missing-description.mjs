#!/usr/bin/env node
/**
 * description이 비어 있거나 없는 도구 index.html에만 meta description(및 og:description) 보강.
 * app/lib/services.js에서 slug별 title/desc 사용.
 * 사용: node scripts/add-missing-description.mjs [--dry-run]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const TOOLS_DIR = path.join(ROOT, "public", "tools");
const BASE = "https://funnyfunny.cloud";

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

function hasDescription(html) {
  const m = html.match(
    /<meta[^>]+name\s*=\s*["']description["'][^>]+content\s*=\s*["']([^"']*)["']/i
  ) || html.match(
    /<meta[^>]+content\s*=\s*["']([^"']*)["'][^>]+name\s*=\s*["']description["']/i
  );
  return m && m[1].trim().length > 0;
}

function injectDescription(html, slug, title, desc) {
  if (hasDescription(html)) return null;
  const safeDesc = escapeHtml((desc || title).slice(0, 160));
  const metaDesc = `\n    <meta name="description" content="${safeDesc}" />`;
  const hasOg = hasOgTitle(html);
  const ogTwitter = hasOg
    ? `\n    <meta property="og:description" content="${safeDesc}" />\n    <meta name="twitter:description" content="${safeDesc}" />`
    : "";
  const block = metaDesc + ogTwitter;
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
    const newHtml = injectDescription(html, slug, meta.title, meta.desc);
    if (newHtml === null) {
      skipped++;
      continue;
    }
    if (!dryRun) fs.writeFileSync(indexPath, newHtml, "utf8");
    added++;
    console.log(dryRun ? "[dry-run] would add description: " : "added description: ", slug);
  }
  console.log("\n결과:", { added, skipped });
  if (dryRun && added > 0) console.log("실제 적용하려면 --dry-run 없이 실행하세요.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
