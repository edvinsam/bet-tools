import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Terms of Use | Bet Tools",
  description:
    "Read the Bet Tools terms of use for calculators, bookmaker reviews, casino reviews, comparison pages and informational betting content.",
  alternates: {
    canonical: "https://bet-tools.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms" }]} />

      <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">
          Terms of Use
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          By using Bet Tools, you agree to use the site for informational and
          educational purposes only. The site provides calculators, bookmaker
          reviews, casino reviews, comparison pages and related betting content.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            No betting advice
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Bet Tools does not provide financial, legal or betting advice. Any
            calculations, rankings, reviews or comparisons should be treated as
            general information, not as a recommendation to bet, gamble or sign
            up with any operator.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            Accuracy of information
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            We aim to keep information accurate and useful, but bookmaker
            availability, margins, bonuses, payment methods, terms and ratings
            can change. Always verify important details directly with the
            operator before making decisions.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            External links
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Bet Tools links to external websites, including bookmakers, casinos
            and affiliate partners. We are not responsible for external website
            content, terms, privacy policies or account-related issues.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            Responsible use
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Betting and casino games involve financial risk. Users are
            responsible for following local laws and gambling responsibly. See
            our{" "}
            <Link
              href="/responsible-gambling"
              className="font-medium text-blue-600 underline-offset-4 hover:underline"
            >
              responsible gambling page
            </Link>{" "}
            for more information.
          </p>
        </section>
      </article>
    </main>
  );
}