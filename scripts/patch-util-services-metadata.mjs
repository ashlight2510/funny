#!/usr/bin/env node
/**
 * services.js 내 util-001~500 항목의 title/desc를 UTIL_500(주제 기반) 데이터로 일괄 교체.
 * 사용: node scripts/patch-util-services-metadata.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { UTIL_500 } from "./tools-extend-934-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const servicesPath = path.join(__dirname, "..", "app", "lib", "services.js");

const utilBySlug = new Map(UTIL_500.map((u) => [u.slug, u]));

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

let content = fs.readFileSync(servicesPath, "utf8");
const lines = content.split("\n");
const slugRe = /href: "https:\/\/funnyfunny\.cloud\/tools\/(util-\d+)\/"/;

for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(slugRe);
  if (!m) continue;
  const slug = m[1];
  const u = utilBySlug.get(slug);
  if (!u) continue;
  const titleEsc = esc(u.titleKo);
  const descEsc = esc(u.descKo);
  const descSuffix = u.descKo.endsWith(".") ? "" : ".";
  lines[i] = `    { href: "https://funnyfunny.cloud/tools/${slug}/", icon: "${u.icon}", title: isKo ? "${titleEsc}" : "${titleEsc}", desc: isKo ? "${descEsc}${descSuffix}" : "${descEsc}${descSuffix}", tags: isKo ? ["util"] : ["util"] },`;
}

fs.writeFileSync(servicesPath, lines.join("\n"), "utf8");
console.log("Patched util-001~500 title/desc in services.js");
