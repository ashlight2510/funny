import { ENABLE_FLOW } from "../lib/features";

export function HeaderPortal({ lang, onLangChange, t }) {
  const languages = [
    { code: "ko", label: t ? t("langKorean") : "한국어" },
    { code: "en", label: t ? t("langEnglish") : "English" },
  ];
  const nav = [
    ["/calculators/", "🧮", t ? t("heroCtaCalculators") : "Calculators"],
    ["/tests/", "🧪", t ? t("heroCtaTests") : "Tests"],
    ["/games/", "🎰", t ? t("categoryGames") : "Games"],
    ["/guide/", "📚", t ? t("heroCtaGuides") : "Guides"],
  ];
  return (
    <>
      {lang && onLangChange && (
        <div className="fixed right-4 z-30" style={{ top: "5.2rem" }}>
          <div className="flex items-center gap-1 rounded-[10px] bg-[var(--paper)] border-2 border-[var(--ink)] px-1.5 py-1 text-xs shadow-[3px_3px_0_var(--ink)]">
            {languages.map(({ code, label }) => (
              <button key={code} type="button" onClick={() => onLangChange(code)} aria-pressed={lang === code}
                className={`px-2 py-1 rounded-[7px] transition ${lang === code ? "bg-[var(--ink)] text-[var(--paper)] font-bold" : "text-[var(--muted-on-paper)] hover:text-[var(--ink)]"}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
      <header className="ink-bg sticky top-0 z-20">
        <div className="awning" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-3">
            <a href="/" className="flex items-center gap-3 min-w-0" aria-label="FunnyFunny Cloud home">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-[12px] border-2 border-[var(--ink)] bg-[var(--sun)] text-[13px] font-latin font-extrabold tracking-wide text-[var(--ink)] shadow-[3px_3px_0_var(--coral)] -rotate-3">FF</span>
              <span className="min-w-0">
                <span className="block font-latin text-[13px] font-extrabold tracking-[0.14em] text-[var(--paper)]">FUNNYFUNNY <b className="text-[var(--sun)]">CLOUD</b></span>
                <span className="block truncate text-[13px] text-[var(--muted-on-ink)]">{t ? t("headerHeroTitle") : "Useful services, playground"}</span>
              </span>
            </a>
            <div className="flex items-center gap-1 sm:gap-2">
              <nav className="hidden md:flex items-center gap-1 text-[15px]" aria-label="주 메뉴">
                {nav.map(([href, icon, label]) => (
                  <a key={href} href={href} className="ticket-nav-link">{icon} {label}</a>
                ))}
                {ENABLE_FLOW && (
                  <a href="https://flow.funnyfunny.cloud/" target="_blank" rel="noopener noreferrer" className="ticket-nav-link">{t ? t("quickFlow") : "FLOW"}</a>
                )}
              </nav>
              <button data-random-btn className="btn-coral !px-4 !py-2 text-[15px] whitespace-nowrap">
                <span className="sm:hidden">{t ? t("ctaPrimarySmall") : "Random"}</span>
                <span className="hidden sm:inline">🎲 {t ? t("ctaPrimaryLarge") : "Open random"}</span>
              </button>
            </div>
          </div>
          <nav className="md:hidden mt-2 flex gap-1 overflow-x-auto text-sm" aria-label="모바일 메뉴">
            {nav.map(([href, icon, label]) => (
              <a key={href} href={href} className="ticket-nav-link">{icon} {label}</a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
