import { bookmakerAvailability } from "@/lib/bookmaker-availability";
import type { CountrySlug, RegionSlug } from "@/lib/bookmaker-locations";

export function bookmakerMatchesLocation({
  bookmakerId,
  region,
  country,
}: {
  bookmakerId: string;
  region?: RegionSlug;
  country?: CountrySlug;
}) {
  if (!region && !country) return true;

  const availability = bookmakerAvailability[bookmakerId];

  if (!availability) return false;

  if (country) {
    if (availability.restrictedCountries?.includes(country)) {
      return false;
    }

    if (availability.licensedCountries?.includes(country)) {
      return true;
    }

    if (availability.mode === "global_except_restricted") {
      return true;
    }

    if (availability.mode === "region_except_restricted") {
      return region ? availability.regions.includes(region) : false;
    }

    return false;
  }

  if (region) {
    return availability.regions.includes(region);
  }

  return true;
}