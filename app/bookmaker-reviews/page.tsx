// app/bookmaker-reviews/page.tsx

import Link from "next/link";
import { enrichedBookmakerReviews } from "@/lib/enriched-bookmaker-reviews";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookmakerReviewsGrid from "@/components/BookmakerReviewsGrid";

export const metadata = {
  title: "Bookmaker Reviews",
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
      </section>

      <BookmakerReviewsGrid bookmakers={enrichedBookmakerReviews} />

      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-bold text-slate-950">
          Compare bookmaker margins
        </h2>

        <p className="mt-3 max-w-3xl text-slate-700">
          Review pages give a broader overview of each bookmaker, while our
          bookmaker comparison page focuses on measurable margin and odds data.
        </p>
      </section>
    </main>
  );
}