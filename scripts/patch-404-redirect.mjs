#!/usr/bin/env node
/**
 * out/404.html 의 <head> 바로 다음에 인라인 스크립트를 넣어
 * /tools/xxx (슬래시 없음) 요청 시 React 로드 전에 /tools/xxx/ 로 리다이렉트
 */
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out404 = join(__dirname, "..", "out", "404.html");

const html = readFileSync(out404, "utf8");
const redirectScript =
  '<script>(function(){var p=window.location.pathname;if(/^\\/tools\\/[^/]+$/.test(p))window.location.replace(p+"/");})();</script>';

if (html.includes(redirectScript)) {
  console.log("patch-404-redirect: already patched");
  process.exit(0);
}

const inserted = html.replace("<head>", "<head>" + redirectScript);
writeFileSync(out404, inserted, "utf8");
console.log("patch-404-redirect: injected redirect script into out/404.html");
