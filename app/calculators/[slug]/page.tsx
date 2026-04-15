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
    toDescription: "sample description",
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
        canonical: "https://bet-tools.com/calculators/odds-converter",
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
      canonical: `https://bet-tools.com/calculators/${slug}`,
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

  const fromLabel =
    parsed.from.charAt(0).toUpperCase() + parsed.from.slice(1);
  const toLabel =
    parsed.to.charAt(0).toUpperCase() + parsed.to.slice(1);

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
        <h1
          style={{
            textAlign: "center",
            marginBottom: "1.25rem",
          }}
        >
          {content.title}
        </h1>

        <Suspense fallback={null}>
          <OddsConverter defaultFrom={parsed.from} defaultTo={parsed.to} />
        </Suspense>

        <section
          style={{
            width: "min(100%, 48rem)",
            margin: "2rem auto 0",
            textAlign: "left",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "0.75rem" }}>
            How to convert {fromLabel} odds to {toLabel} odds
          </h2>

          <p>{content.intro}</p>

          <h3 style={{ textAlign: "center", paddingTop: "0.5rem" }}>
            Formula used for converting {parsed.from} odds to {parsed.to} odds
          </h3>

          <p>{content.formulaText}</p>
          <p>{content.example}</p>

          <h2 style={{ textAlign: "center", paddingTop: "0.5rem" }}>
            {fromLabel} odds explained
          </h2>
          <p>{content.fromDescription}</p>

          <h2 style={{ textAlign: "center", paddingTop: "0.5rem" }}>
            {toLabel} odds explained
          </h2>
          <p>{content.toDescription}</p>

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