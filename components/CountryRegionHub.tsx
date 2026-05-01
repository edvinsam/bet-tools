"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";
import { 
    COUNTRY_FLAG_CODES,
    CountrySlug,
} from "@/lib/bookmaker-locations";

type CountryRegionHubProps = {
  countriesByRegion: Record<string, CountrySlug[]>;
  countryLabels: Record<string, string>;
  basePath: string;
};

const INITIAL_VISIBLE_COUNTRIES = 8;

const REGION_LABELS: Record<string, string> = {
  europe: "Europe",
  "north-america": "North America",
  "south-america": "South America",
  asia: "Asia",
  africa: "Africa",
  oceania: "Oceania",
};

const REGION_FLAG_SRC: Record<string, string> = {
  europe: "/flags/europe.svg",
  "north-america": "/flags/northamerica.svg",
  "south-america": "/flags/southamerica.svg",
  asia: "/flags/asia.svg",
  africa: "/flags/africa.svg",
  oceania: "/flags/oceania.svg",
};

function getRegionLabel(region: string) {
  return REGION_LABELS[region] ?? region.replaceAll("-", " ");
}

function CountryFlag({
  country,
  label,
}: {
  country: CountrySlug;
  label: string;
}) {
  const code = COUNTRY_FLAG_CODES[country];

  if (!code) {
    return <span className="inline-block h-3.5 w-5 rounded-sm bg-slate-200" />;
  }

  return (
    <span
      className={`fi fi-${code} inline-block h-3.5 w-5 overflow-hidden rounded-sm`}
      aria-hidden="true"
      title={label}
    />
  );
}

export default function CountryRegionHub({
  countriesByRegion,
  countryLabels,
  basePath,
}: CountryRegionHubProps) {
  const [expandedRegions, setExpandedRegions] = useState<Record<string, boolean>>(
    {}
  );

  const sortedRegions = useMemo(() => {
    return Object.entries(countriesByRegion).map(([region, countries]) => ({
      region,
      countries: [...countries].sort((a, b) =>
        (countryLabels[a] ?? a).localeCompare(countryLabels[b] ?? b)
      ),
    }));
  }, [countriesByRegion, countryLabels]);

  return (
    <section className="mt-8 space-y-5">
      {sortedRegions.map(({ region, countries }) => {
        const isExpanded = expandedRegions[region] ?? false;
        const visibleCountries = isExpanded
          ? countries
          : countries.slice(0, INITIAL_VISIBLE_COUNTRIES);
        const hiddenCount = countries.length - visibleCountries.length;

        return (
          <div
            key={region}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {REGION_FLAG_SRC[region] && (
                  <span className="relative inline-block h-8 w-8 overflow-hidden rounded-full bg-slate-100">
                    <Image
                      src={REGION_FLAG_SRC[region]}
                      alt=""
                      fill
                      sizes="32px"
                      className="object-contain"
                    />
                  </span>
                )}

                <div>
                  <h2 className="text-xl font-semibold text-slate-950">
                    {getRegionLabel(region)}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {countries.length} countries
                  </p>
                </div>
              </div>

              {countries.length > INITIAL_VISIBLE_COUNTRIES && (
                <button
                  type="button"
                  onClick={() =>
                    setExpandedRegions((prev) => ({
                      ...prev,
                      [region]: !isExpanded,
                    }))
                  }
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  {isExpanded
                    ? "Show fewer"
                    : `Show ${countries.length - INITIAL_VISIBLE_COUNTRIES} more`}
                </button>
              )}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {visibleCountries.map((country) => {
                const label = countryLabels[country] ?? country;
                
                return (
                  <Link
                    key={country}
                    href={`${basePath}/${country}`}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-slate-950"
                  >
                    <CountryFlag country={country} label={label} />
                    <span>{label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}