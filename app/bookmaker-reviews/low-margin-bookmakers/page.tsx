import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  COUNTRIES_BY_REGION,
  COUNTRY_LABELS,
  REGION_LABELS,
  type CountrySlug,
  type RegionSlug,
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
    <main className="mx-auto max-w-6xl px-4 py-8">
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

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Country margin comparison
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Low Margin Bookmakers by Country
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700">
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

      <section className="mt-8 space-y-6">
        {(Object.entries(COUNTRIES_BY_REGION) as [
          RegionSlug,
          CountrySlug[],
        ][]).map(([region, countries]) => (
          <section
            key={region}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Region</p>

                <h2 className="text-xl font-bold text-slate-950">
                  {REGION_LABELS[region]}
                </h2>
              </div>

              <Link
                href={`/bookmaker-reviews/region/${region}`}
                className="text-sm font-semibold text-slate-700 underline hover:text-slate-950"
              >
                View {REGION_LABELS[region]} bookmakers
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {countries.map((country) => (
                <Link
                  key={country}
                  href={`/bookmaker-reviews/low-margin-bookmakers/${country}`}
                  className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 hover:bg-slate-50"
                >
                  {COUNTRY_LABELS[country]}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}