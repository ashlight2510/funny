#!/usr/bin/env node
/**
 * public/tools/ 각 도구 index.html에 "링크 복사" 공유 버튼을 넣습니다.
 * 이미 있으면 건너뜁니다. (id="tool-share-block" 체크)
 * 사용: node scripts/add-share-to-tools.mjs [--dry-run]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const TOOLS_DIR = path.join(ROOT, "public", "tools");

const SHARE_BLOCK = `<div id="tool-share-block">
<button type="button" id="btnShare" onclick="var u=location.href;if(navigator.clipboard)navigator.clipboard.writeText(u).then(function(){var t=document.getElementById('tool-share-toast');if(t){t.textContent='복사했어요';t.style.display='inline';setTimeout(function(){t.style.display='none';},1500);}});try{if(window.amplitude)window.amplitude.track('share_click',{method:'copy',tool:location.pathname.split('/').filter(Boolean).pop()||''});}catch(e){}">링크 복사</button>
<span id="tool-share-toast" style="display:none;"></span>
</div>
`;
const SHARE_CSS = `
#tool-share-block { max-width: 560px; margin: 16px auto 24px; padding: 0 14px; text-align: center; font-size: 14px; }
#tool-share-block button, #tool-share-block .btn { padding: 10px 18px; border-radius: 10px; font-size: 14px; cursor: pointer; border: 1px solid var(--border, #334155); background: var(--card, #1e293b); color: var(--text, #f1f5f9); font-weight: 500; }
#tool-share-block #tool-share-toast { display: none; margin-left: 10px; color: var(--muted, #94a3b8); font-size: 13px; }
`;

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const toolSlugs = fs.readdirSync(TOOLS_DIR).filter((name) => {
    const stat = fs.statSync(path.join(TOOLS_DIR, name));
    return stat.isDirectory();
  });

  let added = 0;
  let skipped = 0;

  for (const toolSlug of toolSlugs) {
    const indexPath = path.join(TOOLS_DIR, toolSlug, "index.html");
    if (!fs.existsSync(indexPath)) {
      skipped++;
      continue;
    }
    const html = fs.readFileSync(indexPath, "utf8");
    if (html.includes("tool-share-block") || html.includes('id="tool-share-block"')) {
      skipped++;
      continue;
    }
    let newHtml = html;
    if (!newHtml.includes("#tool-share-block")) {
      newHtml = newHtml.replace(/\s*<\/style\s*>/i, SHARE_CSS + "\n  </style>");
    }
    newHtml = newHtml.replace(/\s*<\/body\s*>/i, `${SHARE_BLOCK}</body>`);
    if (newHtml === html) {
      skipped++;
      continue;
    }
    if (!dryRun) fs.writeFileSync(indexPath, newHtml, "utf8");
    added++;
    if (added <= 15) console.log(dryRun ? "[dry-run] " : "", toolSlug);
  }

  if (added > 15) console.log(dryRun ? "[dry-run] ... and " + (added - 15) + " more" : "... and " + (added - 15) + " more");
  console.log("\n결과: added=" + added + ", skipped=" + skipped);
  if (dryRun && added > 0) console.log("실제 적용: --dry-run 없이 실행하세요.");
}

main();
