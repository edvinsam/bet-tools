export type RegionSlug =
  | "europe"
  | "north-america"
  | "south-america"
  | "asia"
  | "africa"
  | "oceania";

export type CountrySlug =
  | "sweden"
  | "united-kingdom"
  | "france"
  | "australia"
  | "united-states"
  | "netherlands"
  | "germany"
  | "italy"
  | "brazil"
  | "mexico"
  | "india"
  | "nigeria"
  | "kenya"
  | "south-africa";

export type BookmakerLocationMeta = {
  regions: RegionSlug[];
  availableCountries: CountrySlug[];
};

export const REGION_LABELS: Record<RegionSlug, string> = {
  europe: "Europe",
  "north-america": "North America",
  "south-america": "South America",
  asia: "Asia",
  africa: "Africa",
  oceania: "Oceania",
};

export const COUNTRY_LABELS: Record<CountrySlug, string> = {
  sweden: "Sweden",
  "united-kingdom": "United Kingdom",
  france: "France",
  australia: "Australia",
  "united-states": "United States",
  netherlands: "Netherlands",
  germany: "Germany",
  italy: "Italy",
  brazil: "Brazil",
  mexico: "Mexico",
  india: "India",
  nigeria: "Nigeria",
  kenya: "Kenya",
  "south-africa": "South Africa",
};

export const COUNTRIES_BY_REGION: Record<RegionSlug, CountrySlug[]> = {
  europe: ["france", "germany", "italy", "netherlands", "sweden", "united-kingdom"],
  "north-america": ["mexico", "united-states"],
  "south-america": ["brazil"],
  asia: ["india"],
  africa: ["kenya", "nigeria", "south-africa"],
  oceania: ["australia"],
};

export const REGION_OPTIONS: { slug: RegionSlug; label: string }[] = [
  { slug: "africa", label: "Africa" },
  { slug: "asia", label: "Asia" },
  { slug: "europe", label: "Europe" },
  { slug: "north-america", label: "North America" },
  { slug: "oceania", label: "Oceania" },
  { slug: "south-america", label: "South America" },
];

export const COUNTRY_OPTIONS: { slug: CountrySlug; label: string; region: RegionSlug }[] =
  Object.entries(COUNTRIES_BY_REGION)
    .flatMap(([region, countries]) =>
      countries.map((country) => ({
        slug: country,
        label: COUNTRY_LABELS[country],
        region: region as RegionSlug,
      }))
    )
    .sort((a, b) => a.label.localeCompare(b.label));

export const bookmakerLocations: Record<string, BookmakerLocationMeta> = {
  betfair: {
    regions: ["europe", "oceania"],
    availableCountries: ["australia", "sweden", "united-kingdom"],
  },
  unibet: {
    regions: ["europe", "oceania"],
    availableCountries: ["australia", "france", "netherlands", "sweden"],
  },
  tabtouch: {
    regions: ["oceania"],
    availableCountries: ["australia"],
  },
  pointsbet: {
    regions: ["oceania", "north-america"],
    availableCountries: ["australia", "united-states"],
  },
  betright: {
    regions: ["oceania"],
    availableCountries: ["australia"],
  },
  sportsbet: {
    regions: ["oceania"],
    availableCountries: ["australia"],
  },
  neds: {
    regions: ["oceania"],
    availableCountries: ["australia"],
  },
  ladbrokes: {
    regions: ["europe", "oceania"],
    availableCountries: ["australia", "united-kingdom"],
  },
  betr: {
    regions: ["oceania"],
    availableCountries: ["australia"],
  },
  tab: {
    regions: ["oceania"],
    availableCountries: ["australia"],
  },
  playup: {
    regions: ["oceania"],
    availableCountries: ["australia"],
  },

  matchbook: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  "1xbet": {
    regions: ["europe", "south-america", "asia", "africa"],
    availableCountries: ["brazil", "india", "kenya", "nigeria", "south-africa"],
  },
  marathonbet: {
    regions: ["europe"],
    availableCountries: ["germany", "italy"],
  },
  pinnacle: {
    regions: ["europe", "north-america", "south-america", "asia", "africa"],
    availableCountries: [
      "brazil",
      "india",
      "kenya",
      "mexico",
      "nigeria",
      "south-africa",
      "sweden",
      "united-states",
    ],
  },
  betonline: {
    regions: ["north-america", "europe"],
    availableCountries: ["united-states"],
  },
  coolbet: {
    regions: ["europe"],
    availableCountries: ["sweden"],
  },
  betsson: {
    regions: ["europe", "south-america"],
    availableCountries: ["brazil", "sweden"],
  },
  nordicbet: {
    regions: ["europe"],
    availableCountries: ["sweden"],
  },
  leovegas: {
    regions: ["europe"],
    availableCountries: ["sweden", "united-kingdom"],
  },
  codere: {
    regions: ["europe", "south-america", "north-america"],
    availableCountries: ["brazil", "italy", "mexico"],
  },
  gtbets: {
    regions: ["north-america", "europe"],
    availableCountries: ["united-states"],
  },
  tipico: {
    regions: ["europe"],
    availableCountries: ["germany"],
  },
  winamax: {
    regions: ["europe"],
    availableCountries: ["france", "germany"],
  },
  betclic: {
    regions: ["europe"],
    availableCountries: ["france"],
  },
  mybookie: {
    regions: ["north-america", "europe"],
    availableCountries: ["united-states"],
  },
  pmu: {
    regions: ["europe"],
    availableCountries: ["france"],
  },
  "888sport": {
    regions: ["europe"],
    availableCountries: ["sweden", "united-kingdom"],
  },
  williamhill: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  everygame: {
    regions: ["north-america", "europe"],
    availableCountries: ["united-states"],
  },
  netbet: {
    regions: ["europe"],
    availableCountries: ["france"],
  },

  atg: {
    regions: ["europe"],
    availableCountries: ["sweden"],
  },
  svenskaspel: {
    regions: ["europe"],
    availableCountries: ["sweden"],
  },
  campobet: {
    regions: ["europe"],
    availableCountries: ["sweden"],
  },
  hajper: {
    regions: ["europe"],
    availableCountries: ["sweden"],
  },
  mrgreen: {
    regions: ["europe"],
    availableCountries: ["sweden"],
  },

  smarkets: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  casumo: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  grosvenor: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  betfred: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  coral: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  betway: {
    regions: ["europe", "africa"],
    availableCountries: ["kenya", "nigeria", "south-africa", "united-kingdom"],
  },
  paddypower: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  betvictor: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  skybet: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  boylesports: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  virginbet: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  livescorebet: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },
  betfair_sportsbook: {
    regions: ["europe"],
    availableCountries: ["united-kingdom"],
  },

  lowvig: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  draftkings: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  bovada: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  betus: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  betrivers: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  betmgm: {
    regions: ["north-america", "europe"],
    availableCountries: ["united-states", "united-kingdom"],
  },
  fanduel: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  hardrockbet: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  ballybet: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  betparx: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
  thescorebet: {
    regions: ["north-america"],
    availableCountries: ["united-states"],
  },
};

export function isRegionSlug(value: string): value is RegionSlug {
  return value in REGION_LABELS;
}

export function isCountrySlug(value: string): value is CountrySlug {
  return value in COUNTRY_LABELS;
}

export function getCountryRegion(country: CountrySlug): RegionSlug | null {
  for (const [region, countries] of Object.entries(COUNTRIES_BY_REGION)) {
    if (countries.includes(country)) {
      return region as RegionSlug;
    }
  }
  return null;
}

export function getLocationHref(region?: RegionSlug, country?: CountrySlug) {
  if (region && country) return `/compare-bookmakers/${region}/${country}`;
  if (region) return `/compare-bookmakers/${region}`;
  return `/compare-bookmakers`;
}

export const REGION_SEARCH_ALIASES: Record<RegionSlug, string[]> = {
  europe: ["eu", "european"],
  "north-america": ["north america", "na", "usa", "us", "canada", "mexico"],
  "south-america": ["south america", "sa", "latam", "latin america", "latin-america"],
  asia: ["asian"],
  africa: ["african"],
  oceania: ["oceania", "australia", "anz"],
};

export const COUNTRY_SEARCH_ALIASES: Record<CountrySlug, string[]> = {
  sweden: ["se", "sverige"],
  "united-kingdom": ["uk", "u.k.", "britain", "great britain", "gb", "england"],
  france: ["fr"],
  australia: ["au", "aus"],
  "united-states": ["usa", "us", "u.s.", "america"],
  netherlands: ["nl", "holland"],
  germany: ["de", "deutschland"],
  italy: ["it"],
  brazil: ["br"],
  mexico: ["mx"],
  india: ["in"],
  nigeria: ["ng"],
  kenya: ["ke"],
  "south-africa": ["sa", "rsa"],
};
