import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const calculators = [
  {
    title: "Odds Converter",
    href: "/calculators/odds-converter",
    description:
      "Convert between decimal, fractional, American, Hong Kong, Malay, Indonesian, and implied probability formats.",
  },
  {
    title: "Fair Probability Calculator",
    href: "/calculators/fair-probability",
    description:
      "Remove bookmaker margin to estimate no-vig probabilities and fair odds for 2-way and 3-way markets.",
  },
  {
    title: "Arbitrage Calculator",
    href: "/calculators/arbitrage-calculator",
    description:
      "Check whether a set of odds creates a surebet opportunity and calculate the optimal stake split.",
  },
  {
    title: "Kelly Calculator",
    href: "/calculators/kelly-calculator",
    description:
      "Calculate optimal stake sizing using the Kelly Criterion based on your edge and bankroll.",
  },
];

export const metadata = {
  title: "Betting Calculators and Odds Tools",
  description:
    "Explore free betting calculators for odds conversion, fair probability, arbitrage, Kelly staking, and more.",
  alternates: {
    canonical: "https://bet-tools.com/calculators",
  },
};

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Calculators" },
              ]}
            />

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Betting Calculators
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              A collection of free betting calculators for working with odds,
              bookmaker margin, stake sizing, and arbitrage. Use these tools to
              move quickly from raw odds to clearer betting decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-900">
            Available tools
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Each calculator focuses on a specific part of the betting workflow.
            Some are useful for quick conversions and comparisons, while others
            are built for pricing and staking decisions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calculator) => (
            <Link
              key={calculator.href}
              href={calculator.href}
              className="group rounded-2xl border border-slate-200 bg-[#f9fafb] p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {calculator.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {calculator.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-slate-900">
                What these calculators are for
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Betting calculators are useful because prices can be shown in
                different formats, bookmaker margin is not always obvious, and
                stake sizing decisions are easy to get wrong without a framework.
                These tools help turn odds into something easier to interpret and
                compare.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Whether you are checking implied probability, removing vig,
                looking for arbitrage, or planning a more disciplined staking
                approach, a calculator saves time and reduces avoidable mistakes.
              </p>
            </div>

            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-slate-900">
                Common ways bettors use them
              </h2>

              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
                <li>• Convert odds between formats used by different bookmakers</li>
                <li>• Estimate fair prices by removing bookmaker margin</li>
                <li>• Test whether a set of odds creates a surebet</li>
                <li>• Calculate more disciplined bet sizing with Kelly</li>
                <li>• Compare lines more clearly before placing a wager</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-900">
              Where to start
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              If you are new to betting tools, the{" "}
              <Link
                href="/calculators/odds-converter"
                className="font-medium text-slate-900 underline underline-offset-2"
              >
                Odds Converter
              </Link>{" "}
              is usually the easiest starting point. From there, the{" "}
              <Link
                href="/calculators/fair-probability"
                className="font-medium text-slate-900 underline underline-offset-2"
              >
                Fair Probability Calculator
              </Link>{" "}
              helps you understand bookmaker margin, while the{" "}
              <Link
                href="/calculators/arbitrage-calculator"
                className="font-medium text-slate-900 underline underline-offset-2"
              >
                Arbitrage Calculator
              </Link>{" "}
              and{" "}
              <Link
                href="/calculators/kelly-calculator"
                className="font-medium text-slate-900 underline underline-offset-2"
              >
                Kelly Calculator
              </Link>{" "}
              are more useful once you are comparing opportunities and thinking
              about execution.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}