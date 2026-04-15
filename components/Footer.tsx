export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-600">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div className="text-center md:text-left">
            <div className="font-semibold text-gray-900">
              Bet Tools
            </div>

            <p className="mt-1">
              Free betting calculators and odds conversion tools.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            <a href="/about" className="hover:underline">
              About
            </a>

            <a href="/privacy" className="hover:underline">
              Privacy
            </a>

            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </nav>

        </div>

        <div className="mt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Bet Tools
        </div>

      </div>
    </footer>
  );
}