// lib/operator-products.ts

import type { CountrySlug, RegionSlug } from "@/lib/bookmaker-locations";

export type ProductType = "sportsbook" | "casino";

export type SportsbookProfile = {
  brandSlug: string;
  productType: "sportsbook";
  bestFor: string;
  sportsCoverage: "low" | "medium" | "high";
  liveBetting: boolean;
  oddsQuality: "low" | "medium" | "high";
};

export type CasinoProfile = {
  brandSlug: string;
  productType: "casino";
  bestFor: string;
  casinoGames: string[];
  liveCasino: boolean;
  bonusStrength: "low" | "medium" | "high";
  payoutSpeed: "slow" | "medium" | "fast";
};

export const sportsbookProfiles: Record<string, SportsbookProfile> = {
  unibet: {
    brandSlug: "unibet",
    productType: "sportsbook",
    bestFor: "General sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },
  "1xbet": {
    brandSlug: "1xbet",
    productType: "sportsbook",
    bestFor: "High bonuses and international markets",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "low",
  },

  "888sport": {
    brandSlug: "888sport",
    productType: "sportsbook",
    bestFor: "Casual sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  "10bet": {
    brandSlug: "10bet",
    productType: "sportsbook",
    bestFor: "Football and casual betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  atg: {
    brandSlug: "atg",
    productType: "sportsbook",
    bestFor: "Horse racing and Swedish betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  "bally-bet": {
    brandSlug: "bally-bet",
    productType: "sportsbook",
    bestFor: "US sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  bet365: {
    brandSlug: "bet365",
    productType: "sportsbook",
    bestFor: "Live betting and football",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  betano: {
    brandSlug: "betano",
    productType: "sportsbook",
    bestFor: "Football and European betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  betfair: {
    brandSlug: "betfair",
    productType: "sportsbook",
    bestFor: "Exchange betting and advanced users",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "high",
  },

  betfred: {
    brandSlug: "betfred",
    productType: "sportsbook",
    bestFor: "UK sports and horse racing",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  betmgm: {
    brandSlug: "betmgm",
    productType: "sportsbook",
    bestFor: "US sports betting and promotions",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  betonline: {
    brandSlug: "betonline",
    productType: "sportsbook",
    bestFor: "US-facing offshore betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  betparx: {
    brandSlug: "betparx",
    productType: "sportsbook",
    bestFor: "US regional sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  betright: {
    brandSlug: "betright",
    productType: "sportsbook",
    bestFor: "Australian sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  betsson: {
    brandSlug: "betsson",
    productType: "sportsbook",
    bestFor: "European sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  betus: {
    brandSlug: "betus",
    productType: "sportsbook",
    bestFor: "US-facing offshore betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  betvictor: {
    brandSlug: "betvictor",
    productType: "sportsbook",
    bestFor: "UK and European sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  betway: {
    brandSlug: "betway",
    productType: "sportsbook",
    bestFor: "Football and international betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  betr: {
    brandSlug: "betr",
    productType: "sportsbook",
    bestFor: "Simple sports betting experience",
    sportsCoverage: "low",
    liveBetting: false,
    oddsQuality: "medium",
  },

  betrivers: {
    brandSlug: "betrivers",
    productType: "sportsbook",
    bestFor: "US sports betting and casino",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  betclic: {
    brandSlug: "betclic",
    productType: "sportsbook",
    bestFor: "European football betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },
  bovada: {
    brandSlug: "bovada",
    productType: "sportsbook",
    bestFor: "US-facing offshore betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  boylesports: {
    brandSlug: "boylesports",
    productType: "sportsbook",
    bestFor: "Irish sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  bwin: {
    brandSlug: "bwin",
    productType: "sportsbook",
    bestFor: "European football betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  campobet: {
    brandSlug: "campobet",
    productType: "sportsbook",
    bestFor: "International betting and bonuses",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "low",
  },

  codere: {
    brandSlug: "codere",
    productType: "sportsbook",
    bestFor: "Latin American sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  coolbet: {
    brandSlug: "coolbet",
    productType: "sportsbook",
    bestFor: "Nordic and international betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  coral: {
    brandSlug: "coral",
    productType: "sportsbook",
    bestFor: "UK sports and horse racing",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  draftkings: {
    brandSlug: "draftkings",
    productType: "sportsbook",
    bestFor: "US sports betting and fantasy sports",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  everygame: {
    brandSlug: "everygame",
    productType: "sportsbook",
    bestFor: "US-facing offshore betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  fanduel: {
    brandSlug: "fanduel",
    productType: "sportsbook",
    bestFor: "US sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  gtbets: {
    brandSlug: "gtbets",
    productType: "sportsbook",
    bestFor: "Offshore sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  hajper: {
    brandSlug: "hajper",
    productType: "sportsbook",
    bestFor: "Swedish online betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  "hard-rock-bet": {
    brandSlug: "hard-rock-bet",
    productType: "sportsbook",
    bestFor: "US sportsbook and casino users",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  ladbrokes: {
    brandSlug: "ladbrokes",
    productType: "sportsbook",
    bestFor: "UK sports betting and horse racing",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  leovegas: {
    brandSlug: "leovegas",
    productType: "sportsbook",
    bestFor: "Mobile betting and casino users",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  livescorebet: {
    brandSlug: "livescorebet",
    productType: "sportsbook",
    bestFor: "Live betting and football fans",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  lowvig: {
    brandSlug: "lowvig",
    productType: "sportsbook",
    bestFor: "Low-margin betting",
    sportsCoverage: "medium",
    liveBetting: false,
    oddsQuality: "high",
  },

  marathonbet: {
    brandSlug: "marathonbet",
    productType: "sportsbook",
    bestFor: "Competitive odds betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "high",
  },

  matchbook: {
    brandSlug: "matchbook",
    productType: "sportsbook",
    bestFor: "Exchange betting and price-sensitive users",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "high",
  },

  mybookie: {
    brandSlug: "mybookie",
    productType: "sportsbook",
    bestFor: "US-facing offshore betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  neds: {
    brandSlug: "neds",
    productType: "sportsbook",
    bestFor: "Australian sports and racing",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  netbet: {
    brandSlug: "netbet",
    productType: "sportsbook",
    bestFor: "European sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  nordicbet: {
    brandSlug: "nordicbet",
    productType: "sportsbook",
    bestFor: "Nordic sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  "paddy-power": {
    brandSlug: "paddy-power",
    productType: "sportsbook",
    bestFor: "UK and Irish sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  pinnacle: {
    brandSlug: "pinnacle",
    productType: "sportsbook",
    bestFor: "Low-margin betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "high",
  },

  playup: {
    brandSlug: "playup",
    productType: "sportsbook",
    bestFor: "Australian and US sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  pmu: {
    brandSlug: "pmu",
    productType: "sportsbook",
    bestFor: "Horse racing and French betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  pointsbet: {
    brandSlug: "pointsbet",
    productType: "sportsbook",
    bestFor: "Sports betting promotions",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  skybet: {
    brandSlug: "skybet",
    productType: "sportsbook",
    bestFor: "UK football and racing",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  smarkets: {
    brandSlug: "smarkets",
    productType: "sportsbook",
    bestFor: "Exchange betting and low commissions",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "high",
  },

  sportsbet: {
    brandSlug: "sportsbet",
    productType: "sportsbook",
    bestFor: "Australian sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  "svenska-spel": {
    brandSlug: "svenska-spel",
    productType: "sportsbook",
    bestFor: "Swedish licensed betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  tab: {
    brandSlug: "tab",
    productType: "sportsbook",
    bestFor: "Australian racing and sports",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  tabtouch: {
    brandSlug: "tabtouch",
    productType: "sportsbook",
    bestFor: "Australian racing and sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  thescore: {
    brandSlug: "thescore",
    productType: "sportsbook",
    bestFor: "US and Canadian sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  tipico: {
    brandSlug: "tipico",
    productType: "sportsbook",
    bestFor: "German and European sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },
  "virgin-bet": {
    brandSlug: "virgin-bet",
    productType: "sportsbook",
    bestFor: "UK sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  "william-hill": {
    brandSlug: "william-hill",
    productType: "sportsbook",
    bestFor: "UK sports and horse racing",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  winamax: {
    brandSlug: "winamax",
    productType: "sportsbook",
    bestFor: "French sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  stake: {
    brandSlug: "stake",
    productType: "sportsbook",
    bestFor: "Crypto sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  "22bet": {
    brandSlug: "22bet",
    productType: "sportsbook",
    bestFor: "Bonuses and global availability",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "low",
  },

  "20bet": {
    brandSlug: "20bet",
    productType: "sportsbook",
    bestFor: "International betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "low",
  },

  melbet: {
    brandSlug: "melbet",
    productType: "sportsbook",
    bestFor: "Bonuses and international markets",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "low",
  },

  betwinner: {
    brandSlug: "betwinner",
    productType: "sportsbook",
    bestFor: "International betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "low",
  },

  parimatch: {
    brandSlug: "parimatch",
    productType: "sportsbook",
    bestFor: "Emerging market betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  dafabet: {
    brandSlug: "dafabet",
    productType: "sportsbook",
    bestFor: "Asian sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  "sportsbet-io": {
    brandSlug: "sportsbet-io",
    productType: "sportsbook",
    bestFor: "Crypto sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  cloudbet: {
    brandSlug: "cloudbet",
    productType: "sportsbook",
    bestFor: "Crypto betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  sbotop: {
    brandSlug: "sbotop",
    productType: "sportsbook",
    bestFor: "Asian football betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  m88: {
    brandSlug: "m88",
    productType: "sportsbook",
    bestFor: "Asian sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  fun88: {
    brandSlug: "fun88",
    productType: "sportsbook",
    bestFor: "Asian football betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  novibet: {
    brandSlug: "novibet",
    productType: "sportsbook",
    bestFor: "European sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  stoiximan: {
    brandSlug: "stoiximan",
    productType: "sportsbook",
    bestFor: "Greek sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  superbet: {
    brandSlug: "superbet",
    productType: "sportsbook",
    bestFor: "European sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },

  "bet-at-home": {
    brandSlug: "bet-at-home",
    productType: "sportsbook",
    bestFor: "European sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  interwetten: {
    brandSlug: "interwetten",
    productType: "sportsbook",
    bestFor: "European sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  expekt: {
    brandSlug: "expekt",
    productType: "sportsbook",
    bestFor: "Nordic sports betting",
    sportsCoverage: "medium",
    liveBetting: true,
    oddsQuality: "medium",
  },

  betsafe: {
    brandSlug: "betsafe",
    productType: "sportsbook",
    bestFor: "Nordic sports betting",
    sportsCoverage: "high",
    liveBetting: true,
    oddsQuality: "medium",
  },
};

export const casinoProfiles: Record<string, CasinoProfile> = {
  unibet: {
    brandSlug: "unibet",
    productType: "casino",
    bestFor: "Casino and live dealer games",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },
  "1xbet": {
    brandSlug: "1xbet",
    productType: "casino",
    bestFor: "Large game selection",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  bet365: {
    brandSlug: "bet365",
    productType: "casino",
    bestFor: "Integrated sportsbook and casino",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  betano: {
    brandSlug: "betano",
    productType: "casino",
    bestFor: "Sportsbook and casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  betfair: {
    brandSlug: "betfair",
    productType: "casino",
    bestFor: "Exchange users who also want casino games",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "low",
    payoutSpeed: "medium",
  },

  betfred: {
    brandSlug: "betfred",
    productType: "casino",
    bestFor: "UK casino and sports users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  betmgm: {
    brandSlug: "betmgm",
    productType: "casino",
    bestFor: "US online casino and promotions",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  betonline: {
    brandSlug: "betonline",
    productType: "casino",
    bestFor: "US-facing offshore casino",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino", "Poker"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  betparx: {
    brandSlug: "betparx",
    productType: "casino",
    bestFor: "US regional online casino",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  betsson: {
    brandSlug: "betsson",
    productType: "casino",
    bestFor: "European online casino",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  betus: {
    brandSlug: "betus",
    productType: "casino",
    bestFor: "US-facing offshore casino",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino", "Poker"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  betvictor: {
    brandSlug: "betvictor",
    productType: "casino",
    bestFor: "UK sportsbook and casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  betway: {
    brandSlug: "betway",
    productType: "casino",
    bestFor: "Sportsbook and casino combo",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  betrivers: {
    brandSlug: "betrivers",
    productType: "casino",
    bestFor: "US sportsbook and casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  betclic: {
    brandSlug: "betclic",
    productType: "casino",
    bestFor: "European casino and sports users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },
  bovada: {
    brandSlug: "bovada",
    productType: "casino",
    bestFor: "US-facing online casino",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino", "Poker"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  bwin: {
    brandSlug: "bwin",
    productType: "casino",
    bestFor: "European casino players",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  campobet: {
    brandSlug: "campobet",
    productType: "casino",
    bestFor: "Bonuses and international users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  casumo: {
    brandSlug: "casumo",
    productType: "casino",
    bestFor: "Online casino games",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  codere: {
    brandSlug: "codere",
    productType: "casino",
    bestFor: "Latin American casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  coolbet: {
    brandSlug: "coolbet",
    productType: "casino",
    bestFor: "Sports and casino combination",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  draftkings: {
    brandSlug: "draftkings",
    productType: "casino",
    bestFor: "US online casino",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  fanduel: {
    brandSlug: "fanduel",
    productType: "casino",
    bestFor: "US casino and sportsbook users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  "grosvenor-casinos": {
    brandSlug: "grosvenor-casinos",
    productType: "casino",
    bestFor: "UK casino players",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  "hard-rock-bet": {
    brandSlug: "hard-rock-bet",
    productType: "casino",
    bestFor: "US casino and sportsbook users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  ladbrokes: {
    brandSlug: "ladbrokes",
    productType: "casino",
    bestFor: "UK casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  leovegas: {
    brandSlug: "leovegas",
    productType: "casino",
    bestFor: "Mobile casino gaming",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  marathonbet: {
    brandSlug: "marathonbet",
    productType: "casino",
    bestFor: "Casino and sports betting users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  "mr-green": {
    brandSlug: "mr-green",
    productType: "casino",
    bestFor: "Online casino and live casino",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  mybookie: {
    brandSlug: "mybookie",
    productType: "casino",
    bestFor: "US-facing offshore casino",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino", "Poker"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  netbet: {
    brandSlug: "netbet",
    productType: "casino",
    bestFor: "European casino and sportsbook users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  nordicbet: {
    brandSlug: "nordicbet",
    productType: "casino",
    bestFor: "Nordic casino and sports users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  "paddy-power": {
    brandSlug: "paddy-power",
    productType: "casino",
    bestFor: "UK and Irish casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  pointsbet: {
    brandSlug: "pointsbet",
    productType: "casino",
    bestFor: "Sportsbook and casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  skybet: {
    brandSlug: "skybet",
    productType: "casino",
    bestFor: "UK sportsbook and casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  "svenska-spel": {
    brandSlug: "svenska-spel",
    productType: "casino",
    bestFor: "Swedish licensed casino",
    casinoGames: ["Slots", "Blackjack", "Roulette"],
    liveCasino: false,
    bonusStrength: "low",
    payoutSpeed: "medium",
  },

  thescore: {
    brandSlug: "thescore",
    productType: "casino",
    bestFor: "North American sportsbook and casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  tipico: {
    brandSlug: "tipico",
    productType: "casino",
    bestFor: "European casino and sports users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  "william-hill": {
    brandSlug: "william-hill",
    productType: "casino",
    bestFor: "UK casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  winamax: {
    brandSlug: "winamax",
    productType: "casino",
    bestFor: "French online casino",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Poker"],
    liveCasino: false,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  stake: {
    brandSlug: "stake",
    productType: "casino",
    bestFor: "Crypto casino gaming",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "fast",
  },

  "22bet": {
    brandSlug: "22bet",
    productType: "casino",
    bestFor: "Bonuses and global users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  "20bet": {
    brandSlug: "20bet",
    productType: "casino",
    bestFor: "International casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  melbet: {
    brandSlug: "melbet",
    productType: "casino",
    bestFor: "Bonuses and international users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  betwinner: {
    brandSlug: "betwinner",
    productType: "casino",
    bestFor: "International casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "high",
    payoutSpeed: "medium",
  },

  parimatch: {
    brandSlug: "parimatch",
    productType: "casino",
    bestFor: "Emerging market casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  dafabet: {
    brandSlug: "dafabet",
    productType: "casino",
    bestFor: "Asian online casino",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  cloudbet: {
    brandSlug: "cloudbet",
    productType: "casino",
    bestFor: "Crypto casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "fast",
  },

  sbotop: {
    brandSlug: "sbotop",
    productType: "casino",
    bestFor: "Asian casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette"],
    liveCasino: false,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  m88: {
    brandSlug: "m88",
    productType: "casino",
    bestFor: "Asian casino players",
    casinoGames: ["Slots", "Blackjack", "Roulette"],
    liveCasino: false,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  fun88: {
    brandSlug: "fun88",
    productType: "casino",
    bestFor: "Asian casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette"],
    liveCasino: false,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  novibet: {
    brandSlug: "novibet",
    productType: "casino",
    bestFor: "European casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  stoiximan: {
    brandSlug: "stoiximan",
    productType: "casino",
    bestFor: "Greek online casino",
    casinoGames: ["Slots", "Blackjack", "Roulette"],
    liveCasino: false,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  superbet: {
    brandSlug: "superbet",
    productType: "casino",
    bestFor: "European casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette"],
    liveCasino: false,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  "bet-at-home": {
    brandSlug: "bet-at-home",
    productType: "casino",
    bestFor: "European online casino",
    casinoGames: ["Slots", "Blackjack", "Roulette"],
    liveCasino: false,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  interwetten: {
    brandSlug: "interwetten",
    productType: "casino",
    bestFor: "European casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette"],
    liveCasino: false,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  expekt: {
    brandSlug: "expekt",
    productType: "casino",
    bestFor: "Nordic casino users",
    casinoGames: ["Slots", "Blackjack", "Roulette"],
    liveCasino: false,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },

  betsafe: {
    brandSlug: "betsafe",
    productType: "casino",
    bestFor: "Nordic casino players",
    casinoGames: ["Slots", "Blackjack", "Roulette", "Live casino"],
    liveCasino: true,
    bonusStrength: "medium",
    payoutSpeed: "medium",
  },
};