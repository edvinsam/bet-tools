import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Responsible Gambling | Bet Tools",
  description:
    "Responsible gambling information for users of Bet Tools. Betting and casino games involve risk and should only be used responsibly.",
  alternates: {
    canonical: "https://bet-tools.com/responsible-gambling",
  },
};

export default function ResponsibleGamblingPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Responsible Gambling" }]}
      />

      <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">
          Responsible Gambling
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Bet Tools provides informational tools and comparison content. Betting
          and casino games involve risk and are not a reliable way to make money.
          Only gamble if it is legal where you live and never risk money you
          cannot afford to lose.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            Keep gambling under control
          </h2>

          <ul className="mt-4 space-y-2 leading-7 text-slate-600">
            <li>• Set strict limits before betting or playing casino games.</li>
            <li>• Never chase losses.</li>
            <li>• Do not gamble with borrowed money.</li>
            <li>• Take breaks if gambling stops feeling recreational.</li>
            <li>• Avoid gambling when stressed, upset or under pressure.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            Warning signs
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Consider seeking help if gambling affects your finances,
            relationships, studies, work, sleep or mental wellbeing, or if you
            feel unable to stop.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-950">
            Get help
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            If gambling is becoming a problem, use local self-exclusion tools
            and contact a professional support organization in your country.
            Many licensed operators also provide deposit limits, time-outs and
            self-exclusion settings.
          </p>
        </section>
      </article>
    </main>
  );
}