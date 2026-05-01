"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { BOOKMAKER_META } from "@/lib/bookmaker-meta";
import { convertFromDecimal, type OddsType } from "@/lib/oddsConverter";
import { BOOKMAKER_KEY_MAP } from "@/lib/bookmaker-key-map";

type ArbLeg = {
  side: string;
  bookmaker: string;
  oddsDecimal: number | null;
  href: string | null;
  region: string;
};

type ArbRow = {
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
  legs: ArbLeg[];
};

type ApiResponse = {
  bookmakers: string[];
  count: number;
  rows: ArbRow[];
  generatedAt: string;
};

type Props = {
  rows: ArbRow[];
  generatedAt: string;
};

const POLL_INTERVAL_MS = 15000;
const MAX_DISPLAY_LEGS = 3;

function formatDate(value: string | null) {
  if (!value) return "—";

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatOdds(decimal: number | null, oddsFormat: OddsType) {
  if (decimal === null) return "—";
  return convertFromDecimal(decimal, oddsFormat);
}

function formatSideLabel(side: string) {
  if (!side) return "—";
  return side.charAt(0).toUpperCase() + side.slice(1);
}

function buildCalculatorHref(legs: ArbLeg[], oddsFormat: OddsType) {
  const validOdds = legs
    .map((leg) => leg.oddsDecimal)
    .filter((value): value is number => value !== null);

  return `/calculators/arbitrage-calculator?outcomes=${validOdds.length}&oddsFormat=${oddsFormat}&odds=${validOdds.join(",")}`;
}

export function resolveBookmakerKey(raw: string): string | null {
  if (!raw) return null;

  const direct = BOOKMAKER_KEY_MAP[raw];
  if (direct) return direct;

  // strict fallback — normalized lookup
  const normalized = raw.toLowerCase().replace(/[^a-z0-9]/g, "");

  const match = Object.entries(BOOKMAKER_KEY_MAP).find(
    ([key]) =>
      key.toLowerCase().replace(/[^a-z0-9]/g, "") === normalized
  );

  return match?.[1] ?? null;
}

function BookmakerLogo({
  bookmaker,
  href,
}: {
  bookmaker: string;
  href: string | null;
}) {
  const resolvedKey = resolveBookmakerKey(bookmaker);

  const meta = resolvedKey
    ? BOOKMAKER_META[resolvedKey]
    : undefined;

  if (!meta) {
    console.log("Missing bookmaker meta:", bookmaker);
  }

  const content = meta?.logo ? (
    <img
      src={meta.logo}
      alt={`${bookmaker} logo`}
      loading="lazy"
      className="block h-8 w-auto max-w-24 rounded-md object-contain sm:h-9 sm:max-w-30"
      style={
        meta.backgroundColor
          ? {
              backgroundColor: meta.backgroundColor,
              padding: "2px 6px",
            }
          : undefined
      }
    />
  ) : (
    <div className="flex h-8 min-w-24 items-center justify-center rounded-md border border-gray-200 px-3 text-xs font-medium text-gray-700 sm:h-9">
      {bookmaker}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="shrink-0"
        aria-label={`Visit ${bookmaker}`}
      >
        {content}
      </a>
    );
  }

  return <div className="shrink-0">{content}</div>;
}

function LegCell({
  leg,
  oddsFormat,
}: {
  leg: ArbLeg | undefined;
  oddsFormat: OddsType;
}) {
  if (!leg) {
    return <span className="text-sm text-gray-400">—</span>;
  }

  return (
    <div className="space-y-2">
      <BookmakerLogo bookmaker={leg.bookmaker} href={leg.href} />
      <div className="text-sm font-medium text-gray-900">
        {formatSideLabel(leg.side)}
      </div>
      <div className="text-sm text-gray-700">
        {formatOdds(leg.oddsDecimal, oddsFormat)}
      </div>
    </div>
  );
}

export default function ArbitrageBetsTable({
  rows: initialRows,
  generatedAt: initialGeneratedAt,
}: Props) {
  const [oddsFormat, setOddsFormat] = useState<OddsType>("decimal");
  const [rows, setRows] = useState<ArbRow[]>(initialRows);
  const [generatedAt, setGeneratedAt] = useState<string>(initialGeneratedAt);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshError, setLastRefreshError] = useState<string | null>(null);

  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    async function refreshRows() {
      try {
        setIsRefreshing(true);

        const res = await fetch("/api/arbitrage-bets", {
          method: "GET",
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`Refresh failed with status ${res.status}`);
        }

        const data: ApiResponse = await res.json();

        if (!isMountedRef.current) return;

        setRows(data.rows ?? []);
        setGeneratedAt(data.generatedAt ?? new Date().toISOString());
        setLastRefreshError(null);
      } catch (error) {
        if (!isMountedRef.current) return;

        console.error("Failed to refresh arbitrage bets", error);
        setLastRefreshError("Live update failed");
      } finally {
        if (isMountedRef.current) {
          setIsRefreshing(false);
        }
      }
    }

    const intervalId = window.setInterval(() => {
      void refreshRows();
    }, POLL_INTERVAL_MS);

    return () => {
      isMountedRef.current = false;
      window.clearInterval(intervalId);
    };
  }, []);

  const sortedRows = useMemo(
    () => [...rows].sort((a, b) => b.profitMarginPercent - a.profitMarginPercent),
    [rows],
  );

  return (
    <div className="mt-6">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500">Updated {formatDate(generatedAt)}</p>
          <p className="text-xs text-gray-400">
            {isRefreshing ? "Refreshing…" : "Auto-refresh every 15s"}
            {lastRefreshError ? ` • ${lastRefreshError}` : ""}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="odds-format" className="text-sm font-medium text-gray-700">
            Odds format
          </label>
          <select
            id="odds-format"
            value={oddsFormat}
            onChange={(e) => setOddsFormat(e.target.value as OddsType)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-600"
          >
            <option value="decimal">Decimal</option>
            <option value="fractional">Fractional</option>
            <option value="american">American</option>
            <option value="hongkong">Hong Kong</option>
            <option value="malay">Malay</option>
            <option value="indonesian">Indonesian</option>
            <option value="probability">Implied probability</option>
          </select>
        </div>
      </div>

      {sortedRows.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-center text-gray-600">
          No arbitrage bets found right now.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="min-w-287.5 border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-left text-sm text-gray-600">
                <th className="px-4 py-3">Event</th>
                <th className="px-4 py-3">Market</th>
                <th className="px-4 py-3">Side 1</th>
                <th className="px-4 py-3">Side 2</th>
                <th className="px-4 py-3">Side 3</th>
                <th className="px-4 py-3">Arb %</th>
                <th className="px-4 py-3">Updated</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedRows.map((row) => {
                const displayLegs = Array.from(
                  { length: MAX_DISPLAY_LEGS },
                  (_, index) => row.legs[index]
                );

                return (
                  <tr key={row.id} className="border-b border-gray-100 align-top">
                    <td className=" min-w-70 px-4 py-4 align-top">
                      <div className="font-semibold text-gray-900">
                        {row.homeTeam} vs {row.awayTeam}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        {row.leagueName ?? row.sportName ?? "Unknown competition"}
                      </div>
                      <div className="mt-1 text-sm text-gray-500">
                        {formatDate(row.eventDate)}
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-800">
                      {row.marketName}
                      {row.marketLine !== null ? ` (${row.marketLine})` : ""}
                    </td>

                    {displayLegs.map((leg, index) => (
                      <td key={`${row.id}-leg-${index}`} className="px-4 py-4">
                        <LegCell leg={leg} oddsFormat={oddsFormat} />
                      </td>
                    ))}

                    <td className="px-4 py-4 text-sm font-semibold text-green-700">
                      {row.profitMarginPercent.toFixed(2)}%
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-600">
                      {formatDate(row.updatedAt)}
                    </td>

                    <td className="px-4 py-4">
                      <Link
                        href={buildCalculatorHref(row.legs, oddsFormat)}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        Calculate stakes
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}