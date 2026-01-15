export function FooterSimple() {
  return (
    <footer className="bg-white border-t mt-20 py-8">
      <div className="max-w-5xl mx-auto px-4 text-center text-xs text-gray-400">
        <div className="space-x-4 mb-4">
          <a href="/guide" className="hover:text-gray-600">
            Guides
          </a>
          <span>|</span>
          <a href="/privacy" className="hover:text-gray-600">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms" className="hover:text-gray-600">
            Terms of Service
          </a>
          <span>|</span>
          <a href="/copyright" className="hover:text-gray-600">
            Copyright Notice
          </a>
          <span>|</span>
          <a href="/policy" className="hover:text-gray-600">
            Operations Policy
          </a>
        </div>
        <p>© FunnyFunny Cloud by AshLight</p>
      </div>
    </footer>
  );
}
