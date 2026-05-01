import { notFound } from "next/navigation";
import Link from "next/link";
import { enrichedBookmakerReviews } from "@/lib/enriched-bookmaker-reviews";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookmakerReviewsGrid from "@/components/BookmakerReviewsGrid";
import {
  COUNTRIES_BY_REGION,
  COUNTRY_LABELS,
  REGION_LABELS,
  isRegionSlug,
  type RegionSlug,
} from "@/lib/bookmaker-locations";
import { bookmakerMatchesLocation } from "@/lib/bookmakerFilter";
import { getRegionBookmakerPageContent } from "@/lib/bookmaker-location-content";

import "flag-icons/css/flag-icons.min.css";
import { COUNTRY_OPTIONS } from "@/lib/bookmaker-locations";

type PageProps = {
  params: Promise<{
    region: string;
  }>;
};

function getBookmakersForRegion(region: RegionSlug) {
  return enrichedBookmakerReviews.filter((bookmaker) =>
    bookmakerMatchesLocation({
      bookmakerId: bookmaker.slug,
      region,
    })
  );
}

function getCountryFlagCode(countrySlug: string) {
  return COUNTRY_OPTIONS.find((country) => country.slug === countrySlug)?.flagCode;
}

export function generateStaticParams() {
  return Object.keys(REGION_LABELS).map((region) => ({
    region,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { region } = await params;

  if (!isRegionSlug(region)) {
    return {
      title: "Bookmaker Reviews",
    };
  }

  const content = getRegionBookmakerPageContent(region);

  return {
    title: content.title,
    description: content.metaDescription,
    alternates: {
      canonical: `/bookmaker-reviews/region/${region}`,
    },
  };
}

export default async function RegionBookmakerReviewsPage({
  params,
}: PageProps) {
  const { region } = await params;

  if (!isRegionSlug(region)) {
    notFound();
  }

  const regionLabel = REGION_LABELS[region];
  const content = getRegionBookmakerPageContent(region);
  const bookmakers = getBookmakersForRegion(region);
  const countries = COUNTRIES_BY_REGION[region];

  if (bookmakers.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
            { label: "Home", href: "/" },
            { label: "Bookmaker Reviews", href: "/bookmaker-reviews" },
            { label: "Regions", href: "/bookmaker-reviews/region" },
            { label: regionLabel },
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

          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
            {countries.length} countries
          </span>
        </div>
      </section>

      <BookmakerReviewsGrid bookmakers={bookmakers} selectedRegion={region} />

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-950">
          Compare bookmakers in {regionLabel}
        </h2>

        <div className="mt-3 space-y-3 text-slate-700">
          {content.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {[...countries]
            .sort((a, b) => COUNTRY_LABELS[a].localeCompare(COUNTRY_LABELS[b]))
            .map((country) => {
              const flagCode = getCountryFlagCode(country);

              return (
                <Link
                  key={country}
                  href={`/bookmaker-reviews/country/${country}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
                >
                  {flagCode && (
                    <span
                      className={`fi fi-${flagCode.toLowerCase()} inline-block h-3 w-4 overflow-hidden rounded-sm`}
                      aria-hidden="true"
                    />
                  )}

                  <span>{COUNTRY_LABELS[country]}</span>
                </Link>
              );
            })}
        </div>
      </section>
    </main>
  );
}