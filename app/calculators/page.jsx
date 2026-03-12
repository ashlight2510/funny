import { HeaderSimple } from "../components/HeaderSimple";
import { FooterSimple } from "../components/FooterSimple";
import { getCalculators, getToolPath, hrefToSlug } from "../lib/services";

const BASE = "https://funnyfunny.cloud";

export const metadata = {
  title: "무료 계산기 모음 | 세금·N빵·평수·D-day·사교육비 계산",
  description:
    "연말정산·세금 계산기, N빵 계산기, 평수 계산기, D-day·나이 계산기, 사교육비 시뮬레이션, 안 산 것 총자산, 출퇴근 비용 계산 등 무료 계산기·시뮬레이터 모음. 회사원·프리랜서 실수령액, 1인당 비용, 평형㎡ 변환까지.",
  keywords: [
    "무료 계산기",
    "세금 계산기",
    "N빵 계산기",
    "평수 계산기",
    "D-day 계산기",
    "연말정산 계산",
    "사교육비 시뮬레이션",
    "실수령액 계산",
  ],
  alternates: { canonical: "/calculators/" },
  openGraph: {
    type: "website",
    url: `${BASE}/calculators/`,
    title: "무료 계산기 모음 | 세금·N빵·평수·D-day·사교육비",
    description: "세금·N빵·평수·D-day·사교육비·출퇴근 비용 등 무료 계산기 모음.",
    siteName: "FunnyFunny Cloud",
  },
  robots: { index: true, follow: true },
};

const FEATURED_CALC_SLUGS = ["tax", "n", "space", "birth", "cafe", "nospend"];

const itemListJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "무료 계산기 모음",
  description: "세금·N빵·평수·D-day·사교육비 등 무료 계산기·시뮬레이터 목록",
  numberOfItems: items.length,
  itemListElement: items.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `${BASE}/tools/${hrefToSlug(t.href)}/`,
  })),
});

export default function CalculatorsPage() {
  const tools = getCalculators("ko");
  const featured = tools.filter((t) =>
    FEATURED_CALC_SLUGS.includes(hrefToSlug(t.href))
  );
  const jsonLd = itemListJsonLd(tools);
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeaderSimple />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          무료 계산기 모음
        </h1>
        <p className="mt-2 text-slate-600">
          세금·N빵·평수·D-day·사교육비·절약 시뮬레이션 등 한눈에.
        </p>
        <p className="mt-4 text-slate-600 text-sm max-w-2xl">
          연말정산·실수령액 계산, N빵 1인당 비용, 평수·제곱미터 변환, D-day·나이·사교육비 시뮬레이션, 
          안 산 것 총자산·출퇴근 비용 계산 등 회사원·프리랜서·일상에 쓸 수 있는 무료 계산기만 모았습니다.
        </p>
        {featured.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-bold text-slate-800 mb-3">
              인기·시즌 추천 계산기
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {featured.map((t) => {
                const slug = hrefToSlug(t.href);
                const path = getToolPath(slug);
                return (
                  <li key={slug}>
                    <a
                      href={path}
                      className="block rounded-xl bg-white border border-sky-200 p-4 hover:border-sky-400 hover:shadow-md transition"
                    >
                      <span className="text-lg mr-2">{t.icon}</span>
                      <span className="font-semibold text-slate-800">{t.title}</span>
                      <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                        {t.desc}
                      </p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-slate-800 mb-3">전체 계산기</h2>
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
                  <span className="font-semibold text-slate-800">{t.title}</span>
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
          <a href="/tests/" className="text-sky-600 hover:underline">
            테스트 모음
          </a>
        </p>
        <p className="mt-2 text-sm text-slate-500">
          자주 찾는 가이드:{" "}
          <a href="/guide/nbang-calculator-how/" className="text-sky-600 hover:underline">N빵 계산기</a>
          {" · "}
          <a href="/guide/year-end-tax-simple/" className="text-sky-600 hover:underline">연말정산·세금</a>
          {" · "}
          <a href="/guide/pyeong-calculator-how/" className="text-sky-600 hover:underline">평수 계산기</a>
          {" · "}
          <a href="/guide/dday-calculator-how/" className="text-sky-600 hover:underline">D-day 계산기</a>
        </p>
      </main>
      <FooterSimple />
    </div>
  );
}
