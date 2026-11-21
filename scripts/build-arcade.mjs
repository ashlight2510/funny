#!/usr/bin/env node
/**
 * Build Funny Arcade catalog + redirect stubs for copy-paste pick tools.
 * Run from repo root: node scripts/build-arcade.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const TOOLS = path.join(ROOT, "public", "tools");
const ARCADE_DIR = path.join(TOOLS, "arcade");
const SERVICES = path.join(ROOT, "app", "lib", "services.js");

function extractArrayLiteral(name, src) {
  const m = src.match(new RegExp(`const ${name} = \\[([\\s\\S]*?)\\];`));
  if (!m) return [];
  return [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
}

const servicesSrc = fs.readFileSync(SERVICES, "utf8");
const CALCULATOR_SLUGS = extractArrayLiteral("CALCULATOR_SLUGS", servicesSrc);
const TEST_SLUGS = extractArrayLiteral("TEST_SLUGS", servicesSrc);
const UTIL_SLUGS = extractArrayLiteral("UTIL_SLUGS", servicesSrc);

const coinIdx = CALCULATOR_SLUGS.indexOf("coin-flip");
if (coinIdx < 0) throw new Error("coin-flip not found in CALCULATOR_SLUGS");

const ARCADE_SLUGS = [
  ...new Set([
    ...CALCULATOR_SLUGS.slice(coinIdx),
    ...CALCULATOR_SLUGS.filter((s) => /^calc-\d+$/.test(s)),
    ...TEST_SLUGS.filter((s) => /^test-\d+$/.test(s)),
    ...UTIL_SLUGS,
  ]),
].sort();

fs.writeFileSync(
  path.join(ROOT, "scripts", "arcade-slugs.json"),
  JSON.stringify(ARCADE_SLUGS, null, 2) + "\n"
);

function parseArr(html) {
  const m = html.match(/var\s+arr\s*=\s*(\[[\s\S]*?\]);/);
  if (!m) return null;
  try {
    return JSON.parse(m[1].replace(/'/g, '"'));
  } catch {
    try {
      // eslint-disable-next-line no-new-func
      return Function(`"use strict"; return (${m[1]})`)();
    } catch {
      return null;
    }
  }
}

function parseTitle(html) {
  const h1 = html.match(/<h1[^>]*>([^<]+)<\/h1>/);
  if (h1) return h1[1].trim();
  const t = html.match(/<title>([^|<]+)/);
  return t ? t[1].trim() : "";
}

function parseIcon(html) {
  const m = html.match(/brand-badge[^>]*>\s*([^<\s]+)/);
  return m ? m[1].trim() : "🎲";
}

function parseSub(html) {
  const m = html.match(/class="sub"[^>]*>([^<]+)/);
  return m ? m[1].trim() : "";
}

const modes = [];
const missing = [];

for (const slug of ARCADE_SLUGS) {
  const file = path.join(TOOLS, slug, "index.html");
  if (!fs.existsSync(file)) {
    missing.push(slug);
    modes.push({
      slug,
      icon: "🎲",
      title: slug,
      sub: "",
      items: [slug],
    });
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  const items = parseArr(html);
  modes.push({
    slug,
    icon: parseIcon(html),
    title: parseTitle(html) || slug,
    sub: parseSub(html),
    items: Array.isArray(items) && items.length ? items : ["?"],
  });
}

fs.mkdirSync(ARCADE_DIR, { recursive: true });
fs.writeFileSync(
  path.join(ARCADE_DIR, "modes.json"),
  JSON.stringify({ generatedAt: new Date().toISOString(), modes }, null, 2) +
    "\n"
);

const arcadeHtml = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>뽑기통 | 랜덤·게임 모음 | FunnyFunny Cloud</title>
  <meta name="description" content="오늘 뭐 먹지, 주사위, 운세, 닉네임 등 랜덤 뽑기를 한곳에서. 모드를 고르고 한 번 뽑으세요." />
  <link rel="canonical" href="https://funnyfunny.cloud/tools/arcade/" />
  <meta name="robots" content="index,follow" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1204894220949193" crossorigin="anonymous"></script>
  <style>
    :root{--bg:#0f172a;--card:#1e293b;--text:#f1f5f9;--muted:#94a3b8;--accent:#8b5cf6;--border:#334155;--chip:#334155;}
    *{box-sizing:border-box;}
    body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;}
    .wrap{max-width:640px;margin:0 auto;padding:28px 16px 80px;}
    .brand{display:flex;align-items:center;gap:14px;margin-bottom:8px;}
    .brand-badge{width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,#8b5cf6,#6366f1);display:grid;place-items:center;font-size:24px;}
    h1{margin:0 0 6px;font-size:24px;font-weight:800;line-height:1.25;}
    .sub{margin:0 0 20px;color:var(--muted);font-size:14px;line-height:1.45;}
    .search{width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--card);color:var(--text);font-size:15px;margin-bottom:14px;}
    .chips{display:flex;flex-wrap:wrap;gap:8px;max-height:220px;overflow:auto;margin-bottom:18px;padding-bottom:4px;}
    .chip{border:1px solid var(--border);background:var(--chip);color:var(--text);border-radius:999px;padding:8px 12px;font-size:13px;cursor:pointer;white-space:nowrap;}
    .chip.active{background:var(--accent);border-color:var(--accent);}
    .panel{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:22px;margin-bottom:20px;box-shadow:0 4px 24px rgba(0,0,0,.15);}
    .mode-head{display:flex;align-items:center;gap:12px;margin-bottom:16px;}
    .mode-head .ico{font-size:28px;}
    .mode-head h2{margin:0;font-size:18px;}
    .mode-head p{margin:4px 0 0;color:var(--muted);font-size:13px;}
    .btn{padding:14px 24px;border-radius:12px;border:none;font-weight:600;font-size:16px;cursor:pointer;background:var(--accent);color:#fff;width:100%;}
    .result{display:none;margin-top:16px;padding-top:16px;border-top:1px solid var(--border);text-align:center;font-size:20px;line-height:1.6;font-weight:700;}
    .result.show{display:block;}
    .footer-links{text-align:center;font-size:14px;margin-top:16px;}
    .footer-links a{color:var(--accent);text-decoration:none;}
    .count{color:var(--muted);font-size:12px;margin-bottom:10px;}
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div class="brand">
        <div class="brand-badge">🎰</div>
        <div>
          <h1>뽑기통</h1>
        </div>
      </div>
      <p class="sub">음식·주사위·운세·닉네임 등 랜덤 뽑기를 한곳에서. 모드를 고르고 한 번 뽑으세요.</p>
    </header>
    <input class="search" id="search" type="search" placeholder="모드 검색 (예: 음식, 주사위, 운세)" autocomplete="off" />
    <p class="count" id="count"></p>
    <div class="chips" id="chips"></div>
    <div class="panel">
      <div class="mode-head">
        <div class="ico" id="modeIcon">🎲</div>
        <div>
          <h2 id="modeTitle">모드를 선택하세요</h2>
          <p id="modeSub">위에서 고르거나 검색하세요</p>
        </div>
      </div>
      <button type="button" class="btn" id="btnPick" disabled>뽑기</button>
      <div class="result" id="result"><span id="out"></span></div>
    </div>
    <div style="text-align:center;margin:16px 0;">
      <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1204894220949193" data-ad-slot="7300458753" data-ad-format="auto" data-full-width-responsive="true"></ins>
    </div>
    <script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>
    <div class="footer-links"><a href="https://funnyfunny.cloud/">다른 서비스</a></div>
  </div>
  <script>
(function(){
  var modes = [];
  var current = null;
  var chipsEl = document.getElementById('chips');
  var searchEl = document.getElementById('search');
  var countEl = document.getElementById('count');
  var btn = document.getElementById('btnPick');
  var result = document.getElementById('result');
  var out = document.getElementById('out');

  function qsMode(){
    try { return new URLSearchParams(location.search).get('m') || ''; }
    catch(e){ return ''; }
  }

  function setUrl(slug){
    var u = new URL(location.href);
    if (slug) u.searchParams.set('m', slug); else u.searchParams.delete('m');
    history.replaceState(null, '', u.pathname + u.search + u.hash);
  }

  function selectMode(mode, push){
    current = mode;
    document.getElementById('modeIcon').textContent = mode.icon || '🎲';
    document.getElementById('modeTitle').textContent = mode.title || mode.slug;
    document.getElementById('modeSub').textContent = mode.sub || mode.slug;
    btn.disabled = !(mode.items && mode.items.length);
    result.classList.remove('show');
    out.textContent = '';
    Array.prototype.forEach.call(chipsEl.querySelectorAll('.chip'), function(el){
      el.classList.toggle('active', el.dataset.slug === mode.slug);
    });
    if (push !== false) setUrl(mode.slug);
  }

  function renderChips(filter){
    var q = (filter || '').trim().toLowerCase();
    var list = modes.filter(function(m){
      if (!q) return true;
      return (m.title||'').toLowerCase().indexOf(q) >= 0
        || (m.sub||'').toLowerCase().indexOf(q) >= 0
        || (m.slug||'').toLowerCase().indexOf(q) >= 0;
    });
    countEl.textContent = list.length + ' / ' + modes.length + ' 모드';
    chipsEl.innerHTML = '';
    list.forEach(function(m){
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (current && current.slug === m.slug ? ' active' : '');
      b.dataset.slug = m.slug;
      b.textContent = (m.icon ? m.icon + ' ' : '') + (m.title || m.slug);
      b.addEventListener('click', function(){ selectMode(m); });
      chipsEl.appendChild(b);
    });
  }

  btn.addEventListener('click', function(){
    if (!current || !current.items || !current.items.length) return;
    var item = current.items[Math.floor(Math.random() * current.items.length)];
    out.textContent = item;
    result.classList.add('show');
  });

  searchEl.addEventListener('input', function(){ renderChips(searchEl.value); });

  fetch('./modes.json').then(function(r){ return r.json(); }).then(function(data){
    modes = data.modes || [];
    renderChips('');
    var want = qsMode();
    var found = modes.find(function(m){ return m.slug === want; });
    if (found) selectMode(found, false);
    else if (modes[0]) selectMode(modes.find(function(m){ return m.slug === 'random-food'; }) || modes[0], !want);
  }).catch(function(){
    countEl.textContent = '모드를 불러오지 못했습니다.';
  });
})();
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(ARCADE_DIR, "index.html"), arcadeHtml);

function redirectHtml(slug) {
  const dest = `https://funnyfunny.cloud/tools/arcade/?m=${encodeURIComponent(slug)}`;
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Redirecting… | FunnyFunny Cloud</title>
  <meta name="robots" content="noindex,follow" />
  <link rel="canonical" href="${dest}" />
  <meta http-equiv="refresh" content="0;url=${dest}" />
  <script>location.replace(${JSON.stringify(dest)});</script>
</head>
<body>
  <p><a href="${dest}">뽑기통으로 이동</a></p>
</body>
</html>
`;
}

let redirected = 0;
for (const slug of ARCADE_SLUGS) {
  const dir = path.join(TOOLS, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), redirectHtml(slug));
  redirected++;
}

// Also point /tools/random/ at arcade root
const randomDir = path.join(TOOLS, "random");
fs.mkdirSync(randomDir, { recursive: true });
fs.writeFileSync(
  path.join(randomDir, "index.html"),
  redirectHtml("random-food").replace(
    /\?m=random-food/g,
    "/"
  ).replace(
    "https://funnyfunny.cloud/tools/arcade//",
    "https://funnyfunny.cloud/tools/arcade/"
  )
);
// fix random redirect properly
fs.writeFileSync(
  path.join(randomDir, "index.html"),
  `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Redirecting… | FunnyFunny Cloud</title>
  <meta name="robots" content="noindex,follow" />
  <link rel="canonical" href="https://funnyfunny.cloud/tools/arcade/" />
  <meta http-equiv="refresh" content="0;url=https://funnyfunny.cloud/tools/arcade/" />
  <script>location.replace("https://funnyfunny.cloud/tools/arcade/");</script>
</head>
<body>
  <p><a href="https://funnyfunny.cloud/tools/arcade/">뽑기통으로 이동</a></p>
</body>
</html>
`
);

console.log(
  JSON.stringify(
    {
      arcadeSlugs: ARCADE_SLUGS.length,
      modes: modes.length,
      missingHtml: missing.length,
      redirected,
      out: path.relative(ROOT, path.join(ARCADE_DIR, "modes.json")),
    },
    null,
    2
  )
);
if (missing.length) {
  console.log("missing sample:", missing.slice(0, 20));
}
