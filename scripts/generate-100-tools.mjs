#!/usr/bin/env node
/**
 * tools-100-data.mjs 기반으로 public/tools/{slug}/index.html 100개 생성.
 * 사용: node scripts/generate-100-tools.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TOOLS_100 } from "./tools-100-data.mjs";

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
  if (tool.type === "number") {
    const min = tool.min ?? 1;
    const max = tool.max ?? 100;
    return `var btn=document.getElementById("btnPick"), res=document.getElementById("result"), out=document.getElementById("out");
  btn.addEventListener("click",function(){ out.textContent=Math.floor(Math.random()*${max - min + 1})+${min}; res.classList.add("show"); });`;
  }
  if (tool.type === "hex") {
    return `var btn=document.getElementById("btnPick"), res=document.getElementById("result"), out=document.getElementById("out");
  btn.addEventListener("click",function(){ var h=Math.floor(Math.random()*16777215).toString(16); out.textContent="#"+h.padStart(6,"0"); out.style.color="#"+h.padStart(6,"0"); res.classList.add("show"); });`;
  }
  const arr = escapeJs(tool.data);
  return `var arr=${arr};
  var btn=document.getElementById("btnPick"), res=document.getElementById("result"), out=document.getElementById("out");
  btn.addEventListener("click",function(){ out.textContent=arr[Math.floor(Math.random()*arr.length)]; out.style.color=""; res.classList.add("show"); });
`;
}

function buildInsightHtml(tool) {
  const relatedPath = tool.type === "number" || tool.type === "hex" ? "/calculators/" : "/tools/random/";
  return `
    <section class="content-panel">
      <h2>${tool.titleKo} 실행 인사이트</h2>
      <p>
        도파민은 기분만 올리는 물질이 아니라, 행동을 시작하고 반복하게 만드는 신호 시스템입니다.
        중요한 건 한 번에 큰 성과가 아니라 작은 성공을 누적하는 구조입니다.
      </p>
      <ul>
        <li><strong>즉시 보상:</strong> 지금 1회 실행 후 결과를 기록하세요.</li>
        <li><strong>지연 보상:</strong> 일주일 단위로 누적된 선택/결과 패턴을 확인하세요.</li>
        <li><strong>행동 기준:</strong> 성과보다 실행 횟수를 관리하면 지속성이 올라갑니다.</li>
      </ul>
      <div class="mini-cta">
        <a href="${BASE}${relatedPath}">관련 도구 더 보기</a>
      </div>
    </section>
  `;
}

function buildFaqHtml(tool) {
  return `
    <section class="content-panel faq-panel">
      <h2>${tool.titleKo} FAQ</h2>
      <details>
        <summary>${tool.titleKo}는 무료인가요?</summary>
        <p>네, 별도 가입 없이 즉시 사용할 수 있습니다.</p>
      </details>
      <details>
        <summary>결과를 저장할 수 있나요?</summary>
        <p>링크 복사로 공유할 수 있고, 필요하면 결과를 직접 메모해 패턴 비교에 활용하세요.</p>
      </details>
      <details>
        <summary>왜 반복 실행이 도움이 되나요?</summary>
        <p>반복 실행은 판단 피로를 줄이고 실행 루틴을 만들어 실제 행동 전환에 도움이 됩니다.</p>
      </details>
    </section>
  `;
}

function buildHtml(tool, accent) {
  const script = buildScript(tool);
  const buttonLabel = tool.type === "number" ? "뽑기" : tool.type === "hex" ? "색상 뽑기" : "뽑기";
  const insightHtml = buildInsightHtml(tool);
  const faqHtml = buildFaqHtml(tool);
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
    .wrap{max-width:560px;margin:0 auto;padding:28px 16px 80px;}
    .brand{display:flex;align-items:center;gap:14px;} .brand-badge{width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,${accent},${accent}99);display:grid;place-items:center;font-size:24px;}
    header{margin-bottom:28px;}
    h1{margin:0 0 8px;font-size:24px;font-weight:800;line-height:1.25;} .sub{margin:0;color:var(--muted);font-size:14px;line-height:1.4;}
    .panel{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:22px;margin-bottom:20px;box-shadow:0 4px 24px rgba(0,0,0,.15);}
    .btn{padding:14px 24px;border-radius:12px;border:none;font-weight:600;font-size:16px;cursor:pointer;background:var(--accent);color:#fff;}
    .result{display:none;margin-top:16px;padding-top:16px;border-top:1px solid var(--border);text-align:center;font-size:18px;line-height:1.6;} .result.show{display:block;}
    .content-panel{background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:16px;padding:20px;margin-top:16px;line-height:1.65;}
    .content-panel h2{margin:0 0 12px;font-size:18px;line-height:1.35;}
    .content-panel p{margin:0 0 12px;color:#dbe5f3;}
    .content-panel ul{margin:0 0 12px;padding-left:18px;}
    .content-panel li{margin:0 0 8px;color:#dbe5f3;}
    .mini-cta{margin-top:8px;}
    .mini-cta a{display:inline-block;padding:10px 14px;border-radius:10px;border:1px solid var(--border);color:var(--text);text-decoration:none;}
    .faq-panel details{border-top:1px dashed #3b4a61;padding:10px 0;}
    .faq-panel details:first-of-type{border-top:none;padding-top:0;}
    .faq-panel summary{cursor:pointer;font-weight:700;}
    .faq-panel details p{margin-top:8px;}
    .footer-links{max-width:560px;margin:16px auto;padding:0 14px;text-align:center;font-size:14px;} .footer-links a{color:var(--accent);text-decoration:none;}
    .btn-ghost{background:var(--card);color:var(--text);border:1px solid var(--border);}
${SHARE_CSS}
  </style>
</head>
<body>
  <div class="wrap">
    <header><div class="brand"><div class="brand-badge">${tool.icon}</div><div><h1>${tool.titleKo}</h1><p class="sub">${tool.descKo}</p></div></div></header>
    <div class="panel">
      <button type="button" class="btn" id="btnPick">${buttonLabel}</button>
      <div class="result" id="result"><span id="out"></span></div>
    </div>
    ${insightHtml}
    ${faqHtml}
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
  for (const tool of TOOLS_100) {
    const accent = ACCENTS[n % ACCENTS.length];
    const dir = path.join(TOOLS_DIR, tool.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), buildHtml(tool, accent), "utf8");
    n++;
    if (n <= 15) console.log("created:", tool.slug);
  }
  console.log("\nDone. Created", n, "tools.");
}

main();
