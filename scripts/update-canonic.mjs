#!/usr/bin/env node
/**
 * Set or replace canonical in each tool's index.html to https://funnyfunny.cloud/tools/{slug}
 * Run from funny/: node scripts/update-canonic.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FUNNY_ROOT = path.resolve(__dirname, "..");
const WEB_ROOT = path.resolve(FUNNY_ROOT, "..");

const IGNORE_DIRS = new Set(["funny", "node_modules", ".git", "ashlight", ".cursor", ".vscode"]);
const CANONICAL_PREFIX = "https://funnyfunny.cloud/tools/";

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

  let updated = 0;
  for (const slug of slugs) {
    const sourceDirName = findSourceDir(slug);
    if (!sourceDirName) continue;

    const indexPath = path.join(WEB_ROOT, sourceDirName, "index.html");
    if (!fs.existsSync(indexPath)) continue;

    let html = fs.readFileSync(indexPath, "utf8");
    const newCanonical = `<link rel="canonical" href="${CANONICAL_PREFIX}${slug}/" />`;

    const canonicalRegex = /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>\s*/i;
    if (canonicalRegex.test(html)) {
      html = html.replace(canonicalRegex, newCanonical + "\n    ");
    } else {
      html = html.replace(/<\/head>/i, "    " + newCanonical + "\n  </head>");
    }

    fs.writeFileSync(indexPath, html);
    updated++;
    console.log("Canonical:", slug);
  }
  console.log("\nUpdated", updated, "files.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
