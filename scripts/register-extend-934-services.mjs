#!/usr/bin/env node
/**
 * services.js에 확장 934개 등록.
 * - getAllServices: game-120 다음에 934개 항목 삽입
 * - CALCULATOR_SLUGS: calc-001~065 (coin-flip 앞), game-121~319 (끝)
 * - TEST_SLUGS: test-301~470
 * - UTIL_SLUGS + getUtils
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { CALC_65, TEST_170, UTIL_500, GAME_199 } from "./tools-extend-934-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const servicesPath = path.join(__dirname, "..", "app", "lib", "services.js");
let content = fs.readFileSync(servicesPath, "utf8");

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const all934 = [...CALC_65, ...TEST_170, ...UTIL_500, ...GAME_199];
const tag = (t) => t.slug.split("-")[0];

const serviceLines = all934
  .map(
    (t) =>
      `    { href: "https://funnyfunny.cloud/tools/${t.slug}/", icon: "${t.icon}", title: isKo ? "${esc(t.titleKo)}" : "${esc(t.titleKo)}", desc: isKo ? "${esc(t.descKo)}." : "${esc(t.descKo)}.", tags: isKo ? ["${tag(t)}"] : ["${tag(t)}"] },`
  )
  .join("\n");

// 1) getAllServices: game-120 다음에 934개 삽입 (time.funnyfunny 직전)
if (!content.includes('href: "https://funnyfunny.cloud/tools/game-120/"')) throw new Error("game-120 entry not found");
if (!content.includes('href: "https://time.funnyfunny.cloud"')) throw new Error("time.funnyfunny block not found");
content = content.replace(
  /(\{ href: "https:\/\/funnyfunny\.cloud\/tools\/game-120\/"[^}]+\},)\n(\s*\{\s*\n\s*href: "https:\/\/time\.funnyfunny\.cloud")/,
  `$1\n${serviceLines}\n$2`
);

// 2) CALCULATOR_SLUGS: "coin-flip" 앞에 calc-001~065
const calcSlugs = CALC_65.map((t) => `"${t.slug}"`).join(", ");
content = content.replace(
  /"coin-flip", "rps"/,
  `"${CALC_65.map((t) => t.slug).join('", "')}", "coin-flip", "rps"`
);

// 3) CALCULATOR_SLUGS: game-120 뒤에 game-121~319
const game199Slugs = GAME_199.map((t) => `"${t.slug}"`).join(", ");
content = content.replace(
  /"game-120",\n\];/,
  `"game-120", ${game199Slugs},\n];`
);

// 4) TEST_SLUGS: test-300 뒤에 test-301~470
const test170Slugs = TEST_170.map((t) => `"${t.slug}"`).join(", ");
content = content.replace(
  /"test-300",\s*\n\s*\];/,
  `"test-300", ${test170Slugs},\n];`
);

// 5) UTIL_SLUGS + getUtils: GAME_SLUGS 다음에 추가
const utilSlugs = UTIL_500.map((t) => `"${t.slug}"`).join(", ");
content = content.replace(
  /const GAME_SLUGS = CALCULATOR_SLUGS\.slice\(CALCULATOR_SLUGS\.indexOf\("coin-flip"\)\);\n\nexport function getCalculators/,
  `const GAME_SLUGS = CALCULATOR_SLUGS.slice(CALCULATOR_SLUGS.indexOf("coin-flip"));\n\n/** 유틸·인사이트 도구 슬러그 */\nconst UTIL_SLUGS = [\n  ${utilSlugs},\n];\n\nexport function getCalculators`
);

content = content.replace(
  /export function getGames\(lang = "en"\) \{\n  const services = getAllServices\(lang\);\n  return services\.filter\(\(s\) => GAME_SLUGS\.includes\(hrefToSlug\(s\.href\)\)\);\n\}/,
  `export function getGames(lang = "en") {\n  const services = getAllServices(lang);\n  return services.filter((s) => GAME_SLUGS.includes(hrefToSlug(s.href)));\n}\n\nexport function getUtils(lang = "en") {\n  const services = getAllServices(lang);\n  return services.filter((s) => UTIL_SLUGS.includes(hrefToSlug(s.href)));\n}`
);

fs.writeFileSync(servicesPath, content, "utf8");
console.log("Registered 934 services (65 calc + 170 test + 500 util + 199 game) in services.js");
