#!/usr/bin/env node
/**
 * Copy tool service static builds from web/{dir} to funny/public/tools/{slug}.
 * Slug comes from getAllServices href (subdomain). Source dir is matched by name (case-insensitive).
 * Run from funny/: node scripts/copy-tools.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FUNNY_ROOT = path.resolve(__dirname, "..");
const WEB_ROOT = path.resolve(FUNNY_ROOT, "..");
const PUBLIC_TOOLS = path.join(FUNNY_ROOT, "public", "tools");

const IGNORE_DIRS = new Set([
  "funny",
  "node_modules",
  ".git",
  "ashlight",
  ".cursor",
  ".vscode",
]);

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      if (name === ".git" || name === "node_modules" || name === ".github") continue;
      copyRecursive(path.join(src, name), path.join(dest, name));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function findSourceDir(slug) {
  const dirs = fs.readdirSync(WEB_ROOT, { withFileTypes: true });
  const lower = slug.toLowerCase();
  for (const d of dirs) {
    if (!d.isDirectory()) continue;
    if (IGNORE_DIRS.has(d.name)) continue;
    if (d.name.toLowerCase() === lower) return d.name;
  }
  return null;
}

async function main() {
  const { getToolSlugs } = await import("../app/lib/services.js");
  const slugs = getToolSlugs("en");

  if (!fs.existsSync(WEB_ROOT)) {
    console.error("Web root not found:", WEB_ROOT);
    process.exit(1);
  }

  // CI에서 funny만 클론된 경우 부모에 서비스 디렉터리가 없음 → public/tools 건드리지 않고 커밋된 것 사용
  let resolvable = 0;
  for (const slug of slugs) {
    const sourceDirName = findSourceDir(slug);
    if (!sourceDirName) continue;
    const indexHtml = path.join(WEB_ROOT, sourceDirName, "index.html");
    if (fs.existsSync(indexHtml)) resolvable++;
  }
  const useCommitted = resolvable < Math.min(5, Math.floor(slugs.length / 2));
  if (useCommitted) {
    console.log(
      "copy-tools: only",
      resolvable,
      "sources found in parent (CI?). Using committed public/tools."
    );
    return;
  }

  // 덮어쓰기만 함. clearDir 하지 않음 — 커밋된 정적 도구(300개+) 유지, 부모에 있는 빌드만 복사
  if (!fs.existsSync(PUBLIC_TOOLS)) fs.mkdirSync(PUBLIC_TOOLS, { recursive: true });

  let copied = 0;
  let skipped = 0;

  for (const slug of slugs) {
    const sourceDirName = findSourceDir(slug);
    if (!sourceDirName) {
      console.warn("Skip (no dir):", slug);
      skipped++;
      continue;
    }

    const sourcePath = path.join(WEB_ROOT, sourceDirName);
    const indexHtml = path.join(sourcePath, "index.html");
    if (!fs.existsSync(indexHtml)) {
      console.warn("Skip (no index.html):", slug, sourcePath);
      skipped++;
      continue;
    }

    const destPath = path.join(PUBLIC_TOOLS, slug);
    copyRecursive(sourcePath, destPath);
    console.log("Copied:", slug, "<-", sourceDirName);
    copied++;
  }

  console.log("\nDone. Copied:", copied, "Skipped:", skipped);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
