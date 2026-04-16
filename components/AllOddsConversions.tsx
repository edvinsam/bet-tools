import Link from "next/link";
import { oddsTypes, makeSlug } from "@/lib/oddsRoutes";

function formatOddsType(type: string) {
  switch (type) {
    case "hongkong":
      return "Hong Kong";
    case "probability":
      return "Probability";
    default:
      return type.charAt(0).toUpperCase() + type.slice(1);
  }
}

export default function AllOddsConversions() {
  return (
    <section
      style={{
        width: "min(100%, 48rem)",
        margin: "2.5rem auto 0",
        textAlign: "center",
      }}
    >
      <h2>All Odds Conversions</h2>

      <p>
        Browse every supported betting odds conversion by starting format.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.25rem",
          marginTop: "1.25rem",
          textAlign: "left",
        }}
      >
        {oddsTypes.map((from) => {
          const fromLabel = formatOddsType(from);
          const targets = oddsTypes.filter((to) => to !== from);

          return (
            <div
              key={from}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "0.75rem",
                padding: "1rem",
                backgroundColor: "#ffffff",
              }}
            >
              <h3
                style={{
                  margin: "0 0 0.75rem 0",
                  fontSize: "1rem",
                  color: "#111827",
                }}
              >
                {fromLabel} to
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.45rem",
                }}
              >
                {targets.map((to) => {
                  const toLabel = formatOddsType(to);

                  return (
                    <Link
                      key={`${from}-${to}`}
                      href={`/calculators/${makeSlug(from, to)}`}
                      prefetch={false}
                      style={{
                        color: "#2563eb",
                        textDecoration: "none",
                        lineHeight: 1.5,
                      }}
                    >
                      {fromLabel} to {toLabel}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}