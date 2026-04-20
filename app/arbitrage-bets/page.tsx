export const dynamic = "force-dynamic";

import ArbitrageBetsTable from "@/components/ArbitrageBetsTable";

type ApiResponse = {
  bookmakers: string[];
  count: number;
  rows: {
    id: string;
    eventId: number;
    homeTeam: string;
    awayTeam: string;
    eventDate: string | null;
    updatedAt: string | null;
    sportName: string | null;
    leagueName: string | null;
    marketName: string;
    marketLine: number | null;
    profitMarginPercent: number;
    impliedProbabilityFraction: number;
    legs: {
      side: string;
      bookmaker: string;
      oddsDecimal: number | null;
      href: string | null;
      region: string;
    }[];
  }[];
  generatedAt: string;
};

async function getPageData(): Promise<ApiResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/arbitrage-bets?limit=100`, {
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    throw new Error("Failed to load arbitrage bets");
  }

  return res.json();
}

export const metadata = {
  title:
    "Live Arbitrage Bets — Real-Time Sports Arbitrage Opportunities | Bet Tools",

  description:
    "Find live sports arbitrage betting opportunities across major bookmakers including Bet365, Unibet, Betway and more. Updated every few seconds with real-time odds and guaranteed profit calculations.",

  keywords: [
    "arbitrage betting",
    "sports arbitrage",
    "live arbitrage bets",
    "sure bets",
    "sports betting arbitrage",
    "value betting",
    "arbitrage calculator",
    "betting opportunities",
  ],

  openGraph: {
    title:
      "Live Arbitrage Bets — Real-Time Sports Arbitrage Opportunities",
    description:
      "Discover live arbitrage betting opportunities across top bookmakers. Updated in real time with guaranteed profit calculations.",
    url: "https://bet-tools.com/arbitrage-bets",
    siteName: "Bet Tools",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Live Arbitrage Bets — Real-Time Sports Arbitrage Opportunities",
    description:
      "Real-time sports arbitrage opportunities across major bookmakers.",
  },

  alternates: {
    canonical: "https://bet-tools.com/arbitrage-bets",
  },
};

export default async function ArbitrageBetsPage() {
  const data = await getPageData();

  const index_bwin = data.bookmakers.indexOf("Bwin ES")
  data.bookmakers[index_bwin] = "Bwin"

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Arbitrage Bets
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Live arbitrage opportunities across selected bookmakers.
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Tracking: {data.bookmakers.join(", ")}
        </p>
      </div>

      <ArbitrageBetsTable rows={data.rows} generatedAt={data.generatedAt} />
    </main>
  );
}