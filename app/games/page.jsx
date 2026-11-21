import { HeaderSimple } from "../components/HeaderSimple";
import { FooterSimple } from "../components/FooterSimple";
import { getGames, getToolPath, hrefToSlug } from "../lib/services";

const BASE = "https://funnyfunny.cloud";
const ARCADE = `${BASE}/tools/arcade/`;

/* Candy Ticket Booth — shared tokens/classes live in globals.css
   (ink/paper/coral/sun/mint, .ink-bg, .ticket-panel, .awning-sm, fonts via layout.js) */

const QUICK_MODES = [
  { slug: "random-food", label: "오늘 뭐 먹지" },
  { slug: "coin-flip", label: "동전 던지기" },
  { slug: "fortune-cookie", label: "포춘 쿠키" },
  { slug: "nickname-gen", label: "닉네임" },
];

export const metadata = {
  title: "뽑기통 · 무료 랜덤 뽑기 | 음식·주사위·운세·닉네임",
  description:
    "오늘 뭐 먹지, 주사위, 포춘 쿠키, 매직 8볼, 닉네임·MBTI 등 랜덤 뽑기를 한곳 뽑기통에서. 모드를 고르고 한 번 뽑으세요.",
  keywords: [
    "뽑기통",
    "랜덤 뽑기",
    "오늘 뭐 먹지",
    "주사위",
    "포춘 쿠키",
    "매직 8볼",
    "무료 게임",
  ],
  alternates: { canonical: "/games/" },
  openGraph: {
    type: "website",
    url: `${BASE}/games/`,
    title: "뽑기통 · 무료 랜덤 뽑기",
    description:
      "음식·주사위·운세·닉네임 등 랜덤 뽑기를 한곳 뽑기통에서.",
    siteName: "FunnyFunny Cloud",
  },
  robots: { index: true, follow: true },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "뽑기통 · 무료 랜덤 뽑기",
  description: "음식·주사위·운세 등 랜덤 뽑기 통합",
  numberOfItems: 1,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "뽑기통",
      url: ARCADE,
    },
  ],
};

export default function GamesPage() {
  const tools = getGames("ko");
  return (
    <div className="ink-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <HeaderSimple />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <p
          className="section-eyebrow font-latin !text-[var(--sun)]"
        >
          <span aria-hidden="true" className="hidden" />
          PICK ARCADE · FUNNYFUNNY CLOUD
        </p>
        <h1 className="font-display mt-3 leading-[0.92] text-[var(--paper)] text-[clamp(4.2rem,14vw,8rem)]">
          뽑기
          <span
            className="text-[var(--sun)]" style={{ textShadow: "5px 5px 0 var(--coral)" }}
          >
            통
          </span>
          <span className="sr-only"> 랜덤·게임</span>
        </h1>
        <p className="font-play mt-5 text-2xl sm:text-3xl text-[var(--paper)]">
          고민은 넣고, <span className="text-[var(--sun)]">답은 뽑고.</span>
        </p>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--muted-on-ink)]">
          흩어져 있던 복사형 뽑기 툴을 하나로 모았습니다. 오늘 뭐 먹지·저녁
          룰렛, 주사위·동전, 포춘·매직 8볼, 닉네임·MBTI·타로까지 — 모드만
          고르고 한 번 뽑으세요.
        </p>

        <section className="mt-10">
          <a
            href={ARCADE}
            className="ticket-panel block transition duration-150 hover:-translate-y-0.5"
          >
            <div aria-hidden="true" className="awning-sm" />
            <div className="p-6 sm:p-8">
              <div
                className="flex items-baseline justify-between gap-3 font-latin text-[11px] font-bold tracking-[0.18em] text-[var(--muted-on-paper)]"
              >
                <span>PICK TICKET</span>
                <span className="normal-case tracking-normal text-[var(--coral-deep)]">funnyfunny.cloud/tools/arcade/</span>
              </div>
              <h2 className="font-play mt-4 text-3xl sm:text-4xl">
                뽑기통 열기 <span aria-hidden="true">→</span>
              </h2>
              <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-[var(--muted-on-paper)]">
                음식 · 주사위 · 운세 · 닉네임 — 모드를 검색하고, 버튼 한 번으로
                딱 하나를 뽑는 랜덤 뽑기통입니다.
              </p>
              <span className="btn-coral mt-5 text-lg !px-6 !py-3">
                지금 뽑으러 가기
              </span>
            </div>
          </a>
          <p className="mt-6 text-sm leading-loose text-[var(--muted-on-ink)]">
            <strong className="font-play mr-2 font-normal text-[var(--paper)]">
              자주 뽑는 것
            </strong>
            {QUICK_MODES.map((m, i) => (
              <span key={m.slug}>
                {i > 0 && <span aria-hidden="true" className="mx-2 text-[var(--paper)]/35">·</span>}
                <a
                  href={`${ARCADE}?m=${m.slug}`}
                  className="text-[var(--paper)] underline decoration-[var(--coral)] decoration-2 underline-offset-[5px] hover:text-[var(--sun)]"
                >
                  {m.label}
                </a>
              </span>
            ))}
          </p>
        </section>

        {tools.length > 0 && (
          <section className="mt-14">
            <h2 className="font-play text-[27px] text-[var(--paper)]">
              등록된 <span className="text-[var(--sun)]">게임</span>
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {tools.map((t) => {
                const slug = hrefToSlug(t.href);
                const path = getToolPath(slug);
                return (
                  <li key={slug}>
                    <a
                      href={path}
                      className="block rounded-[14px] bg-[var(--ink-2)] border-[1.5px] border-[var(--paper)]/25 p-4 transition hover:border-[var(--sun)] hover:-translate-y-0.5"
                    >
                      <span className="text-lg mr-2">{t.icon}</span>
                      <span className="font-play text-[var(--paper)]">
                        {t.title}
                      </span>
                      <p className="mt-1 text-sm text-[var(--muted-on-ink)] line-clamp-2">
                        {t.desc}
                      </p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        <p className="mt-12 border-t border-[var(--paper)]/15 pt-6 text-sm text-[var(--muted-on-ink)]">
          <a href="/" className="link-sun">
            ← 홈으로
          </a>
          {" · "}
          <a href="/calculators/" className="link-sun">
            계산기 모음
          </a>
          {" · "}
          <a href="/tests/" className="link-sun">
            테스트 모음
          </a>
        </p>
      </main>
      <FooterSimple />
    </div>
  );
}
