#!/usr/bin/env node
/**
 * FunnyPick 정적 파일이 /tools/pick/ 아래에 있을 때,
 * Next export 기본 경로 `/_next/`가 사이트 루트를 가리켜 CSS/JS가 깨지는 문제를 고칩니다.
 *
 * 사용: node scripts/fix-pick-asset-paths.mjs
 * (public/tools/pick 이하 html/js/json/txt 에서 `/_next/` → `/tools/pick/_next/`)
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readdirSync, statSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', 'public', 'tools', 'pick');
const PAT = /(?<!\/tools\/pick)\/_next\//g;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.(html|js|json|txt)$/.test(name)) out.push(p);
  }
  return out;
}

let n = 0;
let files = 0;
for (const path of walk(ROOT)) {
  let s;
  try {
    s = readFileSync(path, 'utf8');
  } catch {
    continue;
  }
  if (!s.includes('/_next/')) continue;
  const ns = s.replace(PAT, '/tools/pick/_next/');
  if (ns !== s) {
    writeFileSync(path, ns, 'utf8');
    files++;
    n += (s.match(PAT) || []).length;
  }
}
console.log('[fix-pick-asset-paths] updated', files, 'files, ~', n, 'replacements');
