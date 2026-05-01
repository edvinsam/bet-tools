import Link from "next/link";

const calculators = [
  {
    title: "Odds Converter",
    href: "/calculators/odds-converter",
    description:
      "Convert decimal, fractional, American, Hong Kong, Malay, Indonesian, and implied probability odds.",
    label: "Most popular",
  },
  {
    title: "Fair Probability Calculator",
    href: "/calculators/fair-probability",
    description:
      "Remove bookmaker margin and calculate no-vig probabilities for 2-way and 3-way markets.",
    label: "No-vig odds",
  },
  {
    title: "Arbitrage Calculator",
    href: "/calculators/arbitrage-calculator",
    description:
      "Check if a set of odds creates a surebet and calculate the optimal stake split.",
    label: "Surebet tool",
  },
];

const featureLinks = [
  {
    title: "Live Arbitrage Bets",
    href: "/arbitrage-bets",
    description:
      "Browse live surebet opportunities across bookmakers and calculate stake splits instantly.",
    cta: "View live arbs",
  },
  {
    title: "Bookmaker Reviews",
    href: "/bookmaker-reviews",
    description:
      "Compare betting sites by margin, reputation, availability, ratings, and betting features.",
    cta: "Compare bookmakers",
  },
  {
    title: "Low-Margin Bookmakers",
    href: "/bookmaker-reviews/best-low-margin-bookmakers",
    description:
      "Find bookmakers with better pricing and lower average overround across major markets.",
    cta: "See rankings",
  },
];

const popularCountries = [
  {
    label: "United Kingdom",
    href: "/bookmaker-reviews/country/united-kingdom",
  },
  {
    label: "Sweden",
    href: "/bookmaker-reviews/country/sweden",
  },
  {
    label: "United States",
    href: "/bookmaker-reviews/country/united-states",
  },
  {
    label: "Australia",
    href: "/bookmaker-reviews/country/australia",
  },
  {
    label: "Canada",
    href: "/bookmaker-reviews/country/canada",
  },
  {
    label: "India",
    href: "/bookmaker-reviews/country/india",
  },
];

export const metadata = {
  title: "Free Betting Calculators, Live Arbitrage Bets & Odds Tools",
  description:
    "Free betting calculators, live arbitrage bets, bookmaker comparison tools, and odds conversion utilities. Find surebets, remove bookmaker margin, calculate fair probability, and analyze betting value instantly.",
  alternates: {
    canonical: "https://bet-tools.com",
  },
  keywords: [
    "betting calculators",
    "arbitrage bets",
    "surebets",
    "odds converter",
    "fair probability",
    "value betting",
    "bookmaker comparison",
  ],
};

export default function HomePage() {
  return (
    <main className="w-full bg-slate-50">
      <section className="border-b border-slate-200 bg-linear-to-b from-white to-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:py-16">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              Free betting tools, calculators and odds comparisons
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Smarter betting tools for odds, value and arbitrage
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Convert odds, remove bookmaker margin, compare betting sites, and
              find live arbitrage opportunities with fast, simple tools built for
              sports bettors.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/arbitrage-bets"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                View Live Arbitrage Bets
              </Link>

              <Link
                href="/calculators/odds-converter"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
              >
                Try Odds Converter
              </Link>

              <Link
                href="/bookmaker-reviews"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
              >
                Compare Bookmakers
              </Link>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 text-sm text-slate-600 sm:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <strong className="block text-slate-950">Free</strong>
                No signup
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <strong className="block text-slate-950">Fast</strong>
                Instant results
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <strong className="block text-slate-950">Practical</strong>
                Real betting use
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <strong className="block text-slate-950">Transparent</strong>
                Clear formulas
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">
              Find betting sites in your country
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              See which betting sites and casinos are available where you live. Compare
              margins, features, and availability before signing up.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {popularCountries.map((country) => (
                <Link
                  key={country.href}
                  href={country.href}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-900 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  {country.label}
                </Link>
              ))}
            </div>

            <Link
              href="/bookmaker-reviews/country"
              className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Browse all countries →
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <section>
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Explore betting tools
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Start with the calculator or comparison tool that matches what
                you are trying to do.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featureLinks.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  {feature.cta} →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Featured calculators
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Quick tools for common sports betting calculations.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {calculators.map((calculator) => (
              <Link
                key={calculator.href}
                href={calculator.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  {calculator.label}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {calculator.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {calculator.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  Open calculator →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Why use Bet Tools?
              </h2>
              <p className="mt-3 text-slate-600">
                Betting markets are easier to understand when odds, margin,
                probability and stake sizing are shown clearly.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-950">
                  Compare prices faster
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Convert odds formats and compare bookmaker prices without
                  manual calculations.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-950">
                  Understand true probability
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Remove bookmaker margin to estimate fair odds and no-vig
                  probabilities.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-950">
                  Find arbitrage opportunities
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Check surebets and calculate the correct stake split for each
                  outcome.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-950">
                  Choose better bookmakers
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Compare betting sites by margins, reviews, availability and
                  practical betting features.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              What are betting calculators?
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Betting calculators help bettors analyze odds, estimate
              probability, compare bookmaker pricing, and size stakes more
              effectively. They are commonly used to identify value bets, remove
              bookmaker margin, and check whether an arbitrage opportunity
              exists.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Start with the basics
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              New users usually start with the{" "}
              <Link
                href="/calculators/odds-converter"
                className="font-medium text-blue-600 underline-offset-4 hover:underline"
              >
                Odds Converter
              </Link>
              , then move on to the{" "}
              <Link
                href="/calculators/fair-probability"
                className="font-medium text-blue-600 underline-offset-4 hover:underline"
              >
                Fair Probability Calculator
              </Link>{" "}
              and the{" "}
              <Link
                href="/calculators/arbitrage-calculator"
                className="font-medium text-blue-600 underline-offset-4 hover:underline"
              >
                Arbitrage Calculator
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}