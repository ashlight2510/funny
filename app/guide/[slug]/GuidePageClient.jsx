"use client";

import { useEffect, useState, useRef } from "react";
import { FooterSimple } from "../../components/FooterSimple";
import { HeaderSimple } from "../../components/HeaderSimple";
import { guides, getGuide } from "../guides";
import { getSeoGuides, hrefToSlug, getToolPath } from "../../lib/services";
import { pageCopy } from "../../lib/translations";
import { defaultLang, getInitialLang, formatTemplate } from "../../lib/i18n";

export function GuidePageClient({ guide }) {
  const [lang, setLang] = useState(defaultLang);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const guideAdRef = useRef(false);

  const translationPack = pageCopy[lang] || pageCopy[defaultLang];
  const fallbackPack = pageCopy[defaultLang];
  const seoGuides = getSeoGuides(lang);
  const seoGuide = seoGuides.find((g) => g.slug === guide.slug);
  
  // 언어별로 가이드 데이터 가져오기
  const translatedGuide = getGuide(guide.slug, lang) || guide;

  useEffect(() => {
    setLang(getInitialLang());
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage?.setItem("preferredLang", lang);
  }, [lang]);

  // 가이드 본문 중간 광고 1블록 (layout 스크립트가 큐를 처리할 때 채움)
  useEffect(() => {
    if (guideAdRef.current || typeof window === "undefined") return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      guideAdRef.current = true;
    } catch (_) {}
  }, []);

  const t = (key, vars = {}) =>
    formatTemplate(translationPack[key] ?? fallbackPack[key] ?? key, vars);

  const handleLangChange = (nextLang) => {
    setLang(pageCopy[nextLang] ? nextLang : defaultLang);
  };

  // Use translated title/description from getSeoGuides if available
  const guideTitle = seoGuide?.title || translatedGuide.title;
  const guideDesc = seoGuide?.desc || translatedGuide.metaDescription;
  const guideCategory = translatedGuide.category;
  const guideSections = translatedGuide.sections;
  const guideFaq = translatedGuide.faq;
  const guideCtaLabel = translatedGuide.ctaLabel;
  const guideDisclaimer = translatedGuide.disclaimer || null;

  // SEO: 같은 도메인 /tools/{slug}/ 로 연결해 크롤·링크 균형 유지
  const toolSlug = hrefToSlug(guide.serviceUrl);
  const toolPath = toolSlug ? getToolPath(toolSlug) : null;
  const ctaHref = toolPath || guide.serviceUrl;
  const ctaExternal = !toolPath;

  // 언어별로 변환된 다른 가이드들
  const otherGuides = guides
    .filter(({ slug }) => slug !== guide.slug)
    .map((item) => {
      const translatedItem = getGuide(item.slug, lang) || item;
      const seoItem = seoGuides.find((g) => g.slug === item.slug);
      return {
        ...item,
        slug: item.slug,
        heroEmoji: item.heroEmoji,
        title: seoItem?.title || translatedItem.title || item.title,
        metaDescription: seoItem?.desc || translatedItem.metaDescription || item.metaDescription,
        category: translatedItem.category || item.category,
      };
    });

  const faqJsonLd =
    Array.isArray(guideFaq) && guideFaq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guideFaq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const howToJsonLd =
    Array.isArray(guideSections) && guideSections.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: guideTitle,
          description: guideDesc,
          step: guideSections.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.heading,
            text: (s.body || []).join(" ").slice(0, 500),
          })),
        }
      : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "FunnyFunny Cloud", item: "https://funnyfunny.cloud/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://funnyfunny.cloud/guide/" },
      { "@type": "ListItem", position: 3, name: guideTitle, item: `https://funnyfunny.cloud/guide/${guide.slug}/` },
    ],
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <HeaderSimple lang={lang} onLangChange={handleLangChange} t={t} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
        <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100">
              <span>{guide.heroEmoji}</span>
              <span>{guideCategory}</span>
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">{t("guidesLabel")}</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight">
            {guideTitle}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            {guideDesc}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {guide.keywords.slice(0, 4).map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200"
              >
                #{keyword}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={ctaHref}
              {...(ctaExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-lg transition"
              onClick={() => {
                try {
                  window.amplitude?.track?.("guide_cta_click", {
                    guide_slug: guide.slug,
                    cta_url: ctaHref,
                  });
                } catch (_) {}
              }}
            >
              {guideCtaLabel}
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold shadow-sm hover:border-blue-400 hover:text-blue-700 transition"
            >
              {t("backToHome")}
            </a>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-slate-500">공유:</span>
            <button
              type="button"
              onClick={() => {
                const url = typeof window !== "undefined" ? window.location.href : "";
                if (url && navigator.clipboard?.writeText) {
                  navigator.clipboard.writeText(url);
                  setShareCopied(true);
                  setTimeout(() => setShareCopied(false), 2000);
                  try { window.amplitude?.track?.("share_click", { method: "copy", guide_slug: guide.slug }); } catch (_) {}
                }
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
            >
              {shareCopied ? "복사됨" : "링크 복사"}
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(guideTitle)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : `https://funnyfunny.cloud/guide/${guide.slug}/`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
              onClick={() => { try { window.amplitude?.track?.("share_click", { method: "twitter", guide_slug: guide.slug }); } catch (_) {} }}
            >
              트위터
            </a>
            <span className="text-slate-400 mx-2">·</span>
            <span className="text-slate-500">도움이 되었나요?</span>
            <button
              type="button"
              aria-label="도움 됨"
              disabled={feedbackSent}
              onClick={() => {
                setFeedbackSent(true);
                try { window.amplitude?.track?.("guide_helpful", { guide_slug: guide.slug, helpful: true }); } catch (_) {}
              }}
              className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 transition disabled:opacity-50"
            >
              👍
            </button>
            <button
              type="button"
              aria-label="도움 안 됨"
              disabled={feedbackSent}
              onClick={() => {
                setFeedbackSent(true);
                try { window.amplitude?.track?.("guide_helpful", { guide_slug: guide.slug, helpful: false }); } catch (_) {}
              }}
              className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 transition disabled:opacity-50"
            >
              👎
            </button>
            {feedbackSent && (
              <span className="ml-2 text-sm text-slate-500">의견 감사합니다.</span>
            )}
          </div>
        </section>

        <section className="space-y-8">
          {guideSections.map((section) => (
            <article
              key={section.heading}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-7"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <div
          className="flex justify-center my-8 min-h-[100px]"
          style={{ minWidth: 250, minHeight: 90 }}
          aria-hidden="true"
        >
          <ins
            className="adsbygoogle"
            style={{ display: "block", minHeight: 90 }}
            data-ad-client="ca-pub-1204894220949193"
            data-ad-slot="7300458753"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        {guideDisclaimer && (
          <section className="bg-amber-50 text-amber-900 border border-amber-200 rounded-3xl p-5 sm:p-6 shadow-sm">
            <p className="text-sm font-semibold">{t("notice")}</p>
            <p className="mt-1 text-sm sm:text-base leading-relaxed">
              {guideDisclaimer}
            </p>
          </section>
        )}

        <section
          id="faq"
          className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">❓</span>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-600">
                FAQ
              </p>
              <h3 className="text-xl font-bold">{t("faqTitle")}</h3>
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {guideFaq.map((item) => (
              <details key={item.question} className="py-3 group">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                    {item.question}
                  </span>
                  <span className="text-slate-400 text-lg group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
                {t("readMore")}
              </p>
              <h4 className="text-xl font-bold mt-1">
                {t("exploreOtherGuides")}
              </h4>
            </div>
            <a
              href="/"
              className="hidden sm:inline-flex px-3 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold hover:bg-white/20 transition"
            >
              {t("funnyfunnyHome")}
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {otherGuides.map((item) => (
              <a
                key={item.slug}
                href={`/guide/${item.slug}`}
                className="block rounded-2xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-2 text-sm text-blue-100">
                  <span>{item.heroEmoji}</span>
                  <span className="uppercase tracking-[0.2em]">
                    {item.category}
                  </span>
                </div>
                <p className="mt-2 font-semibold">{item.title}</p>
                <p className="mt-1 text-xs text-blue-100/80">
                  {item.metaDescription}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <FooterSimple />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
    </div>
  );
}
