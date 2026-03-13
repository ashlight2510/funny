#!/usr/bin/env node
/**
 * tools-420-data.mjs 기반으로 public/tools/{slug}/index.html 420개 생성.
 * 사용: node scripts/generate-420-tools.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TOOLS_420 } from "./tools-420-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const TOOLS_DIR = path.join(ROOT, "public", "tools");
const BASE = "https://funnyfunny.cloud";

const SHARE_CSS = `
body:has(#tool-share-block) { flex-wrap: wrap; }
#tool-share-block { max-width: 560px; margin: 16px auto 24px; padding: 0 14px; text-align: center; font-size: 14px; width: 100%; flex: 0 0 100%; }
#tool-share-block button, #tool-share-block .btn { padding: 10px 18px; border-radius: 10px; font-size: 14px; cursor: pointer; border: 1px solid var(--border, #334155); background: var(--card, #1e293b); color: var(--text, #f1f5f9); font-weight: 500; }
#tool-share-block #tool-share-toast { display: none; margin-left: 10px; color: var(--muted, #94a3b8); font-size: 13px; }
`;

const ACCENTS = ["#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#06b6d4", "#6366f1", "#84cc16", "#ef4444"];

function escapeJs(arr) {
  return JSON.stringify(arr).replace(/'/g, "\\'");
}

function buildScript(tool) {
  const arr = escapeJs(tool.data);
  return `var arr=${arr};
  var btn=document.getElementById("btnPick"), res=document.getElementById("result"), out=document.getElementById("out");
  btn.addEventListener("click",function(){ out.textContent=arr[Math.floor(Math.random()*arr.length)]; out.style.color=""; res.classList.add("show"); });
`;
}

function buildHtml(tool, accent) {
  const script = buildScript(tool);
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${tool.titleKo} | ${tool.descKo} | FunnyFunny Cloud</title>
  <meta name="description" content="${tool.descKo}. 무료로 사용할 수 있습니다." />
  <link rel="canonical" href="${BASE}/tools/${tool.slug}/" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1204894220949193" crossorigin="anonymous"></script>
  <style>
    :root{--bg:#0f172a;--card:#1e293b;--text:#f1f5f9;--muted:#94a3b8;--accent:${accent};--border:#334155;}
    *{box-sizing:border-box;} body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;}
    .wrap{max-width:560px;margin:0 auto;padding:18px 14px 80px;}
    .brand{display:flex;align-items:center;gap:12px;} .brand-badge{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,${accent},${accent}99);display:grid;place-items:center;font-size:22px;}
    h1{margin:0 0 6px;font-size:22px;font-weight:800;} .sub{margin:0;color:var(--muted);font-size:14px;}
    .panel{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:18px;margin-bottom:16px;}
    .btn{padding:14px 24px;border-radius:12px;border:none;font-weight:600;font-size:16px;cursor:pointer;background:var(--accent);color:#fff;}
    .result{display:none;margin-top:16px;padding-top:16px;border-top:1px solid var(--border);text-align:center;font-size:18px;line-height:1.6;} .result.show{display:block;}
    .footer-links{max-width:560px;margin:16px auto;padding:0 14px;text-align:center;font-size:14px;} .footer-links a{color:var(--accent);text-decoration:none;}
    .btn-ghost{background:var(--card);color:var(--text);border:1px solid var(--border);}
${SHARE_CSS}
  </style>
</head>
<body>
  <div class="wrap">
    <header><div class="brand"><div class="brand-badge">${tool.icon}</div><div><h1>${tool.titleKo}</h1><p class="sub">${tool.descKo}</p></div></div></header>
    <div class="panel">
      <button type="button" class="btn" id="btnPick">뽑기</button>
      <div class="result" id="result"><span id="out"></span></div>
    </div>
  </div>
  <div style="text-align:center;margin:16px 0;"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1204894220949193" data-ad-slot="7300458753" data-ad-format="auto" data-full-width-responsive="true"></ins></div>
  <script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>
  <div class="footer-links"><a href="${BASE}/tools/random/">랜덤</a> · <a href="${BASE}/">다른 서비스</a></div>
  <div id="tool-share-block"><button type="button" id="btnShare" class="btn btn-ghost">링크 복사</button><span id="tool-share-toast" style="display:none;"></span></div>
  <script>
(function(){ ${script}
  document.getElementById("btnShare").addEventListener("click",function(){ if(navigator.clipboard) navigator.clipboard.writeText(location.href).then(function(){ var t=document.getElementById("tool-share-toast"); t.textContent="복사했어요"; t.style.display="inline"; setTimeout(function(){ t.style.display="none"; },1500); }); });
})();
  </script>
</body>
</html>
`;
}

function main() {
  let n = 0;
  for (const tool of TOOLS_420) {
    const accent = ACCENTS[n % ACCENTS.length];
    const dir = path.join(TOOLS_DIR, tool.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), buildHtml(tool, accent), "utf8");
    n++;
    if (n <= 5 || n === 300 || n === 420) console.log("created:", tool.slug);
  }
  console.log("\nDone. Created", n, "tools (300 tests + 120 games).");
}

main();
