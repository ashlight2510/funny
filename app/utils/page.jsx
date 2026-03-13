import { HeaderSimple } from "../components/HeaderSimple";
import { FooterSimple } from "../components/FooterSimple";
import { getUtils, getToolPath, hrefToSlug } from "../lib/services";

const BASE = "https://funnyfunny.cloud";

export const metadata = {
  title: "유틸·인사이트 모음 | 데이터·요약·체크 도구",
  description:
    "데이터 인사이트, 요약 도구, 체크리스트, 변환 유틸, 정리 도구 등 유틸·인사이트 서비스 모음.",
  keywords: ["유틸", "인사이트", "데이터", "요약", "체크리스트", "변환"],
  alternates: { canonical: "/utils/" },
  openGraph: {
    type: "website",
    url: `${BASE}/utils/`,
    title: "유틸·인사이트 모음",
    description: "데이터·요약·체크·변환 등 유틸·인사이트 도구 모음.",
    siteName: "FunnyFunny Cloud",
  },
  robots: { index: true, follow: true },
};

const itemListJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "유틸·인사이트 모음",
  description: "유틸·인사이트 도구 목록",
  numberOfItems: items.length,
  itemListElement: items.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `${BASE}/tools/${hrefToSlug(t.href)}/`,
  })),
});

export default function UtilsPage() {
  const tools = getUtils("ko");
  const jsonLd = itemListJsonLd(tools);
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderSimple />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          유틸·인사이트 모음{" "}
          <span className="text-sky-600 font-bold">({tools.length}개)</span>
        </h1>
        <p className="mt-2 text-slate-600">
          데이터 인사이트, 요약 도구, 체크리스트, 변환 유틸 등 한눈에.
        </p>
        <section className="mt-8">
          <h2 className="text-lg font-bold text-slate-800 mb-3">
            전체 유틸·인사이트 ({tools.length}개)
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {tools.map((t) => {
              const slug = hrefToSlug(t.href);
              const path = getToolPath(slug);
              return (
                <li key={slug}>
                  <a
                    href={path}
                    className="block rounded-xl bg-white border border-slate-200 p-4 hover:border-sky-300 hover:shadow-md transition"
                  >
                    <span className="text-lg mr-2">{t.icon}</span>
                    <span className="font-semibold text-slate-800">
                      {t.title}
                    </span>
                    <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                      {t.desc}
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <p className="mt-8 text-sm text-slate-500">
          <a href="/" className="text-sky-600 hover:underline">
            ← 홈으로
          </a>
          {" · "}
          <a href="/guide/" className="text-sky-600 hover:underline">
            가이드
          </a>
          {" · "}
          <a href="/calculators/" className="text-sky-600 hover:underline">
            계산기 모음
          </a>
          {" · "}
          <a href="/tests/" className="text-sky-600 hover:underline">
            테스트 모음
          </a>
          {" · "}
          <a href="/games/" className="text-sky-600 hover:underline">
            게임 모음
          </a>
        </p>
      </main>
      <FooterSimple />
    </div>
  );
}
