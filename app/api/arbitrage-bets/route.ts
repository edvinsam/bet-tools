import { NextResponse } from "next/server";
import { getCachedArbitrageSnapshot } from "@/lib/arbitrageData";

export async function GET() {
  try {
    const snapshot = await getCachedArbitrageSnapshot();
    return NextResponse.json(snapshot);
  } catch (error) {
    console.error("Failed to fetch arbitrage bets", error);
    return NextResponse.json(
      { error: "Failed to fetch arbitrage bets" },
      { status: 500 }
    );
  }
}