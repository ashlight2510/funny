import { FooterSimple } from "../components/FooterSimple";
import { HeaderSimple } from "../components/HeaderSimple";
import { guides } from "./guides";

export const metadata = {
  title: "서비스 가이드 모음 | FunnyFunny Cloud",
  description:
    "FunnyFunny Cloud 인기 테스트·도구 가이드를 모았습니다. 오늘의 할 일부터 이번 겨울, 나를 망치는 것 TOP 1, 커피중독, 꾸밈비 파산, 자산 방탄 지수, 비트코인 안 산 죄, 하루 생산성 체크까지 한 곳에서 확인하세요.",
  keywords: [
    "FunnyFunny 가이드",
    "오늘의 할 일 가이드",
    "이번 겨울 나를 망치는 것 TOP 1",
    "커피중독 테스트 가이드",
    "꾸밈비 파산 테스트 가이드",
    "자산 방탄 지수 가이드",
    "비트코인 안 산 죄 가이드",
    "하루 생산성 체크 가이드",
    "잠들기 도우미 가이드",
  ],
  alternates: {
    canonical: "/guide",
  },
};

export default function GuideIndexPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <HeaderSimple />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold">
            Guide Hub
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight">
            FunnyFunny Cloud 인기 서비스 가이드 모음
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            검색 유입과 승인 안정성을 동시에 잡는 5개 핵심 서비스를 위한 짧은
            가이드입니다. H1, 키워드, FAQ까지 한 페이지에 담아 바로 활용할 수
            있습니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {guides.map((guide) => (
              <a
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-700 transition"
              >
                <span>{guide.heroEmoji}</span>
                <span>{guide.title}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-[0.2em]">
                <span>{guide.heroEmoji}</span>
                <span>{guide.category}</span>
              </div>
              <h2 className="text-xl font-bold leading-snug">{guide.title}</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {guide.metaDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {guide.keywords.slice(0, 3).map((keyword) => (
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
                  가이드 읽기
                </a>
                <a
                  href={guide.serviceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-800 shadow-sm hover:border-blue-400 hover:text-blue-700 transition"
                >
                  서비스 바로가기
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
      <FooterSimple />
    </div>
  );
}
