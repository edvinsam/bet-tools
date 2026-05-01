import Breadcrumbs from "@/components/Breadcrumbs";
import CountryRegionHub from "@/components/CountryRegionHub";
import {
  COUNTRIES_BY_REGION,
  COUNTRY_LABELS,
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
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Bookmaker Reviews", href: "/bookmaker-reviews" },
          { label: "Countries" },
        ]}
      />

      <section className="mt-6 rounded-3xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-blue-600">
          Country bookmaker reviews
        </p>

        <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Best Bookmakers by Country
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Browse bookmaker review pages by country. Each country page filters
          our bookmaker reviews by availability, helping you compare betting
          sites based on odds, margins, reputation, usability and betting
          features.
        </p>
      </section>

      <CountryRegionHub
        countriesByRegion={COUNTRIES_BY_REGION}
        countryLabels={COUNTRY_LABELS}
        basePath="/bookmaker-reviews/country"
      />
    </main>
  );
}