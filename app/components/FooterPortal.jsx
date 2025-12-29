export function FooterPortal() {
  return (
    <footer className="bg-gradient-to-br from-emerald-950 via-red-950 to-emerald-900 mt-16 text-emerald-50">
      <div className="w-full border-t-2 border-white/10"></div>
      <div className="w-full px-4 pt-16 pb-24 sm:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 pb-12 border-b border-white/10">
            <div className="inline-block mb-4">
              <h2 className="text-2xl font-bold mb-4 text-amber-200 drop-shadow">
                funnyfunny.cloud 소개 — Holiday Edition
              </h2>
            </div>
            <div className="leading-relaxed text-emerald-50/90 max-w-3xl mx-auto text-base bg-white/5 border border-white/15 rounded-2xl px-5 py-4 shadow-sm">
              <p>
                funnyfunny.cloud는 일상의 데이터를 더 쉽고 재밌게 보여주는{" "}
                <span className="font-semibold text-amber-100">
                  테스트·계산기·정보 도구 포털
                </span>
                입니다.
              </p>
              <p className="mt-2">
                이번 주는 모든 서비스를 크리스마스 선물처럼 가볍게 열어볼 수
                있도록, 밝고 따뜻한 테마로 꾸몄어요. 광고를 포함한 모든 요소는
                Google 정책을 준수하여 안전하게 운영됩니다.
              </p>
            </div>
          </div>

          <div className="text-center mb-12 pb-12 border-b border-white/10">
            <h3 className="text-xl font-bold text-amber-100 mb-6 flex items-center justify-center gap-2">
              <span className="text-2xl">📋</span>
              <span>운영 정보</span>
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg shadow-sm border border-white/15">
                <span className="font-semibold text-emerald-50">
                  개발 및 운영:
                </span>
                <a
                  href="https://ashlight.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-200 hover:text-white hover:underline font-medium transition-colors"
                >
                  AshLight
                </a>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg shadow-sm border border-white/15">
                <span className="font-semibold text-emerald-50">문의:</span>
                <a
                  href="mailto:ashlight2510@gmail.com"
                  className="text-amber-200 hover:text-white hover:underline transition-colors"
                >
                  ashlight2510@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <a
                href="/privacy"
                className="text-sm text-emerald-100 hover:text-white hover:underline transition-colors px-3 py-1 rounded-md hover:bg-white/10"
              >
                개인정보처리방침
              </a>
              <span className="text-white/40">·</span>
              <a
                href="/terms"
                className="text-sm text-emerald-100 hover:text-white hover:underline transition-colors px-3 py-1 rounded-md hover:bg-white/10"
              >
                이용약관
              </a>
              <span className="text-white/40">·</span>
              <a
                href="/copyright"
                className="text-sm text-emerald-100 hover:text-white hover:underline transition-colors px-3 py-1 rounded-md hover:bg-white/10"
              >
                저작권 안내
              </a>
              <span className="text-white/40">·</span>
              <a
                href="/policy"
                className="text-sm text-emerald-100 hover:text-white hover:underline transition-colors px-3 py-1 rounded-md hover:bg-white/10"
              >
                운영정책
              </a>
            </div>
            <p className="text-sm text-emerald-100/80 font-medium">
              © 2025 FunnyFunny Cloud by AshLight.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
