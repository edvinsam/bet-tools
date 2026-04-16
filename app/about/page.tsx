import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "About",
  description:
    "Learn more about this betting calculator site and the tools it provides for odds conversion, probability, arbitrage, and value betting.",
  alternates: {
    canonical: "https://yourdomain.com/about",
  },
};

export default function AboutPage() {
  return (
    <main style={{ padding: "20px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About" }
          ]}
        />
        <h1>About This Site</h1>

        <p>
          This website provides free betting calculators and tools designed to
          help bettors understand odds, probabilities, and betting value more
          clearly. The tools are intended for educational and informational
          purposes and are suitable for both beginners and experienced bettors.
        </p>

        <h2 style={{marginTop: "15px"}}>What You Can Do Here</h2>

        <ul>
          <li>Convert between different betting odds formats</li>
          <li>Calculate implied and fair probabilities</li>
          <li>Identify arbitrage opportunities</li>
          <li>Measure expected value of bets</li>
          <li>Estimate optimal bet sizing</li>
        </ul>

        <h2 style={{marginTop: "15px"}}>Disclaimer</h2>

        <p>
          The calculators on this site provide estimates based on mathematical
          formulas. They do not guarantee profit or betting success. Users are
          responsible for their own decisions and should only bet responsibly.
        </p>
      </div>
    </main>
  );
}