import type { MetadataRoute } from "next";

import { oddsTypes, makeSlug } from "@/lib/oddsRoutes";

import {
  REGION_OPTIONS,
  COUNTRY_OPTIONS,
  getLocationHref,
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
      url: `${baseUrl}/compare-bookmakers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
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

  const locationPages: MetadataRoute.Sitemap = [];

  // Regions
  for (const region of REGION_OPTIONS) {
    locationPages.push({
      url: `${baseUrl}${getLocationHref(region.slug)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // Countries
  for (const country of COUNTRY_OPTIONS) {
    locationPages.push({
      url: `${baseUrl}${getLocationHref(
        country.region,
        country.slug
      )}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    });
  }

  return [
    ...staticPages,
    ...converterPages,
    ...locationPages,
  ];
}