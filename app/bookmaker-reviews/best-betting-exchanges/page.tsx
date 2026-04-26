import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookmakerReviewsGrid from "@/components/BookmakerReviewsGrid";
import { enrichedBookmakerReviews } from "@/lib/enriched-bookmaker-reviews";

export const metadata = {
  title: "Best Betting Exchanges",
  description:
    "Compare the best betting exchanges and exchange-style bookmakers based on margins, liquidity, user reputation and betting features.",
  alternates: {
    canonical: "/bookmaker-reviews/best-betting-exchanges",
  },
};

const exchangeSlugs = new Set([
  "betfair",
  "matchbook",
  "smarkets",
]);

function getBettingExchanges() {
  return enrichedBookmakerReviews
    .filter((bookmaker) => exchangeSlugs.has(bookmaker.slug))
    .sort((a, b) => {
      const aMargin = a.averageMargin ?? Infinity;
      const bMargin = b.averageMargin ?? Infinity;
      return aMargin - bMargin;
    });
}

export default function BestBettingExchangesPage() {
  const bookmakers = getBettingExchanges();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Bookmaker Reviews", href: "/bookmaker-reviews" },
          { label: "Best Betting Exchanges" },
        ]}
      />

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Exchange betting comparison
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Best Betting Exchanges
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700">
          Betting exchanges let users bet against each other rather than only
          against a traditional bookmaker. They can be useful for sharper odds,
          trading strategies, arbitrage betting and lower-margin markets, but
          liquidity, commission and availability vary significantly by platform.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
            {bookmakers.length} exchanges
          </span>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-950">
          What makes a good betting exchange?
        </h2>

        <div className="mt-3 space-y-3 text-slate-700">
          <p>
            The best betting exchanges usually combine strong liquidity,
            competitive commission rates, reliable settlement and a good range
            of sports markets. For active bettors, liquidity is especially
            important because a good quoted price is only useful if enough money
            is available to match the bet.
          </p>

          <p>
            Exchanges can also be useful for arbitrage and trading because they
            allow backing and laying selections. This creates more flexibility
            than a standard sportsbook, especially when hedging positions or
            comparing prices across markets.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/bookmaker-reviews/best-bookmakers-for-arbitrage-betting"
            className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Best bookmakers for arbitrage
          </Link>

          <Link
            href="/bookmaker-reviews/best-low-margin-bookmakers"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Lowest margin bookmakers
          </Link>
        </div>
      </section>

      <BookmakerReviewsGrid
        bookmakers={bookmakers}
        defaultSortKey="margin"
        defaultSortDirection="asc"
      />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-950">
          Betting exchanges vs traditional bookmakers
        </h2>

        <div className="mt-3 space-y-3 text-slate-700">
          <p>
            A traditional bookmaker sets the odds and takes the other side of
            the bet. A betting exchange lets users offer and accept prices from
            other users, usually with the platform charging commission on net
            winnings.
          </p>

          <p>
            This can lead to more competitive pricing on popular events, but it
            also means market quality depends on liquidity. Major football,
            tennis, horse racing and high-profile US sports markets are usually
            more suitable for exchange betting than small leagues or niche
            props.
          </p>
        </div>
      </section>
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-950">
            Compare other bookmaker types
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Link
            href="/bookmaker-reviews/best-low-margin-bookmakers"
            className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
            >
            <h3 className="font-semibold text-slate-950">
                Lowest Margin Bookmakers
            </h3>

            <p className="mt-2 text-sm text-slate-600">
                Find sportsbooks offering the most competitive odds.
            </p>
            </Link>

            <Link
            href="/bookmaker-reviews/best-bookmakers-for-arbitrage-betting"
            className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
            >
            <h3 className="font-semibold text-slate-950">
                Best Bookmakers for Arbitrage
            </h3>

            <p className="mt-2 text-sm text-slate-600">
                Compare platforms suitable for arbitrage strategies.
            </p>
            </Link>
        </div>
      </section>
    </main>
  );
}