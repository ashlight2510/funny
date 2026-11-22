import { ENABLE_FLOW } from "../lib/features";

export function HeaderSimple({ lang, onLangChange, t }) {
  const languages = lang && onLangChange
    ? [
        { code: "ko", label: t ? t("langKorean") : "한국어" },
        { code: "en", label: t ? t("langEnglish") : "English" },
      ]
    : [];
  const nav = [
    ["/", t ? t("homeLabel") || "Home" : "Home"],
    ["/calculators/", t ? t("heroCtaCalculators") || "Calculators" : "Calculators"],
    ["/tests/", t ? t("heroCtaTests") || "Tests" : "Tests"],
    ["/games/", t ? t("categoryGames") || "Games" : "Games"],
    ["/guide/", t ? t("guidesLabel") || "Guides" : "Guides"],
  ];
  return (
    <>
      {lang && onLangChange && (
        <div className="fixed right-4 z-30" style={{ top: "5.2rem" }}>
          <div className="flex items-center gap-1 rounded-[10px] bg-[var(--paper)] border-2 border-[var(--ink)] px-1.5 py-1 text-xs shadow-[3px_3px_0_var(--ink)]">
            {languages.map(({ code, label }) => (
              <button key={code} type="button" onClick={() => onLangChange(code)} aria-label={label} aria-pressed={lang === code}
                className={`px-2 py-1 rounded-[7px] transition ${lang === code ? "bg-[var(--ink)] text-[var(--paper)] font-bold" : "text-[var(--muted-on-paper)] hover:text-[var(--ink)]"}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
      <header className="ink-bg sticky top-0 z-20">
        <div className="awning" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap justify-between items-center gap-2">
          <a href="/" className="flex items-center gap-2.5" aria-label="FunnyFunny Cloud home">
            <span className="grid h-9 w-9 place-items-center rounded-[10px] border-2 border-[var(--ink)] bg-[var(--sun)] text-[11px] font-latin font-extrabold text-[var(--ink)] shadow-[3px_3px_0_var(--coral)] -rotate-3">FF</span>
            <span className="font-latin text-[13px] font-extrabold tracking-[0.14em] text-[var(--paper)]">FUNNYFUNNY <b className="text-[var(--sun)]">CLOUD</b></span>
          </a>
          <nav className="flex items-center gap-1 text-[15px] overflow-x-auto" aria-label="주 메뉴">
            {nav.map(([href, label]) => (
              <a key={href} href={href} className="ticket-nav-link">{label}</a>
            ))}
            {ENABLE_FLOW && (
              <a href="https://flow.funnyfunny.cloud/" target="_blank" rel="noopener noreferrer" className="ticket-nav-link">FLOW</a>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
