"use client";

import { useEffect, useState } from "react";
import { FooterSimple } from "../components/FooterSimple";
import { HeaderSimple } from "../components/HeaderSimple";
import { guides } from "./guides";
import { getSeoGuides } from "../lib/services";

const guidePageCopy = {
  ko: {
    guideHub: "가이드 허브",
    guideCollection: "FunnyFunny Cloud 가이드 모음",
    guideDescription:
      "추측 없이 서비스를 사용하고 싶을 때를 위한 빠르고 실용적인 가이드 라이브러리. 각 페이지는 핵심 흐름, 키워드, FAQ를 요약하여 빠르고 자신 있게 시작할 수 있습니다.",
    readGuide: "가이드 읽기",
    openService: "서비스 열기",
  },
  en: {
    guideHub: "Guide Hub",
    guideCollection: "FunnyFunny Cloud Guide Collection",
    guideDescription:
      "A quick, practical guide library for when you want to use a service without guessing. Each page summarizes the core flow, keywords, and FAQs so you can get started fast and confidently.",
    readGuide: "Read guide",
    openService: "Open service",
  },
};

const defaultLang = "en";

function getInitialLang() {
  if (typeof window === "undefined") return defaultLang;
  const stored = window.localStorage?.getItem("preferredLang");
  if (stored && guidePageCopy[stored]) {
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

export default function GuideIndexPage() {
  const [lang, setLang] = useState(getInitialLang);
  const translationPack = guidePageCopy[lang] || guidePageCopy[defaultLang];
  const seoGuides = getSeoGuides(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => translationPack[key] || key;

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <HeaderSimple />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold">
            {t("guideHub")}
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight">
            {t("guideCollection")}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            {t("guideDescription")}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {seoGuides.map((guide) => (
              <a
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-700 transition"
              >
                <span>{guide.emoji}</span>
                <span>{guide.title}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          {seoGuides.map((guide) => {
            const fullGuide = guides.find((g) => g.slug === guide.slug);
            if (!fullGuide) return null;
            
            return (
              <article
                key={guide.slug}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-[0.2em]">
                  <span>{guide.emoji}</span>
                  <span>{fullGuide.category}</span>
                </div>
                <h2 className="text-xl font-bold leading-snug">{guide.title}</h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {guide.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {fullGuide.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200"
                    >
                      #{keyword}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                  <a
                    href={`/guide/${guide.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold shadow-md hover:-translate-y-0.5 transition"
                  >
                    {t("readGuide")}
                  </a>
                  <a
                    href={fullGuide.serviceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-800 shadow-sm hover:border-blue-400 hover:text-blue-700 transition"
                  >
                    {t("openService")}
                  </a>
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
