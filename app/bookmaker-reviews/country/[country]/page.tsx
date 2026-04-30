import { notFound } from "next/navigation";
import Link from "next/link";
import { enrichedBookmakerReviews } from "@/lib/enriched-bookmaker-reviews";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookmakerReviewsGrid from "@/components/BookmakerReviewsGrid";
import {
  COUNTRY_LABELS,
  REGION_LABELS,
  getCountryRegion,
  isCountrySlug,
  type CountrySlug,
} from "@/lib/bookmaker-locations";
import { bookmakerMatchesLocation } from "@/lib/bookmakerFilter";
import { getCountryBookmakerPageContent } from "@/lib/bookmaker-location-content";

type PageProps = {
  params: Promise<{
    country: string;
  }>;
};

function getBookmakersForCountry(country: CountrySlug) {
  return enrichedBookmakerReviews.filter((bookmaker) =>
    bookmakerMatchesLocation({
      bookmakerId: bookmaker.slug,
      country,
    })
  );
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
      title: "Bookmaker Reviews",
    };
  }

  const content = getCountryBookmakerPageContent(country);

  return {
    title: content.title,
    description: content.metaDescription,
    alternates: {
      canonical: `/bookmaker-reviews/country/${country}`,
    },
  };
}

export default async function CountryBookmakerReviewsPage({
  params,
}: PageProps) {
  const { country } = await params;

  if (!isCountrySlug(country)) {
    notFound();
  }

  const countryLabel = COUNTRY_LABELS[country];
  const region = getCountryRegion(country);
  const regionLabel = region ? REGION_LABELS[region] : null;
  const content = getCountryBookmakerPageContent(country);
  const bookmakers = getBookmakersForCountry(country);

  if (bookmakers.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
            { label: "Home", href: "/" },
            { label: "Bookmaker Reviews", href: "/bookmaker-reviews" },
            { label: "Countries", href: "/bookmaker-reviews/country" },
            { label: countryLabel },
        ]}
      />

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          {content.eyebrow}
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          {content.title}
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700">{content.intro}</p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
            {bookmakers.length} bookmaker{bookmakers.length === 1 ? "" : "s"}
          </span>

          {region && regionLabel ? (
            <Link
              href={`/bookmaker-reviews/region/${region}`}
              className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 hover:bg-slate-200"
            >
              {regionLabel}
            </Link>
          ) : null}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-950">
          Compare bookmakers in {countryLabel}
        </h2>

        <div className="mt-3 space-y-3 text-slate-700">
          {content.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <BookmakerReviewsGrid bookmakers={bookmakers} selectedCountry={country} />
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-950">
          Related bookmaker comparisons for {countryLabel}
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Link
            href={`/bookmaker-reviews/low-margin-bookmakers/${country}`}
            className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
          >
            <h3 className="font-semibold text-slate-950">
              Low Margin Bookmakers in {countryLabel}
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Compare bookmakers in {countryLabel} by average margin to find
              betting sites offering more competitive odds.
            </p>
          </Link>

          <Link
            href="/bookmaker-reviews/best-bookmakers-for-arbitrage-betting"
            className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
          >
            <h3 className="font-semibold text-slate-950">
              Best Bookmakers for Arbitrage Betting
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              See which bookmakers are best suited for arbitrage betting,
              including those with fast payouts and reliable odds.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}