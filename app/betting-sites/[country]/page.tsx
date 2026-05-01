// app/betting-sites/[country]/page.tsx

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

import { getSportsbookBrandsForLocation } from "@/lib/operatorFilters";

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

function getAvailableBookmakers(country: CountrySlug) {
  const region = getRegionForCountry(country);

  return bookmakerReviews
    .filter((bookmaker) =>
      bookmakerMatchesLocation({
        bookmakerId: bookmaker.slug,
        region,
        country,
      })
    )
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
      title: "Betting Sites",
    };
  }

  const countryName = COUNTRY_LABELS[country];

  return {
    title: `Best Betting Sites in ${countryName} (2026) | Bet Tools`,
    description: `Compare betting sites in ${countryName}. See available sportsbooks, ratings, user reviews, odds, bonuses and betting features.`,
    alternates: {
      canonical: `/betting-sites/${country}`,
    },
  };
}

export default async function BettingSitesCountryPage({ params }: PageProps) {
  const { country } = await params;

  if (!isCountrySlug(country)) {
    notFound();
  }

  const countryName = COUNTRY_LABELS[country];
  const region = getRegionForCountry(country);
  const availableBookmakers = getSportsbookBrandsForLocation({
    country,
    region,
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Betting Sites", href: "/betting-sites" },
          { label: countryName },
        ]}
      />

      <section className="mt-6">
        <p className="mb-3 text-sm font-medium text-emerald-700">
          We may earn a commission if you sign up through links on this page.
          This does not affect our reviews or rankings.
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-gray-950">
          Best Betting Sites in {countryName} (2026)
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          Compare betting sites available in {countryName}, including sportsbook
          ratings, user reputation, betting features and overall bookmaker
          quality. This guide is designed to help you find a reliable betting
          site based on more than just bonuses.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-950">
          Top betting sites in {countryName}
        </h2>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-190 border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-gray-600">
                <th className="py-3 pr-4">Betting site</th>
                <th className="py-3 pr-4">Our rating</th>
                <th className="py-3 pr-4">Best for</th>
                <th className="py-3 pr-4">User reputation</th>
                <th className="py-3 pr-4 text-right">Visit</th>
              </tr>
            </thead>

            <tbody>
              {availableBookmakers.map((bookmaker) => {
                const meta = BOOKMAKER_META[bookmaker.slug];
                const bestFor =
                  bookmaker.quickFacts.find((fact) => fact.label === "Best for")
                    ?.value ?? "Sports betting";

                const reputation =
                  bookmaker.quickFacts.find(
                    (fact) => fact.label === "User reputation"
                  )?.value ?? bookmaker.userReviewSummary?.overallSentiment ?? "Mixed";

                return (
                  <tr
                    key={bookmaker.slug}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <td className="py-4 pr-4">
                      <Link
                        href={`/bookmaker-reviews/${bookmaker.slug}`}
                        className="flex items-center gap-3 font-semibold text-gray-950 hover:underline"
                      >
                        {meta?.logo ? (
                          <span
                            className="flex h-10 w-24 items-center justify-center rounded-lg border border-gray-200 p-2"
                            style={{
                              backgroundColor: meta.backgroundColor ?? "#ffffff",
                            }}
                          >
                            <Image
                              src={meta.logo}
                              alt={`${bookmaker.name} logo`}
                              width={96}
                              height={40}
                              className="max-h-7 w-auto object-contain"
                            />
                          </span>
                        ) : null}
                        <span>{bookmaker.name}</span>
                      </Link>
                    </td>

                    <td className="py-4 pr-4">
                      <StarRating rating={bookmaker.rating} />
                    </td>

                    <td className="py-4 pr-4 text-gray-700">{bestFor}</td>

                    <td className="py-4 pr-4 capitalize text-gray-700">
                      {reputation}
                    </td>

                    <td className="py-4 pr-4 text-right">
                      {meta?.url ? (
                        <a
                          href={meta.url}
                          target="_blank"
                          rel="nofollow sponsored noopener noreferrer"
                          className="inline-flex rounded-xl bg-gray-950 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                        >
                          Visit site
                        </a>
                      ) : (
                        <Link
                          href={`/bookmaker-reviews/${bookmaker.slug}`}
                          className="inline-flex rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                        >
                          Review
                        </Link>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {availableBookmakers.length === 0 ? (
          <p className="mt-4 text-sm text-gray-600">
            We do not currently have enough bookmaker availability data for{" "}
            {countryName}. Check back as we add more markets.
          </p>
        ) : null}
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-950">
            How we rate betting sites
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-700">
            Our rating considers sportsbook quality, odds competitiveness,
            market coverage, usability, reputation, payment experience and
            overall reliability. External customer ratings can be useful, but
            they often reflect complaint-heavy review behavior, so we do not use
            any single source as the full picture.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-950">
            Online betting in {countryName}
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-700">
            The best betting site in {countryName} depends on what you value:
            strong football markets, mobile betting, fast payments, bonuses,
            live betting or broader international sportsbook coverage. Always
            check local rules and bookmaker availability before signing up.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-950">
          Betting sites vs online casinos in {countryName}
        </h2>
        <p className="mt-3 text-sm leading-6 text-gray-700">
          Some betting sites also offer online casino games, but sportsbook and
          casino users often look for different things. Sports bettors usually
          care about odds, market depth and live betting, while casino players
          often compare games, welcome bonuses and payment speed.
        </p>

        <Link
          href={`/online-casinos/${country}`}
          className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:underline"
        >
          See online casinos in {countryName} →
        </Link>
      </section>

      <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-950">
          FAQ: Betting sites in {countryName}
        </h2>

        <div className="mt-5 space-y-5">
          <div>
            <h3 className="font-semibold text-gray-950">
              What is the best betting site in {countryName}?
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              The best option depends on availability, sports coverage, payment
              methods, odds and personal preferences. Our table ranks available
              betting sites using a balanced internal rating.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-950">
              Are betting sites in {countryName} safe?
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              Safety depends on the operator, license, payment setup and local
              rules. Users should check the bookmaker’s terms, verification
              process and withdrawal conditions before depositing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-950">
              Why do user ratings differ so much between platforms?
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              Review platforms often attract complaints after negative
              experiences, while app store ratings can include a broader group
              of everyday users. That is why we show multiple signals rather
              than relying on one rating alone.
            </p>
          </div>
        </div>
      </section>

      <p className="mt-8 text-xs leading-5 text-gray-500">
        Gamble responsibly. Betting involves risk and may not be suitable for
        everyone. Availability, bonuses and payment methods can vary by country.
      </p>
    </main>
  );
}