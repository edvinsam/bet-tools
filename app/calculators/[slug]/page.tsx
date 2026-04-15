import OddsConverter from "@/components/OddsConverter";
import { oddsTypes, makeSlug, parseSlug } from "@/lib/oddsRoutes";
import { oddsContent, type ConversionContent } from "@/lib/oddsContent";
import { notFound } from "next/navigation";
import "../../globals.css";
import { Suspense } from "react";

type PageProps = {
  params: {
    slug: string;
  };
};
function getDefaultContent(from: string, to: string): ConversionContent {
  return {
    title: `${from} to ${to} Odds Converter`,
    intro: `Use this calculator to convert ${from} odds into ${to} odds instantly.`,
    example: `Enter a value in ${from} format to see the equivalent ${to} value.`,
    formulaTitle: `How ${from} odds are converted to ${to} odds`,
    formulaText:
      "This converter first converts the value to decimal odds, then converts it into the target format.",
    fromDescription: "sample description",
    toDescription: "sample description"
  };
}

export async function generateStaticParams() {
  const params = [];

  for (const from of oddsTypes) {
    for (const to of oddsTypes) {
      if (from === to) continue;

      params.push({
        slug: makeSlug(from, to),
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    return {
      title: "Odds Converter",
      description: "Convert between betting odds formats.",
      alternates: {
        canonical: "https://yourdomain.com/calculators/odds-converter",
      },
    };
  }

  const key = `${parsed.from}-to-${parsed.to}` as const;
  const content =
    oddsContent[key] ?? getDefaultContent(parsed.from, parsed.to);

  return {
    title: content.title,
    description: content.intro,
    alternates: {
      canonical: `https://yourdomain.com/calculators/${slug}`,
    },
  };
}

export default async function CalculatorPage({ params }: PageProps) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    notFound();
  }

  const key = `${parsed.from}-to-${parsed.to}` as const;
  const content =
    oddsContent[key] ?? getDefaultContent(parsed.from, parsed.to);

  return (
    <main style={{ padding: "20px" }}>
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          {content.title}
        </h1>
        <Suspense fallback={null}>
          <OddsConverter defaultFrom={parsed.from} defaultTo={parsed.to} />
        </Suspense>

        <section style={{ maxWidth: "600px", margin: "30px auto" }}>
          <h2 style={{ textAlign: "center" }}>How to convert {parsed.from.charAt(0).toUpperCase() + parsed.from.slice(1)} odds to {parsed.to.charAt(0).toUpperCase() + parsed.to.slice(1)} odds</h2>

          <p style={{ textAlign: "center" }}>{content.intro}</p>
          <h3 style={{ textAlign: "center", paddingTop: "10px" }}>Formula used for converting {parsed.from} odds to {parsed.to} odds</h3>
          <p style={{ textAlign: "center" }}>{content.formulaText}</p>
          <p style={{ textAlign: "center" }}>{content.example}</p>

          <h2 style={{ textAlign: "center", paddingTop: "10px" }}>{parsed.from.charAt(0).toUpperCase() + parsed.from.slice(1)} odds explained</h2>
          <p style={{ textAlign: "center" }}>{content.fromDescription}</p>

          <h2 style={{ textAlign: "center", paddingTop: "10px" }}>{parsed.to.charAt(0).toUpperCase() + parsed.to.slice(1)} odds explained</h2>
          <p style={{ textAlign: "center" }}>{content.toDescription}</p>

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
              style={{ color: "#2563eb" }}>
              Decimal to American
            </a>

            <a
              href="/calculators/american-to-decimal-odds-converter"
              style={{ color: "#2563eb" }}>
              American to Decimal
            </a>

            <a
              href="/calculators/decimal-to-fractional-odds-converter"
              style={{ color: "#2563eb" }}>
              Decimal to Fractional
            </a>

            <a
              href="/calculators/fractional-to-decimal-odds-converter"
              style={{ color: "#2563eb" }}>
              Fractional to Decimal
            </a>

            <a
              href="/calculators/decimal-to-probability-odds-converter"
              style={{ color: "#2563eb" }}>
              Decimal to Probability
            </a>

            <a
              href="/calculators/probability-to-decimal-odds-converter"
              style={{ color: "#2563eb" }}>
              Probability to Decimal
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}