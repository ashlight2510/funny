#!/usr/bin/env node
/**
 * "사용 가이드 · 다른 서비스" 푸터가 있는 도구에 "공유하기" 링크 + 스크립트 추가.
 * 사용: node scripts/add-share-to-footer.mjs [--dry-run]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const TOOLS_DIR = path.join(ROOT, "public", "tools");

function injectShare(html) {
  if (html.includes("공유하기") && html.includes("share-link-btn")) return null;
  if (!html.includes("사용 가이드") || !html.includes("다른 서비스")) return null;
  // Replace "다른 서비스</a></div>" with "공유하기 · 다른 서비스</a></div><script>..."
  const newHtml = html.replace(
    /<\/a>\s*·\s*<a href="https:\/\/funnyfunny\.cloud\/">다른 서비스<\/a><\/div>/,
    '</a> · <a href="#" id="share-link-btn">공유하기</a> · <a href="https://funnyfunny.cloud/">다른 서비스</a></div><script>(function(){var btn=document.getElementById("share-link-btn");if(btn)btn.onclick=function(e){e.preventDefault();if(navigator.share){navigator.share({title:document.title,url:location.href}).catch(function(){copy();});}else copy();function copy(){navigator.clipboard.writeText(location.href);try{alert("링크가 복사되었습니다.");}catch(_){}}});})();</script>'
  );
  return newHtml === html ? null : newHtml;
}

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const dirs = fs.readdirSync(TOOLS_DIR).filter((name) => {
    const stat = fs.statSync(path.join(TOOLS_DIR, name));
    return stat.isDirectory();
  });
  let added = 0;
  for (const slug of dirs) {
    const indexPath = path.join(TOOLS_DIR, slug, "index.html");
    if (!fs.existsSync(indexPath)) continue;
    const html = fs.readFileSync(indexPath, "utf8");
    const newHtml = injectShare(html);
    if (newHtml === null) continue;
    if (!dryRun) fs.writeFileSync(indexPath, newHtml, "utf8");
    added++;
    console.log(dryRun ? "[dry-run] would add share: " : "added share: ", slug);
  }
  console.log("\n결과: added share to", added, "tools");
  if (dryRun && added > 0) console.log("실제 적용하려면 --dry-run 없이 실행하세요.");
}

main();
