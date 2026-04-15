import OddsConverter from "@/components/OddsConverter";

export const metadata = {
  title: "Odds Converter",
  description:
    "Convert between decimal, fractional, American, Hong Kong, Malay, Indonesian, and implied probability betting odds formats.",
  alternates: {
    canonical: "https://yourdomain.com/calculators/odds-converter",
  },
};

export default function OddsConverterPage() {
  return (
    <main style={{ padding: "20px" }}>
      <div>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Odds Converter
        </h1>

        <OddsConverter defaultFrom="decimal" defaultTo="american" />

        <section style={{ maxWidth: "600px", margin: "30px auto" }}>
          <h2
            style={{
              textAlign: "center",
            }}
          >
            What this odds converter does
          </h2>

          <p style={{ textAlign: "center" }}>
            This betting odds converter lets you instantly convert between
            decimal, fractional, American, Hong Kong, Malay, Indonesian, and
            implied probability formats.
          </p>

          <h3
            style={{
              textAlign: "center",
              paddingTop: "10px",
            }}
          >
            How the conversion works
          </h3>

          <p style={{ textAlign: "center" }}>
            The converter first translates the selected input odds into decimal
            odds as an intermediate format. It then converts that decimal value
            into the target odds format. This keeps the logic consistent across
            all supported odds types.
          </p>

          <p style={{ textAlign: "center" }}>
            For example, if you enter decimal odds of 2.50, the converter can
            show the equivalent American odds, fractional odds, implied
            probability, or any other supported format instantly.
          </p>

          <h2
            style={{
              textAlign: "center",
              paddingTop: "10px",
            }}
          >
            Supported odds formats
          </h2>

          <p style={{ textAlign: "center" }}>
            This converter supports decimal odds, fractional odds, American
            odds, Hong Kong odds, Malay odds, Indonesian odds, and implied
            probability percentage.
          </p>

          <h2
            style={{
              textAlign: "center",
              paddingTop: "10px",
            }}
          >
            Why use an odds converter?
          </h2>

          <p style={{ textAlign: "center" }}>
            Bookmakers and betting exchanges use different odds formats
            depending on region and market. An odds converter makes it easier to
            compare prices, understand implied probability, and analyze bets
            more accurately across different sportsbooks.
          </p>
        </section>
        <section
            style={{
                maxWidth: "600px",
                margin: "30px auto",
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
                gap: "10px",
                justifyContent: "center",
                marginTop: "10px",
                }}
            >
                <a 
                    href="/calculators/decimal-to-american-odds-converter"
                    style={{color: "#2563eb"}}>
                Decimal to American
                </a>

                <a 
                    href="/calculators/american-to-decimal-odds-converter"
                    style={{color: "#2563eb"}}>
                American to Decimal
                </a>

                <a 
                    href="/calculators/decimal-to-fractional-odds-converter"
                    style={{color: "#2563eb"}}>
                Decimal to Fractional
                </a>

                <a 
                    href="/calculators/fractional-to-decimal-odds-converter"
                    style={{color: "#2563eb"}}>
                Fractional to Decimal
                </a>

                <a 
                    href="/calculators/decimal-to-probability-odds-converter"
                    style={{color: "#2563eb"}}>
                Decimal to Probability
                </a>

                <a 
                    href="/calculators/probability-to-decimal-odds-converter"
                    style={{color: "#2563eb"}}>
                Probability to Decimal
                </a>
            </div>
        </section>
      </div>
    </main>
  );
}