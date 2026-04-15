"use client";

import { useState } from "react";

export type outcomeType = "2" | "3";

function normalizeNumberInput(value: string): string {
  return value.trim().replace(",", ".");
}

function parseDecimalOdds(value: string): number | null {
  const normalized = normalizeNumberInput(value);
  if (normalized === "") return null;

  const num = parseFloat(normalized);

  if (isNaN(num) || num <= 1) {
    return null;
  }

  return num;
}

function formatPercent(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

function formatOdds(value: number): string {
  return value.toFixed(2).replace(/\.?0+$/, "");
}

export default function FairProbabilityCalc({
  defaultOutcomes = "2",
}: {
  defaultOutcomes?: outcomeType;
}) {
  const [outcomes, setOutcomes] = useState<outcomeType>(defaultOutcomes);

  const [odds1, setOdds1] = useState("");
  const [odds2, setOdds2] = useState("");
  const [odds3, setOdds3] = useState("");

  function handleOutcomeChange(nextOutcome: outcomeType) {
    setOutcomes(nextOutcome);

    if (nextOutcome === "2") {
      setOdds3("");
    }
  }

  const parsedOdds1 = parseDecimalOdds(odds1);
  const parsedOdds2 = parseDecimalOdds(odds2);
  const parsedOdds3 = outcomes === "3" ? parseDecimalOdds(odds3) : null;

  const validTwoWay = parsedOdds1 !== null && parsedOdds2 !== null;
  const validThreeWay =
    parsedOdds1 !== null && parsedOdds2 !== null && parsedOdds3 !== null;

  const isValid = outcomes === "2" ? validTwoWay : validThreeWay;

  let regularProbabilities: number[] = [];
  let fairProbabilities: number[] = [];
  let fairOdds: number[] = [];
  let totalImpliedProbability = 0;
  let margin = 0;

  if (isValid) {
    const oddsArray =
      outcomes === "2"
        ? [parsedOdds1!, parsedOdds2!]
        : [parsedOdds1!, parsedOdds2!, parsedOdds3!];

    regularProbabilities = oddsArray.map((odds) => 1 / odds);
    totalImpliedProbability = regularProbabilities.reduce(
      (sum, prob) => sum + prob,
      0
    );
    margin = totalImpliedProbability - 1;

    fairProbabilities = regularProbabilities.map(
      (prob) => prob / totalImpliedProbability
    );

    fairOdds = fairProbabilities.map(
        (prob) => 1 / prob
    );

  }

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "inline-block",
          textAlign: "left",
          border: "2px solid #c2c0c0",
          background: "#f9fafb",
          borderRadius: "8px",
          padding: "20px",
          minWidth: "420px",
        }}
      >
        <div
            style={{
                marginBottom: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
            }}
            >
            <div>
                <div style={{ marginBottom: "6px", color: "#111827" }}>
                Outcomes
                </div>

                <select
                value={outcomes}
                onChange={(e) =>
                    handleOutcomeChange(
                    e.target.value as outcomeType
                    )
                }
                style={{
                    marginBottom: "6px",
                    color: "#111827",
                }}
                >
                <option value="2">2-way</option>
                <option value="3">3-way</option>
                </select>
            </div>

            <button
                onClick={() => {
                setOdds1("");
                setOdds2("");
                setOdds3("");
                }}
                style={{
                padding: "6px 12px",
                border: "1px solid #d2d2d3",
                borderRadius: "4px",
                background: "white",
                cursor: "pointer",
                color: "#111827",
                height: "36px",
                }}
            >
                Reset
            </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "space-evenly",
            marginBottom: "20px",
          }}
        >
          <div>
            <div style={{ marginBottom: "6px", color: "#111827" }}>Odds 1</div>
            <input
              value={odds1}
              onChange={(e) => setOdds1(e.target.value)}
              style={{
                padding: "6px",
                width: "115px",
                border: "2px solid #d2d2d3",
                borderRadius: "4px",
                color: "#111827",
              }}
              inputMode="decimal"
            />
          </div>

          <div>
            <div style={{ marginBottom: "6px", color: "#111827" }}>Odds 2</div>
            <input
              value={odds2}
              onChange={(e) => setOdds2(e.target.value)}
              style={{
                padding: "6px",
                width: "115px",
                border: "2px solid #d2d2d3",
                borderRadius: "4px",
                color: "#111827",
              }}
              inputMode="decimal"
            />
          </div>

          {outcomes === "3" && (
            <div>
              <div style={{ marginBottom: "6px", color: "#111827" }}>Odds 3</div>
              <input
                value={odds3}
                onChange={(e) => setOdds3(e.target.value)}
                style={{
                  padding: "6px",
                  width: "115px",
                  border: "2px solid #d2d2d3",
                  borderRadius: "4px",
                  color: "#111827",
                }}
                inputMode="decimal"
              />
            </div>
          )}
        </div>

        {!isValid && (
          <div style={{ color: "#6b7280", textAlign: "center" }}>
            Enter valid decimal odds for all outcomes.
          </div>
        )}

        {isValid && (
          <div style={{ color: "#111827" }}>
            <div
                style={{
                    marginTop: "15px",
                    padding: "12px",
                    background: "#eef2ff",
                    border: "1px solid #c7d2fe",
                    borderRadius: "6px",
                }}
            >
              <strong>Total implied probability:</strong>{" "}
              {formatPercent(totalImpliedProbability)}
            </div>

            <div style={{
                    marginTop: "15px",
                    padding: "12px",
                    background: "#eef2ff",
                    border: "1px solid #c7d2fe",
                    borderRadius: "6px",
                }}>
              <strong>Bookmaker margin:</strong> {formatPercent(margin)}
            </div>
            
            <div style={{
                    marginTop: "15px",
                    padding: "12px",
                    background: "#eef2ff",
                    border: "1px solid #c7d2fe",
                    borderRadius: "6px",
                }}>
                <div style={{ marginBottom: "10px" }}>
                    <strong>Regular implied probabilities</strong>
                </div>
                <div>
                    <div>Outcome 1: {formatPercent(regularProbabilities[0])}</div>
                    <div>Outcome 2: {formatPercent(regularProbabilities[1])}</div>
                    {outcomes === "3" && (
                        <div>Outcome 3: {formatPercent(regularProbabilities[2])}</div>
                    )}
                </div>
            </div>
            
            <div style={{
                    marginTop: "15px",
                    padding: "12px",
                    background: "#eef2ff",
                    border: "1px solid #c7d2fe",
                    borderRadius: "6px",
                }}>
                <div style={{ marginBottom: "10px" }}>
                    <strong>No-vig probabilities</strong>
                </div>

                <div>
                <div>
                    Outcome 1: {formatPercent(fairProbabilities[0])}
                    {" "}
                    → fair odds: {formatOdds(fairOdds[0])}
                </div>

                <div>
                    Outcome 2: {formatPercent(fairProbabilities[1])}
                    {" "}
                    → fair odds: {formatOdds(fairOdds[1])}
                </div>

                {outcomes === "3" && (
                    <div>
                    Outcome 3: {formatPercent(fairProbabilities[2])}
                    {" "}
                    → fair odds: {formatOdds(fairOdds[2])}
                    </div>
                )}
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}