// app/casino-reviews/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StarRating from "@/components/StarRating";
import { casinoReviews } from "@/lib/casino-reviews";
import { BOOKMAKER_META } from "@/lib/bookmaker-meta";

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

  const brandSlug = casino.slug.replace(/-casino$/, "");
  const meta = BOOKMAKER_META[casino.slug] ?? BOOKMAKER_META[brandSlug];

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

      <section className="mt-6 rounded-3xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-6 shadow-sm sm:p-8">
        <p className="mb-5 text-sm font-medium text-emerald-700">
            We may earn a commission if you sign up through links on this page. This
            does not affect our reviews or rankings.
        </p>

        <div className="grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-start">
            <div>
            <p className="text-sm font-semibold text-blue-600">Casino review</p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {casino.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
                {casino.intro}
            </p>

            {casino.rating !== undefined && (
                <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:max-w-xs">
                <p className="text-sm text-slate-500">Rating</p>
                <div className="mt-2">
                    <StarRating rating={casino.rating} />
                </div>
                </div>
            )}
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            {meta?.logo && (
                <div
                className="flex h-24 w-full items-center justify-center rounded-2xl border border-slate-200 p-5"
                style={
                    meta.backgroundColor
                    ? { backgroundColor: meta.backgroundColor }
                    : undefined
                }
                >
                <img
                    src={meta.logo}
                    alt={`${casino.name} logo`}
                    className="max-h-full max-w-full object-contain"
                />
                </div>
            )}

            {meta?.url && (
                <a
                href={meta.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-4 inline-flex w-full justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                Visit casino
                </a>
            )}

            <p className="mt-3 text-xs leading-5 text-slate-500">
                Check local availability, bonus terms and responsible gambling rules
                before signing up.
            </p>
            </aside>
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