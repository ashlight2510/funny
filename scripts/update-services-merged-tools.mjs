#!/usr/bin/env node
/**
 * 통합 도구 120개 반영: services.js에서 calc/test/util/game 벌크 항목 제거 후
 * CALC_10 + TEST_40 + UTIL_50 + GAME_20 (120개) 항목·슬러그 상수로 교체.
 * 사용: node scripts/update-services-merged-tools.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TOOLS_EXTEND_934 } from "./tools-extend-934-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const servicesPath = path.join(__dirname, "..", "app", "lib", "services.js");
let content = fs.readFileSync(servicesPath, "utf8");

const bulkHrefRe = /^\s*\{ href: "https:\/\/funnyfunny\.cloud\/tools\/(calc|test|util|game)-\d+\/".*?\},?\s*$/m;

// 1) 서비스 배열에서 벌크(calc/test/util/game-숫자) 라인 제거
const lines = content.split("\n");
const filtered = lines.filter((line) => {
  const m = line.match(/href: "https:\/\/funnyfunny\.cloud\/tools\/(calc|test|util|game)-\d+\//);
  return !m;
});
content = filtered.join("\n");

// 2) 120개 서비스 항목 삽입: time.funnyfunny.cloud 블록 직전에
const serviceLines = TOOLS_EXTEND_934.map(
  (t) =>
    `    { href: "https://funnyfunny.cloud/tools/${t.slug}/", icon: "${t.icon}", title: isKo ? "${t.titleKo.replace(/"/g, '\\"')}" : "${t.titleKo.replace(/"/g, '\\"')}", desc: isKo ? "${t.descKo}." : "${t.descKo}.", tags: isKo ? ["${t.slug.split("-")[0]}"] : ["${t.slug.split("-")[0]}"] },`
).join("\n");

const timeBlock = `    {
      href: "https://time.funnyfunny.cloud",`;
if (!content.includes(timeBlock)) throw new Error("time.funnyfunny.cloud block not found");
content = content.replace(timeBlock, serviceLines + "\n" + timeBlock);

// 3) CALCULATOR_SLUGS: calc-001~065 → calc-001~010
content = content.replace(
  /"calc-001", "calc-002", "calc-003", "calc-004", "calc-005", "calc-006", "calc-007", "calc-008", "calc-009", "calc-010", "calc-011", "calc-012", "calc-013", "calc-014", "calc-015", "calc-016", "calc-017", "calc-018", "calc-019", "calc-020", "calc-021", "calc-022", "calc-023", "calc-024", "calc-025", "calc-026", "calc-027", "calc-028", "calc-029", "calc-030", "calc-031", "calc-032", "calc-033", "calc-034", "calc-035", "calc-036", "calc-037", "calc-038", "calc-039", "calc-040", "calc-041", "calc-042", "calc-043", "calc-044", "calc-045", "calc-046", "calc-047", "calc-048", "calc-049", "calc-050", "calc-051", "calc-052", "calc-053", "calc-054", "calc-055", "calc-056", "calc-057", "calc-058", "calc-059", "calc-060", "calc-061", "calc-062", "calc-063", "calc-064", "calc-065", "coin-flip"/,
  '"calc-001", "calc-002", "calc-003", "calc-004", "calc-005", "calc-006", "calc-007", "calc-008", "calc-009", "calc-010", "coin-flip"'
);

// game-001~319 → game-001~020 (다음 줄에 있음)
const gameSlugs = Array.from({ length: 20 }, (_, i) => `"game-${String(i + 1).padStart(3, "0")}"`).join(", ");
const gameOldRe = /"game-001", "game-002", "game-003"[\s\S]*?"game-319"/;
if (!gameOldRe.test(content)) throw new Error("game-001..game-319 block not found");
content = content.replace(gameOldRe, gameSlugs);

// 4) TEST_SLUGS: test-001~470 → test-001~040
const testCore = `"money", "coffee", "beauty", "cosmetics", "ego", "human", "alcohol", "lazy",
  "mental", "product", "rest", "dailycheck", "melancholy", "energy", "drain",
  "senseyear", "hairloss", "bmi", "specific", "invest", "next", "winter",
  "today", "todo", "dream", "fortune", "heal", "need", "mind", "temple"`;
const testSlugs = Array.from({ length: 40 }, (_, i) => `"test-${String(i + 1).padStart(3, "0")}"`).join(", ");
content = content.replace(
  /"temple",\s*\n\s*"test-001"[\s\S]*?"test-470"/,
  `"temple",\n  ${testSlugs}`
);

// 5) UTIL_SLUGS: util-001~500 → util-001~050
const utilSlugs = Array.from({ length: 50 }, (_, i) => `"util-${String(i + 1).padStart(3, "0")}"`).join(", ");
content = content.replace(
  /"util-001", "util-002"[\s\S]*?"util-500"/,
  utilSlugs
);

fs.writeFileSync(servicesPath, content, "utf8");
console.log("Updated services.js: 120 merged tools (10 calc + 40 test + 50 util + 20 game), slug constants adjusted.");
console.log("Run: node scripts/generate-extend-934-tools.mjs  (then do not run generate-420-tools.mjs)");