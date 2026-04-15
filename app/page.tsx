import Link from "next/link";

const calculators = [
  {
    title: "Odds Converter",
    href: "/calculators/odds-converter",
    description:
      "Convert between decimal, fractional, American, Hong Kong, Malay, Indonesian, and implied probability formats.",
  },
  {
    title: "Fair Probability Calculator",
    href: "/calculators/fair-probability",
    description:
      "Remove bookmaker margin to estimate no-vig probabilities and fair odds for 2-way and 3-way markets.",
  },
  /*{
    title: "Expected Value Calculator",
    href: "/calculators/ev-calculator",
    description:
      "Measure the expected value of a bet using odds and your estimated true probability.",
  },*/
  /*{
    title: "Kelly Calculator",
    href: "/calculators/kelly-calculator",
    description:
      "Calculate stake sizing using the Kelly Criterion based on your edge and bankroll.",
  },*/
  {
    title: "Arbitrage Calculator",
    href: "/calculators/arbitrage-calculator",
    description:
      "Check whether a set of odds creates a surebet opportunity and calculate the optimal stake split.",
  },
];

export const metadata = {
  title: "Free Betting Calculators and Odds Tools",
  description:
    "Free betting calculators for odds conversion, fair probability, arbitrage, expected value, and bankroll strategy.",
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function HomePage() {
  return (
    <main style={{ padding: "28px 20px 40px 20px" }}>
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <section style={{ marginBottom: "36px" }}>
          <h1 style={{ marginBottom: "12px" }}>
            Free Betting Calculators and Odds Tools
          </h1>

          <p
            style={{
              maxWidth: "760px",
              marginBottom: "18px",
            }}
          >
            Use simple, reliable tools to convert odds, calculate implied and
            no-vig probabilities, find arbitrage opportunities, measure
            expected value, and manage your betting strategy.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/calculators/odds-converter"
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: "6px",
                background: "#2563eb",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Try Odds Converter
            </Link>

            <Link
              href="/calculators/arbitrage-calculator"
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: "6px",
                border: "2px solid #d2d2d3",
                background: "white",
                color: "#111827",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Explore Arbitrage Calculator
            </Link>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "14px" }}>Featured Calculators</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {calculators.map((calculator) => (
              <Link
                key={calculator.href}
                href={calculator.href}
                style={{
                  display: "block",
                  border: "2px solid #d2d2d3",
                  borderRadius: "8px",
                  padding: "18px",
                  background: "#f9fafb",
                  textDecoration: "none",
                  color: "#111827",
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>{calculator.title}</h3>
                <p style={{ marginBottom: 0 }}>{calculator.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "36px" }}>
          <h2 style={{ marginBottom: "12px" }}>
            Why Use These Betting Calculators?
          </h2>

          <ul>
            <li>Fast and easy calculations for common sports betting scenarios</li>
            <li>Clear formulas and transparent outputs</li>
            <li>Useful for odds comparison, value betting, arbitrage, and bankroll management</li>
            <li>No signup required — just enter your numbers and get the result instantly</li>
          </ul>
        </section>

        <section style={{ marginBottom: "36px" }}>
          <h2 style={{ marginBottom: "12px" }}>What Are Betting Calculators?</h2>

          <p>
            Betting calculators help bettors analyze odds, estimate probability,
            compare bookmaker pricing, and size stakes more effectively. They are
            commonly used to identify value bets, remove bookmaker margin, and
            check whether an arbitrage opportunity exists.
          </p>

          <p>
            This site provides a growing set of free betting tools built around
            the most useful parts of the betting workflow: odds conversion,
            fair probability estimation, expected value analysis, Kelly staking,
            and surebet calculation.
          </p>
        </section>

        <section>
          <h2 style={{ marginBottom: "12px" }}>Start With the Basics</h2>

          <p>
            New users usually start with the{" "}
            <Link href="/calculators/odds-converter">Odds Converter</Link> to
            translate between betting formats, then move on to the{" "}
            <Link href="/calculators/fair-probability">
              Fair Probability Calculator
            </Link>{" "}
            to remove bookmaker margin, and finally use the{" "}
            <Link href="/calculators/arbitrage-calculator">
              Arbitrage Calculator
            </Link>{" "}
            or <Link href="/calculators/ev-calculator">EV Calculator</Link> to
            evaluate betting opportunities more deeply.
          </p>
        </section>
      </div>
    </main>
  );
}