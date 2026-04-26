import type { CountrySlug, RegionSlug } from "@/lib/bookmaker-locations";
import { COUNTRY_LABELS, REGION_LABELS } from "@/lib/bookmaker-locations";

export type BookmakerLocationPageContent = {
  title: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  body: string[];
};

export const countryBookmakerPageContent: Partial<
  Record<CountrySlug, BookmakerLocationPageContent>
> = {
  sweden: {
    title: "Best Bookmakers in Sweden",
    metaDescription:
      "Compare bookmaker reviews for Sweden, including odds quality, reputation, usability, deposits, withdrawals and betting features.",
    eyebrow: "Sweden bookmaker reviews",
    intro:
      "Compare bookmakers available in Sweden using editorial reviews, user reputation signals and practical betting factors.",
    body: [
      "Swedish bettors should pay particular attention to licensing, payment options, withdrawal speed and how each bookmaker performs across major sports markets.",
      "This list is filtered to bookmakers that are marked as available in Sweden based on our current bookmaker location data.",
    ],
  },

  italy: {
    title: "Best Bookmakers in Italy",
    metaDescription:
      "Compare bookmaker reviews for Italy, including betting features, odds quality, reputation, deposits and withdrawals.",
    eyebrow: "Italy bookmaker reviews",
    intro:
      "Compare bookmakers available in Italy based on review quality, betting experience, odds coverage and user reputation.",
    body: [
      "Italian betting users should compare bookmakers not only by bonuses, but also by pricing quality, payment methods and account verification experience.",
      "This page filters our bookmaker reviews to operators currently mapped as available in Italy.",
    ],
  },

  brazil: {
    title: "Best Bookmakers in Brazil",
    metaDescription:
      "Compare bookmaker reviews for Brazil, including sports coverage, betting experience, odds quality and user reputation.",
    eyebrow: "Brazil bookmaker reviews",
    intro:
      "Compare bookmakers available in Brazil using our review data, usability notes, reputation summaries and betting feature coverage.",
    body: [
      "Brazil is one of the most active online betting markets, so bookmaker choice can vary significantly by sports coverage, payment support and overall product quality.",
      "This page focuses on bookmakers currently mapped as available for Brazilian users.",
    ],
  },
};

export const regionBookmakerPageContent: Partial<
  Record<RegionSlug, BookmakerLocationPageContent>
> = {
  europe: {
    title: "Best Bookmakers in Europe",
    metaDescription:
      "Compare bookmaker reviews for Europe, including odds quality, reputation, deposits, withdrawals and betting features.",
    eyebrow: "Europe bookmaker reviews",
    intro:
      "Compare European bookmakers using editorial review data, user reputation summaries and practical betting criteria.",
    body: [
      "Bookmaker availability varies heavily across Europe because licensing, payment methods and product restrictions differ by country.",
      "Use this page as a regional overview, then narrow the list further by country when comparing specific betting options.",
    ],
  },

  africa: {
    title: "Best Bookmakers in Africa",
    metaDescription:
      "Compare bookmaker reviews for African betting markets, including odds, reputation, mobile experience and betting features.",
    eyebrow: "Africa bookmaker reviews",
    intro:
      "Compare bookmakers available across African markets using review data, user reputation signals and betting experience factors.",
    body: [
      "Many African betting markets are highly mobile-driven, so mobile experience, payment support and reliability are especially important.",
      "This regional page shows bookmakers mapped to at least one African country in our location data.",
    ],
  },

  asia: {
    title: "Best Bookmakers in Asia",
    metaDescription:
      "Compare bookmaker reviews for Asian betting markets, including betting features, odds quality and user reputation.",
    eyebrow: "Asia bookmaker reviews",
    intro:
      "Compare bookmakers available across Asian markets based on review quality, betting features, usability and reputation.",
    body: [
      "Asian betting markets differ widely by country, regulation and payment options, so regional availability should be treated as a starting point rather than a final answer.",
      "This page lists bookmakers mapped to Asian availability in our current location data.",
    ],
  },
};

export function getCountryBookmakerPageContent(
  country: CountrySlug
): BookmakerLocationPageContent {
  const label = COUNTRY_LABELS[country];

  return (
    countryBookmakerPageContent[country] ?? {
      title: `Best Bookmakers in ${label}`,
      metaDescription: `Compare bookmaker reviews for ${label}, including odds quality, user reputation, betting features, deposits and withdrawals.`,
      eyebrow: `${label} bookmaker reviews`,
      intro: `Compare bookmakers available in ${label} using our review data, reputation summaries and practical betting criteria.`,
      body: [
        `This page filters our bookmaker reviews to operators currently mapped as available in ${label}.`,
        "Availability, payment methods, bonuses and licensing can change over time, so always check the bookmaker directly before creating an account or depositing money.",
      ],
    }
  );
}

export function getRegionBookmakerPageContent(
  region: RegionSlug
): BookmakerLocationPageContent {
  const label = REGION_LABELS[region];

  return (
    regionBookmakerPageContent[region] ?? {
      title: `Best Bookmakers in ${label}`,
      metaDescription: `Compare bookmaker reviews for ${label}, including odds quality, user reputation, betting features, deposits and withdrawals.`,
      eyebrow: `${label} bookmaker reviews`,
      intro: `Compare bookmakers available in ${label} using our review data, reputation summaries and practical betting criteria.`,
      body: [
        `This page filters our bookmaker reviews to operators currently mapped as available somewhere in ${label}.`,
        "Because bookmaker availability can differ by country, use regional pages as broad discovery pages and country pages for more specific comparisons.",
      ],
    }
  );
}