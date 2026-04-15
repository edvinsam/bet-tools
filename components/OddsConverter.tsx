// src/components/OddsConverter.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  convertFromDecimal,
  convertToDecimal,
  getPlaceholder,
  type OddsType,
} from "@/lib/oddsConverter";
import { labelForOddsType, makeSlug } from "@/lib/oddsRoutes";

type OddsConverterProps = {
  defaultFrom: OddsType;
  defaultTo: OddsType;
};

export default function OddsConverter({
  defaultFrom,
  defaultTo,
}: OddsConverterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [inputValue, setInputValue] = useState(searchParams.get("value") ?? "");
  const [fromOddsType, setFromOddsType] = useState<OddsType>(defaultFrom);
  const [toOddsType, setToOddsType] = useState<OddsType>(defaultTo);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setFromOddsType(defaultFrom);
    setToOddsType(defaultTo);
  }, [defaultFrom, defaultTo]);

  useEffect(() => {
    setInputValue(searchParams.get("value") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (inputValue.trim() === "") {
      setResult("");
      setError("");
      return;
    }

    const decimal = convertToDecimal(inputValue, fromOddsType);

    if (decimal === null) {
      setResult("");
      setError("Invalid value for the selected format.");
      return;
    }

    setResult(convertFromDecimal(decimal, toOddsType));
    setError("");
  }, [inputValue, fromOddsType, toOddsType]);

  function navigateWithState(
    nextFrom: OddsType,
    nextTo: OddsType,
    nextValue: string
  ) {
    const slug = makeSlug(nextFrom, nextTo);
    const params = new URLSearchParams();

    if (nextValue.trim() !== "") {
      params.set("value", nextValue);
    }

    const url =
      params.toString().length > 0
        ? `/calculators/${slug}?${params.toString()}`
        : `/calculators/${slug}`;

    router.push(url);
  }

  function handleFromChange(nextFrom: OddsType) {
    if (nextFrom === toOddsType) {
      setFromOddsType(nextFrom);
      setToOddsType(fromOddsType);

      navigateWithState(nextFrom, fromOddsType, inputValue);
      return;
    }

    setFromOddsType(nextFrom);
    navigateWithState(nextFrom, toOddsType, inputValue);
  }

  function handleToChange(nextTo: OddsType) {
    if (nextTo === fromOddsType) {
      setToOddsType(nextTo);
      setFromOddsType(toOddsType);

      navigateWithState(toOddsType, nextTo, inputValue);
      return;
    }

    setToOddsType(nextTo);
    navigateWithState(fromOddsType, nextTo, inputValue);
  }

  function handleInputChange(value: string) {
    setInputValue(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value.trim() === "") {
      params.delete("value");
    } else {
      params.set("value", value);
    }

    const query = params.toString();
    const slug = makeSlug(fromOddsType, toOddsType);

    router.replace(
      query ? `/calculators/${slug}?${query}` : `/calculators/${slug}`
    );
  }

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
            gap: "1rem",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 16rem", minWidth: 0 }}>
            <div style={{ marginBottom: "0.375rem", color: "#111827" }}>
              Convert from
            </div>

            <select
              value={fromOddsType}
              onChange={(e) => handleFromChange(e.target.value as OddsType)}
              style={{
                display: "block",
                width: "100%",
                marginBottom: "0.625rem",
                padding: "0.375rem",
                color: "#111827",
                border: "2px solid #d2d2d3",
                borderRadius: "0.375rem",
                background: "white",
                boxSizing: "border-box",
              }}
            >
              <option value="decimal">Decimal Odds</option>
              <option value="fractional">Fractional Odds</option>
              <option value="american">American Odds</option>
              <option value="hongkong">Hong Kong Odds</option>
              <option value="malay">Malay Odds</option>
              <option value="indonesian">Indonesian Odds</option>
              <option value="probability">Probability %</option>
            </select>

            <input
              type="text"
              placeholder={getPlaceholder(fromOddsType)}
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              style={{
                padding: "0.5rem",
                width: "100%",
                border: "2px solid #d2d2d3",
                borderRadius: "0.375rem",
                color: "#111827",
                background: "white",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ flex: "1 1 16rem", minWidth: 0 }}>
            <div style={{ marginBottom: "0.375rem", color: "#111827" }}>
              To
            </div>

            <select
              value={toOddsType}
              onChange={(e) => handleToChange(e.target.value as OddsType)}
              style={{
                display: "block",
                width: "100%",
                marginBottom: "0.625rem",
                padding: "0.375rem",
                color: "#111827",
                border: "2px solid #d2d2d3",
                borderRadius: "0.375rem",
                background: "white",
                boxSizing: "border-box",
              }}
            >
              <option value="decimal">Decimal Odds</option>
              <option value="fractional">Fractional Odds</option>
              <option value="american">American Odds</option>
              <option value="hongkong">Hong Kong Odds</option>
              <option value="malay">Malay Odds</option>
              <option value="indonesian">Indonesian Odds</option>
              <option value="probability">Probability %</option>
            </select>
          </div>
        </div>

        <div
          style={{
            marginTop: "1rem",
            color: "#545455",
            wordBreak: "break-word",
          }}
        >
          <strong>
            {labelForOddsType(fromOddsType)} → {labelForOddsType(toOddsType)}:
          </strong>{" "}
          {result}
        </div>

        {error && (
          <div style={{ marginTop: "0.625rem", color: "red" }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}