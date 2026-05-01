// app/online-casinos/[country]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import StarRating from "@/components/StarRating";
import { bookmakerReviews } from "@/lib/bookmaker-reviews";
import { BOOKMAKER_META } from "@/lib/bookmaker-meta";
import { bookmakerMatchesLocation } from "@/lib/bookmakerFilter";
import {
  COUNTRY_LABELS,
  COUNTRIES_BY_REGION,
  type CountrySlug,
  type RegionSlug,
} from "@/lib/bookmaker-locations";

import { getCasinoBrandsForLocation } from "@/lib/operatorFilters";

import { casinoReviews } from "@/lib/casino-reviews";

function getCasinoReview(slug: string) {
  return casinoReviews.find((review) => review.slug === slug);
}

type PageProps = {
  params: Promise<{
    country: string;
  }>;
};

function isCountrySlug(value: string): value is CountrySlug {
  return value in COUNTRY_LABELS;
}

function getRegionForCountry(country: CountrySlug): RegionSlug | undefined {
  for (const [region, countries] of Object.entries(COUNTRIES_BY_REGION)) {
    if ((countries as readonly CountrySlug[]).includes(country)) {
      return region as RegionSlug;
    }
  }

  return undefined;
}

function getAvailableCasinoBrands(country: CountrySlug) {
  const region = getRegionForCountry(country);

  return bookmakerReviews
    .filter((bookmaker) =>
      bookmakerMatchesLocation({
        bookmakerId: bookmaker.slug,
        region,
        country,
      })
    )
    .filter((bookmaker) => {
      const text = [
        bookmaker.intro,
        bookmaker.verdict,
        ...bookmaker.quickFacts.map((fact) => fact.value),
        ...bookmaker.sections.flatMap((section) => section.paragraphs),
      ]
        .join(" ")
        .toLowerCase();

      return text.includes("casino");
    })
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
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
      title: "Online Casinos",
    };
  }

  const countryName = COUNTRY_LABELS[country];

  return {
    title: `Best Online Casinos in ${countryName} (2026) | Bet Tools`,
    description: `Compare online casinos in ${countryName}. See casino brands, ratings, bonuses, user reputation and payment considerations.`,
    alternates: {
      canonical: `/online-casinos/${country}`,
    },
  };
}

export default async function OnlineCasinosCountryPage({ params }: PageProps) {
  const { country } = await params;

  if (!isCountrySlug(country)) {
    notFound();
  }

  const countryName = COUNTRY_LABELS[country];
  const region = getRegionForCountry(country);
  const casinoBrands = getCasinoBrandsForLocation({
    country,
    region,
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Online Casinos", href: "/online-casinos" },
          { label: countryName },
        ]}
      />

      <section className="mt-6">
        <p className="mb-3 text-sm font-medium text-emerald-700">
          We may earn a commission if you sign up through links on this page.
          This does not affect our reviews or rankings.
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-gray-950">
          Best Online Casinos in {countryName} (2026)
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          Compare online casino brands available in {countryName}. This guide
          focuses on casino experience, user reputation, payment considerations,
          bonuses and overall brand reliability.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-950">
          Top online casinos in {countryName}
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {casinoBrands.map((brand) => {
            const meta = BOOKMAKER_META[brand.slug];

            return (
              <div
                key={brand.slug}
                className="rounded-2xl border border-gray-200 p-4"
              >
                <div className="flex items-center gap-3">
                  {meta?.logo ? (
                    <span
                      className="flex h-12 w-28 items-center justify-center rounded-lg border border-gray-200 p-2"
                      style={{
                        backgroundColor: meta.backgroundColor ?? "#ffffff",
                      }}
                    >
                      <Image
                        src={meta.logo}
                        alt={`${brand.name} logo`}
                        width={112}
                        height={48}
                        className="max-h-8 w-auto object-contain"
                      />
                    </span>
                  ) : null}

                  <div>
                    <h3 className="font-semibold text-gray-950">
                      {brand.name}
                    </h3>
                    <StarRating rating={brand.rating} />
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-700">
                    {getCasinoReview(brand.slug)?.intro ?? brand.intro}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {meta?.url ? (
                    <a
                      href={meta.url}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="inline-flex rounded-xl bg-gray-950 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                    >
                      Visit site
                    </a>
                  ) : null}

                  <Link
                    href={`/casino-reviews/${brand.slug}`}
                    className="inline-flex rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                  >
                    Read review
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {casinoBrands.length === 0 ? (
          <p className="mt-4 text-sm text-gray-600">
            We do not currently have enough casino-specific brand data for{" "}
            {countryName}. You can still compare betting sites available in this
            country.
          </p>
        ) : null}
      </section>

      <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-950">
          Online casinos vs betting sites in {countryName}
        </h2>
        <p className="mt-3 text-sm leading-6 text-gray-700">
          Online casino players usually compare bonuses, game selection,
          withdrawals and payment methods. Sports bettors usually care more
          about odds, betting markets and live betting. Some brands offer both,
          but the best choice depends on how you plan to use the account.
        </p>

        <Link
          href={`/betting-sites/${country}`}
          className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:underline"
        >
          See betting sites in {countryName} →
        </Link>
      </section>

      <p className="mt-8 text-xs leading-5 text-gray-500">
        Gamble responsibly. Casino games involve risk and are not a reliable way
        to make money. Availability, bonuses and payment methods can vary by
        country.
      </p>
    </main>
  );
}