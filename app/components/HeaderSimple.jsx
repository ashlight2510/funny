export function HeaderSimple() {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          FunnyFunny Cloud
        </a>
        <nav className="space-x-4 text-sm hidden sm:flex">
          <a href="/" className="hover:text-blue-600">
            홈
          </a>
          <a href="/guide" className="hover:text-blue-600">
            가이드
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
  );
}
