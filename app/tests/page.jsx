import { HeaderSimple } from "../components/HeaderSimple";
import { FooterSimple } from "../components/FooterSimple";
import { getTests, getToolPath, hrefToSlug } from "../lib/services";

const BASE = "https://funnyfunny.cloud";

export const metadata = {
  title: "무료 테스트·체크 모음 | 자산·커피·생산성·마음",
  description:
    "자산 방탄 지수, 커피 중독 테스트, 생산성 체크, 휴식 체크, 마음 컨디션, EGO 테스트 등 무료 테스트·진단·체크 모음.",
  alternates: { canonical: "/tests/" },
  openGraph: {
    type: "website",
    url: `${BASE}/tests/`,
    title: "무료 테스트·체크 모음 | FunnyFunny Cloud",
    description: "자산·커피·생산성·마음·휴식 등 무료 테스트 모음.",
    siteName: "FunnyFunny Cloud",
  },
  robots: { index: true, follow: true },
};

export default function TestsPage() {
  const tools = getTests("ko");
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <HeaderSimple />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          무료 테스트·체크 모음
        </h1>
        <p className="mt-2 text-slate-600">
          자산·커피·생산성·마음·휴식·탈모 등 한눈에.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
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
      </main>
      <FooterSimple />
    </div>
  );
}
