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
import { getAllServices, getSeoGuides } from "../lib/services";
import { pageCopy } from "../lib/translations";
import { defaultLang, getInitialLang, formatTemplate } from "../lib/i18n";

export function HomeContent() {
  const [lang, setLang] = useState(getInitialLang);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [tagsExpanded, setTagsExpanded] = useState(false);
  const translationPack = pageCopy[lang] || pageCopy[defaultLang];
  const fallbackPack = pageCopy[defaultLang];
  const allServices = getAllServices(lang);
  const seoGuides = getSeoGuides(lang);
  const seoFaq = getSeoFaq(lang);

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
              <h3 className="text-xl font-bold">{t("insightCtaTitle")}</h3>
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
                      <h4 className="font-bold text-lg">
                        {icon} {serviceTitle}
                      </h4>
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
