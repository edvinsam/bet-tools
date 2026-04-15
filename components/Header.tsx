export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Betting Tools</h1>

        <nav style={styles.nav}>
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
    padding: "15px 0",
    borderBottom: "8px solid #2563eb",
  },

  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0 16px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    boxSizing: "border-box",
  },

  logo: {
    margin: 0,
    fontSize: "20px",
    whiteSpace: "nowrap",
  },

  nav: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px 14px",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  link: {
    color: "#111827",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
};