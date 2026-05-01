// app/online-casinos/page.tsx

import Breadcrumbs from "@/components/Breadcrumbs";
import CountryRegionHub from "@/components/CountryRegionHub";
import { COUNTRIES_BY_REGION, COUNTRY_LABELS } from "@/lib/bookmaker-locations";

export const metadata = {
  title: "Online Casinos by Country | Bet Tools",
  description:
    "Browse online casino pages by country and compare casino brands, bonuses, ratings, payment methods and user reputation.",
  alternates: {
    canonical: "/online-casinos",
  },
};

export default function OnlineCasinosHubPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Online Casinos" }]}
      />

      <section className="mt-6 rounded-3xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-blue-600">
          Online casinos by location
        </p>

        <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Online Casinos by Country
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Compare online casino options by country. Browse casino brands,
          ratings, bonus considerations, payment methods and links to detailed
          reviews.
        </p>
      </section>

      <CountryRegionHub
        countriesByRegion={COUNTRIES_BY_REGION}
        countryLabels={COUNTRY_LABELS}
        basePath="/online-casinos"
      />
    </main>
  );
}