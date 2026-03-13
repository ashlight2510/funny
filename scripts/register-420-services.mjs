#!/usr/bin/env node
/**
 * services.js에 테스트 300 + 게임 120 등록.
 * - getAllServices: joke-clean 다음에 420개 항목 삽입
 * - TEST_SLUGS: test-001~test-300 추가
 * - CALCULATOR_SLUGS: game-001~game-120 추가
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TESTS_300, GAMES_120 } from "./tools-420-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const servicesPath = path.join(__dirname, "..", "app", "lib", "services.js");
let content = fs.readFileSync(servicesPath, "utf8");

// 1) getAllServices: joke-clean 다음에 420줄 삽입
const serviceLines = [...TESTS_300, ...GAMES_120].map(
  (t) =>
    `    { href: "https://funnyfunny.cloud/tools/${t.slug}/", icon: "${t.icon}", title: isKo ? "${t.titleKo.replace(/"/g, '\\"')}" : "${t.titleKo.replace(/"/g, '\\"')}", desc: isKo ? "${t.descKo}." : "${t.descKo}.", tags: isKo ? ["${t.slug.split("-")[0]}"] : ["${t.slug.split("-")[0]}"] },`
).join("\n");

const timeBlock = `    {
      href: "https://time.funnyfunny.cloud",`;
if (!content.includes(timeBlock)) throw new Error("time.funnyfunny.cloud block not found");
content = content.replace(
  timeBlock,
  serviceLines + "\n" + timeBlock
);

// 2) TEST_SLUGS: temple 다음에 test-001~test-300 추가
const testSlugList = TESTS_300.map((t) => `"${t.slug}"`).join(", ");
content = content.replace(
  /"temple",\s*\n\];/,
  `"temple",\n  ${testSlugList},\n];`
);

// 3) CALCULATOR_SLUGS: joke-clean 다음에 game-001~game-120 추가
const gameSlugList = GAMES_120.map((t) => `"${t.slug}"`).join(", ");
content = content.replace(
  /"joke-clean",\n\];/,
  `"joke-clean",\n  ${gameSlugList},\n];`
);

fs.writeFileSync(servicesPath, content, "utf8");
console.log("Registered 420 services (300 tests + 120 games) in services.js");
