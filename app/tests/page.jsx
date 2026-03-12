import { HeaderSimple } from "../components/HeaderSimple";
import { FooterSimple } from "../components/FooterSimple";
import { getTests, getToolPath, hrefToSlug } from "../lib/services";

const BASE = "https://funnyfunny.cloud";

export const metadata = {
  title: "무료 테스트·체크 모음 | 자산·커피·생산성·마음·휴식",
  description:
    "자산 방탄 지수, 커피 중독 테스트, 생산성 체크, 휴식 체크, 마음 컨디션, EGO 테스트, 탈모 로드맵, BMI·다이어트 등 무료 테스트·진단·체크 모음. 심리테스트, 오늘 컨디션 체크까지.",
  keywords: [
    "무료 테스트",
    "심리테스트",
    "자산 방탄 지수",
    "커피 중독 테스트",
    "생산성 체크",
    "휴식 체크",
    "EGO 테스트",
    "BMI 테스트",
  ],
  alternates: { canonical: "/tests/" },
  openGraph: {
    type: "website",
    url: `${BASE}/tests/`,
    title: "무료 테스트·체크 모음 | 자산·커피·생산성·마음",
    description: "자산·커피·생산성·마음·휴식·탈모 등 무료 테스트·진단 모음.",
    siteName: "FunnyFunny Cloud",
  },
  robots: { index: true, follow: true },
};

const FEATURED_TEST_SLUGS = ["rest", "product", "money", "bmi", "dailycheck", "senseyear"];

const itemListJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "무료 테스트·체크 모음",
  description: "자산·커피·생산성·마음·휴식 등 무료 테스트·진단·체크 목록",
  numberOfItems: items.length,
  itemListElement: items.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `${BASE}/tools/${hrefToSlug(t.href)}/`,
  })),
});

export default function TestsPage() {
  const tools = getTests("ko");
  const featured = tools.filter((t) =>
    FEATURED_TEST_SLUGS.includes(hrefToSlug(t.href))
  );
  const jsonLd = itemListJsonLd(tools);
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeaderSimple />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          무료 테스트·체크 모음
        </h1>
        <p className="mt-2 text-slate-600">
          자산·커피·생산성·마음·휴식·탈모 등 한눈에.
        </p>
        <p className="mt-4 text-slate-600 text-sm max-w-2xl">
          자산 방탄 지수, 커피·생산성·휴식 체크, EGO·마음 컨디션, 탈모 로드맵, BMI·다이어트, 
          연말 감각년도 등 무료로 할 수 있는 심리테스트·진단·체크만 모았습니다.
        </p>
        {featured.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-bold text-slate-800 mb-3">
              인기·시즌 추천 테스트
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
          <h2 className="text-lg font-bold text-slate-800 mb-3">전체 테스트·체크</h2>
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
          <a href="/calculators/" className="text-sky-600 hover:underline">
            계산기 모음
          </a>
        </p>
        <p className="mt-2 text-sm text-slate-500">
          자주 찾는 가이드:{" "}
          <a href="/guide/rest-check-how/" className="text-sky-600 hover:underline">휴식 체크</a>
          {" · "}
          <a href="/guide/bmi-calculator-how/" className="text-sky-600 hover:underline">BMI 계산</a>
          {" · "}
          <a href="/guide/asset-shield-index/" className="text-sky-600 hover:underline">자산 방탄 지수</a>
          {" · "}
          <a href="/guide/daily-productivity-check/" className="text-sky-600 hover:underline">생산성 체크</a>
        </p>
      </main>
      <FooterSimple />
    </div>
  );
}
