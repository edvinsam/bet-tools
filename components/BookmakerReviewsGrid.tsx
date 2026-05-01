"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import LocationFilterSelect from "@/components/LocationFilterSelect";
import type { EnrichedBookmakerReview } from "@/lib/enriched-bookmaker-reviews";
import type { CountrySlug, RegionSlug } from "@/lib/bookmaker-locations";
import { bookmakerMatchesLocation } from "@/lib/bookmakerFilter";

type SortKey = "alphabetical" | "rating" | "margin";
type SortDirection = "asc" | "desc";

type LocationHrefMode = "default" | "low-margin";

type Props = {
  bookmakers: EnrichedBookmakerReview[];

  defaultSortKey?: SortKey;
  defaultSortDirection?: SortDirection;

  selectedRegion?: RegionSlug;
  selectedCountry?: CountrySlug;
  locationHrefMode?: LocationHrefMode;
};

export default function BookmakerReviewsGrid({
  bookmakers,
  defaultSortKey,
  defaultSortDirection,
  selectedRegion,
  selectedCountry,
  locationHrefMode = "default",
}: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] =
    useState<SortKey>(
      defaultSortKey ?? "alphabetical"
    );

  const [sortDirection, setSortDirection] =
    useState<SortDirection>(
      defaultSortDirection ?? "asc"
    );

  function handleSortClick(nextSortKey: SortKey) {
    if (sortKey === nextSortKey) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(nextSortKey);
    setSortDirection(nextSortKey === "rating" ? "desc" : "asc");
  }

  const filteredAndSortedBookmakers = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filtered = bookmakers.filter((bookmaker) => {
      const matchesLocation = bookmakerMatchesLocation({
        bookmakerId: bookmaker.slug,
        region: selectedRegion,
        country: selectedCountry,
      });

      if (!matchesLocation) return false;

      if (!normalizedQuery) return true;

      const searchableText = [
        bookmaker.name,
        bookmaker.intro,
        bookmaker.verdict,
        bookmaker.userReviewSummary?.overallSentiment,
        ...bookmaker.pros,
        ...bookmaker.cons,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });

    return [...filtered].sort((a, b) => {
      let comparison = 0;

      if (sortKey === "alphabetical") {
        comparison = a.name.localeCompare(b.name);
      }

      if (sortKey === "rating") {
        const aRating = typeof a.rating === "number" ? a.rating : -1;
        const bRating = typeof b.rating === "number" ? b.rating : -1;
        comparison = aRating - bRating;
      }

      if (sortKey === "margin") {
        const aMargin =
          typeof a.averageMargin === "number"
            ? a.averageMargin
            : Number.POSITIVE_INFINITY;

        const bMargin =
          typeof b.averageMargin === "number"
            ? b.averageMargin
            : Number.POSITIVE_INFINITY;

        comparison = aMargin - bMargin;
      }

      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [
    bookmakers,
    searchQuery,
    sortKey,
    sortDirection,
    selectedRegion,
    selectedCountry,
  ]);

  return (
    <>
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full lg:max-w-md">
            <label
              htmlFor="bookmaker-search"
              className="text-sm font-medium text-slate-700"
            >
              Search bookmakers
            </label>

            <input
              id="bookmaker-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by name, reputation, pros..."
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2 text-slate-950 outline-none focus:border-slate-950"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700">Location</p>

            <div className="mt-2">
              <LocationFilterSelect
                selectedRegion={selectedRegion}
                selectedCountry={selectedCountry}
                hrefMode={locationHrefMode}
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700">Sort by</p>

            <div className="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleSortClick("alphabetical")}
                className={`rounded-xl border px-4 py-2 text-sm font-semibold ${
                  sortKey === "alphabetical"
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                Alphabetical{" "}
                {sortKey === "alphabetical" &&
                  (sortDirection === "asc" ? "↓" : "↑")}
              </button>

              <button
                type="button"
                onClick={() => handleSortClick("rating")}
                className={`rounded-xl border px-4 py-2 text-sm font-semibold ${
                  sortKey === "rating"
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                Rating{" "}
                {sortKey === "rating" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </button>

              <button
                type="button"
                onClick={() => handleSortClick("margin")}
                className={`rounded-xl border px-4 py-2 text-sm font-semibold ${
                  sortKey === "margin"
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                Margin{" "}
                {sortKey === "margin" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Showing {filteredAndSortedBookmakers.length} of {bookmakers.length}{" "}
          bookmaker reviews.
        </p>
      </section>

      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {filteredAndSortedBookmakers.map((bookmaker, index) => (
          <BookmakerReviewRow
            key={bookmaker.slug}
            bookmaker={bookmaker}
            rank={index + 1}
          />
        ))}
      </section>

      {filteredAndSortedBookmakers.length === 0 && (
        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h2 className="text-xl font-bold text-slate-950">
            No bookmakers found
          </h2>

          <p className="mt-2 text-slate-600">
            Try changing the search or sort option.
          </p>
        </section>
      )}
    </>
  );
}

function BookmakerReviewRow({
  bookmaker,
  rank,
}: {
  bookmaker: EnrichedBookmakerReview;
  rank: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="border-b border-slate-200 p-4 last:border-b-0">
      {/* Mobile layout */}
      <div className="sm:hidden">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-400">#{rank}</p>
            <h2 className="mt-2 text-base font-bold text-slate-950">
              {bookmaker.name}
            </h2>
          </div>

          {bookmaker.logo && (
            <div
              className="flex h-11 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-2"
              style={
                bookmaker.backgroundColor
                  ? { backgroundColor: bookmaker.backgroundColor }
                  : undefined
              }
            >
              <img
                src={bookmaker.logo}
                alt={`${bookmaker.name} logo`}
                className="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <div className="rounded-full bg-slate-50 px-3 py-1.5 text-xs text-slate-700">
            <StarRating rating={bookmaker.rating} />
          </div>

          {typeof bookmaker.averageMargin === "number" && (
            <div className="rounded-full bg-slate-50 px-3 py-1.5 text-xs text-slate-700">
              Margin:{" "}
              <span className="font-semibold text-slate-950">
                {bookmaker.averageMargin.toFixed(2)}%
              </span>
            </div>
          )}
        </div>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            {expanded ? "Hide" : "Show more"}
          </button>

          <Link
            href={`/bookmaker-reviews/${bookmaker.slug}`}
            className="rounded-xl bg-slate-950 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Review
          </Link>
        </div>
      </div>

      {/* Tablet/desktop layout */}
      <div className="hidden sm:grid sm:grid-cols-[2.5rem_7rem_minmax(8ch,1fr)_auto_auto] sm:items-center sm:gap-4">
        <div className="text-sm font-semibold text-slate-400">#{rank}</div>

        {bookmaker.logo && (
          <div
            className="flex h-14 w-24 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-2"
            style={
              bookmaker.backgroundColor
                ? { backgroundColor: bookmaker.backgroundColor }
                : undefined
            }
          >
            <img
              src={bookmaker.logo}
              alt={`${bookmaker.name} logo`}
              className="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

        <h2 className="min-w-[8ch] truncate text-lg font-bold text-slate-950">
          {bookmaker.name}
        </h2>

        <div className="whitespace-nowrap text-sm">
          <StarRating rating={bookmaker.rating} />
          {typeof bookmaker.averageMargin === "number" && (
            <div className="mt-1 text-sm text-slate-700">
              Margin:{" "}
              <span className="font-semibold text-slate-950">
                {bookmaker.averageMargin.toFixed(2)}%
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 min-[720px]:flex-row">
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            {expanded ? "Hide" : "Show more"}
          </button>

          <Link
            href={`/bookmaker-reviews/${bookmaker.slug}`}
            className="rounded-xl bg-slate-950 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-slate-800"
          >
            Review
          </Link>
        </div>
      </div>

      {expanded && (
        <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
          <p>{bookmaker.intro}</p>

          {bookmaker.userReviewSummary && (
            <p className="mt-3">
              <span className="font-semibold text-slate-950">
                User reputation:
              </span>{" "}
              <span className="capitalize">
                {bookmaker.userReviewSummary.overallSentiment}
              </span>
            </p>
          )}
        </div>
      )}
    </article>
  );
}