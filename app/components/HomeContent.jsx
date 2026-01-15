"use client";

import { useEffect, useState } from "react";
import { HeaderPortal } from "./HeaderPortal";
import { FooterPortal } from "./FooterPortal";

const randomTools = [
  "https://today.funnyfunny.cloud",
  "https://todo.funnyfunny.cloud/",
  "https://random.funnyfunny.cloud",
  "https://rest.funnyfunny.cloud",
  "https://dailycheck.funnyfunny.cloud/",
  "https://coffee.funnyfunny.cloud",
  "https://dream.funnyfunny.cloud/",
  "https://video.funnyfunny.cloud",
  "https://file.funnyfunny.cloud/",
  "https://meta.funnyfunny.cloud",
  "https://ocr.funnyfunny.cloud",
  "https://beauty.funnyfunny.cloud",
  "https://cosmetics.funnyfunny.cloud",
  "https://year.funnyfunny.cloud",
  "https://energy.funnyfunny.cloud",
  "https://money.funnyfunny.cloud",
  "https://specific.funnyfunny.cloud/",
  "https://invest.funnyfunny.cloud",
  "https://life.funnyfunny.cloud",
  "https://ego.funnyfunny.cloud",
  "https://senseyear.funnyfunny.cloud",
  "https://alcohol.funnyfunny.cloud",
  "https://lazy.funnyfunny.cloud",
  "https://drain.funnyfunny.cloud",
  "https://maldives.funnyfunny.cloud",
  "https://bit.funnyfunny.cloud",
  "https://next.funnyfunny.cloud",
  "https://house.funnyfunny.cloud",
  "https://space.funnyfunny.cloud",
  "https://edu.funnyfunny.cloud",
  "https://baby.funnyfunny.cloud/",
  "https://miracle.funnyfunny.cloud/",
  "https://n.funnyfunny.cloud/",
  "https://nospend.funnyfunny.cloud",
  "https://waste.funnyfunny.cloud",
  "https://health.funnyfunny.cloud",
  "https://bmi.funnyfunny.cloud/",
  "https://cafe.funnyfunny.cloud",
  "https://drink.funnyfunny.cloud",
  "https://joke.funnyfunny.cloud",
  "https://mental.funnyfunny.cloud",
  "https://mind.funnyfunny.cloud",
  "https://fortune.funnyfunny.cloud",
  "https://soul.funnyfunny.cloud",
  "https://wisdom.funnyfunny.cloud",
  "https://motivate.funnyfunny.cloud/",
  "https://beat.funnyfunny.cloud",
  "https://cook.funnyfunny.cloud",
  "https://chef.funnyfunny.cloud/",
  "https://winter.funnyfunny.cloud",
  "https://anju.funnyfunny.cloud",
  "https://product.funnyfunny.cloud",
  "https://human.funnyfunny.cloud",
  "https://average.funnyfunny.cloud",
  "https://pick.funnyfunny.cloud",
  "https://audio.funnyfunny.cloud",
  "https://music.funnyfunny.cloud",
  "https://vocal.funnyfunny.cloud",
  "https://run.funnyfunny.cloud",
  "https://charm.funnyfunny.cloud",
  "https://downy.funnyfunny.cloud",
  "https://xmas.funnyfunny.cloud",
  "https://hand.funnyfunny.cloud",
  "https://soccer.funnyfunny.cloud",
  "https://heal.funnyfunny.cloud",
  "https://need.funnyfunny.cloud/",
  "https://image.funnyfunny.cloud",
  "http://heic.funnyfunny.cloud/",
  "https://temple.funnyfunny.cloud",
  "https://sleep.funnyfunny.cloud",
  "https://balance.funnyfunny.cloud/",
  "https://lotto.funnyfunny.cloud/",
  "http://sudoku.funnyfunny.cloud/",
  "https://commute.funnyfunny.cloud/",
];

const seoTopItems = [
  {
    name: "Local Image Optimizer & File Insights",
    url: "https://file.funnyfunny.cloud/",
    description:
      "Re-encode WebP/JPEG and auto-resize with one drag. View local file info, SHA-256, and previews without uploads.",
  },
  {
    name: "Meta Kit — SEO · OG · Favicon",
    url: "https://meta.funnyfunny.cloud",
    description:
      "Generate meta tags, OG/Twitter cards, and favicons in one place, plus OG image text ready to copy.",
  },
  {
    name: "Image Merge & PDF Converter",
    url: "https://image.funnyfunny.cloud",
    description:
      "Upload multiple images, reorder by drag, and save as a single image or PDF.",
  },
  {
    name: "Image Text Extractor",
    url: "https://ocr.funnyfunny.cloud",
    description: "OCR that extracts text from photos automatically.",
  },
  {
    name: "Time Checker",
    url: "https://time.funnyfunny.cloud",
    description:
      "Accurate server time, time zone conversion, and quick time calculations.",
  },
  {
    name: "Current Weather",
    url: "https://weather.funnyfunny.cloud",
    description: "Local weather, feels-like temperature, dust, and UV info.",
  },
  {
    name: "IT News Today",
    url: "https://news.funnyfunny.cloud",
    description: "Quick summaries of domestic and global IT news.",
  },
  {
    name: "Simple Audio Editor",
    url: "https://audio.funnyfunny.cloud",
    description: "Edit audio directly in the browser.",
  },
  {
    name: "EmojiCon Studio",
    url: "https://emojicon.funnyfunny.cloud",
    description: "Create icons and favicons from a single emoji.",
  },
];

function getSeoGuides(lang = "en") {
  const isKo = lang === "ko";
  
  return [
  {
    slug: "meta-kit",
    emoji: "🧰",
    title: isKo ? "Meta Kit — SEO/OG/파비콘 번들 가이드" : "Meta Kit — SEO/OG/Favicon Bundle Guide",
    desc: isKo ? "메타 태그, OG/Twitter 카드, 파비콘, OG 이미지 텍스트를 입력하고 생성 및 복사하세요." : "Enter meta tags, OG/Twitter cards, favicons, and OG image text, then generate and copy.",
  },
  {
    slug: "local-image-optimizer",
    emoji: "🗜️",
    title: isKo ? "로컬 이미지 최적화 & 파일 인사이트 가이드" : "Local Image Optimizer & File Insights Guide",
    desc: isKo ? "WebP/JPEG 재인코딩, 자동 리사이즈, 로컬 파일 정보, SHA-256, 미리보기 확인." : "Re-encode WebP/JPEG, auto-resize, and view local file info, SHA-256, and previews.",
  },
  {
    slug: "heic-to-jpg",
    emoji: "📷",
    title: isKo ? "HEIC to JPG 변환기 가이드" : "HEIC to JPG Converter Guide",
    desc: isKo ? "브라우저에서 HEIC를 JPG/WebP/PNG로 변환 (압축, 리사이즈, ZIP 내보내기 포함)." : "Convert HEIC to JPG/WebP/PNG in-browser with compression, resize, and ZIP export.",
  },
  {
    slug: "pyeong-calculator",
    emoji: "📐",
    title: isKo ? "평수 계산기 가이드" : "Pyeong-to-Square-Meter Calculator Guide",
    desc: isKo ? "평을 제곱미터로 변환하고 일반적인 아파트 크기를 빠르게 확인하세요." : "Convert pyeong to square meters and check typical apartment sizes quickly.",
  },
  {
    slug: "nbang-calculator",
    emoji: "🍽️",
    title: isKo ? "N빵 계산기 가이드" : "Split-the-Bill Calculator Guide",
    desc: isKo ? "장소, 인원수, 총액을 입력하여 1인당 비용을 계산하고 즉시 복사하세요." : "Enter venue, headcount, and total to calculate per-person cost and copy instantly.",
  },
  {
    slug: "commute-cost-time",
    emoji: "⏰",
    title: isKo ? "출퇴근 비용 & 시간 계산기 가이드" : "Commute Cost & Time Calculator Guide",
    desc: isKo ? "출퇴근 비용/시간을 계산하고 절약된 시간 활용 아이디어를 얻으세요." : "Calculate commuting cost/time and get ideas for using reclaimed time.",
  },
  {
    slug: "lotto-picker",
    emoji: "🎟️",
    title: isKo ? "로또 번호 뽑기 가이드" : "Lotto Number Picker Guide",
    desc: isKo ? "클릭 한 번으로 추천 번호 세트를 받고 즐겨찾기를 저장하세요." : "Get recommended number sets with one click and save your favorites.",
  },
  {
    slug: "image-merge-pdf",
    emoji: "🖼️",
    title: isKo ? "이미지 병합 & PDF 변환기 가이드" : "Image Merge & PDF Converter Guide",
    desc: isKo ? "여러 이미지를 업로드하고 순서를 변경한 후 하나의 이미지 또는 PDF로 내보내세요." : "Upload and reorder multiple images, then export as one image or PDF.",
  },
  {
    slug: "autocut-studio",
    emoji: "🎬",
    title: isKo ? "AutoCut Studio 가이드" : "AutoCut Studio Guide",
    desc: isKo ? "침묵 감지와 점프 컷 타임라인으로 YouTube 편집 속도를 높이세요." : "Speed up YouTube editing with silence detection and jump-cut timelines.",
  },
  {
    slug: "head-voice-trainer",
    emoji: "🎤",
    title: isKo ? "두성 트레이너 가이드" : "Head Voice Trainer Guide",
    desc: isKo ? "두성을 위한 호흡, 공명 루틴, 스케일 따라하기 연습." : "Breathing, resonance routines, and scale-following practice for head voice.",
  },
  {
    slug: "image-text-extract",
    emoji: "🔍",
    title: isKo ? "이미지 텍스트 추출기 가이드" : "Image Text Extractor Guide",
    desc: isKo ? "이미지에서 텍스트를 추출하고 복사하는 빠른 OCR 워크플로우." : "Quick OCR workflow to extract and copy text from images.",
  },
  {
    slug: "today-well-done",
    emoji: "🌱",
    title: isKo ? "오늘, 잘했어 가이드" : "Today, Well Done Guide",
    desc: isKo ? "오늘의 성과를 한 줄로 요약하고 내일을 위한 작은 행동을 정하세요." : "Summarize today's wins in one line and set a small action for tomorrow.",
  },
  {
    slug: "today-todo",
    emoji: "✅",
    title: isKo ? "오늘의 할 일 가이드" : "Today's To-Do Guide",
    desc: isKo ? "중요한 작업을 포착하고 깔끔한 완료 체크로 하루를 마무리하세요." : "Capture focus tasks and wrap your day with clean completion checks.",
  },
  {
    slug: "daily-condition-check",
    emoji: "📝",
    title: isKo ? "일일 컨디션 체크 가이드" : "Daily Condition Check Guide",
    desc: isKo ? "5가지 빠른 체크로 컨디션을 한 줄로 요약하세요." : "Use five quick checks to summarize your condition in one line.",
  },
  {
    slug: "dream-diary",
    emoji: "💭",
    title: isKo ? "꿈 일기 가이드" : "Dream Diary Guide",
    desc: isKo ? "꿈을 로컬에 기록하고 태그로 정리하세요." : "Record dreams locally and organize them with tags.",
  },
  {
    slug: "rest-check",
    emoji: "🛋️",
    title: isKo ? "지금 쉬어야 할까? 가이드" : "Should I Rest Now? Guide",
    desc: isKo ? "짧은 설문으로 휴식 여부를 결정하고 회복 루틴을 선택하세요." : "Use a short survey to decide on rest and pick a recovery routine.",
  },
  {
    slug: "sleep-helper",
    emoji: "🌙",
    title: isKo ? "수면 도우미 가이드" : "Sleep Helper Guide",
    desc: isKo ? "화이트 노이즈 믹스, 앰비언트 사운드, 타이머로 잠들기." : "Fall asleep with white noise mixes, ambient sounds, and timers.",
  },
  {
    slug: "chef-judge-choice",
    emoji: "👨‍🍳",
    title: isKo ? "셰프 판단: 오늘의 선택 가이드" : "Chef Judge: Today's Choice Guide",
    desc: isKo ? "밈 스타일의 판단 코멘트로 오늘의 선택을 빠르게 결정하세요." : "Get meme-style judging comments to decide today's choice fast.",
  },
  {
    slug: "music-now",
    emoji: "🎵",
    title: isKo ? "지금 이 순간 음악 가이드" : "Music for This Moment Guide",
    desc: isKo ? "시간대와 리듬에 맞는 음악 무드를 선택하세요." : "Pick a music mood that fits the time of day and your rhythm.",
  },
  {
    slug: "winter-ruin-top1",
    emoji: "❄️",
    title: isKo ? "겨울 트리거 톱 1 가이드" : "Winter Trigger Top 1 Guide",
    desc: isKo ? "겨울 무너짐 패턴을 발견하고 10분 루틴으로 해결하세요." : "Spot your winter crash pattern and fix it with a 10-minute routine.",
  },
  {
    slug: "flow-community",
    emoji: "🧵",
    title: isKo ? "FLOW 커뮤니티 가이드" : "FLOW Community Guide",
    desc: isKo ? "스레드 스타일 FLOW 게시판에서 게시하고 토론하는 방법." : "How to post and discuss on the thread-style FLOW board.",
  },
  {
    slug: "next-2026",
    emoji: "🔮",
    title: isKo ? "미래의 나 2026 가이드" : "Future Me 2026 Guide",
    desc: isKo ? "습관, 돈, 관계, 집중으로 형성된 내년 경로를 해석하세요." : "Interpret next-year routes shaped by habits, money, relationships, and focus.",
  },
  {
    slug: "life-spending-report",
    emoji: "🧾",
    title: isKo ? "인생 소비 보고서 가이드" : "Life Spending Report Guide",
    desc: isKo ? "돈, 시간, 감정 소비에 대한 3분 보고서를 받으세요." : "Get a 3-minute report on money, time, and emotion spending.",
  },
  {
    slug: "coffee-addiction-test",
    emoji: "☕",
    title: isKo ? "커피 중독 테스트 가이드" : "Coffee Addiction Test Guide",
    desc: isKo ? "카페인 한계, 중독 신호, 테스트 기준을 한눈에 확인하세요." : "Caffeine limits, addiction signals, and the test criteria at a glance.",
  },
  {
    slug: "bmi-diet-plan",
    emoji: "📏",
    title: isKo ? "BMI 설문 다이어트 계획 가이드" : "BMI Survey Diet Plan Guide",
    desc: isKo ? "빠른 탭으로 BMI와 생활 패턴을 확인하고 현실적인 계획을 받으세요." : "Check BMI and lifestyle patterns in quick taps to get a realistic plan.",
  },
  {
    slug: "beauty-bankruptcy-test",
    emoji: "💄",
    title: isKo ? "뷰티 파산 테스트 가이드" : "Beauty Bankruptcy Test Guide",
    desc: isKo ? "뷰티와 패션 지출이 자산에 미치는 영향과 계산 방법." : "How beauty and fashion spending affects your assets and how it's calculated.",
  },
  {
    slug: "cosmetics-routine-check",
    emoji: "💄",
    title: isKo ? "화장품 루틴 체크 가이드" : "Cosmetics Routine Check Guide",
    desc: isKo ? "현재 제품/기능을 확인하여 공백이나 과부하를 파악하고 최소 계획을 받으세요." : "Check current products/features to see gaps or overloads and get a minimal plan.",
  },
  {
    slug: "asset-shield-index",
    emoji: "🛡️",
    title: isKo ? "자산 방패 지수 가이드" : "Asset Shield Index Guide",
    desc: isKo ? "현금 흐름, 비상 자금, 분산 투자 체크로 회복력을 평가하세요." : "Assess resilience with cash flow, emergency funds, and diversification checks.",
  },
  {
    slug: "asset-allocation-check",
    emoji: "🧮",
    title: isKo ? "자산 배분 체크 가이드" : "Asset Allocation Check Guide",
    desc: isKo ? "현금, 금, 부동산, 주식, 암호화폐에 걸친 포트폴리오 유형을 검토하세요." : "Review your portfolio type across cash, gold, real estate, stocks, and crypto.",
  },
  {
    slug: "invest-confidence-builder",
    emoji: "📈",
    title: isKo ? "투자 자신감 구축 가이드" : "Investment Confidence Builder Guide",
    desc: isKo ? "수익보다 추론을 기록하여 결정을 안정화하세요." : "Stabilize decisions by logging your reasoning rather than returns.",
  },
  {
    slug: "bitcoin-regret-calculator",
    emoji: "💸",
    title: isKo ? "비트코인 후회 계산기 가이드" : "Bitcoin Regret Calculator Guide",
    desc: isKo ? "후회 시뮬레이션, 데이터 가정, 투자 주의사항 포함." : "Includes regret simulation, data assumptions, and investment cautions.",
  },
  {
    slug: "daily-productivity-check",
    emoji: "⚡",
    title: isKo ? "일일 생산성 체크 가이드" : "Daily Productivity Check Guide",
    desc: isKo ? "오늘의 집중력과 에너지를 평가하는 빠른 체크리스트." : "A quick checklist to assess today's focus and energy.",
  },
  {
    slug: "missed-house-opportunity",
    emoji: "🏠",
    title: isKo ? "놓친 집 기회 가이드" : "Missed House Opportunity Guide",
    desc: isKo ? "가격 상승의 기회비용과 현실적인 다음 단계." : "Opportunity cost of price growth and realistic next steps.",
  },
  {
    slug: "birthrate-reality-test",
    emoji: "👶",
    title: isKo ? "출산율 현실 테스트 가이드" : "Birthrate Reality Test Guide",
    desc: isKo ? "질문을 따라 변화를 느끼고 결과를 해석/공유하세요." : "Follow the questions to feel the shift and interpret/share the results.",
  },
  {
    slug: "better-birth-odds",
    emoji: "🌍",
    title: isKo ? "더 나은 출생 확률 가이드" : "Better Birth Odds Guide",
    desc: isKo ? "출생 조건을 비교하고 확률 결과를 해석/공유하세요." : "Compare birth conditions and interpret/share your probability results.",
  },
  {
    slug: "palm-reading-analysis",
    emoji: "✋",
    title: isKo ? "손금 분석 가이드" : "Palm Reading Analysis Guide",
    desc: isKo ? "사진 한 장으로 손금을 분석하고 주요 신호를 해석하세요." : "Analyze palm lines from a single photo and interpret key signals.",
  },
  {
    slug: "soccer-combo",
    emoji: "⚽",
    title: isKo ? "축구 조합 가이드" : "Soccer Combo Guide",
    desc: isKo ? "두 성향을 섞어 자신과 닮은 축구선수를 찾으세요." : "Mix two personalities to find the footballer you resemble.",
  },
  {
    slug: "neon-pinball-random",
    emoji: "🎱",
    title: isKo ? "네온 핀볼 랜덤 뽑기 가이드" : "Neon Pinball Random Draw Guide",
    desc: isKo ? "굴러가는 핀볼로 랜덤 당첨자를 선택하고 결과를 공유하세요." : "Use rolling pinballs to pick random winners and share results.",
  },
  {
    slug: "one-line-fortune",
    emoji: "🔮",
    title: isKo ? "한 줄 운세 가이드" : "One-Line Fortune Guide",
    desc: isKo ? "기분에 맞춰 일일 운세를 선택하고 빠르게 해석하세요." : "Pick a daily fortune based on your mood and interpret it fast.",
  },
  {
    slug: "saju-sintojungbi",
    emoji: "🔮",
    title: isKo ? "사주 & 신토정비 가이드" : "Saju & Sintojungbi Guide",
    desc: isKo ? "생년월일/시간을 사용하여 사주와 연/월 흐름을 읽으세요." : "Use birth date/time to read your four pillars and yearly/monthly flow.",
  },
  {
    slug: "heal-card",
    emoji: "💌",
    title: isKo ? "우연이 아닐 수도 가이드" : "Maybe Not a Coincidence Guide",
    desc: isKo ? "클릭 한 번으로 위로 카드를 받고 쉽게 공유하세요." : "Get a comfort card with one click and share it easily.",
  },
  {
    slug: "need-one-line",
    emoji: "🧭",
    title: isKo ? "내가 필요한 한 줄 가이드" : "The One Line I Need Guide",
    desc: isKo ? "감정과 상황을 클릭하여 오늘 필요한 한 줄을 받으세요." : "Click your emotion and situation to receive the line you need today.",
  },
  {
    slug: "motivate",
    emoji: "🔥",
    title: isKo ? "동기부여 리셋 가이드" : "Motivation Reset Guide",
    desc: isKo ? "마음가짐을 리셋하고 빠르게 재집중하기 위한 짧은 한 줄을 받으세요." : "Get a short line to reset your mindset and refocus quickly.",
  },
  {
    slug: "daily-wisdom",
    emoji: "📜",
    title: isKo ? "일일 지혜 가이드" : "Daily Wisdom Guide",
    desc: isKo ? "성경에서 영감을 받은 일일 한 줄을 선택하고 공유하세요." : "Choose a daily line inspired by scripture and share it.",
  },
  {
    slug: "temple-daily-quote",
    emoji: "🛕",
    title: isKo ? "절 일일 명언 가이드" : "Temple Daily Quote Guide",
    desc: isKo ? "불교 가르침을 현대 언어로 표현한 일일 한 줄을 선택하고 공유하세요." : "Pick and share daily lines based on Buddhist teachings in modern language.",
  },
  ];
}

const seoApplications = [
  {
    name: "Today, Well Done",
    url: "https://today.funnyfunny.cloud/",
    description:
      "Log today’s wins in one line and plan a small action for tomorrow.",
    category: "ProductivityApplication",
  },
  {
    name: "Today's To-Do",
    url: "https://todo.funnyfunny.cloud/",
    description: "A focused to-do list with simple completion checks.",
    category: "ProductivityApplication",
  },
  {
    name: "Dream Diary",
    url: "https://dream.funnyfunny.cloud/",
    description: "A local dream journal saved in your browser with tags.",
    category: "LifestyleApplication",
  },
  {
    name: "Should I Rest Now?",
    url: "https://rest.funnyfunny.cloud/",
    description: "A short survey to decide rest needs and recovery routines.",
    category: "LifestyleApplication",
  },
  {
    name: "Sleep Helper",
    url: "https://sleep.funnyfunny.cloud/",
    description:
      "White noise and ambient mixes with timer and fade-out for better sleep.",
    category: "LifestyleApplication",
  },
  {
    name: "Motivation Reset",
    url: "https://motivate.funnyfunny.cloud/",
    description: "Get a short line to reset your mindset and regain focus.",
    category: "LifestyleApplication",
  },
  {
    name: "Music for This Moment",
    url: "https://music.funnyfunny.cloud/",
    description: "Pick a music mood that matches your time of day.",
    category: "EntertainmentApplication",
  },
  {
    name: "Cosmetics Routine Check",
    url: "https://cosmetics.funnyfunny.cloud/",
    description:
      "Check your products and features to find gaps, overloads, and a minimal plan.",
    category: "LifestyleApplication",
  },
  {
    name: "Winter Trigger Top 1",
    url: "https://winter.funnyfunny.cloud/",
    description: "Identify your biggest winter drag and get recovery tips.",
    category: "LifestyleApplication",
  },
  {
    name: "Meta Kit — SEO · OG · Favicon",
    url: "https://meta.funnyfunny.cloud/",
    description:
      "Generate meta tags, OG/Twitter cards, favicons, and OG text for easy copy.",
    category: "UtilityApplication",
  },
  {
    name: "Life Spending Report",
    url: "https://year.funnyfunny.cloud/",
    description:
      "A 3-minute report on how you spent money, time, and emotions.",
    category: "LifestyleApplication",
  },
  {
    name: "Waste Index",
    url: "https://waste.funnyfunny.cloud/",
    description: "See wasted money and time as a single score.",
    category: "LifestyleApplication",
  },
  {
    name: "Korea Average vs Me",
    url: "https://average.funnyfunny.cloud/",
    description: "Compare your metrics with national averages.",
    category: "LifestyleApplication",
  },
  {
    name: "Daily Productivity Check",
    url: "https://product.funnyfunny.cloud/",
    description: "Quickly check focus, energy, and decision state.",
    category: "ProductivityApplication",
  },
  {
    name: "Total Wealth of What I Didn’t Buy",
    url: "https://nospend.funnyfunny.cloud/",
    description: "Estimate how much you could have saved by not buying.",
    category: "FinanceApplication",
  },
  {
    name: "Asset Allocation Check",
    url: "https://specific.funnyfunny.cloud/",
    description:
      "Review your mix across cash, gold, real estate, stocks, and crypto.",
    category: "FinanceApplication",
  },
  {
    name: "OTT Pick",
    url: "https://pick.funnyfunny.cloud/",
    description:
      "Get instant Korean OTT movie and drama picks without searching.",
    category: "EntertainmentApplication",
  },
  {
    name: "Chef Judge: Today's Choice",
    url: "https://chef.funnyfunny.cloud/",
    description: "Meme-style judging comments that help you choose fast.",
    category: "EntertainmentApplication",
  },
  {
    name: "Lotto Number Picker",
    url: "https://lotto.funnyfunny.cloud/",
    description: "One-click lotto number recommendations with save support.",
    category: "EntertainmentApplication",
  },
  {
    name: "Bitcoin Regret Calculator",
    url: "https://bit.funnyfunny.cloud/",
    description: "Calculate opportunity cost if you didn’t buy Bitcoin.",
    category: "FinanceApplication",
  },
  {
    name: "Future Me 2026",
    url: "https://next.funnyfunny.cloud/",
    description:
      "Simulate next-year routes based on habits, money, relationships, and focus.",
    category: "LifestyleApplication",
  },
  {
    name: "Missed House Opportunity",
    url: "https://house.funnyfunny.cloud/",
    description: "Calculate missed gains from rising home prices.",
    category: "FinanceApplication",
  },
  {
    name: "Investment Confidence Builder",
    url: "https://invest.funnyfunny.cloud/",
    description: "Record decisions to reduce volatility in judgment.",
    category: "FinanceApplication",
  },
  {
    name: "Birthrate Reality Test",
    url: "https://baby.funnyfunny.cloud/",
    description:
      "A scenario-based test that frames the birthrate shift in real life.",
    category: "LifestyleApplication",
  },
  {
    name: "Better Birth Odds",
    url: "https://miracle.funnyfunny.cloud/",
    description:
      "Compare birth conditions and estimate the odds of a better environment.",
    category: "LifestyleApplication",
  },
  {
    name: "Pyeong Calculator",
    url: "https://space.funnyfunny.cloud/",
    description: "Convert pyeong to square meters and check typical sizes.",
    category: "UtilityApplication",
  },
  {
    name: "Split-the-Bill Calculator",
    url: "https://n.funnyfunny.cloud/",
    description:
      "Enter venue, headcount, and total to calculate per-person cost.",
    category: "UtilityApplication",
  },
  {
    name: "Coffee Addiction Test",
    url: "https://coffee.funnyfunny.cloud/",
    description: "A meme-style test to check caffeine dependence.",
    category: "LifestyleApplication",
  },
  {
    name: "BMI Survey Diet Plan",
    url: "https://bmi.funnyfunny.cloud/",
    description:
      "A quick survey to check BMI and lifestyle patterns for a realistic plan.",
    category: "LifestyleApplication",
  },
  {
    name: "Beauty Bankruptcy Test",
    url: "https://beauty.funnyfunny.cloud/",
    description: "A felt-impact calculator for beauty spending.",
    category: "LifestyleApplication",
  },
  {
    name: "People Who Drain Me Test",
    url: "https://human.funnyfunny.cloud/",
    description:
      "Find the people types that drain you (not a self-evaluation).",
    category: "LifestyleApplication",
  },
  {
    name: "Simple Audio Editor",
    url: "https://audio.funnyfunny.cloud/",
    description: "Trim, merge, and export audio directly in the browser.",
    category: "UtilityApplication",
  },
  {
    name: "Head Voice Trainer",
    url: "https://vocal.funnyfunny.cloud/",
    description:
      "Warm up head voice with breathing, resonance, and scale routines.",
    category: "LifestyleApplication",
  },
  {
    name: "AutoCut Studio",
    url: "https://video.funnyfunny.cloud/",
    description: "Detect silence and auto-create highlight/jump-cut timelines.",
    category: "UtilityApplication",
  },
  {
    name: "Image Merge & PDF Converter",
    url: "https://image.funnyfunny.cloud/",
    description:
      "Upload images, reorder by drag, and export as one image or PDF.",
    category: "UtilityApplication",
  },
  {
    name: "Image Text Extractor",
    url: "https://ocr.funnyfunny.cloud/",
    description: "OCR that extracts text from photos.",
    category: "UtilityApplication",
  },
  {
    name: "HEIC to JPG Converter",
    url: "http://heic.funnyfunny.cloud/",
    description:
      "Convert HEIC to JPG/WebP/PNG with compression, resize, and ZIP export.",
    category: "UtilityApplication",
  },
  {
    name: "Local Image Optimizer & File Insights",
    url: "https://file.funnyfunny.cloud/",
    description:
      "Re-encode and auto-resize images, plus local file info and SHA-256.",
    category: "UtilityApplication",
  },
  {
    name: "Dino Runner",
    url: "https://run.funnyfunny.cloud/",
    description: "Dino runner ranking game with score submissions.",
    category: "GameApplication",
  },
  {
    name: "Charm (NEON ARCADE)",
    url: "https://charm.funnyfunny.cloud/",
    description: "Switch lanes to dodge incoming missiles.",
    category: "GameApplication",
  },
  {
    name: "Downy (NEON STAIRS)",
    url: "https://downy.funnyfunny.cloud/",
    description: "Step left/right on stairs; fall and it's over.",
    category: "GameApplication",
  },
  {
    name: "Daily Tetris",
    url: "https://tet.funnyfunny.cloud/",
    description: "Tetris with solo AI and two-player mode.",
    category: "GameApplication",
  },
  {
    name: "Warm Gift Report",
    url: "https://xmas.funnyfunny.cloud/",
    description: "Check the probability of a warm gift arrival.",
    category: "LifestyleApplication",
  },
  {
    name: "Palm Reading Story",
    url: "https://hand.funnyfunny.cloud/",
    description: "Palm-line analysis from a single photo in seconds.",
    category: "LifestyleApplication",
  },
  {
    name: "Soccer Combo",
    url: "https://soccer.funnyfunny.cloud/",
    description: "Combine two play styles to find the footballer you resemble.",
    category: "EntertainmentApplication",
  },
  {
    name: "Neon Pinball Random Draw",
    url: "https://random.funnyfunny.cloud/",
    description: "A neon pinball game that selects random winners.",
    category: "GameApplication",
  },
  {
    name: "One-Line Fortune",
    url: "https://fortune.funnyfunny.cloud/",
    description: "Pick a daily fortune line based on your mood.",
    category: "LifestyleApplication",
  },
  {
    name: "Daily Wisdom",
    url: "https://wisdom.funnyfunny.cloud/",
    description: "Choose a daily line inspired by scripture.",
    category: "LifestyleApplication",
  },
  {
    name: "Maybe Not a Coincidence",
    url: "https://heal.funnyfunny.cloud/",
    description: "A one-click comfort card.",
    category: "LifestyleApplication",
  },
  {
    name: "The One Line I Need",
    url: "https://need.funnyfunny.cloud/",
    description: "Get a comforting line based on your emotion and situation.",
    category: "LifestyleApplication",
  },
  {
    name: "Temple Daily Quote",
    url: "https://temple.funnyfunny.cloud/",
    description: "Daily lines based on Buddhist teachings in modern language.",
    category: "LifestyleApplication",
  },
];

const seoFaq = [
  {
    question: "What services does FunnyFunny Cloud provide?",
    answer:
      "funnyfunny.cloud helps you review everyday spending, time, and habit data through tests and calculators.\n\nAll services are designed and built in-house to help users understand their patterns and compare them against realistic benchmarks.\n\nResults are for reference only and meant to support everyday choices and planning. The site is operated safely and transparently in compliance with Google policies.",
  },
  {
    question: "Is it free to use?",
    answer:
      "All services are free to use without logging in, and you can share links without restrictions.",
  },
  {
    question: "Is it mobile-friendly?",
    answer:
      "Yes. The UI is optimized for mobile, and the random button helps you start quickly.",
  },
  {
    question: "Are new services added?",
    answer:
      "We regularly add new services aligned with popular topics and trends, visible in the full list and search.",
  },
];

function getAllServices(lang = "en") {
  const isKo = lang === "ko";

  return [
    {
      href: "https://today.funnyfunny.cloud",
      icon: "🌱",
      title: isKo ? "오늘, 잘했어" : "Today, Well Done",
      desc: isKo ? "오늘 내가 잘한 일은?" : "What did I do well today?",
      tags: isKo
        ? ["리마인더", "칭찬", "루틴", "회고"]
        : ["reminder", "praise", "routine", "reflection"],
    },
    {
      href: "https://todo.funnyfunny.cloud/",
      icon: "✅",
      title: isKo ? "오늘의 할 일" : "Today's To-Do",
      desc: isKo
        ? "집중할 일만 남기고 깔끔하게 체크하자."
        : "Keep only focus tasks and check them off cleanly.",
      tags: isKo
        ? ["할일", "작업", "체크리스트", "집중"]
        : ["todo", "tasks", "checklist", "focus"],
    },
    {
      href: "https://dream.funnyfunny.cloud/",
      icon: "💭",
      title: isKo ? "꿈 일기" : "Dream Diary",
      desc: isKo
        ? "태그로 정리하는 로컬 꿈 기록장."
        : "A local dream journal with tagging.",
      tags: isKo
        ? ["꿈", "일기", "기록", "로컬"]
        : ["dreams", "journal", "records", "local"],
    },
    {
      href: "https://rest.funnyfunny.cloud",
      icon: "🛋️",
      title: isKo ? "이 정도면 쉬어야 할까?" : "Should I Rest Now?",
      desc: isKo
        ? "지금 쉬어도 될지 확인하는 짧은 설문."
        : "A short survey to check if you should rest now.",
      tags: isKo
        ? ["휴식", "컨디션", "설문", "번아웃"]
        : ["rest", "condition", "survey", "burnout"],
    },
    {
      href: "https://dailycheck.funnyfunny.cloud/",
      icon: "📝",
      title: isKo ? "하루 컨디션 체크" : "Daily Condition Check",
      desc: isKo
        ? "5가지 체크로 오늘의 컨디션을 한 줄로 정리."
        : "Summarize today’s condition in one line with 5 checks.",
      tags: isKo
        ? ["컨디션", "상태", "체크", "요약", "한줄"]
        : ["condition", "status", "check", "summary", "one-line"],
    },
    {
      href: "https://sleep.funnyfunny.cloud",
      icon: "🌙",
      title: isKo ? "잠들기 도우미" : "Sleep Helper",
      desc: isKo
        ? "코골이와 주변 소음을 덮는 수면 사운드 플레이어."
        : "Sleep sound player that masks snoring and noise.",
      tags: isKo
        ? ["수면", "백색소음", "환경음", "휴식"]
        : ["sleep", "white-noise", "ambient", "rest"],
    },
    {
      href: "https://motivate.funnyfunny.cloud/",
      icon: "🔥",
      title: isKo ? "동기부여 리셋" : "Motivation Reset",
      desc: isKo
        ? "마음을 리셋할 짧은 한 문장 받기."
        : "Get a short line to reset your mindset.",
      tags: isKo
        ? ["동기부여", "마음가짐", "리셋", "집중"]
        : ["motivation", "mindset", "reset", "focus"],
    },
    {
      href: "https://flow.funnyfunny.cloud/",
      icon: "🧵",
      title: isKo ? "FLOW 커뮤니티" : "FLOW Community",
      desc: isKo
        ? "의견을 공유하는 스레드형 게시판."
        : "A thread-style board for sharing opinions.",
      tags: isKo
        ? ["커뮤니티", "게시판", "토론"]
        : ["community", "board", "discussion"],
    },
    {
      href: "https://coffee.funnyfunny.cloud",
      icon: "☕",
      title: isKo ? "커피 중독 테스트" : "Coffee Addiction Test",
      desc: isKo
        ? "카페인 의존도와 회복 횟수 확인."
        : "Check caffeine dependence and revival count.",
      tags: isKo
        ? ["카페인", "커피", "건강", "중독"]
        : ["caffeine", "coffee", "health", "addiction"],
    },
    {
      href: "https://beauty.funnyfunny.cloud",
      icon: "💄",
      title: isKo ? "꾸밈비 파산 테스트" : "Beauty Bankruptcy Test",
      desc: isKo
        ? "뷰티 지출의 영향력을 체감하기."
        : "Feel the impact of your beauty spending.",
      tags: isKo
        ? ["뷰티", "지출", "소비"]
        : ["beauty", "spending", "consumption"],
    },
    {
      href: "https://cosmetics.funnyfunny.cloud",
      icon: "🧴",
      title: isKo ? "화장품 루틴 체크" : "Cosmetics Routine Check",
      desc: isKo
        ? "루틴의 부족·과잉을 확인하고 최소 추천 받기."
        : "Check routine gaps or overloads and get a minimal recommendation.",
      tags: isKo
        ? ["화장품", "루틴", "스킨케어", "체크"]
        : ["cosmetics", "routine", "skincare", "check"],
    },
    {
      href: "https://next.funnyfunny.cloud",
      icon: "🔮",
      title: isKo ? "2026년의 나" : "Future Me 2026",
      desc: isKo
        ? "습관, 돈, 관계, 집중력이 만드는 1년 후 루트."
        : "Your one-year route shaped by habits, money, relationships, and focus.",
      tags: isKo
        ? ["미래", "습관", "집중", "관계"]
        : ["future", "habits", "focus", "relationships"],
    },
    {
      href: "https://year.funnyfunny.cloud",
      icon: "🧾",
      title: isKo ? "올해 나의 인생 소비 보고서" : "Life Spending Report",
      desc: isKo
        ? "돈, 시간, 감정 흐름을 3분 안에 요약."
        : "A 3-minute summary of money, time, and emotion flow.",
      tags: isKo
        ? ["연말", "지출", "시간", "감정"]
        : ["year-end", "spending", "time", "emotion"],
    },
    {
      href: "https://winter.funnyfunny.cloud",
      icon: "❄️",
      title: isKo ? "이번 겨울, 나를 망치는 것 TOP 1" : "Winter Trigger Top 1",
      desc: isKo
        ? "겨울 루틴을 무너뜨리는 최고의 트리거 찾기."
        : "Find the top trigger that breaks your winter routine.",
      tags: isKo
        ? ["겨울", "습관", "컨디션", "리셋"]
        : ["winter", "habits", "condition", "reset"],
    },
    {
      href: "https://energy.funnyfunny.cloud",
      icon: "⚡",
      title: isKo ? "생명 에너지 밸런스" : "Life Energy Balance",
      desc: isKo
        ? "번아웃 지점과 회복 가이드 확인."
        : "Identify burnout points and recovery guides.",
      tags: isKo
        ? ["에너지", "번아웃", "회복"]
        : ["energy", "burnout", "recovery"],
    },
    {
      href: "https://product.funnyfunny.cloud",
      icon: "🚀",
      title: isKo ? "하루 생산성 체크" : "Daily Productivity Check",
      desc: isKo
        ? "집중, 에너지, 결정 상태를 빠르게 확인."
        : "Quickly check focus, energy, and decision state.",
      tags: isKo
        ? ["생산성", "집중", "루틴"]
        : ["productivity", "focus", "routine"],
    },
    {
      href: "https://mental.funnyfunny.cloud",
      icon: "🧠",
      title: isKo ? "하루 뇌력 지수" : "Daily Mental Stamina Index",
      desc: isKo
        ? "오늘의 뇌 에너지와 집중 상태 평가."
        : "Assess today’s brain energy and focus state.",
      tags: isKo
        ? ["정신", "집중", "컨디션"]
        : ["mental", "focus", "condition"],
    },
    {
      href: "https://commute.funnyfunny.cloud/",
      icon: "⏰",
      title: isKo
        ? "출퇴근 비용·시간 계산기"
        : "Commute Cost & Time Calculator",
      desc: isKo
        ? "출퇴근 비용과 시간을 계산하고 활용 아이디어 받기."
        : "Calculate commute cost and time, and get usage ideas.",
      tags: isKo
        ? ["출퇴근", "시간", "비용", "교통", "루틴"]
        : ["commute", "time", "cost", "transport", "routine"],
    },
    {
      href: "https://human.funnyfunny.cloud",
      icon: "🙃",
      title: isKo ? "나를 고갈시키는 사람들" : "People Who Drain Me",
      desc: isKo
        ? "이 테스트는 당신을 평가하지 않습니다."
        : "This test does not evaluate you.",
      tags: isKo
        ? ["관계", "성격", "유형"]
        : ["relationships", "personality", "types"],
    },
    {
      href: "https://ego.funnyfunny.cloud",
      icon: "🧬",
      title: isKo ? "EGO 테스트" : "EGO Test",
      desc: isKo
        ? "성격 테스트가 아닙니다. 갈등, 스트레스, 선택 속의 자아를 분석합니다."
        : "Not a personality test. Analyze ego under conflict, stress, and choices.",
      tags: isKo ? ["자아", "스트레스", "갈등"] : ["ego", "stress", "conflict"],
    },
    {
      href: "https://money.funnyfunny.cloud",
      icon: "🛡️",
      title: isKo ? "자산 방탄 지수" : "Asset Shield Index",
      desc: isKo
        ? "경제 하락에 대한 회복력 측정."
        : "Measure your resilience against economic downturns.",
      tags: isKo ? ["금융", "리스크", "자산"] : ["finance", "risk", "assets"],
    },
    {
      href: "https://specific.funnyfunny.cloud/",
      icon: "🧮",
      title: isKo ? "자산 비중 진단" : "Asset Allocation Check",
      desc: isKo
        ? "현금, 금, 부동산, 주식, 코인 비중 확인."
        : "Check your cash, gold, real estate, stock, and crypto ratios.",
      tags: isKo
        ? ["자산", "포트폴리오", "배분", "진단", "금융"]
        : ["assets", "portfolio", "allocation", "diagnosis", "finance"],
    },
    {
      href: "https://life.funnyfunny.cloud",
      icon: "⏰",
      title: isKo ? "인생 시간 대시보드" : "Life Time Dashboard",
      desc: isKo
        ? "여유 시간, 수면, 커리어에 남은 시간."
        : "Remaining time for free time, sleep, and career.",
      tags: isKo ? ["시간", "대시보드", "인생"] : ["time", "dashboard", "life"],
    },
    {
      href: "https://soul.funnyfunny.cloud",
      icon: "🔮",
      title: isKo ? "SoulPrint" : "SoulPrint",
      desc: isKo
        ? "출생 데이터 기반의 독특한 성격 분석."
        : "A unique personality analysis based on birth data.",
      tags: isKo
        ? ["성격", "출생", "분석"]
        : ["personality", "birth", "analysis"],
    },
    {
      href: "https://saju.funnyfunny.cloud/",
      icon: "🔮",
      title: isKo ? "사주풀이 · 신토정비결" : "Saju & Sintojungbi",
      desc: isKo
        ? "생년월일/시간으로 사주팔자와 연월 흐름 읽기."
        : "Read four pillars and yearly/monthly flow by birth date/time.",
      tags: isKo
        ? ["사주", "운세", "신토정비결", "해석"]
        : ["saju", "fortune", "sintojungbi", "reading"],
    },
    {
      href: "https://senseyear.funnyfunny.cloud",
      icon: "🎵",
      title: isKo ? "출생연도 바이브 테스트" : "Birth-Year Vibe Test",
      desc: isKo
        ? "12가지 빠른 질문으로 나의 바이브 찾기."
        : "Find your vibe through 12 quick questions.",
      tags: isKo
        ? ["바이브", "테스트", "성격"]
        : ["vibe", "test", "personality"],
    },
    {
      href: "https://alcohol.funnyfunny.cloud",
      icon: "🍺",
      title: isKo ? "알코올 MBTI" : "Alcohol MBTI",
      desc: isKo ? "음주 스타일 MBTI." : "Drinking style MBTI.",
      tags: isKo
        ? ["음주", "알코올", "스타일"]
        : ["drinking", "alcohol", "style"],
    },
    {
      href: "https://lazy.funnyfunny.cloud",
      icon: "😴",
      title: isKo ? "무기력 진단" : "Laziness Diagnostic",
      desc: isKo
        ? "7가지 요인으로 무기력 원인 찾기."
        : "Find causes of lethargy across 7 factors.",
      tags: isKo
        ? ["무기력", "게으름", "진단"]
        : ["lethargy", "laziness", "diagnosis"],
    },
    {
      href: "https://average.funnyfunny.cloud",
      icon: "📊",
      title: isKo ? "한국 평균 vs 나" : "Korea Average vs Me",
      desc: isKo
        ? "소득, 지출, 습관을 국가 평균과 비교."
        : "Compare your income, spending, and habits to national averages.",
      tags: isKo
        ? ["평균", "통계", "비교"]
        : ["average", "stats", "comparison"],
    },
    {
      href: "https://drain.funnyfunny.cloud",
      icon: "⚡",
      title: isKo ? "생명 에너지 누수 진단" : "Life Energy Leak Diagnostic",
      desc: isKo
        ? "지금 에너지가 어디서 새고 있나?"
        : "Where is your energy leaking right now?",
      tags: isKo ? ["에너지", "피로", "누수"] : ["energy", "fatigue", "leak"],
    },
    {
      href: "https://maldives.funnyfunny.cloud",
      icon: "🏝️",
      title: isKo ? "몰디브 매치" : "Maldives Match",
      desc: isKo
        ? "나의 몰디브 여행 스타일 찾기."
        : "Find your Maldives travel style.",
      tags: isKo
        ? ["여행", "리조트", "몰디브"]
        : ["travel", "resort", "maldives"],
    },
    {
      href: "https://bit.funnyfunny.cloud",
      icon: "💸",
      title: isKo ? "비트코인 안 산 죄" : "Bitcoin Regret",
      desc: isKo
        ? "그때 샀다면 지금 얼마일까?"
        : "If you bought then, how much would it be now?",
      tags: isKo
        ? ["비트코인", "투자", "기회비용"]
        : ["bitcoin", "investment", "opportunity-cost"],
    },
    {
      href: "https://house.funnyfunny.cloud",
      icon: "🏠",
      title: isKo ? "집 못 산 죄" : "Missed House Opportunity",
      desc: isKo ? "지금 격차는 얼마나 클까?" : "How big is the gap now?",
      tags: isKo
        ? ["부동산", "투자", "시뮬레이터"]
        : ["real-estate", "investment", "simulator"],
    },
    {
      href: "https://invest.funnyfunny.cloud",
      icon: "📈",
      title: isKo ? "투자 확신 빌더" : "Investment Confidence Builder",
      desc: isKo
        ? "수익률이 아니라 판단을 기록해 흔들림 줄이기."
        : "Log your judgment, not returns, to reduce wobbles.",
      tags: isKo
        ? ["투자", "결정", "기록", "확신", "마음가짐"]
        : ["investing", "decision", "logging", "confidence", "mindset"],
    },
    {
      href: "https://space.funnyfunny.cloud",
      icon: "📐",
      title: isKo ? "평수 계산기" : "Pyeong Calculator",
      desc: isKo
        ? "평을 제곱미터로 변환하고 대표 평형 확인."
        : "Convert pyeong to square meters and check typical sizes.",
      tags: isKo
        ? ["부동산", "평", "면적", "계산기"]
        : ["real-estate", "pyeong", "area", "calculator"],
    },
    {
      href: "https://nospend.funnyfunny.cloud",
      icon: "💸",
      title: isKo ? "안 산 것의 총 자산" : "Total Wealth of What I Didn't Buy",
      desc: isKo
        ? '"안 샀으면"을 숫자로 바꾸기.'
        : 'Turn "if only I hadn\'t bought it" into numbers.',
      tags: isKo
        ? ["저축", "총자산", "기회비용"]
        : ["saving", "total-wealth", "opportunity-cost"],
    },
    {
      href: "https://n.funnyfunny.cloud/",
      icon: "🍽️",
      title: isKo ? "N빵 계산기" : "Split-the-Bill Calculator",
      desc: isKo
        ? "장소, 인원, 총액 입력으로 1인당 비용 계산·복사."
        : "Enter venue, headcount, and total to calculate and copy per-person cost.",
      tags: isKo
        ? ["계산기", "비용", "식사", "나눔", "복사"]
        : ["calculator", "cost", "meal", "split", "copy"],
    },
    {
      href: "https://edu.funnyfunny.cloud",
      icon: "🎓",
      title: isKo ? "사교육 지옥도" : "Private Education Hell Map",
      desc: isKo
        ? "교육비 인생 시뮬레이터."
        : "An education cost life simulator.",
      tags: isKo
        ? ["교육", "지출", "시뮬레이션"]
        : ["education", "spending", "simulation"],
    },
    {
      href: "https://baby.funnyfunny.cloud/",
      icon: "👶",
      title: isKo ? "출산율 체감 테스트" : "Birthrate Reality Test",
      desc: isKo
        ? "이건 미래 예측이 아니라 현재일 수 있습니다."
        : "This may be the present, not a future prediction.",
      tags: isKo
        ? ["출산율", "인구", "사회", "테스트"]
        : ["birthrate", "population", "society", "test"],
    },
    {
      href: "https://miracle.funnyfunny.cloud/",
      icon: "🌍",
      title: isKo ? "더 좋은 조건에서 태어날 확률" : "Better Birth Odds",
      desc: isKo
        ? "출생 조건을 비교하고 더 나은 환경 확률 확인."
        : "Compare birth conditions and check your odds of a better environment.",
      tags: isKo
        ? ["출생", "확률", "국가", "비교", "사회"]
        : ["birth", "probability", "country", "comparison", "society"],
    },
    {
      href: "https://health.funnyfunny.cloud",
      icon: "🩺",
      title: isKo ? "건강수명 & 은퇴 준비" : "Healthspan & Retirement",
      desc: isKo
        ? "건강수명에 대한 재미있는 접근."
        : "A playful take on healthspan.",
      tags: isKo
        ? ["건강", "은퇴", "장수"]
        : ["health", "retirement", "longevity"],
    },
    {
      href: "https://bmi.funnyfunny.cloud/",
      icon: "📏",
      title: isKo ? "BMI 설문형 다이어트 플랜" : "BMI Survey Diet Plan",
      desc: isKo
        ? "한 번씩만 딸각. 숫자 한 번 입력. 놀랍도록 도움됨."
        : "Tap once each. Enter numbers once. Surprisingly helpful.",
      tags: isKo
        ? ["BMI", "다이어트", "설문", "플랜"]
        : ["BMI", "diet", "survey", "plan"],
    },
    {
      href: "https://cook.funnyfunny.cloud",
      icon: "🍱",
      title: isKo ? "오늘 뭐 먹지?" : "What to Eat Today?",
      desc: isKo
        ? "오늘의 랜덤 메뉴 추천."
        : "Random menu recommendations for the day.",
      tags: isKo
        ? ["음식", "추천", "랜덤"]
        : ["food", "recommendation", "random"],
    },
    {
      href: "https://chef.funnyfunny.cloud/",
      icon: "👨‍🍳",
      title: isKo ? "셰프 심사위원: 오늘의 선택" : "Chef Judge: Today's Choice",
      desc: isKo
        ? "선택을 돕는 밈 스타일 심사 멘트."
        : "Meme-style judging comments for your choice.",
      tags: isKo
        ? ["셰프", "심사", "선택", "밈"]
        : ["chef", "judge", "choice", "meme"],
    },
    {
      href: "https://pick.funnyfunny.cloud",
      icon: "🍿",
      title: isKo ? "OTT 픽" : "OTT Pick",
      desc: isKo
        ? "검색 없이 바로 영화·드라마 추천."
        : "Instant movie and drama recommendations without searching.",
      tags: isKo
        ? ["영화", "드라마", "OTT", "추천"]
        : ["movies", "drama", "OTT", "recommendation"],
    },
    {
      href: "https://lotto.funnyfunny.cloud/",
      icon: "🎟️",
      title: isKo ? "로또 번호 뽑기" : "Lotto Number Picker",
      desc: isKo
        ? "원클릭 로또 번호 조합."
        : "One-click lotto number combinations.",
      tags: isKo
        ? ["로또", "추천", "번호", "랜덤"]
        : ["lotto", "recommendation", "numbers", "random"],
    },
    {
      href: "https://anju.funnyfunny.cloud",
      icon: "🍢",
      title: isKo ? "오늘의 안주 페어링" : "Today's Snack Pairing",
      desc: isKo
        ? "술과 함께할 랜덤 안주 추천."
        : "Random snack pairing for drinks.",
      tags: isKo ? ["안주", "술", "랜덤"] : ["snack", "drinks", "random"],
    },
    {
      href: "https://cafe.funnyfunny.cloud",
      icon: "☕",
      title: isKo ? "카페 지출 역전" : "Cafe Spending Reversal",
      desc: isKo
        ? "30세까지 커피가 얼마나 들었을까?"
        : "How much did coffee cost you by age 30?",
      tags: isKo
        ? ["카페", "지출", "소비"]
        : ["cafe", "spending", "consumption"],
    },
    {
      href: "https://drink.funnyfunny.cloud",
      icon: "🍺",
      title: isKo ? "그 술, 지금 얼마?" : "That Drink, Now How Much?",
      desc: isKo
        ? "월 음주비 vs 투자했을 때 금액."
        : "Monthly alcohol spend vs invested amount.",
      tags: isKo
        ? ["알코올", "투자", "비용"]
        : ["alcohol", "investment", "cost"],
    },
    {
      href: "https://waste.funnyfunny.cloud",
      icon: "♻️",
      title: isKo ? "낭비 지수" : "Waste Index",
      desc: isKo
        ? "쓴 돈을 낭비 점수로 변환."
        : "Convert money spent into a waste score.",
      tags: isKo ? ["낭비", "돈", "습관"] : ["waste", "money", "habits"],
    },
    {
      href: "https://joke.funnyfunny.cloud",
      icon: "🤣",
      title: isKo ? "오늘의 아재 개그" : "Dad Jokes of the Day",
      desc: isKo
        ? "공유하기 좋은 짧은 웃음."
        : "Shareable jokes for a quick laugh.",
      tags: isKo ? ["아재개그", "유머", "밈"] : ["dad-jokes", "humor", "meme"],
    },
    {
      href: "https://fortune.funnyfunny.cloud",
      icon: "🔮",
      title: isKo ? "오늘의 한 줄 운세" : "One-Line Fortune",
      desc: isKo
        ? "기분에 따라 뽑는 하루 한 줄 운세."
        : "A daily fortune line based on your mood.",
      tags: isKo ? ["운세", "기분", "한줄"] : ["fortune", "mood", "one-line"],
    },
    {
      href: "https://wisdom.funnyfunny.cloud",
      icon: "📜",
      title: isKo ? "오늘의 지혜" : "Daily Wisdom",
      desc: isKo
        ? "성경에서 영감을 받은 하루 한 문장."
        : "A daily line inspired by scripture.",
      tags: isKo
        ? ["지혜", "성경", "명언", "하루"]
        : ["wisdom", "scripture", "quote", "daily"],
    },
    {
      href: "https://heal.funnyfunny.cloud",
      icon: "💌",
      title: isKo ? "우연이 아닐지도" : "Maybe Not a Coincidence",
      desc: isKo ? "원클릭 위로 카드." : "A comfort card with one click.",
      tags: isKo ? ["위로", "힐링", "카드"] : ["comfort", "healing", "card"],
    },
    {
      href: "https://need.funnyfunny.cloud/",
      icon: "🧭",
      title: isKo ? "지금 나에게 가장 필요한 한마디" : "The One Line I Need",
      desc: isKo
        ? "감정과 상황을 클릭해 오늘의 한 문장 받기."
        : "Click your emotion and situation for today’s line.",
      tags: isKo
        ? ["감정", "상황", "위로", "한줄"]
        : ["emotion", "situation", "comfort", "one-line"],
    },
    {
      href: "https://temple.funnyfunny.cloud/",
      icon: "🛕",
      title: isKo ? "하루 한 문장 (Temple)" : "Temple Daily Quote",
      desc: isKo
        ? "불교 가르침을 오늘의 언어로 풀어낸 하루 한 문장."
        : "Daily lines based on Buddhist teachings in modern language.",
      tags: isKo
        ? ["불교", "명상", "명언", "하루"]
        : ["buddhism", "meditation", "quote", "daily"],
    },
    {
      href: "https://mind.funnyfunny.cloud",
      icon: "🧠",
      title: isKo ? "오늘의 마음챙김" : "Today's Mindfulness",
      desc: isKo ? "차분함을 위한 한 줄 명언." : "A one-line quote for calm.",
      tags: isKo
        ? ["마음챙김", "명언", "힐링"]
        : ["mindfulness", "quote", "healing"],
    },
    {
      href: "https://beat.funnyfunny.cloud",
      icon: "🥁",
      title: isKo ? "드럼 비트 연습" : "Drum Beat Trainer",
      desc: isKo
        ? "메트로놈 + 기본 패턴 연습."
        : "Metronome plus basic pattern practice.",
      tags: isKo ? ["드럼", "리듬", "연습"] : ["drum", "rhythm", "practice"],
    },
    {
      href: "https://audio.funnyfunny.cloud",
      icon: "🎵",
      title: isKo ? "Simple Audio Editor" : "Simple Audio Editor",
      desc: isKo
        ? "브라우저에서 바로 오디오 편집."
        : "Audio editing directly in the browser.",
      tags: isKo ? ["오디오", "편집", "도구"] : ["audio", "editing", "tool"],
    },
    {
      href: "https://music.funnyfunny.cloud",
      icon: "🎵",
      title: isKo ? "지금 이 시간에 어울리는 음악" : "Music for This Moment",
      desc: isKo
        ? "오늘의 리듬에 맞는 음악 무드."
        : "Music moods that fit today’s rhythm.",
      tags: isKo
        ? ["음악", "무드", "추천", "플레이리스트"]
        : ["music", "mood", "recommendation", "playlist"],
    },
    {
      href: "https://vocal.funnyfunny.cloud",
      icon: "🎤",
      title: isKo ? "두성터득기" : "Head Voice Trainer",
      desc: isKo
        ? "호흡과 공명 루틴으로 두성 연습."
        : "Breathing and resonance routines for head voice.",
      tags: isKo
        ? ["보컬", "두성", "연습"]
        : ["vocal", "head-voice", "practice"],
    },
    {
      href: "https://video.funnyfunny.cloud",
      icon: "🎬",
      title: isKo ? "AutoCut Studio" : "AutoCut Studio",
      desc: isKo
        ? "침묵 감지로 하이라이트·점프컷 타임라인 자동 생성."
        : "Auto-create highlight and jump-cut timelines via silence detection.",
      tags: isKo
        ? ["영상편집", "유튜브", "점프컷", "하이라이트"]
        : ["video-editing", "youtube", "jump-cut", "highlights"],
    },
    {
      href: "https://file.funnyfunny.cloud/",
      icon: "🗜️",
      title: isKo
        ? "로컬 이미지 최적화 & 파일 인사이트"
        : "Local Image Optimizer & File Insights",
      desc: isKo
        ? "WebP/JPEG 재인코딩, 자동 리사이즈, 로컬 파일 정보·해시·미리보기 확인."
        : "Re-encode WebP/JPEG, auto-resize, and view local file info, hashes, and previews.",
      tags: isKo
        ? ["이미지", "최적화", "로컬", "파일정보", "해시"]
        : ["image", "optimizer", "local", "file-info", "hash"],
    },
    {
      href: "http://heic.funnyfunny.cloud/",
      icon: "📷",
      title: isKo ? "HEIC to JPG 변환기" : "HEIC to JPG Converter",
      desc: isKo
        ? "압축, 리사이즈, ZIP 내보내기로 HEIC를 JPG/WebP/PNG로 변환."
        : "Convert HEIC to JPG/WebP/PNG with compression, resize, and ZIP export.",
      tags: isKo
        ? ["HEIC", "JPG", "변환", "압축", "리사이즈", "ZIP", "WebP", "PNG"]
        : [
            "HEIC",
            "JPG",
            "convert",
            "compress",
            "resize",
            "ZIP",
            "WebP",
            "PNG",
          ],
    },
    {
      href: "https://meta.funnyfunny.cloud",
      icon: "🧰",
      title: isKo
        ? "Meta Kit — SEO · OG · Favicon"
        : "Meta Kit — SEO · OG · Favicon",
      desc: isKo
        ? "메타 태그, OG/Twitter 카드, 파비콘 입력 후 생성·복사. OG 텍스트는 영문만 사용."
        : "Enter meta tags, OG/Twitter cards, and favicons to generate and copy. OG text uses English.",
      tags: isKo
        ? ["메타태그", "OG", "SEO", "파비콘", "OG이미지"]
        : ["meta-tags", "OG", "SEO", "favicon", "OG-image"],
    },
    {
      href: "https://image.funnyfunny.cloud",
      icon: "🖼️",
      title: isKo ? "이미지 합치기 & PDF 변환" : "Image Merge & PDF Converter",
      desc: isKo
        ? "드래그로 순서 정렬 후 한 장 이미지 또는 PDF로 저장."
        : "Drag to reorder and save as one image or PDF.",
      tags: isKo
        ? ["이미지", "PDF", "합치기", "편집"]
        : ["image", "PDF", "merge", "edit"],
    },
    {
      href: "https://ocr.funnyfunny.cloud",
      icon: "🔍",
      title: isKo ? "이미지 텍스트 추출" : "Image Text Extractor",
      desc: isKo
        ? "사진에서 텍스트 자동 추출."
        : "Extract text from photos automatically.",
      tags: isKo
        ? ["OCR", "텍스트", "사진", "변환"]
        : ["OCR", "text", "photo", "convert"],
    },
    {
      href: "https://time.funnyfunny.cloud",
      icon: "⏰",
      title: isKo ? "예매는타이밍" : "Time Checker",
      desc: isKo
        ? "정확한 서버 시간과 예매 도우미."
        : "Accurate server time and ticketing helper.",
      tags: isKo
        ? ["시간", "서버시간", "예매"]
        : ["time", "server-time", "ticketing"],
    },
    {
      href: "https://news.funnyfunny.cloud",
      icon: "📰",
      title: isKo ? "오늘의 IT 뉴스" : "IT News Today",
      desc: isKo
        ? "국내·해외 IT 뉴스 빠른 요약."
        : "Quick summaries of domestic and global IT news.",
      tags: isKo ? ["뉴스", "IT", "요약"] : ["news", "IT", "summary"],
    },
    {
      href: "https://weather.funnyfunny.cloud",
      icon: "🌤️",
      title: isKo ? "지금날씨" : "Current Weather",
      desc: isKo
        ? "내 근처 날씨 조건 확인."
        : "Check nearby weather conditions.",
      tags: isKo ? ["날씨", "미세먼지", "자외선"] : ["weather", "dust", "UV"],
    },
    {
      href: "https://emojicon.funnyfunny.cloud",
      icon: "🎨",
      title: isKo ? "EmojiCon Studio" : "EmojiCon Studio",
      desc: isKo
        ? "이모지로 아이콘·파비콘 제작."
        : "Create icons and favicons from emojis.",
      tags: isKo
        ? ["아이콘", "파비콘", "이모지"]
        : ["icons", "favicon", "emoji"],
    },
    {
      href: "https://snaptrail.funnyfunny.cloud",
      icon: "📍",
      title: isKo ? "SnapTrail" : "SnapTrail",
      desc: isKo
        ? "자동 그룹화된 사진 타임라인 생성기."
        : "Automatically grouped photo timeline generator.",
      tags: isKo
        ? ["사진", "타임라인", "추억"]
        : ["photos", "timeline", "memories"],
    },
    {
      href: "https://day.funnyfunny.cloud",
      icon: "📅",
      title: isKo ? "D-day 계산기" : "D-day Calculator",
      desc: isKo
        ? "날짜 계산, D-day, N일 후, 기념일, 위젯."
        : "Date calculations, D-Day, days after, anniversaries, widgets.",
      tags: isKo
        ? ["날짜", "D-day", "기념일"]
        : ["date", "D-day", "anniversary"],
    },
    {
      href: "https://run.funnyfunny.cloud",
      icon: "🦖",
      title: isKo ? "공룡 러너" : "Dino Runner",
      desc: isKo
        ? "공룡 러너 스타일 랭킹 게임."
        : "Dino runner-style ranking game.",
      tags: isKo ? ["게임", "공룡", "랭킹"] : ["game", "dino", "ranking"],
    },
    {
      href: "https://charm.funnyfunny.cloud",
      icon: "🛸",
      title: isKo ? "Charm (NEON ARCADE)" : "Charm (NEON ARCADE)",
      desc: isKo
        ? "차선을 바꿔 미사일 피하기."
        : "Switch lanes to dodge missiles.",
      tags: isKo ? ["게임", "아케이드", "회피"] : ["game", "arcade", "dodge"],
    },
    {
      href: "https://downy.funnyfunny.cloud/",
      icon: "🪜",
      title: isKo ? "Downy (NEON STAIRS)" : "Downy (NEON STAIRS)",
      desc: isKo
        ? "계단에서 좌우로 발 디디기. 떨어지면 끝."
        : "Step left/right on stairs; fall and it’s over.",
      tags: isKo ? ["게임", "아케이드", "계단"] : ["game", "arcade", "stairs"],
    },
    {
      href: "https://tet.funnyfunny.cloud/",
      icon: "🧱",
      title: isKo ? "데일리 테트리스" : "Daily Tetris",
      desc: isKo
        ? "솔로 AI와 2인용 지원 테트리스."
        : "Tetris with solo AI and two-player support.",
      tags: isKo
        ? ["게임", "테트리스", "퍼즐", "2인용"]
        : ["game", "tetris", "puzzle", "two-player"],
    },
    {
      href: "https://random.funnyfunny.cloud/",
      icon: "🎱",
      title: isKo ? "네온 핀볼 랜덤 뽑기" : "Neon Pinball Random Draw",
      desc: isKo
        ? "굴러가는 핀볼로 랜덤 당첨자 선택."
        : "Rolling pinballs pick a random winner.",
      tags: isKo ? ["게임", "랜덤", "핀볼"] : ["game", "random", "pinball"],
    },
    {
      href: "https://balance.funnyfunny.cloud/",
      icon: "⚖️",
      title: isKo ? "밸런스 게임" : "Balance Game",
      desc: isKo
        ? "두 가지 선택 질문 만들고 바로 공유."
        : "Create two-choice questions and share instantly.",
      tags: isKo
        ? ["게임", "밸런스", "질문", "선택"]
        : ["game", "balance", "questions", "choices"],
    },
    {
      href: "https://xmas.funnyfunny.cloud/",
      icon: "🎁",
      title: isKo ? "따뜻한 선물 보고서" : "Warm Gift Report",
      desc: isKo
        ? "🎯 따뜻한 선물 도착 확률."
        : "🎯 Probability of a warm gift arrival.",
      tags: isKo
        ? ["크리스마스", "선물", "확률", "보고서"]
        : ["christmas", "gift", "probability", "report"],
    },
    {
      href: "https://hand.funnyfunny.cloud/",
      icon: "✋",
      title: isKo ? "손바닥 썰 푼다" : "Palm Reading Story",
      desc: isKo
        ? "사진 한 장으로 손금 인사이트."
        : "Palm-line insights from a single photo.",
      tags: isKo
        ? ["손금", "성격", "분석", "사진"]
        : ["palm", "personality", "analysis", "photo"],
    },
    {
      href: "https://soccer.funnyfunny.cloud/",
      icon: "⚽",
      title: isKo ? "우리 둘의 조합 축구선수" : "Soccer Combo",
      desc: isKo
        ? "두 성향을 섞어 맞는 축구선수 찾기."
        : "Combine two personalities to find a matching footballer.",
      tags: isKo
        ? ["축구", "조합", "궁합", "테스트"]
        : ["soccer", "combo", "compatibility", "test"],
    },
    {
      href: "http://sudoku.funnyfunny.cloud/",
      icon: "🧩",
      title: "Sudoku Web Game",
      desc: "Classic sudoku with selectable difficulty.",
      tags: isKo
        ? ["스도쿠", "퍼즐", "게임", "두뇌"]
        : ["sudoku", "puzzle", "game", "brain"],
    },
  ];
}

const pageCopy = {
  ko: {
    headerHeroTitle: "유용할 수 있는 서비스, 놀이터",
    ctaPrimarySmall: "랜덤",
    ctaPrimaryLarge: "랜덤 열기",
    langKorean: "한국어",
    langEnglish: "English",
    heroBadgeMain: "❄️ 스노우 위크",
    heroBadgeSub: "쉽게 즐기기",
    heroTitle: "겨울이 길게 느껴질 때 클릭할 테스트들",
    heroSubtitle:
      "이번 겨울을 여유롭게 보내고, 더 나은 순간들로 2026년을 시작하세요.",
    heroServiceCount: "총 {count}개 서비스",
    searchPlaceholder: "예: 커피, 투자, 마음챙김",
    searchResultsTitle: "검색 결과",
    searchTagResults: '"{tag}" 태그: {count}개 서비스',
    searchQueryResults: '"{query}" 검색: {count}개 결과',
    searchCount: "{count}개 항목",
    searchBottomSummary: "{count}개 검색 결과",
    searchBottomEmpty: "새로운 서비스가 곧 여기에 나타날 예정입니다.",
    searchResetButton: "초기화",
    searchNoMatches: "해당 키워드와 일치하는 서비스가 없습니다.",
    searchNoMatchesHint: "다른 키워드나 태그를 시도해보세요.",
    tagsMore: "더 많은 태그 ({count})",
    tagsCollapse: "태그 숨기기",
    randomButtonSmall: "랜덤 열기",
    randomButtonLarge: "랜덤 테스트 열기",
    quickFlow: "FLOW 게시판",
    quickAshlight: "AshLight",
    topUtilityHeading: "🧰 유용한 유틸리티 추천",
    insightCtaTitle: "오늘의 한 줄 인사이트",
    hubCtaTitle: "나를 이해하는 가장 간단한 방법",
    utilsCtaTitle: "유용한 서비스",
    viewAllServices: "모든 서비스 보기",
    recommendedContentLabel: "추천 콘텐츠",
    usefulServicesTitle: "유용한 서비스",
    footerIntroTitle: "funnyfunny.cloud 소개",
    footerIntroDescription1:
      "funnyfunny.cloud는 재미있는 유틸리티, 테스트, 계산기, 정보 도구를 통해 일상의 데이터를 전달합니다.",
    footerIntroHighlight: "",
    footerIntroDescription2: "",
    footerIntroDescription3:
      "모든 광고와 요소는 안전한 운영을 위해 Google 정책을 준수합니다.",
    footerOperationTitle: "운영 정보",
    footerOperationDeveloperLabel: "개발 및 운영:",
    footerOperationContactLabel: "문의:",
    footerLinkPrivacy: "개인정보 처리방침",
    footerLinkTerms: "서비스 이용약관",
    footerLinkCopyright: "저작권 안내",
    footerLinkPolicy: "운영 정책",
    footerCopyright: "© 2025 FunnyFunny Cloud by AshLight.",
  },
  en: {
    headerHeroTitle: "Useful services, playground",
    ctaPrimarySmall: "Random",
    ctaPrimaryLarge: "Open random tool",
    langKorean: "한국어",
    langEnglish: "English",
    heroBadgeMain: "❄️ Snow Week",
    heroBadgeSub: "Easy to enjoy",
    heroTitle: "Tests to click when winter feels long",
    heroSubtitle: "Relax this winter and start 2026 with better moments.",
    heroServiceCount: "{count} services in total",
    searchPlaceholder: "Try: coffee, investment, mindfulness",
    searchResultsTitle: "Search results",
    searchTagResults: '"{tag}" tag: {count} services',
    searchQueryResults: '"{query}" search: {count} results',
    searchCount: "{count} entries",
    searchBottomSummary: "{count} search results",
    searchBottomEmpty: "New services will appear here shortly.",
    searchResetButton: "Reset",
    searchNoMatches: "No services match that keyword.",
    searchNoMatchesHint: "Try another keyword or tag.",
    tagsMore: "More tags ({count})",
    tagsCollapse: "Hide tags",
    randomButtonSmall: "Open random",
    randomButtonLarge: "Open random test",
    quickFlow: "FLOW board",
    quickAshlight: "AshLight",
    topUtilityHeading: "🧰 Useful utility picks",
    insightCtaTitle: "Today's single-line insight",
    hubCtaTitle: "The simplest way to understand me",
    utilsCtaTitle: "Helpful services",
    viewAllServices: "View all services",
    recommendedContentLabel: "Recommended content",
    usefulServicesTitle: "Helpful services",
    footerIntroTitle: "About funnyfunny.cloud",
    footerIntroDescription1:
      "funnyfunny.cloud delivers everyday data through fun utilities, tests, calculators, and informative tools.",
    footerIntroHighlight: "",
    footerIntroDescription2: "",
    footerIntroDescription3:
      "All ads and elements comply with Google's policies for safe operation.",
    footerOperationTitle: "Operation info",
    footerOperationDeveloperLabel: "Developed and operated by:",
    footerOperationContactLabel: "Contact:",
    footerLinkPrivacy: "Privacy policy",
    footerLinkTerms: "Terms of service",
    footerLinkCopyright: "Copyright notice",
    footerLinkPolicy: "Operating policy",
    footerCopyright: "© 2025 FunnyFunny Cloud by AshLight.",
    badgeLocalOnly: "Local only",
    badgeSEOBundle: "SEO bundle",
    badgeConverter: "Converter",
    badgeOCR: "OCR",
    badgeTimeTool: "Time tool",
    badgeLive: "Live",
    badgeSummary: "Summary",
    badgeEdit: "Edit",
    badgeIcons: "Icons",
    communityBoard: "Community / Board",
    openLabel: "Open",
    adLabel: "AD",
    dableLabel: "Dable",
    openFLOW: "Open FLOW",
    hubTitle: "The simplest way to understand me",
    sectionPsychology: "Psychology & Traits",
    sectionMoney: "Money & Investing",
    label3MinQuick: "3-minute quick",
    labelRealityCheck: "Reality check",
    flowBoardDesc:
      "FLOW board with thread + forum vibes, post and read on mobile",
    sectionHealth: "Health & Lifestyle",
    sectionFun: "Fun & Memes",
    labelQuickCheck: "Quick check",
    label1MinChill: "1-minute chill",
    faqTitle: "Frequently Asked Questions",
    allServicesTitle: "All Services",
    searchNoMatches: "No tests match that keyword.",
    searchNoMatchesHint: "Try a different spelling or keyword.",
    guidesLabel: "Guides",
    viewAllGuides: "View all guides",
    quickBarMessage: "Enjoy without pressure",
    quickBarHub: "Hub",
    quickBarRandomGift: "Random gift",
    servicesReady: "services are ready right now.",
    searchHint: "Search by keyword or click to open.",
    sectionGames: "Games",
    gameLeaderboard: "Leaderboard",
    gameNeonArcade: "NEON ARCADE",
    gameNeonStairs: "NEON STAIRS",
    game2Player: "2-player",
    gameNeonPinball: "NEON PINBALL",
    gameRunDesc: "Dino runner-style ranking game",
    gameCharmDesc: "Just switch lanes to dodge the missiles.",
    gameDownyDesc: "Switch lanes to step on stairs, fall and it's over!",
    gameTetrisDesc: "Tetris with single (AI) and 2-player modes",
    gamePinballDesc: "The rolling ball on the board picks randomly.",
    winterPicks: "Winter Picks",
    winterPicksTitle: "Popular tests to enjoy in winter",
    winterPicksDesc:
      "Pick a few favorites from what people are viewing right now.",
    winterMoodWrecker: "Winter Mood Wrecker",
    lifeSpendingReport: "Life Spending Report",
    bitcoinGuilt: "Bitcoin Guilt",
    ottPicks: "OTT Picks",
    energyLeak: "Energy Leak",
    hubTitle: "나를 이해하는 가장 간단한 방법",
    sectionPsychology: "심리 & 특성",
    sectionMoney: "돈 & 투자",
    label3MinQuick: "3분 컷",
    labelRealityCheck: "현실 체크",
    flowBoardDesc: "스레드 + 포럼 느낌의 게시판, 모바일에서 글쓰고 읽기",
    sectionHealth: "건강 & 라이프스타일",
    sectionFun: "재미 & 밈",
    labelQuickCheck: "빠른 체크",
    label1MinChill: "1분 여유",
    faqTitle: "자주 묻는 질문",
    allServicesTitle: "모든 서비스",
    searchNoMatches: "해당 키워드와 일치하는 서비스가 없습니다.",
    searchNoMatchesHint: "다른 키워드나 태그를 시도해보세요.",
    guidesLabel: "가이드",
    viewAllGuides: "모든 가이드 보기",
    quickBarMessage: "부담 없이 즐기세요",
    quickBarHub: "Hub",
    quickBarRandomGift: "랜덤 선물",
    servicesReady: "개의 서비스가 준비되어 있습니다.",
    searchHint: "키워드로 검색하거나 클릭하여 열 수 있습니다.",
    sectionGames: "게임",
    gameLeaderboard: "랭킹",
    gameNeonArcade: "네온 아케이드",
    gameNeonStairs: "네온 계단",
    game2Player: "2인용",
    gameNeonPinball: "네온 핀볼",
    gameRunDesc: "공룡 러너 스타일 랭킹 게임",
    gameCharmDesc: "차선을 바꿔 미사일을 피하세요.",
    gameDownyDesc: "계단에서 좌우로 발 디디기. 떨어지면 끝!",
    gameTetrisDesc: "솔로(AI)와 2인용 모드 테트리스",
    gamePinballDesc: "보드 위 굴러가는 공이 랜덤으로 선택합니다.",
    winterPicks: "겨울 추천",
    winterPicksTitle: "겨울에 즐기기 좋은 인기 테스트",
    winterPicksDesc:
      "지금 사람들이 보고 있는 것 중에서 몇 가지를 선택해보세요.",
    winterMoodWrecker: "겨울 무드 파괴자",
    lifeSpendingReport: "인생 소비 보고서",
    bitcoinGuilt: "비트코인 안 산 죄",
    ottPicks: "OTT 픽",
    energyLeak: "에너지 누수",
  },
};

function formatTemplate(template, vars = {}) {
  if (typeof template !== "string") return template;
  return template.replace(/\{(.*?)\}/g, (_, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : ""
  );
}

const defaultLang = "en";

function getInitialLang() {
  if (typeof window === "undefined") return defaultLang;
  const stored = window.localStorage?.getItem("preferredLang");
  if (stored && pageCopy[stored]) {
    return stored;
  }
  const hasNavigator = typeof navigator !== "undefined";
  if (hasNavigator) {
    const browserLang =
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;
    if (browserLang && browserLang.toLowerCase().startsWith("ko")) {
      return "ko";
    }
  }
  return defaultLang;
}

export function HomeContent() {
  const [lang, setLang] = useState(getInitialLang);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [tagsExpanded, setTagsExpanded] = useState(false);
  const translationPack = pageCopy[lang] || pageCopy[defaultLang];
  const fallbackPack = pageCopy[defaultLang];
  const allServices = getAllServices(lang);
  const seoGuides = getSeoGuides(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage?.setItem("preferredLang", lang);
  }, [lang]);

  const t = (key, vars = {}) =>
    formatTemplate(translationPack[key] ?? fallbackPack[key] ?? key, vars);
  const handleLangChange = (nextLang) => {
    setLang(pageCopy[nextLang] ? nextLang : defaultLang);
  };

  // Helper function to get translated service name by href
  const getServiceTitle = (href) => {
    const service = allServices.find(
      (s) => s.href === href || s.href === href + "/"
    );
    return service ? service.title : href;
  };

  useEffect(() => {
    const handler = (e) => {
      const a = e.target?.closest?.("a[data-amp-service]");
      if (!a) return;
      try {
        const href = a.getAttribute("href") || "";
        const service = a.getAttribute("data-amp-service") || "";
        const section = a.getAttribute("data-amp-section") || "";
        window.amplitude?.track?.("service_click", {
          service,
          section,
          href,
        });
      } catch (_) {
        // noop
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  useEffect(() => {
    function openRandomTool() {
      const url = randomTools[Math.floor(Math.random() * randomTools.length)];
      window.open(url, "_blank");
    }

    const buttons = document.querySelectorAll("[data-random-btn]");
    buttons.forEach((btn) => btn.addEventListener("click", openRandomTool));

    return () =>
      buttons.forEach((btn) =>
        btn.removeEventListener("click", openRandomTool)
      );
  }, []);

  useEffect(() => {
    const quickBar = document.getElementById("quickBar");
    if (!quickBar) return;

    const onScroll = () => {
      const shouldShow = window.scrollY > 220;
      quickBar.style.transform = shouldShow
        ? "translateY(0)"
        : "translateY(24px)";
      quickBar.style.opacity = shouldShow ? "1" : "0";
      quickBar.style.pointerEvents = shouldShow ? "auto" : "none";
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const widgetContainerId = "dablewidget_6Xgdpy6o_37Jam9xo";

    if (window.dable) {
      window.dable("setService", "funnyfunny.cloud");
      window.dable("renderWidgetByWidth", widgetContainerId, {
        ignore_items: true,
      });
      return;
    }

    (function (d, a, b, l, e, r) {
      if (d[b] && d[b].q) return;
      d[b] = function () {
        (d[b].q = d[b].q || []).push(arguments);
      };
      e = a.createElement(l);
      e.async = 1;
      e.charset = "utf-8";
      e.src = "//static.dable.io/dist/plugin.min.js";
      r = a.getElementsByTagName(l)[0];
      r.parentNode.insertBefore(e, r);
    })(window, document, "dable", "script");

    window.dable("setService", "funnyfunny.cloud");
    window.dable("renderWidgetByWidth", widgetContainerId, {
      ignore_items: true,
    });
  }, []);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "FunnyFunny Cloud",
      alternateName: ["FunnyFunny", "FunnyFunny Cloud"],
      url: "https://funnyfunny.cloud",
      description:
        "funnyfunny.cloud is an information service that helps you check and compare everyday data like spending, time, and habits through tests and calculators. Results are provided for reference and to support daily decisions and management.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://funnyfunny.cloud/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      publisher: {
        "@type": "Organization",
        name: "AshLight",
        url: "https://funnyfunny.cloud",
        logo: "https://funnyfunny.cloud/favicon.svg",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: "https://funnyfunny.cloud",
      name: "FunnyFunny Cloud",
      alternateName: ["FunnyFunny", "FunnyFunny Cloud"],
      logo: "https://funnyfunny.cloud/favicon.svg",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Core Utilities",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      itemListElement: seoTopItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url,
        description: item.description,
      })),
    },
    ...seoApplications.map((app) => ({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: app.name,
      url: app.url,
      applicationCategory: app.category,
      operatingSystem: "All",
      description: app.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KRW",
      },
    })),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Guides",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      itemListElement: seoGuides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: `https://funnyfunny.cloud/guide/${guide.slug}`,
        description: guide.desc,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: seoFaq.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  // Extract all tags and sort by popularity (usage frequency).
  const tagCounts = {};
  allServices.forEach((service) => {
    (service.tags || []).forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  const allTags = Array.from(
    new Set(allServices.flatMap((service) => service.tags || []))
  ).sort((a, b) => {
    // Sort by usage count first, then alphabetically.
    const countDiff = tagCounts[b] - tagCounts[a];
    return countDiff !== 0 ? countDiff : a.localeCompare(b);
  });

  // Main tags (first 22, roughly two rows).
  const mainTags = allTags.slice(0, 22);
  const remainingTags = allTags.slice(22);

  const normalizedQuery = searchQuery.trim();

  const filteredServices = allServices.filter((test) => {
    // Tag filtering.
    if (selectedTag && !(test.tags || []).includes(selectedTag)) {
      return false;
    }
    // Query filtering.
    if (normalizedQuery) {
      const haystack = [test.title, test.desc, ...(test.tags || [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery.toLowerCase());
    }
    return true;
  });

  // Show results only when a query or tag is selected.
  const showSearchResults = normalizedQuery || selectedTag;

  return (
    <div className="relative bg-gradient-to-b from-[#0b1621] via-[#101f2e] to-[#14273b] text-slate-50 text-[15.5px] sm:text-[16px] leading-relaxed min-h-screen">
      <HeaderPortal lang={lang} onLangChange={handleLangChange} t={t} />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-sky-950/80"></div>
          <div className="absolute inset-0 snow-fall opacity-60 mix-blend-screen"></div>
          <div className="absolute -left-10 -top-10 w-48 h-48 bg-sky-200/25 blur-3xl"></div>
          <div className="absolute -right-10 bottom-0 w-48 h-48 bg-slate-200/20 blur-3xl"></div>

          <div className="relative mx-auto max-w-[440px] sm:max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
            <div className="w-full text-white">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200 bg-white/10 border border-white/20 px-3 py-1 rounded-full shadow">
                <span>{t("heroBadgeMain")}</span>
                <span className="text-slate-100">{t("heroBadgeSub")}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold leading-tight drop-shadow">
                    {t("heroTitle")}
                  </h2>
                  <p className="mt-3 text-base text-slate-100/90">
                    {t("heroSubtitle")}
                  </p>
                  <div className="mt-3 text-sm text-slate-200/80">
                    {t("heroServiceCount", { count: allServices.length })}
                  </div>
                </div>
                <div className="w-full sm:w-80 flex-shrink-0">
                  <label className="relative w-full">
                    <span className="absolute left-3 top-[calc(50%+2px)] -translate-y-[46%] text-slate-400 text-sm">
                      🔍
                    </span>
                    <input
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setSelectedTag("");
                      }}
                      placeholder={t("searchPlaceholder")}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white placeholder:text-slate-300 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300/30"
                    />
                  </label>
                </div>
              </div>
              {showSearchResults && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {t("searchResultsTitle")}
                      </h3>
                      <p className="text-sm text-slate-200/80 mt-1">
                        {selectedTag
                          ? t("searchTagResults", {
                              tag: selectedTag,
                              count: filteredServices.length,
                            })
                          : normalizedQuery
                          ? t("searchQueryResults", {
                              query: normalizedQuery,
                              count: filteredServices.length,
                            })
                          : t("searchCount", {
                              count: filteredServices.length,
                            })}
                      </p>
                    </div>
                    {(normalizedQuery || selectedTag) && (
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedTag("");
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-slate-200 text-sm font-semibold hover:bg-white/20 transition"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  {filteredServices.length === 0 ? (
                    <div className="p-6 rounded-2xl bg-white/10 border border-white/20 text-center text-sm text-slate-200">
                      <p>No services match that keyword.</p>
                      <p className="text-xs text-slate-300/80 mt-1">
                        Try another keyword or tag.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {filteredServices.map(
                        ({ href, icon, title, desc, tags }) => (
                          <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} - ${desc}`}
                            data-amp-service={title}
                            data-amp-section="search"
                            className="flex items-start gap-3 p-4 rounded-2xl bg-white/95 text-slate-900 shadow-sm border border-slate-200 hover:border-sky-300 hover:shadow-md transition"
                          >
                            <div className="text-xl">{icon}</div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg leading-snug text-slate-900">
                                {title}
                              </h4>
                              <p className="text-sm text-slate-700 mt-1">
                                {desc}
                              </p>
                              {tags && tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {tags.slice(0, 3).map((tag) => (
                                    <span
                                      key={tag}
                                      className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              )}

              {allTags.length > 0 && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {mainTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          setSelectedTag(selectedTag === tag ? "" : tag);
                          setSearchQuery("");
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                          selectedTag === tag
                            ? "bg-sky-200 text-slate-900 shadow-md"
                            : "bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                    {tagsExpanded &&
                      remainingTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => {
                            setSelectedTag(selectedTag === tag ? "" : tag);
                            setSearchQuery("");
                          }}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                            selectedTag === tag
                              ? "bg-sky-200 text-slate-900 shadow-md"
                              : "bg-white/10 border border-white/20 text-slate-200 hover:bg-white/20"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                  </div>
                  {remainingTags.length > 0 && (
                    <button
                      onClick={() => setTagsExpanded(!tagsExpanded)}
                      className="mt-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-slate-200 text-sm font-semibold hover:bg-white/20 transition"
                    >
                      {tagsExpanded
                        ? t("tagsCollapse")
                        : t("tagsMore", { count: remainingTags.length })}
                    </button>
                  )}
                </div>
              )}

              <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-3 sm:items-center">
                <button
                  data-random-btn
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-sky-200 via-cyan-200 to-slate-200 text-slate-900 text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition whitespace-nowrap"
                >
                  <span className="sm:hidden">{t("randomButtonSmall")}</span>
                  <span className="hidden sm:inline">
                    {t("randomButtonLarge")}
                  </span>
                </button>
              </div>

              <div className="mt-3 flex sm:hidden items-center gap-2">
                <a
                  href="https://flow.funnyfunny.cloud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/90 border border-slate-200 text-sm font-semibold text-slate-900 shadow-sm hover:border-sky-300 hover:text-slate-900 transition"
                >
                  <span>{t("quickFlow")}</span>
                </a>
                <a
                  href="https://funnyfunny.cloud"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/90 border border-slate-200 text-sm font-semibold text-slate-900 shadow-sm hover:border-sky-300 hover:text-slate-900 transition"
                >
                  <span>{t("quickAshlight")}</span>
                </a>
              </div>
            </div>
            <h2 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-100 bg-white/10 px-3 py-1 rounded-full shadow-sm border border-white/20 mt-16">
              {t("topUtilityHeading")}
            </h2>
            <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-3">
              <a
                href="https://file.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Local Image Optimizer & File Insights - reduce image size with one drag and view file info"
                data-amp-service="Local Image Optimizer & File Insights"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🗜️</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    {t("badgeLocalOnly")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://file.funnyfunny.cloud/")}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  WebP/JPEG re-encode, auto-resize, file info, hash
                </p>
              </a>
              <a
                href="https://meta.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Meta Kit — SEO · OG · Favicon - generate meta tags fast"
                data-amp-service="Meta Kit — SEO · OG · Favicon"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🧰</span>
                  <span className="text-xs font-semibold text-indigo-600">
                    {t("badgeSEOBundle")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://meta.funnyfunny.cloud")}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Auto-generate SEO/OG/favicon and copy-paste
                </p>
              </a>
              <a
                href="https://image.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Image Merge & PDF Converter - merge multiple images at once"
                data-amp-service="Image Merge & PDF Converter"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🖼️</span>
                  <span className="text-xs font-semibold text-fuchsia-600">
                    {t("badgeConverter")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://image.funnyfunny.cloud")}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Drag to sort → one image or PDF
                </p>
              </a>
              <a
                href="https://ocr.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Image Text Extractor - OCR text from photos"
                data-amp-service="Image Text Extractor"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🔍</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    {t("badgeOCR")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://ocr.funnyfunny.cloud")}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Copy text straight from photos
                </p>
              </a>
              <a
                href="https://time.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Time Checker - server time and time calculations"
                data-amp-service="Time Checker"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">⏰</span>
                  <span className="text-xs font-semibold text-blue-600">
                    {t("badgeTimeTool")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://time.funnyfunny.cloud")}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Accurate server time and time zones
                </p>
              </a>
              <a
                href="https://weather.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Current Weather - local weather, UV, dust"
                data-amp-service="Current Weather"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🌤️</span>
                  <span className="text-xs font-semibold text-sky-600">
                    {t("badgeLive")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://weather.funnyfunny.cloud")}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Feels-like temp, dust, and UV
                </p>
              </a>
              <a
                href="https://news.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IT News Today - quick IT news summary"
                data-amp-service="IT News Today"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">📰</span>
                  <span className="text-xs font-semibold text-orange-600">
                    {t("badgeSummary")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://news.funnyfunny.cloud")}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Quick IT news highlights
                </p>
              </a>
              <a
                href="https://audio.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Simple Audio Editor - browser audio editing"
                data-amp-service="Simple Audio Editor"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🎵</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    {t("badgeEdit")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://audio.funnyfunny.cloud")}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Trim, merge, export
                </p>
              </a>
              <a
                href="https://emojicon.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EmojiCon Studio - create emoji icons"
                data-amp-service="EmojiCon Studio"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🎨</span>
                  <span className="text-xs font-semibold text-amber-600">
                    {t("badgeIcons")}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://emojicon.funnyfunny.cloud")}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Emoji to icons and favicons
                </p>
              </a>
            </div>
            <div className="mt-6 sm:mt-8 grid gap-2 sm:grid-cols-3">
              <a
                href="#insight"
                className="flex items-center gap-2 p-3 rounded-xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition"
              >
                <span className="text-sm">💡</span>
                <p className="text-sm text-slate-700">{t("insightCtaTitle")}</p>
              </a>
              <a
                href="#hub"
                className="flex items-center gap-2 p-3 rounded-xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition"
              >
                <span className="text-sm">🧠</span>
                <p className="text-sm text-slate-700">{t("hubCtaTitle")}</p>
              </a>
              <a
                href="#utils"
                className="flex items-center gap-2 p-3 rounded-xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition"
              >
                <span className="text-sm">🛠️</span>
                <p className="text-sm text-slate-700">{t("utilsCtaTitle")}</p>
              </a>
            </div>

            <a
              href="#tests"
              className="w-full sm:w-auto inline-block text-center flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow hover:border-blue-300 hover:text-blue-700 hover:-translate-y-0.5 transition mt-16"
            >
              {t("viewAllServices")}
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-[440px] sm:max-w-5xl px-4 sm:px-6 py-8 sm:py-10">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                  {t("adLabel")}
                </span>
                <span>{t("recommendedContentLabel")}</span>
              </div>
              <span className="text-xs text-slate-400">{t("dableLabel")}</span>
            </div>
            <div className="p-4 sm:p-5">
              <div
                id="dablewidget_6Xgdpy6o_37Jam9xo"
                data-widget_id-pc="6Xgdpy6o"
                data-widget_id-mo="37Jam9xo"
              ></div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[440px] sm:max-w-5xl px-4 sm:px-6 py-12 sm:py-14 space-y-12">
          <div id="utils" className="scroll-mt-24 sm:scroll-mt-28 pt-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🛠️</span>
              <h3 className="text-xl font-bold">{t("usefulServicesTitle")}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {(() => {
                const isKo = lang === "ko";
                const utils = [
                  {
                    href: "https://flow.funnyfunny.cloud/",
                    title: isKo ? "🧵 FLOW Community" : "🧵 FLOW Community",
                    desc: isKo
                      ? "스레드 + 포럼 느낌의 게시판"
                      : "A board with thread + forum vibes",
                    detail: isKo
                      ? "익명 게시, 실시간 반응, 주제별 스레드로 빠르게 대화 시작"
                      : "Anonymous posting, live reactions, and topic threads to start chatting fast",
                  },
                  {
                    href: "https://video.funnyfunny.cloud",
                    title: isKo ? "🎬 AutoCut Studio" : "🎬 AutoCut Studio",
                    desc: isKo ? "자동 하이라이트 & 점프 컷" : "Auto highlight & jump cuts",
                    detail: isKo
                      ? "침묵 감지로 하이라이트 타임라인과 쇼츠 추출해 편집 시간 단축"
                      : "Detects silence to extract highlight timelines and shorts to cut editing time.",
                  },
                  {
                    href: "https://file.funnyfunny.cloud/",
                    title: isKo
                      ? "🗜️ 로컬 이미지 최적화 & 파일 인사이트"
                      : "🗜️ Local Image Optimizer & File Insights",
                    desc: isKo
                      ? "드래그 한 번으로 이미지 축소 + 파일 정보 확인"
                      : "One drag to shrink images + view file details",
                    detail: isKo
                      ? "WebP/JPEG 재인코딩, 자동 리사이즈, 파일 메타데이터/SHA-256 확인, 이미지/PDF/텍스트 미리보기 (업로드 불필요)"
                      : "Re-encode WebP/JPEG, auto-resize, and view file metadata, SHA-256, plus image/PDF/text previews without uploads.",
                  },
                  {
                    href: "https://meta.funnyfunny.cloud",
                    title: isKo
                      ? "🧰 Meta Kit — SEO · OG · Favicon"
                      : "🧰 Meta Kit — SEO · OG · Favicon",
                    desc: isKo
                      ? "메타 태그, 공유 카드, 아이콘을 한 번에 생성"
                      : "Generate meta tags, sharing cards, and icons in one go",
                    detail: isKo
                      ? "SEO/OG/Twitter 카드 + 파비콘 세트 입력 → 생성 → 복사. OG 이미지 텍스트는 영어만 지원"
                      : "Enter SEO/OG/Twitter cards + favicon set → generate → copy. OG image text supports English only.",
                  },
                  {
                    href: "https://image.funnyfunny.cloud",
                    title: isKo
                      ? "🖼️ 이미지 병합 & PDF 변환기"
                      : "🖼️ Image Merge & PDF Converter",
                    desc: isKo
                      ? "여러 이미지 업로드, 순서 변경, 하나의 이미지 또는 PDF로 저장"
                      : "Upload multiple images, reorder, and save as one image or PDF",
                    detail: isKo
                      ? "드래그로 순서 정렬 후 JPG/PNG/PDF로 일괄 내보내기"
                      : "Drag to order and export to JPG/PNG/PDF in one batch",
                  },
                  {
                    href: "https://space.funnyfunny.cloud",
                    title: isKo ? "📐 평수 계산기" : "📐 Pyeong Calculator",
                    desc: isKo
                      ? "평 ↔ 제곱미터 변환 + 일반적인 크기 확인"
                      : "Convert pyeong ↔ square meters + check typical sizes",
                    detail: isKo
                      ? "원룸, 오피스텔, 아파트를 위한 빠른 면적 변환기"
                      : "Quick area converter for studios, officetels, and apartments",
                  },
                  {
                    href: "https://ocr.funnyfunny.cloud",
                    title: isKo ? "🔍 이미지 텍스트 추출기" : "🔍 Image Text Extractor",
                    desc: isKo
                      ? "사진 속 텍스트 자동 읽기 및 텍스트로 복사"
                      : "Auto-read text in photos and copy as text",
                    detail: isKo
                      ? "영수증, 문서, 메모의 텍스트를 클립보드나 파일로 추출하는 OCR 도구"
                      : "OCR tool that extracts text from receipts, documents, or notes to clipboard or file",
                  },
                  {
                    href: "https://audio.funnyfunny.cloud",
                    title: isKo ? "🎵 간단한 오디오 편집기" : "🎵 Simple Audio Editor",
                    desc: isKo ? "브라우저에서 직접 오디오 편집" : "Edit audio directly in the browser",
                    detail: isKo
                      ? "설치 없이 자르기, 병합, 내보내기 — 100% 클라이언트 사이드"
                      : "Trim, merge, export with no install — 100% client-side",
                  },
                  {
                    href: "https://vocal.funnyfunny.cloud",
                    title: isKo ? "🎤 두성 트레이너" : "🎤 Head Voice Trainer",
                    desc: isKo ? "두성 연습 코치" : "Head voice practice coach",
                    detail: isKo
                      ? "호흡, 공명 워밍업, 스케일 따라하기로 5분 루틴 구성"
                      : "Build a 5-minute routine with breathing, resonance warmups, and scale-following.",
                  },
                  {
                    href: "https://time.funnyfunny.cloud",
                    title: isKo ? "⏰ 시간 확인기" : "⏰ Time Checker",
                    desc: isKo
                      ? "정확한 서버 시간 및 예약 도우미"
                      : "Accurate server time and booking helper",
                    detail: isKo
                      ? "모든 시간 관련 계산을 한 곳에서"
                      : "All time-related calculations in one place.",
                  },
                  {
                    href: "https://news.funnyfunny.cloud",
                    title: isKo ? "📰 IT 뉴스 오늘" : "📰 IT News Today",
                    desc: isKo
                      ? "국내외 IT 뉴스 빠른 요약"
                      : "Quick summaries of local and global IT news",
                    detail: isKo
                      ? "최신 기술 뉴스를 한눈에 확인"
                      : "See the latest tech news at a glance.",
                  },
                  {
                    href: "https://saju.funnyfunny.cloud/",
                    title: isKo
                      ? "🔮 사주 & 신토 운세"
                      : "🔮 Four Pillars & Shinto Fortune",
                    desc: isKo
                      ? "사주와 신토 운세 요약"
                      : "Four pillars and Shinto fortune summary",
                    detail: isKo
                      ? "생년월일/시간 입력으로 올해와 이번 달 트렌드 요약"
                      : "Enter birth date/time to summarize this year and month trends.",
                  },
                  {
                    href: "https://weather.funnyfunny.cloud",
                    title: isKo ? "🌤️ 지금날씨" : "🌤️ Current Weather",
                    desc: isKo
                      ? "내 근처 날씨 조건 확인"
                      : "Check nearby weather conditions",
                    detail: isKo
                      ? "미세먼지, 자외선, 체감온도 포함"
                      : "Includes fine dust, UV, and feels-like temperature.",
                  },
                  {
                    href: "https://pick.funnyfunny.cloud",
                    title: isKo
                      ? "🍿 뭐 볼까? (OTT 픽)"
                      : "🍿 What Should I Watch? (OTT Picks)",
                    desc: isKo
                      ? "몇 번의 클릭으로 영화나 드라마 추천 받기"
                      : "Get movie or drama picks in a few clicks",
                    detail: isKo
                      ? "후회 없는 선택을 위한 큐레이션된 한국 OTT 추천"
                      : "Curated Korean OTT picks for no-regrets choices",
                  },
                  {
                    href: "https://emojicon.funnyfunny.cloud",
                    title: isKo ? "🎨 EmojiCon Studio" : "🎨 EmojiCon Studio",
                    desc: isKo
                      ? "웹과 앱을 위한 이모지 아이콘 스튜디오"
                      : "Emoji icon studio for web and apps",
                    detail: isKo
                      ? "이모지 하나 입력으로 아이콘, 파비콘, 앱 스토어 크기 생성"
                      : "Enter one emoji to generate icons, favicons, and app store sizes",
                  },
                  {
                    href: "https://snaptrail.funnyfunny.cloud",
                    title: isKo ? "📍 SnapTrail" : "📍 SnapTrail",
                    desc: isKo ? "추억 타임라인 메이커" : "Memory timeline maker",
                    detail: isKo
                      ? "연도, 월, 지역별로 사진 자동 그룹화하여 연대순 타임라인 구성"
                      : "Auto-group photos by year, month, and region to build a chronological timeline",
                  },
                  {
                    href: "https://day.funnyfunny.cloud",
                    title: isKo ? "📅 D-day 계산기" : "📅 D-day Calculator",
                    desc: isKo
                      ? "날짜 계산, D-day, N일 후, 기념일, 위젯"
                      : "Date math, D-Day, N days later, anniversaries, widgets",
                    detail: isKo
                      ? "중요한 날짜를 쉽게 관리"
                      : "Manage important dates easily.",
                  },
                ];
                return utils.map(({ href, title, desc, detail }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 rounded-2xl bg-white text-slate-900 shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
                  >
                    <h4 className="font-bold text-lg">{title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{desc}</p>
                    <p className="text-xs text-gray-500 mt-2">{detail}</p>
                  </a>
                ));
              })()}
            </div>
          </div>
          <details className="sm:hidden rounded-2xl bg-white text-slate-900 shadow-sm border border-slate-200">
            <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-slate-900">
              <span className="font-semibold">{t("communityBoard")}</span>
              <span className="text-sm text-blue-600">{t("openLabel")}</span>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-sm text-slate-600 mb-2">
                {t("flowBoardDesc")}
              </p>
              <a
                href="https://flow.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold shadow hover:shadow-md transition"
              >
                {t("openFLOW")}
              </a>
            </div>
          </details>

          <div id="hub" className="scroll-mt-24 sm:scroll-mt-28">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🧭</span>
              <h3 className="text-xl font-bold">{t("hubTitle")}</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🧠</span>
                    <h4 className="font-semibold text-slate-900">
                      {t("sectionPsychology")}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-600">
                    {t("label3MinQuick")}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    className="block hover:text-blue-600"
                    href="https://today.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌱 {getServiceTitle("https://today.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://next.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔮 {getServiceTitle("https://next.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://mental.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧠 {getServiceTitle("https://mental.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://energy.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⚡ {getServiceTitle("https://energy.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://rest.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🛋️ {getServiceTitle("https://rest.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://product.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🚀 {getServiceTitle("https://product.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://lazy.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    😴 {getServiceTitle("https://lazy.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://human.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🙃 {getServiceTitle("https://human.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://soul.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔮 {getServiceTitle("https://soul.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://senseyear.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🎵 {getServiceTitle("https://senseyear.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://alcohol.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍺 {getServiceTitle("https://alcohol.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://ego.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧬 {getServiceTitle("https://ego.funnyfunny.cloud")}
                  </a>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">💰</span>
                    <h4 className="font-semibold text-slate-900">
                      {t("sectionMoney")}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-600">
                    {t("labelRealityCheck")}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    className="block hover:text-blue-600"
                    href="https://bit.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💸 {getServiceTitle("https://bit.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://house.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🏠 {getServiceTitle("https://house.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://invest.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📈 {getServiceTitle("https://invest.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://space.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📐 {getServiceTitle("https://space.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://year.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧾 {getServiceTitle("https://year.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://money.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🛡️ {getServiceTitle("https://money.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://specific.funnyfunny.cloud/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧮 {getServiceTitle("https://specific.funnyfunny.cloud/")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://edu.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🎓 {getServiceTitle("https://edu.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://average.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📊 {getServiceTitle("https://average.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://nospend.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💸 {getServiceTitle("https://nospend.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://waste.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ♻️ {getServiceTitle("https://waste.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://cafe.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ☕ {getServiceTitle("https://cafe.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://drink.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍺 {getServiceTitle("https://drink.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://beauty.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💄 {getServiceTitle("https://beauty.funnyfunny.cloud")}
                  </a>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🌿</span>
                    <h4 className="font-semibold text-slate-900">
                      {t("sectionHealth")}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-600">
                    {t("labelQuickCheck")}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    className="block hover:text-blue-600"
                    href="https://winter.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ❄️ {getServiceTitle("https://winter.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://coffee.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ☕ {getServiceTitle("https://coffee.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://rest.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🛋️ {getServiceTitle("https://rest.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://health.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🩺 {getServiceTitle("https://health.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://cook.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍱 {getServiceTitle("https://cook.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://anju.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍢 {getServiceTitle("https://anju.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://life.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⏰ {getServiceTitle("https://life.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://weather.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌤️ {getServiceTitle("https://weather.funnyfunny.cloud")}
                  </a>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎉</span>
                    <h4 className="font-semibold text-slate-900">
                      {t("sectionFun")}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-600">
                    {t("label1MinChill")}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    className="block hover:text-blue-600"
                    href="https://joke.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🤣 {getServiceTitle("https://joke.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://fortune.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔮 {getServiceTitle("https://fortune.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://soccer.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⚽ {getServiceTitle("https://soccer.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://mind.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧠 {getServiceTitle("https://mind.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://random.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🎱 {getServiceTitle("https://random.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://beat.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🥁 Drum Beat Practice
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://pick.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍿 {getServiceTitle("https://pick.funnyfunny.cloud")}
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://snaptrail.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📍 {getServiceTitle("https://snaptrail.funnyfunny.cloud")}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="insight" className="scroll-mt-24 sm:scroll-mt-28 pt-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">💡</span>
              <h3 className="text-xl font-bold">
                {t("insightCtaTitle")}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {(() => {
                const isKo = lang === "ko";
                const insights = [
                  {
                    href: "https://heal.funnyfunny.cloud",
                    icon: "💌",
                    desc: isKo
                      ? "클릭 한 번으로 위로 카드"
                      : "One click for a comfort card",
                    detail: isKo
                      ? "오늘 필요한 말을 전달"
                      : "Delivers the words you need today",
                  },
                  {
                    href: "https://fortune.funnyfunny.cloud",
                    icon: "🔮",
                    desc: isKo
                      ? "기분에 맞는 운세 한 줄 선택"
                      : "Pick a fortune line based on your mood",
                    detail: isKo
                      ? "지금 순간에 맞는 메시지 확인"
                      : "See a message that matches your moment",
                  },
                  {
                    href: "https://wisdom.funnyfunny.cloud",
                    icon: "📜",
                    desc: isKo ? "하루 한 줄 지혜" : "Daily Wisdom in one line",
                    detail: isKo
                      ? "성경 가르침에서 영감을 받은 한 줄 메시지"
                      : "A one-line message inspired by biblical teachings",
                  },
                  {
                    href: "https://news.funnyfunny.cloud",
                    icon: "📰",
                    desc: isKo
                      ? "국내외 IT 뉴스 빠른 요약"
                      : "Quick summaries of local and global IT news",
                    detail: isKo
                      ? "최신 기술 업데이트를 한눈에 확인"
                      : "See the latest tech updates at a glance.",
                  },
                  {
                    href: "https://joke.funnyfunny.cloud",
                    icon: "😄",
                    desc: isKo
                      ? "공유할 만한 유머 모음"
                      : "Share-worthy joke collection",
                    detail: isKo
                      ? "웃음이 최고의 약"
                      : "Laughter is the best medicine",
                  },
                  {
                    href: "https://mind.funnyfunny.cloud",
                    icon: "🧠",
                    desc: isKo
                      ? "한 줄 명언으로 치유"
                      : "Heal with a one-line quote",
                    detail: isKo ? "마음을 가볍게" : "Lighten your mind",
                  },
                  {
                    href: "https://motivate.funnyfunny.cloud/",
                    icon: "🔥",
                    desc: isKo
                      ? "재집중을 위한 짧은 한 줄"
                      : "A short line to refocus",
                    detail: isKo
                      ? "몇 초 만에 마음가짐 리셋"
                      : "Reset your mindset in seconds",
                  },
                ];
                return insights.map(({ href, icon, desc, detail }) => {
                  const serviceTitle = getServiceTitle(href);
                  return (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-5 rounded-2xl bg-white text-slate-900 shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
                    >
                      <h4 className="font-bold text-lg">{icon} {serviceTitle}</h4>
                      <p className="text-sm text-gray-600 mt-1">{desc}</p>
                      <p className="text-xs text-gray-500 mt-2">{detail}</p>
                    </a>
                  );
                });
              })()}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 bg-white/70 px-3 py-1 rounded-full shadow-sm border border-emerald-100">
              {t("sectionGames")}
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <a
                href="https://run.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Run — dino runner-style leaderboard game"
                data-amp-service="Run"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🦖</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    {t("gameLeaderboard")}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://run.funnyfunny.cloud")}
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  {t("gameRunDesc")}
                </p>
              </a>
              <a
                href="https://charm.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cham Cham Cham! (NEON ARCADE) - switch lanes to dodge missiles"
                data-amp-service="Cham Cham Cham! (NEON ARCADE)"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🛸</span>
                  <span className="text-xs font-semibold text-purple-600">
                    {t("gameNeonArcade")}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://charm.funnyfunny.cloud/")}
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  {t("gameCharmDesc")}
                </p>
              </a>
              <a
                href="https://downy.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Downy (NEON STAIRS) - switch lanes to climb stairs, fall and it's over"
                data-amp-service="Downy (NEON STAIRS)"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🪜</span>
                  <span className="text-xs font-semibold text-blue-600">
                    {t("gameNeonStairs")}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://downy.funnyfunny.cloud/")}
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  {t("gameDownyDesc")}
                </p>
              </a>
              <a
                href="https://tet.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="One Round Tetris - single (AI) and 2-player modes"
                data-amp-service="One Round Tetris"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🧱</span>
                  <span className="text-xs font-semibold text-orange-600">
                    {t("game2Player")}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://tet.funnyfunny.cloud/")}
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  {t("gameTetrisDesc")}
                </p>
              </a>
              <a
                href="https://random.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neon Pinball Random Picker - the rolling ball picks for you"
                data-amp-service="Neon Pinball Random Picker"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🎱</span>
                  <span className="text-xs font-semibold text-amber-600">
                    {t("gameNeonPinball")}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://random.funnyfunny.cloud/")}
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  {t("gamePinballDesc")}
                </p>
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-emerald-900 via-red-800 to-emerald-900 text-white pt-6 pb-6 pl-[54px] pr-[54px] sm:pt-14 sm:pb-14 sm:pl-[70px] sm:pr-[70px] shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-amber-200">
                  {t("winterPicks")}
                </p>
                <h4 className="mt-1 text-2xl font-bold">
                  {t("winterPicksTitle")}
                </h4>
                <p className="mt-2 text-sm text-emerald-50/90">
                  {t("winterPicksDesc")}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 sm:max-w-2xl">
                <a
                  href="https://winter.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-slate-900 font-semibold text-sm shadow hover:-translate-y-0.5 transition whitespace-nowrap"
                >
                  {getServiceTitle("https://winter.funnyfunny.cloud")}
                </a>
                <a
                  href="https://year.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-slate-900 font-semibold text-sm shadow hover:-translate-y-0.5 transition whitespace-nowrap"
                >
                  {getServiceTitle("https://year.funnyfunny.cloud")}
                </a>
                <a
                  href="https://bit.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  {getServiceTitle("https://bit.funnyfunny.cloud")}
                </a>
                <a
                  href="https://pick.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  {getServiceTitle("https://pick.funnyfunny.cloud")}
                </a>
                <a
                  href="https://drain.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  {getServiceTitle("https://drain.funnyfunny.cloud")}
                </a>
                <a
                  href="https://rest.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  {getServiceTitle("https://rest.funnyfunny.cloud")}
                </a>
                <a
                  href="https://coffee.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  {getServiceTitle("https://coffee.funnyfunny.cloud")}
                </a>
                <a
                  href="https://hand.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  {getServiceTitle("https://hand.funnyfunny.cloud")}
                </a>
                <a
                  href="https://mind.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  {getServiceTitle("https://mind.funnyfunny.cloud")}
                </a>
              </div>
            </div>
          </div>

          <div
            id="faq"
            className="rounded-2xl bg-white/95 border border-emerald-200 shadow-lg p-6 sm:p-8 space-y-4 text-slate-900"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">❓</span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-700">
                  FAQ
                </p>
                <h3 className="text-xl font-bold">{t("faqTitle")}</h3>
              </div>
            </div>
            <div className="divide-y divide-emerald-100">
              {seoFaq.map((item) => (
                <details key={item.question} className="py-3 group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700">
                      {item.question}
                    </span>
                    <span className="text-emerald-400 text-lg group-open:rotate-45 transition">
                      +
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div id="tests" className="scroll-mt-24 sm:scroll-mt-28 pt-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🧪</span>
              <h3 className="text-xl font-bold">{t("allServicesTitle")}</h3>
            </div>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-emerald-100">
                  {allServices.length} {t("servicesReady")}
                </p>
                <p className="text-xs text-emerald-100/80">{t("searchHint")}</p>
              </div>
              <label className="relative w-full sm:w-80">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  🔍
                </span>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("searchPlaceholder")}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white shadow-sm text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </label>
            </div>
            <div className="flex items-center justify-between text-xs text-emerald-100/90 mb-3">
              <span>
                {normalizedQuery
                  ? t("searchBottomSummary", {
                      count: filteredServices.length,
                    })
                  : t("searchBottomEmpty")}
              </span>
              {normalizedQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-200 text-slate-900 shadow-sm hover:border-red-300 hover:text-red-700 transition"
                >
                  {t("searchResetButton")}
                </button>
              )}
            </div>
            {filteredServices.length === 0 ? (
              <div className="p-6 rounded-2xl bg-white border border-dashed border-slate-200 text-center text-sm text-slate-600">
                <p>{t("searchNoMatches")}</p>
                <p className="text-xs text-slate-400 mt-1">
                  {t("searchNoMatchesHint")}
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {filteredServices.map(({ href, icon, title, desc }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} - ${desc}`}
                    data-amp-service={title}
                    data-amp-section="all"
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/95 text-slate-900 shadow-sm border border-emerald-200 hover:border-amber-300 hover:shadow-md transition"
                  >
                    <div className="text-xl">{icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg leading-snug text-slate-900">
                        {title}
                      </h4>
                      <p className="text-sm text-slate-700">{desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-[440px] sm:max-w-5xl px-4 sm:px-6 pb-10 sm:pb-12">
          <div className="mt-6 sm:mt-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 bg-white px-3 py-1 rounded-full shadow-sm border border-emerald-100">
              {t("guidesLabel")}
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {seoGuides.map((guide) => (
                <a
                  key={guide.slug}
                  href={`/guide/${guide.slug}`}
                  aria-label={`${guide.title} - ${guide.desc}`}
                  data-amp-service={guide.title}
                  data-amp-section="guides"
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition"
                >
                  <div className="text-xl">{guide.emoji}</div>
                  <div>
                    <h3 className="font-semibold text-base text-slate-900">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">{guide.desc}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-3">
              <a
                href="/guide"
                aria-label={t("viewAllGuides")}
                data-amp-service={t("viewAllGuides")}
                data-amp-section="guides"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-800 shadow-sm hover:border-blue-400 hover:text-blue-700 transition"
              >
                {t("viewAllGuides")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterPortal t={t} />

      <div
        id="quickBar"
        className="fixed inset-x-0 bottom-3 px-4 sm:px-6 transition transform translate-y-24 opacity-0 pointer-events-none"
      >
        <div className="mx-auto max-w-[440px] sm:max-w-3xl bg-gradient-to-r from-red-600 via-amber-400 to-emerald-600 text-slate-900 rounded-2xl shadow-2xl flex items-center justify-between px-4 py-3 gap-3">
          <div className="text-sm font-semibold drop-shadow">
            {t("quickBarMessage")}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#hub"
              className="px-3 py-2 rounded-full bg-white/80 text-slate-900 text-sm font-semibold hover:-translate-y-0.5 transition"
            >
              {t("quickBarHub")}
            </a>
            <button
              data-random-btn
              className="px-3 py-2 rounded-full bg-white/90 text-slate-900 text-sm font-semibold hover:-translate-y-0.5 transition"
            >
              {t("quickBarRandomGift")}
            </button>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </div>
  );
}
