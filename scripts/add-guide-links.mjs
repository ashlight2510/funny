#!/usr/bin/env node
/**
 * 가이드가 있는 모든 도구 index.html에 "사용 가이드" 링크를 넣습니다.
 * - app/guide/guides.js에서 (toolSlug, guideSlug) 매핑 추출
 * - public/tools/{toolSlug}/index.html에 이미 "사용 가이드"가 없으면 </body> 직전에 푸터 삽입
 *
 * 사용: node scripts/add-guide-links.mjs [--dry-run]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const GUIDES_PATH = path.join(ROOT, "app", "guide", "guides.js");
const TOOLS_DIR = path.join(ROOT, "public", "tools");

const HREF_TO_SLUG = {
  "https://heic.funnyfunny.cloud/": "heic",
  "http://heic.funnyfunny.cloud/": "heic",
  "https://sudoku.funnyfunny.cloud/": "sudoku",
  "http://sudoku.funnyfunny.cloud/": "sudoku",
  "https://flow.funnyfunny.cloud/": "flow",
  "http://flow.funnyfunny.cloud/": "flow",
};

function parseGuideToToolMap(content) {
  const map = new Map();
  const re = /slug:\s*"([^"]+)"[\s\S]*?serviceUrl:\s*"(https?:\/\/[^"]+)"/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const guideSlug = m[1];
    const serviceUrl = m[2].replace(/\/$/, "") + "/";
    let toolSlug = HREF_TO_SLUG[serviceUrl];
    if (toolSlug == null) {
      try {
        const host = new URL(serviceUrl).hostname;
        toolSlug = host.split(".")[0] || "";
      } catch {
        continue;
      }
    }
    if (toolSlug) map.set(toolSlug, guideSlug);
  }
  return map;
}

/** 상위 도구에 노출할 추가 가이드 (메인과 다른 가이드만; slug → [{ slug, label }]) */
const EXTRA_GUIDE_LINKS = {
  tax: [{ slug: "paystub-read-how", label: "급여명세서" }],
};

function buildFooter(guideSlug, toolSlug) {
  const base = `<a href="https://funnyfunny.cloud/guide/${guideSlug}/">사용 가이드</a>`;
  const extras = EXTRA_GUIDE_LINKS[toolSlug];
  const extraLinks = extras
    ? extras.map((e) => `<a href="https://funnyfunny.cloud/guide/${e.slug}/">${e.label}</a>`).join(" · ")
    : "";
  const middle = extraLinks ? ` · ${extraLinks}` : "";
  return `<div style="text-align:center;margin:16px 0;font-size:14px;">${base}${middle} · <a href="https://funnyfunny.cloud/">다른 서비스</a></div>\n`;
}

function injectFooter(html, guideSlug, toolSlug) {
  const footer = buildFooter(guideSlug, toolSlug || "");
  if (html.includes("사용 가이드") || html.includes(`guide/${guideSlug}`)) {
    return null;
  }
  return html.replace(/\s*<\/body\s*>/i, `${footer}</body>`);
}

function main() {
  const dryRun = process.argv.includes("--dry-run");

  const guidesContent = fs.readFileSync(GUIDES_PATH, "utf8");
  const toolToGuide = parseGuideToToolMap(guidesContent);

  const toolSlugs = fs.readdirSync(TOOLS_DIR).filter((name) => {
    const stat = fs.statSync(path.join(TOOLS_DIR, name));
    return stat.isDirectory();
  });

  let added = 0;
  let skipped = 0;
  let noGuide = 0;
  let noFile = 0;

  for (const toolSlug of toolSlugs) {
    const guideSlug = toolToGuide.get(toolSlug);
    if (!guideSlug) {
      noGuide++;
      continue;
    }
    const indexPath = path.join(TOOLS_DIR, toolSlug, "index.html");
    if (!fs.existsSync(indexPath)) {
      noFile++;
      continue;
    }
    const html = fs.readFileSync(indexPath, "utf8");
    const newHtml = injectFooter(html, guideSlug, toolSlug);
    if (newHtml === null) {
      skipped++;
      continue;
    }
    if (!dryRun) {
      fs.writeFileSync(indexPath, newHtml, "utf8");
    }
    added++;
    console.log(dryRun ? "[dry-run] would add: " : "added: ", toolSlug, "->", guideSlug);
  }

  console.log("\n결과:", { added, skipped, noGuide, noFile });
  if (dryRun && added > 0) console.log("\n실제 적용하려면 --dry-run 없이 실행하세요.");
}

main();
