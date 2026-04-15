import type { OddsType } from "@/lib/oddsConverter";

export type ConversionKey = `${OddsType}-to-${OddsType}`;

export type ConversionContent = {
  title: string;
  intro: string;
  example: string;
  formulaTitle: string;
  formulaText: string;
  fromDescription: string;
  toDescription: string;
};

const oddsTypeExplained = {
    "decimal": "Decimal odds are a number greater than 1 and are most commonly used in Europe, hence they are commonly referred to as 'European odds'. However they are also used in other parts of the world, most notably Canada and Australia. Decimal odds are basically just a multiplier betweent the bet size and total payout. This makes it quite an intuitive odds format and makes for easy payout and profit calculations.",
    "fractional": "Fractional odds are almost exclusively used in the UK and Ireland and is the traditional odds format there. Although most UK and Irish bettors are most used to the fractional odds, decimal odds have recently started to gain popularity. Fractional odds can be described as the ratio between the profit and the bet size. For example a fractional odds of 3/2 means for every $2 wagered the potential profit is $3.",
    "american": "American odds are predominantly used by US sportsbooks or other international sportsbooks that offer betting on US sports and leagues such as the NBA, NFL and MLB. In simple terms, american odds can be both positive and negative. Negative odds are the favourites to win and the number represents the amount you need to bet to win $100. So for example if the odds are -250 you need to bet $250 to win $100. Positive odds are kind of the opposite and instead represent how much you win if you bet $100.",
    "hongkong": "Hong Kong odds, which are mostly used by asian bettors in and around Hong Kong, is an odds format that shows your potential profit per $1 wagered. So Hong Kong odds of 0.5 means you profit $50 on a $100 bet and odds of 1.5 results in $150 profit on a $100 bet. It could be considered a variation of the European decimal format where it represents profit instead of payout.",
    "malay": "Malaysian or Malay odds are predominantly used in Malaysia for Malaysian football markets. For Malaysian odds they can be both positive and negative between -1 and 1, with positive numbers being higher probability outcomes and negatives being lower. Worth noting is that Malaysian odds of -1 and 1 both represent a 50% implied probability and values approaching 0 from both sides represent the high and low probabilities. For example -0.01 is 1% implied probability and 0.01 is 99% implied probability.",
    "indonesian": "Indonesian odds are commonly used in Indonesia and other southeast Asian countries. The Indonesian odds format is very similar to the American format where positive numbers represent the potential profit per $1 wagered and negative numbers is how much you need to wager to make $1 of profit. Thus, Indonesian odds are actually just American odds divided by 100.",
    "probability": "Probability odds or implied probability is, as the name suggests, the underlying implied probability of the outcome occurring. It's not an odds format in the usual sense but implied probability is widely used by professional bettors in valuebetting and arbitrage betting. It can for example be used to compare the bookies priced odds to an estimated true probability derived from other data or a sharp bookie. Worth noting is that calculating the implied probability straight from the bookmaker odds doesn't take the bookmaker edge into account and requires all outcomes for an event to calculate the true underlying implied probability."
}

export const oddsContent: Partial<Record<ConversionKey, ConversionContent>> = {
  "decimal-to-fractional": {
    title: "Decimal Odds to Fractional Odds Converter",
    intro: "Use this calculator to convert decimal, also known as European odds, into fractional odds. Simply input a valid decimal value and the calculator will automatically convert it into fractional odds.",
    example: "For example, decimal odds of 2.50 convert to fractional odds of 3/2.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.decimal,
    toDescription: oddsTypeExplained.fractional
  },
  "decimal-to-american": {
    title: "Decimal Odds to American Odds Converter",
    intro: "Use this calculator to convert decimal, also known as European odds, into american odds. Simply input a valid decimal value and the calculator will automatically convert it into american odds.",
    example: "For example, decimal odds of 2.50 convert to American odds of +150 and decimal odds of 1.5 is -200 in American odds.",
    formulaTitle: "How decimal odds are converted to american odds",
    formulaText: "For positive american odds, which equals decimal odds greater than 2.0, the formula is: decimal odds - 1 * 100 and for negative american odds the formula is -100 / (decimal odds - 1).",
    fromDescription: oddsTypeExplained.decimal,
    toDescription: oddsTypeExplained.american
  },
  "decimal-to-hongkong": {
    title: "Decimal Odds to Hong Kong Odds Converter",
    intro: "Use this calculator to convert decimal, also known as European odds, into fractional odds. Simply input a valid decimal value and the calculator will automatically convert it into Hong Kong odds.",
    example: "For example, decimal odds of 2.50 convert to Hong Kong odds of 1.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.decimal,
    toDescription: oddsTypeExplained.hongkong
  },
  "decimal-to-malay": {
    title: "Decimal Odds to Malaysian Odds Converter",
    intro: "Use this calculator to convert decimal, also known as European odds, into fractional odds. Simply input a valid decimal value and the calculator will automatically convert it into Malaysian odds.",
    example: "For example, decimal odds of 2.50 convert to Malaysian odds of -0.667.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.decimal,
    toDescription: oddsTypeExplained.malay
  },
  "decimal-to-indonesian": {
    title: "Decimal Odds to Indonesian Odds Converter",
    intro: "Use this calculator to convert decimal, also known as European odds, into fractional odds. Simply input a valid decimal value and the calculator will automatically convert it into Indonesian odds.",
    example: "For example, decimal odds of 2.50 convert to Indonesian odds of 1.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.decimal,
    toDescription: oddsTypeExplained.indonesian
  },
  "decimal-to-probability": {
    title: "Decimal Odds to Probability Odds Converter",
    intro: "Use this calculator to convert decimal, also known as European odds, into fractional odds. Simply input a valid decimal value and the calculator will automatically convert it into probability odds.",
    example: "For example, decimal odds of 2.50 convert to probability odds of 40%.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.decimal,
    toDescription: oddsTypeExplained.probability
  },
  "fractional-to-decimal": {
    title: "Fractional Odds to Decimal Odds Converter",
    intro: "Use this calculator to convert fractional odds into decimal odds. Simply input a valid fraction and the calculator will automatically convert it into decimal odds.",
    example: "For example, fractional odds of 3/2 convert to decimal odds of 2.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.fractional,
    toDescription: oddsTypeExplained.decimal
  },
  "fractional-to-american": {
    title: "Fractional Odds to American Odds Converter",
    intro: "Use this calculator to convert fractional odds into American odds. Simply input a valid fraction and the calculator will automatically convert it into American odds.",
    example: "For example, fractional odds of 3/2 convert to American odds of +150.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.fractional,
    toDescription: oddsTypeExplained.american
  },
  "fractional-to-hongkong": {
    title: "Fractional Odds to Hong Kong Odds Converter",
    intro: "Use this calculator to convert fractional odds into Hong Kong odds. Simply input a valid fraction and the calculator will automatically convert it into Hong Kong odds.",
    example: "For example, fractional odds of 3/2 convert to Hong Kong odds of 1.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.fractional,
    toDescription: oddsTypeExplained.hongkong
  },
  "fractional-to-malay": {
    title: "Fractional Odds to Malaysian Odds Converter",
    intro: "Use this calculator to convert fractional odds into Malaysian odds. Simply input a valid fraction and the calculator will automatically convert it into Malaysian odds.",
    example: "For example, fractional odds of 3/2 convert to Malaysian odds of -0.667.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.fractional,
    toDescription: oddsTypeExplained.malay
  },
  "fractional-to-indonesian": {
    title: "Fractional Odds to Indonesian Odds Converter",
    intro: "Use this calculator to convert fractional odds into Indonesian odds. Simply input a valid fraction and the calculator will automatically convert it into Indonesian odds.",
    example: "For example, fractional odds of 3/2 convert to Indonesian odds of 1.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.fractional,
    toDescription: oddsTypeExplained.indonesian
  },
  "fractional-to-probability": {
    title: "Fractional Odds to Probability Odds Converter",
    intro: "Use this calculator to convert fractional odds into Probability odds. Simply input a valid fraction and the calculator will automatically convert it into probability odds.",
    example: "For example, fractional odds of 3/2 convert to probability odds of 40%.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.fractional,
    toDescription: oddsTypeExplained.probability
  },
  "american-to-decimal": {
    title: "American Odds to Decimal Odds Converter",
    intro: "Use this calculator to convert American odds into decimal odds. Simply input a valid value and the calculator will automatically convert it into decimal odds.",
    example: "For example, American odds of +150 convert to decimal odds of 2.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.american,
    toDescription: oddsTypeExplained.decimal
  },
  "american-to-fractional": {
    title: "American Odds to Fractional Odds Converter",
    intro: "Use this calculator to convert American odds into fractional odds. Simply input a valid value and the calculator will automatically convert it into fractional odds.",
    example: "For example, American odds of +150 convert to fractional odds of 3/2.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.american,
    toDescription: oddsTypeExplained.fractional
  },
  "american-to-hongkong": {
    title: "American Odds to Hong Kong Odds Converter",
    intro: "Use this calculator to convert American odds into Hong Kong odds. Simply input a valid value and the calculator will automatically convert it into Hong Kong odds.",
    example: "For example, American odds of +150 convert to Hong Kong odds of 1.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.american,
    toDescription: oddsTypeExplained.hongkong
  },
  "american-to-malay": {
    title: "American Odds to Malaysian Odds Converter",
    intro: "Use this calculator to convert American odds into Malaysian odds. Simply input a valid value and the calculator will automatically convert it into Malaysian odds.",
    example: "For example, American odds of +150 convert to Malaysian odds of -0.667.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.american,
    toDescription: oddsTypeExplained.malay
  },
  "american-to-indonesian": {
    title: "American Odds to Indonesian Odds Converter",
    intro: "Use this calculator to convert American odds into Indonesian odds. Simply input a valid value and the calculator will automatically convert it into Indonesian odds.",
    example: "For example, American odds of +150 convert to Indonesian odds of 1.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.american,
    toDescription: oddsTypeExplained.indonesian
  },
  "american-to-probability": {
    title: "American Odds to Probability Odds Converter",
    intro: "Use this calculator to convert American odds into probability odds. Simply input a valid value and the calculator will automatically convert it into probability odds.",
    example: "For example, American odds of +150 convert to probability odds of 40%.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.american,
    toDescription: oddsTypeExplained.probability
  },
  "hongkong-to-decimal": {
    title: "Hong Kong Odds to Decimal Odds Converter",
    intro: "Use this calculator to convert Hong Kong odds into decimal odds. Simply input a valid value and the calculator will automatically convert it into decimal odds.",
    example: "For example, Hong Kong odds of 1.5 convert to decimal odds of 2.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.hongkong,
    toDescription: oddsTypeExplained.decimal
  },
  "hongkong-to-fractional": {
    title: "Hong Kong Odds to Fractional Odds Converter",
    intro: "Use this calculator to convert Hong Kong odds into fractional odds. Simply input a valid value and the calculator will automatically convert it into fractional odds.",
    example: "For example, Hong Kong odds of 1.5 convert to fractional odds of 3/2.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.hongkong,
    toDescription: oddsTypeExplained.fractional
  },
  "hongkong-to-american": {
    title: "Hong Kong Odds to American Odds Converter",
    intro: "Use this calculator to convert Hong Kong odds into American odds. Simply input a valid value and the calculator will automatically convert it into American odds.",
    example: "For example, Hong Kong odds of 1.5 convert to American odds of +150.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.hongkong,
    toDescription: oddsTypeExplained.american
  },
  "hongkong-to-malay": {
    title: "Hong Kong Odds to Malaysian Odds Converter",
    intro: "Use this calculator to convert Hong Kong odds into Malaysian odds. Simply input a valid value and the calculator will automatically convert it into Malaysian odds.",
    example: "For example, Hong Kong odds of 1.5 convert to Malaysian odds of -0.667.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.hongkong,
    toDescription: oddsTypeExplained.malay
  },
  "hongkong-to-indonesian": {
    title: "Hong Kong Odds to Indonesian Odds Converter",
    intro: "Use this calculator to convert Hong Kong odds into Indonesian odds. Simply input a valid value and the calculator will automatically convert it into Indonesian odds.",
    example: "For example, Hong Kong odds of 1.5 convert to Indonesian odds of 1.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.hongkong,
    toDescription: oddsTypeExplained.indonesian
  },
  "hongkong-to-probability": {
    title: "Hong Kong Odds to Probability Odds Converter",
    intro: "Use this calculator to convert Hong Kong odds into probability odds. Simply input a valid value and the calculator will automatically convert it into probability odds.",
    example: "For example, Hong Kong odds of 1.5 convert to probability odds of 40%.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.hongkong,
    toDescription: oddsTypeExplained.probability
  },
  "malay-to-decimal": {
    title: "Malaysian Odds to Decimal Odds Converter",
    intro: "Use this calculator to convert Malaysian odds into decimal odds. Simply input a valid value and the calculator will automatically convert it into decimal odds.",
    example: "For example, Malaysian odds of 0.5 convert to decimal odds of 1.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.malay,
    toDescription: oddsTypeExplained.decimal
  },
  "malay-to-fractional": {
    title: "Malaysian Odds to Fractional Odds Converter",
    intro: "Use this calculator to convert Malaysian odds into fractional odds. Simply input a valid value and the calculator will automatically convert it into fractional odds.",
    example: "For example, Malaysian odds of 0.5 convert to fractional odds of 1/2.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.malay,
    toDescription: oddsTypeExplained.fractional
  },
  "malay-to-american": {
    title: "Malaysian Odds to American Odds Converter",
    intro: "Use this calculator to convert Malaysian odds into American odds. Simply input a valid value and the calculator will automatically convert it into American odds.",
    example: "For example, Malaysian odds of 0.5 convert to American odds of -200.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.malay,
    toDescription: oddsTypeExplained.american
  },
  "malay-to-hongkong": {
    title: "Malaysian Odds to Hong Kong Odds Converter",
    intro: "Use this calculator to convert Malaysian odds into Hong Kong odds. Simply input a valid value and the calculator will automatically convert it into Hong Kong odds.",
    example: "For example, Malaysian odds of 0.5 convert to Hong Kong odds of 0.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.malay,
    toDescription: oddsTypeExplained.hongkong
  },
  "malay-to-indonesian": {
    title: "Malaysian Odds to Indonesian Odds Converter",
    intro: "Use this calculator to convert Malaysian odds into Indonesian odds. Simply input a valid value and the calculator will automatically convert it into Indonesian odds.",
    example: "For example, Malaysian odds of 0.5 convert to Indonesian odds of -2.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.malay,
    toDescription: oddsTypeExplained.indonesian
  },
  "malay-to-probability": {
    title: "Malaysian Odds to Probability Odds Converter",
    intro: "Use this calculator to convert Malaysian odds into probability odds. Simply input a valid value and the calculator will automatically convert it into probability odds.",
    example: "For example, Malaysian odds of 0.5 convert to probability odds of 66.67%.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.malay,
    toDescription: oddsTypeExplained.probability
  },
  "indonesian-to-decimal": {
    title: "Indonesian Odds to Decimal Odds Converter",
    intro: "Use this calculator to convert Indonesian odds into decimal odds. Simply input a valid value and the calculator will automatically convert it into decimal odds.",
    example: "For example, Indonesian odds of 1.5 convert to decimal odds of 2.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.indonesian,
    toDescription: oddsTypeExplained.decimal
  },
  "indonesian-to-fractional": {
    title: "Indonesian Odds to Fractional Odds Converter",
    intro: "Use this calculator to convert Indonesian odds into fractional odds. Simply input a valid value and the calculator will automatically convert it into fractional odds.",
    example: "For example, Indonesian odds of 1.5 convert to fractional odds of 3/2.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.indonesian,
    toDescription: oddsTypeExplained.fractional
  },
  "indonesian-to-american": {
    title: "Indonesian Odds to American Odds Converter",
    intro: "Use this calculator to convert Indonesian odds into American odds. Simply input a valid value and the calculator will automatically convert it into American odds.",
    example: "For example, Indonesian odds of 1.5 convert to American odds of +150.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.indonesian,
    toDescription: oddsTypeExplained.american
  },
  "indonesian-to-hongkong": {
    title: "Indonesian Odds to Hong Kong Odds Converter",
    intro: "Use this calculator to convert Indonesian odds into Hong Kong odds. Simply input a valid value and the calculator will automatically convert it into Hong Kong odds.",
    example: "For example, Indonesian odds of 1.5 convert to Hong Kong odds of 1.5.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.indonesian,
    toDescription: oddsTypeExplained.hongkong
  },
  "indonesian-to-malay": {
    title: "Indonesian Odds to Malaysian Odds Converter",
    intro: "Use this calculator to convert Indonesian odds into Malaysian odds. Simply input a valid value and the calculator will automatically convert it into Malaysian odds.",
    example: "For example, Indonesian odds of 1.50 convert to Malaysian odds of -0.667.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.indonesian,
    toDescription: oddsTypeExplained.malay
  },
  "indonesian-to-probability": {
    title: "Indonesian Odds to Probability Odds Converter",
    intro: "Use this calculator to convert Indonesian odds into Indonesian odds. Simply input a valid value and the calculator will automatically convert it into Indonesian odds.",
    example: "For example, Indonesian odds of 1.50 convert to probability odds of 40%.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.indonesian,
    toDescription: oddsTypeExplained.probability
  },
  "probability-to-decimal": {
    title: "Probability Odds to Decimal Odds Converter",
    intro: "Use this calculator to convert probability odds into decimal odds. Simply input a valid value and the calculator will automatically convert it into decimal odds.",
    example: "For example, probability odds of 25% convert to decimal odds of 4.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.probability,
    toDescription: oddsTypeExplained.decimal
  },
  "probability-to-fractional": {
    title: "Probability Odds to Fractional Odds Converter",
    intro: "Use this calculator to convert probability odds into fractional odds. Simply input a valid value and the calculator will automatically convert it into fractional odds.",
    example: "For example, probability odds of 25% convert to fractional odds of 3/1.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.probability,
    toDescription: oddsTypeExplained.fractional
  },
  "probability-to-american": {
    title: "Probability Odds to American Odds Converter",
    intro: "Use this calculator to convert probability odds into American odds. Simply input a valid value and the calculator will automatically convert it into American odds.",
    example: "For example, probability odds of 25% convert to American odds of +300.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.probability,
    toDescription: oddsTypeExplained.american
  },
  "probability-to-hongkong": {
    title: "Probability Odds to Hong Kong Odds Converter",
    intro: "Use this calculator to convert probability odds into Hong Kong odds. Simply input a valid value and the calculator will automatically convert it into Hong Kong odds.",
    example: "For example, probability odds of 25% convert to Hong Kong odds of 3.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.probability,
    toDescription: oddsTypeExplained.hongkong
  },
  "probability-to-malay": {
    title: "Probability Odds to Malaysian Odds Converter",
    intro: "Use this calculator to convert probability odds into Malaysian odds. Simply input a valid value and the calculator will automatically convert it into Malaysian odds.",
    example: "For example, probability odds of 25% convert to Malaysian odds of -0.333.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.probability,
    toDescription: oddsTypeExplained.malay
  },
  "probability-to-indonesian": {
    title: "Probability Odds to Indonesian Odds Converter",
    intro: "Use this calculator to convert probability odds into Indonesian odds. Simply input a valid value and the calculator will automatically convert it into Indonesian odds.",
    example: "For example, probability odds of 25% convert to Indonesian odds of 3.",
    formulaTitle: "How decimal odds are converted to fractional odds",
    formulaText: "Subtract 1 from the decimal odds and express the result as a fraction of two whole numbers.",
    fromDescription: oddsTypeExplained.probability,
    toDescription: oddsTypeExplained.indonesian
  },
};