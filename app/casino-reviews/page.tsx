// app/casino-reviews/page.tsx

import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StarRating from "@/components/StarRating";
import { casinoReviews } from "@/lib/casino-reviews";

export const metadata = {
  title: "Casino Reviews | Bet Tools",
  description:
    "Browse online casino reviews covering games, bonuses, payments, withdrawals, user experience and safety considerations.",
  alternates: {
    canonical: "/casino-reviews",
  },
};

export default function CasinoReviewsPage() {
  const sortedCasinos = [...casinoReviews].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Casino Reviews" }]}
      />

      <section className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-950">
          Casino Reviews
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          Browse casino reviews covering games, bonuses, payments, withdrawals,
          live casino, user experience and overall reliability.
        </p>
      </section>

      <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sortedCasinos.map((casino) => (
          <Link
            key={casino.slug}
            href={`/casino-reviews/${casino.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-gray-300 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-gray-950">
              {casino.name}
            </h2>

            {casino.rating !== undefined ? (
              <div className="mt-2">
                <StarRating rating={casino.rating} />
              </div>
            ) : null}

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-700">
              {casino.intro}
            </p>

            <span className="mt-4 inline-flex text-sm font-semibold text-emerald-700">
              Read review →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}