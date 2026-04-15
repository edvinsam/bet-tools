"use client";

import { useState } from "react";
import ArbitrageCalculator from "@/components/ArbitrageCalculator";
import type { CurrencyCode } from "@/lib/currency";
import { formatMoney } from "@/lib/currency";
import "@/app/globals.css"

export default function ArbitrageCalculatorPageContent() {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");

  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "16px", textAlign: "center" }}>
        Arbitrage Calculator
      </h1>

      <ArbitrageCalculator
        currency={currency}
        setCurrency={setCurrency}
      />

      <section style={{ maxWidth: "900px", margin: "32px auto 0 auto" }}>
        <h2>What This Arbitrage Calculator Does</h2>

        <p>
          This arbitrage calculator checks whether a set of bookmaker odds creates a surebet opportunity and, if it does, calculates how to split your total stake across all outcomes to lock in a guaranteed profit.
        </p>

        <p>
          All monetary values are displayed in the selected currency. For example, a total stake of {formatMoney(100, currency)} will be split across the outcomes to target the same payout regardless of the result.
        </p>

        <h2>How the Arbitrage Calculation Works</h2>

        <p>
          An arbitrage opportunity exists when the sum of the implied probabilities of all outcomes is less than 100%. In that case, you can distribute your stake across every outcome in such a way that the payout is the same no matter what happens.
        </p>

        <ol>
          <li>Convert each set of odds into an implied probability</li>
          <li>Adjust the odds for commission if needed</li>
          <li>Sum all implied probabilities</li>
          <li>Check whether the total is below 100%</li>
          <li>Calculate the optimal stake split for each outcome</li>
          <li>Calculate the guaranteed payout, profit, and ROI</li>
        </ol>

        <h2>Formulas Used in the Calculation</h2>

        <h3>Adjusted Odds With Commission</h3>
        <p>
          If commission applies, the calculator first adjusts the decimal odds to reflect the fee charged on profits:
        </p>
        <p>Adjusted odds = 1 + (Odds − 1) × (1 − Commission)</p>
        <p>
          For example, if the odds are 3.00 and the commission is 5%, the adjusted odds become 2.90.
        </p>

        <h3>Implied Probability</h3>
        <p>
          Each set of adjusted decimal odds is converted into an implied probability:
        </p>
        <p>Implied probability = 1 / Adjusted odds</p>

        <h3>When Arbitrage Exists</h3>
        <p>
          Arbitrage exists when the sum of all implied probabilities is less than 1, or less than 100%:
        </p>
        <p>(1 / Odds₁) + (1 / Odds₂) + ... + (1 / Oddsₙ) &lt; 1</p>
        <p>
          If the total implied probability is below 100%, a surebet opportunity exists.
        </p>

        <h3>Arbitrage Percentage</h3>
        <p>The arbitrage percentage shows the size of the edge:</p>
        <p>Arbitrage % = (1 − Total implied probability) × 100</p>

        <h3>Stake Distribution</h3>
        <p>
          To guarantee the same payout across all outcomes, the total stake is distributed proportionally to each implied probability:
        </p>
        <p>
          Stakeᵢ = Total stake × (Implied probabilityᵢ / Total implied probability)
        </p>

        <h3>Payout and Guaranteed Profit</h3>
        <p>Once the stake is distributed, the payout for each outcome is:</p>
        <p>Payout = Stake × Adjusted odds</p>
        <p>The guaranteed profit is then:</p>
        <p>Guaranteed profit = Payout − Total stake</p>
        <p>The guaranteed ROI is:</p>
        <p>ROI = Guaranteed profit / Total stake</p>

        <h2>Example Arbitrage Calculation</h2>
        <p>
          Suppose you place a total stake of {formatMoney(100, currency)} across a market where the combined implied probability is below 100%.
        </p>
        <p>
          If an arbitrage exists, the calculator will show how much of your total stake should be placed on each outcome to target the same payout regardless of the result.
        </p>

        <h2>What the Results Mean</h2>
        <ul>
          <li>
            <strong>Total implied probability</strong> shows how expensive the market is after combining all outcomes.
          </li>
          <li>
            <strong>Arbitrage percentage</strong> measures how far the total implied probability is below 100%.
          </li>
          <li>
            <strong>Stake</strong> tells you how much to place on each outcome.
          </li>
          <li>
            <strong>Payout</strong> shows the return if that specific outcome wins.
          </li>
          <li>
            <strong>Profit</strong> shows your net gain after subtracting the total stake.
          </li>
          <li>
            <strong>Guaranteed ROI</strong> shows the actual return on your total stake after the optimal stake distribution.
          </li>
          <li>
            The ROI may be slightly higher than the arbitrage percentage because ROI is calculated relative to the invested stake rather than the total payout.
          </li>
        </ul>

        <h2>Notes About Arbitrage Betting</h2>
        <ul>
          <li>
            This calculator assumes that all bets can be placed successfully at the listed odds.
          </li>
          <li>
            Real-world arbitrage opportunities may disappear quickly if odds move before all bets are placed.
          </li>
          <li>
            Commission reduces effective odds and can remove an arbitrage opportunity entirely.
          </li>
          <li>
            Rounding, stake limits, and bookmaker restrictions can also affect real-world results.
          </li>
          <li>
            All monetary values in this calculator are shown in the selected currency.
          </li>
        </ul>
      </section>
    </main>
  );
}