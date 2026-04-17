export type BookmakerRegion =
  | "Europe"
  | "North America"
  | "South America"
  | "Asia"
  | "Africa"
  | "Oceania";

export const bookmakerRegions: Record<string, BookmakerRegion[]> = {
  betfair: ["Europe", "Oceania"],
  unibet: ["Europe", "Oceania"],
  tabtouch: ["Oceania"],
  pointsbet_au: ["Oceania"],
  betright: ["Oceania"],
  sportsbet: ["Oceania"],
  neds: ["Oceania"],
  ladbrokes: ["Europe", "Oceania"],
  betr: ["Oceania"],
  tab: ["Oceania"],
  playup: ["Oceania"],

  matchbook: ["Europe"],
  "1xbet": ["Europe", "South America", "Asia", "Africa"],
  unibet_nl: ["Europe"],
  unibet_se: ["Europe"],
  marathon_bet: ["Europe"],
  pinnacle: ["Europe", "North America", "South America", "Asia", "Africa"],
  betonline: ["North America", "Europe"],
  coolbet: ["Europe"],
  betsson: ["Europe", "South America"],
  nordic_bet: ["Europe"],
  leovegas_se: ["Europe"],
  codere_it: ["Europe", "South America", "North America"],
  gtbets: ["North America", "Europe"],
  tipico: ["Europe"],
  winamax_de: ["Europe"],
  betclic_fr: ["Europe"],
  mybookie: ["North America", "Europe"],
  pmu_fr: ["Europe"],
  winamax_fr: ["Europe"],
  unibet_fr: ["Europe"],
  "888sport": ["Europe"],
  william_hill: ["Europe"],
  everygame: ["North America", "Europe"],

  netbet: ["Europe"],

  atg_se: ["Europe"],
  svenska_spel: ["Europe"],
  campobet_se: ["Europe"],
  hajper_se: ["Europe"],
  mrgreen_se: ["Europe"],
  "888sport_se": ["Europe"],

  smarkets: ["Europe"],
  casumo: ["Europe"],
  grosvenor: ["Europe"],
  betfred_uk: ["Europe"],
  coral: ["Europe"],
  betway: ["Europe", "Africa"],
  leovegas: ["Europe"],
  paddy_power: ["Europe"],
  bet_victor: ["Europe"],
  sky_bet: ["Europe"],
  boylesports: ["Europe"],
  virgin_bet: ["Europe"],
  livescore_bet: ["Europe"],
  betfair_sportsbook: ["Europe"],

  lowvig: ["North America"],
  draftkings: ["North America"],
  bovada: ["North America"],
  betus: ["North America"],
  betrivers: ["North America"],
  betmgm: ["North America", "Europe"],
  fanduel: ["North America"],
  hard_rock_bet: ["North America"],
  bally_bet: ["North America"],
  betparx: ["North America"],
  thescore_bet: ["North America"],
};

export const bookmakerRegionOptions: BookmakerRegion[] = [
  "Europe",
  "North America",
  "South America",
  "Asia",
  "Africa",
  "Oceania",
];