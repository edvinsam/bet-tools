"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import "flag-icons/css/flag-icons.min.css";
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

type LocationHrefMode = "default" | "low-margin";

type LocationFilterSelectProps = {
  selectedRegion?: RegionSlug;
  selectedCountry?: CountrySlug;
  hrefMode?: LocationHrefMode;
};

type CountryRouteMatch = {
  region: RegionSlug;
  country: CountrySlug;
};

const COUNTRY_CODE_TO_ROUTE: Partial<Record<string, CountryRouteMatch>> = {
  SE: { region: "europe", country: "sweden" },
  GB: { region: "europe", country: "united-kingdom" },
  FR: { region: "europe", country: "france" },
  DE: { region: "europe", country: "germany" },
  IT: { region: "europe", country: "italy" },
  NL: { region: "europe", country: "netherlands" },
  AU: { region: "oceania", country: "australia" },
  US: { region: "north-america", country: "united-states" },
  MX: { region: "north-america", country: "mexico" },
  BR: { region: "south-america", country: "brazil" },
  IN: { region: "asia", country: "india" },
  NG: { region: "africa", country: "nigeria" },
  KE: { region: "africa", country: "kenya" },
  ZA: { region: "africa", country: "south-africa" },
};

function FlagIcon({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  if (!src) {
    return (
      <span className="inline-block h-3.5 w-5 rounded-sm bg-slate-200" />
    );
  }

  return (
    <span className="relative inline-block h-3.5 w-5 overflow-hidden rounded-sm bg-slate-100">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="20px"
        className="object-cover"
      />
    </span>
  );
}

function LocationFlag({
  countryCode,
  regionSrc,
  label,
}: {
  countryCode?: string;
  regionSrc?: string;
  label: string;
}) {
  if (countryCode) {
    return (
      <span
        className={`fi fi-${countryCode.toLowerCase()} inline-block h-3 w-4 rounded-sm overflow-hidden`}
        aria-hidden="true"
        title={label}
      />
    );
  }

  if (regionSrc) {
    return (
      <span className="relative inline-block h-3 w-4 overflow-hidden rounded-sm bg-slate-100">
        <Image
          src={regionSrc}
          alt=""
          fill
          sizes="16px"
          className="object-contain"
        />
      </span>
    );
  }

  return <span className="inline-block h-3 w-4 rounded-sm bg-slate-200" />;
}

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
  hrefMode = "default",
}: LocationFilterSelectProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState("");

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

  function getHrefForLocation(region?: RegionSlug, country?: CountrySlug) {
    if (hrefMode === "low-margin") {
      if (country) {
        return `/bookmaker-reviews/low-margin-bookmakers/${country}`;
      }

      return "/bookmaker-reviews/best-low-margin-bookmakers";
    }

    return getLocationHref(region, country);
  }

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

  function getSelectedLocation() {
    if (selectedCountry) {
      const country = COUNTRY_OPTIONS.find((c) => c.slug === selectedCountry);
      return {
        label: COUNTRY_LABELS[selectedCountry],
        countryCode: country?.flagCode,
        regionSrc: undefined,
      };
    }

    if (selectedRegion) {
      const region = REGION_OPTIONS.find((r) => r.slug === selectedRegion);
      return {
        label: REGION_LABELS[selectedRegion],
        countryCode: undefined,
        regionSrc: region?.flagSrc,
      };
    }

    return {
      label: "All locations",
      countryCode: undefined,
      regionSrc: "/logos/globe.svg",
    };
  }

  const selectedLocation = getSelectedLocation();

  function navigateTo(region?: RegionSlug, country?: CountrySlug) {
    setOpen(false);
    setQuery("");
    setLocationError("");
    router.push(getHrefForLocation(region, country));
  }

  async function handleUseMyLocation() {
    setLocationError("");
    setIsLocating(true);

    try {
      const module = await import("@/lib/bigdatacloud_reverse_geocode.mjs");
      const BDCReverseGeocode = module.default;

      const geo = new BDCReverseGeocode();
      const location = (await geo.detect()) as {
        countryCode?: string;
      };

      setIsLocating(false);

      const countryCode = location?.countryCode?.toUpperCase?.();

      if (!countryCode) {
        setLocationError("Could not determine your country.");
        return;
      }

      const match = COUNTRY_CODE_TO_ROUTE[countryCode];

      if (!match) {
        setLocationError("Your country is not supported yet.");
        return;
      }

      navigateTo(match.region, match.country);
    } catch (error) {
      console.error("Location detection failed:", error);
      setIsLocating(false);
      setLocationError("Could not get your location.");
    }
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
          <LocationFlag
            countryCode={selectedLocation.countryCode}
            regionSrc={selectedLocation.regionSrc}
            label={selectedLocation.label}
          />
          <span>{selectedLocation.label}</span>
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
                onClick={handleUseMyLocation}
                disabled={isLocating}
                className="flex w-full items-center rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="font-medium">
                  {isLocating ? "Detecting your location..." : "Use my location"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => navigateTo()}
                className="mt-1 flex w-full items-center rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
              >
              <span className="font-medium">All locations</span>
              </button>

              {locationError && (
                <div className="px-3 pt-1 text-xs text-rose-600">{locationError}</div>
              )}
            </div>

            {filteredRegions.map((region) => (
              <button
                key={region.slug}
                type="button"
                onClick={() => navigateTo(region.slug)}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
              >
                <LocationFlag regionSrc={region.flagSrc} label={region.label} />
                <span>{region.label}</span>
              </button>
            ))}

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
                    <span className="flex items-center gap-2">
                      <LocationFlag countryCode={country.flagCode} label={country.label} /> 
                    <span>{country.label}</span>
                    </span>

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