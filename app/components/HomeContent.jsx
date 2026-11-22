"use client";

import { useEffect, useState } from "react";
import { HeaderPortal } from "./HeaderPortal";
import { FooterPortal } from "./FooterPortal";
import {
  randomTools,
  seoTopItems,
  seoApplications,
  getSeoFaq,
} from "../lib/constants";
import { getAllServices, getSeoGuides, hrefToSlug, getToolPath, getCalculators, getTests, getGames, getUtils } from "../lib/services";
import { pageCopy } from "../lib/translations";
import { defaultLang, getInitialLang, formatTemplate } from "../lib/i18n";
import { ENABLE_FLOW } from "../lib/features";

export function HomeContent() {
  const [lang, setLang] = useState(defaultLang);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [tagsExpanded, setTagsExpanded] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const translationPack = pageCopy[lang] || pageCopy[defaultLang];
  const fallbackPack = pageCopy[defaultLang];
  const allServices = getAllServices(lang);
  const calculators = getCalculators(lang);
  const tests = getTests(lang);
  const games = getGames(lang);
  const utils = getUtils(lang);
  const seoGuides = getSeoGuides(lang);
  const seoFaq = getSeoFaq(lang);
  const featuredCalcSlugs = ["tax", "n", "time", "space", "birth", "cafe"];
  const featuredTestSlugs = ["rest", "product", "money", "bmi", "dailycheck", "senseyear"];
  const featuredCalculators = calculators.filter((t) => featuredCalcSlugs.includes(hrefToSlug(t.href)));
  const featuredTests = tests.filter((t) => featuredTestSlugs.includes(hrefToSlug(t.href)));
  const featuredTools = [...featuredCalculators.slice(0, 4), ...featuredTests.slice(0, 4)];

  useEffect(() => {
    setLang(getInitialLang());
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage?.setItem("preferredLang", lang);
  }, [lang]);

  const t = (key, vars = {}) =>
    formatTemplate(translationPack[key] ?? fallbackPack[key] ?? key, vars);
  const handleLangChange = (nextLang) => {
    setLang(pageCopy[nextLang] ? nextLang : defaultLang);
  };

  // SEO path: link to funnyfunny.cloud/tools/{slug} when available
  const toToolHref = (href) => {
    const slug = hrefToSlug(href);
    return slug ? getToolPath(slug) : href;
  };

  // Helper function to get translated service name by href
  const getServiceTitle = (href) => {
    // Normalize URLs by removing trailing slashes for comparison
    const normalizeUrl = (url) => url.replace(/\/$/, "");
    const normalizedHref = normalizeUrl(href);

    const service = allServices.find(
      (s) => normalizeUrl(s.href) === normalizedHref
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

    const onScroll = () => {
      const y = window.scrollY;
      // Top button: after ~1 viewport of scroll (not at the very top).
      setShowTopBtn(y > window.innerHeight * 0.85);

      if (!quickBar) return;
      const shouldShow = y > 220;
      quickBar.style.transform = shouldShow
        ? "translateY(0)"
        : "translateY(24px)";
      quickBar.style.opacity = shouldShow ? "1" : "0";
      quickBar.style.pointerEvents = shouldShow ? "auto" : "none";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
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
      name: "All Tools",
      numberOfItems: allServices.length,
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      itemListElement: allServices.map((service, index) => {
        const url = toToolHref(service.href);
        return {
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: url.startsWith("http") ? url : `https://funnyfunny.cloud${url}`,
          description: service.desc,
        };
      }),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Guides",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      itemListElement: seoGuides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: `https://funnyfunny.cloud/guide/${guide.slug}/`,
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
    <div className="pavilion-bg relative flex min-h-dvh flex-col text-[var(--ink)] text-[15.5px] sm:text-[16px] leading-relaxed">
      <HeaderPortal lang={lang} onLangChange={handleLangChange} t={t} />
      <main className="flex-1">
        {/* Hero — calmer PAVILION: brand, ONE headline, ONE line, search + 4 gates */}
        <section className="border-b-2 border-[var(--ink)] bg-[var(--paper)]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
              <div className="ff-rise">
                <p className="section-eyebrow">{t("pavilionEyebrow")}</p>
                <p className="font-display mt-4 text-[clamp(2.6rem,7vw,4.8rem)] leading-[.95] text-[var(--ink)]">
                  FunnyFunny<br /><span className="text-[var(--coral-deep)]" style={{ textShadow: "4px 4px 0 var(--sun)" }}>Cloud</span>
                </p>
                <h2 className="font-play mt-5 text-[clamp(1.5rem,3.2vw,2.2rem)] leading-snug text-[var(--ink)]">{t("heroTitle")}</h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--muted-on-paper)]">{t("heroSubtitle")}</p>
                <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[var(--muted-on-paper)]">
                  <span className="inline-block rounded-[8px] border-[1.5px] border-[var(--ink)] bg-[var(--sun)] px-2 py-0.5 font-play text-[13px] text-[var(--ink)]">{t("heroBadgeMain")} · {t("heroBadgeSub")}</span>
                  <span>{t("heroServiceCount", { count: allServices.length })}</span>
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://trip.funnyfunny.cloud/explore/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-amp-service="풍경너머"
                    data-amp-section="flagship"
                    className="btn-coral text-[15px]"
                  >
                    🗺️ {t("flagshipCta")}
                  </a>
                  <button data-random-btn className="rounded-[10px] border-[1.5px] border-[var(--ink)] bg-[var(--paper)] px-4 py-2.5 font-play text-[15px] text-[var(--ink)] shadow-[2px_2px_0_var(--ink)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_var(--ink)] transition-transform">
                    🎲 {t("randomButtonSmall")}
                  </button>
                </div>
                <label className="relative mt-4 block max-w-xl">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm" aria-hidden="true">🔍</span>
                  <input value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); setSelectedTag(""); }} placeholder={t("searchPlaceholder")} className="ticket-input" aria-label={t("searchPlaceholder")} />
                </label>
                {showSearchResults && (
                  <div className="mt-6 max-w-xl">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-play text-lg text-[var(--ink)]">{t("searchResultsTitle")}</h3>
                      {(normalizedQuery || selectedTag) && (
                        <button type="button" onClick={() => { setSearchQuery(""); setSelectedTag(""); }} className="link-coral text-sm">{t("searchResetButton")}</button>
                      )}
                    </div>
                    {filteredServices.length === 0 ? (
                      <p className="text-sm text-[var(--muted-on-paper)] py-4">{t("searchNoMatches")}</p>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {filteredServices.slice(0, 9).map(({ href, icon, title, desc }) => (
                          <a key={href} href={toToolHref(href)} target="_blank" rel="noopener noreferrer" data-amp-service={title} data-amp-section="search" className="tool-card flex items-start gap-3 p-3">
                            <span className="text-xl">{icon}</span>
                            <span><span className="block font-bold text-[var(--ink)]">{title}</span><span className="block text-xs text-[var(--muted-on-paper)] mt-0.5 line-clamp-2">{desc}</span></span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* Flagship — 풍경너머 */}
              <div className="ff-rise ff-rise-2 ml-auto max-w-md">
                <a
                  href="https://trip.funnyfunny.cloud/explore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-amp-service="풍경너머"
                  data-amp-section="flagship-panel"
                  className="ticket-panel ff-float block rotate-[-1deg] no-underline text-inherit hover:rotate-0 transition-transform"
                >
                  <div className="awning-sm" />
                  <div className="p-6">
                    <div className="flex items-baseline justify-between font-latin text-[11px] font-bold tracking-[0.18em] text-[var(--muted-on-paper)]">
                      <span>{t("flagshipTag")}</span>
                      <span className="rounded-[6px] border-[1.5px] border-[var(--ink)] bg-[var(--sun)] px-1.5 py-0.5 text-[10px] tracking-wider text-[var(--ink)]">{t("flagshipEyebrow")}</span>
                    </div>
                    <p className="font-display mt-4 text-[clamp(2rem,4vw,2.75rem)] leading-[.95] text-[var(--ink)]">{t("flagshipTitle")}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted-on-paper)]">{t("flagshipSubtitle")}</p>
                    <div className="perf mt-5 pt-4 flex flex-wrap gap-2 text-[13px]">
                      <span className="rounded-[8px] border-[1.5px] border-[var(--ink)] bg-[var(--paper-2)] px-2 py-1 font-play">🗺️ 지도</span>
                      <span className="rounded-[8px] border-[1.5px] border-[var(--ink)] bg-[var(--paper-2)] px-2 py-1 font-play">⭐ 후기</span>
                      <span className="rounded-[8px] border-[1.5px] border-[var(--ink)] bg-[var(--mint)] px-2 py-1 font-play text-white">📷 거리뷰</span>
                    </div>
                    <p className="mt-5 font-play text-[15px] text-[var(--coral-deep)]">{t("flagshipCta")} →</p>
                  </div>
                </a>
                <div className="mt-3 flex flex-wrap justify-end gap-2">
                  {[
                    { href: "https://trip.funnyfunny.cloud/explore/gangneung-cafe/", label: t("flagshipChipGangneung") },
                    { href: "https://trip.funnyfunny.cloud/explore/jeju-beach/", label: t("flagshipChipJeju") },
                    { href: "https://trip.funnyfunny.cloud/explore/seoul-cafe/", label: t("flagshipChipSeoul") },
                    { href: "https://trip.funnyfunny.cloud/explore/jeonju-hanok/", label: t("flagshipChipJeonju") },
                  ].map((chip) => (
                    <a
                      key={chip.href}
                      href={chip.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-amp-service="풍경너머"
                      data-amp-section="flagship-theme"
                      className="rounded-[8px] border-[1.5px] border-[var(--ink)] bg-[var(--paper)] px-2.5 py-1 font-play text-[12px] text-[var(--ink)] shadow-[2px_2px_0_var(--ink)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_var(--ink)] transition-transform"
                    >
                      {chip.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* 4 gates */}
            <h3 className="sr-only">{t("gatesTitle")}</h3>
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 ff-rise ff-rise-3">
              <a href="/calculators/" className="gate-card" style={{ "--gate": "var(--coral)" }}><span className="gate-ico" style={{ background: "var(--sun)" }}>🧮</span><span className="font-play text-lg leading-tight">{t("heroCtaCalculators")} <span aria-hidden="true">→</span></span><span className="text-[13px] leading-snug text-[var(--muted-on-paper)]">{t("gateCalculatorsDesc")} · {calculators.length}</span></a>
              <a href="/tests/" className="gate-card" style={{ "--gate": "var(--mint)" }}><span className="gate-ico" style={{ background: "var(--mint)" }}>🧪</span><span className="font-play text-lg leading-tight">{t("heroCtaTests")} <span aria-hidden="true">→</span></span><span className="text-[13px] leading-snug text-[var(--muted-on-paper)]">{t("gateTestsDesc")} · {tests.length}</span></a>
              <a href="/games/" className="gate-card" style={{ "--gate": "var(--sun)" }}><span className="gate-ico" style={{ background: "var(--coral)" }}>🎰</span><span className="font-play text-lg leading-tight">{t("gateArcadeTitle")} <span aria-hidden="true">→</span></span><span className="text-[13px] leading-snug text-[var(--muted-on-paper)]">{t("gateArcadeDesc")} · {games.length}</span></a>
              <a href="/guide/" className="gate-card" style={{ "--gate": "var(--sky)" }}><span className="gate-ico" style={{ background: "var(--sky)" }}>📚</span><span className="font-play text-lg leading-tight">{t("heroCtaGuides")} <span aria-hidden="true">→</span></span><span className="text-[13px] leading-snug text-[var(--muted-on-paper)]">{t("gateGuidesDesc")} · {seoGuides.length}</span></a>
            </div>
            <p className="mt-5 text-sm text-[var(--muted-on-paper)]">{t("quickBarMessage")}</p>
          </div>
        </section>

        {/* 인기·시즌 추천 + 카테고리 진입 */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-12">
          <div className="mb-6">
            <h3 className="font-play text-xl text-[var(--ink)]">{t("featuredTitle")}</h3>
            <p className="text-sm text-[var(--muted-on-paper)] mt-0.5">{t("featuredSubtitle")}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {featuredTools.map(({ href, icon, title, desc }) => (
              <a
                key={href}
                href={toToolHref(href)}
                target="_blank"
                rel="noopener noreferrer"
                data-amp-service={title}
                data-amp-section="featured"
                className="tool-card flex flex-col gap-2 p-4"
              >
                <span className="text-2xl">{icon}</span>
                <h4 className="font-semibold text-[var(--ink)] text-sm leading-snug">{title}</h4>
                <p className="text-xs text-[var(--muted-on-paper)] line-clamp-2">{desc}</p>
              </a>
            ))}
          </div>
</section>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
          <div className="paper-card overflow-hidden !rounded-[16px]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--ink)]/10">
              <span className="text-xs font-semibold text-[var(--muted-on-paper)]">{t("adLabel")} · {t("dableLabel")}</span>
            </div>
            <div className="p-4">
              <div id="dablewidget_6Xgdpy6o_37Jam9xo" data-widget_id-pc="6Xgdpy6o" data-widget_id-mo="37Jam9xo"></div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-12 space-y-12 bg-transparent">
          <div id="utils" className="scroll-mt-24 pt-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🛠️</span>
              <h3 className="font-play text-xl text-[var(--ink)]">{t("usefulServicesTitle")}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {(() => {
                const isKo = lang === "ko";
                const utils = [
                  ...(ENABLE_FLOW
                    ? [
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
                      ]
                    : []),
                  {
                    href: "https://video.funnyfunny.cloud",
                    title: isKo ? "🎬 AutoCut Studio" : "🎬 AutoCut Studio",
                    desc: isKo
                      ? "자동 하이라이트 & 점프 컷"
                      : "Auto highlight & jump cuts",
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
                    title: isKo
                      ? "🔍 이미지 텍스트 추출기"
                      : "🔍 Image Text Extractor",
                    desc: isKo
                      ? "사진 속 텍스트 자동 읽기 및 텍스트로 복사"
                      : "Auto-read text in photos and copy as text",
                    detail: isKo
                      ? "영수증, 문서, 메모의 텍스트를 클립보드나 파일로 추출하는 OCR 도구"
                      : "OCR tool that extracts text from receipts, documents, or notes to clipboard or file",
                  },
                  {
                    href: "https://audio.funnyfunny.cloud",
                    title: isKo
                      ? "🎵 간단한 오디오 편집기"
                      : "🎵 Simple Audio Editor",
                    desc: isKo
                      ? "브라우저에서 직접 오디오 편집"
                      : "Edit audio directly in the browser",
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
                    desc: isKo
                      ? "추억 타임라인 메이커"
                      : "Memory timeline maker",
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
                    href={toToolHref(href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tool-card block p-4"
                  >
                    <h4 className="font-bold text-lg">{title}</h4>
                    <p className="text-sm text-[var(--muted-on-paper)] mt-1">{desc}</p>
                    <p className="text-xs text-[var(--muted-on-paper)] mt-2">{detail}</p>
                  </a>
                ));
              })()}
            </div>
          </div>
          {ENABLE_FLOW && (
            <details className="sm:hidden rounded-2xl bg-[var(--paper-2)] text-[var(--ink)] shadow-sm border border-[var(--ink)]">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-[var(--ink)]">
                <span className="font-semibold">{t("communityBoard")}</span>
                <span className="text-sm text-[var(--coral-deep)]">{t("openLabel")}</span>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-sm text-[var(--muted-on-paper)] mb-2">
                  {t("flowBoardDesc")}
                </p>
                <a
                  href={toToolHref("https://flow.funnyfunny.cloud/")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-coral !px-3 !py-2 text-sm"
                >
                  {t("openFLOW")}
                </a>
              </div>
            </details>
          )}

          <div id="hub" className="scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🧭</span>
              <h3 className="font-play text-xl text-[var(--ink)]">{t("hubTitle")}</h3>
            </div>
            {(() => {
              const hubCategories = [
                {
                  icon: "🎉",
                  titleKey: "sectionFun",
                  badgeKey: "label1MinChill",
                  items: [
                    ["https://heal.funnyfunny.cloud", "💌"],
                    ["https://fortune.funnyfunny.cloud", "🔮"],
                    ["https://need.funnyfunny.cloud/", "🧭"],
                    ["https://wisdom.funnyfunny.cloud", "📜"],
                    ["https://temple.funnyfunny.cloud/", "🛕"],
                    ["https://hwatu.funnyfunny.cloud", "🎴"],
                    ["https://joke.funnyfunny.cloud", "🤣"],
                    ["https://mind.funnyfunny.cloud", "🧠"],
                    ["https://soccer.funnyfunny.cloud", "⚽"],
                    ["https://balance.funnyfunny.cloud/", "⚖️"],
                    ["https://random.funnyfunny.cloud/", "🎱"],
                    ["https://pick.funnyfunny.cloud", "🍿"],
                    ["https://beat.funnyfunny.cloud", "🥁"],
                    ["https://maldives.funnyfunny.cloud", "🏝️"],
                    ["https://hand.funnyfunny.cloud/", "✋"],
                    ["https://snaptrail.funnyfunny.cloud", "📍"],
                    ["https://xmas.funnyfunny.cloud/", "🎁"],
                  ],
                },
                {
                  icon: "🧠",
                  titleKey: "sectionPsychology",
                  badgeKey: "label3MinQuick",
                  items: [
                    ["https://today.funnyfunny.cloud", "🌱"],
                    ["https://todo.funnyfunny.cloud/", "✅"],
                    ["https://happy.funnyfunny.cloud/", "🌿"],
                    ["https://dream.funnyfunny.cloud/", "💭"],
                    ["https://melancholy.funnyfunny.cloud", "🌙"],
                    ["https://dailycheck.funnyfunny.cloud/", "📝"],
                    ["https://rest.funnyfunny.cloud", "🛋️"],
                    ["https://mental.funnyfunny.cloud", "🧠"],
                    ["https://energy.funnyfunny.cloud", "⚡"],
                    ["https://drain.funnyfunny.cloud", "⚡"],
                    ["https://product.funnyfunny.cloud", "🚀"],
                    ["https://lazy.funnyfunny.cloud", "😴"],
                    ["https://human.funnyfunny.cloud", "🙃"],
                    ["https://ego.funnyfunny.cloud", "🧬"],
                    ["https://soul.funnyfunny.cloud", "🔮"],
                    ["https://senseyear.funnyfunny.cloud", "🎵"],
                    ["https://saju.funnyfunny.cloud/", "🔮"],
                    ["https://alcohol.funnyfunny.cloud", "🍺"],
                    ["https://inlaw.funnyfunny.cloud", "💬"],
                    ["https://motivate.funnyfunny.cloud/", "🔥"],
                  ],
                },
                {
                  icon: "💰",
                  titleKey: "sectionMoney",
                  badgeKey: "labelRealityCheck",
                  items: [
                    ["https://bit.funnyfunny.cloud", "💸"],
                    ["https://house.funnyfunny.cloud", "🏠"],
                    ["https://invest.funnyfunny.cloud", "📈"],
                    ["https://money.funnyfunny.cloud", "🛡️"],
                    ["https://specific.funnyfunny.cloud/", "🧮"],
                    ["https://year.funnyfunny.cloud", "🧾"],
                    ["https://tax.funnyfunny.cloud", "🧾"],
                    ["https://space.funnyfunny.cloud", "📐"],
                    ["https://edu.funnyfunny.cloud", "🎓"],
                    ["https://average.funnyfunny.cloud", "📊"],
                    ["https://nospend.funnyfunny.cloud", "💸"],
                    ["https://waste.funnyfunny.cloud", "♻️"],
                    ["https://commute.funnyfunny.cloud/", "⏰"],
                    ["https://n.funnyfunny.cloud/", "🍽️"],
                    ["https://cafe.funnyfunny.cloud", "☕"],
                    ["https://drink.funnyfunny.cloud", "🍺"],
                    ["https://beauty.funnyfunny.cloud", "💄"],
                  ],
                },
                {
                  icon: "🌿",
                  titleKey: "sectionHealth",
                  badgeKey: "labelQuickCheck",
                  items: [
                    ["https://winter.funnyfunny.cloud", "❄️"],
                    ["https://coffee.funnyfunny.cloud", "☕"],
                    ["https://health.funnyfunny.cloud", "🩺"],
                    ["https://bmi.funnyfunny.cloud/", "📏"],
                    ["https://hairloss.funnyfunny.cloud/", "🌿"],
                    ["https://cosmetics.funnyfunny.cloud", "🧴"],
                    ["https://sleep.funnyfunny.cloud", "🌙"],
                    ["https://life.funnyfunny.cloud", "⏰"],
                    ["https://cook.funnyfunny.cloud", "🍱"],
                    ["https://fridge.funnyfunny.cloud", "🥕"],
                    ["https://anju.funnyfunny.cloud", "🍢"],
                    ["https://weather.funnyfunny.cloud", "🌤️"],
                    ["https://baby.funnyfunny.cloud/", "👶"],
                    ["https://miracle.funnyfunny.cloud/", "🌍"],
                  ],
                },
              ];
              return (
                <div className="grid gap-4 sm:grid-cols-2">
                  {hubCategories.map((cat) => (
                    <div
                      key={cat.titleKey}
                      className="paper-card p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{cat.icon}</span>
                          <h4 className="font-semibold text-[var(--ink)]">
                            {t(cat.titleKey)}
                          </h4>
                        </div>
                        <span className="text-xs text-[var(--muted-on-paper)]">
                          {t(cat.badgeKey)}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm text-[var(--ink-2)]">
                        {cat.items.map(([href, emoji]) => (
                          <a
                            key={href}
                            className="block hover:text-[var(--coral-deep)]"
                            href={toToolHref(href)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {emoji} {getServiceTitle(href)}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
          <div id="insight" className="scroll-mt-24 pt-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">💡</span>
              <h3 className="font-play text-xl text-[var(--ink)]">{t("insightCtaTitle")}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {(() => {
                const isKo = lang === "ko";
                const insights = [
                  { href: "https://today.funnyfunny.cloud", icon: "🌱", desc: isKo ? "오늘 내가 잘한 일" : "What did I do well today?", detail: isKo ? "한 줄로 요약하고 내일 행동 정하기" : "Summarize wins and set tomorrow's action" },
                  { href: "https://todo.funnyfunny.cloud/", icon: "✅", desc: isKo ? "오늘의 할 일" : "Today's to-do", detail: isKo ? "집중할 일만 남기고 체크" : "Keep focus tasks and check off" },
                  { href: "https://melancholy.funnyfunny.cloud", icon: "🌙", desc: isKo ? "오늘의 마음 정리" : "Organize today's feelings", detail: isKo ? "기운 회복을 위한 짧은 체크" : "Brief check for energy recovery" },
                  { href: "https://dailycheck.funnyfunny.cloud/", icon: "📝", desc: isKo ? "오늘의 컨디션 한 줄" : "Today's condition in one line", detail: isKo ? "5가지 체크로 요약" : "Summarize with 5 quick checks" },
                  { href: "https://rest.funnyfunny.cloud", icon: "🛋️", desc: isKo ? "지금 쉬어도 될까?" : "Should I rest now?", detail: isKo ? "짧은 설문으로 확인" : "Check with a short survey" },
                  { href: "https://hwatu.funnyfunny.cloud", icon: "🎴", desc: isKo ? "화투로 보는 오늘의 운세" : "Today's fortune by Hwatu", detail: isKo ? "한 장으로 행운 확인" : "One card for today's luck" },
                  { href: "https://cook.funnyfunny.cloud", icon: "🍱", desc: isKo ? "오늘 뭐 먹지?" : "What to eat today?", detail: isKo ? "랜덤 메뉴 추천" : "Random menu recommendations" },
                  { href: "https://chef.funnyfunny.cloud/", icon: "👨‍🍳", desc: isKo ? "오늘의 선택 심사" : "Today's choice judge", detail: isKo ? "밈 스타일 판단 코멘트" : "Meme-style judging comments" },
                  { href: "https://anju.funnyfunny.cloud", icon: "🍢", desc: isKo ? "오늘의 안주 페어링" : "Today's snack pairing", detail: isKo ? "술과 함께할 랜덤 안주" : "Random snack for drinks" },
                  { href: "https://pick.funnyfunny.cloud", icon: "🍿", desc: isKo ? "오늘 뭐 볼까" : "What to watch today", detail: isKo ? "영화·드라마 추천" : "Movie and drama picks" },
                  { href: "https://happy.funnyfunny.cloud/", icon: "🌿", desc: isKo ? "처음처럼" : "Like the First Time", detail: isKo ? "잊고 지냈던 순간을 떠올리는 하루 한 질문" : "One question a day to recall forgotten moments" },
                  { href: "https://heal.funnyfunny.cloud", icon: "💌", desc: isKo ? "클릭 한 번 위로 카드" : "One-click comfort card", detail: isKo ? "오늘 필요한 말 전달" : "Words you need today" },
                  { href: "https://fortune.funnyfunny.cloud", icon: "🔮", desc: isKo ? "오늘의 한 줄 운세" : "One-line fortune", detail: isKo ? "기분에 맞는 운세 선택" : "Fortune based on your mood" },
                  { href: "https://wisdom.funnyfunny.cloud", icon: "📜", desc: isKo ? "오늘의 지혜" : "Daily wisdom", detail: isKo ? "성경 영감 한 줄" : "One line from scripture" },
                  { href: "https://need.funnyfunny.cloud/", icon: "🧭", desc: isKo ? "지금 필요한 한마디" : "The one line I need", detail: isKo ? "감정·상황별 한 문장" : "Today's line by emotion" },
                  { href: "https://temple.funnyfunny.cloud/", icon: "🛕", desc: isKo ? "하루 한 문장 (절)" : "Temple daily quote", detail: isKo ? "불교 가르침을 오늘 언어로" : "Buddhist teachings in modern language" },
                  { href: "https://mind.funnyfunny.cloud", icon: "🧠", desc: isKo ? "오늘의 마음챙김" : "Today's mindfulness", detail: isKo ? "차분함을 위한 한 줄" : "One-line quote for calm" },
                  { href: "https://joke.funnyfunny.cloud", icon: "🤣", desc: isKo ? "오늘의 아재 개그" : "Dad jokes of the day", detail: isKo ? "공유하기 좋은 짧은 웃음" : "Shareable quick laughs" },
                  { href: "https://news.funnyfunny.cloud", icon: "📰", desc: isKo ? "오늘의 IT 뉴스" : "IT news today", detail: isKo ? "국내외 IT 뉴스 요약" : "Quick IT news summaries" },
                  { href: "https://motivate.funnyfunny.cloud/", icon: "🔥", desc: isKo ? "동기부여 리셋" : "Motivation reset", detail: isKo ? "몇 초 만에 마음가짐 리셋" : "Reset mindset in seconds" },
                  { href: "https://music.funnyfunny.cloud", icon: "🎵", desc: isKo ? "지금 어울리는 음악" : "Music for this moment", detail: isKo ? "오늘의 리듬에 맞는 무드" : "Music moods for today's rhythm" },
                ];
                return insights.map(({ href, icon, desc, detail }) => {
                  const serviceTitle = getServiceTitle(href);
                  return (
                    <a
                      key={href}
                      href={toToolHref(href)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tool-card block p-4"
                    >
                      <h4 className="font-bold text-lg">
                        {icon} {serviceTitle}
                      </h4>
                      <p className="text-sm text-[var(--muted-on-paper)] mt-1">{desc}</p>
                      <p className="text-xs text-[var(--muted-on-paper)] mt-2">{detail}</p>
                    </a>
                  );
                });
              })()}
            </div>
          </div>

          <div id="arcade" className="mt-10 scroll-mt-24">
            <h3 className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ink)]">
              🎮 {t("sectionGames")}
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">

              <a
                href={toToolHref("https://funnyfunny.cloud/tools/arcade/")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="뽑기통 — 랜덤 뽑기 통합"
                data-amp-service="Arcade"
                data-amp-section="game"
                className="group overflow-hidden p-5 pt-0 rounded-[20px] bg-[#FFF6DE] text-[#0E2230] border-2 border-[#0E2230] shadow-[12px_12px_0_var(--coral)] hover:-translate-y-0.5 transition sm:col-span-2"
              >
                <div
                  aria-hidden="true"
                  className="-mx-5 mb-4 h-[26px] border-b-2 border-[#0E2230]"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg,#FF4B33 0 32px,#FFFDF6 32px 64px,#FFB81C 64px 96px,#FFFDF6 96px 128px,#16B892 128px 160px,#FFFDF6 160px 192px)",
                  }}
                />
                <div className="flex items-center justify-between mb-2">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border-2 border-[#0E2230] bg-[#FFB81C] text-[22px] -rotate-3">
                    🎰
                  </span>
                  <span
                    className="text-[11px] font-bold tracking-[0.18em] text-[#6B6252]"
                    style={{ fontFamily: "'Outfit','Jua',sans-serif" }}
                  >
                    PICK TICKET · PICK ARCADE
                  </span>
                </div>
                <h4
                  className="font-bold text-[26px] leading-snug"
                  style={{ fontFamily: "'Jua','Gowun Dodum',sans-serif" }}
                >
                  {getServiceTitle("https://funnyfunny.cloud/tools/arcade/")}
                  <span aria-hidden="true" className="text-[#D93622]"> →</span>
                </h4>
                <p className="text-sm text-[#6B6252] mt-1">
                  {lang === "ko"
                    ? "고민은 넣고, 답은 뽑고 — 음식·주사위·운세·닉네임 등 랜덤 뽑기를 한곳에서."
                    : "Food, dice, fortune, nicknames — all in one place."}
                </p>
              </a>

              <a
                href={toToolHref("https://run.funnyfunny.cloud")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Run — dino runner-style leaderboard game"
                data-amp-service="Run"
                data-amp-section="game"
                className="tool-card group p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🦖</span>
                  <span className="text-xs font-semibold text-[var(--mint)]">
                    {t("gameLeaderboard")}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://run.funnyfunny.cloud")}
                </h4>
                <p className="text-sm text-[var(--muted-on-paper)] mt-1">
                  {t("gameRunDesc")}
                </p>
              </a>
              <a
                href={toToolHref("https://charm.funnyfunny.cloud/")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cham Cham Cham! (NEON ARCADE) - switch lanes to dodge missiles"
                data-amp-service="Cham Cham Cham! (NEON ARCADE)"
                data-amp-section="game"
                className="tool-card group p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🛸</span>
                  <span className="text-xs font-semibold text-[var(--coral-deep)]">
                    {t("gameNeonArcade")}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://charm.funnyfunny.cloud/")}
                </h4>
                <p className="text-sm text-[var(--muted-on-paper)] mt-1">
                  {t("gameCharmDesc")}
                </p>
              </a>
              <a
                href={toToolHref("https://downy.funnyfunny.cloud/")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Downy (NEON STAIRS) - switch lanes to climb stairs, fall and it's over"
                data-amp-service="Downy (NEON STAIRS)"
                data-amp-section="game"
                className="tool-card group p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🪜</span>
                  <span className="text-xs font-semibold text-[var(--coral-deep)]">
                    {t("gameNeonStairs")}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://downy.funnyfunny.cloud/")}
                </h4>
                <p className="text-sm text-[var(--muted-on-paper)] mt-1">
                  {t("gameDownyDesc")}
                </p>
              </a>
              <a
                href={toToolHref("https://neox.funnyfunny.cloud/")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NEOX - neon arcade shooter, dodge barrages and climb score"
                data-amp-service="NEOX"
                data-amp-section="game"
                className="tool-card group p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🚀</span>
                  <span className="text-xs font-semibold text-[var(--sky)]">
                    {t("gameNeox")}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://neox.funnyfunny.cloud/")}
                </h4>
                <p className="text-sm text-[var(--muted-on-paper)] mt-1">
                  {t("gameNeoxDesc")}
                </p>
              </a>
              <a
                href={toToolHref("https://tet.funnyfunny.cloud/")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="One Round Tetris - single (AI) and 2-player modes"
                data-amp-service="One Round Tetris"
                data-amp-section="game"
                className="tool-card group p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🧱</span>
                  <span className="text-xs font-semibold text-[var(--coral-deep)]">
                    {t("game2Player")}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://tet.funnyfunny.cloud/")}
                </h4>
                <p className="text-sm text-[var(--muted-on-paper)] mt-1">
                  {t("gameTetrisDesc")}
                </p>
              </a>
              <a
                href={toToolHref("https://solhwatu.funnyfunny.cloud")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hwatu Solitaire - card stacking game using Hwatu cards"
                data-amp-service="Hwatu Solitaire"
                data-amp-section="game"
                className="tool-card group p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🎴</span>
                  <span className="text-xs font-semibold text-[var(--coral-deep)]">
                    {t("gameSolitaire")}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://solhwatu.funnyfunny.cloud")}
                </h4>
                <p className="text-sm text-[var(--muted-on-paper)] mt-1">
                  {t("gameSolitaireDesc")}
                </p>
              </a>
              <a
                href={toToolHref("https://random.funnyfunny.cloud/")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neon Pinball Random Picker - the rolling ball picks for you"
                data-amp-service="Neon Pinball Random Picker"
                data-amp-section="game"
                className="tool-card group p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🎱</span>
                  <span className="text-xs font-semibold text-[var(--coral-deep)]">
                    {t("gameNeonPinball")}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  {getServiceTitle("https://random.funnyfunny.cloud/")}
                </h4>
                <p className="text-sm text-[var(--muted-on-paper)] mt-1">
                  {t("gamePinballDesc")}
                </p>
              </a>
              <a
                href={toToolHref("http://sudoku.funnyfunny.cloud/")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sudoku Web Game - classic sudoku with selectable difficulty"
                data-amp-service="Sudoku Web Game"
                data-amp-section="game"
                className="tool-card group p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🧩</span>
                  <span className="text-xs font-semibold text-[var(--muted-on-paper)]">
                    {t("gameSudoku")}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  {getServiceTitle("http://sudoku.funnyfunny.cloud/")}
                </h4>
                <p className="text-sm text-[var(--muted-on-paper)] mt-1">
                  {t("gameSudokuDesc")}
                </p>
              </a>
            </div>
          </div>
          <div className="ink-panel pt-6 pb-6 px-6 sm:pt-8 sm:pb-8 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-on-ink)]">{t("winterPicks")}</p>
                <h4 className="mt-1 text-xl font-bold">{t("winterPicksTitle")}</h4>
                <p className="mt-2 text-sm text-[var(--muted-on-ink)]">{t("winterPicksDesc")}</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 sm:max-w-2xl">
                <a
                  href={toToolHref("https://winter.funnyfunny.cloud")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-paper !rounded-[12px] px-4 sm:px-5 py-2 text-sm whitespace-nowrap"
                >
                  {getServiceTitle("https://winter.funnyfunny.cloud")}
                </a>
                <a
                  href={toToolHref("https://year.funnyfunny.cloud")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-paper !rounded-[12px] px-4 sm:px-5 py-2 text-sm whitespace-nowrap"
                >
                  {getServiceTitle("https://year.funnyfunny.cloud")}
                </a>
                <a
                  href={toToolHref("https://bit.funnyfunny.cloud")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-[12px] bg-[var(--ink-2)] border-[1.5px] border-[var(--paper)]/30 text-[var(--paper)] font-play text-sm hover:border-[var(--sun)] hover:text-[var(--sun)] transition whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5"
                >
                  {getServiceTitle("https://bit.funnyfunny.cloud")}
                </a>
                <a
                  href={toToolHref("https://pick.funnyfunny.cloud")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-[12px] bg-[var(--ink-2)] border-[1.5px] border-[var(--paper)]/30 text-[var(--paper)] font-play text-sm hover:border-[var(--sun)] hover:text-[var(--sun)] transition whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5"
                >
                  {getServiceTitle("https://pick.funnyfunny.cloud")}
                </a>
                <a
                  href={toToolHref("https://drain.funnyfunny.cloud")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-[12px] bg-[var(--ink-2)] border-[1.5px] border-[var(--paper)]/30 text-[var(--paper)] font-play text-sm hover:border-[var(--sun)] hover:text-[var(--sun)] transition whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5"
                >
                  {getServiceTitle("https://drain.funnyfunny.cloud")}
                </a>
                <a
                  href={toToolHref("https://rest.funnyfunny.cloud")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-[12px] bg-[var(--ink-2)] border-[1.5px] border-[var(--paper)]/30 text-[var(--paper)] font-play text-sm hover:border-[var(--sun)] hover:text-[var(--sun)] transition whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5"
                >
                  {getServiceTitle("https://rest.funnyfunny.cloud")}
                </a>
                <a
                  href={toToolHref("https://coffee.funnyfunny.cloud")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-[12px] bg-[var(--ink-2)] border-[1.5px] border-[var(--paper)]/30 text-[var(--paper)] font-play text-sm hover:border-[var(--sun)] hover:text-[var(--sun)] transition whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5"
                >
                  {getServiceTitle("https://coffee.funnyfunny.cloud")}
                </a>
                <a
                  href={toToolHref("https://hand.funnyfunny.cloud")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-[12px] bg-[var(--ink-2)] border-[1.5px] border-[var(--paper)]/30 text-[var(--paper)] font-play text-sm hover:border-[var(--sun)] hover:text-[var(--sun)] transition whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5"
                >
                  {getServiceTitle("https://hand.funnyfunny.cloud")}
                </a>
                <a
                  href={toToolHref("https://mind.funnyfunny.cloud")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-[12px] bg-[var(--ink-2)] border-[1.5px] border-[var(--paper)]/30 text-[var(--paper)] font-play text-sm hover:border-[var(--sun)] hover:text-[var(--sun)] transition whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5"
                >
                  {getServiceTitle("https://mind.funnyfunny.cloud")}
                </a>
              </div>
            </div>
          </div>

          <div id="faq" className="paper-card p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">❓</span>
              <h3 className="font-play text-xl">{t("faqTitle")}</h3>
            </div>
            <div className="divide-y divide-[var(--ink)]/10">
              {seoFaq.map((item) => (
                <details key={item.question} className="py-3 group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--coral-deep)]">{item.question}</span>
                    <span className="text-[var(--coral)] text-lg group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="mt-2 text-sm text-[var(--muted-on-paper)] leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div id="tests" className="scroll-mt-24 pt-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🧪</span>
              <h3 className="font-play text-xl text-[var(--ink)]">{t("allServicesTitle")}</h3>
            </div>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[var(--muted-on-paper)]">
                {allServices.length} {t("servicesReady")} · {t("searchHint")}
              </p>
              <label className="relative w-full sm:w-72">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-on-paper)] text-sm">🔍</span>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("searchPlaceholder")}
                  className="ticket-input !py-2 text-sm"
                />
              </label>
            </div>
            <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="tags">
              {(tagsExpanded ? allTags : mainTags).map((tag) => (
                <button key={tag} type="button" data-active={selectedTag === tag} onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)} className="chip-tag">#{tag}</button>
              ))}
              {remainingTags.length > 0 && (
                <button type="button" onClick={() => setTagsExpanded(!tagsExpanded)} className="chip-tag font-play">{tagsExpanded ? t("tagsCollapse") : t("tagsMore", { count: remainingTags.length })}</button>
              )}
            </div>
            {normalizedQuery && (
              <div className="flex items-center justify-between text-sm text-[var(--muted-on-paper)] mb-3">
                <span>{t("searchBottomSummary", { count: filteredServices.length })}</span>
                <button type="button" onClick={() => setSearchQuery("")} className="text-[var(--coral-deep)] font-semibold hover:text-[var(--coral-deep)]">
                  {t("searchResetButton")}
                </button>
              </div>
            )}
            {filteredServices.length === 0 ? (
              <div className="paper-card p-6 text-center text-sm text-[var(--muted-on-paper)]">
                <p>{t("searchNoMatches")}</p>
                <p className="text-xs text-[var(--muted-on-paper)] mt-1">{t("searchNoMatchesHint")}</p>
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filteredServices.map(({ href, icon, title, desc }) => (
                  <a
                    key={href}
                    href={toToolHref(href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} - ${desc}`}
                    data-amp-service={title}
                    data-amp-section="all"
                    className="tool-card flex items-start gap-3 p-3"
                  >
                    <span className="text-xl">{icon}</span>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-[var(--ink)] leading-snug">{title}</h4>
                      <p className="text-xs text-[var(--muted-on-paper)] mt-0.5 line-clamp-2">{desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="/calculators/" className="text-sm font-semibold text-[var(--coral-deep)] hover:text-[var(--coral-deep)]">🧮 {t("heroCtaCalculators")}</a>
            <a href="/tests/" className="text-sm font-semibold text-[var(--mint)] hover:text-[var(--mint)]">🧪 {t("heroCtaTests")}</a>
            <a href="/guide/" aria-label={t("viewAllGuides")} data-amp-section="guides" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--paper-2)] border border-[var(--ink)] text-sm font-semibold text-[var(--ink)] shadow-sm hover:border-[var(--ink)] hover:text-[var(--coral-deep)] transition">
              📚 {t("viewAllGuides")}
            </a>
          </div>
          <p className="mt-3 text-center text-sm text-[var(--muted-on-paper)]">
            {t("popularGuidesLabel")}:{" "}
            <a href="/guide/take-home-pay-how/" className="text-[var(--coral-deep)] hover:underline">실수령액</a>
            {" · "}
            <a href="/guide/four-insurance-deduction-how/" className="text-[var(--coral-deep)] hover:underline">4대보험 공제</a>
            {" · "}
            <a href="/guide/nbang-calculator-how/" className="text-[var(--coral-deep)] hover:underline">N빵 계산기</a>
            {" · "}
            <a href="/guide/paystub-read-how/" className="text-[var(--coral-deep)] hover:underline">급여명세서</a>
          </p>
        </section>
      </main>

      <FooterPortal t={t} />

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t("topButtonLabel")}
        aria-hidden={!showTopBtn}
        tabIndex={showTopBtn ? 0 : -1}
        className={`btn-coral fixed bottom-6 right-6 z-50 hidden h-12 w-12 !rounded-full !p-0 items-center justify-center transition duration-200 md:flex ${
          showTopBtn
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        ↑
      </button>

      <div
        id="quickBar"
        className="fixed inset-x-0 bottom-3 px-4 sm:px-6 transition transform translate-y-24 opacity-0 pointer-events-none z-40"
      >
        <div className="mx-auto max-w-3xl bg-[var(--paper-2)] border border-[var(--ink)] text-[var(--ink)] rounded-xl shadow-lg flex items-center justify-between px-4 py-3 gap-3">
          <span className="text-sm font-semibold">{t("quickBarMessage")}</span>
          <div className="flex items-center gap-2">
            <a href="/calculators/" className="btn-paper !px-3 !py-2 text-sm">{t("heroCtaCalculators")}</a>
            <a href="/tests/" className="px-3 py-2 rounded-lg bg-[var(--paper)] text-[var(--mint)] text-sm font-semibold hover:bg-[var(--paper)] transition">{t("heroCtaTests")}</a>
            <a href="#hub" className="btn-paper !px-3 !py-2 text-sm">{t("quickBarHub")}</a>
            <a href="#arcade" className="btn-paper !px-3 !py-2 text-sm">{t("quickBarArcade")}</a>
            <button data-random-btn className="btn-paper !px-3 !py-2 text-sm">{t("quickBarRandomGift")}</button>
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
