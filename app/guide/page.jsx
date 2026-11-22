"use client";

import { useEffect, useState } from "react";
import { FooterSimple } from "../components/FooterSimple";
import { HeaderSimple } from "../components/HeaderSimple";
import { guides } from "./guides";
import { getSeoGuides, hrefToSlug, getToolPath } from "../lib/services";
import { defaultLang, getInitialLang } from "../lib/i18n";

const guidePageCopy = {
  ko: {
    guideHub: "가이드 허브",
    guideCollection: "FunnyFunny Cloud 가이드 모음",
    guideDescription:
      "추측 없이 서비스를 사용하고 싶을 때를 위한 빠르고 실용적인 가이드 라이브러리. 각 페이지는 핵심 흐름, 키워드, FAQ를 요약하여 빠르고 자신 있게 시작할 수 있습니다.",
    readGuide: "가이드 읽기",
    openService: "서비스 열기",
    ctaCalculators: "인기 계산기 보기",
    ctaTests: "인기 테스트 보기",
  },
  en: {
    guideHub: "Guide Hub",
    guideCollection: "FunnyFunny Cloud Guide Collection",
    guideDescription:
      "A quick, practical guide library for when you want to use a service without guessing. Each page summarizes the core flow, keywords, and FAQs so you can get started fast and confidently.",
    readGuide: "Read guide",
    openService: "Open service",
    ctaCalculators: "Popular calculators",
    ctaTests: "Popular tests",
  },
};

export default function GuideIndexPage() {
  const [lang, setLang] = useState(defaultLang);
  const translationPack = guidePageCopy[lang] || guidePageCopy[defaultLang];
  const seoGuides = getSeoGuides(lang);

  useEffect(() => {
    setLang(getInitialLang());
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => translationPack[key] || key;

  return (
    <div className="pavilion-bg flex min-h-dvh flex-col text-[var(--ink)]">
      <HeaderSimple />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        <section className="ticket-panel p-6 sm:p-8 !overflow-visible">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--coral-deep)] font-semibold">
            {t("guideHub")}
          </p>
          <h1 className="mt-2 font-play text-3xl sm:text-4xl leading-tight">
            {t("guideCollection")}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--ink-2)] leading-relaxed">
            {t("guideDescription")}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {seoGuides.map((guide) => (
              <a
                key={guide.slug}
                href={`/guide/${guide.slug}/`}
                className="chip-tag inline-flex items-center gap-2 !px-3 !py-2 text-sm font-semibold"
              >
                <span>{guide.emoji}</span>
                <span>{guide.title}</span>
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/calculators/"
              className="btn-paper text-sm !px-4 !py-2.5"
            >
              🧮 {t("ctaCalculators")}
            </a>
            <a
              href="/tests/"
              className="btn-paper text-sm !px-4 !py-2.5"
            >
              🧪 {t("ctaTests")}
            </a>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          {seoGuides.map((guide) => {
            const fullGuide = guides.find((g) => g.slug === guide.slug);
            if (!fullGuide) return null;
            
            return (
              <article
                key={guide.slug}
                className="paper-card p-6 flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--coral-deep)] uppercase tracking-[0.2em]">
                  <span>{guide.emoji}</span>
                  <span>{fullGuide.category}</span>
                </div>
                <h2 className="font-play text-xl leading-snug">{guide.title}</h2>
                <p className="text-sm text-[var(--ink-2)] leading-relaxed">
                  {guide.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {fullGuide.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="chip-tag !px-2.5 !py-1 text-xs font-semibold"
                    >
                      #{keyword}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                  <a
                    href={`/guide/${guide.slug}/`}
                    className="btn-coral text-sm !px-4 !py-2.5"
                  >
                    {t("readGuide")}
                  </a>
                  {(() => {
                    const toolPath = getToolPath(hrefToSlug(fullGuide.serviceUrl));
                    const openHref = toolPath || fullGuide.serviceUrl;
                    const isExternal = !toolPath;
                    return (
                      <a
                        href={openHref}
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="btn-paper text-sm !px-4 !py-2.5"
                      >
                        {t("openService")}
                      </a>
                    );
                  })()}
                </div>
              </article>
            );
          })}
        </section>
      </main>
      <FooterSimple />
    </div>
  );
}
