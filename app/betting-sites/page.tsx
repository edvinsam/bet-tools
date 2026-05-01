// app/betting-sites/page.tsx

import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COUNTRIES_BY_REGION, COUNTRY_LABELS } from "@/lib/bookmaker-locations";

export const metadata = {
  title: "Best Betting Sites by Country | Bet Tools",
  description:
    "Browse betting sites by country and compare sportsbooks based on ratings, availability, user reputation and betting features.",
  alternates: {
    canonical: "/betting-sites",
  },
};

export default function BettingSitesHubPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Betting Sites" }]}
      />

      <section className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-950">
          Best Betting Sites by Country
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          Compare betting sites and sportsbooks by country. Find available
          bookmakers, ratings, user reputation summaries and links to detailed
          reviews.
        </p>
      </section>

      <section className="mt-8 space-y-8">
        {Object.entries(COUNTRIES_BY_REGION).map(([region, countries]) => (
          <div
            key={region}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold capitalize text-gray-950">
              {region.replaceAll("-", " ")}
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {countries.map((country) => (
                <Link
                  key={country}
                  href={`/betting-sites/${country}`}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-800 hover:border-gray-300 hover:bg-gray-50"
                >
                  {COUNTRY_LABELS[country]}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}