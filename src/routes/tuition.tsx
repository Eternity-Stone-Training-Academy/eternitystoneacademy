import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Handshake,
  HandCoins,
  Tag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { camet, schools } from "@/lib/courses";

export const Route = createFileRoute("/tuition")({
  head: () => ({
    meta: [
      { title: "Tuition & Fees | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Official ESTA tuition and fees schedule for vocational, agricultural, CAMET and ESG programs — with customized pricing for corporates and institutional partners.",
      },
      { property: "og:title", content: "Tuition & Fees | Eternity Stone Training Academy" },
      {
        property: "og:description",
        content:
          "Standard tuition for individual students. Customized proposals for corporates. Institutional agreements for government and development partners.",
      },
      { property: "og:url", content: "/tuition" },
    ],
    links: [{ rel: "canonical", href: "/tuition" }],
  }),
  component: TuitionPage,
});

const summaryCards = [
  {
    icon: GraduationCap,
    title: "Individual Students",
    tag: "Standard Tuition Applies",
    body: "Fixed per-course tuition in Nigerian Naira as published in the schedules below. Instalment options available on request.",
  },
  {
    icon: Building2,
    title: "Corporate & Organizations",
    tag: "Request Customized Proposal",
    body: "In-house cohorts, tailored curricula, and on-site or workshop-based delivery — priced per scope after a discovery call.",
  },
  {
    icon: Handshake,
    title: "Government & Development Partners",
    tag: "Institutional Agreements",
    body: "MOUs and framework agreements for large cohorts, mechanization programmes and multi-state deployments.",
  },
];

function TuitionPage() {
  const paying = schools.filter((s) => s.id !== "corporate");
  const corporate = schools.find((s) => s.id === "corporate");

  return (
    <div>
      <section className="section-band">
        <div className="site-container">
          <div className="max-w-3xl">
            <span className="eyebrow">Official 2026 schedule</span>
            <h1 className="text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
              Tuition & Fees
            </h1>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              All tuition is quoted in Nigerian Naira (₦). Individual students pay published tuition;
              corporates and institutions are served through customized proposals and framework
              agreements.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {summaryCards.map((c) => {
              const Icon = c.icon;
              return (
                <article key={c.title} className="industrial-card flex flex-col p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h2 className="mt-4 text-lg font-extrabold leading-tight text-foreground">
                    {c.title}
                  </h2>
                  <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <HandCoins className="size-3.5" /> {c.tag}
                  </span>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{c.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {paying.map((school, idx) => (
        <section
          key={school.id}
          className={idx % 2 === 0 ? "section-band-muted" : "section-band"}
        >
          <div className="site-container">
            <div className="flex flex-col gap-2 border-l-4 border-primary pl-5">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
                {school.code}
              </span>
              <h2 className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
                {school.name}
              </h2>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary/60 text-xs font-extrabold uppercase tracking-[0.14em] text-foreground">
                  <tr>
                    <th className="px-4 py-3">Course</th>
                    <th className="px-4 py-3">Duration</th>
                    <th className="px-4 py-3 text-right">Tuition (₦)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {school.courses.map((c) => (
                    <tr key={c.title} className="hover:bg-accent/40">
                      <td className="px-4 py-3 font-medium text-foreground">{c.title}</td>
                      <td className="px-4 py-3 text-muted-foreground">{c.duration}</td>
                      <td className="px-4 py-3 text-right font-extrabold text-primary">
                        {c.customPricing ? "Customized Pricing" : c.price ?? "Contact Admissions"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      <section className="section-band-muted">
        <div className="site-container">
          <div className="flex flex-col gap-2 border-l-4 border-primary pl-5">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
              CAMET · Flagship Centre
            </span>
            <h2 className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
              Centre for Agricultural Machinery Engineering Technology
            </h2>
            <p className="text-sm text-muted-foreground">{camet.launch}</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/60 text-xs font-extrabold uppercase tracking-[0.14em] text-foreground">
                <tr>
                  <th className="px-4 py-3">Program</th>
                  <th className="px-4 py-3">Duration</th>
                  <th className="px-4 py-3 text-right">Tuition (₦)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {camet.programs.map((p) => (
                  <tr key={p.title} className="hover:bg-accent/40">
                    <td className="px-4 py-3 font-medium text-foreground">{p.title}</td>
                    <td className="px-4 py-3 text-muted-foreground">{p.duration}</td>
                    <td className="px-4 py-3 text-right font-extrabold text-primary">
                      {"price" in p && p.price ? p.price : "Contact Admissions"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {corporate ? (
        <section className="section-band">
          <div className="site-container">
            <div className="flex flex-col gap-2 border-l-4 border-primary pl-5">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
                Corporate Training & Professional Development
              </span>
              <h2 className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
                Customized programmes for organisations
              </h2>
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                All corporate tracks are priced by scope. Share your objectives and cohort size and
                we'll return a tailored proposal.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {corporate.courses.map((c) => (
                <article key={c.title} className="industrial-card flex flex-col p-6">
                  <h3 className="text-base font-extrabold text-foreground">{c.title}</h3>
                  <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-extrabold text-primary-foreground">
                    <Tag className="size-3.5" /> Customized Pricing / Request Proposal
                  </span>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {c.highlights.slice(0, 3).join(" · ")}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Request a Proposal
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
