import { HeaderSimple } from "../components/HeaderSimple";
import { FooterSimple } from "../components/FooterSimple";
import { getCalculators, getToolPath, hrefToSlug } from "../lib/services";

const BASE = "https://funnyfunny.cloud";

export const metadata = {
  title: "무료 계산기 모음 | 세금·N빵·평수·D-day·사교육비",
  description:
    "세금 계산기, N빵 계산기, 평수 계산기, D-day·나이 계산기, 사교육비 시뮬레이션, 안 산 것 총자산 등 무료 계산기·시뮬레이터 모음.",
  alternates: { canonical: "/calculators/" },
  openGraph: {
    type: "website",
    url: `${BASE}/calculators/`,
    title: "무료 계산기 모음 | FunnyFunny Cloud",
    description: "세금·N빵·평수·D-day·사교육비 등 무료 계산기 모음.",
    siteName: "FunnyFunny Cloud",
  },
  robots: { index: true, follow: true },
};

export default function CalculatorsPage() {
  const tools = getCalculators("ko");
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <HeaderSimple />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          무료 계산기 모음
        </h1>
        <p className="mt-2 text-slate-600">
          세금·N빵·평수·D-day·사교육비·절약 시뮬레이션 등 한눈에.
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
          <a href="/tests/" className="text-sky-600 hover:underline">
            테스트 모음
          </a>
        </p>
      </main>
      <FooterSimple />
    </div>
  );
}
