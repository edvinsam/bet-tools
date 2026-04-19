export type Market = "all" | "us" | "uk" | "eu" | "fr" | "se" | "au";

export type RegionalBookmakerRow = {
  bookmaker_id: string;
  bookmaker_key: string;
  bookmaker_title: string;
  market: Exclude<Market, "all">;
  samples: number;
  average_margin_percent: number;
  logo: string;
  url: string;
  backgroundColor?: string;
};

type RawRegionalBookmakerRow = Omit<RegionalBookmakerRow, "logo" | "url" | "backgroundColor">;

type BookmakerMeta = {
  logo: string;
  url: string;
  backgroundColor?: string;
};

const BOOKMAKER_META: Record<string, BookmakerMeta> = {
  "1xbet": { logo: "/logos/1xbet.svg", url: "https://1xbet.com", backgroundColor: "#ffffff" },
  "888sport": { logo: "/logos/888sport.svg", url: "https://www.888sport.com", backgroundColor: "#ffffff" },
  atg: { logo: "/logos/atg.svg", url: "https://www.atg.se", backgroundColor: "#0357a1" },
  ballybet: { logo: "/logos/ballybet.svg", url: "https://www.ballybet.com", backgroundColor: "#ed0000" },
  betfair: { logo: "/logos/betfair.svg", url: "https://www.betfair.com", backgroundColor: "#ffb60d" },
  betfair_sportsbook: { logo: "/logos/betfair.svg", url: "https://www.betfair.com/sport", backgroundColor: "#ffb60d" },
  betfred: { logo: "/logos/betfred.png", url: "https://www.betfred.com", backgroundColor: "#ffffff" },
  betmgm: { logo: "/logos/betmgm.svg", url: "https://sports.betmgm.com", backgroundColor: "#0a0a0a" },
  betonline: { logo: "/logos/betonline.svg", url: "https://www.betonline.ag", backgroundColor: "#2d2e2c" },
  betparx: { logo: "/logos/betparx.svg", url: "https://www.betparx.com", backgroundColor: "#1a0533" },
  betright: { logo: "/logos/betright.svg", url: "https://www.betright.com.au", backgroundColor: "#0f1729" },
  betsson: { logo: "/logos/betsson.svg", url: "https://www.betsson.com", backgroundColor: "#ff6600" },
  betus: { logo: "/logos/betus.svg", url: "https://www.betus.com.pa", backgroundColor: "#071226" },
  betvictor: { logo: "/logos/betvictor.svg", url: "https://www.betvictor.com", backgroundColor: "#1d262e" },
  betway: { logo: "/logos/betway.svg", url: "https://www.betway.com", backgroundColor: "#ffffff" },
  betr: { logo: "/logos/betr.svg", url: "https://www.betr.com.au", backgroundColor: "#083bd4"},
  betrivers: { logo: "/logos/betrivers.svg", url: "https://www.betrivers.com", backgroundColor: "#1d355c"},
  betclic: { logo: "/logos/betclic.svg", url: "https://www.betclic.com", backgroundColor: "#d1151e" },
  bovada: { logo: "/logos/bovada.svg", url: "https://www.bovada.lv", backgroundColor: "#ffffff" },
  boylesports: { logo: "/logos/boylesports.svg", url: "https://www.boylesports.com", backgroundColor: "#2500f5" },
  campobet: { logo: "/logos/campobet.svg", url: "https://www.campobet.com", backgroundColor: "#104a2d" },
  casumo: { logo: "/logos/casumo.svg", url: "https://www.casumo.com", backgroundColor: "#32007d" },
  codere: { logo: "/logos/codere.svg", url: "https://www.codere.com", backgroundColor: "#252a30" },
  coolbet: { logo: "/logos/coolbet.svg", url: "https://www.coolbet.com", backgroundColor: "#2b2b36" },
  coral: { logo: "/logos/coral.svg", url: "https://sports.coral.co.uk", backgroundColor: "#084d8c" },
  draftkings: { logo: "/logos/draftkings.png", url: "https://sportsbook.draftkings.com", backgroundColor: "#ffffff" },
  everygame: { logo: "/logos/everygame.svg", url: "https://www.everygame.eu", backgroundColor: "#0d0d0d" },
  fanduel: { logo: "/logos/fanduel.png", url: "https://sportsbook.fanduel.com", backgroundColor: "#ffffff" },
  grosvenor: { logo: "/logos/grosvenor.svg", url: "https://www.grosvenorcasinos.com", backgroundColor: "#080808" },
  gtbets: { logo: "/logos/gtbets.png", url: "https://www.gtbets.ag", backgroundColor: "#01133b" },
  hajper: { logo: "/logos/hajper.svg", url: "https://www.hajper.com", backgroundColor: "#0d194f" },
  hardrockbet: { logo: "/logos/hardrockbet.svg", url: "https://app.hardrock.bet", backgroundColor: "#1b191c" },
  ladbrokes: { logo: "/logos/ladbrokes.svg", url: "https://www.ladbrokes.com", backgroundColor: "#f01d27" }, 
  leovegas: { logo: "/logos/leovegas.svg", url: "https://www.leovegas.com", backgroundColor: "#ed4700" },
  livescorebet: { logo: "/logos/livescorebet.jpg", url: "https://www.livescorebet.com", backgroundColor: "#ffffff" },
  lowvig: { logo: "/logos/lowvig.svg", url: "https://www.lowvig.ag", backgroundColor: "#01153d" },
  marathonbet: { logo: "/logos/marathonbet.png", url: "https://www.marathonbet.com", backgroundColor: "#013d78" },
  matchbook: { logo: "/logos/matchbook.png", url: "https://www.matchbook.com", backgroundColor: "#e81e25" },
  mrgreen: { logo: "/logos/mrgreen.svg", url: "https://www.mrgreen.com", backgroundColor: "#015436" },
  mybookie: { logo: "/logos/mybookie.png", url: "https://www.mybookie.ag", backgroundColor: "#242526" },
  neds: { logo: "/logos/neds.svg", url: "https://www.neds.com.au", backgroundColor: "#f55d05" },
  netbet: { logo: "/logos/netbet.png", url: "https://www.netbet.fr", backgroundColor: "#363845" },
  nordicbet: { logo: "/logos/nordicbet.svg", url: "https://www.nordicbet.com", backgroundColor: "#0067b9" },
  paddypower: { logo: "/logos/paddypower.svg", url: "https://www.paddypower.com", backgroundColor: "ffffff" },
  pinnacle: { logo: "/logos/pinnacle.svg", url: "https://www.pinnacle.com", backgroundColor: "#09192e" },
  playup: { logo: "/logos/playup.svg", url: "https://www.playup.com.au", backgroundColor: "#191c21" },
  pmu: { logo: "/logos/pmu.png", url: "https://pmu.fr", backgroundColor: "ffffff" },
  pointsbet: { logo: "/logos/pointsbet.svg", url: "https://pointsbet.com", backgroundColor: "#0a0a0a" },
  skybet: { logo: "/logos/skybet.svg", url: "https://www.skybet.com", backgroundColor: "ffffff" },
  smarkets: { logo: "/logos/smarkets.svg", url: "https://smarkets.com", backgroundColor: "ffffff" },
  sportsbet: { logo: "/logos/sportsbet.jpg", url: "https://www.sportsbet.com.au", backgroundColor: "#0067ab" },
  svenskaspel: { logo: "/logos/svenskaspel.svg", url: "https://www.svenskaspel.se", backgroundColor: "#a10812" },
  tab: { logo: "/logos/tab.png", url: "https://www.tab.com.au", backgroundColor: "#ffffff" },
  tabtouch: { logo: "/logos/tabtouch.svg", url: "https://www.tabtouch.com.au", backgroundColor: "#522d6e" },
  thescorebet: { logo: "/logos/thescorebet.svg", url: "https://thescore.bet", backgroundColor: "#101d2e" },
  tipico: { logo: "/logos/tipico.svg", url: "https://www.tipico.com", backgroundColor: "#ffffff" },
  unibet: { logo: "/logos/unibet.png", url: "https://www.unibet.com", backgroundColor: "#147a45" },
  virginbet: { logo: "/logos/virginbet.jpeg", url: "https://www.virginbet.com", backgroundColor: "#cc080f" },
  williamhill: { logo: "/logos/williamhill.png", url: "https://www.williamhill.com", backgroundColor: "#060a29" },
  winamax: { logo: "/logos/winamax.png", url: "https://www.winamax.fr", backgroundColor: "#e6e6e6" },
};

const FALLBACK_META: BookmakerMeta = {
  logo: "/logos/default-bookmaker.svg",
  url: "#",
};

const rawBookmakerMarginData: RawRegionalBookmakerRow[] = [
  { bookmaker_id: "betfair", bookmaker_key: "betfair_ex_au", bookmaker_title: "Betfair (Exchange)", market: "au", samples: 6, average_margin_percent: 1.059 },
  { bookmaker_id: "unibet", bookmaker_key: "unibet_au", bookmaker_title: "Unibet", market: "au", samples: 6, average_margin_percent: 5.332 },
  { bookmaker_id: "tabtouch", bookmaker_key: "tabtouch", bookmaker_title: "TABtouch", market: "au", samples: 6, average_margin_percent: 5.332 },
  { bookmaker_id: "pointsbet", bookmaker_key: "pointsbetau", bookmaker_title: "PointsBet", market: "au", samples: 6, average_margin_percent: 5.754 },
  { bookmaker_id: "betright", bookmaker_key: "betright", bookmaker_title: "Bet Right", market: "au", samples: 6, average_margin_percent: 6.207 },
  { bookmaker_id: "sportsbet", bookmaker_key: "sportsbet", bookmaker_title: "Sportsbet", market: "au", samples: 6, average_margin_percent: 6.211 },
  { bookmaker_id: "neds", bookmaker_key: "neds", bookmaker_title: "Neds", market: "au", samples: 6, average_margin_percent: 6.651 },
  { bookmaker_id: "ladbrokes", bookmaker_key: "ladbrokes_au", bookmaker_title: "Ladbrokes", market: "au", samples: 6, average_margin_percent: 6.651 },
  { bookmaker_id: "betr", bookmaker_key: "betr_au", bookmaker_title: "Betr", market: "au", samples: 6, average_margin_percent: 7.104 },
  { bookmaker_id: "tab", bookmaker_key: "tab", bookmaker_title: "TAB", market: "au", samples: 6, average_margin_percent: 7.281 },
  { bookmaker_id: "playup", bookmaker_key: "playup", bookmaker_title: "PlayUp", market: "au", samples: 6, average_margin_percent: 7.404 },

  { bookmaker_id: "matchbook", bookmaker_key: "matchbook_eu", bookmaker_title: "Matchbook (Exchange)", market: "eu", samples: 6, average_margin_percent: 0.992 },
  { bookmaker_id: "betfair", bookmaker_key: "betfair_ex_eu", bookmaker_title: "Betfair (Exchange)", market: "eu", samples: 6, average_margin_percent: 1.059 },
  { bookmaker_id: "1xbet", bookmaker_key: "1xbet", bookmaker_title: "1xBet", market: "eu", samples: 6, average_margin_percent: 1.499 },
  { bookmaker_id: "unibet", bookmaker_key: "unibet_nl", bookmaker_title: "Unibet", market: "eu", samples: 6, average_margin_percent: 2.221 },
  { bookmaker_id: "unibet", bookmaker_key: "unibet_se_eu", bookmaker_title: "Unibet", market: "eu", samples: 6, average_margin_percent: 2.636 },
  { bookmaker_id: "marathonbet", bookmaker_key: "marathonbet", bookmaker_title: "Marathonbet", market: "eu", samples: 6, average_margin_percent: 3.177 },
  { bookmaker_id: "pinnacle", bookmaker_key: "pinnacle_eu", bookmaker_title: "Pinnacle", market: "eu", samples: 6, average_margin_percent: 3.480 },
  { bookmaker_id: "betonline", bookmaker_key: "betonlineag_eu", bookmaker_title: "BetOnline", market: "eu", samples: 6, average_margin_percent: 3.499 },
  { bookmaker_id: "coolbet", bookmaker_key: "coolbet_eu", bookmaker_title: "Coolbet", market: "eu", samples: 6, average_margin_percent: 3.902 },
  { bookmaker_id: "betsson", bookmaker_key: "betsson_eu", bookmaker_title: "Betsson", market: "eu", samples: 6, average_margin_percent: 4.123 },
  { bookmaker_id: "nordicbet", bookmaker_key: "nordicbet", bookmaker_title: "NordicBet", market: "eu", samples: 6, average_margin_percent: 4.123 },
  { bookmaker_id: "leovegas", bookmaker_key: "leovegas_se", bookmaker_title: "LeoVegas", market: "eu", samples: 6, average_margin_percent: 4.257 },
  { bookmaker_id: "codere", bookmaker_key: "codere_it", bookmaker_title: "Codere", market: "eu", samples: 6, average_margin_percent: 5.073 },
  { bookmaker_id: "tipico", bookmaker_key: "tipico", bookmaker_title: "Tipico", market: "eu", samples: 6, average_margin_percent: 6.060 },
  { bookmaker_id: "winamax", bookmaker_key: "winamax_de", bookmaker_title: "Winamax", market: "eu", samples: 6, average_margin_percent: 6.749 },
  { bookmaker_id: "betclic", bookmaker_key: "betclic_fr_eu", bookmaker_title: "Betclic", market: "eu", samples: 6, average_margin_percent: 6.927 },
  { bookmaker_id: "mybookie", bookmaker_key: "mybookieag_eu", bookmaker_title: "MyBookie", market: "eu", samples: 6, average_margin_percent: 6.999 },
  { bookmaker_id: "pmu", bookmaker_key: "pmu_fr_eu", bookmaker_title: "PMU", market: "eu", samples: 6, average_margin_percent: 7.491 },
  { bookmaker_id: "winamax", bookmaker_key: "winamax_fr_eu", bookmaker_title: "Winamax", market: "eu", samples: 6, average_margin_percent: 7.881 },
  { bookmaker_id: "unibet", bookmaker_key: "unibet_fr_eu", bookmaker_title: "Unibet", market: "eu", samples: 6, average_margin_percent: 7.967 },
  { bookmaker_id: "888sport", bookmaker_key: "888sport_eu", bookmaker_title: "888sport", market: "eu", samples: 6, average_margin_percent: 8.778 },
  { bookmaker_id: "williamhill", bookmaker_key: "williamhill_eu", bookmaker_title: "William Hill", market: "eu", samples: 6, average_margin_percent: 8.778 },
  { bookmaker_id: "everygame", bookmaker_key: "everygame", bookmaker_title: "Everygame", market: "eu", samples: 6, average_margin_percent: 9.629 },

  { bookmaker_id: "betclic", bookmaker_key: "betclic_fr", bookmaker_title: "Betclic", market: "fr", samples: 6, average_margin_percent: 6.927 },
  { bookmaker_id: "pmu", bookmaker_key: "pmu_fr", bookmaker_title: "PMU", market: "fr", samples: 6, average_margin_percent: 7.491 },
  { bookmaker_id: "winamax", bookmaker_key: "winamax_fr", bookmaker_title: "Winamax", market: "fr", samples: 6, average_margin_percent: 7.881 },
  { bookmaker_id: "unibet", bookmaker_key: "unibet_fr", bookmaker_title: "Unibet", market: "fr", samples: 6, average_margin_percent: 7.967 },
  { bookmaker_id: "netbet", bookmaker_key: "netbet", bookmaker_title: "NetBet", market: "fr", samples: 6, average_margin_percent: 11.177 },

  { bookmaker_id: "atg", bookmaker_key: "atg_se", bookmaker_title: "ATG", market: "se", samples: 6, average_margin_percent: 2.636 },
  { bookmaker_id: "svenskaspel", bookmaker_key: "svenska_spel", bookmaker_title: "Svenska Spel", market: "se", samples: 6, average_margin_percent: 2.636 },
  { bookmaker_id: "unibet", bookmaker_key: "unibet_se", bookmaker_title: "Unibet", market: "se", samples: 6, average_margin_percent: 2.636 },
  { bookmaker_id: "pinnacle", bookmaker_key: "pinnacle_se", bookmaker_title: "Pinnacle", market: "se", samples: 6, average_margin_percent: 3.480 },
  { bookmaker_id: "coolbet", bookmaker_key: "coolbet_se", bookmaker_title: "Coolbet", market: "se", samples: 6, average_margin_percent: 3.902 },
  { bookmaker_id: "betsson", bookmaker_key: "betsson_se", bookmaker_title: "Betsson", market: "se", samples: 6, average_margin_percent: 4.123 },
  { bookmaker_id: "nordicbet", bookmaker_key: "nordicbet_se", bookmaker_title: "NordicBet", market: "se", samples: 6, average_margin_percent: 4.123 },
  { bookmaker_id: "leovegas", bookmaker_key: "leovegas_se_domestic", bookmaker_title: "LeoVegas", market: "se", samples: 6, average_margin_percent: 4.257 },
  { bookmaker_id: "campobet", bookmaker_key: "campobet_se", bookmaker_title: "CampoBet", market: "se", samples: 6, average_margin_percent: 4.977 },
  { bookmaker_id: "hajper", bookmaker_key: "hajper_se", bookmaker_title: "Hajper", market: "se", samples: 6, average_margin_percent: 6.109 },
  { bookmaker_id: "mrgreen", bookmaker_key: "mrgreen_se", bookmaker_title: "Mr Green", market: "se", samples: 6, average_margin_percent: 8.778 },
  { bookmaker_id: "888sport", bookmaker_key: "888sport_se", bookmaker_title: "888sport", market: "se", samples: 6, average_margin_percent: 8.778 },

  { bookmaker_id: "matchbook", bookmaker_key: "matchbook_uk", bookmaker_title: "Matchbook (Exchange)", market: "uk", samples: 6, average_margin_percent: 0.905 },
  { bookmaker_id: "betfair", bookmaker_key: "betfair_ex_uk", bookmaker_title: "Betfair (Exchange)", market: "uk", samples: 6, average_margin_percent: 0.972 },
  { bookmaker_id: "smarkets", bookmaker_key: "smarkets", bookmaker_title: "Smarkets (Exchange)", market: "uk", samples: 6, average_margin_percent: 1.576 },
  { bookmaker_id: "casumo", bookmaker_key: "casumo", bookmaker_title: "Casumo", market: "uk", samples: 6, average_margin_percent: 5.346 },
  { bookmaker_id: "grosvenor", bookmaker_key: "grosvenor", bookmaker_title: "Grosvenor", market: "uk", samples: 6, average_margin_percent: 5.346 },
  { bookmaker_id: "betfred", bookmaker_key: "betfred_uk", bookmaker_title: "Betfred", market: "uk", samples: 6, average_margin_percent: 5.903 },
  { bookmaker_id: "coral", bookmaker_key: "coral", bookmaker_title: "Coral", market: "uk", samples: 6, average_margin_percent: 6.084 },
  { bookmaker_id: "betway", bookmaker_key: "betway", bookmaker_title: "Betway", market: "uk", samples: 6, average_margin_percent: 6.370 },
  { bookmaker_id: "leovegas", bookmaker_key: "leovegas_uk", bookmaker_title: "LeoVegas", market: "uk", samples: 6, average_margin_percent: 6.458 },
  { bookmaker_id: "ladbrokes", bookmaker_key: "ladbrokes_uk", bookmaker_title: "Ladbrokes", market: "uk", samples: 6, average_margin_percent: 6.840 },
  { bookmaker_id: "paddypower", bookmaker_key: "paddypower", bookmaker_title: "Paddy Power", market: "uk", samples: 6, average_margin_percent: 6.872 },
  { bookmaker_id: "betvictor", bookmaker_key: "betvictor", bookmaker_title: "BetVictor", market: "uk", samples: 6, average_margin_percent: 7.524 },
  { bookmaker_id: "skybet", bookmaker_key: "skybet", bookmaker_title: "Sky Bet", market: "uk", samples: 6, average_margin_percent: 7.723 },
  { bookmaker_id: "boylesports", bookmaker_key: "boylesports", bookmaker_title: "BoyleSports", market: "uk", samples: 6, average_margin_percent: 7.764 },
  { bookmaker_id: "888sport", bookmaker_key: "888sport_uk", bookmaker_title: "888sport", market: "uk", samples: 6, average_margin_percent: 8.511 },
  { bookmaker_id: "williamhill", bookmaker_key: "williamhill_uk", bookmaker_title: "William Hill", market: "uk", samples: 6, average_margin_percent: 8.511 },
  { bookmaker_id: "virginbet", bookmaker_key: "virginbet", bookmaker_title: "Virgin Bet", market: "uk", samples: 6, average_margin_percent: 11.053 },
  { bookmaker_id: "livescorebet", bookmaker_key: "livescorebet", bookmaker_title: "LiveScore Bet", market: "uk", samples: 6, average_margin_percent: 11.053 },
  { bookmaker_id: "betfair_sportsbook", bookmaker_key: "betfair_sb_uk", bookmaker_title: "Betfair Sportsbook", market: "uk", samples: 6, average_margin_percent: 14.383 },

  { bookmaker_id: "lowvig", bookmaker_key: "lowvig", bookmaker_title: "LowVig", market: "us", samples: 5, average_margin_percent: 3.503 },
  { bookmaker_id: "betonline", bookmaker_key: "betonlineag_us", bookmaker_title: "BetOnline", market: "us", samples: 5, average_margin_percent: 3.503 },
  { bookmaker_id: "draftkings", bookmaker_key: "draftkings", bookmaker_title: "DraftKings", market: "us", samples: 5, average_margin_percent: 4.719 },
  { bookmaker_id: "bovada", bookmaker_key: "bovada", bookmaker_title: "Bovada", market: "us", samples: 5, average_margin_percent: 5.394 },
  { bookmaker_id: "betus", bookmaker_key: "betus", bookmaker_title: "BetUS", market: "us", samples: 5, average_margin_percent: 5.394 },
  { bookmaker_id: "betrivers", bookmaker_key: "betrivers", bookmaker_title: "BetRivers", market: "us", samples: 5, average_margin_percent: 5.762 },
  { bookmaker_id: "betmgm", bookmaker_key: "betmgm", bookmaker_title: "BetMGM", market: "us", samples: 5, average_margin_percent: 6.152 },
  { bookmaker_id: "fanduel", bookmaker_key: "fanduel", bookmaker_title: "FanDuel", market: "us", samples: 5, average_margin_percent: 6.419 },
  { bookmaker_id: "mybookie", bookmaker_key: "mybookieag_us", bookmaker_title: "MyBookie", market: "us", samples: 5, average_margin_percent: 7.007 },
  { bookmaker_id: "hardrockbet", bookmaker_key: "hardrockbet", bookmaker_title: "Hard Rock Bet", market: "us", samples: 6, average_margin_percent: 4.957 },
  { bookmaker_id: "ballybet", bookmaker_key: "ballybet", bookmaker_title: "Bally Bet", market: "us", samples: 6, average_margin_percent: 5.346 },
  { bookmaker_id: "betparx", bookmaker_key: "betparx", bookmaker_title: "betPARX", market: "us", samples: 6, average_margin_percent: 5.346 },
  { bookmaker_id: "thescorebet", bookmaker_key: "thescorebet", bookmaker_title: "theScore Bet", market: "us", samples: 6, average_margin_percent: 6.896 },
];

export const bookmakerMarginData: RegionalBookmakerRow[] = rawBookmakerMarginData.map((row) => {
  const meta = BOOKMAKER_META[row.bookmaker_id] ?? FALLBACK_META;

  return {
    ...row,
    logo: meta.logo,
    url: meta.url,
    backgroundColor: meta.backgroundColor,
  };
});