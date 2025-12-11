export function FooterPortal() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 mt-16">
      <div className="w-full border-t-2 border-gray-200/50"></div>
      <div className="w-full px-4 pt-16 pb-24 sm:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 pb-12 border-b border-gray-200/60">
            <div className="inline-block mb-4">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                funnyfunny.cloud 소개
              </h2>
            </div>
            <div className="leading-relaxed text-gray-700 max-w-3xl mx-auto text-base bg-white/70 border border-gray-200 rounded-2xl px-5 py-4 shadow-sm">
              <p>
                funnyfunny.cloud는 일상의 데이터를 더 쉽고 재밌게 보여주는{" "}
                <span className="font-semibold text-gray-900">
                  테스트·계산기·정보 도구 포털
                </span>
                입니다.
              </p>
              <p className="mt-2">
                모든 서비스는 사용자에게 실제로 도움 되는 인사이트를 주기 위해
                직접 개발되었고, 광고를 포함한 모든 요소는 Google 정책을
                준수하여 안전하게 운영됩니다.
              </p>
            </div>
          </div>

          <div className="text-center mb-12 pb-12 border-b border-gray-200/60">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
              <span className="text-2xl">📋</span>
              <span>운영 정보</span>
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-white/60 px-4 py-2 rounded-lg shadow-sm border border-gray-200/50">
                <span className="font-semibold text-gray-700">
                  개발 및 운영:
                </span>
                <a
                  href="https://ashlight.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors"
                >
                  AshLight
                </a>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 px-4 py-2 rounded-lg shadow-sm border border-gray-200/50">
                <span className="font-semibold text-gray-700">문의:</span>
                <a
                  href="mailto:ashlight2510@gmail.com"
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
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
                className="text-sm text-gray-600 hover:text-blue-600 hover:underline transition-colors px-3 py-1 rounded-md hover:bg-white/50"
              >
                개인정보처리방침
              </a>
              <span className="text-gray-300">·</span>
              <a
                href="/terms"
                className="text-sm text-gray-600 hover:text-blue-600 hover:underline transition-colors px-3 py-1 rounded-md hover:bg-white/50"
              >
                이용약관
              </a>
              <span className="text-gray-300">·</span>
              <a
                href="/copyright"
                className="text-sm text-gray-600 hover:text-blue-600 hover:underline transition-colors px-3 py-1 rounded-md hover:bg-white/50"
              >
                저작권 안내
              </a>
              <span className="text-gray-300">·</span>
              <a
                href="/policy"
                className="text-sm text-gray-600 hover:text-blue-600 hover:underline transition-colors px-3 py-1 rounded-md hover:bg-white/50"
              >
                운영정책
              </a>
            </div>
            <p className="text-sm text-gray-500 font-medium">
              © 2025 FunnyFunny Cloud by AshLight. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
