// app/bookmaker-reviews/page.tsx

import Link from "next/link";
import { enrichedBookmakerReviews } from "@/lib/enriched-bookmaker-reviews";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookmakerReviewsGrid from "@/components/BookmakerReviewsGrid";

export const metadata = {
  title: {
    absolute: "Best Betting Sites | Which Bookmaker to choose in 2026?"
  },
  description:
    "Browse bookmaker reviews covering odds, margins, user experience, deposits, withdrawals, reputation and betting features.",
  alternates: {
    canonical: "/bookmaker-reviews",
  },
};

export default function BookmakerReviewsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Bookmaker Reviews" },
        ]}
      />

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Bookmaker reviews
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Bookmaker Reviews
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700">
          Compare bookmakers using a mix of editorial review, measurable data,
          margin analysis, user reputation summaries and practical betting
          experience factors such as registration, deposits and withdrawals.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/bookmaker-reviews/best-low-margin-bookmakers"
            className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
          >
            <h2 className="font-semibold text-slate-950">
              Lowest Margin Bookmakers
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Compare bookmakers offering the most competitive odds.
            </p>
          </Link>

          <Link
            href="/bookmaker-reviews/best-bookmakers-for-arbitrage-betting"
            className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
          >
            <h2 className="font-semibold text-slate-950">
              Best Bookmakers for Arbitrage
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Find reliable bookmakers suitable for arbitrage strategies.
            </p>
          </Link>

          <Link
            href="/bookmaker-reviews/best-betting-exchanges"
            className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
          >
            <h2 className="font-semibold text-slate-950">
              Best Betting Exchanges
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Compare exchange-style platforms based on liquidity and fees.
            </p>
          </Link>
        </div>
      </section>

      <BookmakerReviewsGrid bookmakers={enrichedBookmakerReviews} />

      <div className="mt-8 text-sm text-slate-500">
        Browse all bookmaker reviews by{" "}
        <Link
          href="/bookmaker-reviews/country"
          className="underline hover:text-slate-700"
        >
          country
        </Link>{" "}
        or{" "}
        <Link
          href="/bookmaker-reviews/region"
          className="underline hover:text-slate-700"
        >
          region
        </Link>.
      </div>
    </main>
  );
}