import Link from "next/link";
import { notFound } from "next/navigation";
import { Search, Trophy, Info } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFilterSelect from "@/components/LocationFilterSelect";
import {
  bookmakerMarginData,
  type Market,
  type RegionalBookmakerRow,
} from "@/lib/bookmaker-margin-data";
import {
  bookmakerLocations,
  COUNTRY_LABELS,
  COUNTRIES_BY_REGION,
  REGION_LABELS,
  getCountryRegion,
  isCountrySlug,
  isRegionSlug,
  type CountrySlug,
  type RegionSlug,
} from "@/lib/bookmaker-locations";

type ComparisonRow = {
  bookmaker_id: string;
  bookmaker_title: string;
  bookmaker_keys: string[];
  markets: Exclude<Market, "all">[];
  regions: RegionSlug[];
  availableCountries: CountrySlug[];
  samples: number;
  average_margin_percent: number;
  rank?: number;
};

type ComparisonPageProps = {
  data?: RegionalBookmakerRow[];
  params: Promise<{
    location?: string[];
  }>;
};

function formatMargin(value: number) {
  return `${value.toFixed(2)}%`;
}

function mergeRows(rows: RegionalBookmakerRow[]): ComparisonRow[] {
  const map = new Map<string, ComparisonRow>();

  for (const row of rows) {
    const existing = map.get(row.bookmaker_id);
    const locationMeta = bookmakerLocations[row.bookmaker_id] ?? {
      regions: [],
      availableCountries: [],
    };

    if (!existing) {
      map.set(row.bookmaker_id, {
        bookmaker_id: row.bookmaker_id,
        bookmaker_title: row.bookmaker_title,
        bookmaker_keys: [row.bookmaker_key],
        markets: [row.market],
        regions: locationMeta.regions,
        availableCountries: locationMeta.availableCountries,
        samples: row.samples,
        average_margin_percent: row.average_margin_percent,
      });
      continue;
    }

    const totalSamples = existing.samples + row.samples;
    const weightedAverage =
      (existing.average_margin_percent * existing.samples +
        row.average_margin_percent * row.samples) /
      totalSamples;

    existing.samples = totalSamples;
    existing.average_margin_percent = weightedAverage;

    if (!existing.bookmaker_keys.includes(row.bookmaker_key)) {
      existing.bookmaker_keys.push(row.bookmaker_key);
    }

    if (!existing.markets.includes(row.market)) {
      existing.markets.push(row.market);
    }
  }

  return Array.from(map.values()).map((row) => ({
    ...row,
    markets: [...row.markets].sort(),
  }));
}

function parseLocation(location?: string[]) {
  if (!location || location.length === 0) {
    return {
      selectedRegion: undefined,
      selectedCountry: undefined,
    };
  }

  if (location.length === 1) {
    const [region] = location;
    if (!isRegionSlug(region)) notFound();

    return {
      selectedRegion: region,
      selectedCountry: undefined,
    };
  }

  if (location.length === 2) {
    const [region, country] = location;

    if (!isRegionSlug(region) || !isCountrySlug(country)) {
      notFound();
    }

    const actualRegion = getCountryRegion(country);
    if (actualRegion !== region) {
      notFound();
    }

    return {
      selectedRegion: region,
      selectedCountry: country,
    };
  }

  notFound();
}

export function generateStaticParams() {
  const params: { location?: string[] }[] = [{ location: [] }];

  for (const [region, countries] of Object.entries(COUNTRIES_BY_REGION)) {
    params.push({ location: [region] });

    for (const country of countries) {
      params.push({ location: [region, country] });
    }
  }

  return params;
}

export default async function BookmakerComparisonPage({
  data = bookmakerMarginData,
  params,
}: ComparisonPageProps) {
  const resolvedParams = await params;
  const { selectedRegion, selectedCountry } = parseLocation(resolvedParams.location);

  const mergedRows = mergeRows(data);

  const filteredRows = mergedRows
    .filter((row) => {
      if (!selectedRegion) return true;
      return row.regions.includes(selectedRegion);
    })
    .filter((row) => {
      if (!selectedCountry) return true;
      return row.availableCountries.includes(selectedCountry);
    })
    .sort((a, b) => a.average_margin_percent - b.average_margin_percent)
    .map((row, index) => ({ ...row, rank: index + 1 }));

  const stats = (() => {
    if (!filteredRows.length) {
      return {
        best: null,
        average: null,
        count: 0,
      };
    }

    const average =
      filteredRows.reduce((sum, row) => sum + row.average_margin_percent, 0) /
      filteredRows.length;

    return {
      best: filteredRows[0],
      average,
      count: filteredRows.length,
    };
  })();

  const heading = selectedCountry
    ? `Bookmaker Margin Comparison in ${COUNTRY_LABELS[selectedCountry]}`
    : selectedRegion
      ? `Bookmaker Margin Comparison in ${REGION_LABELS[selectedRegion]}`
      : "Bookmaker Margin Comparison";

  const description = selectedCountry
    ? `Compare average bookmaker margins for bookmakers available in ${COUNTRY_LABELS[selectedCountry]}. Lower margins usually mean more competitive odds.`
    : selectedRegion
      ? `Compare average bookmaker margins across ${REGION_LABELS[selectedRegion]} and rank operators from lowest to highest. Lower margins usually mean more competitive prices.`
      : "Compare average bookmaker margins across regions and rank operators from lowest to highest. Lower margins usually mean more competitive prices.";

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Compare bookmakers", href: "/compare-bookmakers" },
  ];

  if (selectedRegion) {
    breadcrumbs.push({
      label: REGION_LABELS[selectedRegion],
      href: `/compare-bookmakers/${selectedRegion}`,
    });
  }

  if (selectedCountry && selectedRegion) {
    breadcrumbs.push({
      label: COUNTRY_LABELS[selectedCountry],
      href: `/compare-bookmakers/${selectedRegion}/${selectedCountry}`,
    });
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Breadcrumbs items={breadcrumbs} />

              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {heading}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:w-[24rem] xl:w-104">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm whitespace-nowrap text-slate-500">Shown</div>
                <div className="mt-1 text-2xl font-semibold text-slate-900">{stats.count}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm whitespace-nowrap text-slate-500">Best margin</div>
                <div className="mt-1 text-2xl font-semibold text-slate-900">
                  {stats.best ? formatMargin(stats.best.average_margin_percent) : "—"}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm whitespace-nowrap text-slate-500">Average</div>
                <div className="mt-1 text-2xl font-semibold text-slate-900">
                  {typeof stats.average === "number" ? formatMargin(stats.average) : "—"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-2xl bg-slate-100 p-2">
              <Info className="h-5 w-5 text-slate-700" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">How this was calculated</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                These rankings are based on the average margin from sampled Premier League 1X2 main
                markets. For each bookmaker, the overround was calculated from the listed decimal
                odds and then averaged across the available match samples from selected bookmaker markets.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                For bettors, this is important because bookmaker margin is a direct cost built into
                the odds. A lower margin generally means less expected value is lost to the house
                and that the bookmaker is offering more competitive prices.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Actual bookmaker availability may vary by country and regulation can change over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-4 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Rankings</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Filter by region or country to narrow the list and view bookmakers available in that location.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="relative block">
                  <span className="sr-only">Search bookmaker</span>
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    placeholder="Search bookmaker..."
                    className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 sm:w-64"
                    disabled
                  />
                </label>

                <LocationFilterSelect
                  selectedRegion={selectedRegion}
                  selectedCountry={selectedCountry}
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                    Rank
                  </th>
                  <th className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                    Bookmaker
                  </th>
                  <th className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                    Avg margin
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-4 py-16 text-center text-sm text-slate-500 sm:px-6">
                      No bookmakers matched this location.
                    </td>
                  </tr>
                ) : (
                  filteredRows.map((row) => {
                    const isTopThree = (row.rank ?? 0) <= 3;

                    return (
                      <tr key={`${row.bookmaker_id}-${row.rank}`} className="group">
                        <td className="border-b border-slate-100 px-4 py-4 sm:px-6">
                          <div className="flex items-center gap-2">
                            <div
                              className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
                                isTopThree
                                  ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20"
                                  : "bg-slate-100 text-slate-700"
                              }`}
                            >
                              {row.rank}
                            </div>
                            {row.rank === 1 && <Trophy className="h-4 w-4 text-amber-500" />}
                          </div>
                        </td>

                        <td className="border-b border-slate-100 px-4 py-4 sm:px-6">
                          <div className="font-medium text-slate-900">{row.bookmaker_title}</div>
                        </td>

                        <td className="border-b border-slate-100 px-4 py-4 text-right sm:px-6">
                          <span className="text-base font-semibold text-slate-900">
                            {formatMargin(row.average_margin_percent)}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}