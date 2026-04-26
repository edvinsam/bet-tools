import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookmakerReviewsGrid from "@/components/BookmakerReviewsGrid";
import {
  enrichedBookmakerReviews,
} from "@/lib/enriched-bookmaker-reviews";

export const metadata = {
  title: "Best Bookmakers for Arbitrage Betting",
  description:
    "Compare the best bookmakers for arbitrage betting based on margins, reliability, withdrawal speed and limits.",
  alternates: {
    canonical:
      "/bookmaker-reviews/best-bookmakers-for-arbitrage-betting",
  },
};

function getArbitrageBookmakers() {
  return enrichedBookmakerReviews
    .filter(
      (b) =>
        typeof b.averageMargin === "number"
    )
    .sort(
      (a, b) =>
        (a.averageMargin ?? Infinity) -
        (b.averageMargin ?? Infinity)
    )
    .slice(0, 10);
}

export default function BestArbitrageBookmakersPage() {
  const bookmakers =
    getArbitrageBookmakers();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Bookmaker Reviews",
            href: "/bookmaker-reviews",
          },
          {
            label:
              "Best Bookmakers for Arbitrage Betting",
          },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-950">
        Best Bookmakers for Arbitrage Betting
      </h1>

      <p className="mt-4 max-w-3xl text-slate-700">
        Arbitrage betting requires reliable
        bookmakers with competitive odds,
        fast withdrawals and high betting
        limits. This page compares the best
        bookmakers for arbitrage betting
        based on margin data, user reputation
        and operational reliability.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/calculators/arbitrage-calculator"
          className="rounded-xl bg-slate-950 px-4 py-2 font-semibold text-white hover:bg-slate-800"
        >
          Use Arbitrage Calculator
        </Link>

        <Link
          href="/arbitrage-bets"
          className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-900 hover:bg-slate-50"
        >
          View Arbitrage Bets
        </Link>
      </div>

      <BookmakerReviewsGrid
        bookmakers={bookmakers}
        defaultSortKey="margin"
        defaultSortDirection="asc"
      />

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-bold text-slate-950">
          What Makes a Bookmaker Good for Arbitrage Betting?
        </h2>

        <p className="mt-3 text-slate-700">
          The most important factors for
          arbitrage betting are low margins,
          high liquidity and reliable payouts.
          Bookmakers with slow withdrawals or
          restrictive betting limits can make
          arbitrage strategies difficult to
          execute consistently. 
        </p>
        <Link
            href="/bookmaker-reviews/best-low-margin-bookmakers"
            className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
            Best low-margin bookmakers
        </Link>
      </section>
    </main>
  );
}