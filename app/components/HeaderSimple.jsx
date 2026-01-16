export function HeaderSimple({ lang, onLangChange, t }) {
  const languages = lang && onLangChange
    ? [
        { code: "ko", label: t ? t("langKorean") : "한국어" },
        { code: "en", label: t ? t("langEnglish") : "English" },
      ]
    : [];

  return (
    <>
      {/* 언어 토글 버튼 - 우상단 (헤더 바깥, 헤더 높이 + 20px margin-top) */}
      {lang && onLangChange && (
        <div
          className="fixed right-4 z-30"
          style={{ top: "calc(4rem + 20px)" }}
        >
          <div className="flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 px-2 py-1 text-xs shadow-lg">
            {languages.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                onClick={() => onLangChange(code)}
                className={`px-2 py-1 rounded-full transition ${
                  lang === code
                    ? "bg-slate-900 text-white font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold">
            FunnyFunny Cloud
          </a>
          <nav className="space-x-4 text-sm hidden sm:flex">
            <a href="/" className="hover:text-blue-600">
              {t ? t("homeLabel") || "Home" : "Home"}
            </a>
            <a href="/guide" className="hover:text-blue-600">
              {t ? t("guidesLabel") : "Guides"}
            </a>
            <a
              href="http://flow.funnyfunny.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              FLOW
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
