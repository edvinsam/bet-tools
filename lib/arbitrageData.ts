import { getArbitrageBets } from "@/lib/oddsApi";
import { normalizeArbs, type ArbRow } from "@/lib/arbitrage";

const DEFAULT_BOOKMAKERS = [
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
]
const CACHE_TTL_MS = 2_000;

type ArbitrageSnapshot = {
  generatedAt: string;
  bookmakers: string[];
  rows: ArbRow[];
};

let inMemoryCache: {
  data: ArbitrageSnapshot | null;
  fetchedAt: number;
  promise: Promise<ArbitrageSnapshot> | null;
} = {
  data: null,
  fetchedAt: 0,
  promise: null,
};

async function fetchFreshSnapshot(): Promise<ArbitrageSnapshot> {
  const raw = await getArbitrageBets({
    bookmakers: DEFAULT_BOOKMAKERS,
    limit: 100,
    includeEventDetails: true,
    revalidate: 0,
  });

  const rows = normalizeArbs(raw).sort(
    (a, b) => b.profitMarginPercent - a.profitMarginPercent
  );

  return {
    generatedAt: new Date().toISOString(),
    bookmakers: DEFAULT_BOOKMAKERS,
    rows,
  };
}

export async function getCachedArbitrageSnapshot(): Promise<ArbitrageSnapshot> {
  const now = Date.now();
  const isFresh = inMemoryCache.data && now - inMemoryCache.fetchedAt < CACHE_TTL_MS;

  console.log("Fresh upstream fetch:", new Date().toISOString());

  if (isFresh) {
    return inMemoryCache.data!;
  }

  if (inMemoryCache.promise) {
    return inMemoryCache.promise;
  }

  inMemoryCache.promise = fetchFreshSnapshot()
    .then((data) => {
      inMemoryCache.data = data;
      inMemoryCache.fetchedAt = Date.now();
      return data;
    })
    .finally(() => {
      inMemoryCache.promise = null;
    });

  return inMemoryCache.promise;
}