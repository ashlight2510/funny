#!/usr/bin/env node
/**
 * public/tools/ 모든 index.html에서 링크 복사(공유) 블록 스타일 통일.
 * - #tool-share-block: 중앙 정렬, max-width 560px, 여백 통일
 * - 버튼/토스트: CSS 변수 사용으로 다크/라이트 테마 모두 대응
 * - 인라인 스타일 제거해 통일 CSS 적용
 * 사용: node scripts/normalize-tool-share-style.mjs [--dry-run]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const TOOLS_DIR = path.join(ROOT, "public", "tools");

const SHARE_BLOCK_CSS = `
body:has(#tool-share-block) { flex-wrap: wrap; }
#tool-share-block { max-width: 560px; margin: 16px auto 24px; padding: 0 14px; text-align: center; font-size: 14px; width: 100%; flex: 0 0 100%; }
#tool-share-block button, #tool-share-block .btn { padding: 10px 18px; border-radius: 10px; font-size: 14px; cursor: pointer; border: 1px solid var(--border, #334155); background: var(--card, #1e293b); color: var(--text, #f1f5f9); font-weight: 500; }
#tool-share-block #tool-share-toast { display: none; margin-left: 10px; color: var(--muted, #94a3b8); font-size: 13px; }
`;

const FOOTER_LINKS_CSS = `
.footer-links { max-width: 560px; margin: 16px auto; padding: 0 14px; text-align: center; font-size: 14px; }
.footer-links a { color: var(--accent, #818cf8); text-decoration: none; }
`;

function hasShareBlock(html) {
  return /id=["']tool-share-block["']|tool-share-block/.test(html);
}

function ensureShareCss(html) {
  const hasNewCss = /#tool-share-block\s*\{[^}]*flex:\s*0\s*0\s*100%/.test(html);
  if (hasNewCss) return html;
  if (/body:has\(#tool-share-block\)/.test(html)) {
    html = html.replace(/body:has\(#tool-share-block\)\s*\{[^}]*\}/g, "");
  }
  const hasExistingRule = /#tool-share-block\s*\{[^}]*\}/.test(html);
  if (hasExistingRule) {
    return html.replace(/#tool-share-block\s*\{[^}]*\}/g, () => SHARE_BLOCK_CSS.trim());
  }
  return html.replace(/\s*<\/style\s*>/i, SHARE_BLOCK_CSS + "\n  </style>");
}

function ensureFooterLinksCss(html) {
  if (!/class=["']footer-links["']|\.footer-links/.test(html)) return html;
  const hasFullFooter = /\.footer-links\s*\{[^}]*max-width:\s*560px/.test(html);
  if (hasFullFooter) return html;
  const hasExisting = /\.footer-links\s*\{[^}]*\}/.test(html);
  if (hasExisting) {
    return html.replace(/\.footer-links\s*\{[^}]*\}/g, FOOTER_LINKS_CSS.trim());
  }
  return html.replace(/\s*<\/style\s*>/i, FOOTER_LINKS_CSS + "\n  </style>");
}

function stripShareBlockInlineStyles(html) {
  let out = html;
  out = out.replace(/<div\s+id=["']tool-share-block["'][^>]*\s+style=["'][^"']*["']([^>]*)>/gi, "<div id=\"tool-share-block\"$1>");
  out = out.replace(
    /\s+style=["']padding:4px 10px;cursor:pointer;border:1px solid #ccc;border-radius:6px;background:#f8f8f8;["']/gi,
    ""
  );
  out = out.replace(
    /\s+style=["']display:none;margin-left:8px;color:#666;font-size:12px;["']/gi,
    ""
  );
  out = out.replace(
    /\s+style=["']display:none;margin-left:8px;color:#94a3b8;["']/gi,
    ""
  );
  out = out.replace(
    /\s+style=["']display:none;margin-left:8px;color:var\(--muted\);["']/gi,
    ""
  );
  if (out.includes("id=\"tool-share-toast\"") && !/id=["']tool-share-toast["'][^>]*style=/i.test(out)) {
    const toastCss = " display:none;";
    out = out.replace(
      /<span\s+id=["']tool-share-toast["']([^>]*)>/gi,
      (m, rest) => {
        if (/style=/i.test(rest)) return m;
        return `<span id="tool-share-toast" style="display:none;"${rest}>`;
      }
    );
  }
  return out;
}

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const dirs = fs.readdirSync(TOOLS_DIR).filter((name) => {
    const p = path.join(TOOLS_DIR, name);
    return fs.statSync(p).isDirectory();
  });

  let updated = 0;
  let skipped = 0;

  for (const slug of dirs) {
    const indexPath = path.join(TOOLS_DIR, slug, "index.html");
    if (!fs.existsSync(indexPath)) {
      skipped++;
      continue;
    }
    let html = fs.readFileSync(indexPath, "utf8");
    if (!hasShareBlock(html)) {
      skipped++;
      continue;
    }

    let out = ensureShareCss(html);
    out = ensureFooterLinksCss(out);
    out = stripShareBlockInlineStyles(out);
    if (out === html) {
      skipped++;
      continue;
    }

    if (!dryRun) fs.writeFileSync(indexPath, out, "utf8");
    updated++;
    if (updated <= 20) console.log(dryRun ? "[dry-run] " : "", slug);
  }

  if (updated > 20) console.log((dryRun ? "[dry-run] " : "") + "... and " + (updated - 20) + " more");
  console.log("\n결과: updated=" + updated + ", skipped=" + skipped);
  if (dryRun && updated > 0) console.log("실제 적용: --dry-run 없이 실행하세요.");
}

main();
