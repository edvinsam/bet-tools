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
  title: "Best Bookmakers by Country",
  description:
    "Browse bookmaker review pages by country and compare betting sites based on availability, odds, margins, reputation and betting features.",
  alternates: {
    canonical: "/bookmaker-reviews/country",
  },
};

export default function BookmakerCountryHubPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Bookmaker Reviews", href: "/bookmaker-reviews" },
          { label: "Countries" },
        ]}
      />

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Country bookmaker reviews
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Best Bookmakers by Country
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700">
          Browse bookmaker review pages by country. Each country page filters
          our bookmaker reviews by availability, helping you compare betting
          sites based on odds, margins, reputation, usability and betting
          features.
        </p>
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
                  href={`/bookmaker-reviews/country/${country}`}
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