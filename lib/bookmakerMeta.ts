export type BookmakerMeta = {
  logo: string;
  url: string;
  backgroundColor?: string;
};

export const BOOKMAKER_META: Record<string, BookmakerMeta> = {
  Unibet: {
    logo: "/logos/unibet.png",
    url: "https://www.unibet.com",
    backgroundColor: "#147a45",
  },
  Betway: {
    logo: "/logos/betway.svg",
    url: "https://betway.com",
    backgroundColor: "#ffffff",
  },
  Bet365: {
    logo: "/logos/bet365.svg",
    url: "https://www.bet365.com",
    backgroundColor: "#214036",
  },
  Betano: {
    logo: "/logos/betano.svg",
    url: "https://betano.com",
    backgroundColor: "#ff3c00",
  },
  "William Hill": {
    logo: "/logos/williamhill.png",
    url: "https://www.williamhill.com",
    backgroundColor: "#060a29",
  },
  "888Sport": {
    logo: "/logos/888sport.svg", 
    url: "https://www.888sport.com", 
    backgroundColor: "#ffffff"
  },
  "Betfair Exchange": {
    logo: "/logos/betfair.svg", 
    url: "https://www.betfair.com", 
    backgroundColor: "#ffb60d"
  },
  LeoVegas: {
    logo: "/logos/leovegas.svg",
    url: "https://www.leovegas.com",
    backgroundColor: "#f59e0b", 
  },
  "Bwin ES": {
    logo: "/logos/bwin.svg",
    url: "https://bwin.com",
    backgroundColor: "#000000"
  },
  "10BET": {
    logo: "/logos/10bet.png",
    url: "https://10bet.com",
    backgroundColor: "#ffffff"
  }
};