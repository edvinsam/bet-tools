// src/lib/oddsRoutes.ts
import type { OddsType } from "@/lib/oddsConverter";

export const oddsTypes: OddsType[] = [
  "decimal",
  "fractional",
  "american",
  "hongkong",
  "malay",
  "indonesian",
  "probability",
];

export function makeSlug(from: OddsType, to: OddsType): string {
  return `${from}-to-${to}-odds-converter`;
}

export function parseSlug(slug?: string): { from: OddsType; to: OddsType } | null {
  if (!slug) return null;

  const match = slug.match(
    /^(decimal|fractional|american|hongkong|malay|indonesian|probability)-to-(decimal|fractional|american|hongkong|malay|indonesian|probability)-odds-converter$/
  );

  if (!match) return null;

  const from = match[1] as OddsType;
  const to = match[2] as OddsType;

  if (from === to) return null;

  return { from, to };
}

export function labelForOddsType(type: OddsType): string {
  switch (type) {
    case "decimal":
      return "Decimal Odds";
    case "fractional":
      return "Fractional Odds";
    case "american":
      return "American Odds";
    case "hongkong":
      return "Hong Kong Odds";
    case "malay":
      return "Malay Odds";
    case "indonesian":
      return "Indonesian Odds";
    case "probability":
      return "Probability %";
  }
}