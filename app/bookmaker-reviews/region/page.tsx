import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  COUNTRIES_BY_REGION,
  REGION_LABELS,
  type RegionSlug,
} from "@/lib/bookmaker-locations";

export const metadata = {
  title: "Best Bookmakers by Region",
  description:
    "Browse bookmaker review pages by region and compare betting sites across Europe, Africa, Asia, North America, South America and Oceania.",
  alternates: {
    canonical: "/bookmaker-reviews/region",
  },
};

export default function BookmakerRegionHubPage() {
  const regions = Object.keys(REGION_LABELS) as RegionSlug[];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Bookmaker Reviews", href: "/bookmaker-reviews" },
          { label: "Regions" },
        ]}
      />

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Regional bookmaker reviews
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Best Bookmakers by Region
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700">
          Browse bookmaker review pages by region. Regional pages help compare
          betting sites across broader markets before narrowing down to specific
          countries.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {regions.map((region) => (
          <Link
            key={region}
            href={`/bookmaker-reviews/region/${region}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-50"
          >
            <p className="text-sm font-medium text-slate-500">Region</p>

            <h2 className="mt-2 text-xl font-bold text-slate-950">
              {REGION_LABELS[region]}
            </h2>

            <p className="mt-3 text-sm text-slate-600">
              Compare bookmakers available across {REGION_LABELS[region]}.
            </p>

            <p className="mt-4 text-sm font-semibold text-slate-950">
              {COUNTRIES_BY_REGION[region].length} countries
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}