const ODDS_API_BASE = "https://api.odds-api.io/v3";

function buildUrl(
  path: string,
  params: Record<string, string | number | boolean | undefined>,
) {
  const url = new URL(`${ODDS_API_BASE}${path}`);

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "") continue;
    url.searchParams.set(key, String(value));
  }

  return url.toString();
}

async function fetchJson<T>(
  path: string,
  params: Record<string, string | number | boolean | undefined>,
  revalidate = 30,
): Promise<T> {
  const apiKey = process.env.ODDS_API_KEY;

  if (!apiKey) {
    throw new Error("Missing ODDS_API_KEY");
  }

  const url = buildUrl(path, {
    ...params,
    apiKey,
  });

  const res = await fetch(url, {
    next: { revalidate },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Odds API error ${res.status}: ${text || res.statusText}`);
  }

  return res.json() as Promise<T>;
}

export type OddsApiArbLeg = {
  bookmaker: string;
  side: string;
  odds: string;
  href?: string;
};

export type OddsApiOptimalStake = {
  bookmaker: string;
  side: string;
  stake: number;
  potentialReturn: number;
};

export type OddsApiArbitrageBet = {
  id: string;
  eventId: number;
  profitMargin: number; // already percent, e.g. 0.59 means 0.59%
  totalStake: number;
  impliedProbability: number; // fraction, e.g. 0.99 means 99%
  market: {
    name: string;
    hdp?: number | null;
  };
  legs: OddsApiArbLeg[];
  optimalStakes?: OddsApiOptimalStake[];
  updatedAt?: string;
  event?: {
    home: string;
    away: string;
    date: string;
    sport: string;
    league: string;
  };
};

export async function getArbitrageBets(params: {
  bookmakers: string[];
  limit?: number;
  includeEventDetails?: boolean;
  revalidate?: number;
}) {
  return fetchJson<OddsApiArbitrageBet[]>(
    "/arbitrage-bets",
    {
      bookmakers: params.bookmakers.join(","),
      limit: params.limit ?? 100,
      includeEventDetails: params.includeEventDetails ?? true,
    },
    params.revalidate ?? 30,
  );
}