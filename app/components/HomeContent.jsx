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
];

const seoTopItems = [
  {
    name: "로컬 이미지 최적화 & 파일 인사이트",
    url: "https://file.funnyfunny.cloud/",
    description:
      "드래그 한 번으로 WebP/JPEG 재인코딩·자동 리사이즈로 이미지 용량을 줄이고, 업로드 없는 파일 정보·SHA-256·미리보기를 제공하는 로컬 전용 도구",
  },
  {
    name: "Meta Kit — SEO · OG · Favicon",
    url: "https://meta.funnyfunny.cloud",
    description:
      "메타태그·OG/Twitter 카드·파비콘을 한 번에 생성하고, OG 이미지 텍스트(영문)까지 자동으로 만들어 복붙할 수 있는 메타 생성기",
  },
  {
    name: "이미지 합치기 & PDF 변환",
    url: "https://image.funnyfunny.cloud",
    description:
      "여러 장을 업로드해 드래그로 순서를 맞춘 뒤 한 장 이미지나 PDF로 저장하는 변환기",
  },
  {
    name: "이미지 텍스트 추출",
    url: "https://ocr.funnyfunny.cloud",
    description: "사진 속 글자를 자동으로 읽어 텍스트로 뽑는 OCR 변환기",
  },
  {
    name: "예매는타이밍",
    url: "https://time.funnyfunny.cloud",
    description: "정확한 서버시간·타임존 변환·시간 계산을 빠르게 제공",
  },
  {
    name: "지금날씨",
    url: "https://weather.funnyfunny.cloud",
    description: "내 근처 날씨·체감온도·미세먼지·자외선 정보를 제공",
  },
  {
    name: "오늘의 IT 뉴스",
    url: "https://news.funnyfunny.cloud",
    description: "국내/해외 IT 뉴스를 빠르게 요약한 큐레이션",
  },
  {
    name: "Simple Audio Editor",
    url: "https://audio.funnyfunny.cloud",
    description: "브라우저에서 바로 사용하는 오디오 편집 도구",
  },
  {
    name: "EmojiCon Studio",
    url: "https://emojicon.funnyfunny.cloud",
    description: "이모지 한 글자로 아이콘/파비콘을 한 번에 생성",
  },
];

const seoGuides = [
  {
    slug: "meta-kit",
    emoji: "🧰",
    title: "Meta Kit — SEO·OG·Favicon 번들 생성",
    desc: "메타태그·OG/Twitter 카드·파비콘·OG 이미지 텍스트(영문)를 입력 → 생성 → 복붙하는 방법",
  },
  {
    slug: "local-image-optimizer",
    emoji: "🗜️",
    title: "로컬 이미지 최적화 & 파일 인사이트 가이드",
    desc: "드래그 한 번으로 WebP/JPEG 재인코딩·자동 리사이즈하고, 로컬에서 파일 정보·SHA-256·미리보기까지 확인하는 법",
  },
  {
    slug: "heic-to-jpg",
    emoji: "📷",
    title: "HEIC → JPG 변환기 가이드",
    desc: "브라우저에서 HEIC를 JPG/WebP/PNG로 변환하고 압축·리사이즈·ZIP으로 받는 방법",
  },
  {
    slug: "pyeong-calculator",
    emoji: "📐",
    title: "평수 계산기 가이드",
    desc: "평↔제곱미터 변환과 원룸/아파트 대표 평형을 빠르게 계산하는 방법",
  },
  {
    slug: "nbang-calculator",
    emoji: "🍽️",
    title: "N빵 계산기 가이드",
    desc: "음식점 이름·인원·총금액을 입력해 1인당 금액을 계산하고 바로 클립보드로 복사하는 흐름",
  },
  {
    slug: "lotto-picker",
    emoji: "🎟️",
    title: "로또 추천기 가이드",
    desc: "버튼 한 번으로 로또 번호를 추천받고 조합을 저장하는 빠른 사용법",
  },
  {
    slug: "image-merge-pdf",
    emoji: "🖼️",
    title: "이미지 합치기 & PDF 변환 가이드",
    desc: "여러 장을 업로드·정렬해 한 장 이미지나 PDF로 저장하는 빠른 변환 사용법",
  },
  {
    slug: "autocut-studio",
    emoji: "🎬",
    title: "AutoCut Studio 가이드",
    desc: "침묵 감지·점프컷 자동 타임라인으로 유튜브 영상 편집을 빠르게 끝내는 법",
  },
  {
    slug: "head-voice-trainer",
    emoji: "🎤",
    title: "두성터득기 가이드",
    desc: "헤드보이스에 필요한 호흡·공명 루틴과 음계 따라 부르기 사용법",
  },
  {
    slug: "image-text-extract",
    emoji: "🔍",
    title: "이미지 텍스트 추출 가이드",
    desc: "사진 속 글자를 자동으로 읽고 복사하는 빠른 OCR 사용법",
  },
  {
    slug: "today-well-done",
    emoji: "🌱",
    title: "오늘의 나, 잘했다 가이드",
    desc: "오늘 잘한 일을 한 줄로 정리하고, 내일 액션을 만드는 리마인드 방법",
  },
  {
    slug: "today-todo",
    emoji: "✅",
    title: "오늘의 할 일 가이드",
    desc: "집중할 일만 담고 완료 체크로 하루를 정리하는 투두 사용법",
  },
  {
    slug: "daily-condition-check",
    emoji: "📝",
    title: "오늘 상태 점검표 가이드",
    desc: "5개 체크로 오늘 컨디션을 한 문장으로 정리하는 방법",
  },
  {
    slug: "dream-diary",
    emoji: "💭",
    title: "꿈일기 가이드",
    desc: "꿈을 기록하고 태그로 정리하는 로컬 꿈 기록장 사용법",
  },
  {
    slug: "rest-check",
    emoji: "🛋️",
    title: "이 정도면 쉬어야 할까? 가이드",
    desc: "짧은 설문으로 지금 쉬어도 될지 확인하고 휴식 루틴을 고르는 방법",
  },
  {
    slug: "sleep-helper",
    emoji: "🌙",
    title: "잠들기 도우미 가이드",
    desc: "코골이·주변 소음을 덮는 백색소음/환경음 믹스와 타이머로 잠드는 법",
  },
  {
    slug: "chef-judge-choice",
    emoji: "👨‍🍳",
    title: "셰프 심사위원: 오늘의 선택 심사 가이드",
    desc: "안성재·임짱·손종원 밈을 닮은 심사 멘트로 오늘의 선택을 딸깍 평가받는 법",
  },
  {
    slug: "music-now",
    emoji: "🎵",
    title: "지금 이 시간에 어울리는 음악 가이드",
    desc: "하루의 리듬에 맞춰 오늘의 음악 무드를 고르는 방법",
  },
  {
    slug: "winter-ruin-top1",
    emoji: "❄️",
    title: "이번 겨울, 나를 망치는 것 TOP 1 가이드",
    desc: "겨울마다 무너지는 패턴을 찾고 10분 안에 고치는 루틴",
  },
  {
    slug: "flow-community",
    emoji: "🧵",
    title: "FLOW 커뮤니티 가이드",
    desc: "쓰레드+디씨 감성 게시판에서 글 쓰고 토론하는 방법",
  },
  {
    slug: "next-2026",
    emoji: "🔮",
    title: "2026년의 나 가이드",
    desc: "습관·돈·인간관계·집중력 선택이 만드는 1년 뒤 루트 해석",
  },
  {
    slug: "life-spending-report",
    emoji: "🧾",
    title: "올해 나의 인생 소비 보고서 가이드",
    desc: "돈·시간·감정 리포트를 3분 안에 받는 방법과 결과 해석",
  },
  {
    slug: "coffee-addiction-test",
    emoji: "☕",
    title: "커피중독 테스트 가이드",
    desc: "카페인 권장량, 중독 신호, 테스트 기준 한눈에 보기",
  },
  {
    slug: "bmi-diet-plan",
    emoji: "📏",
    title: "BMI 설문형 다이어트 플랜 가이드",
    desc: "한 번씩만 딸각으로 BMI와 생활 패턴을 체크하고 현실적인 다이어트 플랜을 확인하는 방법",
  },
  {
    slug: "beauty-bankruptcy-test",
    emoji: "💄",
    title: "꾸밈비 파산 테스트 가이드",
    desc: "뷰티·패션 지출이 자산에 미치는 영향과 계산 방식",
  },
  {
    slug: "cosmetics-routine-check",
    emoji: "💄",
    title: "화장품 루틴 딸깍 체크 가이드",
    desc: "현재 제품/특징만 체크해 부족·과잉을 확인하고 최소 추천을 받는 방법",
  },
  {
    slug: "asset-shield-index",
    emoji: "🛡️",
    title: "자산 방탄 지수 가이드",
    desc: "현금흐름·비상금·분산 체크로 위기 대응력 점검",
  },
  {
    slug: "asset-allocation-check",
    emoji: "🧮",
    title: "자산 비중 진단 가이드",
    desc: "현금·금(현물)·부동산·주식·코인 비중으로 포트폴리오 타입 점검",
  },
  {
    slug: "invest-confidence-builder",
    emoji: "📈",
    title: "투자 확신 빌더 가이드",
    desc: "수익률이 아니라 판단을 기록해 흔들림을 줄이는 사용법",
  },
  {
    slug: "bitcoin-regret-calculator",
    emoji: "💸",
    title: "비트코인 안 산 죄 가이드",
    desc: "후회 시뮬레이션, 데이터 기준, 투자 주의 문구 포함",
  },
  {
    slug: "daily-productivity-check",
    emoji: "⚡",
    title: "하루 생산성 체크 가이드",
    desc: "오늘의 집중 상태를 빠르게 점검하는 기준 정리",
  },
  {
    slug: "missed-house-opportunity",
    emoji: "🏠",
    title: "집 못 산 죄 가이드",
    desc: "집값 상승 놓친 기회비용과 현실적 다음 단계 정리",
  },
  {
    slug: "birthrate-reality-test",
    emoji: "👶",
    title: "출산율 체감 테스트 가이드",
    desc: "질문을 따라 출산율 변화를 체감하고 결과를 해석·공유하는 방법",
  },
  {
    slug: "better-birth-odds",
    emoji: "🌍",
    title: "한국보다 더 좋은 조건에서 태어날 확률은? 가이드",
    desc: "출생 조건을 비교해 확률을 확인하고 결과를 해석·공유하는 방법",
  },
  {
    slug: "palm-reading-analysis",
    emoji: "✋",
    title: "손바닥 썰 푼다 가이드",
    desc: "사진 한 장으로 손금 흐름을 분석하는 방법과 해석 기준",
  },
  {
    slug: "soccer-combo",
    emoji: "⚽",
    title: "우리 둘의 조합 축구선수 가이드",
    desc: "둘의 성향을 섞어 닮은 축구선수를 찾는 테스트 사용법",
  },
  {
    slug: "neon-pinball-random",
    emoji: "🎱",
    title: "네온 핀볼 랜덤 뽑기 가이드",
    desc: "핀볼판에서 굴러가는 공으로 랜덤 뽑기하고 공유하는 방법",
  },
  {
    slug: "one-line-fortune",
    emoji: "🔮",
    title: "오늘의 한 줄 운세 가이드",
    desc: "기분에 따라 뽑는 오늘의 한 줄 운세 사용법과 해석 기준",
  },
  {
    slug: "saju-sintojungbi",
    emoji: "🔮",
    title: "사주풀이 · 신토정비결 가이드",
    desc: "생년월일/시간 입력으로 사주팔자와 올해·이번 달 흐름을 읽는 방법",
  },
  {
    slug: "heal-card",
    emoji: "💌",
    title: "우연이 아닐지도 가이드",
    desc: "클릭 한 번으로 오늘의 위로 카드를 받는 방법과 공유 팁",
  },
  {
    slug: "need-one-line",
    emoji: "🧭",
    title: "지금 나에게 가장 필요한 한마디 가이드",
    desc: "감정과 상황을 클릭하고 오늘 필요한 말 한 줄을 받는 방법",
  },
  {
    slug: "daily-wisdom",
    emoji: "📜",
    title: "오늘의 지혜 가이드",
    desc: "성경의 메시지에서 영감을 받은 하루 한 문장을 고르는 방법과 공유 팁",
  },
  {
    slug: "temple-daily-quote",
    emoji: "🛕",
    title: "하루 한 문장 (Temple) 가이드",
    desc: "불교 가르침을 오늘의 언어로 풀어낸 하루 한 문장을 고르고 공유하는 법",
  },
];

const seoApplications = [
  {
    name: "오늘의 나, 잘했다",
    url: "https://today.funnyfunny.cloud/",
    description:
      "오늘 내가 잘한 일을 한 줄로 기록하고 내일의 작은 행동을 바로 정리하는 리마인드 도구",
    category: "ProductivityApplication",
  },
  {
    name: "오늘의 할 일",
    url: "https://todo.funnyfunny.cloud/",
    description:
      "집중할 일을 간단히 적고 완료 체크로 하루를 정리하는 투두 리스트",
    category: "ProductivityApplication",
  },
  {
    name: "꿈일기",
    url: "https://dream.funnyfunny.cloud/",
    description:
      "브라우저에 저장되는 개인 꿈 기록장 — 로컬에서 꿈을 적고 태그로 정리",
    category: "LifestyleApplication",
  },
  {
    name: "이 정도면 쉬어야 할까?",
    url: "https://rest.funnyfunny.cloud/",
    description:
      "짧은 설문으로 지금 쉬어도 될지, 휴식 알림이 필요한지 가볍게 점검하는 휴식 결정 테스트",
    category: "LifestyleApplication",
  },
  {
    name: "잠들기 도우미",
    url: "https://sleep.funnyfunny.cloud/",
    description:
      "코골이·주변 소음을 덮는 백색소음/환경음 믹스와 타이머·페이드아웃으로 편하게 잠들 수 있게 돕는 수면 사운드 플레이어",
    category: "LifestyleApplication",
  },
  {
    name: "지금 이 시간에 어울리는 음악",
    url: "https://music.funnyfunny.cloud/",
    description:
      "하루의 리듬에 맞춰 지금 어울리는 음악 무드를 골라주는 음악 추천 서비스",
    category: "EntertainmentApplication",
  },
  {
    name: "화장품 루틴 딸깍 체크",
    url: "https://cosmetics.funnyfunny.cloud/",
    description:
      "현재 쓰는 제품/특징만 체크하면 루틴의 부족·과잉을 표시하고 최소 추천을 알려주는 루틴 점검 도구",
    category: "LifestyleApplication",
  },
  {
    name: "이번 겨울, 나를 망치는 것 TOP 1",
    url: "https://winter.funnyfunny.cloud/",
    description:
      "겨울마다 반복되는 가장 큰 방해 요인을 점검하고, 회복 루틴·환경 정비 팁을 제안하는 계절형 테스트",
    category: "LifestyleApplication",
  },
  {
    name: "Meta Kit — SEO · OG · Favicon",
    url: "https://meta.funnyfunny.cloud/",
    description:
      "메타태그·OG/Twitter 카드·파비콘을 한 번에 생성하고 OG 이미지 텍스트(영문)까지 자동으로 만들어 붙여넣는 메타 생성기",
    category: "UtilityApplication",
  },
  {
    name: "올해 나의 인생 소비 보고서",
    url: "https://year.funnyfunny.cloud/",
    description: "연말 결산처럼 돈·시간·감정 소비 흐름을 3분 컷 리포트로 요약",
    category: "LifestyleApplication",
  },
  {
    name: "내 인생 낭비력 지수",
    url: "https://waste.funnyfunny.cloud/",
    description: "지금까지 쓴 돈과 시간의 낭비도를 숫자로 확인하는 테스트",
    category: "LifestyleApplication",
  },
  {
    name: "대한민국 평균 vs 나",
    url: "https://average.funnyfunny.cloud/",
    description: "내 지표가 한국 평균과 얼마나 다른지 확인하는 비교 테스터",
    category: "LifestyleApplication",
  },
  {
    name: "하루 생산성 체크 테스트",
    url: "https://product.funnyfunny.cloud/",
    description: "오늘 내 집중/에너지/의사결정 상태를 빠르게 확인하는 테스트",
    category: "ProductivityApplication",
  },
  {
    name: "내가 안 산 것들의 총자산",
    url: "https://nospend.funnyfunny.cloud/",
    description: "안 샀다면 얼마를 모았을지 계산하는 총자산 시뮬레이터",
    category: "FinanceApplication",
  },
  {
    name: "자산 비중 진단",
    url: "https://specific.funnyfunny.cloud/",
    description:
      "현금·금(현물)·부동산·주식·코인 비중을 한눈에 보고 포트폴리오 타입을 가볍게 점검하는 자산 분포 진단",
    category: "FinanceApplication",
  },
  {
    name: "오늘 뭐 볼까? (OTT 픽)",
    url: "https://pick.funnyfunny.cloud/",
    description:
      "검색 없이 버튼 몇 번으로 한국 OTT 영화·드라마를 바로 추천받는 픽",
    category: "EntertainmentApplication",
  },
  {
    name: "셰프 심사위원: 오늘의 선택 심사",
    url: "https://chef.funnyfunny.cloud/",
    description:
      "안성재·임짱·손종원 밈을 닮은 심사 멘트로 오늘의 선택을 딸깍 평가받는 서비스",
    category: "EntertainmentApplication",
  },
  {
    name: "로또 추천기",
    url: "https://lotto.funnyfunny.cloud/",
    description:
      "버튼 한 번으로 로또 번호 조합을 추천하고 저장할 수 있는 빠른 추천기",
    category: "EntertainmentApplication",
  },
  {
    name: "비트코인 안 산 죄",
    url: "https://bit.funnyfunny.cloud/",
    description: "지난 비트코인 미구매분의 기회비용을 계산하는 도구",
    category: "FinanceApplication",
  },
  {
    name: "2026년의 나, 지금 결정된다",
    url: "https://next.funnyfunny.cloud/",
    description:
      "올해의 선택이 1년 뒤 인생에 남기는 루트를 습관·돈·관계·집중력 기준으로 보여주는 시뮬레이터",
    category: "LifestyleApplication",
  },
  {
    name: "집 못 산 죄",
    url: "https://house.funnyfunny.cloud/",
    description: "집값 상승 시뮬레이션으로 놓친 금액을 계산",
    category: "FinanceApplication",
  },
  {
    name: "투자 확신 빌더",
    url: "https://invest.funnyfunny.cloud/",
    description: "수익률 대신 판단을 기록해 흔들림을 줄이는 투자 기록 도구",
    category: "FinanceApplication",
  },
  {
    name: "출산율 체감 테스트",
    url: "https://baby.funnyfunny.cloud/",
    description:
      "이 장면은 ‘미래 예측’이 아니라 이미 진행 중인 현재일 수 있습니다.",
    category: "LifestyleApplication",
  },
  {
    name: "한국보다 더 좋은 조건에서 태어날 확률은?",
    url: "https://miracle.funnyfunny.cloud/",
    description:
      "출생 조건을 비교해 한국보다 더 좋은 환경에서 태어날 확률을 확인하는 테스트",
    category: "LifestyleApplication",
  },
  {
    name: "평수 계산기",
    url: "https://space.funnyfunny.cloud/",
    description: "평↔제곱미터를 빠르게 변환하고 대표 평형을 확인하는 계산기",
    category: "UtilityApplication",
  },
  {
    name: "N빵 계산기",
    url: "https://n.funnyfunny.cloud/",
    description:
      "음식점 이름·인원·총금액을 입력하면 1인당 금액을 바로 계산하고 복사할 수 있는 계산기",
    category: "UtilityApplication",
  },
  {
    name: "커피중독 테스트",
    url: "https://coffee.funnyfunny.cloud/",
    description: "카페인 의존도를 체크하고 공유할 수 있는 밈 테스트",
    category: "LifestyleApplication",
  },
  {
    name: "BMI 설문형 다이어트 플랜",
    url: "https://bmi.funnyfunny.cloud/",
    description:
      "한 번씩만 딸각하고 숫자도 한 번씩만 입력해 BMI와 생활 패턴을 확인하는 설문형 다이어트 플랜",
    category: "LifestyleApplication",
  },
  {
    name: "꾸밈비 파산 테스트",
    url: "https://beauty.funnyfunny.cloud/",
    description: "뷰티 지출이 재정에 미치는 영향을 체감형으로 계산",
    category: "LifestyleApplication",
  },
  {
    name: "나를 힘들게 하는 인간 유형 테스트",
    url: "https://human.funnyfunny.cloud/",
    description:
      "관계를 힘들게 만드는 사람 유형을 알아보는 테스트 (나 자신 평가 아님)",
    category: "LifestyleApplication",
  },
  {
    name: "Simple Audio Editor",
    url: "https://audio.funnyfunny.cloud/",
    description:
      "브라우저에서 바로 사용하는 오디오 편집 도구 — 설치 없이 트림, 병합, 내보내기",
    category: "UtilityApplication",
  },
  {
    name: "두성터득기",
    url: "https://vocal.funnyfunny.cloud/",
    description:
      "호흡·공명·음계 루틴으로 헤드보이스를 빠르게 워밍업하고 체크하는 보컬 연습 코치",
    category: "LifestyleApplication",
  },
  {
    name: "AutoCut Studio",
    url: "https://video.funnyfunny.cloud/",
    description:
      "영상 업로드만으로 침묵 구간을 감지해 하이라이트/점프컷 타임라인을 자동 생성하는 웹 편집기",
    category: "UtilityApplication",
  },
  {
    name: "이미지 합치기 & PDF 변환",
    url: "https://image.funnyfunny.cloud/",
    description:
      "여러 이미지를 업로드해 드래그로 순서를 맞춘 뒤 한 장 이미지나 PDF로 저장하는 변환기",
    category: "UtilityApplication",
  },
  {
    name: "이미지 텍스트 추출",
    url: "https://ocr.funnyfunny.cloud/",
    description: "사진 속 글자를 자동으로 읽어 텍스트로 뽑는 OCR 변환기",
    category: "UtilityApplication",
  },
  {
    name: "HEIC → JPG 변환기",
    url: "http://heic.funnyfunny.cloud/",
    description:
      "업로드 없이 브라우저에서 HEIC를 JPG/WebP/PNG로 변환하고 압축·리사이즈·ZIP 다운로드까지 지원하는 로컬 전용 변환기",
    category: "UtilityApplication",
  },
  {
    name: "로컬 이미지 최적화 & 파일 인사이트",
    url: "https://file.funnyfunny.cloud/",
    description:
      "WebP/JPEG 재인코딩과 자동 리사이즈로 이미지 용량을 줄이고, 업로드 없이 파일 정보·SHA-256·미리보기를 제공하는 로컬 전용 도구",
    category: "UtilityApplication",
  },
  {
    name: "달리기",
    url: "https://run.funnyfunny.cloud/",
    description: "공룡 달리기 스타일 랭킹 게임 — 점수 등록/랭킹",
    category: "GameApplication",
  },
  {
    name: "참참참! (NEON ARCADE)",
    url: "https://charm.funnyfunny.cloud/",
    description: "라인만 바꿔서 미사일을 피하기만 하면 돼요.",
    category: "GameApplication",
  },
  {
    name: "다우니 (NEON STAIRS)",
    url: "https://downy.funnyfunny.cloud/",
    description: "좌우 이동으로 계단을 밟고, 떨어지면 끝! (계단 1칸당 1점)",
    category: "GameApplication",
  },
  {
    name: "하루 한판 테트리스",
    url: "https://tet.funnyfunny.cloud/",
    description: "싱글(AI)과 2인 플레이를 지원하는 테트리스 게임",
    category: "GameApplication",
  },
  {
    name: "크리스마스 선물, 따뜻함 리포트",
    url: "https://xmas.funnyfunny.cloud/",
    description: "🎯 선물이 따뜻하게 도착할 확률을 확인하는 리포트",
    category: "LifestyleApplication",
  },
  {
    name: "손바닥 썰 푼다",
    url: "https://hand.funnyfunny.cloud/",
    description: "사진 한 장으로 보는 손금 성향 분석 — 3초 안에 성향 카드 생성",
    category: "LifestyleApplication",
  },
  {
    name: "우리 둘의 조합이 낳을 축구선수는?",
    url: "https://soccer.funnyfunny.cloud/",
    description:
      "둘의 성향과 플레이 스타일 조합으로 닮은 축구선수를 알려주는 테스트",
    category: "EntertainmentApplication",
  },
  {
    name: "네온 핀볼 랜덤 뽑기",
    url: "https://random.funnyfunny.cloud/",
    description: "핀볼판에서 굴러가는 공으로 랜덤 선택을 뽑는 네온 게임",
    category: "GameApplication",
  },
  {
    name: "오늘의 한 줄 운세",
    url: "https://fortune.funnyfunny.cloud/",
    description: "기분에 따라 고르는 오늘의 한 줄 운세",
    category: "LifestyleApplication",
  },
  {
    name: "오늘의 지혜",
    url: "https://wisdom.funnyfunny.cloud/",
    description:
      "성경의 메시지에서 영감을 받은 하루 한 문장을 고르는 Daily Wisdom",
    category: "LifestyleApplication",
  },
  {
    name: "우연이 아닐지도",
    url: "https://heal.funnyfunny.cloud/",
    description: "클릭 한 번으로 뽑는 위로 카드",
    category: "LifestyleApplication",
  },
  {
    name: "지금 나에게 가장 필요한 한마디",
    url: "https://need.funnyfunny.cloud/",
    description:
      "감정과 상황을 고르면 오늘 필요한 말 한 줄을 전해주는 위로 메시지 서비스",
    category: "LifestyleApplication",
  },
  {
    name: "하루 한 문장 (Temple)",
    url: "https://temple.funnyfunny.cloud/",
    description: "불교 가르침을 오늘의 언어로 풀어낸 하루 한 문장",
    category: "LifestyleApplication",
  },
];

const seoFaq = [
  {
    question: "FunnyFunny Cloud는 어떤 서비스를 제공하나요?",
    answer:
      "funnyfunny.cloud는 일상의 소비, 시간, 습관과 같은 데이터를 테스트와 계산기를 통해 쉽게 점검하고 비교해 볼 수 있는 정보 서비스입니다.\n\n본 사이트의 모든 서비스는 사용자가 자신의 생활 패턴을 이해하고 현실적인 기준과 비교해 볼 수 있도록 직접 기획·개발되었습니다.\n\n제공되는 결과와 수치는 참고용 정보 제공을 목적으로 하며, 일상 속 선택과 관리에 도움을 주기 위한 자료입니다. 본 사이트는 Google 정책을 준수하여 안전하고 투명하게 운영됩니다.",
  },
  {
    question: "무료로 사용할 수 있나요?",
    answer:
      "모든 서비스는 로그인 없이 무료로 이용 가능하며 공유 링크도 제한 없이 복사해 사용할 수 있습니다.",
  },
  {
    question: "모바일에서도 편하게 쓸 수 있나요?",
    answer:
      "모바일에 최적화된 UI로 제작돼 휴대폰에서도 바로 실행할 수 있고, 랜덤 버튼으로 빠르게 서비스를 시작할 수 있습니다.",
  },
  {
    question: "새로운 서비스가 업데이트되나요?",
    answer:
      "정기적으로 인기 주제와 사회 이슈에 맞춘 서비스를 추가하며, 전체 리스트와 검색에서 바로 확인할 수 있습니다.",
  },
];

const allServices = [
  {
    href: "https://today.funnyfunny.cloud",
    icon: "🌱",
    title: "오늘의 나, 잘했다",
    desc: "오늘, 내가 잘한 건 뭐였을까?",
    tags: ["리마인드", "칭찬", "루틴", "리플렉션"],
  },
  {
    href: "https://todo.funnyfunny.cloud/",
    icon: "✅",
    title: "오늘의 할 일",
    desc: "집중할 일만 담아두고 완료하면 시원하게 체크",
    tags: ["투두", "할일", "체크", "집중"],
  },
  {
    href: "https://dream.funnyfunny.cloud/",
    icon: "💭",
    title: "꿈일기",
    desc: "꿈을 기록하고 태그로 정리하는 로컬 꿈 기록장",
    tags: ["꿈", "일기", "기록", "로컬"],
  },
  {
    href: "https://rest.funnyfunny.cloud",
    icon: "🛋️",
    title: "이 정도면 쉬어야 할까?",
    desc: "짧은 설문으로 지금 쉬어도 될지 체크",
    tags: ["휴식", "컨디션", "설문", "번아웃"],
  },
  {
    href: "https://dailycheck.funnyfunny.cloud/",
    icon: "📝",
    title: "오늘 상태 점검표",
    desc: "5개 체크로 오늘 컨디션을 한 문장으로 정리",
    tags: ["컨디션", "상태", "점검", "체크", "한 문장"],
  },
  {
    href: "https://sleep.funnyfunny.cloud",
    icon: "🌙",
    title: "잠들기 도우미",
    desc: "코골이·주변 소음 덮는 수면 사운드 플레이어",
    tags: ["수면", "백색소음", "환경음", "휴식"],
  },
  {
    href: "https://flow.funnyfunny.cloud/",
    icon: "🧵",
    title: "FLOW 커뮤니티",
    desc: "쓰레드+디씨 감성으로 의견 나누는 게시판",
    tags: ["커뮤니티", "게시판", "토론"],
  },
  {
    href: "https://coffee.funnyfunny.cloud",
    icon: "☕",
    title: "커피중독 테스트",
    desc: "카페인 의존도·부활 횟수 체크",
    tags: ["카페인", "커피", "건강", "중독"],
  },
  {
    href: "https://beauty.funnyfunny.cloud",
    icon: "💄",
    title: "꾸밈비 파산 테스트",
    desc: "얼마나 태웠을까? 뷰티 지출 체감",
    tags: ["뷰티", "지출", "소비"],
  },
  {
    href: "https://cosmetics.funnyfunny.cloud",
    icon: "🧴",
    title: "화장품 루틴 딸깍 체크",
    desc: "내 루틴 부족·과잉을 체크하고 최소 추천 확인",
    tags: ["화장품", "루틴", "스킨케어", "체크"],
  },
  {
    href: "https://next.funnyfunny.cloud",
    icon: "🔮",
    title: "2026년의 나, 지금 결정된다",
    desc: "습관·돈·관계·집중력 선택이 만드는 1년 뒤 루트",
    tags: ["미래", "습관", "집중력", "관계"],
  },
  {
    href: "https://year.funnyfunny.cloud",
    icon: "🧾",
    title: "올해 나의 인생 소비 보고서",
    desc: "올해 돈·시간·감정 흐름을 3분 컷으로 요약",
    tags: ["연말결산", "소비", "시간", "감정"],
  },
  {
    href: "https://winter.funnyfunny.cloud",
    icon: "❄️",
    title: "이번 겨울, 나를 망치는 것 TOP 1",
    desc: "겨울마다 무너지는 1순위 트리거 찾기",
    tags: ["겨울", "습관", "컨디션", "정리"],
  },
  {
    href: "https://energy.funnyfunny.cloud",
    icon: "⚡",
    title: "내 삶의 에너지 배분",
    desc: "번아웃 포인트와 리커버리 가이드",
    tags: ["에너지", "번아웃", "회복"],
  },
  {
    href: "https://product.funnyfunny.cloud",
    icon: "🚀",
    title: "하루 생산성 체크 테스트",
    desc: "오늘 내 집중·에너지·의사결정 상태 빠르게 체크",
    tags: ["생산성", "집중력", "루틴"],
  },
  {
    href: "https://mental.funnyfunny.cloud",
    icon: "🧠",
    title: "하루 정신 체력 지수 테스트",
    desc: "오늘의 뇌 에너지·집중력 상태 진단",
    tags: ["멘탈", "집중", "컨디션"],
  },
  {
    href: "https://human.funnyfunny.cloud",
    icon: "🙃",
    title: "나를 힘들게 하는 인간 유형",
    desc: "이 테스트는 '나 자신'을 평가하지 않습니다.",
    tags: ["관계", "성향", "인간유형"],
  },
  {
    href: "https://ego.funnyfunny.cloud",
    icon: "🧬",
    title: "EGO 테스트",
    desc: "성격 테스트 아님, 갈등·스트레스·선택 앞에서 튀어나오는 자아 분석",
    tags: ["자아", "스트레스", "갈등"],
  },
  {
    href: "https://money.funnyfunny.cloud",
    icon: "🛡️",
    title: "자산 방탄 지수",
    desc: "경제 위기 버티기 레벨 측정",
    tags: ["재테크", "위기대응", "자산"],
  },
  {
    href: "https://specific.funnyfunny.cloud/",
    icon: "🧮",
    title: "자산 비중 진단",
    desc: "현금·금(현물)·부동산·주식·코인 비중을 한눈에 체크",
    tags: ["자산", "포트폴리오", "비중", "진단", "재테크"],
  },
  {
    href: "https://life.funnyfunny.cloud",
    icon: "⏰",
    title: "인생 남은 시간 대시보드",
    desc: "자유시간, 수면, 커리어 남은 시간",
    tags: ["시간", "대시보드", "라이프"],
  },
  {
    href: "https://soul.funnyfunny.cloud",
    icon: "🔮",
    title: "SoulPrint",
    desc: "출생 정보를 바탕으로 한 독자적인 성향 분석",
    tags: ["성향", "출생", "분석"],
  },
  {
    href: "https://saju.funnyfunny.cloud/",
    icon: "🔮",
    title: "사주풀이 · 신토정비결",
    desc: "생년월일/시간으로 사주팔자와 올해·이번 달 흐름 정리",
    tags: ["사주", "운세", "신토정비", "사주풀이"],
  },
  {
    href: "https://senseyear.funnyfunny.cloud",
    icon: "🎵",
    title: "나는 몇 년생 감성인가",
    desc: "12가지 질문으로 알아보는 나의 감성 테스트",
    tags: ["감성", "테스트", "성향"],
  },
  {
    href: "https://alcohol.funnyfunny.cloud",
    icon: "🍺",
    title: "주량 MBTI",
    desc: "술자리 성향 MBTI",
    tags: ["술자리", "주량", "성향"],
  },
  {
    href: "https://lazy.funnyfunny.cloud",
    icon: "😴",
    title: "귀찮음 진단기",
    desc: "7가지 요인으로 무기력 원인 찾기",
    tags: ["무기력", "귀찮음", "진단"],
  },
  {
    href: "https://average.funnyfunny.cloud",
    icon: "📊",
    title: "대한민국 평균 vs 나",
    desc: "수입·지출·습관이 한국 평균과 얼마나 다른지 비교",
    tags: ["평균", "통계", "비교"],
  },
  {
    href: "https://drain.funnyfunny.cloud",
    icon: "⚡",
    title: "인생 에너지 누수 진단기",
    desc: "지금 나는 어디로 새고 있는가",
    tags: ["에너지", "피로", "누수"],
  },
  {
    href: "https://maldives.funnyfunny.cloud",
    icon: "🏝️",
    title: "몰디브 매치",
    desc: "나의 몰디브 여행 성향 찾기",
    tags: ["여행", "휴양", "몰디브"],
  },
  {
    href: "https://bit.funnyfunny.cloud",
    icon: "💸",
    title: "비트코인 안 산 죄",
    desc: "그때 샀다면 지금 얼마?",
    tags: ["비트코인", "투자", "기회비용"],
  },
  {
    href: "https://house.funnyfunny.cloud",
    icon: "🏠",
    title: "집 못 산 죄",
    desc: "아… 몇 억 차이일까",
    tags: ["부동산", "투자", "시뮬레이터"],
  },
  {
    href: "https://invest.funnyfunny.cloud",
    icon: "📈",
    title: "투자 확신 빌더",
    desc: "수익률이 아니라, 판단을 기록해 흔들림을 줄입니다.",
    tags: ["투자", "판단", "기록", "확신", "멘탈"],
  },
  {
    href: "https://space.funnyfunny.cloud",
    icon: "📐",
    title: "평수 계산기",
    desc: "평↔제곱미터 변환과 대표 평형 계산",
    tags: ["부동산", "평수", "면적", "계산기"],
  },
  {
    href: "https://nospend.funnyfunny.cloud",
    icon: "💸",
    title: "내가 안 산 것들의 총자산",
    desc: '"그때 그거만 안 샀어도..."를 숫자로',
    tags: ["절약", "총자산", "기회비용"],
  },
  {
    href: "https://n.funnyfunny.cloud/",
    icon: "🍽️",
    title: "N빵 계산기",
    desc: "음식점 이름·인원·총금액 입력 후 1인당 금액을 자동 계산하고 복사할 수 있는 식사 계산기",
    tags: ["계산기", "금액", "식사", "복사", "N빵"],
  },
  {
    href: "https://edu.funnyfunny.cloud",
    icon: "🎓",
    title: "사교육 지옥도 계산기",
    desc: "교육비 인생 시뮬레이터",
    tags: ["교육비", "지출", "시뮬레이션"],
  },
  {
    href: "https://baby.funnyfunny.cloud/",
    icon: "👶",
    title: "출산율 체감 테스트",
    desc: "이 장면은 ‘미래 예측’이 아니라 이미 진행 중인 현재일 수 있습니다.",
    tags: ["출산율", "인구", "사회", "체감", "테스트"],
  },
  {
    href: "https://miracle.funnyfunny.cloud/",
    icon: "🌍",
    title: "한국보다 더 좋은 조건에서 태어날 확률은?",
    desc: "출생 조건을 비교해 더 좋은 환경에서 태어날 확률을 확인",
    tags: ["출생", "확률", "국가", "비교", "사회"],
  },
  {
    href: "https://health.funnyfunny.cloud",
    icon: "🩺",
    title: "건강수명 & 노후 준비",
    desc: "재미로 보는 건강수명",
    tags: ["건강", "노후", "수명"],
  },
  {
    href: "https://bmi.funnyfunny.cloud/",
    icon: "📏",
    title: "BMI 설문형 다이어트 플랜",
    desc: "한 번씩만 딸각. 숫자도 한 번씩만. 결과는 은근히 도움 됨.",
    tags: ["BMI", "다이어트", "설문", "플랜"],
  },
  {
    href: "https://cook.funnyfunny.cloud",
    icon: "🍱",
    title: "오늘 뭐 먹지?",
    desc: "하루 메뉴 랜덤 추천",
    tags: ["음식", "추천", "랜덤"],
  },
  {
    href: "https://chef.funnyfunny.cloud/",
    icon: "👨‍🍳",
    title: "셰프 심사위원: 오늘의 선택 심사",
    desc: "안성재·임짱·손종원 밈 감성으로 선택을 딸깍 심사",
    tags: ["셰프", "심사", "선택", "딸각", "밈"],
  },
  {
    href: "https://pick.funnyfunny.cloud",
    icon: "🍿",
    title: "오늘 뭐 볼까? (OTT 픽)",
    desc: "검색 없이 바로 영화·드라마 추천",
    tags: ["영화", "드라마", "OTT", "추천"],
  },
  {
    href: "https://lotto.funnyfunny.cloud/",
    icon: "🎟️",
    title: "로또 추천기",
    desc: "버튼 한 번으로 로또 번호 조합 추천",
    tags: ["로또", "추천", "번호", "랜덤"],
  },
  {
    href: "https://anju.funnyfunny.cloud",
    icon: "🍢",
    title: "오늘의 안주",
    desc: "술안주 랜덤 추천",
    tags: ["술", "안주", "랜덤"],
  },
  {
    href: "https://cafe.funnyfunny.cloud",
    icon: "☕",
    title: "카페 지출 역전 계산",
    desc: "30살까지 커피로 태운 돈?",
    tags: ["카페", "지출", "소비"],
  },
  {
    href: "https://drink.funnyfunny.cloud",
    icon: "🍺",
    title: "그때 마신 술, 지금 얼마?",
    desc: "한 달 술값 총액 vs 투자했을 때 금액",
    tags: ["술값", "투자", "비용"],
  },
  {
    href: "https://waste.funnyfunny.cloud",
    icon: "♻️",
    title: "내 인생 낭비력 지수",
    desc: "지금까지 쓴 돈, 낭비력으로 환산",
    tags: ["낭비", "돈", "습관"],
  },
  {
    href: "https://joke.funnyfunny.cloud",
    icon: "🤣",
    title: "오늘의 아재개그",
    desc: "공유각 터지는 개그 모음",
    tags: ["아재개그", "웃음", "밈"],
  },
  {
    href: "https://fortune.funnyfunny.cloud",
    icon: "🔮",
    title: "오늘의 한 줄 운세",
    desc: "기분에 따라 보는 오늘의 한 줄 운세",
    tags: ["운세", "포춘", "기분", "한 줄"],
  },
  {
    href: "https://wisdom.funnyfunny.cloud",
    icon: "📜",
    title: "오늘의 지혜",
    desc: "성경의 메시지에서 영감을 받은 하루 한 문장",
    tags: ["지혜", "성경", "명언", "한 문장"],
  },
  {
    href: "https://heal.funnyfunny.cloud",
    icon: "💌",
    title: "우연이 아닐지도",
    desc: "클릭 한 번으로 받는 위로 카드",
    tags: ["위로", "힐링", "카드"],
  },
  {
    href: "https://need.funnyfunny.cloud/",
    icon: "🧭",
    title: "지금 나에게 가장 필요한 한마디",
    desc: "감정과 상황을 클릭하면 오늘 필요한 말 한 줄",
    tags: ["감정", "상황", "위로", "한줄"],
  },
  {
    href: "https://temple.funnyfunny.cloud/",
    icon: "🛕",
    title: "하루 한 문장 (Temple)",
    desc: "불교 가르침을 오늘의 언어로 풀어낸 하루 한 문장",
    tags: ["불교", "명상", "명언", "한 문장"],
  },
  {
    href: "https://mind.funnyfunny.cloud",
    icon: "🧠",
    title: "오늘의 마음챙김",
    desc: "명언 한 줄 힐링",
    tags: ["마음챙김", "명언", "힐링"],
  },
  {
    href: "https://beat.funnyfunny.cloud",
    icon: "🥁",
    title: "드럼 비트 연습기",
    desc: "메트로놈 + 기본 패턴 연습",
    tags: ["드럼", "리듬", "연습"],
  },
  {
    href: "https://audio.funnyfunny.cloud",
    icon: "🎵",
    title: "Simple Audio Editor",
    desc: "브라우저에서 바로 사용하는 오디오 편집 도구",
    tags: ["오디오", "편집", "도구"],
  },
  {
    href: "https://music.funnyfunny.cloud",
    icon: "🎵",
    title: "지금 이 시간에 어울리는 음악",
    desc: "하루의 리듬에 맞춘 오늘의 음악 무드",
    tags: ["음악", "무드", "추천", "플레이리스트"],
  },
  {
    href: "https://vocal.funnyfunny.cloud",
    icon: "🎤",
    title: "두성터득기",
    desc: "헤드보이스를 위한 호흡·공명 루틴 따라하기",
    tags: ["보컬", "두성", "헤드보이스", "연습"],
  },
  {
    href: "https://video.funnyfunny.cloud",
    icon: "🎬",
    title: "AutoCut Studio",
    desc: "침묵 감지로 하이라이트·점프컷 타임라인 자동 생성",
    tags: ["영상편집", "유튜브", "점프컷", "하이라이트"],
  },
  {
    href: "https://file.funnyfunny.cloud/",
    icon: "🗜️",
    title: "로컬 이미지 최적화 & 파일 인사이트",
    desc: "드래그 한 번으로 WebP/JPEG 재인코딩·자동 리사이즈 + 로컬 파일 정보/해시/미리보기",
    tags: ["이미지", "최적화", "로컬", "파일정보", "해시"],
  },
  {
    href: "http://heic.funnyfunny.cloud/",
    icon: "📷",
    title: "HEIC → JPG 변환기",
    desc: "브라우저에서 HEIC를 JPG/WebP/PNG로 변환·압축·리사이즈·ZIP",
    tags: ["HEIC", "JPG", "변환", "압축", "리사이즈", "ZIP", "WebP", "PNG"],
  },
  {
    href: "https://meta.funnyfunny.cloud",
    icon: "🧰",
    title: "Meta Kit — SEO · OG · Favicon",
    desc: "메타태그·OG/Twitter 카드·파비콘을 입력→생성→복붙, OG 이미지 텍스트는 영문만 사용",
    tags: ["메타태그", "OG", "SEO", "파비콘", "OG 이미지"],
  },
  {
    href: "https://image.funnyfunny.cloud",
    icon: "🖼️",
    title: "이미지 합치기 & PDF 변환",
    desc: "여러 장을 드래그 정렬해 한 장 이미지·PDF로 저장",
    tags: ["이미지", "PDF", "병합", "편집"],
  },
  {
    href: "https://ocr.funnyfunny.cloud",
    icon: "🔍",
    title: "이미지 텍스트 추출",
    desc: "사진 속 글자를 자동으로 읽어 텍스트로 뽑기",
    tags: ["OCR", "텍스트", "사진", "변환"],
  },
  {
    href: "https://time.funnyfunny.cloud",
    icon: "⏰",
    title: "예매는타이밍",
    desc: "정확한 서버시간 조회, 예매 도우미",
    tags: ["시간", "서버시간", "예매"],
  },
  {
    href: "https://news.funnyfunny.cloud",
    icon: "📰",
    title: "오늘의 IT 뉴스",
    desc: "국내 및 해외 IT 뉴스를 빠르게 요약",
    tags: ["뉴스", "IT", "요약"],
  },
  {
    href: "https://weather.funnyfunny.cloud",
    icon: "🌤️",
    title: "지금날씨",
    desc: "내 근처와 주변 날씨 조회",
    tags: ["날씨", "미세먼지", "자외선"],
  },
  {
    href: "https://emojicon.funnyfunny.cloud",
    icon: "🎨",
    title: "EmojiCon Studio",
    desc: "이모지로 아이콘/파비콘을 한 번에 생성",
    tags: ["아이콘", "파비콘", "이모지"],
  },
  {
    href: "https://snaptrail.funnyfunny.cloud",
    icon: "📍",
    title: "SnapTrail",
    desc: "사진을 자동 그룹화한 추억 타임라인 생성기",
    tags: ["사진", "타임라인", "추억"],
  },
  {
    href: "https://day.funnyfunny.cloud",
    icon: "📅",
    title: "D-day 계산기",
    desc: "날짜 계산, D-Day, N일 후, 기념일, 위젯",
    tags: ["날짜", "D-day", "기념일"],
  },
  {
    href: "https://run.funnyfunny.cloud",
    icon: "🦖",
    title: "달리기",
    desc: "공룡 달리기 스타일 랭킹 게임",
    tags: ["게임", "공룡", "랭킹"],
  },
  {
    href: "https://charm.funnyfunny.cloud",
    icon: "🛸",
    title: "참참참! (NEON ARCADE)",
    desc: "라인만 바꿔서 미사일을 피하기만 하면 돼요.",
    tags: ["게임", "아케이드", "회피"],
  },
  {
    href: "https://downy.funnyfunny.cloud/",
    icon: "🪜",
    title: "다우니 (NEON STAIRS)",
    desc: "좌우 이동으로 계단을 밟고, 떨어지면 끝!",
    tags: ["게임", "아케이드", "계단"],
  },
  {
    href: "https://tet.funnyfunny.cloud/",
    icon: "🧱",
    title: "하루 한판 테트리스",
    desc: "싱글(AI)과 2인 플레이를 지원하는 테트리스",
    tags: ["게임", "테트리스", "퍼즐", "2인 플레이"],
  },
  {
    href: "https://random.funnyfunny.cloud/",
    icon: "🎱",
    title: "네온 핀볼 랜덤 뽑기",
    desc: "핀볼판에서 굴러가는 공이 랜덤 픽을 골라주는 뽑기",
    tags: ["게임", "랜덤", "핀볼"],
  },
  {
    href: "https://balance.funnyfunny.cloud/",
    icon: "⚖️",
    title: "밸런스게임",
    desc: "두 가지 선택지로 질문을 만들고 바로 공유",
    tags: ["게임", "밸런스", "질문", "선택"],
  },
  {
    href: "https://xmas.funnyfunny.cloud/",
    icon: "🎁",
    title: "크리스마스 선물, 따뜻함 리포트",
    desc: "🎯 선물이 따뜻하게 도착할 확률",
    tags: ["크리스마스", "선물", "확률", "리포트"],
  },
  {
    href: "https://hand.funnyfunny.cloud/",
    icon: "✋",
    title: "손바닥 썰 푼다",
    desc: "사진 한 장으로 보는 손금 흐름",
    tags: ["손금", "성향", "분석", "사진"],
  },
  {
    href: "https://soccer.funnyfunny.cloud/",
    icon: "⚽",
    title: "우리 둘의 조합이 낳을 축구선수는?",
    desc: "둘의 성향을 섞어 닮은 축구선수를 찾는 테스트",
    tags: ["축구", "조합", "궁합", "테스트"],
  },
  {
    href: "http://sudoku.funnyfunny.cloud/",
    icon: "🧩",
    title: "스도쿠 웹게임",
    desc: "난이도 선택해서 푸는 클래식 스도쿠",
    tags: ["스도쿠", "퍼즐", "게임", "두뇌"],
  },
];

const pageCopy = {
  ko: {
    headerHeroTitle: "유용할 수 있는 서비스, 놀이터",
    ctaPrimarySmall: "랜덤",
    ctaPrimaryLarge: "랜덤 열기",
    heroBadgeMain: "❄️ Snow Week",
    heroBadgeSub: "가볍게 즐기기",
    heroTitle: "겨울에 심심할 때 눌러보는 테스트들",
    heroSubtitle: "올겨울은 조금 더 가볍게, 2026년은 더 좋은 일로 시작해요.",
    heroServiceCount: "전체 {count}개의 서비스",
    searchPlaceholder: "예: 커피, 투자, 마음챙김",
    searchResultsTitle: "검색 결과",
    searchTagResults: '"{tag}" 태그: {count}개',
    searchQueryResults: '"{query}" 검색: {count}개',
    searchCount: "{count}개",
    searchBottomSummary: "검색 결과 {count}개",
    searchBottomEmpty: "새 서비스가 추가되면 여기서 바로 확인할 수 있어요",
    searchResetButton: "초기화",
    searchNoMatches: "해당 키워드와 맞는 서비스가 없어요.",
    searchNoMatchesHint: "다른 키워드나 태그를 선택해 보세요.",
    tagsMore: "태그 더보기 ({count}개)",
    tagsCollapse: "태그 접기",
    randomButtonSmall: "랜덤 열기",
    randomButtonLarge: "랜덤 테스트 열기",
    quickFlow: "FLOW 게시판",
    quickAshlight: "AshLight",
    topUtilityHeading: "🧰 효용 높은 유틸리티 Pick",
    insightCtaTitle: "오늘의 한 줄 인사이트",
    hubCtaTitle: "나를 이해하는 가장 쉬운 방법",
    utilsCtaTitle: "유용할 수 있는 서비스들",
    viewAllServices: "모든 서비스 보기",
    recommendedContentLabel: "추천 콘텐츠",
    usefulServicesTitle: "유용할 수 있는 서비스들",
    footerIntroTitle: "funnyfunny.cloud 소개",
    footerIntroDescription1:
      "funnyfunny.cloud는 일상의 데이터를 더 쉽고 재밌게 보여주는 ",
    footerIntroHighlight: "유틸리티, 테스트, 계산기, 정보 도구 포털",
    footerIntroDescription2: "입니다.",
    footerIntroDescription3:
      "광고를 포함한 모든 요소는 Google 정책을 준수하여 안전하게 운영됩니다.",
    footerOperationTitle: "운영 정보",
    footerOperationDeveloperLabel: "개발 및 운영:",
    footerOperationContactLabel: "문의:",
    footerLinkPrivacy: "개인정보처리방침",
    footerLinkTerms: "이용약관",
    footerLinkCopyright: "저작권 안내",
    footerLinkPolicy: "운영정책",
    footerCopyright: "© 2025 FunnyFunny Cloud by AshLight.",
  },
  en: {
    headerHeroTitle: "Useful services, playground",
    ctaPrimarySmall: "Random",
    ctaPrimaryLarge: "Open random tool",
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
  },
};

function formatTemplate(template, vars = {}) {
  if (typeof template !== "string") return template;
  return template.replace(/\{(.*?)\}/g, (_, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : ""
  );
}

const defaultLang = "en";

function getRegionPreferredLang(fallback = defaultLang) {
  if (typeof window === "undefined") return fallback;
  const hasNavigator = typeof navigator !== "undefined";
  const intlLocale =
    typeof Intl === "object" && typeof Intl.DateTimeFormat === "function"
      ? Intl.DateTimeFormat().resolvedOptions().locale
      : "";
  const sources = [
    ...(hasNavigator && navigator.languages ? navigator.languages : []),
    hasNavigator ? navigator.language : "",
    hasNavigator ? navigator.userLanguage : "",
    intlLocale,
  ]
    .filter(Boolean)
    .map((locale) => locale.toLowerCase());
  const hasKorean = sources.some((locale) => locale.startsWith("ko"));
  return hasKorean ? "ko" : fallback;
}

function getInitialLang() {
  if (typeof window === "undefined") return defaultLang;
  const stored = window.localStorage?.getItem("preferredLang");
  if (stored && pageCopy[stored]) {
    return stored;
  }
  const candidate = getRegionPreferredLang(defaultLang);
  return pageCopy[candidate] ? candidate : defaultLang;
}

export function HomeContent() {
  const [lang, setLang] = useState(getInitialLang);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [tagsExpanded, setTagsExpanded] = useState(false);
  const translationPack = pageCopy[lang] || pageCopy[defaultLang];
  const fallbackPack = pageCopy[defaultLang];

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage?.setItem("preferredLang", lang);
  }, [lang]);

  const t = (key, vars = {}) =>
    formatTemplate(
      translationPack[key] ?? fallbackPack[key] ?? key,
      vars
    );
  const handleLangChange = (nextLang) => {
    setLang(pageCopy[nextLang] ? nextLang : defaultLang);
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
      alternateName: ["퍼니퍼니", "퍼니퍼니 클라우드", "FunnyFunny"],
      url: "https://funnyfunny.cloud",
      description:
        "funnyfunny.cloud는 일상의 소비, 시간, 습관과 같은 데이터를 테스트와 계산기를 통해 쉽게 점검하고 비교해 볼 수 있는 정보 서비스입니다. 제공되는 결과와 수치는 참고용 정보 제공을 목적으로 하며, 일상 속 선택과 관리에 도움을 주기 위한 자료입니다.",
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
      alternateName: ["퍼니퍼니", "퍼니퍼니 클라우드", "FunnyFunny"],
      logo: "https://funnyfunny.cloud/favicon.svg",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "핵심 유틸리티",
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
      name: "가이드",
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

  // 모든 태그 추출 및 인기순 정렬 (사용 빈도 기준)
  const tagCounts = {};
  allServices.forEach((service) => {
    (service.tags || []).forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  const allTags = Array.from(
    new Set(allServices.flatMap((service) => service.tags || []))
  ).sort((a, b) => {
    // 먼저 사용 빈도순, 그 다음 알파벳순
    const countDiff = tagCounts[b] - tagCounts[a];
    return countDiff !== 0 ? countDiff : a.localeCompare(b);
  });

  // 주요 태그 (처음 22개, 약 2줄)
  const mainTags = allTags.slice(0, 22);
  const remainingTags = allTags.slice(22);

  const normalizedQuery = searchQuery.trim();

  const filteredServices = allServices.filter((test) => {
    // 태그 필터링
    if (selectedTag && !(test.tags || []).includes(selectedTag)) {
      return false;
    }
    // 검색어 필터링
    if (normalizedQuery) {
      const haystack = [test.title, test.desc, ...(test.tags || [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery.toLowerCase());
    }
    return true;
  });

  // 검색 결과 표시 여부 (검색어나 태그가 선택되었을 때만 표시)
  const showSearchResults = normalizedQuery || selectedTag;

  return (
    <div className="bg-gradient-to-b from-[#0b1621] via-[#101f2e] to-[#14273b] text-slate-50 text-[15.5px] sm:text-[16px] leading-relaxed min-h-screen">
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
                        초기화
                      </button>
                    )}
                  </div>
                  {filteredServices.length === 0 ? (
                    <div className="p-6 rounded-2xl bg-white/10 border border-white/20 text-center text-sm text-slate-200">
                      <p>해당 키워드와 맞는 서비스가 없어요.</p>
                      <p className="text-xs text-slate-300/80 mt-1">
                        다른 키워드나 태그를 선택해 보세요.
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
                  <span className="hidden sm:inline">{t("randomButtonLarge")}</span>
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
                aria-label="로컬 이미지 최적화 & 파일 인사이트 - 드래그 한 번으로 이미지 용량을 줄이고 파일 정보를 확인"
                data-amp-service="로컬 이미지 최적화 & 파일 인사이트"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🗜️</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    로컬 전용
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  로컬 이미지 최적화
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  WebP/JPEG 재인코딩·자동 리사이즈 + 파일 정보/해시
                </p>
              </a>
              <a
                href="https://meta.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Meta Kit — SEO·OG·Favicon - 메타태그를 빠르게 생성"
                data-amp-service="Meta Kit — SEO · OG · Favicon"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🧰</span>
                  <span className="text-xs font-semibold text-indigo-600">
                    SEO 번들
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">Meta Kit</h3>
                <p className="text-sm text-slate-600 mt-1">
                  SEO/OG/파비콘 자동 생성 · 복붙
                </p>
              </a>
              <a
                href="https://image.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="이미지 합치기 & PDF 변환 - 여러 장을 한 번에 병합"
                data-amp-service="이미지 합치기 & PDF 변환"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🖼️</span>
                  <span className="text-xs font-semibold text-fuchsia-600">
                    변환기
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  이미지 합치기
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  드래그 정렬 → 한 장 이미지·PDF
                </p>
              </a>
              <a
                href="https://ocr.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="이미지 텍스트 추출 - 사진 속 글자 OCR"
                data-amp-service="이미지 텍스트 추출"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🔍</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    OCR
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  이미지 텍스트 추출
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  사진 속 글자를 바로 복사
                </p>
              </a>
              <a
                href="https://time.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="예매는타이밍 - 서버시간과 시간 계산"
                data-amp-service="예매는타이밍"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">⏰</span>
                  <span className="text-xs font-semibold text-blue-600">
                    시간 도구
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">예매는타이밍</h3>
                <p className="text-sm text-slate-600 mt-1">
                  정확한 서버시간 · 타임존 계산
                </p>
              </a>
              <a
                href="https://weather.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="지금날씨 - 내 근처 날씨/자외선/미세먼지"
                data-amp-service="지금날씨"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🌤️</span>
                  <span className="text-xs font-semibold text-sky-600">
                    실시간
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">지금날씨</h3>
                <p className="text-sm text-slate-600 mt-1">
                  체감온도·미세먼지·자외선
                </p>
              </a>
              <a
                href="https://news.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="오늘의 IT 뉴스 - 국내외 IT 뉴스 요약"
                data-amp-service="오늘의 IT 뉴스"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">📰</span>
                  <span className="text-xs font-semibold text-orange-600">
                    요약
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  오늘의 IT 뉴스
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  국내·해외 IT 뉴스를 빠르게
                </p>
              </a>
              <a
                href="https://audio.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Simple Audio Editor - 브라우저 오디오 편집"
                data-amp-service="Simple Audio Editor"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🎵</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    편집
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  Simple Audio Editor
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  트림·병합·내보내기
                </p>
              </a>
              <a
                href="https://emojicon.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EmojiCon Studio - 이모지 아이콘 제작"
                data-amp-service="EmojiCon Studio"
                data-amp-section="top9"
                className="group p-4 rounded-2xl bg-white/85 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🎨</span>
                  <span className="text-xs font-semibold text-amber-600">
                    아이콘
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  EmojiCon Studio
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  이모지로 아이콘·파비콘 생성
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
                  AD
                </span>
                <span>{t("recommendedContentLabel")}</span>
              </div>
              <span className="text-xs text-slate-400">Dable</span>
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
              {[
                [
                  "https://flow.funnyfunny.cloud/",
                  "🧵 FLOW 커뮤니티",
                  "쓰레드+디씨 감성으로 소통하는 게시판",
                  "익명 글쓰기, 실시간 반응, 주제별 스레드로 바로 대화 시작",
                ],
                [
                  "https://video.funnyfunny.cloud",
                  "🎬 AutoCut Studio",
                  "영상 자동 하이라이트/점프컷",
                  "침묵 구간을 감지해 하이라이트 타임라인과 쇼츠 구간을 뽑아 유튜버 편집 시간을 줄여줍니다.",
                ],
                [
                  "https://file.funnyfunny.cloud/",
                  "🗜️ 로컬 이미지 최적화 & 파일 인사이트",
                  "드래그 한 번으로 이미지 용량 줄이기 + 파일 정보 확인",
                  "WebP/JPEG 재인코딩·자동 리사이즈로 최적화하고, 업로드 없이 파일 메타·SHA-256·이미지/PDF/텍스트 미리보기를 제공합니다.",
                ],
                [
                  "https://meta.funnyfunny.cloud",
                  "🧰 Meta Kit — SEO · OG · Favicon",
                  "메타태그/공유/아이콘을 한 번에 생성하고 복붙",
                  "SEO·OG·Twitter 카드·파비콘 세트를 입력 → 생성 → 복사하며, OG 이미지 텍스트는 영문만 사용하는 메타 번들러",
                ],
                [
                  "https://image.funnyfunny.cloud",
                  "🖼️ 이미지 합치기 & PDF 변환",
                  "여러 장 업로드하고 정렬해 한 장/ PDF로 저장",
                  "드래그로 순서를 맞추고 JPG·PNG·PDF로 한 번에 묶어주는 변환기",
                ],
                [
                  "https://space.funnyfunny.cloud",
                  "📐 평수 계산기",
                  "평↔제곱미터 변환 + 대표 평형 확인",
                  "원룸·오피스텔·아파트 평형을 빠르게 감 잡을 수 있는 면적 변환 계산기",
                ],
                [
                  "https://ocr.funnyfunny.cloud",
                  "🔍 이미지 텍스트 추출",
                  "사진 속 글자를 자동으로 읽어 텍스트로 복사",
                  "영수증·문서·메모를 찍으면 글자를 추출해 바로 클립보드/파일로 저장할 수 있는 OCR 도구",
                ],
                [
                  "https://audio.funnyfunny.cloud",
                  "🎵 Simple Audio Editor",
                  "브라우저에서 바로 사용하는 오디오 편집 도구",
                  "설치 없이 트림, 병합, 내보내기 — 100% 클라이언트 사이드",
                ],
                [
                  "https://vocal.funnyfunny.cloud",
                  "🎤 두성터득기",
                  "헤드보이스·두성 연습 코치",
                  "호흡·공명 워밍업과 음계 따라 부르기로 하루 5분 발성 루틴을 잡을 수 있어요.",
                ],
                [
                  "https://time.funnyfunny.cloud",
                  "⏰ 예매는타이밍",
                  "정확한 서버시간 조회, 예매 도우미",
                  "시간 관련 모든 계산을 한 곳에서.",
                ],
                [
                  "https://news.funnyfunny.cloud",
                  "📰 오늘의 IT 뉴스",
                  "국내 및 해외 IT 관련 뉴스를 빠르게 요약",
                  "최신 뉴스와 IT 정보를 한눈에.",
                ],
                [
                  "https://saju.funnyfunny.cloud/",
                  "🔮 사주풀이 · 신토정비결",
                  "사주풀이와 신토정비결 요약",
                  "생년월일/시간 입력으로 사주팔자 분석, 올해·이번 달 운세 흐름을 간단히 정리합니다.",
                ],
                [
                  "https://weather.funnyfunny.cloud",
                  "🌤️ 지금날씨",
                  "내 근처와 주변 날씨 조회",
                  "초미세먼지, 자외선, 체감온도 등의 정보를 제공합니다.",
                ],
                [
                  "https://pick.funnyfunny.cloud",
                  "🍿 오늘 뭐 볼까? (OTT 픽)",
                  "검색 없이 버튼 몇 번으로 바로 추천받는 영화·드라마",
                  "한국 OTT만 모아 실패 없는 선택을 보여주는 픽 서비스",
                ],
                [
                  "https://emojicon.funnyfunny.cloud",
                  "🎨 EmojiCon Studio",
                  "웹/앱용 이모지 아이콘 스튜디오",
                  "이모지를 한 글자만 넣으면 아이콘, 파비콘, 앱스토어용 아이콘까지 한 번에 생성",
                ],
                [
                  "https://snaptrail.funnyfunny.cloud",
                  "📍 SnapTrail",
                  "추억 타임라인 생성기",
                  "사진을 연도와 월별, 지역으로 자동 그룹화하여 시간순으로 정리된 타임라인을 제공",
                ],
                [
                  "https://day.funnyfunny.cloud",
                  "📅 D-day 계산기",
                  "날짜 계산, D-Day, N일 후, 기념일, 위젯",
                  "중요한 날짜를 쉽게 관리하세요.",
                ],
              ].map(([href, title, desc, detail]) => (
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
              ))}
            </div>
          </div>
          <details className="sm:hidden rounded-2xl bg-white text-slate-900 shadow-sm border border-slate-200">
            <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-slate-900">
              <span className="font-semibold">커뮤니티 / 게시판</span>
              <span className="text-sm text-blue-600">열기</span>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-sm text-slate-600 mb-2">
                쓰레드+디씨 감성 FLOW 게시판, 모바일에서도 바로 글쓰기/읽기
              </p>
              <a
                href="https://flow.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold shadow hover:shadow-md transition"
              >
                FLOW 열기
              </a>
            </div>
          </details>

          <div id="hub">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🧭</span>
              <h3 className="text-xl font-bold">
                나를 이해하는 가장 쉬운 방법
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🧠</span>
                    <h4 className="font-semibold text-slate-900">
                      심리 · 성향
                    </h4>
                  </div>
                  <span className="text-xs text-slate-600">3분 컷</span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    className="block hover:text-blue-600"
                    href="https://today.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌱 오늘의 나, 잘했다
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://next.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔮 2026년의 나, 지금 결정된다
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://mental.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧠 하루 정신 체력 지수
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://energy.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⚡ 인생 에너지 누수 / 배분
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://rest.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🛋️ 이 정도면 쉬어야 할까?
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://product.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🚀 하루 생산성 체크 테스트
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://lazy.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    😴 귀찮음 진단기
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://human.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🙃 나를 힘들게 하는 인간 유형
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://soul.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔮 SoulPrint — 출생 성향 분석
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://senseyear.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🎵 나는 몇 년생 감성인가
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://alcohol.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍺 주량 MBTI
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://ego.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧬 EGO 테스트
                  </a>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">💰</span>
                    <h4 className="font-semibold text-slate-900">
                      돈 · 재테크
                    </h4>
                  </div>
                  <span className="text-xs text-slate-600">현실 점검</span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    className="block hover:text-blue-600"
                    href="https://bit.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💸 비트코인 안 산 죄
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://house.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🏠 집 못 산 죄
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://invest.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📈 투자 확신 빌더
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://space.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📐 평수 계산기
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://year.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧾 올해 나의 인생 소비 보고서
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://money.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🛡️ 자산 방탄 지수
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://specific.funnyfunny.cloud/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧮 자산 비중 진단
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://edu.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🎓 사교육 지옥도
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://average.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📊 대한민국 평균 vs 나
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://nospend.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💸 내가 안 산 것들의 총자산
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://waste.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ♻️ 내 인생 낭비력 지수
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://cafe.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ☕ 카페 지출 역전 계산
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://drink.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍺 그때 마신 술, 지금 얼마?
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://beauty.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💄 꾸밈비 파산 테스트
                  </a>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🌿</span>
                    <h4 className="font-semibold text-slate-900">
                      건강 · 생활
                    </h4>
                  </div>
                  <span className="text-xs text-slate-600">체크 해보기</span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    className="block hover:text-blue-600"
                    href="https://winter.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ❄️ 이번 겨울, 나를 망치는 것 TOP 1
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://coffee.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ☕ 커피중독 테스트
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://rest.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🛋️ 이 정도면 쉬어야 할까?
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://health.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🩺 건강수명 & 노후 준비
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://cook.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍱 오늘 뭐 먹지?
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://anju.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍢 오늘의 안주 추천
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://life.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⏰ 인생 남은 시간 대시보드
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://weather.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌤️ 지금날씨 — 근처 날씨/자외선
                  </a>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎉</span>
                    <h4 className="font-semibold text-slate-900">재미 · 밈</h4>
                  </div>
                  <span className="text-xs text-slate-600">1분 힐링</span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <a
                    className="block hover:text-blue-600"
                    href="https://joke.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🤣 오늘의 아재개그
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://fortune.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔮 오늘의 한 줄 운세
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://soccer.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⚽ 우리 둘의 조합 축구선수
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://mind.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧠 오늘의 마음챙김
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://random.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🎱 네온 핀볼 랜덤 뽑기
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://beat.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🥁 드럼 비트 연습기
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://pick.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍿 오늘 뭐 볼까? (OTT 픽)
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://snaptrail.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📍 SnapTrail — 추억 타임라인
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="insight" className="scroll-mt-24 sm:scroll-mt-28 pt-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">💡</span>
              <h3 className="text-xl font-bold">오늘의 한 줄 인사이트</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                [
                  "https://heal.funnyfunny.cloud",
                  "💌 우연이 아닐지도",
                  "클릭 한 번으로 위로 카드 한 장",
                  "오늘 필요한 말을 우연처럼 전달",
                ],
                [
                  "https://fortune.funnyfunny.cloud",
                  "🔮 오늘의 한 줄 운세",
                  "기분에 따라 골라보는 오늘의 운세 한 줄",
                  "지금 기분과 상황에 맞는 메시지를 바로 확인",
                ],
                [
                  "https://wisdom.funnyfunny.cloud",
                  "📜 오늘의 지혜",
                  "Daily Wisdom, 하루 한 문장",
                  "성경의 메시지에서 영감을 받은 오늘의 한 문장",
                ],
                [
                  "https://news.funnyfunny.cloud",
                  "📰 오늘의 IT 뉴스",
                  "국내 및 해외 IT 관련 뉴스를 빠르게 요약",
                  "최신 뉴스와 IT 정보를 한눈에.",
                ],
                [
                  "https://joke.funnyfunny.cloud",
                  "😄 오늘의 아재개그",
                  "공유각 터지는 개그 모음",
                  "웃음은 건강에 최고",
                ],
                [
                  "https://mind.funnyfunny.cloud",
                  "🧠 오늘의 마음챙김",
                  "오늘의 명언을 한 줄로 힐링",
                  "마음을 가벼워지게",
                ],
              ].map(([href, title, desc, detail]) => (
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
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 bg-white/70 px-3 py-1 rounded-full shadow-sm border border-emerald-100">
              게임
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <a
                href="https://run.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="달리기 — 공룡 달리기 스타일 랭킹 게임"
                data-amp-service="달리기"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🦖</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    랭킹 지원
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">달리기</h4>
                <p className="text-sm text-slate-600 mt-1">
                  공룡 달리기 스타일 랭킹 게임
                </p>
              </a>
              <a
                href="https://charm.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="참참참! (NEON ARCADE) - 라인만 바꿔서 미사일을 피하기만 하면 돼요."
                data-amp-service="참참참! (NEON ARCADE)"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🛸</span>
                  <span className="text-xs font-semibold text-purple-600">
                    NEON ARCADE
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">참참참!</h4>
                <p className="text-sm text-slate-600 mt-1">
                  라인만 바꿔서 미사일을 피하기만 하면 돼요.
                </p>
              </a>
              <a
                href="https://downy.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="다우니 (NEON STAIRS) - 라인만 바꿔서 계단을 밟고, 떨어지면 끝!"
                data-amp-service="다우니 (NEON STAIRS)"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🪜</span>
                  <span className="text-xs font-semibold text-blue-600">
                    NEON STAIRS
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">다우니</h4>
                <p className="text-sm text-slate-600 mt-1">
                  라인만 바꿔서 계단을 밟고, 떨어지면 끝!
                </p>
              </a>
              <a
                href="https://tet.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="하루 한판 테트리스 - 싱글(AI)과 2인 플레이를 지원하는 테트리스 게임"
                data-amp-service="하루 한판 테트리스"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🧱</span>
                  <span className="text-xs font-semibold text-orange-600">
                    2인 플레이
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  하루 한판 테트리스
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  싱글(AI)과 2인 플레이를 지원하는 테트리스
                </p>
              </a>
              <a
                href="https://random.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="네온 핀볼 랜덤 뽑기 - 핀볼판에서 굴러가는 공이 랜덤 픽을 골라주는 뽑기"
                data-amp-service="네온 핀볼 랜덤 뽑기"
                data-amp-section="game"
                className="group p-5 rounded-2xl bg-white/90 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🎱</span>
                  <span className="text-xs font-semibold text-amber-600">
                    NEON PINBALL
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  네온 핀볼 랜덤 뽑기
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  핀볼판에서 굴러가는 공이 랜덤 픽을 골라줘요.
                </p>
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-emerald-900 via-red-800 to-emerald-900 text-white pt-6 pb-6 pl-[54px] pr-[54px] sm:pt-14 sm:pb-14 sm:pl-[70px] sm:pr-[70px] shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-amber-200">
                  Winter Picks
                </p>
                <h4 className="mt-1 text-2xl font-bold">
                  겨울에 보기 좋은 인기 테스트
                </h4>
                <p className="mt-2 text-sm text-emerald-50/90">
                  지금 많이 보는 링크 중 마음에 드는 것만 가볍게 챙겨가세요.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 sm:max-w-2xl">
                <a
                  href="https://winter.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-slate-900 font-semibold text-sm shadow hover:-translate-y-0.5 transition whitespace-nowrap"
                >
                  겨울 망치는 원인
                </a>
                <a
                  href="https://year.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-slate-900 font-semibold text-sm shadow hover:-translate-y-0.5 transition whitespace-nowrap"
                >
                  인생 소비 보고서
                </a>
                <a
                  href="https://bit.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  비트코인 죄책감
                </a>
                <a
                  href="https://pick.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  OTT 픽
                </a>
                <a
                  href="https://drain.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  에너지 누수
                </a>
                <a
                  href="https://rest.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  쉬어야 할까
                </a>
                <a
                  href="https://coffee.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  커피 중독
                </a>
                <a
                  href="https://hand.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  손바닥 썰 푼다
                </a>
                <a
                  href="https://mind.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition whitespace-nowrap"
                >
                  오늘의 마음챙김
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
                <h3 className="text-xl font-bold">자주 묻는 질문</h3>
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
              <h3 className="text-xl font-bold">전체 서비스</h3>
            </div>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-emerald-100">
                  지금 {allServices.length}개의 서비스가 준비되어 있어요.
                </p>
                <p className="text-xs text-emerald-100/80">
                  키워드로 검색하거나 바로 클릭해보세요.
                </p>
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
                <p>해당 키워드와 맞는 테스트가 없어요.</p>
                <p className="text-xs text-slate-400 mt-1">
                  철자나 다른 키워드를 입력해 보세요.
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
              Guides
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
                aria-label="가이드 모두 보기"
                data-amp-service="가이드 모두 보기"
                data-amp-section="guides"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-800 shadow-sm hover:border-blue-400 hover:text-blue-700 transition"
              >
                가이드 모두 보기
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
            부담 없이 즐기세요
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#hub"
              className="px-3 py-2 rounded-full bg-white/80 text-slate-900 text-sm font-semibold hover:-translate-y-0.5 transition"
            >
              Hub
            </a>
            <button
              data-random-btn
              className="px-3 py-2 rounded-full bg-white/90 text-slate-900 text-sm font-semibold hover:-translate-y-0.5 transition"
            >
              랜덤 선물
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
