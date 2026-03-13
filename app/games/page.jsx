import { HeaderSimple } from "../components/HeaderSimple";
import { FooterSimple } from "../components/FooterSimple";
import { getGames, getToolPath, hrefToSlug } from "../lib/services";

const BASE = "https://funnyfunny.cloud";

export const metadata = {
  title: "무료 게임·랜덤 뽑기 모음 | 주사위·포춘·메뉴·선물·데이트",
  description:
    "주사위·동전 던지기, 포춘 쿠키·매직 8볼, 오늘 뭐 먹지·저녁 룰렛, 선물·데이트 아이디어, MBTI·별자리·타로, 팀 이름·닉네임 생성 등 무료 게임·랜덤 뽑기 모음.",
  keywords: [
    "무료 게임",
    "랜덤 뽑기",
    "주사위",
    "포춘 쿠키",
    "매직 8볼",
    "오늘 뭐 먹지",
    "저녁 룰렛",
    "선물 추천",
    "데이트 아이디어",
    "MBTI 랜덤",
  ],
  alternates: { canonical: "/games/" },
  openGraph: {
    type: "website",
    url: `${BASE}/games/`,
    title: "무료 게임·랜덤 뽑기 모음 | 주사위·포춘·메뉴·선물",
    description:
      "주사위·포춘·메뉴 룰렛·선물·데이트 등 무료 게임·랜덤 뽑기 모음.",
    siteName: "FunnyFunny Cloud",
  },
  robots: { index: true, follow: true },
};

const FEATURED_GAME_SLUGS = [
  "random-food",
  "magic-8-ball",
  "fortune-cookie",
  "mood-random",
  "dice",
  "dinner-roulette",
];

const itemListJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "무료 게임·랜덤 뽑기 모음",
  description: "주사위·포춘·메뉴·선물·데이트 등 무료 게임·랜덤 뽑기 목록",
  numberOfItems: items.length,
  itemListElement: items.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `${BASE}/tools/${hrefToSlug(t.href)}/`,
  })),
});

export default function GamesPage() {
  const tools = getGames("ko");
  const featured = tools.filter((t) =>
    FEATURED_GAME_SLUGS.includes(hrefToSlug(t.href)),
  );
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
          무료 게임·랜덤 뽑기 모음{" "}
          <span className="text-amber-600 font-bold">({tools.length}개)</span>
        </h1>
        <p className="mt-2 text-slate-600">
          주사위·포춘·메뉴 룰렛·선물·데이트·MBTI 등 한눈에.
        </p>
        <p className="mt-4 text-slate-600 text-sm max-w-2xl">
          동전 던지기·주사위·카드 뽑기, 포춘 쿠키·매직 8볼, 오늘 뭐 먹지·저녁
          룰렛, 선물·데이트 아이디어, MBTI·별자리·타로·닉네임 생성 등 고민
          해결·재미용 무료 게임·랜덤 뽑기만 모았습니다.
        </p>
        {featured.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-bold text-slate-800 mb-3">
              인기 추천 게임·랜덤
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {featured.map((t) => {
                const slug = hrefToSlug(t.href);
                const path = getToolPath(slug);
                return (
                  <li key={slug}>
                    <a
                      href={path}
                      className="block rounded-xl bg-white border border-amber-200 p-4 hover:border-amber-400 hover:shadow-md transition"
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
        )}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-slate-800 mb-3">
            전체 게임·랜덤 뽑기 ({tools.length}개)
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {tools.map((t) => {
              const slug = hrefToSlug(t.href);
              const path = getToolPath(slug);
              return (
                <li key={slug}>
                  <a
                    href={path}
                    className="block rounded-xl bg-white border border-slate-200 p-4 hover:border-amber-300 hover:shadow-md transition"
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
