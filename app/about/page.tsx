import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "About Bet Tools",
  description:
    "Learn about Bet Tools, a free betting tools site with odds calculators, arbitrage tools, bookmaker reviews, casino reviews and country-based comparison pages.",
  alternates: {
    canonical: "https://bet-tools.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <section className="mt-6 rounded-3xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-blue-600">About Bet Tools</p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Free betting calculators, bookmaker comparisons and casino reviews
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Bet Tools is built to help users compare odds, understand bookmaker
          margins, find betting calculators, browse bookmaker reviews, compare
          betting sites by country and review online casino brands.
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          href="/calculators"
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-200 hover:shadow-md"
        >
          <h2 className="text-lg font-semibold text-slate-950">Calculators</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Convert odds, remove bookmaker margin, calculate fair probabilities
            and check arbitrage opportunities.
          </p>
        </Link>

        <Link
          href="/arbitrage-bets"
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-200 hover:shadow-md"
        >
          <h2 className="text-lg font-semibold text-slate-950">
            Live arbitrage bets
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Browse live surebet opportunities and use calculators to understand
            stake splits and profit margins.
          </p>
        </Link>

        <Link
          href="/bookmaker-reviews"
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-200 hover:shadow-md"
        >
          <h2 className="text-lg font-semibold text-slate-950">
            Bookmaker reviews
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Compare sportsbooks using ratings, user reputation, margin data,
            availability and practical betting features.
          </p>
        </Link>

        <Link
          href="/casino-reviews"
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-200 hover:shadow-md"
        >
          <h2 className="text-lg font-semibold text-slate-950">
            Casino reviews
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Browse online casino reviews covering games, payments, bonuses,
            usability, reliability and brand reputation.
          </p>
        </Link>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">
          What Bet Tools is for
        </h2>

        <div className="mt-4 space-y-4 leading-7 text-slate-600">
          <p>
            The goal of Bet Tools is to make betting information easier to
            understand. Instead of only listing brands, the site combines
            calculators, margin comparisons, country availability pages and
            review summaries.
          </p>

          <p>
            The calculators are intended to make odds, probability, bookmaker
            margin and arbitrage calculations clearer. The review pages are
            intended to help users compare betting sites and casinos before
            visiting an operator.
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">
          Important disclaimer
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          Bet Tools is for informational and educational purposes only. The site
          does not guarantee profit, betting success, bookmaker availability,
          bonus eligibility or casino outcomes. Betting and casino games involve
          financial risk. Users are responsible for their own decisions and
          should follow local laws and gamble responsibly.
        </p>
      </section>
    </main>
  );
}