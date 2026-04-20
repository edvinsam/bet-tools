import type { OddsType } from "@/lib/oddsConverter";

export type ConversionKey = `${OddsType}-to-${OddsType}`;

export type ConversionFaq = {
  question: string;
  answer: string;
};

export type WorkedExample = {
  heading: string;
  input: string;
  explanation: string[];
  result: string;
};

const exampleInputsByType: Record<OddsType, string[]> = {
  decimal: ["1.80", "2.50", "3.25"],
  fractional: ["1/2", "3/2", "5/1"],
  american: ["+100", "+150", "+200", "-120", "-200"],
  hongkong: ["0.80", "1.50", "2.25"],
  malay: ["0.50", "-0.67", "-0.40"],
  indonesian: ["1.00", "1.50", "2.00", "-1.25"],
  probability: ["25%", "40%", "66.67%"],
};

function pickExampleInput(from: OddsType, to: OddsType): string {
  const options = exampleInputsByType[from];
  return options[hashString(`${from}-${to}-worked-example`)% options.length];
}

function parseExampleInput(type: OddsType, input: string): number {
  switch (type) {
    case "decimal":
    case "hongkong":
    case "malay":
    case "indonesian":
      return Number(input);
    case "american":
      return Number(input);
    case "probability":
      return Number(input.replace("%", ""));
    case "fractional": {
      const [num, den] = input.split("/").map(Number);
      return num / den;
    }
    default:
      return Number(input);
  }
}

function formatDecimal(value: number): string {
  return value.toFixed(2).replace(/\.00$/, "");
}

function formatPercent(value: number): string {
  return `${value.toFixed(2).replace(/\.00$/, "")}%`;
}

function getFractionParts(input: string): { num: number; den: number } {
  const [num, den] = input.split("/").map(Number);
  return { num, den };
}

export type ConversionContent = {
  title: string;
  intro: string;
  example: string;
  formulaTitle: string;
  formulaText: string;
  fromDescription: string;
  toDescription: string;
  supportedFormatsText: string;
  whyUseText: string;
  commonMistake: string;
  pairNote: string;
  faq: ConversionFaq[];
  workedExample: WorkedExample;
};

const oddsTypeLabels: Record<OddsType, string> = {
  decimal: "Decimal",
  fractional: "Fractional",
  american: "American",
  hongkong: "Hong Kong",
  malay: "Malaysian",
  indonesian: "Indonesian",
  probability: "Probability",
};

const oddsTypeLongLabels: Record<OddsType, string> = {
  decimal: "decimal odds",
  fractional: "fractional odds",
  american: "American odds",
  hongkong: "Hong Kong odds",
  malay: "Malaysian odds",
  indonesian: "Indonesian odds",
  probability: "implied probability",
};

const titleLabels: Record<OddsType, string> = {
  decimal: "Decimal Odds",
  fractional: "Fractional Odds",
  american: "American Odds",
  hongkong: "Hong Kong Odds",
  malay: "Malaysian Odds",
  indonesian: "Indonesian Odds",
  probability: "Probability Odds",
};

const introTemplates = [
  (from: string, to: string) =>
    `Use this calculator to convert ${from} into ${to}. Enter a valid value and the converter will instantly return the equivalent ${to} value.`,
  (from: string, to: string) =>
    `This ${from} to ${to} converter helps you switch between two common betting odds formats in seconds. Type in your ${from} and the matching ${to} will be calculated automatically.`,
  (from: string, to: string) =>
    `Need to convert ${from} to ${to}? This calculator does it automatically and is useful when comparing odds formats across bookmakers, exchanges, and regions.`,
];

const explanationVariants: Record<OddsType, string[]> = {
  decimal: [
    "Decimal odds are the most widely used odds format in Europe, Canada, and Australia. They show the total payout for every 1 unit staked, including your original stake. For example, decimal odds of 2.50 return 2.50 for every 1 wagered, which means 1.50 profit plus the original 1 stake.",
    "Decimal odds are often called European odds and are one of the easiest formats to read. The number represents total return rather than just profit, which makes payout calculations straightforward. A decimal price of 1.80 means a 1 unit stake returns 1.80 in total.",
    "Because decimal odds include the original stake in the quoted number, they are intuitive for both casual and professional bettors. They are commonly used on sportsbooks outside the United States and are especially useful for quickly comparing prices across markets."
  ],
  fractional: [
    "Fractional odds are the traditional format in the UK and Ireland. They show profit relative to stake, so odds of 3/2 mean you win 3 units in profit for every 2 units staked. Your total return would therefore be 5 units.",
    "Fractional odds express the relationship between profit and stake as a ratio. For example, 5/1 means 5 units of profit for every 1 unit bet, while 1/2 means 1 unit of profit for every 2 units staked. This format is still common in horse racing and UK-facing sportsbooks.",
    "Unlike decimal odds, fractional odds focus on profit only and not total payout. They can look less intuitive at first, but they are useful once you understand that the left side of the fraction is profit and the right side is the stake."
  ],
  american: [
    "American odds are the standard format used by most US sportsbooks. Positive odds show how much profit you would make on a 100 stake, while negative odds show how much you need to stake in order to make 100 in profit. For example, +150 returns 150 profit on a 100 bet, while -200 requires a 200 stake to profit 100.",
    "American odds are built around a 100-unit reference point. If the number is positive, it represents profit from a 100 stake. If it is negative, it represents the stake needed to win 100. This format is especially common in betting on US sports such as the NFL, NBA, MLB, and NHL.",
    "The sign is the key to reading American odds. Positive prices indicate underdogs and larger returns per 100 staked, while negative prices indicate favourites and a larger required stake to win 100. Once converted, they map cleanly to decimal and implied probability."
  ],
  hongkong: [
    "Hong Kong odds are mainly used in Hong Kong and some other Asian betting markets. They show profit per 1 unit staked, which means they are very similar to decimal odds minus 1. For example, Hong Kong odds of 1.50 mean a 1 unit stake returns 1.50 profit and 2.50 in total.",
    "Hong Kong odds are a profit-only format. They do not include the return of the original stake in the quoted number, which is why they are always exactly 1 lower than equivalent decimal odds. This makes them simple to convert once you know the decimal price.",
    "Many bettors find Hong Kong odds intuitive because they directly express net winnings per unit staked. A Hong Kong quote of 0.80 means 0.80 profit for every 1 staked, while the total return would be 1.80 including stake."
  ],
  malay: [
    "Malaysian odds are commonly used in parts of Southeast Asia. They are quoted between -1 and 1 and can be either positive or negative. Because of the way the format is constructed, conversion is usually easiest by translating Malaysian odds into decimal odds first.",
    "Malay odds are a compact format constrained to values between -1 and 1. That makes them very different visually from decimal or American odds, even when the implied probability is the same. A conversion step through decimal odds usually gives the clearest result.",
    "Malaysian odds can be confusing at first because they use a smaller numerical range and separate rules depending on whether the quote is positive or negative. Once you convert them into decimal odds, they become much easier to compare with other formats."
  ],
  indonesian: [
    "Indonesian odds are used in Indonesia and in some other Asian betting markets. They work similarly to American odds, but on a smaller scale. In practice, Indonesian odds are equivalent to American odds divided by 100, so +1.50 corresponds to +150 American odds.",
    "Like American odds, Indonesian odds can be either positive or negative. Positive values show profit per 1 unit staked, while negative values show how many units you need to stake to profit 1. This makes them easy to interpret once you understand the sign.",
    "Indonesian odds are a scaled version of American odds and are popular because they express profit and stake requirements in a more compact way. They are especially convenient when comparing Asian-market prices across different sportsbooks."
  ],
  probability: [
    "Implied probability expresses the bookmaker price as the estimated chance of an outcome occurring. For example, a 40% implied probability corresponds to decimal odds of 2.50. This format is widely used by value bettors and arbitrage bettors because it makes pricing comparisons easier.",
    "Probability is not an odds format in the traditional display sense, but it is one of the most useful ways to think about betting prices. Turning odds into percentages makes it easier to compare bookmaker lines with your own projections or model estimates.",
    "Implied probability shows the chance suggested by the quoted odds before adjusting for bookmaker margin. It is useful for evaluating bet value, comparing market prices, and understanding how aggressive or conservative a sportsbook’s pricing really is."
  ],
};

const supportedFormatsTemplates = [
  (from: string, to: string) =>
    `This converter works alongside other major betting formats as well, including decimal odds, fractional odds, American odds, Hong Kong odds, Malaysian odds, Indonesian odds, and implied probability. That makes it useful when comparing prices across both European and Asian sportsbooks.`,
  (from: string, to: string) =>
    `In addition to converting ${from} into ${to}, the underlying calculator supports the main odds formats used worldwide. This includes decimal, fractional, American, Hong Kong, Malaysian, Indonesian, and probability-based pricing.`,
  () =>
    `The calculator is part of a full odds conversion toolset covering the most widely used betting formats. Whether you are working with European-style prices, US lines, Asian odds, or implied probability, you can move between them quickly from the same tool.`
];

const whyUseTemplates = [
  (from: string, to: string) =>
    `Converting ${from} into ${to} helps when different bookmakers display the same market in different formats. It becomes easier to compare prices, check implied probability, estimate value, and avoid mistakes when switching between sportsbooks.`,
  (from: string, to: string) =>
    `A ${from} to ${to} conversion is useful when researching bets across multiple regions or bookmakers. Instead of mentally translating between formats, you can compare the same price in a form that is easier for you to understand.`,
  (from: string, to: string) =>
    `Using an odds converter saves time and reduces pricing errors. If one site lists a market in ${from} and another shows it in ${to}, converting both into a familiar format makes value comparisons much more reliable.`
];

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pickFromArray<T>(items: T[], seed: string): T {
  return items[hashString(seed) % items.length];
}

function pickVariant(type: OddsType, seed: string): string {
  return pickFromArray(explanationVariants[type], seed);
}

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

function decimalToFractionalString(decimalOdds: number): string {
  const value = decimalOdds - 1;
  const precision = 1000;
  const numerator = Math.round(value * precision);
  const denominator = precision;
  const divisor = gcd(numerator, denominator);
  return `${numerator / divisor}/${denominator / divisor}`;
}

function toDecimal(type: OddsType, rawValue: number): number {
  switch (type) {
    case "decimal":
      return rawValue;
    case "fractional":
      return rawValue + 1;
    case "american":
      return rawValue > 0 ? rawValue / 100 + 1 : 100 / Math.abs(rawValue) + 1;
    case "hongkong":
      return rawValue + 1;
    case "malay":
      return rawValue > 0 ? rawValue + 1 : 1 + 1 / Math.abs(rawValue);
    case "indonesian":
      return rawValue > 0 ? rawValue + 1 : 1 + 1 / Math.abs(rawValue);
    case "probability":
      return 100 / rawValue;
    default:
      return rawValue;
  }
}

function fromDecimal(type: OddsType, decimalOdds: number): string {
  switch (type) {
    case "decimal":
      return decimalOdds.toFixed(2).replace(/\.00$/, "");
    case "fractional":
      return decimalToFractionalString(decimalOdds);
    case "american": {
      if (decimalOdds >= 2) {
        return `+${Math.round((decimalOdds - 1) * 100)}`;
      }
      return `${Math.round(-100 / (decimalOdds - 1))}`;
    }
    case "hongkong":
      return (decimalOdds - 1).toFixed(2).replace(/\.00$/, "");
    case "malay": {
      const value =
        decimalOdds < 2 ? decimalOdds - 1 : -1 / (decimalOdds - 1);
      return value.toFixed(3).replace(/\.?0+$/, "");
    }
    case "indonesian": {
      const value =
        decimalOdds >= 2 ? decimalOdds - 1 : -1 / (decimalOdds - 1);
      return value.toFixed(3).replace(/\.?0+$/, "");
    }
    case "probability":
      return `${(100 / decimalOdds).toFixed(2).replace(/\.00$/, "")}%`;
    default:
      return decimalOdds.toString();
  }
}

function getRepresentativeRawValue(type: OddsType): number {
  switch (type) {
    case "decimal":
      return 2.5;
    case "fractional":
      return 1.5;
    case "american":
      return 150;
    case "hongkong":
      return 1.5;
    case "malay":
      return -2 / 3;
    case "indonesian":
      return 1.5;
    case "probability":
      return 40;
    default:
      return 2.5;
  }
}

const exampleSourceText: Record<OddsType, string> = {
  decimal: "2.50",
  fractional: "3/2",
  american: "+150",
  hongkong: "1.50",
  malay: "-0.667",
  indonesian: "1.50",
  probability: "40%",
};

function getExample(from: OddsType, to: OddsType): string {
  const rawValue = getRepresentativeRawValue(from);
  const decimalOdds = toDecimal(from, rawValue);
  const converted = fromDecimal(to, decimalOdds);

  return `For example, ${oddsTypeLongLabels[from]} of ${exampleSourceText[from]} convert to ${oddsTypeLongLabels[to]} of ${converted}.`;
}

function getWorkedExample(from: OddsType, to: OddsType): WorkedExample {
  const input = pickExampleInput(from, to);
  const rawValue = parseExampleInput(from, input);

  // DECIMAL -> *
  if (from === "decimal" && to === "fractional") {
    const fraction = decimalToFractionalString(rawValue);
    const profitOnly = rawValue - 1;

    return {
      heading: "Worked example",
      input: `Convert decimal odds of ${input} to fractional odds`,
      explanation: [
        `Start with decimal odds of ${input}.`,
        `Subtract 1 to remove the returned stake: ${input} - 1 = ${formatDecimal(profitOnly)}.`,
        `Convert ${formatDecimal(profitOnly)} into a simplified fraction.`,
      ],
      result: `The fractional odds are ${fraction}.`,
    };
  }

  if (from === "decimal" && to === "american") {
    if (rawValue >= 2) {
      const american = Math.round((rawValue - 1) * 100);
      return {
        heading: "Worked example",
        input: `Convert decimal odds of ${input} to American odds`,
        explanation: [
          `Since ${input} is greater than or equal to 2.00, the American odds will be positive.`,
          `Use the formula (decimal odds - 1) × 100.`,
          `(${input} - 1) × 100 = ${american}.`,
        ],
        result: `The American odds are +${american}.`,
      };
    }

    const american = Math.round(-100 / (rawValue - 1));
    return {
      heading: "Worked example",
      input: `Convert decimal odds of ${input} to American odds`,
      explanation: [
        `Since ${input} is below 2.00, the American odds will be negative.`,
        `Use the formula -100 / (decimal odds - 1).`,
        `-100 / (${input} - 1) = ${american}.`,
      ],
      result: `The American odds are ${american}.`,
    };
  }

  if (from === "decimal" && to === "hongkong") {
    const hk = rawValue - 1;
    return {
      heading: "Worked example",
      input: `Convert decimal odds of ${input} to Hong Kong odds`,
      explanation: [
        `Hong Kong odds show profit only, while decimal odds include stake.`,
        `Subtract 1 from the decimal odds.`,
        `${input} - 1 = ${formatDecimal(hk)}.`,
      ],
      result: `The Hong Kong odds are ${formatDecimal(hk)}.`,
    };
  }

  if (from === "decimal" && to === "malay") {
    if (rawValue < 2) {
      const malay = rawValue - 1;
      return {
        heading: "Worked example",
        input: `Convert decimal odds of ${input} to Malaysian odds`,
        explanation: [
          `Since ${input} is below 2.00, the Malaysian odds will be positive.`,
          `Use the formula decimal odds - 1.`,
          `${input} - 1 = ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
        ],
        result: `The Malaysian odds are ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
      };
    }

    const malay = -1 / (rawValue - 1);
    return {
      heading: "Worked example",
      input: `Convert decimal odds of ${input} to Malaysian odds`,
      explanation: [
        `Since ${input} is 2.00 or higher, the Malaysian odds will be negative.`,
        `Use the formula -1 / (decimal odds - 1).`,
        `-1 / (${input} - 1) = ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
      ],
      result: `The Malaysian odds are ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
    };
  }

  if (from === "decimal" && to === "indonesian") {
    if (rawValue >= 2) {
      const indo = rawValue - 1;
      return {
        heading: "Worked example",
        input: `Convert decimal odds of ${input} to Indonesian odds`,
        explanation: [
          `Since ${input} is 2.00 or higher, the Indonesian odds will be positive.`,
          `Use the formula decimal odds - 1.`,
          `${input} - 1 = ${indo.toFixed(3).replace(/\.?0+$/, "")}.`,
        ],
        result: `The Indonesian odds are ${indo.toFixed(3).replace(/\.?0+$/, "")}.`,
      };
    }

    const indo = -1 / (rawValue - 1);
    return {
      heading: "Worked example",
      input: `Convert decimal odds of ${input} to Indonesian odds`,
      explanation: [
        `Since ${input} is below 2.00, the Indonesian odds will be negative.`,
        `Use the formula -1 / (decimal odds - 1).`,
        `-1 / (${input} - 1) = ${indo.toFixed(3).replace(/\.?0+$/, "")}.`,
      ],
      result: `The Indonesian odds are ${indo.toFixed(3).replace(/\.?0+$/, "")}.`,
    };
  }

  if (from === "decimal" && to === "probability") {
    const probability = 100 / rawValue;
    return {
      heading: "Worked example",
      input: `Convert decimal odds of ${input} to implied probability`,
      explanation: [
        `Use the formula 100 / decimal odds.`,
        `100 / ${input} = ${probability.toFixed(2)}.`,
      ],
      result: `The implied probability is ${formatPercent(probability)}.`,
    };
  }

  // FRACTIONAL -> *
  if (from === "fractional" && to === "decimal") {
    const { num, den } = getFractionParts(input);
    const decimal = num / den + 1;

    return {
      heading: "Worked example",
      input: `Convert fractional odds of ${input} to decimal odds`,
      explanation: [
        `Convert the fraction to a decimal: ${num} ÷ ${den} = ${(num / den).toFixed(2)}.`,
        `Add 1 to include the returned stake.`,
        `${(num / den).toFixed(2)} + 1 = ${decimal.toFixed(2)}.`,
      ],
      result: `The decimal odds are ${decimal.toFixed(2)}.`,
    };
  }

  if (from === "fractional" && to === "american") {
    const { num, den } = getFractionParts(input);
    const fractionValue = num / den;

    if (fractionValue >= 1) {
      const american = Math.round(fractionValue * 100);
      return {
        heading: "Worked example",
        input: `Convert fractional odds of ${input} to American odds`,
        explanation: [
          `Convert the fraction to a decimal profit value: ${num} ÷ ${den} = ${fractionValue.toFixed(2)}.`,
          `Since the profit value is at least 1, the American odds will be positive.`,
          `${fractionValue.toFixed(2)} × 100 = ${american}.`,
        ],
        result: `The American odds are +${american}.`,
      };
    }

    const american = Math.round(-100 / fractionValue);
    return {
      heading: "Worked example",
      input: `Convert fractional odds of ${input} to American odds`,
      explanation: [
        `Convert the fraction to a decimal profit value: ${num} ÷ ${den} = ${fractionValue.toFixed(2)}.`,
        `Since the profit value is below 1, the American odds will be negative.`,
        `-100 / ${fractionValue.toFixed(2)} = ${american}.`,
      ],
      result: `The American odds are ${american}.`,
    };
  }

  if (from === "fractional" && to === "hongkong") {
    const { num, den } = getFractionParts(input);
    const hk = num / den;

    return {
      heading: "Worked example",
      input: `Convert fractional odds of ${input} to Hong Kong odds`,
      explanation: [
        `Fractional odds already express profit relative to stake.`,
        `Convert the fraction to a decimal number: ${num} ÷ ${den} = ${hk.toFixed(2)}.`,
        `That value is the Hong Kong odds.`,
      ],
      result: `The Hong Kong odds are ${formatDecimal(hk)}.`,
    };
  }

  if (from === "fractional" && to === "malay") {
    const { num, den } = getFractionParts(input);
    const profitValue = num / den;

    if (profitValue < 1) {
      return {
        heading: "Worked example",
        input: `Convert fractional odds of ${input} to Malaysian odds`,
        explanation: [
          `Convert the fraction to a decimal profit value: ${num} ÷ ${den} = ${profitValue.toFixed(2)}.`,
          `Since the profit value is below 1, the Malaysian odds stay positive.`,
        ],
        result: `The Malaysian odds are ${profitValue.toFixed(3).replace(/\.?0+$/, "")}.`,
      };
    }

    const malay = -1 / profitValue;
    return {
      heading: "Worked example",
      input: `Convert fractional odds of ${input} to Malaysian odds`,
      explanation: [
        `Convert the fraction to a decimal profit value: ${num} ÷ ${den} = ${profitValue.toFixed(2)}.`,
        `Since the profit value is 1 or higher, the Malaysian odds become negative.`,
        `-1 / ${profitValue.toFixed(2)} = ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
      ],
      result: `The Malaysian odds are ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
    };
  }

  if (from === "fractional" && to === "indonesian") {
    const { num, den } = getFractionParts(input);
    const indo = num / den;

    return {
      heading: "Worked example",
      input: `Convert fractional odds of ${input} to Indonesian odds`,
      explanation: [
        `Convert the fraction to a decimal profit value: ${num} ÷ ${den} = ${indo.toFixed(2)}.`,
        `That profit-per-unit figure is the Indonesian odds when the result is positive.`,
      ],
      result: `The Indonesian odds are ${indo.toFixed(3).replace(/\.?0+$/, "")}.`,
    };
  }

  if (from === "fractional" && to === "probability") {
    const { num, den } = getFractionParts(input);
    const probability = (den / (num + den)) * 100;

    return {
      heading: "Worked example",
      input: `Convert fractional odds of ${input} to implied probability`,
      explanation: [
        `Use the formula denominator / (numerator + denominator).`,
        `${den} / (${num} + ${den}) = ${(probability / 100).toFixed(4)}.`,
        `Convert that decimal into a percentage.`,
      ],
      result: `The implied probability is ${formatPercent(probability)}.`,
    };
  }

  // AMERICAN -> *
  if (from === "american" && to === "decimal") {
    if (rawValue > 0) {
      const decimal = rawValue / 100 + 1;
      return {
        heading: "Worked example",
        input: `Convert American odds of ${input} to decimal odds`,
        explanation: [
          `Since ${input} is positive, use the formula (American odds / 100) + 1.`,
          `${rawValue} / 100 + 1 = ${decimal.toFixed(2)}.`,
        ],
        result: `The decimal odds are ${decimal.toFixed(2)}.`,
      };
    }

    const decimal = 100 / Math.abs(rawValue) + 1;
    return {
      heading: "Worked example",
      input: `Convert American odds of ${input} to decimal odds`,
      explanation: [
        `Since ${input} is negative, use the formula (100 / |American odds|) + 1.`,
        `100 / ${Math.abs(rawValue)} + 1 = ${decimal.toFixed(2)}.`,
      ],
      result: `The decimal odds are ${decimal.toFixed(2)}.`,
    };
  }

  if (from === "american" && to === "fractional") {
    if (rawValue > 0) {
      const profit = rawValue / 100;
      const fraction = decimalToFractionalString(profit + 1);
      return {
        heading: "Worked example",
        input: `Convert American odds of ${input} to fractional odds`,
        explanation: [
          `Since ${input} is positive, divide by 100 to get the profit-per-unit figure.`,
          `${rawValue} / 100 = ${profit.toFixed(2)}.`,
          `Convert ${profit.toFixed(2)} into a simplified fraction.`,
        ],
        result: `The fractional odds are ${fraction}.`,
      };
    }

    const profit = 100 / Math.abs(rawValue);
    const fraction = decimalToFractionalString(profit + 1);
    return {
      heading: "Worked example",
      input: `Convert American odds of ${input} to fractional odds`,
      explanation: [
        `Since ${input} is negative, use 100 / |American odds| to get the profit-per-unit figure.`,
        `100 / ${Math.abs(rawValue)} = ${profit.toFixed(2)}.`,
        `Convert ${profit.toFixed(2)} into a simplified fraction.`,
      ],
      result: `The fractional odds are ${fraction}.`,
    };
  }

  if (from === "american" && to === "hongkong") {
    if (rawValue > 0) {
      const hk = rawValue / 100;
      return {
        heading: "Worked example",
        input: `Convert American odds of ${input} to Hong Kong odds`,
        explanation: [
          `Since ${input} is positive, divide by 100.`,
          `${rawValue} / 100 = ${hk.toFixed(2)}.`,
          `That gives the Hong Kong odds.`,
        ],
        result: `The Hong Kong odds are ${formatDecimal(hk)}.`,
      };
    }

    const hk = 100 / Math.abs(rawValue);
    return {
      heading: "Worked example",
      input: `Convert American odds of ${input} to Hong Kong odds`,
      explanation: [
        `Since ${input} is negative, use 100 / |American odds|.`,
        `100 / ${Math.abs(rawValue)} = ${hk.toFixed(2)}.`,
        `That gives the Hong Kong odds.`,
      ],
      result: `The Hong Kong odds are ${formatDecimal(hk)}.`,
    };
  }

  if (from === "american" && to === "malay") {
    if (rawValue > 0) {
      const profit = rawValue / 100;
      const malay = -1 / profit;
      return {
        heading: "Worked example",
        input: `Convert American odds of ${input} to Malaysian odds`,
        explanation: [
          `Since ${input} is positive, first turn it into a profit-per-unit figure: ${rawValue} / 100 = ${profit.toFixed(2)}.`,
          `For a profit value of 1 or more, Malaysian odds are negative.`,
          `-1 / ${profit.toFixed(2)} = ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
        ],
        result: `The Malaysian odds are ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
      };
    }

    const profit = 100 / Math.abs(rawValue);
    return {
      heading: "Worked example",
      input: `Convert American odds of ${input} to Malaysian odds`,
      explanation: [
        `Since ${input} is negative, first calculate the profit-per-unit figure: 100 / ${Math.abs(rawValue)} = ${profit.toFixed(2)}.`,
        `Because that value is below 1, the Malaysian odds stay positive.`,
      ],
      result: `The Malaysian odds are ${profit.toFixed(3).replace(/\.?0+$/, "")}.`,
    };
  }

  if (from === "american" && to === "indonesian") {
    const indo = rawValue / 100;
    return {
      heading: "Worked example",
      input: `Convert American odds of ${input} to Indonesian odds`,
      explanation: [
        `Indonesian odds are essentially American odds divided by 100.`,
        `${rawValue} / 100 = ${indo.toFixed(2)}.`,
      ],
      result: `The Indonesian odds are ${indo.toFixed(3).replace(/\.?0+$/, "")}.`,
    };
  }

  if (from === "american" && to === "probability") {
    if (rawValue > 0) {
      const probability = (100 / (rawValue + 100)) * 100;
      return {
        heading: "Worked example",
        input: `Convert American odds of ${input} to implied probability`,
        explanation: [
          `Since ${input} is positive, use the formula 100 / (American odds + 100).`,
          `100 / (${rawValue} + 100) = ${(probability / 100).toFixed(4)}.`,
          `Convert that decimal into a percentage.`,
        ],
        result: `The implied probability is ${formatPercent(probability)}.`,
      };
    }

    const probability = (Math.abs(rawValue) / (Math.abs(rawValue) + 100)) * 100;
    return {
      heading: "Worked example",
      input: `Convert American odds of ${input} to implied probability`,
      explanation: [
        `Since ${input} is negative, use the formula |American odds| / (|American odds| + 100).`,
        `${Math.abs(rawValue)} / (${Math.abs(rawValue)} + 100) = ${(probability / 100).toFixed(4)}.`,
        `Convert that decimal into a percentage.`,
      ],
      result: `The implied probability is ${formatPercent(probability)}.`,
    };
  }

  // HONGKONG -> *
  if (from === "hongkong" && to === "decimal") {
    const decimal = rawValue + 1;
    return {
      heading: "Worked example",
      input: `Convert Hong Kong odds of ${input} to decimal odds`,
      explanation: [
        `Hong Kong odds show profit only, so add 1 to include returned stake.`,
        `${input} + 1 = ${formatDecimal(decimal)}.`,
      ],
      result: `The decimal odds are ${formatDecimal(decimal)}.`,
    };
  }

  if (from === "hongkong" && to === "fractional") {
    const fraction = decimalToFractionalString(rawValue + 1);
    return {
      heading: "Worked example",
      input: `Convert Hong Kong odds of ${input} to fractional odds`,
      explanation: [
        `Hong Kong odds already represent profit per unit staked.`,
        `Convert ${input} into a simplified fraction.`,
      ],
      result: `The fractional odds are ${fraction}.`,
    };
  }

  if (from === "hongkong" && to === "american") {
    if (rawValue >= 1) {
      const american = Math.round(rawValue * 100);
      return {
        heading: "Worked example",
        input: `Convert Hong Kong odds of ${input} to American odds`,
        explanation: [
          `Since ${input} is 1 or higher, the equivalent American odds will be positive.`,
          `Multiply the Hong Kong odds by 100.`,
          `${input} × 100 = ${american}.`,
        ],
        result: `The American odds are +${american}.`,
      };
    }

    const american = Math.round(-100 / rawValue);
    return {
      heading: "Worked example",
      input: `Convert Hong Kong odds of ${input} to American odds`,
      explanation: [
        `Since ${input} is below 1, the equivalent American odds will be negative.`,
        `Use the formula -100 / Hong Kong odds.`,
        `-100 / ${input} = ${american}.`,
      ],
      result: `The American odds are ${american}.`,
    };
  }

  if (from === "hongkong" && to === "malay") {
    if (rawValue < 1) {
      return {
        heading: "Worked example",
        input: `Convert Hong Kong odds of ${input} to Malaysian odds`,
        explanation: [
          `Since ${input} is below 1, the Malaysian odds stay positive.`,
          `For this range, the Hong Kong and Malaysian values are the same.`,
        ],
        result: `The Malaysian odds are ${rawValue.toFixed(3).replace(/\.?0+$/, "")}.`,
      };
    }

    const malay = -1 / rawValue;
    return {
      heading: "Worked example",
      input: `Convert Hong Kong odds of ${input} to Malaysian odds`,
      explanation: [
        `Since ${input} is 1 or higher, the Malaysian odds become negative.`,
        `Use the formula -1 / Hong Kong odds.`,
        `-1 / ${input} = ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
      ],
      result: `The Malaysian odds are ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
    };
  }

  if (from === "hongkong" && to === "indonesian") {
    return {
      heading: "Worked example",
      input: `Convert Hong Kong odds of ${input} to Indonesian odds`,
      explanation: [
        `Hong Kong odds and positive Indonesian odds both express profit per 1 unit staked.`,
        `That means the numerical value stays the same in this case.`,
      ],
      result: `The Indonesian odds are ${rawValue.toFixed(3).replace(/\.?0+$/, "")}.`,
    };
  }

  if (from === "hongkong" && to === "probability") {
    const probability = (1 / (rawValue + 1)) * 100;
    return {
      heading: "Worked example",
      input: `Convert Hong Kong odds of ${input} to implied probability`,
      explanation: [
        `First note that decimal odds are Hong Kong odds + 1.`,
        `${input} + 1 = ${(rawValue + 1).toFixed(2)}.`,
        `Then use 100 / decimal odds.`,
      ],
      result: `The implied probability is ${formatPercent(probability)}.`,
    };
  }

  // MALAY -> *
  if (from === "malay" && to === "decimal") {
    if (rawValue > 0) {
      const decimal = rawValue + 1;
      return {
        heading: "Worked example",
        input: `Convert Malaysian odds of ${input} to decimal odds`,
        explanation: [
          `Since ${input} is positive, use the formula Malaysian odds + 1.`,
          `${input} + 1 = ${decimal.toFixed(2)}.`,
        ],
        result: `The decimal odds are ${decimal.toFixed(2)}.`,
      };
    }

    const decimal = 1 + 1 / Math.abs(rawValue);
    return {
      heading: "Worked example",
      input: `Convert Malaysian odds of ${input} to decimal odds`,
      explanation: [
        `Since ${input} is negative, use the formula 1 + 1 / |Malaysian odds|.`,
        `1 + 1 / ${Math.abs(rawValue)} = ${decimal.toFixed(2)}.`,
      ],
      result: `The decimal odds are ${decimal.toFixed(2)}.`,
    };
  }

  if (from === "malay" && to === "fractional") {
    let profit: number;

    if (rawValue > 0) {
      profit = rawValue;
    } else {
      profit = 1 / Math.abs(rawValue);
    }

    const fraction = decimalToFractionalString(profit + 1);

    return {
      heading: "Worked example",
      input: `Convert Malaysian odds of ${input} to fractional odds`,
      explanation: [
        rawValue > 0
          ? `Since ${input} is positive, the profit-per-unit figure is the same: ${rawValue.toFixed(2)}.`
          : `Since ${input} is negative, calculate the profit-per-unit figure as 1 / |Malaysian odds| = ${(1 / Math.abs(rawValue)).toFixed(2)}.`,
        `Convert that profit figure into a simplified fraction.`,
      ],
      result: `The fractional odds are ${fraction}.`,
    };
  }

  if (from === "malay" && to === "american") {
    if (rawValue > 0) {
      const american = Math.round(-100 / rawValue);
      return {
        heading: "Worked example",
        input: `Convert Malaysian odds of ${input} to American odds`,
        explanation: [
          `Since ${input} is positive and below 1, the equivalent American odds will be negative.`,
          `Use the formula -100 / Malaysian odds.`,
          `-100 / ${input} = ${american}.`,
        ],
        result: `The American odds are ${american}.`,
      };
    }

    const american = Math.round((1 / Math.abs(rawValue)) * 100);
    return {
      heading: "Worked example",
      input: `Convert Malaysian odds of ${input} to American odds`,
      explanation: [
        `Since ${input} is negative, first calculate the profit-per-unit figure: 1 / ${Math.abs(rawValue)} = ${(1 / Math.abs(rawValue)).toFixed(2)}.`,
        `Multiply that value by 100 to get positive American odds.`,
      ],
      result: `The American odds are +${american}.`,
    };
  }

  if (from === "malay" && to === "hongkong") {
    if (rawValue > 0) {
      return {
        heading: "Worked example",
        input: `Convert Malaysian odds of ${input} to Hong Kong odds`,
        explanation: [
          `Since ${input} is positive, the Hong Kong odds are the same profit-per-unit value.`,
        ],
        result: `The Hong Kong odds are ${rawValue.toFixed(3).replace(/\.?0+$/, "")}.`,
      };
    }

    const hk = 1 / Math.abs(rawValue);
    return {
      heading: "Worked example",
      input: `Convert Malaysian odds of ${input} to Hong Kong odds`,
      explanation: [
        `Since ${input} is negative, use 1 / |Malaysian odds| to get the profit-per-unit figure.`,
        `1 / ${Math.abs(rawValue)} = ${hk.toFixed(2)}.`,
      ],
      result: `The Hong Kong odds are ${formatDecimal(hk)}.`,
    };
  }

  if (from === "malay" && to === "indonesian") {
    if (rawValue > 0) {
      const indo = -1 / rawValue;
      return {
        heading: "Worked example",
        input: `Convert Malaysian odds of ${input} to Indonesian odds`,
        explanation: [
          `Since ${input} is positive, the equivalent Indonesian odds will be negative.`,
          `Use the formula -1 / Malaysian odds.`,
          `-1 / ${input} = ${indo.toFixed(3).replace(/\.?0+$/, "")}.`,
        ],
        result: `The Indonesian odds are ${indo.toFixed(3).replace(/\.?0+$/, "")}.`,
      };
    }

    const indo = 1 / Math.abs(rawValue);
    return {
      heading: "Worked example",
      input: `Convert Malaysian odds of ${input} to Indonesian odds`,
      explanation: [
        `Since ${input} is negative, use 1 / |Malaysian odds|.`,
        `1 / ${Math.abs(rawValue)} = ${indo.toFixed(2)}.`,
      ],
      result: `The Indonesian odds are ${indo.toFixed(3).replace(/\.?0+$/, "")}.`,
    };
  }

  if (from === "malay" && to === "probability") {
    const decimal = rawValue > 0 ? rawValue + 1 : 1 + 1 / Math.abs(rawValue);
    const probability = 100 / decimal;

    return {
      heading: "Worked example",
      input: `Convert Malaysian odds of ${input} to implied probability`,
      explanation: [
        rawValue > 0
          ? `Since ${input} is positive, convert to decimal odds with ${input} + 1 = ${decimal.toFixed(2)}.`
          : `Since ${input} is negative, convert to decimal odds with 1 + 1 / ${Math.abs(rawValue)} = ${decimal.toFixed(2)}.`,
        `Then use 100 / decimal odds.`,
      ],
      result: `The implied probability is ${formatPercent(probability)}.`,
    };
  }

  // INDONESIAN -> *
  if (from === "indonesian" && to === "decimal") {
    if (rawValue > 0) {
      const decimal = rawValue + 1;
      return {
        heading: "Worked example",
        input: `Convert Indonesian odds of ${input} to decimal odds`,
        explanation: [
          `Since ${input} is positive, use the formula Indonesian odds + 1.`,
          `${input} + 1 = ${decimal.toFixed(2)}.`,
        ],
        result: `The decimal odds are ${decimal.toFixed(2)}.`,
      };
    }

    const decimal = 1 + 1 / Math.abs(rawValue);
    return {
      heading: "Worked example",
      input: `Convert Indonesian odds of ${input} to decimal odds`,
      explanation: [
        `Since ${input} is negative, use the formula 1 + 1 / |Indonesian odds|.`,
        `1 + 1 / ${Math.abs(rawValue)} = ${decimal.toFixed(2)}.`,
      ],
      result: `The decimal odds are ${decimal.toFixed(2)}.`,
    };
  }

  if (from === "indonesian" && to === "fractional") {
    let profit: number;

    if (rawValue > 0) {
      profit = rawValue;
    } else {
      profit = 1 / Math.abs(rawValue);
    }

    const fraction = decimalToFractionalString(profit + 1);

    return {
      heading: "Worked example",
      input: `Convert Indonesian odds of ${input} to fractional odds`,
      explanation: [
        rawValue > 0
          ? `Since ${input} is positive, the profit-per-unit figure is ${rawValue.toFixed(2)}.`
          : `Since ${input} is negative, calculate the profit-per-unit figure as 1 / |Indonesian odds| = ${(1 / Math.abs(rawValue)).toFixed(2)}.`,
        `Convert that value into a simplified fraction.`,
      ],
      result: `The fractional odds are ${fraction}.`,
    };
  }

  if (from === "indonesian" && to === "american") {
    const american = Math.round(rawValue * 100);
    return {
      heading: "Worked example",
      input: `Convert Indonesian odds of ${input} to American odds`,
      explanation: [
        `American odds are simply Indonesian odds multiplied by 100.`,
        `${rawValue} × 100 = ${american}.`,
      ],
      result: american > 0
        ? `The American odds are +${american}.`
        : `The American odds are ${american}.`,
    };
  }

  if (from === "indonesian" && to === "hongkong") {
    if (rawValue > 0) {
      return {
        heading: "Worked example",
        input: `Convert Indonesian odds of ${input} to Hong Kong odds`,
        explanation: [
          `Since ${input} is positive, it already represents profit per 1 unit staked.`,
          `That is the same interpretation used by Hong Kong odds.`,
        ],
        result: `The Hong Kong odds are ${rawValue.toFixed(3).replace(/\.?0+$/, "")}.`,
      };
    }

    const hk = 1 / Math.abs(rawValue);
    return {
      heading: "Worked example",
      input: `Convert Indonesian odds of ${input} to Hong Kong odds`,
      explanation: [
        `Since ${input} is negative, use 1 / |Indonesian odds| to convert it into a positive profit-per-unit figure.`,
        `1 / ${Math.abs(rawValue)} = ${hk.toFixed(2)}.`,
      ],
      result: `The Hong Kong odds are ${formatDecimal(hk)}.`,
    };
  }

  if (from === "indonesian" && to === "malay") {
    if (rawValue > 0) {
      const malay = -1 / rawValue;
      return {
        heading: "Worked example",
        input: `Convert Indonesian odds of ${input} to Malaysian odds`,
        explanation: [
          `Since ${input} is positive and at least 1 in this example, the Malaysian odds will be negative.`,
          `Use the formula -1 / Indonesian odds.`,
          `-1 / ${input} = ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
        ],
        result: `The Malaysian odds are ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
      };
    }

    const malay = 1 / Math.abs(rawValue);
    return {
      heading: "Worked example",
      input: `Convert Indonesian odds of ${input} to Malaysian odds`,
      explanation: [
        `Since ${input} is negative, use 1 / |Indonesian odds|.`,
        `1 / ${Math.abs(rawValue)} = ${malay.toFixed(2)}.`,
      ],
      result: `The Malaysian odds are ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
    };
  }

  if (from === "indonesian" && to === "probability") {
    const decimal = rawValue > 0 ? rawValue + 1 : 1 + 1 / Math.abs(rawValue);
    const probability = 100 / decimal;

    return {
      heading: "Worked example",
      input: `Convert Indonesian odds of ${input} to implied probability`,
      explanation: [
        rawValue > 0
          ? `Since ${input} is positive, convert to decimal odds with ${input} + 1 = ${decimal.toFixed(2)}.`
          : `Since ${input} is negative, convert to decimal odds with 1 + 1 / ${Math.abs(rawValue)} = ${decimal.toFixed(2)}.`,
        `Then use 100 / decimal odds.`,
      ],
      result: `The implied probability is ${formatPercent(probability)}.`,
    };
  }

  // PROBABILITY -> *
  if (from === "probability" && to === "decimal") {
    const decimal = 100 / rawValue;
    return {
      heading: "Worked example",
      input: `Convert implied probability of ${input} to decimal odds`,
      explanation: [
        `Use the formula 100 / probability percentage.`,
        `100 / ${rawValue} = ${decimal.toFixed(2)}.`,
      ],
      result: `The decimal odds are ${decimal.toFixed(2)}.`,
    };
  }

  if (from === "probability" && to === "fractional") {
    const decimal = 100 / rawValue;
    const fraction = decimalToFractionalString(decimal);
    return {
      heading: "Worked example",
      input: `Convert implied probability of ${input} to fractional odds`,
      explanation: [
        `First convert the probability to decimal odds: 100 / ${rawValue} = ${decimal.toFixed(2)}.`,
        `Then subtract 1 and simplify the profit figure into a fraction.`,
      ],
      result: `The fractional odds are ${fraction}.`,
    };
  }

  if (from === "probability" && to === "american") {
    const decimal = 100 / rawValue;

    if (decimal >= 2) {
      const american = Math.round((decimal - 1) * 100);
      return {
        heading: "Worked example",
        input: `Convert implied probability of ${input} to American odds`,
        explanation: [
          `First convert the probability to decimal odds: 100 / ${rawValue} = ${decimal.toFixed(2)}.`,
          `Since the decimal odds are at least 2.00, the American odds will be positive.`,
          `(${decimal.toFixed(2)} - 1) × 100 = ${american}.`,
        ],
        result: `The American odds are +${american}.`,
      };
    }

    const american = Math.round(-100 / (decimal - 1));
    return {
      heading: "Worked example",
      input: `Convert implied probability of ${input} to American odds`,
      explanation: [
        `First convert the probability to decimal odds: 100 / ${rawValue} = ${decimal.toFixed(2)}.`,
        `Since the decimal odds are below 2.00, the American odds will be negative.`,
        `-100 / (${decimal.toFixed(2)} - 1) = ${american}.`,
      ],
      result: `The American odds are ${american}.`,
    };
  }

  if (from === "probability" && to === "hongkong") {
    const hk = 100 / rawValue - 1;
    return {
      heading: "Worked example",
      input: `Convert implied probability of ${input} to Hong Kong odds`,
      explanation: [
        `First convert the probability to decimal odds: 100 / ${rawValue} = ${(hk + 1).toFixed(2)}.`,
        `Subtract 1 to remove returned stake.`,
      ],
      result: `The Hong Kong odds are ${formatDecimal(hk)}.`,
    };
  }

  if (from === "probability" && to === "malay") {
    const decimal = 100 / rawValue;

    if (decimal < 2) {
      const malay = decimal - 1;
      return {
        heading: "Worked example",
        input: `Convert implied probability of ${input} to Malaysian odds`,
        explanation: [
          `First convert the probability to decimal odds: 100 / ${rawValue} = ${decimal.toFixed(2)}.`,
          `Since the decimal odds are below 2.00, the Malaysian odds are positive.`,
          `${decimal.toFixed(2)} - 1 = ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
        ],
        result: `The Malaysian odds are ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
      };
    }

    const malay = -1 / (decimal - 1);
    return {
      heading: "Worked example",
      input: `Convert implied probability of ${input} to Malaysian odds`,
      explanation: [
        `First convert the probability to decimal odds: 100 / ${rawValue} = ${decimal.toFixed(2)}.`,
        `Since the decimal odds are at least 2.00, the Malaysian odds are negative.`,
        `-1 / (${decimal.toFixed(2)} - 1) = ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
      ],
      result: `The Malaysian odds are ${malay.toFixed(3).replace(/\.?0+$/, "")}.`,
    };
  }

  if (from === "probability" && to === "indonesian") {
    const decimal = 100 / rawValue;

    if (decimal >= 2) {
      const indo = decimal - 1;
      return {
        heading: "Worked example",
        input: `Convert implied probability of ${input} to Indonesian odds`,
        explanation: [
          `First convert the probability to decimal odds: 100 / ${rawValue} = ${decimal.toFixed(2)}.`,
          `Since the decimal odds are at least 2.00, the Indonesian odds are positive.`,
          `${decimal.toFixed(2)} - 1 = ${indo.toFixed(3).replace(/\.?0+$/, "")}.`,
        ],
        result: `The Indonesian odds are ${indo.toFixed(3).replace(/\.?0+$/, "")}.`,
      };
    }

    const indo = -1 / (decimal - 1);
    return {
      heading: "Worked example",
      input: `Convert implied probability of ${input} to Indonesian odds`,
      explanation: [
        `First convert the probability to decimal odds: 100 / ${rawValue} = ${decimal.toFixed(2)}.`,
        `Since the decimal odds are below 2.00, the Indonesian odds are negative.`,
        `-1 / (${decimal.toFixed(2)} - 1) = ${indo.toFixed(3).replace(/\.?0+$/, "")}.`,
      ],
      result: `The Indonesian odds are ${indo.toFixed(3).replace(/\.?0+$/, "")}.`,
    };
  }

  // Fallback, though it should not be hit
  const decimalOdds = toDecimal(from, rawValue);
  const converted = fromDecimal(to, decimalOdds);

  return {
    heading: "Worked example",
    input: `Convert ${oddsTypeLongLabels[from]} of ${input} to ${oddsTypeLongLabels[to]}`,
    explanation: [
      `Convert ${input} ${oddsTypeLongLabels[from]} into decimal odds.`,
      `That gives decimal odds of ${decimalOdds.toFixed(2)}.`,
      `Then convert the decimal odds into ${oddsTypeLongLabels[to]}.`,
    ],
    result: `The ${oddsTypeLongLabels[to]} are ${converted}.`,
  };
}

function getFormulaTitle(from: OddsType, to: OddsType): string {
  return `How ${oddsTypeLongLabels[from]} are converted to ${oddsTypeLongLabels[to]}`;
}

function getDirectFormulaText(from: OddsType, to: OddsType): string {
  if (from === "decimal" && to === "fractional") {
    return "Subtract 1 from the decimal odds, then express the result as a simplified fraction. For example, 2.50 becomes 1.50, which simplifies to 3/2.";
  }

  if (from === "fractional" && to === "decimal") {
    return "Convert the fraction to a decimal and then add 1. For example, 3/2 equals 1.50, and adding 1 gives decimal odds of 2.50.";
  }

  if (from === "decimal" && to === "american") {
    return "If the decimal odds are 2.00 or higher, subtract 1 and multiply by 100 to get positive American odds. If the decimal odds are below 2.00, divide -100 by decimal odds minus 1 to get negative American odds.";
  }

  if (from === "american" && to === "decimal") {
    return "For positive American odds, divide by 100 and add 1. For negative American odds, divide 100 by the absolute value and then add 1.";
  }

  if (from === "decimal" && to === "hongkong") {
    return "Subtract 1 from the decimal odds. Hong Kong odds represent profit only, while decimal odds represent total return including stake.";
  }

  if (from === "hongkong" && to === "decimal") {
    return "Add 1 to the Hong Kong odds to convert them into decimal odds.";
  }

  if (from === "decimal" && to === "malay") {
    return "If the decimal odds are below 2.00, subtract 1 to get positive Malaysian odds. If the decimal odds are 2.00 or higher, divide -1 by decimal odds minus 1 to get negative Malaysian odds.";
  }

  if (from === "malay" && to === "decimal") {
    return "For positive Malaysian odds, add 1 to get decimal odds. For negative Malaysian odds, add 1 to the reciprocal of the absolute value.";
  }

  if (from === "decimal" && to === "indonesian") {
    return "If the decimal odds are 2.00 or higher, subtract 1 to get positive Indonesian odds. If the decimal odds are below 2.00, divide -1 by decimal odds minus 1 to get negative Indonesian odds.";
  }

  if (from === "indonesian" && to === "decimal") {
    return "For positive Indonesian odds, add 1 to get decimal odds. For negative Indonesian odds, add 1 to the reciprocal of the absolute value.";
  }

  if (from === "decimal" && to === "probability") {
    return "Divide 100 by the decimal odds to get implied probability as a percentage. For example, decimal odds of 2.50 imply a 40% chance.";
  }

  if (from === "probability" && to === "decimal") {
    return "Divide 100 by the implied probability percentage to get decimal odds. For example, 40% converts to decimal odds of 2.50.";
  }

  return "";
}

function getFormulaText(from: OddsType, to: OddsType): string {
  const direct = getDirectFormulaText(from, to);
  if (direct) {
    return direct;
  }

  if (from !== "decimal" && to !== "decimal") {
    return `The simplest method is to convert ${oddsTypeLongLabels[from]} into decimal odds first, then convert the decimal odds into ${oddsTypeLongLabels[to]}. This reduces sign errors and keeps the calculation consistent across different betting formats.`;
  }

  return `Convert the ${oddsTypeLongLabels[from]} into ${oddsTypeLongLabels[to]} using the standard formula for that odds format.`;
}

function getTitle(from: OddsType, to: OddsType): string {
  return `${titleLabels[from]} to ${titleLabels[to]} Converter`;
}

function getIntro(from: OddsType, to: OddsType): string {
  const template = pickFromArray(introTemplates, `${from}-${to}-intro`);
  return template(oddsTypeLongLabels[from], oddsTypeLongLabels[to]);
}

function getSupportedFormatsText(from: OddsType, to: OddsType): string {
  const template = pickFromArray(
    supportedFormatsTemplates,
    `${from}-${to}-supported`
  );
  return template(oddsTypeLongLabels[from], oddsTypeLongLabels[to]);
}

function getWhyUseText(from: OddsType, to: OddsType): string {
  const template = pickFromArray(
    whyUseTemplates,
    `${from}-${to}-whyuse`
  );
  return template(oddsTypeLongLabels[from], oddsTypeLongLabels[to]);
}

function getCommonMistake(from: OddsType, to: OddsType): string {
  if (from === "american" || to === "american") {
    return "A common mistake with American odds is forgetting that positive and negative values use different formulas. Always check the sign before converting.";
  }

  if (from === "probability" || to === "probability") {
    return "One common mistake is treating implied probability as a guaranteed true probability. The percentage is only the probability implied by the quoted odds and may still include bookmaker margin.";
  }

  if (from === "fractional" || to === "fractional") {
    return "A common mistake with fractional odds is forgetting to add the original stake when converting to decimal odds. The fraction represents profit only, not total return.";
  }

  if (from === "hongkong" || to === "hongkong") {
    return "A frequent mistake with Hong Kong odds is confusing them with decimal odds. Hong Kong odds show profit only, so the equivalent decimal price is always 1 higher.";
  }

  if (from === "malay" || to === "malay") {
    return "A common mistake with Malaysian odds is applying the same rule to both positive and negative values. The sign changes the conversion, so it is safer to convert through decimal odds when unsure.";
  }

  if (from === "indonesian" || to === "indonesian") {
    return "A common mistake with Indonesian odds is assuming they work exactly like decimal odds. They are closer to scaled American odds, so the sign and stake interpretation matter.";
  }

  return "A common conversion mistake is mixing up total payout and profit-only formats. When in doubt, convert step by step through decimal odds.";
}

function getPairNote(from: OddsType, to: OddsType): string {
  if (
    (from === "american" && to === "indonesian") ||
    (from === "indonesian" && to === "american")
  ) {
    return "This pair is especially straightforward because Indonesian odds are essentially American odds divided by 100. The main difference is just the scale.";
  }

  if (
    (from === "decimal" && to === "hongkong") ||
    (from === "hongkong" && to === "decimal")
  ) {
    return "This is one of the simplest odds conversions because Hong Kong odds are always exactly 1 lower than the equivalent decimal odds.";
  }

  if (
    (from === "fractional" && to === "hongkong") ||
    (from === "hongkong" && to === "fractional")
  ) {
    return "This conversion is often easiest to understand by passing through decimal odds first, because fractional odds express profit as a ratio while Hong Kong odds express profit as a single number.";
  }

  if (
    from === "probability" ||
    to === "probability"
  ) {
    return "Whenever implied probability is involved, the conversion is useful for comparing bookmaker prices with your own estimated win chance or model projection.";
  }

  if (
    from === "malay" ||
    to === "malay" ||
    from === "indonesian" ||
    to === "indonesian"
  ) {
    return "This conversion is particularly relevant when comparing Asian-market odds with prices listed in European or US-facing formats.";
  }

  return `This conversion is useful when one bookmaker lists a market in ${oddsTypeLongLabels[from]} and another shows the same market in ${oddsTypeLongLabels[to]}.`;
}

function getFaq(from: OddsType, to: OddsType): ConversionFaq[] {
  return [
    {
      question: `What is the easiest way to convert ${oddsTypeLongLabels[from]} to ${oddsTypeLongLabels[to]}?`,
      answer:
        from !== "decimal" && to !== "decimal"
          ? `In most cases, the easiest method is to convert ${oddsTypeLongLabels[from]} into decimal odds first and then convert the decimal odds into ${oddsTypeLongLabels[to]}.`
          : `The easiest method is to use the standard direct conversion formula between ${oddsTypeLongLabels[from]} and ${oddsTypeLongLabels[to]}, or use the calculator to avoid manual mistakes.`,
    },
    {
      question: `Why do bettors convert ${oddsTypeLongLabels[from]} into ${oddsTypeLongLabels[to]}?`,
      answer: `Bettors often convert ${oddsTypeLongLabels[from]} into ${oddsTypeLongLabels[to]} to compare bookmaker prices more easily, understand implied probability, and read markets in the format they are most comfortable with.`,
    },
    {
      question: `Can I compare bookmakers more easily after converting ${oddsTypeLongLabels[from]} to ${oddsTypeLongLabels[to]}?`,
      answer: `Yes. Once both prices are in the same format, it becomes much easier to spot value differences, compare payout levels, and evaluate whether one bookmaker is offering a better line than another.`,
    },
  ];
}

function buildContent(from: OddsType, to: OddsType): ConversionContent {
  const key = `${from}-to-${to}`;

  return {
    title: getTitle(from, to),
    intro: getIntro(from, to),
    example: getExample(from, to),
    formulaTitle: getFormulaTitle(from, to),
    formulaText: getFormulaText(from, to),
    fromDescription: pickVariant(from, `${key}-from`),
    toDescription: pickVariant(to, `${key}-to`),
    supportedFormatsText: getSupportedFormatsText(from, to),
    whyUseText: getWhyUseText(from, to),
    commonMistake: getCommonMistake(from, to),
    pairNote: getPairNote(from, to),
    faq: getFaq(from, to),
    workedExample: getWorkedExample(from, to),
  };
}

const allOddsTypes: OddsType[] = [
  "decimal",
  "fractional",
  "american",
  "hongkong",
  "malay",
  "indonesian",
  "probability",
];

export const oddsContent: Partial<Record<ConversionKey, ConversionContent>> =
  Object.fromEntries(
    allOddsTypes.flatMap((from) =>
      allOddsTypes
        .filter((to) => to !== from)
        .map((to) => {
          const key = `${from}-to-${to}` as ConversionKey;
          return [key, buildContent(from, to)];
        })
    )
  );