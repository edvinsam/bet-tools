import FairProbabilityCalc from "@/components/FairProbability";
import "../../globals.css";

export const metadata = {
  title: "Fair Probability Calculator",
  description:
    "Remove bookmaker margin to calculate no-vig probabilities, fair odds, and bookmaker overround for 2-way and 3-way markets.",
  alternates: {
    canonical: "https://bet-tools.com/calculators/fair-probability",
  },
};

export default function FairProbability() {
  return (
    <main style={{ padding: "20px" }}>
        <div>
            <h1 style={{ textAlign: "center", fontSize: "26px", marginBottom: "20px" }}>
                Fair probability / No-vig calculator
            </h1>

            <FairProbabilityCalc/>

            <section style={{ maxWidth: "600px", margin: "30px auto", textAlign: "center" }}>
              <h2>What this No-Vig / Fair Probability Calculator Does</h2>
              <p>
                This calculator converts bookmaker odds into implied probabilities, calculates the bookmaker margin (also known as the vig or overround), and removes that margin to estimate the fair underlying probabilities and fair odds for each outcome.
              </p>

              <p>
                Bookmakers include a margin in their odds to ensure profit over time. As a result, the implied probabilities of all outcomes usually add up to more than 100%. This calculator adjusts those probabilities so they sum to exactly 100%, giving you a clearer view of the true distribution of probabilities implied by the market.
              </p>

              <h2 style={{marginTop: "15px"}}>How Fair Probability Is Calculated</h2>
              <p>
                The calculation happens in four main steps. First, each set of odds is converted into an implied probability. Then all probabilities are summed to determine the total implied probability. The bookmaker margin is calculated from that total, and finally the probabilities are normalized to remove the margin and produce fair probabilities and fair odds.
              </p>

              <h2 style={{marginTop: "15px"}}>Formulas Used in the Calculation</h2>
              <h3 style={{marginTop: "10px"}}>Implied Probability</h3>
              <p>
                The implied probability of an outcome is calculated by dividing 1 by the decimal odds:
              </p>
              <p>
                Implied probability = 1 / Odds
              </p>
              <p>
                Example: If the odds are 2.50, the implied probability is 1 / 2.50 = 0.40, or 40%.
              </p>

              <h3 style={{marginTop: "10px"}}>Total Implied Probability</h3>
              <p>
                The total implied probability is the sum of all individual probabilities:
              </p>
              <p>
                Total implied probability = p₁ + p₂ (+ p₃)
              </p>
              <p>
                If the total exceeds 100%, the difference represents the bookmaker margin.
              </p>

              <h3 style={{marginTop: "10px"}}>Bookmaker Margin (Overround)</h3>
              <p>
                The bookmaker margin is calculated as:
              </p>
              <p>
                Margin = Total implied probability - 1
              </p>
              <p>
                For example, if the total implied probability is 105%, the bookmaker margin is 5%.
              </p>

              <h3 style={{marginTop: "10px"}}>No-Vig (Fair) Probability</h3>
              <p>
                To remove the bookmaker margin, each probability is divided by the total implied probability:
              </p>
              <p>
                Fair probability = Implied probability / Total implied probability
              </p>
              <p>
                This adjustment ensures that all probabilities sum to exactly 100%.
              </p>

              <h3 style={{marginTop: "10px"}}>Fair Odds</h3>
              <p>
                Fair odds are calculated from the no-vig probability:
              </p>
              <p>
                Fair odds = 1 / Fair probability
              </p>
              <p>
                These represent the odds that would exist if the bookmaker margin were removed.
              </p>

              <h2 style={{marginTop: "15px"}}>Example Calculation</h2>
              <p>
                Suppose a bookmaker offers the following decimal odds for a three-way market:
              </p>
              <ul>
                <li>Outcome 1: 1.55</li>
                <li>Outcome 2: 4.33</li>
                <li>Outcome 3: 5.75</li>
              </ul>
              <p>
                The implied probabilities are:
              </p>
              <ul>
                <li>Outcome 1: 64.52%</li>
                <li>Outcome 2: 23.09%</li>
                <li>Outcome 3: 17.39%</li>
              </ul>
              <p>
                The total implied probability is:
              </p>
              <p>
                105.00%
              </p>
              <p>
                This means the bookmaker margin is:
              </p>
              <p>
                5.00%
              </p>
              <p>
                After removing the margin, the fair probabilities become:
              </p>
              <ul>
                <li>Outcome 1: 61.44%</li>
                <li>Outcome 2: 21.99%</li>
                <li>Outcome 3: 16.56%</li>
              </ul>
              <p>
                The corresponding fair odds are:
              </p>
              <ul>
                <li>Outcome 1: 1.63</li>
                <li>Outcome 2: 4.55</li>
                <li>Outcome 3: 6.04</li>
              </ul>
              <h2 style={{marginTop: "15px"}}>Notes About Fair Probability and Bookmaker Margin</h2>
              <ul>
                <li>
                  The fair probabilities calculated here are estimates based on the bookmaker’s odds.
                </li>

                <li>
                  Bookmaker margins vary between sports, leagues, and market types.
                </li>

                <li>
                  Removing the vig does not guarantee accurate real-world probabilities, but it provides a clearer baseline for analysis.
                </li>

                <li>
                  This calculator works for both two-way and three-way markets.
                </li>
              </ul>
            </section>
        </div>
    </main>
  );
}