#!/usr/bin/env node
/**
 * 도구 index.html 메타 점검: og:title 없음, description 없음, title 5자 미만 등
 * 출력: slug, hasOg, hasDesc, titleLen, descLen
 * 사용: node scripts/audit-tool-meta.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const TOOLS_DIR = path.join(ROOT, "public", "tools");

function audit(html, slug) {
  const hasOg = /<meta[^>]+property\s*=\s*["']og:title["']/i.test(html);
  const hasDesc =
    /<meta[^>]+name\s*=\s*["']description["'][^>]+content\s*=/i.test(html) ||
    /<meta[^>]+content\s*=[^>]+name\s*=\s*["']description["']/i.test(html);
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";
  const descMatch = html.match(
    /<meta[^>]+name\s*=\s*["']description["'][^>]+content\s*=\s*["']([^"']*)["']/i
  ) || html.match(
    /<meta[^>]+content\s*=\s*["']([^"']*)["'][^>]+name\s*=\s*["']description["']/i
  );
  const desc = descMatch ? descMatch[1].trim() : "";
  return {
    slug,
    hasOg,
    hasDesc,
    titleLen: title.length,
    descLen: desc.length,
    title: title.slice(0, 40),
  };
}

function main() {
  const dirs = fs.readdirSync(TOOLS_DIR).filter((name) => {
    const stat = fs.statSync(path.join(TOOLS_DIR, name));
    return stat.isDirectory();
  });
  const results = [];
  for (const slug of dirs) {
    const indexPath = path.join(TOOLS_DIR, slug, "index.html");
    if (!fs.existsSync(indexPath)) continue;
    const html = fs.readFileSync(indexPath, "utf8");
    results.push(audit(html, slug));
  }
  const missingOg = results.filter((r) => !r.hasOg);
  const missingDesc = results.filter((r) => !r.hasDesc);
  const shortTitle = results.filter((r) => r.titleLen > 0 && r.titleLen < 10);
  const shortDesc = results.filter((r) => r.descLen > 0 && r.descLen < 50);

  console.log("=== og:title 없음 (" + missingOg.length + ") ===");
  missingOg.forEach((r) => console.log(r.slug));
  console.log("\n=== description 없음 (" + missingDesc.length + ") ===");
  missingDesc.forEach((r) => console.log(r.slug));
  console.log("\n=== title 10자 미만 (" + shortTitle.length + ") ===");
  shortTitle.forEach((r) => console.log(r.slug, "|", r.title));
  console.log("\n=== description 50자 미만 (" + shortDesc.length + ") ===");
  shortDesc.forEach((r) => console.log(r.slug));
  if (missingOg.length > 0) console.log("\n추가: node scripts/add-og-meta.mjs 로 OG 보강 가능");
  if (missingDesc.length > 0) console.log("추가: node scripts/add-missing-description.mjs 로 description 보강 가능");
  if (shortTitle.length > 0 || shortDesc.length > 0) console.log("보강: node scripts/sync-tool-meta-from-services.mjs 로 title/description 길이 보강 가능");

  const fail = missingOg.length > 0 || missingDesc.length > 0;
  process.exit(fail ? 1 : 0);
}

main();
