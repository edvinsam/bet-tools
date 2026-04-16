import OddsConverter from "@/components/OddsConverter";
import { Suspense } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Odds Converter",
  description:
    "Convert between decimal, fractional, American, Hong Kong, Malay, Indonesian, and implied probability betting odds formats.",
  alternates: {
    canonical: "https://bet-tools.com/calculators/odds-converter",
  },
};

export default function OddsConverterPage() {
  return (
    <main
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "1.25rem 1rem 2.5rem",
      }}
    >
      <div
        style={{
          width: "min(100%, 70rem)",
          margin: "0 auto",
        }}
      >
        <Breadcrumbs
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Calculators", href: "/calculators" },
                    { label: "Odds Converter" }
                  ]}
                />
        <h1
          style={{
            textAlign: "center",
            marginBottom: "1.25rem",
          }}
        >
          Odds Converter
        </h1>

        <Suspense fallback={null}>
          <OddsConverter defaultFrom="decimal" defaultTo="american" />
        </Suspense>

        <section
          style={{
            width: "min(100%, 48rem)",
            margin: "2rem auto 0",
            textAlign: "left",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            What this odds converter does
          </h2>

          <p>
            This betting odds converter lets you instantly convert between
            decimal, fractional, American, Hong Kong, Malay, Indonesian, and
            implied probability formats.
          </p>

          <h3
            style={{
              textAlign: "center",
              paddingTop: "0.5rem",
            }}
          >
            How the conversion works
          </h3>

          <p>
            The converter first translates the selected input odds into decimal
            odds as an intermediate format. It then converts that decimal value
            into the target odds format. This keeps the logic consistent across
            all supported odds types.
          </p>

          <p>
            For example, if you enter decimal odds of 2.50, the converter can
            show the equivalent American odds, fractional odds, implied
            probability, or any other supported format instantly.
          </p>

          <h2
            style={{
              textAlign: "center",
              paddingTop: "0.5rem",
            }}
          >
            Supported odds formats
          </h2>

          <p>
            This converter supports decimal odds, fractional odds, American
            odds, Hong Kong odds, Malay odds, Indonesian odds, and implied
            probability percentage.
          </p>

          <h2
            style={{
              textAlign: "center",
              paddingTop: "0.5rem",
            }}
          >
            Why use an odds converter?
          </h2>

          <p>
            Bookmakers and betting exchanges use different odds formats
            depending on region and market. An odds converter makes it easier to
            compare prices, understand implied probability, and analyze bets
            more accurately across different sportsbooks.
          </p>
        </section>

        <section
          style={{
            width: "min(100%, 48rem)",
            margin: "2rem auto 0",
            textAlign: "center",
          }}
        >
          <h2>Popular Odds Conversions</h2>

          <p>
            These are some of the most commonly used betting odds conversions.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.625rem 1rem",
              justifyContent: "center",
              marginTop: "0.75rem",
            }}
          >
            <a
              href="/calculators/decimal-to-american-odds-converter"
              style={{ color: "#2563eb", whiteSpace: "nowrap" }}
            >
              Decimal to American
            </a>

            <a
              href="/calculators/american-to-decimal-odds-converter"
              style={{ color: "#2563eb", whiteSpace: "nowrap" }}
            >
              American to Decimal
            </a>

            <a
              href="/calculators/decimal-to-fractional-odds-converter"
              style={{ color: "#2563eb", whiteSpace: "nowrap" }}
            >
              Decimal to Fractional
            </a>

            <a
              href="/calculators/fractional-to-decimal-odds-converter"
              style={{ color: "#2563eb", whiteSpace: "nowrap" }}
            >
              Fractional to Decimal
            </a>

            <a
              href="/calculators/decimal-to-probability-odds-converter"
              style={{ color: "#2563eb", whiteSpace: "nowrap" }}
            >
              Decimal to Probability
            </a>

            <a
              href="/calculators/probability-to-decimal-odds-converter"
              style={{ color: "#2563eb", whiteSpace: "nowrap" }}
            >
              Probability to Decimal
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}