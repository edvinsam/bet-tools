"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { formatMoney, currencyOptions, type CurrencyCode } from "@/lib/currency";
import type { StylesConfig } from "react-select";
import Select from "react-select";
import {
  convertToDecimal,
  convertFromDecimal,
  getPlaceholder,
  type OddsType,
} from "@/lib/oddsConverter";

type OutcomeRow = {
  odds: string;
  commission: string;
};

type CurrencyOption = {
  value: CurrencyCode;
  label: string;
};

function normalizeNumberInput(value: string): string {
  return value.trim().replace(",", ".");
}

function formatAdjustedOddsForDisplay(decimalOdds: number, type: OddsType): string {
  return convertFromDecimal(decimalOdds, type);
}

const selectStyles: StylesConfig<CurrencyOption, false> = {
  control: (base, state) => ({
    ...base,
    minHeight: "2.375rem",
    border: state.isFocused
      ? "2px solid #000000"
      : "2px solid #d2d2d3",
    borderRadius: "0.375rem",
    boxShadow: "none",
    backgroundColor: "#f9fafb",
    color: "#111827",
    "&:hover": {
      border: "2px solid #000000",
    },
  }),

  valueContainer: (base) => ({
    ...base,
    padding: "0 0.5rem",
  }),

  input: (base) => ({
    ...base,
    color: "#111827",
    margin: 0,
    padding: 0,
  }),

  singleValue: (base) => ({
    ...base,
    color: "#111827",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#6b7280",
  }),

  menu: (base) => ({
    ...base,
    borderRadius: "0.375rem",
    overflow: "hidden",
    zIndex: 20,
  }),

  menuList: (base) => ({
    ...base,
    padding: 0,
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#e5e7eb"
      : state.isFocused
      ? "#f3f4f6"
      : "white",
    color: "#111827",
    cursor: "pointer",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: "#6b7280",
    "&:hover": {
      color: "#111827",
    },
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),
};

function parsePositiveNumber(value: string): number | null {
  const normalized = normalizeNumberInput(value);
  if (normalized === "") return null;

  const num = parseFloat(normalized);
  if (Number.isNaN(num) || num <= 0) return null;

  return num;
}

function parseCommissionPercent(value: string): number | null {
  const normalized = normalizeNumberInput(value);
  if (normalized === "") return 0;

  const num = parseFloat(normalized);
  if (Number.isNaN(num) || num < 0 || num >= 100) return null;

  return num;
}

function formatNumber(value: number, decimals = 2): string {
  return value.toFixed(decimals).replace(/\.?0+$/, "");
}

function formatPercent(value: number, decimals = 2): string {
  return `${value.toFixed(decimals)}%`;
}

function makeEmptyRows(count: number): OutcomeRow[] {
  return Array.from({ length: count }, () => ({
    odds: "",
    commission: "0",
  }));
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

export default function ArbitrageCalculator({
  defaultOutcomeCount = 2,
  defaultStake = "100",
  currency,
  setCurrency,
}: {
  defaultOutcomeCount?: number;
  defaultStake?: string;
  currency: CurrencyCode;
  setCurrency: React.Dispatch<React.SetStateAction<CurrencyCode>>;
}) {
  const safeDefaultCount = Math.min(6, Math.max(2, defaultOutcomeCount));

  const [outcomeCount, setOutcomeCount] = useState<number>(safeDefaultCount);
  const [rows, setRows] = useState<OutcomeRow[]>(makeEmptyRows(safeDefaultCount));
  const [totalStake, setTotalStake] = useState<string>(defaultStake);
  const [showCommissions, setShowCommissions] = useState<boolean>(false);
  const [inputType, setInputType] = useState<OddsType>("decimal");

  const searchParams = useSearchParams();

  useEffect(() => {
    const outcomesParam = searchParams.get("outcomes");
    const oddsFormatParam = searchParams.get("oddsFormat");
    const oddsParam = searchParams.get("odds");

    let nextOutcomeCount = safeDefaultCount;

    if (outcomesParam) {
      const parsedOutcomes = Number(outcomesParam);
      if (!Number.isNaN(parsedOutcomes) && parsedOutcomes >= 2 && parsedOutcomes <= 6) {
        nextOutcomeCount = parsedOutcomes;
        setOutcomeCount(parsedOutcomes);
      }
    }

    if (oddsFormatParam) {
      setInputType(oddsFormatParam as OddsType);
    }

    if (oddsParam) {
      const parsedOdds = oddsParam.split(",").map((value) => value.trim());

      if (!outcomesParam) {
        nextOutcomeCount = Math.min(6, Math.max(2, parsedOdds.length));
        setOutcomeCount(nextOutcomeCount);
      }

      setRows(
        Array.from({ length: nextOutcomeCount }, (_, index) => ({
          odds: convertFromDecimal(Number(parsedOdds[index]), oddsFormatParam as OddsType) ?? "",
          commission: "0",
        }))
      );
    }
  }, [searchParams, safeDefaultCount]);

  function updateRow(index: number, field: keyof OutcomeRow, value: string) {
    setRows((prev) =>
      prev.map((row, i) => (i === index ? { ...row, [field]: value } : row))
    );
  }

  function resetCalculator() {
    setOutcomeCount(2);
    setRows(makeEmptyRows(2));
    setTotalStake("100");
    setShowCommissions(false);
    setInputType("decimal");
  }

  const oddsPlaceholder = getPlaceholder(inputType);

  const calculation = useMemo(() => {
    const parsedStake = parsePositiveNumber(totalStake);

    const parsedRows = rows.map((row) => {
      const rawOdds = convertToDecimal(row.odds, inputType);
      const commissionPercent = showCommissions
        ? parseCommissionPercent(row.commission)
        : 0;

      if (rawOdds === null || commissionPercent === null) {
        return {
          rawOdds,
          commissionPercent,
          adjustedOdds: null as number | null,
          impliedProbability: null as number | null,
        };
      }

      const adjustedOdds =
        1 + (rawOdds - 1) * (1 - commissionPercent / 100);

      if (adjustedOdds <= 1) {
        return {
          rawOdds,
          commissionPercent,
          adjustedOdds: null,
          impliedProbability: null,
        };
      }

      return {
        rawOdds,
        commissionPercent,
        adjustedOdds,
        impliedProbability: 1 / adjustedOdds,
      };
    });

    const allRowsValid =
      parsedStake !== null &&
      parsedRows.length >= 2 &&
      parsedRows.every(
        (row) =>
          row.rawOdds !== null &&
          row.commissionPercent !== null &&
          row.adjustedOdds !== null &&
          row.impliedProbability !== null
      );

    if (!allRowsValid) {
      return {
        isValid: false,
        parsedStake,
        rows: parsedRows,
        totalImpliedProbability: null as number | null,
        arbPercent: null as number | null,
        hasArbitrage: false,
        stakes: [] as number[],
        payouts: [] as number[],
        profits: [] as number[],
        guaranteedProfit: null as number | null,
        roiPercent: null as number | null,
      };
    }

    const totalImpliedProbability = parsedRows.reduce(
      (sum, row) => sum + (row.impliedProbability as number),
      0
    );

    const hasArbitrage = totalImpliedProbability < 1;
    const arbPercent = (1 - totalImpliedProbability) * 100;

    const stakes = parsedRows.map(
      (row) =>
        (parsedStake as number) *
        ((row.impliedProbability as number) / totalImpliedProbability)
    );

    const payouts = parsedRows.map(
      (row, index) => stakes[index] * (row.adjustedOdds as number)
    );

    const profits = payouts.map((payout) => payout - (parsedStake as number));

    const guaranteedProfit = profits.length > 0 ? Math.min(...profits) : null;
    const roiPercent =
      guaranteedProfit !== null && parsedStake
        ? (guaranteedProfit / parsedStake) * 100
        : null;

    return {
      isValid: true,
      parsedStake,
      rows: parsedRows,
      totalImpliedProbability,
      arbPercent,
      hasArbitrage,
      stakes,
      payouts,
      profits,
      guaranteedProfit,
      roiPercent,
    };
  }, [rows, totalStake, showCommissions, inputType]);

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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1.125rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              flex: "1 1 28rem",
              minWidth: 0,
            }}
          >
            <div style={{ flex: "1 1 10rem", minWidth: 0 }}>
              <div style={{ marginBottom: "0.375rem", color: "#111827" }}>
                Number of outcomes
              </div>
              <select
                value={outcomeCount}
                onChange={(e) => setOutcomeCount(parseInt(e.target.value, 10))}
                style={{
                  color: "#111827",
                  padding: "0.375rem",
                  width: "100%",
                  boxSizing: "border-box",
                  border: "2px solid #d2d2d3",
                  borderRadius: "0.375rem",
                  background: "white",
                }}
              >
                <option value={2}>2-way</option>
                <option value={3}>3-way</option>
                <option value={4}>4-way</option>
                <option value={5}>5-way</option>
                <option value={6}>6-way</option>
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
                  padding: "0.375rem",
                  width: "100%",
                  boxSizing: "border-box",
                  border: "2px solid #d2d2d3",
                  borderRadius: "0.375rem",
                  background: "white",
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

            <div style={{ flex: "1 1 10rem", minWidth: 0 }}>
              <div style={{ marginBottom: "0.375rem", color: "#111827" }}>
                Total stake ({currency})
              </div>
              <input
                value={totalStake}
                onChange={(e) => setTotalStake(e.target.value)}
                inputMode="decimal"
                style={{
                  padding: "0.375rem",
                  width: "100%",
                  border: "2px solid #d2d2d3",
                  borderRadius: "0.375rem",
                  color: "#111827",
                  boxSizing: "border-box",
                  background: "white",
                }}
              />
            </div>

            <div style={{ flex: "1 1 14rem", minWidth: 0 }}>
              <div style={{ marginBottom: "0.375rem", color: "#111827" }}>
                Currency
              </div>

              <Select
                options={currencyOptions}
                value={currencyOptions.find((c) => c.value === currency)}
                onChange={(option) =>
                  setCurrency(option?.value as CurrencyCode)
                }
                isSearchable
                placeholder="Search currency..."
                styles={selectStyles}
              />
            </div>
          </div>

          <button
            onClick={resetCalculator}
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

        <label
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#111827",
            marginBottom: "1rem",
            cursor: "pointer",
            flexWrap: "wrap",
          }}
        >
          <input
            type="checkbox"
            checked={showCommissions}
            onChange={(e) => setShowCommissions(e.target.checked)}
          />
          Show commissions
        </label>

        <div style={{ width: "100%", overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              minWidth: showCommissions ? "45rem" : "39rem",
              borderCollapse: "collapse",
              color: "#111827",
              marginBottom: "1.125rem",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid #d2d2d3" }}>
                <th style={{ textAlign: "left", padding: "0.5rem" }}>Outcome</th>
                <th style={{ textAlign: "left", padding: "0.5rem" }}>
                  Odds ({formatOddsTypeLabel(inputType)})
                </th>
                {showCommissions && (
                  <th style={{ textAlign: "left", padding: "0.5rem" }}>
                    Commission %
                  </th>
                )}
                {showCommissions && (
                  <th style={{ textAlign: "left", padding: "0.5rem" }}>
                    Adjusted odds ({formatOddsTypeLabel(inputType)})
                  </th>
                )}
                <th style={{ textAlign: "left", padding: "0.5rem" }}>Stake</th>
                <th style={{ textAlign: "left", padding: "0.5rem" }}>Payout</th>
                <th style={{ textAlign: "left", padding: "0.5rem" }}>Profit</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => {
                const calcRow = calculation.rows[index];

                return (
                  <tr
                    key={index}
                    style={{ borderBottom: "1px solid #e5e7eb" }}
                  >
                    <td style={{ padding: "0.5rem" }}>{index + 1}</td>

                    <td style={{ padding: "0.5rem" }}>
                      <input
                        value={row.odds}
                        onChange={(e) =>
                          updateRow(index, "odds", e.target.value)
                        }
                        inputMode="decimal"
                        placeholder={oddsPlaceholder}
                        style={{
                          padding: "0.375rem",
                          width: "100%",
                          minWidth: "5.5rem",
                          border: "2px solid #d2d2d3",
                          borderRadius: "0.375rem",
                          color: "#111827",
                          boxSizing: "border-box",
                          background: "white",
                        }}
                      />
                    </td>

                    {showCommissions && (
                      <td style={{ padding: "0.5rem" }}>
                        <input
                          value={row.commission}
                          onChange={(e) =>
                            updateRow(index, "commission", e.target.value)
                          }
                          inputMode="decimal"
                          style={{
                            padding: "0.375rem",
                            width: "100%",
                            minWidth: "5.5rem",
                            border: "2px solid #d2d2d3",
                            borderRadius: "0.375rem",
                            color: "#111827",
                            boxSizing: "border-box",
                            background: "white",
                          }}
                        />
                      </td>
                    )}

                    {showCommissions && (
                      <td style={{ padding: "0.5rem" }}>
                        {calcRow?.adjustedOdds !== null &&
                        calcRow?.adjustedOdds !== undefined
                          ? formatAdjustedOddsForDisplay(calcRow.adjustedOdds, inputType)
                          : "—"}
                      </td>
                    )}

                    <td style={{ padding: "0.5rem" }}>
                      {calculation.isValid
                        ? formatMoney(calculation.stakes[index], currency)
                        : "—"}
                    </td>

                    <td style={{ padding: "0.5rem" }}>
                      {calculation.isValid
                        ? formatMoney(calculation.payouts[index], currency)
                        : "—"}
                    </td>

                    <td style={{ padding: "0.5rem" }}>
                      {calculation.isValid
                        ? formatMoney(calculation.profits[index], currency)
                        : "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {!calculation.isValid && (
          <div style={{ color: "#6b7280" }}>
            Enter valid {formatOddsTypeLabel(inputType).toLowerCase()} odds for all outcomes and a valid
            total stake greater than 0.
          </div>
        )}

        {calculation.isValid && (
          <div style={{ display: "grid", gap: "0.875rem" }}>
            <div
              style={{
                padding: "0.75rem",
                background: "#eef2ff",
                border: "1px solid #c7d2fe",
                borderRadius: "0.375rem",
                color: "#111827",
              }}
            >
              <strong>Total implied probability:</strong>{" "}
              {formatPercent((calculation.totalImpliedProbability as number) * 100)}
            </div>

            <div
              style={{
                padding: "0.75rem",
                background: "#eef2ff",
                border: "1px solid #c7d2fe",
                borderRadius: "0.375rem",
                color: "#111827",
              }}
            >
              <strong>Arbitrage percentage:</strong>{" "}
              {formatPercent(calculation.arbPercent as number)}
            </div>

            <div
              style={{
                padding: "0.75rem",
                background: "#eef2ff",
                border: "1px solid #c7d2fe",
                borderRadius: "0.375rem",
                color: "#111827",
              }}
            >
              <strong>Arbitrage exists:</strong>{" "}
              {calculation.hasArbitrage ? "Yes" : "No"}
            </div>

            <div
              style={{
                padding: "0.75rem",
                background: "#eef2ff",
                border: "1px solid #c7d2fe",
                borderRadius: "0.375rem",
                color: "#111827",
              }}
            >
              <strong>Guaranteed profit:</strong>{" "}
              {formatMoney(calculation.guaranteedProfit as number, currency)}
            </div>

            <div
              style={{
                padding: "0.75rem",
                background: "#eef2ff",
                border: "1px solid #c7d2fe",
                borderRadius: "0.375rem",
                color: "#111827",
              }}
            >
              <strong>Guaranteed ROI:</strong>{" "}
              {formatPercent(calculation.roiPercent as number)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}