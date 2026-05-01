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
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/bookmaker-reviews/best-low-margin-bookmakers"
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
          >
            Lowest Margin Bookmakers
          </Link>

          <Link
            href="/bookmaker-reviews/best-bookmakers-for-arbitrage-betting"
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
          >
            Best for Arbitrage
          </Link>

          <Link
            href="/bookmaker-reviews/best-betting-exchanges"
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
          >
            Betting Exchanges
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