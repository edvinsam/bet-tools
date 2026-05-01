import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy | Bet Tools",
  description:
    "Read how Bet Tools handles analytics, cookies, location-based filtering, affiliate links, advertising and voluntarily submitted contact information.",
  alternates: {
    canonical: "https://bet-tools.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />

      <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">
          Privacy Policy
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Bet Tools respects your privacy. We do not require users to create an
          account to use the calculators, bookmaker comparisons, casino reviews
          or country-based pages.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            Information we collect
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            We may collect basic technical and usage information, such as pages
            visited, browser type, device type, approximate region, referring
            pages and general site interaction data. This helps us understand how
            the site is used and improve the user experience.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            Location-based features
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Some pages include location filters or “use my location” features to
            help users find betting sites, bookmakers or casinos that may be
            relevant to their country. If you choose to use this feature, your
            browser may ask for permission to detect your location. We use that
            location only to route you to a relevant country or region page.
          </p>

          <p className="mt-3 leading-7 text-slate-600">
            You can also browse by country or region manually without using
            location detection.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">Cookies</h2>

          <p className="mt-3 leading-7 text-slate-600">
            Bet Tools may use cookies or similar technologies for site
            functionality, analytics, performance measurement and future
            advertising or affiliate tracking. You can control cookies through
            your browser settings.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">Analytics</h2>

          <p className="mt-3 leading-7 text-slate-600">
            We may use analytics tools to measure traffic, page performance,
            popular content and general usage patterns. Analytics data is used in
            aggregate and is not intended to personally identify individual
            visitors.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            Affiliate links and advertising
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Some links on Bet Tools may be affiliate or sponsored links. If you
            click one of these links, the destination operator or affiliate
            network may use tracking technologies to attribute the visit or
            signup. This does not affect our reviews, rankings or calculator
            results.
          </p>

          <p className="mt-3 leading-7 text-slate-600">
            In the future, the site may also display advertisements from
            third-party advertising networks. These providers may use cookies or
            similar technologies according to their own privacy policies.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            Contact information
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            If you contact us voluntarily, we may receive the information you
            choose to provide, such as your name, email address and message
            content. This information is used only to respond to your request.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            External websites
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Bet Tools links to external bookmaker, casino, affiliate and
            information websites. We are not responsible for the privacy
            practices, content or terms of those external websites.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">Contact</h2>

          <p className="mt-3 leading-7 text-slate-600">
            Questions about this privacy policy can be sent through the{" "}
            <Link
              href="/contact"
              className="font-medium text-blue-600 underline-offset-4 hover:underline"
            >
              contact page
            </Link>
            .
          </p>
        </section>
      </article>
    </main>
  );
}