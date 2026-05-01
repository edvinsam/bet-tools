import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-gray-600">

        {/* Top section */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-semibold text-gray-900">
              Bet Tools
            </div>

            <p className="mt-1 max-w-sm">
              Betting calculators, bookmaker reviews and comparison tools
              designed to help users understand odds, margins and betting
              value more clearly.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 md:text-left">

            {/* Site */}
            <div>
              <div className="font-semibold text-gray-900">
                Site
              </div>

              <nav className="mt-3 flex flex-col gap-2">
                <Link href="/about" className="hover:underline">
                  About
                </Link>

                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Legal */}
            <div>
              <div className="font-semibold text-gray-900">
                Legal
              </div>

              <nav className="mt-3 flex flex-col gap-2">
                <Link href="/privacy" className="hover:underline">
                  Privacy
                </Link>

                <Link href="/terms" className="hover:underline">
                  Terms
                </Link>

                <Link href="/affiliate-disclosure" className="hover:underline">
                  Affiliate Disclosure
                </Link>
              </nav>
            </div>

            {/* Safety */}
            <div>
              <div className="font-semibold text-gray-900">
                Safety
              </div>

              <nav className="mt-3 flex flex-col gap-2">
                <Link
                  href="/responsible-gambling"
                  className="hover:underline"
                >
                  Responsible Gambling
                </Link>
              </nav>
            </div>

          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-500">
          © {new Date().getFullYear()} Bet Tools
        </div>

      </div>
    </footer>
  );
}