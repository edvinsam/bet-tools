export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>
          Betting Tools
        </h1>

        <nav>
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

/* 

<a href="/calculators/ev-calculator" style={styles.link}>
  EV Calculator
</a>

<a href="/calculators/kelly-calculator" style={styles.link}>
  Kelly Calculator
</a>

*/

const styles = {
  header: {
    backgroundColor: "#e8e8e8",
    color: "#111827",
    padding: "15px 0",
    borderBottom: "8px solid #2563eb"
  },

  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    margin: 0,
    fontSize: "20px",
  },

  link: {
    color: "#111827",
    marginLeft: "15px",
    textDecoration: "none",
  },
};