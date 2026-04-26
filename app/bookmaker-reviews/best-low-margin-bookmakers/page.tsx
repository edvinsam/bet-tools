import Breadcrumbs from "@/components/Breadcrumbs";
import BookmakerReviewsGrid from "@/components/BookmakerReviewsGrid";
import { enrichedBookmakerReviews } from "@/lib/enriched-bookmaker-reviews";
import Link from "next/link";

export const metadata = {
  title: "Best Low Margin Bookmakers",
  description:
    "Compare bookmakers with the lowest average margins based on real pricing data. Find sportsbooks offering better odds and lower bookmaker margins.",
  alternates: {
    canonical: "/bookmaker-reviews/best-low-margin-bookmakers",
  },
};

function getLowMarginBookmakers() {
  return enrichedBookmakerReviews
    .filter(
      (b) => typeof b.averageMargin === "number"
    )
    .sort(
      (a, b) =>
        (a.averageMargin ?? Infinity) -
        (b.averageMargin ?? Infinity)
    )
    .slice(0, 10);
}

export default function BestLowMarginBookmakersPage() {
  const bookmakers = getLowMarginBookmakers();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          {
            label: "Bookmaker Reviews",
            href: "/bookmaker-reviews",
          },
          { label: "Best Low Margin Bookmakers" },
        ]}
      />

      {/* Hero section */}

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Odds and pricing comparison
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Best Low Margin Bookmakers
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700">
          Bookmaker margin directly affects how much value you get
          from your bets. Lower margins usually mean better odds
          and more competitive pricing. This page compares
          bookmakers using average margin data calculated from
          real betting markets.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
            {bookmakers.length} bookmakers
          </span>
        </div>
      </section>

      {/* Explanation */}

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-950">
          What is bookmaker margin?
        </h2>

        <div className="mt-3 space-y-3 text-slate-700">
          <p>
            Bookmaker margin represents the built-in advantage
            sportsbooks have over bettors. It is calculated from
            the implied probabilities of all outcomes in a market.
            Lower margins generally mean better odds and better
            long-term value.
          </p>

          <p>
            For example, sharp bookmakers and exchanges often
            operate with margins around 2–4%, while recreational
            sportsbooks may run margins above 6% or even higher in
            smaller markets.
          </p>

          <p>
            The margins shown here are based on sampled betting
            markets and provide a practical comparison between
            bookmakers rather than theoretical pricing.
          </p>
        </div>
      </section>

      {/* Bookmaker grid */}

      <BookmakerReviewsGrid
        bookmakers={bookmakers}
        defaultSortKey="margin"
        defaultSortDirection="asc"
      />
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-950">
            Related bookmaker comparisons
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Link
            href="/bookmaker-reviews/best-bookmakers-for-arbitrage-betting"
            className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
            >
            <h3 className="font-semibold text-slate-950">
                Best Bookmakers for Arbitrage
            </h3>

            <p className="mt-2 text-sm text-slate-600">
                Low margins are essential for arbitrage betting strategies.
            </p>
            </Link>

            <Link
            href="/bookmaker-reviews/best-betting-exchanges"
            className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
            >
            <h3 className="font-semibold text-slate-950">
                Best Betting Exchanges
            </h3>

            <p className="mt-2 text-sm text-slate-600">
                Exchanges often offer lower margins than traditional bookmakers.
            </p>
            </Link>
        </div>
      </section>
    </main>
  );
}