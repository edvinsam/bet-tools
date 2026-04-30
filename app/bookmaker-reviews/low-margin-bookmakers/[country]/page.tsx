// app/bookmaker-reviews/low-margin-bookmakers/[country]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookmakerReviewsGrid from "@/components/BookmakerReviewsGrid";
import { enrichedBookmakerReviews } from "@/lib/enriched-bookmaker-reviews";
import {
  COUNTRY_LABELS,
  type CountrySlug,
} from "@/lib/bookmaker-locations";
import { bookmakerMatchesLocation } from "@/lib/bookmakerFilter";

type PageProps = {
  params: Promise<{
    country: string;
  }>;
};

function isCountrySlug(value: string): value is CountrySlug {
  return value in COUNTRY_LABELS;
}

export function generateStaticParams() {
  return Object.keys(COUNTRY_LABELS).map((country) => ({
    country,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { country } = await params;

  if (!isCountrySlug(country)) {
    return {
      title: "Low Margin Bookmakers",
    };
  }

  const countryName = COUNTRY_LABELS[country];

  return {
    title: `Low Margin Bookmakers in ${countryName}`,
    description: `Compare low margin bookmakers available in ${countryName}. See which sportsbooks offer lower average margins, better odds and more competitive pricing.`,
    alternates: {
      canonical: `/bookmaker-reviews/low-margin-bookmakers/${country}`,
    },
  };
}

function getLowMarginBookmakersForCountry(country: CountrySlug) {
  return enrichedBookmakerReviews
    .filter((bookmaker) => {
      if (typeof bookmaker.averageMargin !== "number") {
        return false;
      }

      return bookmakerMatchesLocation({
        bookmakerId: bookmaker.slug,
        country,
      });
    })
    .sort(
      (a, b) =>
        (a.averageMargin ?? Infinity) -
        (b.averageMargin ?? Infinity)
    );
}

export default async function LowMarginBookmakersCountryPage({
  params,
}: PageProps) {
  const { country } = await params;

  if (!isCountrySlug(country)) {
    notFound();
  }

  const countryName = COUNTRY_LABELS[country];
  const bookmakers = getLowMarginBookmakersForCountry(country);

  if (bookmakers.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          {
            label: "Bookmaker Reviews",
            href: "/bookmaker-reviews",
          },
          {
            label: "Best Low Margin Bookmakers",
            href: "/bookmaker-reviews/best-low-margin-bookmakers",
          },
          { label: countryName },
        ]}
      />

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Country-specific odds comparison
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Low Margin Bookmakers in {countryName}
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700">
          Compare bookmakers available in {countryName} by average
          margin. Lower bookmaker margins usually mean better odds,
          more competitive pricing and better long-term value for
          bettors.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
            {bookmakers.length} bookmakers compared
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
            Sorted by lowest margin
          </span>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-950">
          Why bookmaker margin matters in {countryName}
        </h2>

        <div className="mt-3 space-y-3 text-slate-700">
          <p>
            Bookmaker margin is the built-in edge included in the
            odds. A lower margin means the bookmaker is taking a
            smaller spread from the market, which usually gives
            bettors better prices.
          </p>

          <p>
            This page focuses on bookmakers that match {countryName} availability rules and have margin data in our database.
            The rankings are based on sampled betting markets and are
            intended as a practical comparison of pricing quality.
          </p>
        </div>
      </section>

      <BookmakerReviewsGrid
        bookmakers={bookmakers}
        selectedCountry={country}
        defaultSortKey="margin"
        defaultSortDirection="asc"
        locationHrefMode="low-margin"
      />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-950">
          Related bookmaker pages for {countryName}
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Link
            href={`/bookmaker-reviews/country/${country}`}
            className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
          >
            <h3 className="font-semibold text-slate-950">
              Best Bookmakers in {countryName}
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              See the overall bookmaker rankings for {countryName}.
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
              Low margins are especially important for arbitrage
              betting strategies.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}