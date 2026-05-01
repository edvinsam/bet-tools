import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Affiliate Disclosure | Bet Tools",
  description:
    "Read the Bet Tools affiliate disclosure explaining how sponsored and affiliate links may appear on bookmaker and casino pages.",
  alternates: {
    canonical: "https://bet-tools.com/affiliate-disclosure",
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Affiliate Disclosure" }]}
      />

      <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">
          Affiliate Disclosure
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Some links on Bet Tools may be affiliate or sponsored links. This means
          we may earn a commission if you click a link and sign up or complete an
          eligible action with an external operator.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            No extra cost to users
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Affiliate links do not add extra cost to you. They may help support
            the operation and development of Bet Tools.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            Reviews and rankings
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Affiliate relationships may exist with some operators, but our
            reviews, comparisons and calculator results are intended to remain
            informational. Users should always verify operator terms,
            availability, bonuses and legal eligibility before signing up.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            External operators
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Bet Tools does not operate bookmakers or casinos. Account issues,
            deposits, withdrawals, bonuses and verification processes are handled
            by the external operator.
          </p>
        </section>

        <section className="mt-8">
          <p className="text-sm leading-6 text-slate-500">
            For more information, see our{" "}
            <Link
              href="/privacy"
              className="font-medium text-blue-600 underline-offset-4 hover:underline"
            >
              privacy policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="font-medium text-blue-600 underline-offset-4 hover:underline"
            >
              terms of use
            </Link>
            .
          </p>
        </section>
      </article>
    </main>
  );
}