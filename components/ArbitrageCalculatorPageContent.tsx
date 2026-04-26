"use client";

import { useState } from "react";
import Link from "next/link";
import ArbitrageCalculator from "@/components/ArbitrageCalculator";
import Breadcrumbs from "./Breadcrumbs";
import type { CurrencyCode } from "@/lib/currency";
import { formatMoney } from "@/lib/currency";

export default function ArbitrageCalculatorPageContent() {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Calculators", href: "/calculators" },
          { label: "Arbitrage Calculator" },
        ]}
      />

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Betting calculator
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Arbitrage Calculator
        </h1>

        <p className="mt-4 max-w-3xl text-slate-700">
          Check whether a set of bookmaker odds creates a surebet opportunity
          and calculate the optimal stake split needed to target the same payout
          across every outcome.
        </p>
      </section>

      <section className="mt-8">
        <ArbitrageCalculator currency={currency} setCurrency={setCurrency} />
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">
          What this arbitrage calculator does
        </h2>

        <div className="mt-3 space-y-3 text-slate-700">
          <p>
            This arbitrage calculator checks whether a set of bookmaker odds
            creates a surebet opportunity and, if it does, calculates how to
            split your total stake across all outcomes to lock in a guaranteed
            profit.
          </p>

          <p>
            All monetary values are displayed in the selected currency. For
            example, a total stake of {formatMoney(100, currency)} will be split
            across the outcomes to target the same payout regardless of the
            result.
          </p>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">
          How the arbitrage calculation works
        </h2>

        <p className="mt-3 text-slate-700">
          An arbitrage opportunity exists when the sum of the implied
          probabilities of all outcomes is less than 100%. In that case, you can
          distribute your stake across every outcome in such a way that the payout
          is the same no matter what happens.
        </p>

        <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Convert each set of odds into an implied probability</li>
          <li>Adjust the odds for commission if needed</li>
          <li>Sum all implied probabilities</li>
          <li>Check whether the total is below 100%</li>
          <li>Calculate the optimal stake split for each outcome</li>
          <li>Calculate the guaranteed payout, profit and ROI</li>
        </ol>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">
          Formulas used in the calculation
        </h2>

        <div className="mt-5 space-y-6">
          <FormulaBlock
            title="Adjusted odds with commission"
            description="If commission applies, the calculator first adjusts the decimal odds to reflect the fee charged on profits."
            formula="Adjusted odds = 1 + (Odds − 1) × (1 − Commission)"
            note="For example, if the odds are 3.00 and the commission is 5%, the adjusted odds become 2.90."
          />

          <FormulaBlock
            title="Implied probability"
            description="Each set of adjusted decimal odds is converted into an implied probability."
            formula="Implied probability = 1 / Adjusted odds"
          />

          <FormulaBlock
            title="When arbitrage exists"
            description="Arbitrage exists when the sum of all implied probabilities is less than 1, or less than 100%."
            formula="(1 / Odds₁) + (1 / Odds₂) + ... + (1 / Oddsₙ) < 1"
            note="If the total implied probability is below 100%, a surebet opportunity exists."
          />

          <FormulaBlock
            title="Arbitrage percentage"
            description="The arbitrage percentage shows the size of the edge."
            formula="Arbitrage % = (1 − Total implied probability) × 100"
          />

          <FormulaBlock
            title="Stake distribution"
            description="To guarantee the same payout across all outcomes, the total stake is distributed proportionally to each implied probability."
            formula="Stakeᵢ = Total stake × (Implied probabilityᵢ / Total implied probability)"
          />

          <FormulaBlock
            title="Payout and guaranteed profit"
            description="Once the stake is distributed, the payout, profit and ROI are calculated from the adjusted odds and total stake."
            formula="Payout = Stake × Adjusted odds"
            note="Guaranteed profit = Payout − Total stake. ROI = Guaranteed profit / Total stake."
          />
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">
          Example arbitrage calculation
        </h2>

        <div className="mt-3 space-y-3 text-slate-700">
          <p>
            Suppose you place a total stake of {formatMoney(100, currency)}
            across a market where the combined implied probability is below
            100%.
          </p>

          <p>
            If an arbitrage exists, the calculator will show how much of your
            total stake should be placed on each outcome to target the same
            payout regardless of the result.
          </p>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <InfoCard title="What the results mean">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Total implied probability</strong> shows how expensive the
              market is after combining all outcomes.
            </li>
            <li>
              <strong>Arbitrage percentage</strong> measures how far the total
              implied probability is below 100%.
            </li>
            <li>
              <strong>Stake</strong> tells you how much to place on each
              outcome.
            </li>
            <li>
              <strong>Payout</strong> shows the return if that specific outcome
              wins.
            </li>
            <li>
              <strong>Profit</strong> shows your net gain after subtracting the
              total stake.
            </li>
            <li>
              <strong>Guaranteed ROI</strong> shows the actual return on your
              total stake after the optimal stake distribution.
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Notes about arbitrage betting">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              This calculator assumes that all bets can be placed successfully
              at the listed odds.
            </li>
            <li>
              Real-world arbitrage opportunities may disappear quickly if odds
              move before all bets are placed.
            </li>
            <li>
              Commission reduces effective odds and can remove an arbitrage
              opportunity entirely.
            </li>
            <li>
              Rounding, stake limits and bookmaker restrictions can affect
              real-world results.
            </li>
            <li>
              All monetary values are shown in the selected currency.
            </li>
          </ul>
        </InfoCard>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">
          Recommended Bookmakers for Arbitrage Betting
        </h2>

        <p className="mt-3 max-w-3xl text-slate-700">
          Successful arbitrage betting depends heavily on choosing the right
          bookmakers. The most reliable arbitrage bookmakers typically offer
          competitive margins, fast withdrawals and consistent odds availability.
          Using bookmakers with high margins or slow payouts can significantly
          reduce profitability and execution speed.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <LinkCard
            href="/bookmaker-reviews/best-bookmakers-for-arbitrage-betting"
            title="Best Bookmakers for Arbitrage"
            description="Compare bookmakers based on margin, reliability and withdrawal speed."
          />

          <LinkCard
            href="/bookmaker-reviews/best-low-margin-bookmakers"
            title="Lowest Margin Bookmakers"
            description="Find bookmakers offering the most competitive odds and lowest margins."
          />

          <LinkCard
            href="/arbitrage-bets"
            title="Live Arbitrage Opportunities"
            description="Browse real-time arbitrage betting opportunities across bookmakers."
          />
        </div>

        <div className="mt-8 max-w-3xl">
          <h3 className="font-semibold text-slate-950">
            Why bookmaker choice matters for arbitrage betting
          </h3>

          <p className="mt-2 text-slate-700">
            Even small differences in bookmaker margin can have a large impact on
            long-term arbitrage profitability. Lower margins increase the
            frequency of viable arbitrage opportunities, while fast withdrawals
            and stable limits help maintain consistent execution.
          </p>
        </div>
      </section>
    </main>
  );
}

function FormulaBlock({
  title,
  description,
  formula,
  note,
}: {
  title: string;
  description: string;
  formula: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <h3 className="font-semibold text-slate-950">{title}</h3>

      <p className="mt-2 text-slate-700">{description}</p>

      <p className="mt-3 overflow-x-auto rounded-lg bg-white px-3 py-2 font-mono text-sm text-slate-900">
        {formula}
      </p>

      {note ? <p className="mt-2 text-sm text-slate-600">{note}</p> : null}
    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      <div className="mt-3 text-slate-700">{children}</div>
    </section>
  );
}

function LinkCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
    >
      <h3 className="font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </Link>
  );
}