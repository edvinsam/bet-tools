"use client";

import { useState } from "react";
import { convertToDecimal, getPlaceholder, type OddsType } from "@/lib/oddsConverter";

export type outcomeType = "2" | "3";

function formatPercent(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

function formatOdds(value: number): string {
  return value.toFixed(2).replace(/\.?0+$/, "");
}

function formatOddsTypeLabel(type: OddsType): string {
  switch (type) {
    case "decimal":
      return "Decimal";
    case "fractional":
      return "Fractional";
    case "american":
      return "American";
    case "hongkong":
      return "Hong Kong";
    case "malay":
      return "Malay";
    case "indonesian":
      return "Indonesian";
    case "probability":
      return "Probability";
    default:
      return "Decimal";
  }
}

export default function FairProbabilityCalc({
  defaultOutcomes = "2",
}: {
  defaultOutcomes?: outcomeType;
}) {
  const [outcomes, setOutcomes] = useState<outcomeType>(defaultOutcomes);
  const [inputType, setInputType] = useState<OddsType>("decimal");

  const [odds1, setOdds1] = useState("");
  const [odds2, setOdds2] = useState("");
  const [odds3, setOdds3] = useState("");

  function handleOutcomeChange(nextOutcome: outcomeType) {
    setOutcomes(nextOutcome);

    if (nextOutcome === "2") {
      setOdds3("");
    }
  }

  const parsedOdds1 = convertToDecimal(odds1, inputType);
  const parsedOdds2 = convertToDecimal(odds2, inputType);
  const parsedOdds3 = outcomes === "3" ? convertToDecimal(odds3, inputType) : null;

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

    fairOdds = fairProbabilities.map((prob) => 1 / prob);
  }

  const placeholder = getPlaceholder(inputType);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "block",
          width: "100%",
          textAlign: "left",
          border: "2px solid #c2c0c0",
          background: "#f9fafb",
          borderRadius: "0.5rem",
          padding: "1rem",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 10rem", minWidth: 0 }}>
            <div style={{ marginBottom: "0.375rem", color: "#111827" }}>
              Outcomes
            </div>

            <select
              value={outcomes}
              onChange={(e) =>
                handleOutcomeChange(e.target.value as outcomeType)
              }
              style={{
                color: "#111827",
                width: "100%",
                padding: "0.375rem",
                border: "2px solid #d2d2d3",
                borderRadius: "0.375rem",
                background: "white",
                boxSizing: "border-box",
              }}
            >
              <option value="2">2-way</option>
              <option value="3">3-way</option>
            </select>
          </div>

          <div style={{ flex: "1 1 12rem", minWidth: 0 }}>
            <div style={{ marginBottom: "0.375rem", color: "#111827" }}>
              Input odds format
            </div>

            <select
              value={inputType}
              onChange={(e) => setInputType(e.target.value as OddsType)}
              style={{
                color: "#111827",
                width: "100%",
                padding: "0.375rem",
                border: "2px solid #d2d2d3",
                borderRadius: "0.375rem",
                background: "white",
                boxSizing: "border-box",
              }}
            >
              <option value="decimal">Decimal</option>
              <option value="fractional">Fractional</option>
              <option value="american">American</option>
              <option value="hongkong">Hong Kong</option>
              <option value="malay">Malay</option>
              <option value="indonesian">Indonesian</option>
              <option value="probability">Probability</option>
            </select>
          </div>

          <button
            onClick={() => {
              setOdds1("");
              setOdds2("");
              setOdds3("");
            }}
            style={{
              padding: "0.375rem 0.75rem",
              border: "1px solid #d2d2d3",
              borderRadius: "0.375rem",
              background: "white",
              cursor: "pointer",
              color: "#111827",
              minHeight: "2.25rem",
              alignSelf: "flex-end",
              flex: "0 0 auto",
            }}
          >
            Reset
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "1.25rem",
          }}
        >
          <div style={{ flex: "1 1 10rem", minWidth: 0 }}>
            <div style={{ marginBottom: "0.375rem", color: "#111827" }}>
              Odds 1
            </div>
            <input
              value={odds1}
              onChange={(e) => setOdds1(e.target.value)}
              placeholder={placeholder}
              style={{
                padding: "0.375rem",
                width: "100%",
                border: "2px solid #d2d2d3",
                borderRadius: "0.375rem",
                color: "#111827",
                boxSizing: "border-box",
                background: "white",
              }}
              inputMode="decimal"
            />
          </div>

          <div style={{ flex: "1 1 10rem", minWidth: 0 }}>
            <div style={{ marginBottom: "0.375rem", color: "#111827" }}>
              Odds 2
            </div>
            <input
              value={odds2}
              onChange={(e) => setOdds2(e.target.value)}
              placeholder={placeholder}
              style={{
                padding: "0.375rem",
                width: "100%",
                border: "2px solid #d2d2d3",
                borderRadius: "0.375rem",
                color: "#111827",
                boxSizing: "border-box",
                background: "white",
              }}
              inputMode="decimal"
            />
          </div>

          {outcomes === "3" && (
            <div style={{ flex: "1 1 10rem", minWidth: 0 }}>
              <div style={{ marginBottom: "0.375rem", color: "#111827" }}>
                Odds 3
              </div>
              <input
                value={odds3}
                onChange={(e) => setOdds3(e.target.value)}
                placeholder={placeholder}
                style={{
                  padding: "0.375rem",
                  width: "100%",
                  border: "2px solid #d2d2d3",
                  borderRadius: "0.375rem",
                  color: "#111827",
                  boxSizing: "border-box",
                  background: "white",
                }}
                inputMode="decimal"
              />
            </div>
          )}
        </div>

        {!isValid && (
          <div style={{ color: "#6b7280", textAlign: "center" }}>
            Enter valid {formatOddsTypeLabel(inputType).toLowerCase()} odds for all outcomes.
          </div>
        )}

        {isValid && (
          <div style={{ color: "#111827", display: "grid", gap: "0.875rem" }}>
            <div
              style={{
                padding: "0.75rem",
                background: "#eef2ff",
                border: "1px solid #c7d2fe",
                borderRadius: "0.375rem",
              }}
            >
              <strong>Total implied probability:</strong>{" "}
              {formatPercent(totalImpliedProbability)}
            </div>

            <div
              style={{
                padding: "0.75rem",
                background: "#eef2ff",
                border: "1px solid #c7d2fe",
                borderRadius: "0.375rem",
              }}
            >
              <strong>Bookmaker margin:</strong> {formatPercent(margin)}
            </div>

            <div
              style={{
                padding: "0.75rem",
                background: "#eef2ff",
                border: "1px solid #c7d2fe",
                borderRadius: "0.375rem",
              }}
            >
              <div style={{ marginBottom: "0.625rem" }}>
                <strong>Regular implied probabilities</strong>
              </div>
              <div style={{ display: "grid", gap: "0.25rem" }}>
                <div>Outcome 1: {formatPercent(regularProbabilities[0])}</div>
                <div>Outcome 2: {formatPercent(regularProbabilities[1])}</div>
                {outcomes === "3" && (
                  <div>Outcome 3: {formatPercent(regularProbabilities[2])}</div>
                )}
              </div>
            </div>

            <div
              style={{
                padding: "0.75rem",
                background: "#eef2ff",
                border: "1px solid #c7d2fe",
                borderRadius: "0.375rem",
              }}
            >
              <div style={{ marginBottom: "0.625rem" }}>
                <strong>No-vig probabilities and fair decimal odds</strong>
              </div>

              <div style={{ display: "grid", gap: "0.25rem" }}>
                <div>
                  Outcome 1: {formatPercent(fairProbabilities[0])} → fair odds:{" "}
                  {formatOdds(fairOdds[0])}
                </div>

                <div>
                  Outcome 2: {formatPercent(fairProbabilities[1])} → fair odds:{" "}
                  {formatOdds(fairOdds[1])}
                </div>

                {outcomes === "3" && (
                  <div>
                    Outcome 3: {formatPercent(fairProbabilities[2])} → fair
                    odds: {formatOdds(fairOdds[2])}
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