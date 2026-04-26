"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import LocationFilterSelect from "@/components/LocationFilterSelect";
import type { EnrichedBookmakerReview } from "@/lib/enriched-bookmaker-reviews";
import type { CountrySlug, RegionSlug } from "@/lib/bookmaker-locations";

type SortKey = "alphabetical" | "rating" | "margin";
type SortDirection = "asc" | "desc";

type Props = {
  bookmakers: EnrichedBookmakerReview[];

  defaultSortKey?: SortKey;
  defaultSortDirection?: SortDirection;

  selectedRegion?: RegionSlug;
  selectedCountry?: CountrySlug;
};

export default function BookmakerReviewsGrid({
  bookmakers,
  defaultSortKey,
  defaultSortDirection,
  selectedRegion,
  selectedCountry,
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
  }, [bookmakers, searchQuery, sortKey, sortDirection]);

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

      <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedBookmakers.map((bookmaker) => (
          <article
            key={bookmaker.slug}
            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Bookmaker
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-950">
                  {bookmaker.name}
                </h2>
              </div>

              {bookmaker.logo && (
                <div
                  className="flex h-14 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 p-3"
                  style={
                    bookmaker.backgroundColor
                      ? { backgroundColor: bookmaker.backgroundColor }
                      : undefined
                  }
                >
                  <a
                    href={bookmaker.url}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="flex h-full w-full items-center justify-center"
                  >
                    <img
                      src={bookmaker.logo}
                      alt={`${bookmaker.name} logo`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </div>
              )}
            </div>

            <p className="mt-4 line-clamp-4 text-slate-700">
              {bookmaker.intro}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Rating</p>

                <div className="mt-2 whitespace-nowrap">
                  <StarRating rating={bookmaker.rating} />
                </div>
              </div>

              {typeof bookmaker.averageMargin === "number" && (
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">Avg. margin</p>

                  <p className="mt-1 font-semibold text-slate-950">
                    {bookmaker.averageMargin.toFixed(2)}%
                  </p>

                  {typeof bookmaker.marginSamples === "number" && (
                    <p className="mt-1 text-xs text-slate-500">
                      {bookmaker.marginSamples} samples
                    </p>
                  )}
                </div>
              )}
            </div>

            {bookmaker.userReviewSummary && (
              <div className="mt-4 rounded-xl bg-slate-50 p-3">
                <p className="text-xs text-slate-500">User reputation</p>

                <p className="mt-1 font-semibold capitalize text-slate-950">
                  {bookmaker.userReviewSummary.overallSentiment}
                </p>
              </div>
            )}

            <div className="mt-6 flex flex-1 items-end">
              <Link
                href={`/bookmaker-reviews/${bookmaker.slug}`}
                className="inline-flex rounded-xl bg-slate-950 px-4 py-2 font-semibold text-white hover:bg-slate-800"
              >
                Read review
              </Link>
            </div>
          </article>
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