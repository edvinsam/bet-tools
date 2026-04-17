"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, Search, Trophy, Filter, Globe, Info } from "lucide-react";
import { bookmakerMarginData, type Market, type RegionalBookmakerRow } from "@/lib/bookmaker-margin-data";
import {
  bookmakerRegions,
  bookmakerRegionOptions,
  type BookmakerRegion,
} from "@/lib/bookmaker-regions";
import Breadcrumbs from "@/components/Breadcrumbs";

type ComparisonRow = {
  bookmaker_id: string;
  bookmaker_title: string;
  bookmaker_keys: string[];
  markets: Exclude<Market, "all">[];
  bookmaker_regions: BookmakerRegion[];
  samples: number;
  average_margin_percent: number;
};

type ComparisonPageProps = {
  data?: RegionalBookmakerRow[];
};

const regionOptions: { value: "all" | BookmakerRegion; label: string }[] = [
  { value: "all", label: "All regions" },
  ...bookmakerRegionOptions.map((region) => ({
    value: region,
    label: region,
  })),
];

function formatMargin(value: number) {
  return `${value.toFixed(2)}%`;
}

function formatMarket(market: Exclude<Market, "all">) {
  const map: Record<Exclude<Market, "all">, string> = {
    us: "US",
    uk: "UK",
    eu: "EU",
    fr: "France",
    se: "Sweden",
    au: "Australia",
  };

  return map[market];
}

function getMarketBadgeClasses(market: Exclude<Market, "all">) {
  const styles: Record<Exclude<Market, "all">, string> = {
    us: "bg-blue-50 text-blue-700 ring-blue-600/20",
    uk: "bg-red-50 text-red-700 ring-red-600/20",
    eu: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    fr: "bg-violet-50 text-violet-700 ring-violet-600/20",
    se: "bg-amber-50 text-amber-700 ring-amber-600/20",
    au: "bg-cyan-50 text-cyan-700 ring-cyan-600/20",
  };

  return styles[market];
}

function mergeRows(rows: RegionalBookmakerRow[]): ComparisonRow[] {
  const map = new Map<string, ComparisonRow>();

  for (const row of rows) {
    const existing = map.get(row.bookmaker_id);
    const mappedRegions = bookmakerRegions[row.bookmaker_id] ?? [];

    if (!existing) {
      map.set(row.bookmaker_id, {
        bookmaker_id: row.bookmaker_id,
        bookmaker_title: row.bookmaker_title,
        bookmaker_keys: [row.bookmaker_key],
        markets: [row.market],
        bookmaker_regions: mappedRegions,
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

export default function BookmakerComparisonPage({ data = bookmakerMarginData }: ComparisonPageProps) {
  const [selectedRegion, setSelectedRegion] = useState<"all" | BookmakerRegion>("all");  const [search, setSearch] = useState("");

  const filteredRows = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    const mergedRows = mergeRows(data);

    return mergedRows
      .filter((row) => {
        if (selectedRegion === "all") return true;
        return row.bookmaker_regions.includes(selectedRegion);
      })
      .filter((row) => {
        if (!normalizedSearch) return true;

        return (
          row.bookmaker_title.toLowerCase().includes(normalizedSearch) ||
          row.bookmaker_id.toLowerCase().includes(normalizedSearch) ||
          row.bookmaker_keys.some((key) => key.toLowerCase().includes(normalizedSearch))
        );
      })
      .sort((a, b) => a.average_margin_percent - b.average_margin_percent)
      .map((row, index) => ({ ...row, rank: index + 1 }));
  }, [data, search, selectedRegion]);

  const stats = useMemo(() => {
    if (!filteredRows.length) {
      return {
        best: null,
        average: null,
        count: 0,
      };
    }

    const average =
      filteredRows.reduce((sum, row) => sum + row.average_margin_percent, 0) / filteredRows.length;

    return {
      best: filteredRows[0],
      average,
      count: filteredRows.length,
    };
  }, [filteredRows]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Compare bookmakers" }
                ]}
              />

              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Bookmaker Margin Comparison
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Compare average bookmaker margins across regions and rank operators from lowest to
                highest. Lower margins usually mean more competitive prices.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:w-105">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm text-slate-500">Shown</div>
                <div className="mt-1 text-2xl font-semibold text-slate-900">{stats.count}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm text-slate-500">Best margin</div>
                <div className="mt-1 text-2xl font-semibold text-slate-900">
                  {stats.best ? formatMargin(stats.best.average_margin_percent) : "—"}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm text-slate-500">Average</div>
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
                and that the bookmaker is offering more competitive prices. In that sense, margin is
                one of the clearest ways to compare how expensive different betting sites really are.
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                These numbers are most representative of major football mainlines. Margins will
                usually be higher in more obscure leagues, lower-liquidity markets, player props,
                and alternative lines.
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
                    Filter by bookmaker region to narrow the list, or choose all regions to view the top bookmakers internationally. Actual availability and pricing may vary by country.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="relative block">
                  <span className="sr-only">Search bookmaker</span>
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search bookmaker..."
                    className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 sm:w-64"
                  />
                </label>

                <label className="relative block">
                  <span className="sr-only">Filter region</span>
                  <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <select
                    value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value as "all" | BookmakerRegion)}                    className="w-full appearance-none rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-10 text-sm text-slate-900 outline-none transition focus:border-slate-400 sm:w-48"
                  >
                    {regionOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
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
                      No bookmakers matched your filters.
                    </td>
                  </tr>
                ) : (
                  filteredRows.map((row) => {
                    const isTopThree = row.rank <= 3;

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