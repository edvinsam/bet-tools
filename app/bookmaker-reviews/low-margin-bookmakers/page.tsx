import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CountryRegionHub from "@/components/CountryRegionHub";
import {
  COUNTRIES_BY_REGION,
  COUNTRY_LABELS,
} from "@/lib/bookmaker-locations";

export const metadata = {
  title: "Low Margin Bookmakers by Country",
  description:
    "Browse low margin bookmaker comparison pages by country and find betting sites with lower average margins and more competitive odds.",
  alternates: {
    canonical: "/bookmaker-reviews/low-margin-bookmakers",
  },
};

export default function LowMarginBookmakersCountryHubPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Bookmaker Reviews", href: "/bookmaker-reviews" },
          {
            label: "Best Low Margin Bookmakers",
            href: "/bookmaker-reviews/best-low-margin-bookmakers",
          },
          { label: "Countries" },
        ]}
      />

      <section className="mt-6 rounded-3xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-blue-600">
          Country margin comparison
        </p>

        <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Low Margin Bookmakers by Country
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Browse low margin bookmaker pages by country. Each page compares
          betting sites available in that location by average bookmaker margin,
          helping you find sportsbooks with more competitive odds and better
          long-term pricing.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm">
          <Link
            href="/bookmaker-reviews/best-low-margin-bookmakers"
            className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 hover:bg-slate-200"
          >
            Global low margin ranking
          </Link>

          <Link
            href="/bookmaker-reviews/country"
            className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 hover:bg-slate-200"
          >
            Best bookmakers by country
          </Link>
        </div>
      </section>

      <CountryRegionHub
        countriesByRegion={COUNTRIES_BY_REGION}
        countryLabels={COUNTRY_LABELS}
        basePath="/bookmaker-reviews/low-margin-bookmakers"
      />
    </main>
  );
}