"use client";

import { useMemo, useState } from "react";
import { Search, Trophy } from "lucide-react";
import LocationFilterSelect from "@/components/LocationFilterSelect";
import type { CountrySlug, RegionSlug } from "@/lib/bookmaker-locations";

type ComparisonRow = {
  bookmaker_id: string;
  bookmaker_title: string;
  bookmaker_keys: string[];
  average_margin_percent: number;
  rank?: number;
};

type BookmakerComparisonTableProps = {
  rows: ComparisonRow[];
  selectedRegion?: RegionSlug;
  selectedCountry?: CountrySlug;
};

function formatMargin(value: number) {
  return `${value.toFixed(2)}%`;
}

export default function BookmakerComparisonTable({
  rows,
  selectedRegion,
  selectedCountry,
}: BookmakerComparisonTableProps) {
  const [search, setSearch] = useState("");

  const filteredRows = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return rows
      .filter((row) => {
        if (!normalizedSearch) return true;

        return (
          row.bookmaker_title.toLowerCase().includes(normalizedSearch) ||
          row.bookmaker_id.toLowerCase().includes(normalizedSearch) ||
          row.bookmaker_keys.some((key) => key.toLowerCase().includes(normalizedSearch))
        );
      })
      .map((row, index) => ({
        ...row,
        rank: index + 1,
      }));
  }, [rows, search]);

  return (
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search bookmaker..."
                className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 sm:w-64"
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
                  No bookmakers matched your search.
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
  );
}