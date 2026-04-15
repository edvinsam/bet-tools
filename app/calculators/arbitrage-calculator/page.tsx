import ArbitrageCalculatorPageContent from "@/components/ArbitrageCalculatorPageContent";

export const metadata = {
  title: "Arbitrage Calculator",
  description:
    "Calculate surebets, stake distribution, guaranteed profit, ROI, and arbitrage percentage across multiple outcomes.",
  alternates: {
    canonical: "https://bet-tools.com/calculators/arbitrage-calculator",
  },
};

export default function ArbitrageCalculatorPage() {
  return <ArbitrageCalculatorPageContent />;
}