import Breadcrumbs from "@/components/Breadcrumbs";

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
    <main
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "1.25rem 1rem 2.5rem",
      }}
    >
      <div
        style={{
          width: "min(100%, 44rem)",
          margin: "0 auto",
        }}
      >
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" }
          ]}
        />
        <h1 style={{ marginBottom: "1rem" }}>Contact</h1>

        <p>
          If you have questions, suggestions, or feedback about the calculators
          on this site, feel free to get in touch.
        </p>

        <h2 style={{ marginTop: "1rem" }}>Email</h2>

        <p>
          You can contact us at:
        </p>

        <p>
          <a href="mailto:contact@bet-tools.com">
            contact@bet-tools.com
          </a>
        </p>

        <p>
          We aim to respond to messages within a reasonable time.
        </p>
      </div>
    </main>
  );
}