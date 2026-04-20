export type SupportedRegion = "us" | "uk" | "eu" | "se" | "au";

export const DEFAULT_BOOKMAKERS = [
  "Unibet",
  "Betway",
  "Bet365", 
  "Betano",
  "William Hill",
  "888Sport",
  "Betfair Exchange",
  "LeoVegas",
  "Bwin ES",
  "10BET",
] as const;

// Replace these once you upgrade plan.
// Keep them realistic for the audience you want to target.
export const PAID_PLAN_BOOKMAKERS = [
  "Unibet",
  "Betway",
  "Bet365", 
  "Betano",
  "William Hill",
  "888Sport",
  "Betfair Exchange",
  "LeoVegas",
  "Bwin ES",
  "10BET",
] as const;

export const REGION_TO_BOOKMAKERS: Record<SupportedRegion, string[]> = {
  us: ["DraftKings", "FanDuel", "BetMGM", "Caesars"],
  uk: ["Bet365", "Betfair", "WilliamHill"],
  eu: ["Bet365", "Unibet", "Betsson"],
  se: ["Bet365", "Unibet", "LeoVegas", "Betsson"],
  au: ["Bet365", "Sportsbet", "TAB"],
};