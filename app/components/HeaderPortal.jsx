export function HeaderPortal({ lang, onLangChange, t }) {
  const languages = [
    { code: "ko", label: t ? t("langKorean") : "한국어" },
    { code: "en", label: t ? t("langEnglish") : "English" },
  ];

  return (
    <>
      {/* 언어 토글 버튼 - 좌상단 (헤더 바깥, 헤더 높이만큼 margin-top) */}
      {lang && onLangChange && (
        <div className="fixed left-4 z-30" style={{ top: 'calc(1rem + 1rem + 1rem)' }}>
          <div className="flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 px-2 py-1 text-xs shadow-lg">
            {languages.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                onClick={() => onLangChange(code)}
                className={`px-2 py-1 rounded-full transition ${
                  lang === code
                    ? "bg-white text-slate-900 font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
      <header className="bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-sky-950/80 backdrop-blur shadow-lg border-b border-white/10 sticky top-0 z-20 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-slate-100 via-sky-200 to-slate-300 text-slate-900 font-extrabold flex items-center justify-center text-xl shadow-sm">
              FF
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                <span>FunnyFunny Cloud</span>
                <span className="hidden sm:inline"> · Playground</span>
              </p>
              <h1 className="text-base sm:text-xl font-bold drop-shadow">
                {t ? t("headerHeroTitle") : "Useful services, playground"}
              </h1>
            </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="http://flow.funnyfunny.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                {t ? t("quickFlow") : "FLOW Board"}
              </a>
              <a
                href="https://ashlight.store"
                className="px-3 py-2 text-sm rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                {t ? t("quickAshlight") : "AshLight"}
              </a>
            </div>
            <button
              data-random-btn
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-200 via-cyan-200 to-slate-200 text-slate-900 text-sm font-semibold shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5 whitespace-nowrap"
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
