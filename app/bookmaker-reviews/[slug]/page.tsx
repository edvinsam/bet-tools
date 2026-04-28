// app/bookmaker-reviews/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { bookmakerReviews } from "@/lib/bookmaker-reviews";
import { enrichedBookmakerReviews } from "@/lib/enriched-bookmaker-reviews";
import Breadcrumbs from "@/components/Breadcrumbs";
import StarRating from "@/components/StarRating";
import { bookmakerAvailability } from "@/lib/bookmaker-availability";
import BookmakerAvailabilityCard from "@/components/BookmakerAvailabilityCard";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return bookmakerReviews.map((bookmaker) => ({
    slug: bookmaker.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const bookmaker = bookmakerReviews.find((item) => item.slug === slug);

  if (!bookmaker) {
    return {
      title: "Bookmaker Review",
    };
  }

  return {
    title: bookmaker.title,
    description: bookmaker.metaDescription,
    alternates: {
      canonical: `/bookmaker-reviews/${bookmaker.slug}`,
    },
  };
}

export default async function BookmakerReviewPage({ params }: PageProps) {
  const { slug } = await params;

  const bookmaker = enrichedBookmakerReviews.find(
    (item) => item.slug === slug
  );

  if (!bookmaker) {
    notFound();
  }

  const availability = bookmakerAvailability[bookmaker!.slug];

  const listedCountryCount = [
    ...(availability?.licensedCountries ?? []),
  ].filter((country, index, array) => array.indexOf(country) === index).length;

  if (!bookmaker) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Bookmaker Reviews", href: "/bookmaker-reviews" },
          { label: bookmaker.name },
        ]}
      />

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Bookmaker review
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-950">
              {bookmaker.name} Review
            </h1>

            <p className="mt-4 max-w-3xl text-slate-700">
              {bookmaker.intro}
            </p>
          </div>

          {bookmaker.logo && (
            <div
              className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4"
              style={
                bookmaker.backgroundColor
                  ? { backgroundColor: bookmaker.backgroundColor }
                  : undefined
              }
            >
              <a
                href={bookmaker.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="flex h-full w-full items-center justify-center"
              >
                <img
                  src={bookmaker.logo}
                  alt={`${bookmaker.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </a>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {typeof bookmaker.rating === "number" && (
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Rating</p>
              <StarRating rating={bookmaker.rating} />
            </div>
          )}

          {typeof bookmaker.averageMargin === "number" && (
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Average margin</p>
              <p className="mt-1 text-xl font-semibold text-slate-950">
                {bookmaker.averageMargin.toFixed(2)}%
              </p>
              <Link
                href="/bookmaker-reviews/best-low-margin-bookmakers"
                className="text-slate-600 underline hover:text-slate-950 text-xs"
              >
                Compare the best low-margin bookmakers
              </Link>

              {typeof bookmaker.marginSamples === "number" && (
                <p className="mt-1 text-xs text-slate-500">
                  Based on {bookmaker.marginSamples} sampled markets
                </p>
              )}
            </div>
          )}

          {availability && (
            <BookmakerAvailabilityCard availability={availability} />
          )}
        </div>

        {bookmaker.url && bookmaker.url !== "#" && (
          <div className="mt-6">
            <a
              href={bookmaker.url}
              rel="nofollow sponsored noopener noreferrer"
              target="_blank"
              className="inline-flex rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Visit {bookmaker.name}
            </a>
          </div>
        )}
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-bold text-slate-950">Our verdict</h2>

        <p className="mt-4 leading-7 text-slate-700">{bookmaker.verdict}</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-bold text-slate-950">Quick facts</h2>

        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          {bookmaker.quickFacts.map((fact) => (
            <div key={fact.label} className="rounded-xl bg-slate-50 p-4">
              <dt className="text-sm text-slate-500">{fact.label}</dt>
              <dd className="mt-1 font-semibold text-slate-950">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-950">Pros</h2>
          <ul className="mt-4 space-y-2">
            {bookmaker.pros.map((pro) => (
              <li key={pro} className="text-slate-700">
                ✓ {pro}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-950">Cons</h2>
          <ul className="mt-4 space-y-2">
            {bookmaker.cons.map((con) => (
              <li key={con} className="text-slate-700">
                – {con}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {bookmaker.userReviewSummary && (
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold text-slate-950">
              User reviews and reputation
            </h2>

            <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-medium capitalize text-slate-700">
              {bookmaker.userReviewSummary.overallSentiment} sentiment
            </span>
          </div>

          <p className="mt-4 leading-7 text-slate-700">
            {bookmaker.userReviewSummary.summary}
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-950">Common praise</h3>
              <ul className="mt-3 space-y-2">
                {bookmaker.userReviewSummary.commonPraise.map((item) => (
                  <li key={item} className="text-slate-700">
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-950">
                Common complaints
              </h3>
              <ul className="mt-3 space-y-2">
                {bookmaker.userReviewSummary.commonComplaints.map((item) => (
                  <li key={item} className="text-slate-700">
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {bookmaker.userReviewSummary.sources &&
            bookmaker.userReviewSummary.sources.length > 0 && (
              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="text-sm font-medium text-slate-500">
                  Rating data sources
                </p>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {bookmaker.userReviewSummary.sources.map((source) => (
                    <div
                      key={source.source}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <p className="font-semibold text-slate-950">
                        {source.source}
                      </p>

                      {typeof source.rating === "number" && (
                        <StarRating rating={source.rating} />
                      )}

                      {typeof source.reviewCount === "number" && (
                        <p className="mt-1 text-sm text-slate-600">
                          Reviews: {source.reviewCount.toLocaleString()}
                        </p>
                      )}

                      {source.lastUpdated && (
                        <p className="mt-1 text-sm text-slate-600">
                          Last updated: {source.lastUpdated}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          <p className="mt-4 text-sm text-slate-500">
            User reputation summaries are based on publicly available review
            patterns and should be treated as a general overview, not a
            guarantee of future user experience.
          </p>
        </section>
      )}

      <section className="mt-8 space-y-6">
        {bookmaker.sections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-2xl font-bold text-slate-950">
              {section.title}
            </h2>

            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-7 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-bold text-slate-950">
          Compare {bookmaker.name} with other bookmakers
        </h2>

        <p className="mt-3 text-slate-700">
          Browse bookmaker reviews, ratings, margin data and supported
          locations in the bookmaker reviews hub.
        </p>

        <Link
          href="/bookmaker-reviews"
          className="mt-4 inline-flex font-semibold text-slate-950 underline"
        >
          View all bookmaker reviews
        </Link>
      </section>
    </main>
  );
}