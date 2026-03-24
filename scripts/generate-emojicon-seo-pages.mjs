#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BASE = "https://funnyfunny.cloud";
const TARGET_DIR = path.join(ROOT, "public", "tools", "emojicon");

const pages = [
  {
    slug: "ios-app-icon-size-guide",
    title: "iOS App Icon Size Guide",
    h1: "iOS App Icon Size Guide (2026)",
    intro:
      "App Store 심사 통과를 위해 필요한 iOS 아이콘 해상도와 적용 순서를 정리했습니다.",
    bullets: [
      "App Store 제출용 1024x1024 PNG 준비",
      "Xcode Asset Catalog에서 iPhone/iPad 슬롯 누락 확인",
      "투명 배경/과도한 텍스트 사용 여부 점검",
    ],
  },
  {
    slug: "android-app-icon-guide",
    title: "Android App Icon Guide",
    h1: "Android App Icon Guide for Play Store",
    intro:
      "Android 앱 아이콘 제작부터 Play Console 제출까지 필요한 핵심 단계만 압축했습니다.",
    bullets: [
      "Play Store용 512x512 고해상도 아이콘 생성",
      "Adaptive icon(전경/배경) 대비 확인",
      "다크모드 환경에서 식별성 테스트",
    ],
  },
  {
    slug: "favicon-size-guide",
    title: "Favicon Size Guide",
    h1: "Favicon Size Guide for Modern Websites",
    intro:
      "브라우저·모바일·PWA에서 깨지지 않는 파비콘 세트를 빠르게 구성하는 방법입니다.",
    bullets: [
      "16x16 / 32x32 / 192x192 / 512x512 준비",
      "apple-touch-icon 180x180 별도 생성",
      "manifest.json과 link 태그 동기화",
    ],
  },
  {
    slug: "how-to-make-app-icon",
    title: "How to Make App Icon",
    h1: "How to Make an App Icon Step by Step",
    intro:
      "이모지 기반 아이콘을 10분 안에 제작하고 실서비스에 반영하는 실전 순서입니다.",
    bullets: [
      "앱의 핵심 가치를 상징하는 이모지 1개 선정",
      "브랜드 컬러 2개로 그라데이션 구성",
      "작은 사이즈(32px)에서도 읽히는지 확인",
    ],
  },
  {
    slug: "app-icon-design-tips",
    title: "App Icon Design Tips",
    h1: "App Icon Design Tips for Higher CTR",
    intro:
      "아이콘 클릭률을 높이는 실전 디자인 규칙을 사용자 행동 관점으로 정리했습니다.",
    bullets: [
      "한 화면에 요소 1~2개만 유지",
      "대비 강한 색상 조합으로 시선 확보",
      "문자 삽입보다 상징 이미지 우선",
    ],
  },
  {
    slug: "app-icon-examples",
    title: "App Icon Examples",
    h1: "App Icon Examples You Can Build Fast",
    intro:
      "실무에서 바로 쓸 수 있는 카테고리별 아이콘 예시와 제작 포인트를 제공합니다.",
    bullets: [
      "생산성/금융/헬스 카테고리별 추천 이모지",
      "밝은/어두운 배경별 대응 컬러 조합",
      "테스트용 A/B 버전 2개 동시 제작",
    ],
  },
  {
    slug: "icon-vs-logo-difference",
    title: "Icon vs Logo Difference",
    h1: "Icon vs Logo: What Is the Difference?",
    intro:
      "아이콘과 로고를 혼동할 때 발생하는 브랜딩 오류를 줄이기 위한 기준입니다.",
    bullets: [
      "아이콘은 초소형 식별, 로고는 브랜드 서사 중심",
      "스토어 썸네일 환경에서는 아이콘 최적화가 우선",
      "로고의 복잡한 요소를 아이콘에 그대로 넣지 않기",
    ],
  },
  {
    slug: "startup-branding-guide",
    title: "Startup Branding Guide",
    h1: "Startup Branding Guide with Emoji Icons",
    intro:
      "초기 스타트업이 빠르게 브랜딩 자산을 구축할 수 있도록 아이콘 중심으로 구성했습니다.",
    bullets: [
      "아이콘-스플래시-랜딩 히어로 비주얼 톤 통일",
      "초기 브랜드 자산을 1시간 내 세팅",
      "출시 후 데이터 기반으로 아이콘 반복 개선",
    ],
  },
  {
    slug: "app-publish-checklist",
    title: "App Publish Checklist",
    h1: "App Publish Checklist (Icon to Store)",
    intro:
      "아이콘 생성 이후 실제 배포까지 누락 없이 진행하기 위한 체크리스트입니다.",
    bullets: [
      "스토어 스크린샷/설명/정책 문서 준비",
      "아이콘 파일명 및 해상도 최종 검증",
      "배포 후 클릭률/전환율 모니터링 설정",
    ],
  },
  {
    slug: "app-monetization-guide",
    title: "App Monetization Guide",
    h1: "App Monetization Guide from Day 1",
    intro:
      "아이콘 제작 단계부터 수익화 구조를 설계해 출시 후 매출 전환 속도를 높입니다.",
    bullets: [
      "광고형/구독형/일회성 결제 모델 비교",
      "온보딩에서 결제 가치 제안 명확화",
      "아이콘 CTR과 수익 모델 적합도 함께 점검",
    ],
  },
];

function htmlFor(page) {
  const bullets = page.bullets.map((b) => `<li>${b}</li>`).join("\n");
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${page.title} | AshLight Emoji Icon Studio</title>
    <meta name="description" content="${page.intro}" />
    <link rel="canonical" href="${BASE}/tools/emojicon/${page.slug}.html" />
    <style>
      :root { --bg:#0b1020; --card:#121a2b; --txt:#ecf2ff; --muted:#a8b7d7; --line:#26324b; --acc:#7f5af0; }
      * { box-sizing: border-box; }
      body { margin:0; background:var(--bg); color:var(--txt); font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
      .wrap { max-width: 880px; margin: 0 auto; padding: 32px 18px 48px; }
      .card { background:var(--card); border:1px solid var(--line); border-radius:18px; padding:24px; box-shadow:0 20px 50px rgba(0,0,0,.28); }
      h1 { margin:0 0 10px; font-size:30px; line-height:1.25; }
      p { margin:0 0 14px; color:var(--muted); line-height:1.75; }
      ul { margin:0 0 18px; padding-left:20px; }
      li { margin:0 0 8px; line-height:1.65; }
      .cta { display:inline-block; margin-top:8px; padding:12px 16px; border-radius:12px; color:#fff; background:linear-gradient(135deg,var(--acc),#00d1ff); text-decoration:none; font-weight:700; }
      .subnav { margin-top:16px; font-size:14px; }
      .subnav a { color:#9ad8ff; text-decoration:none; }
    </style>
  </head>
  <body>
    <main class="wrap">
      <article class="card">
        <h1>${page.h1}</h1>
        <p>${page.intro}</p>
        <ul>
          ${bullets}
        </ul>
        <p>Use this guide, then create/export icons directly in the studio and continue to publish.</p>
        <a class="cta" href="/tools/emojicon/">Open Emoji Icon Studio</a>
        <div class="subnav"><a href="/tools/emojicon/">← Back to tool</a></div>
      </article>
    </main>
  </body>
</html>
`;
}

function main() {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
  let n = 0;
  for (const page of pages) {
    const filePath = path.join(TARGET_DIR, `${page.slug}.html`);
    fs.writeFileSync(filePath, htmlFor(page), "utf8");
    n++;
  }
  console.log(`Created ${n} emojicon SEO pages.`);
}

main();
