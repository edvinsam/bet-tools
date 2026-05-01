// app/casino-reviews/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StarRating from "@/components/StarRating";
import { casinoReviews } from "@/lib/casino-reviews";
import { BOOKMAKER_META } from "@/lib/bookmaker-meta";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return casinoReviews.map((casino) => ({
    slug: casino.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const casino = casinoReviews.find((item) => item.slug === slug);

  if (!casino) {
    return {
      title: "Casino Review",
    };
  }

  return {
    title: casino.title,
    description: casino.metaDescription,
    alternates: {
      canonical: `/casino-reviews/${casino.slug}`,
    },
  };
}

export default async function CasinoReviewPage({ params }: PageProps) {
  const { slug } = await params;

  const casino = casinoReviews.find((item) => item.slug === slug);

  if (!casino) {
    notFound();
  }

  const meta = BOOKMAKER_META[casino.slug];

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Online Casinos", href: "/online-casinos" },
          { label: "Casino Reviews", href: "/casino-reviews" },
          { label: casino.name },
        ]}
      />

      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="mb-3 text-sm font-medium text-emerald-700">
          We may earn a commission if you sign up through links on this page.
          This does not affect our reviews or rankings.
        </p>

        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-950">
              {casino.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
              {casino.intro}
            </p>

            {casino.rating !== undefined ? (
              <div className="mt-4">
                <StarRating rating={casino.rating} />
              </div>
            ) : null}
          </div>

          {meta?.url ? (
            <a
              href={meta.url}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex shrink-0 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Visit casino
            </a>
          ) : null}
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-950">Verdict</h2>
          <p className="mt-3 text-sm leading-6 text-gray-700">
            {casino.verdict}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-950">Quick facts</h2>

          <dl className="mt-4 space-y-3">
            {casino.quickFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-gray-900">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-950">Pros</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-700">
            {casino.pros.map((pro) => (
              <li key={pro}>{pro}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-950">Cons</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-700">
            {casino.cons.map((con) => (
              <li key={con}>{con}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8 space-y-6">
        {casino.sections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-950">
              {section.title}
            </h2>

            <div className="mt-3 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-6 text-gray-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-950">
          Sports betting from the same brand
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-700">
          Some casino brands also offer sportsbook products. If you want to
          compare the sports betting side separately, read the bookmaker review.
        </p>

        <Link
          href={`/bookmaker-reviews/${casino.slug}`}
          className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:underline"
        >
          Read bookmaker review →
        </Link>
      </section>

      <p className="mt-8 text-xs leading-5 text-gray-500">
        Gamble responsibly. Casino games involve risk and are not a reliable way
        to make money. Availability, bonuses and payment methods can vary by
        country.
      </p>
    </main>
  );
}