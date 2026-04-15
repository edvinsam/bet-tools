export type OddsType =
  | "decimal"
  | "fractional"
  | "american"
  | "hongkong"
  | "malay"
  | "indonesian"
  | "probability";

export function getPlaceholder(type: OddsType): string {
  switch (type) {
    case "decimal":
      return "e.g. 2.50";
    case "fractional":
      return "e.g. 3/2";
    case "american":
      return "e.g. +150 or -120";
    case "hongkong":
      return "e.g. 1.50";
    case "malay":
      return "e.g. 0.80 or -0.80";
    case "indonesian":
      return "e.g. 1.50 or -1.25";
    case "probability":
      return "e.g. 40";
  }
}

function normalizeNumberInput(value: string): string {
  return value.trim().replace(",", ".");
}

function formatNumber(value: number, decimals = 3): string {
  return value.toFixed(decimals).replace(/\.?0+$/, "");
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}

function parseFractionalOdds(value: string): number | null {
  const cleaned = normalizeNumberInput(value);
  const parts = cleaned.split("/");

  if (parts.length !== 2) return null;

  const numerator = parseFloat(parts[0]);
  const denominator = parseFloat(parts[1]);

  if (
    isNaN(numerator) ||
    isNaN(denominator) ||
    numerator < 0 ||
    denominator <= 0
  ) {
    return null;
  }

  return 1 + numerator / denominator;
}

function decimalToFraction(decimal: number): string {
  const profit = decimal - 1;

  const tolerance = 1e-6;
  let bestNumerator = 1;
  let bestDenominator = 1;
  let bestError = Infinity;

  for (let denominator = 1; denominator <= 1000; denominator++) {
    const numerator = Math.round(profit * denominator);
    const approx = numerator / denominator;
    const currentError = Math.abs(approx - profit);

    if (currentError < bestError) {
      bestError = currentError;
      bestNumerator = numerator;
      bestDenominator = denominator;
    }

    if (currentError < tolerance) {
      break;
    }
  }

  const divisor = gcd(bestNumerator, bestDenominator);
  return `${bestNumerator / divisor}/${bestDenominator / divisor}`;
}

export function convertToDecimal(value: string, type: OddsType): number | null {
  const cleaned = normalizeNumberInput(value);

  if (cleaned === "") return null;

  if (type === "decimal") {
    const decimal = parseFloat(cleaned);
    if (isNaN(decimal) || decimal <= 1) return null;
    return decimal;
  }

  if (type === "fractional") {
    return parseFractionalOdds(cleaned);
  }

  if (type === "american") {
    const american = parseFloat(cleaned);
    if (isNaN(american) || american === 0) return null;

    if (american > 0) {
      return 1 + american / 100;
    }

    return 1 + 100 / Math.abs(american);
  }

  if (type === "hongkong") {
    const hk = parseFloat(cleaned);
    if (isNaN(hk) || hk < 0) return null;
    return 1 + hk;
  }

  if (type === "malay") {
    const malay = parseFloat(cleaned);

    if (isNaN(malay) || malay === 0 || malay < -1 || malay > 1) {
      return null;
    }

    if (malay > 0) {
      return 1 + malay;
    }

    return 1 + 1 / Math.abs(malay);
  }

  if (type === "indonesian") {
    const indo = parseFloat(cleaned);

    if (isNaN(indo) || indo === 0 || (indo > -1 && indo < 1)) {
      return null;
    }

    if (indo > 0) {
      return 1 + indo;
    }

    return 1 + 1 / Math.abs(indo);
  }

  if (type === "probability") {
    const probability = parseFloat(cleaned);
    if (isNaN(probability) || probability <= 0 || probability >= 100) {
      return null;
    }

    return 100 / probability;
  }

  return null;
}

export function convertFromDecimal(decimal: number, type: OddsType): string {
  if (decimal <= 1) return "";

  if (type === "decimal") {
    return formatNumber(decimal);
  }

  if (type === "fractional") {
    return decimalToFraction(decimal);
  }

  if (type === "american") {
    if (decimal >= 2) {
      return `+${Math.round((decimal - 1) * 100)}`;
    }

    return `${Math.round(-100 / (decimal - 1))}`;
  }

  if (type === "hongkong") {
    return formatNumber(decimal - 1);
  }

  if (type === "malay") {
    if (decimal < 2) {
      return formatNumber(decimal - 1);
    }

    if (decimal > 2) {
      return formatNumber(-1 / (decimal - 1));
    }

    return "1";
  }

  if (type === "indonesian") {
    if (decimal >= 2) {
      return formatNumber(decimal - 1);
    }

    return formatNumber(-1 / (decimal - 1));
  }

  if (type === "probability") {
    return `${formatNumber(100 / decimal, 2)}%`;
  }

  return "";
}