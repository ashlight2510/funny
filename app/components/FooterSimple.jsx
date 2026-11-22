export function FooterSimple() {
  const links = [
    ["/", "Home"], ["/calculators/", "Calculators"], ["/tests/", "Tests"],
    ["/games/", "Games"], ["/utils/", "Utils"], ["/guide/", "Guides"],
    ["/privacy/", "Privacy Policy"], ["/terms/", "Terms of Service"],
    ["/copyright/", "Copyright Notice"], ["/policy/", "Operations Policy"],
  ];
  return (
    <footer className="ink-bg mt-10">
      <div className="awning" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-4 py-10 pb-12 text-center">
        <p className="font-latin text-[13px] font-extrabold tracking-[0.14em] text-[var(--paper)]">FUNNYFUNNY <span className="text-[var(--sun)]">CLOUD</span></p>
        <nav className="mt-4 flex flex-wrap justify-center gap-x-1 gap-y-2 text-[15px]" aria-label="푸터 메뉴">
          {links.map(([href, label], i) => (
            <span key={href} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true" className="text-[var(--paper)]/30 mx-1">·</span>}
              <a href={href} className="link-sun">{label}</a>
            </span>
          ))}
        </nav>
        <p className="mt-5 text-sm text-[var(--muted-on-ink)]">© FunnyFunny Cloud by AshLight</p>
      </div>
    </footer>
  );
}
