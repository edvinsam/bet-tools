import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Contact Bet Tools",
  description:
    "Contact Bet Tools with questions, feedback, corrections, partnership inquiries or technical issues related to calculators, bookmaker reviews or casino comparisons.",
  alternates: {
    canonical: "https://bet-tools.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">
          Contact
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          If you have questions, suggestions, corrections or feedback about the
          site, feel free to get in touch. This includes issues related to
          calculators, bookmaker reviews, casino pages, availability information
          or general usability.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            Email
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            You can contact us at:
          </p>

          <p className="mt-2">
            <a
              href="mailto:contact@bet-tools.com"
              className="font-semibold text-blue-600 underline-offset-4 hover:underline"
            >
              contact@bet-tools.com
            </a>
          </p>

          <p className="mt-3 text-sm text-slate-500">
            We aim to respond within a reasonable time, typically within a few
            business days.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            What you can contact us about
          </h2>

          <ul className="mt-4 space-y-2 text-slate-600">
            <li>• Incorrect bookmaker or casino information</li>
            <li>• Calculator bugs or technical issues</li>
            <li>• Suggestions for new calculators or features</li>
            <li>• Feedback about usability or content</li>
            <li>• Partnership or affiliate inquiries</li>
          </ul>
        </section>

        <section className="mt-8">
          <p className="text-sm leading-6 text-slate-500">
            Bet Tools provides informational content and comparison tools. We do
            not operate bookmakers or casinos and cannot assist with account,
            payment or withdrawal issues related to external operators.
          </p>
        </section>
      </section>
    </main>
  );
}