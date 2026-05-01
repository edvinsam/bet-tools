// lib/operatorFilters.ts

import { bookmakerReviews } from "@/lib/bookmaker-reviews";
import { bookmakerMatchesLocation } from "@/lib/bookmakerFilter";
import { sportsbookProfiles, casinoProfiles } from "@/lib/operator-products";
import type { CountrySlug, RegionSlug } from "@/lib/bookmaker-locations";

export function getSportsbookBrandsForLocation({
  country,
  region,
}: {
  country?: CountrySlug;
  region?: RegionSlug;
}) {
  return bookmakerReviews
    .filter(
      (brand) =>
        sportsbookProfiles[brand.slug] &&
        bookmakerMatchesLocation({
          bookmakerId: brand.slug,
          country,
          region,
        })
    )
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
}

export function getCasinoBrandsForLocation({
  country,
  region,
}: {
  country?: CountrySlug;
  region?: RegionSlug;
}) {
  return bookmakerReviews
    .filter(
      (brand) =>
        casinoProfiles[brand.slug] &&
        bookmakerMatchesLocation({
          bookmakerId: brand.slug,
          country,
          region,
        })
    )
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
}