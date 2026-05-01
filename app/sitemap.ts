import type { MetadataRoute } from "next";

import { oddsTypes, makeSlug } from "@/lib/oddsRoutes";
import { bookmakerReviews } from "@/lib/bookmaker-reviews";
import { casinoReviews } from "@/lib/casino-reviews";

import {
  COUNTRY_LABELS,
  REGION_LABELS,
} from "@/lib/bookmaker-locations";

const baseUrl = "https://bet-tools.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/calculators`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators/odds-converter`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/fair-probability`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators/arbitrage-calculator`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/arbitrage-bets`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bookmaker-reviews`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bookmaker-reviews/best-low-margin-bookmakers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/bookmaker-reviews/best-bookmakers-for-arbitrage-betting`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/bookmaker-reviews/best-betting-exchanges`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/bookmaker-reviews/country`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/bookmaker-reviews/region`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bookmaker-reviews/low-margin-bookmakers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/betting-sites`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/online-casinos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/casino-reviews`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/responsible-gambling`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/affiliate-disclosure`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.2,
    },
  ];

  const converterPages: MetadataRoute.Sitemap = [];

  for (const from of oddsTypes) {
    for (const to of oddsTypes) {
      if (from === to) continue;

      converterPages.push({
        url: `${baseUrl}/calculators/${makeSlug(from, to)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  const bookmakerReviewUrls: MetadataRoute.Sitemap = bookmakerReviews.map(
    (bookmaker) => ({
      url: `${baseUrl}/bookmaker-reviews/${bookmaker.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    })
  );

  const countryPages: MetadataRoute.Sitemap = Object.keys(COUNTRY_LABELS).map(
    (country) => ({
      url: `${baseUrl}/bookmaker-reviews/country/${country}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const lowMarginCountryPages: MetadataRoute.Sitemap = Object.keys(
    COUNTRY_LABELS
  ).map((country) => ({
    url: `${baseUrl}/bookmaker-reviews/low-margin-bookmakers/${country}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const regionPages: MetadataRoute.Sitemap = Object.keys(REGION_LABELS).map(
    (region) => ({
      url: `${baseUrl}/bookmaker-reviews/region/${region}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.65,
    })
  );

  const bettingSitePages: MetadataRoute.Sitemap = Object.keys(COUNTRY_LABELS).map(
    (country) => ({
      url: `${baseUrl}/betting-sites/${country}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const onlineCasinoPages: MetadataRoute.Sitemap = Object.keys(COUNTRY_LABELS).map(
    (country) => ({
      url: `${baseUrl}/online-casinos/${country}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const casinoReviewPages: MetadataRoute.Sitemap = casinoReviews.map((casino) => ({
    url: `${baseUrl}/casino-reviews/${casino.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...converterPages,
    ...bookmakerReviewUrls,
    ...countryPages,
    ...lowMarginCountryPages,
    ...regionPages,
    ...bettingSitePages,
    ...onlineCasinoPages,
    ...casinoReviewPages,
  ];
}