// lib/bookmaker-key-map.ts

export const BOOKMAKER_KEY_MAP: Record<string, string> = {
  // Odds API / Arbitrage API names → canonical keys

  "bet365": "bet365",
  "Bet365": "bet365",

  "Betano": "betano",
  "betano": "betano",

  "Betway": "betway",
  "betway": "betway",

  "William Hill": "william-hill",
  "WilliamHill": "william-hill",

  "Pinnacle": "pinnacle",
  "pinnacle": "pinnacle",

  "Unibet": "unibet",
  "unibet": "unibet",

  "DraftKings": "draftkings",
  "FanDuel": "fanduel",

  "Caesars": "caesars",
  "BetMGM": "betmgm",

  "PointsBet": "pointsbet",
  "PointsBet US": "pointsbet",

  "BetRivers": "betrivers",
  "Bet365 NJ": "bet365",

  "888Sport": "888sport",
  "888sport": "888sport",

  "Betfair Exchange": "betfair",
  
  "Leovegas": "leovegas",

  "Bwin ES": "bwin",

  "10BET": "10bet",
  "10Bet": "10bet",
  // add more as you encounter them
};