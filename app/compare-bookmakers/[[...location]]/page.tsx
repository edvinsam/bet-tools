import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";
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

import BookmakerComparisonTable from "@/components/BookmakerComparisonTable";

type ComparisonRow = {
  bookmaker_id: string;
  bookmaker_title: string;
  bookmaker_keys: string[];
  markets: Exclude<Market, "all">[];
  regions: RegionSlug[];
  availableCountries: CountrySlug[];
  samples: number;
  average_margin_percent: number;
  logo: string;
  url: string;
  backgroundColor?: string;
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

export async function generateMetadata({
  params,
}: ComparisonPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { selectedRegion, selectedCountry } = parseLocation(resolvedParams.location);

  const title = selectedCountry
    ? `Best Bookmakers in ${COUNTRY_LABELS[selectedCountry]} by Margin`
    : selectedRegion
      ? `Best Bookmakers in ${REGION_LABELS[selectedRegion]} by Margin`
      : "Bookmaker Margin Comparison by Region and Country";

  const description = selectedCountry
    ? `Compare bookmaker margins for sportsbooks available in ${COUNTRY_LABELS[selectedCountry]}. See which bookmakers offer the lowest average margin and more competitive odds.`
    : selectedRegion
      ? `Compare bookmaker margins across ${REGION_LABELS[selectedRegion]}. Rank sportsbooks by average margin and identify which operators offer sharper prices.`
      : `Compare bookmaker margins across regions and countries. Rank bookmakers by average margin and identify sportsbooks with more competitive odds.`;

  const canonical = selectedCountry && selectedRegion
    ? `https://bet-tools.com/compare-bookmakers/${selectedRegion}/${selectedCountry}`
    : selectedRegion
      ? `https://bet-tools.com/compare-bookmakers/${selectedRegion}`
      : `https://bet-tools.com/compare-bookmakers`;

  const mergedRows = mergeRows(bookmakerMarginData);

  const filteredRows = mergedRows
    .filter((row) => {
      if (!selectedRegion) return true;
      return row.regions.includes(selectedRegion);
    })
    .filter((row) => {
      if (!selectedCountry) return true;
      return row.availableCountries.includes(selectedCountry);
    });

  const shouldNoindex = selectedCountry && filteredRows.length < 5;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
    },
    twitter: {
      title,
      description,
    },
    robots: shouldNoindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
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
        logo: row.logo,
        url: row.url,
        backgroundColor: row.backgroundColor
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

    // Keep the first non-fallback-looking logo/url if possible
    if (!existing.logo && row.logo) {
      existing.logo = row.logo;
    }

    if ((!existing.url || existing.url === "#") && row.url) {
      existing.url = row.url;
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

function getLocationSummary({
  selectedRegion,
  selectedCountry,
  stats,
  filteredRows,
}: {
  selectedRegion?: RegionSlug;
  selectedCountry?: CountrySlug;
  stats: {
    best: ComparisonRow | null;
    average: number | null;
    count: number;
  };
  filteredRows: ComparisonRow[];
}) {
  if (!stats.count || !stats.best || typeof stats.average !== "number") {
    return null;
  }

  const bestTitle = stats.best.bookmaker_title;
  const bestMargin = formatMargin(stats.best.average_margin_percent);
  const averageMargin = formatMargin(stats.average);

  if (selectedCountry) {
    return [
      `${COUNTRY_LABELS[selectedCountry]} currently shows ${stats.count} bookmakers in this comparison.`,
      `${bestTitle} has the lowest average margin on this page at ${bestMargin}, while the average across all listed bookmakers is ${averageMargin}.`,
      `Lower bookmaker margins generally mean more competitive odds, which is why comparing margin is a useful shortcut when evaluating sportsbook pricing in ${COUNTRY_LABELS[selectedCountry]}.`,
    ];
  }

  if (selectedRegion) {
    return [
      `${REGION_LABELS[selectedRegion]} currently shows ${stats.count} bookmakers in this comparison.`,
      `${bestTitle} has the lowest average margin on this page at ${bestMargin}, while the average across all listed bookmakers is ${averageMargin}.`,
      `This regional comparison helps show which bookmakers tend to offer sharper pricing across ${REGION_LABELS[selectedRegion]}.`,
    ];
  }

  return [
    `This page compares ${stats.count} bookmakers across all supported locations.`,
    `${bestTitle} currently has the lowest average margin at ${bestMargin}, while the average across all listed bookmakers is ${averageMargin}.`,
    `Bookmaker margin is one of the simplest ways to compare odds quality, because lower overround usually means less value lost to the house.`,
  ];
}

function getTopBookmakersText(rows: ComparisonRow[]) {
  if (!rows.length) return null;

  const topRows = rows.slice(0, 3);
  const names = topRows.map(
    (row) => `${row.bookmaker_title} (${formatMargin(row.average_margin_percent)})`
  );

  if (names.length === 1) {
    return `${names[0]} is currently the only bookmaker shown in this filtered comparison.`;
  }

  if (names.length === 2) {
    return `The top bookmakers by lowest average margin are ${names[0]} and ${names[1]}.`;
  }

  return `The top bookmakers by lowest average margin are ${names[0]}, ${names[1]}, and ${names[2]}.`;
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

  const summaryParagraphs = getLocationSummary({
    selectedRegion,
    selectedCountry,
    stats,
    filteredRows,
  });

  const topBookmakersText = getTopBookmakersText(filteredRows);

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

      {summaryParagraphs && (
        <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              {selectedCountry
                ? `Bookmaker overview for ${COUNTRY_LABELS[selectedCountry]}`
                : selectedRegion
                  ? `Bookmaker overview for ${REGION_LABELS[selectedRegion]}`
                  : "Bookmaker overview"}
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600">
              {summaryParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {topBookmakersText && <p>{topBookmakersText}</p>}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <BookmakerComparisonTable
          rows={filteredRows}
          selectedRegion={selectedRegion}
          selectedCountry={selectedCountry}
        />
      </section>
    </main>
  );
}