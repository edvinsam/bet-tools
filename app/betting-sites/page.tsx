// app/betting-sites/page.tsx

import Breadcrumbs from "@/components/Breadcrumbs";
import CountryRegionHub from "@/components/CountryRegionHub";
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
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Betting Sites" }]}
      />

      <section className="mt-6 rounded-3xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-blue-600">
          Betting sites by location
        </p>

        <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Best Betting Sites by Country
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Compare betting sites and sportsbooks by country. Find available
          bookmakers, ratings, user reputation summaries and links to detailed
          reviews.
        </p>
      </section>

      <CountryRegionHub
        countriesByRegion={COUNTRIES_BY_REGION}
        countryLabels={COUNTRY_LABELS}
        basePath="/betting-sites"
      />
    </main>
  );
}