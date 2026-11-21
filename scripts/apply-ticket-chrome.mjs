#!/usr/bin/env node
// Inject Ticket Booth chrome into static public/tools/{slug}/index.html
// Skips arcade page and arcade redirect stubs. Idempotent via data-ff-ticket-chrome.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const TOOLS = path.join(ROOT, "public", "tools");
const MARK = "data-ff-ticket-chrome";
const CSS_HREF = "/assets/ticket-booth.css";

const HEAD_SNIP = `  <link rel="stylesheet" href="${CSS_HREF}" ${MARK}="1" />\n`;
const CHROME = `<!-- ff-ticket-chrome -->
<div class="ff-awning" ${MARK}="1"></div>
<div class="ff-chrome" ${MARK}="1">
  <a class="ff-brand" href="https://funnyfunny.cloud/">FUNNYFUNNY <span>CLOUD</span></a>
  <div class="ff-links">
    <a href="https://funnyfunny.cloud/calculators/">계산기</a>
    <a href="https://funnyfunny.cloud/tests/">테스트</a>
    <a href="https://funnyfunny.cloud/tools/arcade/">뽑기통</a>
    <a href="https://funnyfunny.cloud/">홈</a>
  </div>
</div>
`;
const FOOT = `<div class="ff-foot" ${MARK}="1"><a href="https://funnyfunny.cloud/">← FunnyFunny Cloud</a> · <a href="https://funnyfunny.cloud/tools/arcade/">뽑기통</a></div>
`;

function isArcadeRedirect(html) {
  const head = html.slice(0, 800);
  return (
    /noindex/i.test(head) &&
    /tools\/arcade/i.test(head) &&
    (/meta http-equiv=["']?refresh/i.test(head) ||
      /location\.replace/i.test(html.slice(0, 2000)))
  );
}

function stripExisting(html) {
  html = html.replace(/\s*<link[^>]*data-ff-ticket-chrome[^>]*>\s*/gi, "\n");
  html = html.replace(/\s*<!-- ff-ticket-chrome -->\s*/gi, "\n");
  html = html.replace(/\s*<div class="ff-awning"[^>]*><\/div>\s*/gi, "\n");
  html = html.replace(
    /\s*<div class="ff-chrome"[^>]*>[\s\S]*?<\/div>\s*/gi,
    "\n"
  );
  html = html.replace(
    /\s*<div class="ff-foot"[^>]*>[\s\S]*?<\/div>\s*/gi,
    "\n"
  );
  return html;
}

function inject(html) {
  html = stripExisting(html);
  if (/<\/head>/i.test(html)) {
    html = html.replace(/<\/head>/i, HEAD_SNIP + "</head>");
  } else {
    html = HEAD_SNIP + html;
  }
  if (/<body[^>]*>/i.test(html)) {
    html = html.replace(/<body([^>]*)>/i, `<body$1>\n${CHROME}`);
  } else {
    html = CHROME + html;
  }
  if (/<\/body>/i.test(html)) {
    html = html.replace(/<\/body>/i, FOOT + "</body>");
  } else {
    html += FOOT;
  }
  return html;
}

let applied = 0;
let skippedRedirect = 0;
let skippedArcade = 0;

for (const name of fs.readdirSync(TOOLS)) {
  const dir = path.join(TOOLS, name);
  if (!fs.statSync(dir).isDirectory()) continue;
  const file = path.join(dir, "index.html");
  if (!fs.existsSync(file)) continue;
  if (name === "arcade") {
    skippedArcade++;
    continue;
  }
  let html = fs.readFileSync(file, "utf8");
  if (isArcadeRedirect(html)) {
    skippedRedirect++;
    continue;
  }
  fs.writeFileSync(file, inject(html));
  applied++;
}

console.log(JSON.stringify({ applied, skippedRedirect, skippedArcade }, null, 2));
