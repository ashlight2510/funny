#!/usr/bin/env node
/**
 * getSeoGuides 420개, constants randomTools 420개, list-priority-urls 420개 추가.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TOOLS_420 } from "./tools-420-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

// 1) getSeoGuides: joke-clean-how 다음, today-well-done 전에 420줄 삽입
const servicesPath = path.join(ROOT, "app", "lib", "services.js");
let services = fs.readFileSync(servicesPath, "utf8");
const seoLines = TOOLS_420.map(
  (t) =>
    `  { slug: "${t.slug}-how", emoji: "${t.icon}", title: isKo ? "${t.titleKo.replace(/"/g, '\\"')} 사용법" : "${t.titleKo.replace(/"/g, '\\"')} How-To", desc: isKo ? "${t.descKo}." : "${t.descKo}." },`
).join("\n");
const marker = '  { slug: "joke-clean-how", emoji: "😄", title: isKo ? "청결한 농담 한줄 사용법" : "Joke Clean How-To", desc: isKo ? "농담 1줄." : "농담 1줄." },';
const nextBlock = '\n  {\n    slug: "today-well-done"';
if (!services.includes(marker) || !services.includes(nextBlock)) throw new Error("marker not found");
services = services.replace(
  marker + nextBlock,
  marker + "\n" + seoLines + nextBlock
);
fs.writeFileSync(servicesPath, services, "utf8");
console.log("Added 420 getSeoGuides");

// 2) constants.js randomTools
const constantsPath = path.join(ROOT, "app", "lib", "constants.js");
let constants = fs.readFileSync(constantsPath, "utf8");
const toolLines = TOOLS_420.map((t) => `  \`\${TOOLS_BASE}/${t.slug}/\`,`).join("\n");
constants = constants.replace(
  "`${TOOLS_BASE}/joke-clean/`,\n];",
  `\`\${TOOLS_BASE}/joke-clean/\`,\n${toolLines}\n];`
);
fs.writeFileSync(constantsPath, constants, "utf8");
console.log("Added 420 to randomTools");

// 3) list-priority-urls.mjs
const priorityPath = path.join(ROOT, "scripts", "list-priority-urls.mjs");
let priority = fs.readFileSync(priorityPath, "utf8");
const priorityLines = TOOLS_420.map((t) => `  "/tools/${t.slug}/",`).join("\n");
// Add after /games/
priority = priority.replace(
  '  "/games/",\n];',
  `  "/games/",\n${priorityLines}\n];`
);
fs.writeFileSync(priorityPath, priority, "utf8");
console.log("Added 420 to PRIORITY_PATHS");

// 4) guides.js: joke-clean-how 다음, winter-ruin-top1 전에 420줄 삽입
const guidesPath = path.join(ROOT, "app", "guide", "guides.js");
let guides = fs.readFileSync(guidesPath, "utf8");
const guideLines = TOOLS_420.map(
  (t) =>
    `  { slug: "${t.slug}-how", title: "${t.titleKo.replace(/"/g, '\\"')} 사용법", subtitle: "${t.descKo}.", category: "게임", heroEmoji: "${t.icon}", serviceUrl: "https://funnyfunny.cloud/tools/${t.slug}/", ctaLabel: "${t.titleKo.replace(/"/g, '\\"')} 열기", metaDescription: "${t.titleKo.replace(/"/g, '\\"')}. ${t.descKo}.", keywords: ["${t.slug.split("-")[0]}"], sections: [{ heading: "사용 방법", body: ["버튼을 누르면 결과가 나옵니다."] }], faq: [{ question: "무료인가요?", answer: "네. 무료로 사용할 수 있습니다." }] },`
).join("\n");
const guideMarker = '  { slug: "joke-clean-how", title: "청결한 농담 한줄 사용법", subtitle: "농담 1줄.", category: "게임", heroEmoji: "😄", serviceUrl: "https://funnyfunny.cloud/tools/joke-clean/", ctaLabel: "청결한 농담 한줄 열기", metaDescription: "청결한 농담 한줄. 농담 1줄.", keywords: ["청결한", "농담", "한줄"], sections: [{ heading: "사용 방법", body: ["버튼을 누르면 결과가 나옵니다."] }], faq: [{ question: "무료인가요?", answer: "네. 무료로 사용할 수 있습니다." }] },';
const guideNext = '\n    {\n    slug: "winter-ruin-top1"';
if (!guides.includes(guideMarker) || !guides.includes(guideNext)) throw new Error("guides marker not found");
guides = guides.replace(guideMarker + guideNext, guideMarker + "\n" + guideLines + guideNext);
fs.writeFileSync(guidesPath, guides, "utf8");
console.log("Added 420 to guides.js");

console.log("Done.");