import React from "react";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a href="/" style={styles.logoLink}>
          <h1 style={styles.logo}>Betting Tools</h1>
        </a>

        <nav style={styles.nav} aria-label="Main navigation">
          <a href="/" style={styles.link}>
            Home
          </a>

          <a href="/calculators/odds-converter" style={styles.link}>
            Odds Converter
          </a>

          <a href="/calculators/fair-probability" style={styles.link}>
            Fair Probability
          </a>

          <a href="/calculators/arbitrage-calculator" style={styles.link}>
            Arbitrage Calculator
          </a>
        </nav>
      </div>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    backgroundColor: "#e8e8e8",
    color: "#111827",
    padding: "0.9rem 0",
    borderBottom: "0.5rem solid #2563eb",
  },

  container: {
    width: "min(100%, 70rem)",
    margin: "0 auto",
    padding: "0 1rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.75rem 1rem",
    boxSizing: "border-box",
  },

  logoLink: {
    textDecoration: "none",
    color: "inherit",
    flex: "0 1 auto",
    minWidth: 0,
  },

  logo: {
    margin: 0,
    fontSize: "1.25rem",
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    color: "#111827",
  },

  nav: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem 0.875rem",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: "1 1 24rem",
    minWidth: 0,
  },

  link: {
    color: "#111827",
    textDecoration: "none",
    whiteSpace: "nowrap",
    fontSize: "0.95rem",
    lineHeight: 1.2,
  },
};