export type Region = "all" | "us" | "uk" | "eu" | "fr" | "se" | "au";

export type RegionalBookmakerRow = {
  bookmaker_id: string;
  bookmaker_key: string;
  bookmaker_title: string;
  region: Exclude<Region, "all">;
  samples: number;
  average_margin_percent: number;
};

export const bookmakerMarginData: RegionalBookmakerRow[] = [
  { bookmaker_id: "betfair", bookmaker_key: "betfair_ex_au", bookmaker_title: "Betfair", region: "au", samples: 6, average_margin_percent: 1.059 },
  { bookmaker_id: "unibet", bookmaker_key: "unibet_au", bookmaker_title: "Unibet", region: "au", samples: 6, average_margin_percent: 5.332 },
  { bookmaker_id: "tabtouch", bookmaker_key: "tabtouch", bookmaker_title: "TABtouch", region: "au", samples: 6, average_margin_percent: 5.332 },
  { bookmaker_id: "pointsbet_au", bookmaker_key: "pointsbetau", bookmaker_title: "PointsBet (AU)", region: "au", samples: 6, average_margin_percent: 5.754 },
  { bookmaker_id: "betright", bookmaker_key: "betright", bookmaker_title: "Bet Right", region: "au", samples: 6, average_margin_percent: 6.207 },
  { bookmaker_id: "sportsbet", bookmaker_key: "sportsbet", bookmaker_title: "SportsBet", region: "au", samples: 6, average_margin_percent: 6.211 },
  { bookmaker_id: "neds", bookmaker_key: "neds", bookmaker_title: "Neds", region: "au", samples: 6, average_margin_percent: 6.651 },
  { bookmaker_id: "ladbrokes", bookmaker_key: "ladbrokes_au", bookmaker_title: "Ladbrokes", region: "au", samples: 6, average_margin_percent: 6.651 },
  { bookmaker_id: "betr", bookmaker_key: "betr_au", bookmaker_title: "Betr", region: "au", samples: 6, average_margin_percent: 7.104 },
  { bookmaker_id: "tab", bookmaker_key: "tab", bookmaker_title: "TAB", region: "au", samples: 6, average_margin_percent: 7.281 },
  { bookmaker_id: "playup", bookmaker_key: "playup", bookmaker_title: "PlayUp", region: "au", samples: 6, average_margin_percent: 7.404 },

  { bookmaker_id: "matchbook", bookmaker_key: "matchbook_eu", bookmaker_title: "Matchbook", region: "eu", samples: 6, average_margin_percent: 0.992 },
  { bookmaker_id: "betfair", bookmaker_key: "betfair_ex_eu", bookmaker_title: "Betfair", region: "eu", samples: 6, average_margin_percent: 1.059 },
  { bookmaker_id: "1xbet", bookmaker_key: "1xbet", bookmaker_title: "1xBet", region: "eu", samples: 6, average_margin_percent: 1.499 },
  { bookmaker_id: "unibet_nl", bookmaker_key: "unibet_nl", bookmaker_title: "Unibet (NL)", region: "eu", samples: 6, average_margin_percent: 2.221 },
  { bookmaker_id: "unibet_se", bookmaker_key: "unibet_se_eu", bookmaker_title: "Unibet (SE)", region: "eu", samples: 6, average_margin_percent: 2.636 },
  { bookmaker_id: "marathon_bet", bookmaker_key: "marathonbet", bookmaker_title: "Marathon Bet", region: "eu", samples: 6, average_margin_percent: 3.177 },
  { bookmaker_id: "pinnacle", bookmaker_key: "pinnacle_eu", bookmaker_title: "Pinnacle", region: "eu", samples: 6, average_margin_percent: 3.480 },
  { bookmaker_id: "betonline", bookmaker_key: "betonlineag_eu", bookmaker_title: "BetOnline.ag", region: "eu", samples: 6, average_margin_percent: 3.499 },
  { bookmaker_id: "coolbet", bookmaker_key: "coolbet_eu", bookmaker_title: "Coolbet", region: "eu", samples: 6, average_margin_percent: 3.902 },
  { bookmaker_id: "betsson", bookmaker_key: "betsson_eu", bookmaker_title: "Betsson", region: "eu", samples: 6, average_margin_percent: 4.123 },
  { bookmaker_id: "nordic_bet", bookmaker_key: "nordicbet", bookmaker_title: "Nordic Bet", region: "eu", samples: 6, average_margin_percent: 4.123 },
  { bookmaker_id: "leovegas_se", bookmaker_key: "leovegas_se", bookmaker_title: "LeoVegas (SE)", region: "eu", samples: 6, average_margin_percent: 4.257 },
  { bookmaker_id: "codere_it", bookmaker_key: "codere_it", bookmaker_title: "Codere (IT)", region: "eu", samples: 6, average_margin_percent: 5.073 },
  { bookmaker_id: "gtbets", bookmaker_key: "gtbets", bookmaker_title: "GTbets", region: "eu", samples: 6, average_margin_percent: 5.151 },
  { bookmaker_id: "tipico", bookmaker_key: "tipico", bookmaker_title: "Tipico", region: "eu", samples: 6, average_margin_percent: 6.060 },
  { bookmaker_id: "winamax_de", bookmaker_key: "winamax_de", bookmaker_title: "Winamax (DE)", region: "eu", samples: 6, average_margin_percent: 6.749 },
  { bookmaker_id: "betclic_fr", bookmaker_key: "betclic_fr_eu", bookmaker_title: "Betclic (FR)", region: "eu", samples: 6, average_margin_percent: 6.927 },
  { bookmaker_id: "mybookie", bookmaker_key: "mybookieag_eu", bookmaker_title: "MyBookie.ag", region: "eu", samples: 6, average_margin_percent: 6.999 },
  { bookmaker_id: "pmu_fr", bookmaker_key: "pmu_fr_eu", bookmaker_title: "PMU (FR)", region: "eu", samples: 6, average_margin_percent: 7.491 },
  { bookmaker_id: "winamax_fr", bookmaker_key: "winamax_fr_eu", bookmaker_title: "Winamax (FR)", region: "eu", samples: 6, average_margin_percent: 7.881 },
  { bookmaker_id: "unibet_fr", bookmaker_key: "unibet_fr_eu", bookmaker_title: "Unibet (FR)", region: "eu", samples: 6, average_margin_percent: 7.967 },
  { bookmaker_id: "888sport", bookmaker_key: "888sport_eu", bookmaker_title: "888sport", region: "eu", samples: 6, average_margin_percent: 8.778 },
  { bookmaker_id: "william_hill", bookmaker_key: "williamhill_eu", bookmaker_title: "William Hill", region: "eu", samples: 6, average_margin_percent: 8.778 },
  { bookmaker_id: "everygame", bookmaker_key: "everygame", bookmaker_title: "Everygame", region: "eu", samples: 6, average_margin_percent: 9.629 },

  { bookmaker_id: "betclic_fr", bookmaker_key: "betclic_fr", bookmaker_title: "Betclic (FR)", region: "fr", samples: 6, average_margin_percent: 6.927 },
  { bookmaker_id: "pmu_fr", bookmaker_key: "pmu_fr", bookmaker_title: "PMU (FR)", region: "fr", samples: 6, average_margin_percent: 7.491 },
  { bookmaker_id: "winamax_fr", bookmaker_key: "winamax_fr", bookmaker_title: "Winamax (FR)", region: "fr", samples: 6, average_margin_percent: 7.881 },
  { bookmaker_id: "unibet_fr", bookmaker_key: "unibet_fr", bookmaker_title: "Unibet (FR)", region: "fr", samples: 6, average_margin_percent: 7.967 },
  { bookmaker_id: "netbet", bookmaker_key: "netbet", bookmaker_title: "NetBet", region: "fr", samples: 6, average_margin_percent: 11.177 },

  { bookmaker_id: "atg_se", bookmaker_key: "atg_se", bookmaker_title: "ATG (SE)", region: "se", samples: 6, average_margin_percent: 2.636 },
  { bookmaker_id: "svenska_spel", bookmaker_key: "svenska_spel", bookmaker_title: "Svenska Spel", region: "se", samples: 6, average_margin_percent: 2.636 },
  { bookmaker_id: "unibet_se", bookmaker_key: "unibet_se", bookmaker_title: "Unibet (SE)", region: "se", samples: 6, average_margin_percent: 2.636 },
  { bookmaker_id: "pinnacle", bookmaker_key: "pinnacle_se", bookmaker_title: "Pinnacle", region: "se", samples: 6, average_margin_percent: 3.480 },
  { bookmaker_id: "coolbet", bookmaker_key: "coolbet_se", bookmaker_title: "Coolbet", region: "se", samples: 6, average_margin_percent: 3.902 },
  { bookmaker_id: "betsson", bookmaker_key: "betsson_se", bookmaker_title: "Betsson", region: "se", samples: 6, average_margin_percent: 4.123 },
  { bookmaker_id: "nordic_bet", bookmaker_key: "nordicbet_se", bookmaker_title: "Nordic Bet", region: "se", samples: 6, average_margin_percent: 4.123 },
  { bookmaker_id: "leovegas_se", bookmaker_key: "leovegas_se_domestic", bookmaker_title: "LeoVegas (SE)", region: "se", samples: 6, average_margin_percent: 4.257 },
  { bookmaker_id: "campobet_se", bookmaker_key: "campobet_se", bookmaker_title: "CampoBet (SE)", region: "se", samples: 6, average_margin_percent: 4.977 },
  { bookmaker_id: "hajper_se", bookmaker_key: "hajper_se", bookmaker_title: "Hajper (SE)", region: "se", samples: 6, average_margin_percent: 6.109 },
  { bookmaker_id: "mrgreen_se", bookmaker_key: "mrgreen_se", bookmaker_title: "Mr Green (SE)", region: "se", samples: 6, average_margin_percent: 8.778 },
  { bookmaker_id: "888sport_se", bookmaker_key: "888sport_se", bookmaker_title: "888sport (SE)", region: "se", samples: 6, average_margin_percent: 8.778 },

  { bookmaker_id: "matchbook", bookmaker_key: "matchbook_uk", bookmaker_title: "Matchbook", region: "uk", samples: 6, average_margin_percent: 0.905 },
  { bookmaker_id: "betfair", bookmaker_key: "betfair_ex_uk", bookmaker_title: "Betfair", region: "uk", samples: 6, average_margin_percent: 0.972 },
  { bookmaker_id: "smarkets", bookmaker_key: "smarkets", bookmaker_title: "Smarkets", region: "uk", samples: 6, average_margin_percent: 1.576 },
  { bookmaker_id: "casumo", bookmaker_key: "casumo", bookmaker_title: "Casumo", region: "uk", samples: 6, average_margin_percent: 5.346 },
  { bookmaker_id: "grosvenor", bookmaker_key: "grosvenor", bookmaker_title: "Grosvenor", region: "uk", samples: 6, average_margin_percent: 5.346 },
  { bookmaker_id: "betfred_uk", bookmaker_key: "betfred_uk", bookmaker_title: "Betfred (UK)", region: "uk", samples: 6, average_margin_percent: 5.903 },
  { bookmaker_id: "coral", bookmaker_key: "coral", bookmaker_title: "Coral", region: "uk", samples: 6, average_margin_percent: 6.084 },
  { bookmaker_id: "betway", bookmaker_key: "betway", bookmaker_title: "Betway", region: "uk", samples: 6, average_margin_percent: 6.370 },
  { bookmaker_id: "leovegas", bookmaker_key: "leovegas_uk", bookmaker_title: "LeoVegas", region: "uk", samples: 6, average_margin_percent: 6.458 },
  { bookmaker_id: "ladbrokes", bookmaker_key: "ladbrokes_uk", bookmaker_title: "Ladbrokes", region: "uk", samples: 6, average_margin_percent: 6.840 },
  { bookmaker_id: "paddy_power", bookmaker_key: "paddypower", bookmaker_title: "Paddy Power", region: "uk", samples: 6, average_margin_percent: 6.872 },
  { bookmaker_id: "bet_victor", bookmaker_key: "betvictor", bookmaker_title: "Bet Victor", region: "uk", samples: 6, average_margin_percent: 7.524 },
  { bookmaker_id: "sky_bet", bookmaker_key: "skybet", bookmaker_title: "Sky Bet", region: "uk", samples: 6, average_margin_percent: 7.723 },
  { bookmaker_id: "boylesports", bookmaker_key: "boylesports", bookmaker_title: "BoyleSports", region: "uk", samples: 6, average_margin_percent: 7.764 },
  { bookmaker_id: "888sport", bookmaker_key: "888sport_uk", bookmaker_title: "888sport", region: "uk", samples: 6, average_margin_percent: 8.511 },
  { bookmaker_id: "william_hill", bookmaker_key: "williamhill_uk", bookmaker_title: "William Hill", region: "uk", samples: 6, average_margin_percent: 8.511 },
  { bookmaker_id: "virgin_bet", bookmaker_key: "virginbet", bookmaker_title: "Virgin Bet", region: "uk", samples: 6, average_margin_percent: 11.053 },
  { bookmaker_id: "livescore_bet", bookmaker_key: "livescorebet", bookmaker_title: "LiveScore Bet", region: "uk", samples: 6, average_margin_percent: 11.053 },
  { bookmaker_id: "betfair_sportsbook", bookmaker_key: "betfair_sb_uk", bookmaker_title: "Betfair Sportsbook", region: "uk", samples: 6, average_margin_percent: 14.383 },

  { bookmaker_id: "lowvig", bookmaker_key: "lowvig", bookmaker_title: "LowVig.ag", region: "us", samples: 5, average_margin_percent: 3.503 },
  { bookmaker_id: "betonline", bookmaker_key: "betonlineag_us", bookmaker_title: "BetOnline.ag", region: "us", samples: 5, average_margin_percent: 3.503 },
  { bookmaker_id: "draftkings", bookmaker_key: "draftkings", bookmaker_title: "DraftKings", region: "us", samples: 5, average_margin_percent: 4.719 },
  { bookmaker_id: "bovada", bookmaker_key: "bovada", bookmaker_title: "Bovada", region: "us", samples: 5, average_margin_percent: 5.394 },
  { bookmaker_id: "betus", bookmaker_key: "betus", bookmaker_title: "BetUS", region: "us", samples: 5, average_margin_percent: 5.394 },
  { bookmaker_id: "betrivers", bookmaker_key: "betrivers", bookmaker_title: "BetRivers", region: "us", samples: 5, average_margin_percent: 5.762 },
  { bookmaker_id: "betmgm", bookmaker_key: "betmgm", bookmaker_title: "BetMGM", region: "us", samples: 5, average_margin_percent: 6.152 },
  { bookmaker_id: "fanduel", bookmaker_key: "fanduel", bookmaker_title: "FanDuel", region: "us", samples: 5, average_margin_percent: 6.419 },
  { bookmaker_id: "mybookie", bookmaker_key: "mybookieag_us", bookmaker_title: "MyBookie.ag", region: "us", samples: 5, average_margin_percent: 7.007 },
  { bookmaker_id: "hard_rock_bet", bookmaker_key: "hardrockbet", bookmaker_title: "Hard Rock Bet", region: "us", samples: 6, average_margin_percent: 4.957 },
  { bookmaker_id: "bally_bet", bookmaker_key: "ballybet", bookmaker_title: "Bally Bet", region: "us", samples: 6, average_margin_percent: 5.346 },
  { bookmaker_id: "betparx", bookmaker_key: "betparx", bookmaker_title: "betPARX", region: "us", samples: 6, average_margin_percent: 5.346 },
  { bookmaker_id: "thescore_bet", bookmaker_key: "thescorebet", bookmaker_title: "theScore Bet", region: "us", samples: 6, average_margin_percent: 6.896 },

  /*
    LATAM
    Betano
    Betano Brazil
    Betano Mexico
    Betano Peru
    Betano Argentina
    Betano Colombia

    Betsson Brazil
    Betsson Argentina
    Betsson Peru
    Betsson Colombia
    Betsson Chile

    Codere Mexico
    Codere Spain
    Codere Argentina

    Betplay
    RushBet
    Caliente
    Betcris
    Betwarrior

    Betmotion
    Estelarbet
    Doradobet
    Betfair Brazil
    Betfair Mexico
    Betfair Argentina
    Sportium
    Inkabet
    Apuesta Total
  */

  /*
    ASIA
    SBOBET
    188BET
    12BET
    Dafabet
    M88
    W88
    Fun88
    BK8
    Maxbet

    JBO
    Cmd368
    Sbobet88
    Betway Asia
    Bet365 Asia
    Betfair Asia
    1xBet Asia
    Betwinner
    Melbet
    Parimatch Asia
  */

  /*
    AFRICA
    SportyBet
    Bet9ja
    BetKing
    Betika
    Mozzart Bet
    Betway Nigeria
    Betway Kenya
    Betway Ghana

    1xBet Nigeria
    1xBet Kenya
    BangBet
    NairaBet
    22Bet Africa
    Premier Bet
    Hollywoodbets
  */

  /*
    EUROPE
    Bet365
    Bwin
    Interwetten
    Bet-at-home
    Superbet
    Betano Romania
    Betano Greece
    Betano Portugal

    ComeOn
    Betinia
    Paf
    SpeedyBet
    Snabbare
    NoAccountBet
    Sportium
  */

  /*
    UNITED KINGDOM
    SBK
    QuinnBet
    Midnite
    Planet Sport Bet
    BetUK
    Spreadex
    Sporting Index
    Betdaq
  */

  /*
    UNITED STATES
    ESPN BET
    Fanatics Sportsbook
    WynnBET
    SuperBook
    SI Sportsbook
    TwinSpires
    Betfred US
    PointsBet US
    Unibet US
  */

  /*
    GLOBAL
    AsianConnect
    Orbit Exchange
    BetInAsia
    Sportmarket
    Premium Tradings
    Sharpbook
    ISN
  */
];