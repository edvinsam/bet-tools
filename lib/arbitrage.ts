import type { OddsApiArbitrageBet } from "./oddsApi";

export type ArbRegion = "us" | "uk" | "eu" | "se" | "au" | "global";

export type ArbLeg = {
  side: string;
  bookmaker: string;
  oddsDecimal: number | null;
  href: string | null;
  region: ArbRegion;
};

export type ArbRow = {
  id: string;
  eventId: number;
  homeTeam: string;
  awayTeam: string;
  eventDate: string | null;
  updatedAt: string | null;
  sportName: string | null;
  leagueName: string | null;

  marketName: string;
  marketLine: number | null;

  profitMarginPercent: number;
  impliedProbabilityFraction: number;

  bookmakerNames: string[];
  regions: ArbRegion[];
  isRegionConsistent: boolean;

  legs: ArbLeg[];
};

export const BOOKMAKER_REGION_MAP: Record<string, ArbRegion> = {
  Unibet: "eu",
  Betway: "global",
  Bet365: "global",
  Betsson: "eu",
  LeoVegas: "se",
  Betfair: "uk",
  WilliamHill: "uk",
  DraftKings: "us",
  FanDuel: "us",
  BetMGM: "us",
  Caesars: "us",
  Sportsbet: "au",
  TAB: "au",
};

function parseRegion(bookmaker: string): ArbRegion {
  return BOOKMAKER_REGION_MAP[bookmaker] ?? "global";
}

export function normalizeArb(raw: OddsApiArbitrageBet): ArbRow {
  const legs: ArbLeg[] = raw.legs.map((leg) => ({
    side: leg.side,
    bookmaker: leg.bookmaker,
    oddsDecimal: leg.odds ? Number(leg.odds) : null,
    href: leg.href ?? null,
    region: parseRegion(leg.bookmaker),
  }));

  const bookmakerNames = [...new Set(legs.map((leg) => leg.bookmaker))];
  const regions = [...new Set(legs.map((leg) => leg.region))];
  const nonGlobalRegions = regions.filter((region) => region !== "global");

  return {
    id: raw.id,
    eventId: raw.eventId,
    homeTeam: raw.event?.home ?? "Unknown",
    awayTeam: raw.event?.away ?? "Unknown",
    eventDate: raw.event?.date ?? null,
    updatedAt: raw.updatedAt ?? null,
    sportName: raw.event?.sport ?? null,
    leagueName: raw.event?.league ?? null,

    marketName: raw.market.name,
    marketLine: raw.market.hdp ?? null,

    profitMarginPercent: raw.profitMargin,
    impliedProbabilityFraction: raw.impliedProbability,

    bookmakerNames,
    regions,
    isRegionConsistent: nonGlobalRegions.length <= 1,
    legs,
  };
}

export function normalizeArbs(rows: OddsApiArbitrageBet[]): ArbRow[] {
  return rows.map(normalizeArb);
}