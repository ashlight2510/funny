export function HeaderPortal() {
  return (
    <header className="bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-sky-950/80 backdrop-blur shadow-lg border-b border-white/10 sticky top-0 z-20 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-slate-100 via-sky-200 to-slate-300 text-slate-900 font-extrabold flex items-center justify-center text-xl shadow-sm">
            FF
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
              FunnyFunny Cloud · Playground
            </p>
            <h1
              className="text-base sm:text-xl font-bold drop-shadow"
              data-i18n="heroTitle"
            >
              유용할 수 있는 서비스, 놀이터
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="http://flow.funnyfunny.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-3 py-2 text-sm rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            FLOW 게시판
          </a>
          <a
            href="https://funnyfunny.cloud"
            className="hidden sm:inline-flex px-3 py-2 text-sm rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            AshLight
          </a>
          <button
            data-random-btn
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-200 via-cyan-200 to-slate-200 text-slate-900 text-sm font-semibold shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5 whitespace-nowrap"
            data-i18n="ctaPrimary"
          >
            <span className="sm:hidden">랜덤</span>
            <span className="hidden sm:inline">랜덤 열기</span>
          </button>
        </div>
      </div>
    </header>
  );
}
