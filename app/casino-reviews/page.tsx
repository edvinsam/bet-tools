// app/casino-reviews/page.tsx

import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StarRating from "@/components/StarRating";
import { casinoReviews } from "@/lib/casino-reviews";
import { BOOKMAKER_META } from "@/lib/bookmaker-meta";

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
        {sortedCasinos.map((casino) => {
            const meta = BOOKMAKER_META[casino.slug];

            return (
            <Link
                key={casino.slug}
                href={`/casino-reviews/${casino.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
                <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <h2 className="truncate text-lg font-semibold text-gray-950">
                    {casino.name}
                    </h2>

                    {casino.rating !== undefined && (
                    <div className="mt-2">
                        <StarRating rating={casino.rating} />
                    </div>
                    )}
                </div>

                {meta?.logo && (
                    <div
                    className="flex h-12 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 p-2"
                    style={
                        meta.backgroundColor
                        ? { backgroundColor: meta.backgroundColor }
                        : undefined
                    }
                    >
                    <img
                        src={meta.logo}
                        alt={`${casino.name} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                        decoding="async"
                    />
                    </div>
                )}
                </div>

                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-700">
                {casino.intro}
                </p>

                <span className="mt-4 inline-flex text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                Read review →
                </span>
            </Link>
            );
        })}
        </section>
    </main>
  );
}