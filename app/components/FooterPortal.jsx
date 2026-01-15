export function FooterPortal({ t }) {
  const getText = (key, fallback) => (t ? t(key) : fallback);

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 mt-16 text-slate-50">
      <div className="w-full border-t-2 border-white/10" />
      <div className="w-full px-4 pt-16 pb-24 sm:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 pb-12 border-b border-white/10">
            <div className="inline-block mb-4">
              <h2 className="text-2xl font-bold mb-4 text-sky-200 drop-shadow">
                {getText("footerIntroTitle", "About funnyfunny.cloud")}
              </h2>
            </div>
            <div className="leading-relaxed text-slate-100/90 max-w-3xl mx-auto text-base bg-white/5 border border-white/15 rounded-2xl px-5 py-4 shadow-sm">
              <p>
                {getText(
                  "footerIntroDescription1",
                  "funnyfunny.cloud helps you understand everyday data in a simple and enjoyable way. "
                )}
                {getText("footerIntroHighlight") && (
                  <span className="font-semibold text-sky-100">
                    {getText(
                      "footerIntroHighlight",
                      "A portal of utilities, tests, calculators, and info tools"
                    )}
                  </span>
                )}
                {getText("footerIntroDescription2", "")}
              </p>
              <p className="mt-2">
                {getText(
                  "footerIntroDescription3",
                  "All ads and elements are operated in compliance with Google policies."
                )}
              </p>
            </div>
          </div>

          <div className="text-center mb-12 pb-12 border-b border-white/10">
            <h3 className="text-xl font-bold text-sky-100 mb-6 flex items-center justify-center gap-2">
              <span className="text-2xl">📋</span>
              <span>{getText("footerOperationTitle", "Operations")}</span>
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg shadow-sm border border-white/15">
                <span className="font-semibold text-slate-100">
                  {getText("footerOperationDeveloperLabel", "Developed & operated by:")}
                </span>
                <a
                  href="https://funnyfunny.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-200 hover:text-white hover:underline font-medium transition-colors"
                >
                  AshLight
                </a>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg shadow-sm border border-white/15">
                <span className="font-semibold text-slate-100">
                  {getText("footerOperationContactLabel", "Contact:")}
                </span>
                <a
                  href="mailto:ashlight2510@gmail.com"
                  className="text-sky-200 hover:text-white hover:underline transition-colors"
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
                className="text-sm text-slate-200 hover:text-white hover:underline transition-colors px-3 py-1 rounded-md hover:bg-white/10"
              >
                {getText("footerLinkPrivacy", "Privacy Policy")}
              </a>
              <span className="text-white/40">·</span>
              <a
                href="/terms"
                className="text-sm text-slate-200 hover:text-white hover:underline transition-colors px-3 py-1 rounded-md hover:bg-white/10"
              >
                {getText("footerLinkTerms", "Terms of Service")}
              </a>
              <span className="text-white/40">·</span>
              <a
                href="/copyright"
                className="text-sm text-slate-200 hover:text-white hover:underline transition-colors px-3 py-1 rounded-md hover:bg-white/10"
              >
                {getText("footerLinkCopyright", "Copyright Notice")}
              </a>
              <span className="text-white/40">·</span>
              <a
                href="/policy"
                className="text-sm text-slate-200 hover:text-white hover:underline transition-colors px-3 py-1 rounded-md hover:bg-white/10"
              >
                {getText("footerLinkPolicy", "Operations Policy")}
              </a>
            </div>
            <p className="text-sm text-slate-200/80 font-medium">
              {getText(
                "footerCopyright",
                "© 2025 FunnyFunny Cloud by AshLight."
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
