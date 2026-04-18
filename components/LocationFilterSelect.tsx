"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, MapPin, Search } from "lucide-react";
import {
  COUNTRY_LABELS,
  COUNTRY_OPTIONS,
  REGION_LABELS,
  REGION_OPTIONS,
  REGION_SEARCH_ALIASES,
  COUNTRY_SEARCH_ALIASES,
  getLocationHref,
  type CountrySlug,
  type RegionSlug,
} from "@/lib/bookmaker-locations";

type LocationFilterSelectProps = {
  selectedRegion?: RegionSlug;
  selectedCountry?: CountrySlug;
};

function matchesSearch(
  value: string,
  labelCandidates: string[],
  aliasCandidates: string[]
) {
  const normalized = value.trim().toLowerCase();
  if (!normalized) return true;

  const matchesLabel = labelCandidates.some((candidate) =>
    candidate.toLowerCase().includes(normalized)
  );

  const matchesAlias = aliasCandidates.some(
    (candidate) => candidate.toLowerCase() === normalized
  );

  return matchesLabel || matchesAlias;
}

export default function LocationFilterSelect({
  selectedRegion,
  selectedCountry,
}: LocationFilterSelectProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return COUNTRY_OPTIONS;

    return COUNTRY_OPTIONS.filter((country) =>
        matchesSearch(
        normalized,
        [country.label, country.slug],
        COUNTRY_SEARCH_ALIASES[country.slug] ?? []
        )
    );
  }, [query]);

  const filteredRegions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return REGION_OPTIONS;

    return REGION_OPTIONS.filter((region) =>
        matchesSearch(
        normalized,
        [region.label, region.slug],
        REGION_SEARCH_ALIASES[region.slug] ?? []
        )
    ); 
  }, [query]);

  function getSelectedLabel() {
    if (selectedCountry) return COUNTRY_LABELS[selectedCountry];
    if (selectedRegion) return REGION_LABELS[selectedRegion];
    return "All locations";
  }

  function navigateTo(region?: RegionSlug, country?: CountrySlug) {
    setOpen(false);
    setQuery("");
    router.push(getLocationHref(region, country));
  }

  return (
    <div ref={containerRef} className="relative w-full sm:w-72">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition hover:border-slate-300"
      >
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-slate-400" />
          {getSelectedLabel()}
        </span>
        <ChevronDown className="h-4 w-4 text-slate-400" />
      </button>

      {open && (
        <div className="absolute right-0 z-30 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <div className="border-b border-slate-200 p-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search region or country..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
              />
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto p-2">
            <div className="mb-2">
              <button
                type="button"
                onClick={() => navigateTo()}
                className="flex w-full items-center rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
              >
                <span className="font-medium">My location</span>
              </button>
            </div>

            {filteredRegions.length > 0 && (
              <div className="mb-2">
                <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Regions
                </div>
                {filteredRegions.map((region) => (
                  <button
                    key={region.slug}
                    type="button"
                    onClick={() => navigateTo(region.slug)}
                    className="flex w-full items-center rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                  >
                    {region.label}
                  </button>
                ))}
              </div>
            )}

            {filteredCountries.length > 0 && (
              <div>
                <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Countries
                </div>
                {filteredCountries.map((country) => (
                  <button
                    key={country.slug}
                    type="button"
                    onClick={() => navigateTo(country.region, country.slug)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                  >
                    <span>{country.label}</span>
                    <span className="text-xs text-slate-400">
                      {REGION_LABELS[country.region]}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}