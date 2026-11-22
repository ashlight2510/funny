export function FooterPortal({ t }) {
  const getText = (key, fallback) => (t ? t(key) : fallback);
  return (
    <footer className="ink-bg mt-10">
      <div className="awning" aria-hidden="true" />
      <div className="w-full px-4 pt-12 pb-10 sm:pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 pb-10 border-b border-[var(--paper)]/15">
            <p className="font-latin text-[13px] font-extrabold tracking-[0.14em]">FUNNYFUNNY <span className="text-[var(--sun)]">CLOUD</span></p>
            <h2 className="font-play mt-4 text-2xl text-[var(--paper)]">{getText("footerIntroTitle", "About funnyfunny.cloud")}</h2>
            <div className="leading-relaxed text-[var(--muted-on-ink)] max-w-3xl mx-auto text-base mt-4 rounded-[16px] border-2 border-[var(--paper)]/20 bg-[var(--ink-2)] px-5 py-4 text-left sm:text-center">
              <p>
                {getText("footerIntroDescription1", "funnyfunny.cloud helps you understand everyday data in a simple and enjoyable way. ")}
                {getText("footerIntroHighlight") && <span className="font-bold text-[var(--sun)]">{getText("footerIntroHighlight", "A portal of utilities, tests, calculators, and info tools")}</span>}
                {getText("footerIntroDescription2", "")}
              </p>
              <p className="mt-2">{getText("footerIntroDescription3", "All ads and elements are operated in compliance with Google policies.")}</p>
            </div>
          </div>
          <div className="text-center mb-10 pb-10 border-b border-[var(--paper)]/15">
            <h3 className="font-play text-xl text-[var(--paper)] mb-5">📋 {getText("footerOperationTitle", "Operations")}</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <p className="rounded-[12px] border-[1.5px] border-[var(--paper)]/25 bg-[var(--ink-2)] px-4 py-2">
                <span className="font-bold text-[var(--paper)]">{getText("footerOperationDeveloperLabel", "Developed & operated by:")} </span>
                <a href="https://funnyfunny.cloud" target="_blank" rel="noopener noreferrer" className="link-sun">AshLight</a>
              </p>
              <p className="rounded-[12px] border-[1.5px] border-[var(--paper)]/25 bg-[var(--ink-2)] px-4 py-2">
                <span className="font-bold text-[var(--paper)]">{getText("footerOperationContactLabel", "Contact:")} </span>
                <a href="mailto:ashlight2510@gmail.com" className="link-sun">ashlight2510@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="text-center">
            <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 mb-4 text-[15px]" aria-label="푸터 메뉴">
              <a href="/guide/" className="link-sun">가이드</a><span aria-hidden="true" className="text-[var(--paper)]/35">·</span>
              <a href="/calculators/" className="link-sun">계산기 모음</a><span aria-hidden="true" className="text-[var(--paper)]/35">·</span>
              <a href="/tests/" className="link-sun">테스트 모음</a><span aria-hidden="true" className="text-[var(--paper)]/35">·</span>
              <a href="/games/" className="link-sun">뽑기통·게임</a><span aria-hidden="true" className="text-[var(--paper)]/35">·</span>
              <a href="/utils/" className="link-sun">유틸</a>
            </nav>
            <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 mb-6 text-sm" aria-label="정책 메뉴">
              <a href="/privacy/" className="text-[var(--muted-on-ink)] hover:text-[var(--sun)]">{getText("footerLinkPrivacy", "Privacy Policy")}</a><span aria-hidden="true" className="text-[var(--paper)]/35">·</span>
              <a href="/terms" className="text-[var(--muted-on-ink)] hover:text-[var(--sun)]">{getText("footerLinkTerms", "Terms of Service")}</a><span aria-hidden="true" className="text-[var(--paper)]/35">·</span>
              <a href="/copyright" className="text-[var(--muted-on-ink)] hover:text-[var(--sun)]">{getText("footerLinkCopyright", "Copyright Notice")}</a><span aria-hidden="true" className="text-[var(--paper)]/35">·</span>
              <a href="/policy" className="text-[var(--muted-on-ink)] hover:text-[var(--sun)]">{getText("footerLinkPolicy", "Operations Policy")}</a>
            </nav>
            <p className="text-sm text-[var(--muted-on-ink)]">{getText("footerCopyright", "© 2025 FunnyFunny Cloud by AshLight.")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
