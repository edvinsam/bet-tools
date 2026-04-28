"use client";

import { useState } from "react";
import {
  COUNTRY_LABELS,
  REGION_LABELS,
  type CountrySlug,
  type RegionSlug,
} from "@/lib/bookmaker-locations";
import type { BookmakerAvailability } from "@/lib/bookmaker-availability";

type Props = {
  availability: BookmakerAvailability;
};

function unique<T>(values: T[]) {
  return values.filter((value, index, array) => array.indexOf(value) === index);
}

export default function BookmakerAvailabilityCard({ availability }: Props) {
  const [expanded, setExpanded] = useState(false);

  const listedCountries = unique([
    ...(availability.licensedCountries ?? []),
  ]);

  const listedRegions = availability.regions;

  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="text-sm text-slate-500">Availability</p>

      <p className="mt-1 text-xl font-semibold text-slate-950">
        {listedCountries.length > 0
          ? listedCountries.length
          : listedRegions.length}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {listedCountries.length > 0 ? "listed countries" : "listed regions"}
      </p>

      <p className="mt-2 text-xs capitalize text-slate-500">
        Confidence: {availability.confidence}
      </p>

      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="mt-3 text-xs font-semibold text-slate-950 underline"
      >
        {expanded ? "Hide availability" : "View availability"}
      </button>

      {expanded && (
        <div className="mt-3 space-y-3 border-t border-slate-200 pt-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Regions
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {listedRegions.map((region) => (
                <span
                  key={region}
                  className="rounded-full bg-white px-2.5 py-1 text-xs text-slate-700 ring-1 ring-slate-200"
                >
                  {REGION_LABELS[region as RegionSlug]}
                </span>
              ))}
            </div>
          </div>

          {listedCountries.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Countries
              </p>

              <div className="mt-2 max-h-32 overflow-y-auto rounded-lg bg-white p-2 ring-1 ring-slate-200">
                <div className="flex flex-wrap gap-2">
                  {listedCountries.map((country) => (
                    <span
                      key={country}
                      className="rounded-full bg-slate-50 px-2.5 py-1 text-xs text-slate-700"
                    >
                      {COUNTRY_LABELS[country as CountrySlug]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {availability.restrictedCountries?.length ? (
            <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Restricted countries
                </p>

                <div className="mt-2 max-h-32 overflow-y-auto rounded-lg bg-white p-2 ring-1 ring-slate-200">
                <div className="flex flex-wrap gap-2">
                    {availability.restrictedCountries.map((country) => (
                    <span
                        key={country}
                        className="rounded-full bg-rose-50 px-2.5 py-1 text-xs text-rose-700"
                    >
                        {COUNTRY_LABELS[country]}
                    </span>
                    ))}
                </div>
                </div>
            </div>
          ) : null}

          {availability.notes && (
            <p className="text-xs leading-5 text-slate-500">
              {availability.notes}
            </p>
          )}
        </div>
      )}
    </div>
  );
}