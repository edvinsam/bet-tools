export const metadata = {
  title: "Contact",
  description:
    "Contact the site owner with questions, feedback, or technical issues related to the calculators.",
  alternates: {
    canonical: "https://bet-tools.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main style={{ padding: "20px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h1>Contact</h1>

        <p>
          If you have questions, suggestions, or feedback about the calculators
          on this site, feel free to get in touch.
        </p>

        <h2 style={{marginTop: "15px"}}>Email</h2>

        <p>
          You can contact us at:
        </p>

        <p>
          <a href="mailto:contact@yoursite.com">
            contact@yoursite.com
          </a>
        </p>

        <p>
          We aim to respond to messages within a reasonable time.
        </p>
      </div>
    </main>
  );
}