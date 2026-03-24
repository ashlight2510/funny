#!/usr/bin/env node
/**
 * 통합 도구 120개 생성 (calc 10 + test 40 + util 50 + game 20).
 * 생성 후 폐기 슬러그(calc-011~065, test-041~470, util-051~500, game-021~319) 디렉터리 삭제.
 * 사용: node scripts/generate-extend-934-tools.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TOOLS_EXTEND_934 } from "./tools-extend-934-data.mjs";

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

/** 게임 결과 아래 재미·영감 터치라인 (단순 넘기기 방지, 체류·공유 유도) */
const GAME_TAGLINES = [
  "오늘의 선택! 맛있게 드세요 🍽️", "운명의 메뉴예요 ✨", "이거로 가시죠!", "고르기 힘들 땐 운에 맡겨보세요.",
  "오늘은 이걸로 결정!", "뽑기 운이 좋은 날이에요 🎲", "친구랑 같이 뽑아보면 더 재밌어요.", "한 번 더 뽑아볼까요?",
  "결정 장애 해결! 👍", "오늘의 럭키 아이템 🍀", "이걸로 만족하시겠어요?", "다음엔 뭐가 나올까요?",
  "선택의 기쁨을 느껴 보세요.", "우연이 준 선물이에요.", "공유해서 친구도 뽑게 해보세요!", "뽑힌 걸 기록해 두면 재밌어요.",
];

function toolType(slug) {
  if (slug.startsWith("game-")) return "game";
  if (slug.startsWith("test-")) return "test";
  if (slug.startsWith("util-")) return "util";
  if (slug.startsWith("calc-")) return "calc";
  return "util";
}

function escapeJs(arr) {
  return JSON.stringify(arr).replace(/'/g, "\\'");
}

function buildScript(tool) {
  const arr = escapeJs(tool.data);
  const type = toolType(tool.slug);
  if (type === "game") {
    const taglines = escapeJs(GAME_TAGLINES);
    return `var arr=${arr}; var taglines=${taglines};
  var btn=document.getElementById("btnPick"), res=document.getElementById("result"), out=document.getElementById("out"), taglineEl=document.getElementById("resultTagline");
  btn.addEventListener("click",function(){ out.textContent=arr[Math.floor(Math.random()*arr.length)]; out.style.color=""; if(taglineEl){ taglineEl.textContent=taglines[Math.floor(Math.random()*taglines.length)]; taglineEl.style.display="block"; } btn.textContent="한 번 더 뽑기"; res.classList.add("show"); });
`;
  }
  const sublines = { util: "오늘 하루 이 한 줄을 떠올려 보세요.", test: "이 문장으로 오늘을 돌아보는 건 어떨까요?", calc: "참고용으로 활용하시고, 필요 시 전문가와 상담하세요." };
  const sub = sublines[type] || sublines.util;
  const subEsc = JSON.stringify(sub);
  return `var arr=${arr}; var subline=${subEsc};
  var btn=document.getElementById("btnPick"), res=document.getElementById("result"), out=document.getElementById("out"), subEl=document.getElementById("resultSubline");
  btn.addEventListener("click",function(){ out.textContent=arr[Math.floor(Math.random()*arr.length)]; out.style.color=""; if(subEl){ subEl.textContent=subline; subEl.style.display="block"; } res.classList.add("show"); });
`;
}

function resultExtraHtml(tool) {
  const type = toolType(tool.slug);
  if (type === "game") return '<span id="resultTagline" class="result-extra" style="display:none;"></span>';
  return '<span id="resultSubline" class="result-extra" style="display:none;"></span>';
}

function buildInsightHtml(tool) {
  const type = toolType(tool.slug);
  const relatedPath = type === "calc" ? "/calculators/" : type === "game" ? "/games/" : type === "test" ? "/tests/" : "/tools/random/";
  return `
    <section class="content-panel">
      <h2>${tool.titleKo} 실행 인사이트</h2>
      <p>
        도파민은 단순 쾌락이 아니라 행동 반복을 만드는 신호입니다. 그래서 핵심은 강한 자극보다
        작은 실행을 꾸준히 반복해 보상 예측을 안정화하는 것입니다.
      </p>
      <ul>
        <li><strong>즉시 보상:</strong> 지금 1회 실행하고 결과를 확인하세요.</li>
        <li><strong>누적 관리:</strong> 주간 단위로 실행 횟수와 패턴을 점검하세요.</li>
        <li><strong>행동 기준:</strong> 성공 확률이 아니라 누적 실행량을 기준으로 보세요.</li>
      </ul>
      <div class="mini-cta">
        <a href="${BASE}${relatedPath}">관련 서비스 더 보기</a>
      </div>
    </section>
  `;
}

function buildFaqHtml(tool) {
  return `
    <section class="content-panel faq-panel">
      <h2>${tool.titleKo} FAQ</h2>
      <details>
        <summary>${tool.titleKo}는 어떤 용도로 쓰면 좋나요?</summary>
        <p>빠른 선택, 가벼운 진단, 아이디어 확장처럼 판단 피로를 줄여야 할 때 적합합니다.</p>
      </details>
      <details>
        <summary>결과를 신뢰해도 되나요?</summary>
        <p>참고용 도구이므로 최종 결정은 본인 상황과 목표에 맞게 판단하는 것을 권장합니다.</p>
      </details>
      <details>
        <summary>실행이 잘 안 될 때 도움이 되나요?</summary>
        <p>네. 작은 행동 트리거로 사용하면 시작 장벽을 낮추고 루틴 형성에 도움이 됩니다.</p>
      </details>
    </section>
  `;
}

function buildHtml(tool, accent) {
  const script = buildScript(tool);
  const extra = resultExtraHtml(tool);
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
    .result-extra{display:block;margin-top:10px;font-size:14px;color:var(--muted);line-height:1.5;}
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
    <header><div class="brand"><div class="brand-badge">${tool.icon}</div><div><h1>${tool.titleKo}</h1><p class="sub">${tool.descKo}</p></div></header>
    <div class="panel">
      <button type="button" class="btn" id="btnPick">뽑기</button>
      <div class="result" id="result"><span id="out"></span>${extra}</div>
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

function deprecatedSlugs() {
  const slugs = [];
  for (let i = 11; i <= 65; i++) slugs.push(`calc-${String(i).padStart(3, "0")}`);
  for (let i = 41; i <= 470; i++) slugs.push(`test-${String(i).padStart(3, "0")}`);
  for (let i = 51; i <= 500; i++) slugs.push(`util-${String(i).padStart(3, "0")}`);
  for (let i = 21; i <= 319; i++) slugs.push(`game-${String(i).padStart(3, "0")}`);
  return new Set(slugs);
}

function main() {
  let n = 0;
  for (const tool of TOOLS_EXTEND_934) {
    const accent = ACCENTS[n % ACCENTS.length];
    const dir = path.join(TOOLS_DIR, tool.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), buildHtml(tool, accent), "utf8");
    n++;
    if (n <= 3 || n === 10 || n === 50 || n === 100 || n === 120) console.log("created:", tool.slug);
  }
  const toRemove = deprecatedSlugs();
  let removed = 0;
  if (fs.existsSync(TOOLS_DIR)) {
    for (const name of fs.readdirSync(TOOLS_DIR)) {
      if (toRemove.has(name)) {
        const dir = path.join(TOOLS_DIR, name);
        if (fs.statSync(dir).isDirectory()) {
          fs.rmSync(dir, { recursive: true });
          removed++;
        }
      }
    }
  }
  console.log("\nDone. Created", n, "tools (10 calc + 40 test + 50 util + 20 game). Removed", removed, "deprecated dirs.");
}

main();
