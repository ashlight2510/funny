export function HeaderPortal() {
  return (
    <header className="bg-white/85 backdrop-blur shadow-sm sticky top-0 z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center text-xl shadow-sm">
            FF
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              FunnyFunny Cloud
            </p>
            <h1 className="text-lg sm:text-xl font-bold" data-i18n="heroTitle">
              오늘의 인사이트 · 데일리 테스트
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://funnyfunny.dothome.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-3 py-2 text-sm rounded-full border border-slate-200 hover:border-blue-400 hover:text-blue-700 transition-colors"
          >
            게시판
          </a>
          <a
            href="https://ashlight.store"
            className="hidden sm:inline-flex px-3 py-2 text-sm rounded-full border border-slate-200 hover:border-blue-400 hover:text-blue-700 transition-colors"
          >
            AshLight
          </a>
          <button
            data-random-btn
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:bg-blue-700 transition-colors"
            data-i18n="ctaPrimary"
          >
            테스트 시작
          </button>
        </div>
      </div>
    </header>
  );
}
