"use client";

import { useEffect, useState } from "react";
import { HeaderPortal } from "./HeaderPortal";
import { FooterPortal } from "./FooterPortal";

const randomTools = [
  "https://coffee.funnyfunny.cloud",
  "https://beauty.funnyfunny.cloud",
  "https://energy.funnyfunny.cloud",
  "https://money.funnyfunny.cloud",
  "https://life.funnyfunny.cloud",
  "https://ego.funnyfunny.cloud",
  "https://senseyear.funnyfunny.cloud",
  "https://alcohol.funnyfunny.cloud",
  "https://lazy.funnyfunny.cloud",
  "https://drain.funnyfunny.cloud",
  "https://maldives.funnyfunny.cloud",
  "https://bit.funnyfunny.cloud",
  "https://house.funnyfunny.cloud",
  "https://edu.funnyfunny.cloud",
  "https://nospend.funnyfunny.cloud",
  "https://waste.funnyfunny.cloud",
  "https://health.funnyfunny.cloud",
  "https://cafe.funnyfunny.cloud",
  "https://drink.funnyfunny.cloud",
  "https://joke.funnyfunny.cloud",
  "https://mental.funnyfunny.cloud",
  "https://mind.funnyfunny.cloud",
  "https://soul.funnyfunny.cloud",
  "https://beat.funnyfunny.cloud",
  "https://cook.funnyfunny.cloud",
  "https://anju.funnyfunny.cloud",
  "https://product.funnyfunny.cloud",
  "https://human.funnyfunny.cloud",
  "https://average.funnyfunny.cloud",
  "https://pick.funnyfunny.cloud",
  "https://audio.funnyfunny.cloud",
  "https://run.funnyfunny.cloud",
  "https://charm.funnyfunny.cloud",
  "http://downy.funnyfunny.cloud",
];

const seoTopItems = [
  {
    name: "비트코인 안 산 죄",
    url: "https://bit.funnyfunny.cloud",
    description: "비트코인 투자 기회비용 계산기",
  },
  {
    name: "오늘 뭐 볼까? (OTT 픽)",
    url: "https://pick.funnyfunny.cloud",
    description:
      "검색 없이 버튼 몇 번으로 바로 추천받는 영화·드라마 픽, 한국 OTT 전용",
  },
  {
    name: "Simple Audio Editor",
    url: "https://audio.funnyfunny.cloud",
    description: "브라우저에서 바로 사용하는 오디오 편집 도구",
  },
  {
    name: "SnapTrail",
    url: "https://snaptrail.ashlight.store",
    description: "사진을 자동 그룹화한 추억 타임라인 생성기",
  },
  {
    name: "오늘의 아재개그",
    url: "https://joke.funnyfunny.cloud",
    description: "공유각 터지는 개그 모음",
  },
  {
    name: "SoulPrint",
    url: "https://soul.funnyfunny.cloud",
    description: "출생 정보를 바탕으로 한 독자적인 성향 분석",
  },
];

const seoGuides = [
  {
    slug: "coffee-addiction-test",
    emoji: "☕",
    title: "커피중독 테스트 가이드",
    desc: "카페인 권장량, 중독 신호, 테스트 기준 한눈에 보기",
  },
  {
    slug: "beauty-bankruptcy-test",
    emoji: "💄",
    title: "꾸밈비 파산 테스트 가이드",
    desc: "뷰티·패션 지출이 자산에 미치는 영향과 계산 방식",
  },
  {
    slug: "asset-shield-index",
    emoji: "🛡️",
    title: "자산 방탄 지수 가이드",
    desc: "현금흐름·비상금·분산 체크로 위기 대응력 점검",
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
];

const seoApplications = [
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
    name: "오늘 뭐 볼까? (OTT 픽)",
    url: "https://pick.funnyfunny.cloud/",
    description:
      "검색 없이 버튼 몇 번으로 한국 OTT 영화·드라마를 바로 추천받는 픽",
    category: "EntertainmentApplication",
  },
  {
    name: "비트코인 안 산 죄",
    url: "https://bit.funnyfunny.cloud/",
    description: "지난 비트코인 미구매분의 기회비용을 계산하는 도구",
    category: "FinanceApplication",
  },
  {
    name: "집 못 산 죄",
    url: "https://house.funnyfunny.cloud/",
    description: "집값 상승 시뮬레이션으로 놓친 금액을 계산",
    category: "FinanceApplication",
  },
  {
    name: "커피중독 테스트",
    url: "https://coffee.funnyfunny.cloud/",
    description: "카페인 의존도를 체크하고 공유할 수 있는 밈 테스트",
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
    name: "화난산타",
    url: "https://run.funnyfunny.cloud/",
    description: "토스산타 빡쳐서 만든 공룡 달리기 게임 — 점수 등록/랭킹",
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
    url: "http://downy.funnyfunny.cloud/",
    description: "좌우 이동으로 계단을 밟고, 떨어지면 끝! (계단 1칸당 1점)",
    category: "GameApplication",
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
    href: "https://nospend.funnyfunny.cloud",
    icon: "💸",
    title: "내가 안 산 것들의 총자산",
    desc: '"그때 그거만 안 샀어도..."를 숫자로',
    tags: ["절약", "총자산", "기회비용"],
  },
  {
    href: "https://edu.funnyfunny.cloud",
    icon: "🎓",
    title: "사교육 지옥도 계산기",
    desc: "교육비 인생 시뮬레이터",
    tags: ["교육비", "지출", "시뮬레이션"],
  },
  {
    href: "https://health.funnyfunny.cloud",
    icon: "🩺",
    title: "건강수명 & 노후 준비",
    desc: "재미로 보는 건강수명",
    tags: ["건강", "노후", "수명"],
  },
  {
    href: "https://cook.funnyfunny.cloud",
    icon: "🍱",
    title: "오늘 뭐 먹지?",
    desc: "하루 메뉴 랜덤 추천",
    tags: ["음식", "추천", "랜덤"],
  },
  {
    href: "https://pick.funnyfunny.cloud",
    icon: "🍿",
    title: "오늘 뭐 볼까? (OTT 픽)",
    desc: "검색 없이 바로 영화·드라마 추천",
    tags: ["영화", "드라마", "OTT", "추천"],
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
    href: "https://time.ashlight.store",
    icon: "⏰",
    title: "예매는타이밍",
    desc: "정확한 서버시간 조회, 예매 도우미",
    tags: ["시간", "서버시간", "예매"],
  },
  {
    href: "https://news.ashlight.store",
    icon: "📰",
    title: "오늘의 IT 뉴스",
    desc: "국내 및 해외 IT 뉴스를 빠르게 요약",
    tags: ["뉴스", "IT", "요약"],
  },
  {
    href: "https://weather.ashlight.store",
    icon: "🌤️",
    title: "지금날씨",
    desc: "내 근처와 주변 날씨 조회",
    tags: ["날씨", "미세먼지", "자외선"],
  },
  {
    href: "https://emojicon.site",
    icon: "🎨",
    title: "EmojiCon Studio",
    desc: "이모지로 아이콘/파비콘을 한 번에 생성",
    tags: ["아이콘", "파비콘", "이모지"],
  },
  {
    href: "https://snaptrail.ashlight.store",
    icon: "📍",
    title: "SnapTrail",
    desc: "사진을 자동 그룹화한 추억 타임라인 생성기",
    tags: ["사진", "타임라인", "추억"],
  },
  {
    href: "https://day.ashlight.store",
    icon: "📅",
    title: "D-day 계산기",
    desc: "날짜 계산, D-Day, N일 후, 기념일, 위젯",
    tags: ["날짜", "D-day", "기념일"],
  },
  {
    href: "https://run.funnyfunny.cloud",
    icon: "🦖",
    title: "화난산타",
    desc: "토스산타 빡쳐서 만든 공룡 달리기 게임 (랭킹)",
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
    href: "http://downy.funnyfunny.cloud/",
    icon: "🪜",
    title: "다우니 (NEON STAIRS)",
    desc: "좌우 이동으로 계단을 밟고, 떨어지면 끝!",
    tags: ["게임", "아케이드", "계단"],
  },
];

export function HomeContent() {
  const [searchQuery, setSearchQuery] = useState("");

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
        url: "https://ashlight.store",
        logo: "https://funnyfunny.cloud/favicon.svg",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: "https://funnyfunny.cloud",
      name: "FunnyFunny Cloud",
      logo: "https://funnyfunny.cloud/favicon.svg",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "인기 테스트",
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

  const filteredServices = allServices.filter((test) => {
    if (!searchQuery.trim()) return true;
    const haystack = [test.title, test.desc, ...(test.tags || [])]
      .join(" ")
      .toLowerCase();
    return haystack.includes(searchQuery.trim().toLowerCase());
  });

  return (
    <div className="bg-slate-50 text-gray-800 text-[15.5px] sm:text-[16px] leading-relaxed min-h-screen">
      <HeaderPortal />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50"></div>
          <div className="absolute -left-10 -top-10 w-48 h-48 bg-blue-200/40 blur-3xl"></div>
          <div className="absolute -right-10 bottom-0 w-48 h-48 bg-purple-200/40 blur-3xl"></div>

          <div className="relative mx-auto max-w-[440px] sm:max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
            <div className="max-w-[440px] sm:max-w-2xl">
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                매일의 생각을 만드는 작은 도구들
              </h2>
              <p className="mt-3 text-base text-slate-700">
                가볍게 해보는 테스트와 도구들로 하루의 생각을 조금 더 깊게
                만들어보세요.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-3 sm:items-center">
                <button
                  data-random-btn
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
                >
                  랜덤 테스트 시작
                </button>
              </div>

              <div className="mt-3 flex sm:hidden items-center gap-2">
                <a
                  href="https://funnyfunny.dothome.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-800 shadow-sm hover:border-blue-400 hover:text-blue-700 transition"
                >
                  <span>게시판</span>
                </a>
                <a
                  href="https://ashlight.store"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-800 shadow-sm hover:border-blue-400 hover:text-blue-700 transition"
                >
                  <span>AshLight</span>
                </a>
              </div>
            </div>
            <div className="mt-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 bg-white/70 px-3 py-1 rounded-full shadow-sm border border-emerald-100">
                Guides
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {seoGuides.map((guide) => (
                  <a
                    key={guide.slug}
                    href={`/guide/${guide.slug}`}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/85 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition"
                  >
                    <div className="text-xl">{guide.emoji}</div>
                    <div>
                      <h3 className="font-semibold text-base text-slate-900">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        {guide.desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-3">
                <a
                  href="/guide"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-800 shadow-sm hover:border-blue-400 hover:text-blue-700 transition"
                >
                  가이드 모두 보기
                </a>
              </div>
            </div>
            <h2 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 bg-white/70 px-3 py-1 rounded-full shadow-sm border border-blue-100 mt-16">
              Top 6
            </h2>
            <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-3">
              <a
                href="https://bit.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="비트코인 안 산 죄 - 그때 샀다면 지금 얼마?"
                data-amp-service="비트코인 안 산 죄"
                data-amp-section="top6"
                className="group p-4 rounded-2xl bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">💸</span>
                  <span className="text-xs font-semibold text-blue-600">
                    지금 핫해요
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  비트코인 안 산 죄
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  그때 샀다면 지금 얼마?
                </p>
              </a>
              <a
                href="https://pick.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="오늘 뭐 볼까? (OTT) - 검색 없이 바로 영화·드라마 추천"
                data-amp-service="오늘 뭐 볼까? (OTT)"
                data-amp-section="top6"
                className="group p-4 rounded-2xl bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🍿</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    실패 없는 픽
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  오늘 뭐 볼까? (OTT)
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  검색 없이 바로 영화·드라마 추천
                </p>
              </a>
              <a
                href="https://audio.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Simple Audio Editor - 브라우저에서 바로 사용하는 오디오 편집 도구"
                data-amp-service="Simple Audio Editor"
                data-amp-section="top6"
                className="group p-4 rounded-2xl bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🎵</span>
                  <span className="text-xs font-semibold text-amber-600">
                    최근 인기
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  Simple Audio Editor
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  브라우저에서 바로 사용하는 오디오 편집 도구
                </p>
              </a>
              <a
                href="https://snaptrail.ashlight.store"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SnapTrail - 사진을 자동 그룹화한 타임라인"
                data-amp-service="SnapTrail"
                data-amp-section="top6"
                className="group p-4 rounded-2xl bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">📍</span>
                  <span className="text-xs font-semibold text-purple-600">
                    추억 정리
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">SnapTrail</h3>
                <p className="text-sm text-slate-600 mt-1">
                  사진을 자동 그룹화한 타임라인
                </p>
              </a>
              <a
                href="https://joke.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="오늘의 아재개그 - 공유각 터지는 개그 모음"
                data-amp-service="오늘의 아재개그"
                data-amp-section="top6"
                className="group p-4 rounded-2xl bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🤣</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    1분 힐링
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  오늘의 아재개그
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  공유각 터지는 개그 모음
                </p>
              </a>
              <a
                href="https://soul.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SoulPrint - 출생 정보 기반 성향 분석"
                data-amp-service="SoulPrint"
                data-amp-section="top6"
                className="group p-4 rounded-2xl bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🔮</span>
                  <span className="text-xs font-semibold text-blue-600">
                    성향 분석
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">SoulPrint</h3>
                <p className="text-sm text-slate-600 mt-1">
                  출생 정보 기반 성향 분석
                </p>
              </a>
            </div>
            <div className="mt-6 sm:mt-8 grid gap-2 sm:grid-cols-3">
              <a
                href="#insight"
                className="flex items-center gap-2 p-3 rounded-xl bg-white/80 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition"
              >
                <span className="text-sm">💡</span>
                <p className="text-sm text-slate-700">오늘의 한 줄 인사이트</p>
              </a>
              <a
                href="#hub"
                className="flex items-center gap-2 p-3 rounded-xl bg-white/80 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition"
              >
                <span className="text-sm">🧠</span>
                <p className="text-sm text-slate-700">
                  나를 이해하는 가장 쉬운 방법
                </p>
              </a>
              <a
                href="#utils"
                className="flex items-center gap-2 p-3 rounded-xl bg-white/80 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition"
              >
                <span className="text-sm">🛠️</span>
                <p className="text-sm text-slate-700">
                  유용할 수 있는 서비스들
                </p>
              </a>
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
                  aria-label="화난산타 — 토스산타 빡쳐서 만든 게임 - 공룡 달리기 + 점수 등록/랭킹"
                  data-amp-service="화난산타"
                  data-amp-section="game"
                  className="group p-5 rounded-2xl bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🦖</span>
                    <span className="text-xs font-semibold text-emerald-600">
                      랭킹 지원
                    </span>
                  </div>
                  <h4 className="font-bold text-lg leading-snug">
                    화난산타 — 토스산타 빡쳐서 만든 게임
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    공룡 달리기 + 점수 등록/랭킹
                  </p>
                </a>
                <a
                  href="https://charm.funnyfunny.cloud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="참참참! (NEON ARCADE) - 라인만 바꿔서 미사일을 피하기만 하면 돼요."
                  data-amp-service="참참참! (NEON ARCADE)"
                  data-amp-section="game"
                  className="group p-5 rounded-2xl bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition"
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
                  href="http://downy.funnyfunny.cloud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="다우니 (NEON STAIRS) - 라인만 바꿔서 계단을 밟고, 떨어지면 끝!"
                  data-amp-service="다우니 (NEON STAIRS)"
                  data-amp-section="game"
                  className="group p-5 rounded-2xl bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition"
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
              </div>
            </div>

            <a
              href="#tests"
              className="w-full sm:w-auto inline-block text-center flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow hover:border-blue-300 hover:text-blue-700 hover:-translate-y-0.5 transition mt-16"
            >
              모든 서비스 보기
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
                <span>추천 콘텐츠</span>
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

        <section
          id="hub"
          className="mx-auto max-w-[440px] sm:max-w-5xl px-4 sm:px-6 py-12 sm:py-14 space-y-12"
        >
          <details className="sm:hidden rounded-2xl bg-white shadow-sm border border-slate-200">
            <summary className="flex items-center justify-between px-4 py-3 cursor-pointer">
              <span className="font-semibold">커뮤니티 / 게시판</span>
              <span className="text-sm text-blue-600">열기</span>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-sm text-slate-600 mb-2">
                모바일에서도 바로 글쓰기/읽기 가능
              </p>
              <a
                href="https://funnyfunny.dothome.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold shadow hover:shadow-md transition"
              >
                게시판 열기
              </a>
            </div>
          </details>

          <div>
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
                    <h4 className="font-semibold">심리 · 성향</h4>
                  </div>
                  <span className="text-xs text-slate-500">3분 컷</span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
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
                    <h4 className="font-semibold">돈 · 재테크</h4>
                  </div>
                  <span className="text-xs text-slate-500">현실 점검</span>
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
                    href="https://money.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🛡️ 자산 방탄 지수
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
                    <h4 className="font-semibold">건강 · 생활</h4>
                  </div>
                  <span className="text-xs text-slate-500">체크 해보기</span>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
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
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎉</span>
                    <h4 className="font-semibold">재미 · 밈</h4>
                  </div>
                  <span className="text-xs text-slate-500">1분 힐링</span>
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
                    href="https://mind.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧠 오늘의 마음챙김
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
                </div>
              </div>
            </div>
          </div>
          <div id="utils" className="scroll-mt-24 sm:scroll-mt-28 pt-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🛠️</span>
              <h3 className="text-xl font-bold">유용할 수 있는 서비스들</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                [
                  "https://audio.funnyfunny.cloud",
                  "🎵 Simple Audio Editor",
                  "브라우저에서 바로 사용하는 오디오 편집 도구",
                  "설치 없이 트림, 병합, 내보내기 — 100% 클라이언트 사이드",
                ],
                [
                  "https://time.ashlight.store",
                  "⏰ 예매는타이밍",
                  "정확한 서버시간 조회, 예매 도우미",
                  "시간 관련 모든 계산을 한 곳에서.",
                ],
                [
                  "https://news.ashlight.store",
                  "📰 오늘의 IT 뉴스",
                  "국내 및 해외 IT 관련 뉴스를 빠르게 요약",
                  "최신 뉴스와 IT 정보를 한눈에.",
                ],
                [
                  "https://weather.ashlight.store",
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
                  "https://emojicon.site",
                  "🎨 EmojiCon Studio",
                  "웹/앱용 이모지 아이콘 스튜디오",
                  "이모지를 한 글자만 넣으면 아이콘, 파비콘, 앱스토어용 아이콘까지 한 번에 생성",
                ],
                [
                  "https://snaptrail.ashlight.store",
                  "📍 SnapTrail",
                  "추억 타임라인 생성기",
                  "사진을 연도와 월별, 지역으로 자동 그룹화하여 시간순으로 정리된 타임라인을 제공",
                ],
                [
                  "https://day.ashlight.store",
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
                  className="block p-5 rounded-2xl bg-white shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
                >
                  <h4 className="font-bold text-lg">{title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  <p className="text-xs text-gray-500 mt-2">{detail}</p>
                </a>
              ))}
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
                  "https://news.ashlight.store",
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
                  className="block p-5 rounded-2xl bg-white shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
                >
                  <h4 className="font-bold text-lg">{title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  <p className="text-xs text-gray-500 mt-2">{detail}</p>
                </a>
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
                <p className="text-sm text-slate-600">
                  지금 {allServices.length}개의 서비스가 준비되어 있어요.
                </p>
                <p className="text-xs text-slate-400">
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
                  placeholder="예: 커피, 투자, 마음챙김"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white shadow-sm text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </label>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
              <span>
                {searchQuery.trim()
                  ? `검색 결과 ${filteredServices.length}개`
                  : "새 서비스가 추가되면 여기서 바로 확인할 수 있어요"}
              </span>
              {searchQuery.trim() && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:text-blue-700 transition"
                >
                  초기화
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
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
                  >
                    <div className="text-xl">{icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg leading-snug">
                        {title}
                      </h4>
                      <p className="text-sm text-slate-600">{desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 text-white p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-200">
                  Stay Longer
                </p>
                <h4 className="mt-1 text-2xl font-bold">
                  다른 사람들은 이것도 했어요
                </h4>
                <p className="mt-2 text-sm text-blue-100">
                  지금 많이 보는 인기 테스트 3개
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://energy.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white text-slate-900 font-semibold text-sm shadow hover:-translate-y-0.5 transition"
                >
                  에너지 누수
                </a>
                <a
                  href="https://bit.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition"
                >
                  비트코인 죄책감
                </a>
                <a
                  href="https://coffee.funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition"
                >
                  커피 중독
                </a>
              </div>
            </div>
          </div>

          <div
            id="faq"
            className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">❓</span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-600">
                  FAQ
                </p>
                <h3 className="text-xl font-bold">자주 묻는 질문</h3>
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {seoFaq.map((item) => (
                <details key={item.question} className="py-3 group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                      {item.question}
                    </span>
                    <span className="text-slate-400 text-lg group-open:rotate-45 transition">
                      +
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterPortal />

      <div
        id="quickBar"
        className="fixed inset-x-0 bottom-3 px-4 sm:px-6 transition transform translate-y-24 opacity-0 pointer-events-none"
      >
        <div className="mx-auto max-w-[440px] sm:max-w-3xl bg-slate-900 text-white rounded-2xl shadow-2xl flex items-center justify-between px-4 py-3 gap-3">
          <div className="text-sm font-semibold">
            나를 이해하는 가장 쉬운 방법
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#hub"
              className="px-3 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold hover:-translate-y-0.5 transition"
            >
              Hub
            </a>
            <button
              data-random-btn
              className="px-3 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold hover:-translate-y-0.5 transition"
            >
              랜덤
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
