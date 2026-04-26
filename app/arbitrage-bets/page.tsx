export const dynamic = "force-dynamic";

import ArbitrageBetsTable from "@/components/ArbitrageBetsTable";
import Link from "next/link";

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

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-950">
          Useful arbitrage tools
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Link
            href="/calculators/arbitrage-calculator"
            className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
          >
            <h3 className="font-semibold text-slate-950">
              Arbitrage Calculator
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Calculate optimal stake distribution instantly.
            </p>
          </Link>

          <Link
            href="/bookmaker-reviews/best-bookmakers-for-arbitrage-betting"
            className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
          >
            <h3 className="font-semibold text-slate-950">
              Best Bookmakers for Arbitrage
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Compare reliable bookmakers for arbitrage betting.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}