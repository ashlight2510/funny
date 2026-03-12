#!/usr/bin/env node
/**
 * 배포 전 체크: out/ 산출물 존재·sitemap 내용 검사.
 * 사용: yarn build 후 node scripts/check-deploy.mjs
 * 또는 npm run check-deploy (audit-meta 후 실행)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "out");

let failed = false;

function check(name, ok, message) {
  if (!ok) {
    console.error(`[FAIL] ${name}: ${message}`);
    failed = true;
  } else {
    console.log(`[OK] ${name}`);
  }
}

// 1. out/ 존재
if (!fs.existsSync(OUT)) {
  console.error("[FAIL] out/ 폴더가 없습니다. 먼저 yarn build 를 실행하세요.");
  process.exit(1);
}

// 2. robots.txt
const robotsPath = path.join(OUT, "robots.txt");
check(
  "out/robots.txt",
  fs.existsSync(robotsPath),
  "파일이 없습니다."
);

// 3. sitemap.xml
const sitemapPath = path.join(OUT, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) {
  check("out/sitemap.xml", false, "파일이 없습니다.");
} else {
  check("out/sitemap.xml", true);
  const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
  check(
    "sitemap <loc>",
    /<loc>/i.test(sitemapContent),
    "<loc> 태그가 없습니다."
  );
  check(
    "sitemap <lastmod>",
    /<lastmod>/i.test(sitemapContent),
    "<lastmod> 태그가 없습니다."
  );
  if (!/<changefreq>/i.test(sitemapContent)) {
    console.log("[WARN] sitemap에 <changefreq> 없음 (선택 항목)");
  }
  if (!/<priority>/i.test(sitemapContent)) {
    console.log("[WARN] sitemap에 <priority> 없음 (선택 항목)");
  }
}

// 4. out/tools/ 존재 (도구 페이지)
const toolsDir = path.join(OUT, "tools");
if (fs.existsSync(toolsDir)) {
  const count = fs.readdirSync(toolsDir).filter((n) => {
    const p = path.join(toolsDir, n);
    return fs.statSync(p).isDirectory();
  }).length;
  check("out/tools/", count >= 50, `도구 폴더 수 ${count} (50개 이상 권장)`);
} else {
  check("out/tools/", false, "폴더가 없습니다.");
}

if (failed) {
  process.exit(1);
}
console.log("\n배포 전 체크 통과.");
