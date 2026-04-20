import type { Metadata } from "next";
import OddsConverter from "@/components/OddsConverter";
import { oddsTypes, makeSlug, parseSlug } from "@/lib/oddsRoutes";
import { oddsContent, type ConversionContent } from "@/lib/oddsContent";
import { notFound } from "next/navigation";
import "../../globals.css";
import { Suspense } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import AllOddsConversions from "@/components/AllOddsConversions";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getDefaultContent(from: string, to: string): ConversionContent {
  return {
    title: `${from} to ${to} Odds Converter`,
    intro: `Use this calculator to convert ${from} odds into ${to} odds instantly.`,
    example: `Enter a value in ${from} format to see the equivalent ${to} value.`,
    formulaTitle: `How ${from} odds are converted to ${to} odds`,
    formulaText:
      "This converter first converts the value to decimal odds, then converts it into the target format.",
    fromDescription: `${from} odds are one of the supported betting formats in this calculator.`,
    toDescription: `${to} odds are one of the supported betting formats in this calculator.`,
    supportedFormatsText:
      "This converter supports the main betting odds formats used worldwide.",
    whyUseText:
      "An odds converter helps you compare bookmaker prices more easily across different formats.",
    commonMistake:
      "A common mistake is mixing up profit-only formats with total-return formats.",
    pairNote:
      "This converter is designed to help you switch between two betting odds formats quickly.",
    faq: [
      {
        question: `How do you convert ${from} odds to ${to} odds?`,
        answer:
          "Use the calculator to convert the value automatically and avoid manual mistakes.",
      },
    ],
    workedExample: {
      heading: "Worked example",
      input: `Convert ${from} to ${to}`,
      explanation: [
        `Start with the ${from} value.`,
        `Apply the relevant conversion formula.`,
      ],
      result: `Equivalent ${to} value`,
    },
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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
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
  const content = oddsContent[key] ?? getDefaultContent(parsed.from, parsed.to);

  return {
    title: content.title,
    description: content.intro,
    alternates: {
      canonical: `https://bet-tools.com/calculators/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.intro,
      url: `https://bet-tools.com/calculators/${slug}`,
    },
    twitter: {
      title: content.title,
      description: content.intro,
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
  const content = oddsContent[key] ?? getDefaultContent(parsed.from, parsed.to);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

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
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Calculators", href: "/calculators" },
            { label: content.title },
          ]}
        />

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
            {content.formulaTitle}
          </h3>

          <p>{content.formulaText}</p>
          <p>{content.example}</p>

                    <h2
            style={{
              textAlign: "center",
              paddingTop: "0.75rem",
            }}
          >
            {content.workedExample.heading}
          </h2>

          <div
            style={{
              marginTop: "0.75rem",
              padding: "1rem",
              border: "1px solid #e5e7eb",
              borderRadius: "0.75rem",
              background: "#f9fafb",
            }}
          >
            <p style={{ marginTop: 0 }}>
              <strong>{content.workedExample.input}</strong>
            </p>

            {content.workedExample.explanation.map((step, index) => (
              <p key={index}>{step}</p>
            ))}

            <p style={{ marginBottom: 0 }}>
              <strong>{content.workedExample.result}</strong>
            </p>
          </div>

          <h2
            style={{
              textAlign: "center",
              paddingTop: "0.75rem",
            }}
          >
            Important note for this conversion
          </h2>
          <p>{content.pairNote}</p>

          <h2
            style={{
              textAlign: "center",
              paddingTop: "0.75rem",
            }}
          >
            Common conversion mistake
          </h2>
          <p>{content.commonMistake}</p>

          <h2 style={{ textAlign: "center", paddingTop: "0.75rem" }}>
            {fromLabel} odds explained
          </h2>
          <p>{content.fromDescription}</p>

          <h2 style={{ textAlign: "center", paddingTop: "0.75rem" }}>
            {toLabel} odds explained
          </h2>
          <p>{content.toDescription}</p>

          <h2
            style={{
              textAlign: "center",
              paddingTop: "0.75rem",
            }}
          >
            Supported odds formats
          </h2>
          <p>{content.supportedFormatsText}</p>

          <h2
            style={{
              textAlign: "center",
              paddingTop: "0.75rem",
            }}
          >
            Why use an odds converter?
          </h2>
          <p>{content.whyUseText}</p>

          {content.faq.length > 0 && (
            <>
              <h2
                style={{
                  textAlign: "center",
                  paddingTop: "0.75rem",
                }}
              >
                Frequently asked questions
              </h2>

              <div style={{ marginTop: "1rem" }}>
                {content.faq.map((item, index) => (
                  <div
                    key={`${item.question}-${index}`}
                    style={{ marginBottom: "1.25rem" }}
                  >
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.question}
                    </h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
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
            <Link
              href="/calculators/decimal-to-american-odds-converter"
              style={{ color: "#2563eb", whiteSpace: "nowrap" }}
            >
              Decimal to American
            </Link>

            <Link
              href="/calculators/american-to-decimal-odds-converter"
              style={{ color: "#2563eb", whiteSpace: "nowrap" }}
            >
              American to Decimal
            </Link>

            <Link
              href="/calculators/decimal-to-fractional-odds-converter"
              style={{ color: "#2563eb", whiteSpace: "nowrap" }}
            >
              Decimal to Fractional
            </Link>

            <Link
              href="/calculators/fractional-to-decimal-odds-converter"
              style={{ color: "#2563eb", whiteSpace: "nowrap" }}
            >
              Fractional to Decimal
            </Link>

            <Link
              href="/calculators/decimal-to-probability-odds-converter"
              style={{ color: "#2563eb", whiteSpace: "nowrap" }}
            >
              Decimal to Probability
            </Link>

            <Link
              href="/calculators/probability-to-decimal-odds-converter"
              style={{ color: "#2563eb", whiteSpace: "nowrap" }}
            >
              Probability to Decimal
            </Link>
          </div>
        </section>

        {content.faq.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqJsonLd),
            }}
          />
        )}

        <AllOddsConversions />
      </div>
    </main>
  );
}