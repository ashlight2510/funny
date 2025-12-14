"use client";

import { useEffect } from "react";
import { HeaderPortal } from "./HeaderPortal";
import { FooterPortal } from "./FooterPortal";

const randomTools = [
  "https://coffee.funnyfunny.cloud",
  "https://beauty.funnyfunny.cloud",
  "https://energy.funnyfunny.cloud",
  "https://money.funnyfunny.cloud",
  "https://life.funnyfunny.cloud",
  "https://senseyear.funnyfunny.cloud",
  "https://alcohol.funnyfunny.cloud",
  "https://lazy.funnyfunny.cloud",
  "https://drain.funnyfunny.cloud",
  "https://maldives.funnyfunny.cloud",
  "https://bit.funnyfunny.cloud",
  "https://house.funnyfunny.cloud",
  "https://edu.funnyfunny.cloud",
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
];

export function HomeContent() {
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
            <h2 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 bg-white/70 px-3 py-1 rounded-full shadow-sm border border-blue-100 mt-16">
              Top 3
            </h2>
            <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-3">
              <a
                href="https://bit.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://house.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">🏠</span>
                  <span className="text-xs font-semibold text-emerald-600">
                    현실 점검
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">집 못 산 죄</h3>
                <p className="text-sm text-slate-600 mt-1">
                  놓친 집값, 몇 억 차이일까
                </p>
              </a>
              <a
                href="https://coffee.funnyfunny.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">☕</span>
                  <span className="text-xs font-semibold text-amber-600">
                    최근 인기
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  커피중독 테스트
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  카페인 재정의 — 공유율 최고
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
                    href="https://lazy.funnyfunny.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    😴 귀찮음 진단기
                  </a>
                  <a
                    className="block hover:text-blue-600"
                    href="https://soulprint.funnyfunny.cloud"
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
              <h3 className="text-xl font-bold">전체 테스트 · 계산기</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "https://coffee.funnyfunny.cloud",
                  "☕",
                  "커피중독 테스트",
                  "카페인 의존도·부활 횟수 체크",
                ],
                [
                  "https://beauty.funnyfunny.cloud",
                  "💄",
                  "꾸밈비 파산 테스트",
                  "얼마나 태웠을까? 뷰티 지출 체감",
                ],
                [
                  "https://energy.funnyfunny.cloud",
                  "⚡",
                  "내 삶의 에너지 배분",
                  "번아웃 포인트와 리커버리 가이드",
                ],
                [
                  "https://mental.funnyfunny.cloud",
                  "🧠",
                  "하루 정신 체력 지수 테스트",
                  "오늘의 뇌 에너지·집중력 상태 진단",
                ],
                [
                  "https://money.funnyfunny.cloud",
                  "🛡️",
                  "자산 방탄 지수",
                  "경제 위기 버티기 레벨 측정",
                ],
                [
                  "https://life.funnyfunny.cloud",
                  "⏰",
                  "인생 남은 시간 대시보드",
                  "자유시간, 수면, 커리어 남은 시간",
                ],
                [
                  "https://soul.funnyfunny.cloud",
                  "🔮",
                  "SoulPrint",
                  "출생 정보를 바탕으로 한 독자적인 성향 분석",
                ],
                [
                  "https://senseyear.funnyfunny.cloud",
                  "🎵",
                  "나는 몇 년생 감성인가",
                  "12가지 질문으로 알아보는 나의 감성 테스트",
                ],
                [
                  "https://alcohol.funnyfunny.cloud",
                  "🍺",
                  "주량 MBTI",
                  "술자리 성향 MBTI",
                ],
                [
                  "https://lazy.funnyfunny.cloud",
                  "😴",
                  "귀찮음 진단기",
                  "7가지 요인으로 무기력 원인 찾기",
                ],
                [
                  "https://drain.funnyfunny.cloud",
                  "⚡",
                  "인생 에너지 누수 진단기",
                  "지금 나는 어디로 새고 있는가",
                ],
                [
                  "https://maldives.funnyfunny.cloud",
                  "🏝️",
                  "몰디브 매치",
                  "나의 몰디브 여행 성향 찾기",
                ],
                [
                  "https://bit.funnyfunny.cloud",
                  "💸",
                  "비트코인 안 산 죄",
                  "그때 샀다면 지금 얼마?",
                ],
                [
                  "https://house.funnyfunny.cloud",
                  "🏠",
                  "집 못 산 죄",
                  "아… 몇 억 차이일까",
                ],
                [
                  "https://edu.funnyfunny.cloud",
                  "🎓",
                  "사교육 지옥도 계산기",
                  "교육비 인생 시뮬레이터",
                ],
                [
                  "https://health.funnyfunny.cloud",
                  "🩺",
                  "건강수명 & 노후 준비",
                  "재미로 보는 건강수명",
                ],
                [
                  "https://cook.funnyfunny.cloud",
                  "🍱",
                  "오늘 뭐 먹지?",
                  "하루 메뉴 랜덤 추천",
                ],
                [
                  "https://anju.funnyfunny.cloud",
                  "🍢",
                  "오늘의 안주",
                  "술안주 랜덤 추천",
                ],
                [
                  "https://cafe.funnyfunny.cloud",
                  "☕",
                  "카페 지출 역전 계산",
                  "30살까지 커피로 태운 돈?",
                ],
                [
                  "https://drink.funnyfunny.cloud",
                  "🍺",
                  "그때 마신 술, 지금 얼마?",
                  "한 달 술값 총액 vs 투자했을 때 금액",
                ],
                [
                  "https://joke.funnyfunny.cloud",
                  "🤣",
                  "오늘의 아재개그",
                  "공유각 터지는 개그 모음",
                ],
                [
                  "https://mind.funnyfunny.cloud",
                  "🧠",
                  "오늘의 마음챙김",
                  "명언 한 줄 힐링",
                ],
                [
                  "https://beat.funnyfunny.cloud",
                  "🥁",
                  "드럼 비트 연습기",
                  "메트로놈 + 기본 패턴 연습",
                ],
              ].map(([href, icon, title, desc]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "FunnyFunny Cloud",
            url: "https://funnyfunny.cloud",
            description: "세상에서 제일 웃기고 유익한 계산기 포털",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://funnyfunny.cloud/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            publisher: {
              "@type": "Organization",
              name: "AshLight",
              url: "https://ashlight.store",
            },
          }),
        }}
      />
    </div>
  );
}
