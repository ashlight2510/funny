export function HeaderPortal({ lang, onLangChange, t }) {
  const languages = [
    { code: "ko", label: t ? t("langKorean") : "한국어" },
    { code: "en", label: t ? t("langEnglish") : "English" },
  ];

  return (
    <>
      {/* 언어 토글 버튼 - 우상단 (헤더 바깥, 헤더 높이 + 20px margin-top) */}
      {lang && onLangChange && (
        <div className="fixed right-4 z-30" style={{ top: "3.5rem" }}>
          <div className="flex items-center gap-1 rounded-lg bg-white border border-slate-200 px-2 py-1 text-xs shadow-sm">
            {languages.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                onClick={() => onLangChange(code)}
                className={`px-2 py-1 rounded transition ${lang === code ? "bg-slate-100 text-slate-900 font-semibold" : "text-slate-500 hover:text-slate-900"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 text-slate-900 shadow-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 font-extrabold flex items-center justify-center text-lg">
                  FF
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">FunnyFunny Cloud</p>
                  <h1 className="text-sm sm:text-base font-bold text-slate-900">
                    {t ? t("headerHeroTitle") : "Useful services, playground"}
                  </h1>
                </div>
              </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <div className="hidden sm:flex items-center gap-2">
                <a href="/calculators/" className="px-3 py-2 text-sm rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition">
                  🧮 {t ? t("heroCtaCalculators") : "Calculators"}
                </a>
                <a href="/tests/" className="px-3 py-2 text-sm rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition">
                  🧪 {t ? t("heroCtaTests") : "Tests"}
                </a>
                <a href="/guide/" className="px-3 py-2 text-sm rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition">
                  📚 {t ? t("heroCtaGuides") : "Guides"}
                </a>
                <a href="https://flow.funnyfunny.cloud/" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition">
                  {t ? t("quickFlow") : "FLOW"}
                </a>
              </div>
              <button
                data-random-btn
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 text-white text-sm font-semibold shadow-sm hover:bg-sky-700 transition whitespace-nowrap"
              >
                <span className="sm:hidden">
                  {t ? t("ctaPrimarySmall") : "Random"}
                </span>
                <span className="hidden sm:inline">
                  {t ? t("ctaPrimaryLarge") : "Open random"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
