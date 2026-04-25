// lib/enriched-bookmaker-reviews.ts

import {
  bookmakerReviews,
  type BookmakerReview,
} from "@/lib/bookmaker-reviews";
import { bookmakerMarginData } from "@/lib/bookmaker-margin-data";
import {
  bookmakerLocations,
  type CountrySlug,
  type RegionSlug,
} from "@/lib/bookmaker-locations";
import {
  BOOKMAKER_META,
  FALLBACK_BOOKMAKER_META,
  type BookmakerMeta,
} from "@/lib/bookmaker-meta";
import { BOOKMAKER_ID_BY_REVIEW_SLUG } from "@/lib/bookmaker-id-map";

export type EnrichedBookmakerReview = BookmakerReview &
  BookmakerMeta & {
    bookmakerId: string;
    regions: RegionSlug[];
    availableCountries: CountrySlug[];
    averageMargin?: number;
    marginSamples?: number;
  };

function getBookmakerId(review: BookmakerReview) {
  return BOOKMAKER_ID_BY_REVIEW_SLUG[review.slug] ?? review.slug;
}

function getWeightedMargin(bookmakerId: string) {
  const rows = bookmakerMarginData.filter(
    (row) => row.bookmaker_id === bookmakerId
  );

  if (!rows.length) return undefined;

  const totalSamples = rows.reduce((sum, row) => sum + row.samples, 0);

  if (!totalSamples) return undefined;

  const averageMargin =
    rows.reduce(
      (sum, row) => sum + row.average_margin_percent * row.samples,
      0
    ) / totalSamples;

  return {
    averageMargin,
    marginSamples: totalSamples,
  };
}

export const enrichedBookmakerReviews: EnrichedBookmakerReview[] =
  bookmakerReviews.map((review) => {
    const bookmakerId = getBookmakerId(review);
    const meta = BOOKMAKER_META[bookmakerId] ?? FALLBACK_BOOKMAKER_META;
    const locationMeta = bookmakerLocations[bookmakerId];
    const marginMeta = getWeightedMargin(bookmakerId);

    return {
      ...review,
      ...meta,
      bookmakerId,
      regions: locationMeta?.regions ?? [],
      availableCountries: locationMeta?.availableCountries ?? [],
      averageMargin: marginMeta?.averageMargin,
      marginSamples: marginMeta?.marginSamples,
    };
  });