import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarClock, Handshake, Rocket, Sparkles, Tractor } from "lucide-react";

import { Button } from "@/components/ui/button";
import { camet, cametGallery } from "@/lib/courses";

export const Route = createFileRoute("/camet")({
  head: () => ({
    meta: [
      { title: "CAMET — Launching January 2027 | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "CAMET is ESTA's flagship Center for Agricultural Mechanization & Equipment Technology, launching January 2027. Partner with us to build Africa's next generation of machinery professionals.",
      },
      { property: "og:title", content: "CAMET — Launching January 2027" },
      {
        property: "og:description",
        content:
          "Tractor assembly, heavy diagnostics, precision agriculture and fleet entrepreneurship — opening January 2027 in Osogbo.",
      },
      { property: "og:url", content: "/camet" },
      { property: "og:image", content: camet.image },
      { name: "twitter:image", content: camet.image },
    ],
    links: [{ rel: "canonical", href: "/camet" }],
  }),
  component: CametPage,
});

function CametPage() {
  return (
    <div>
      <section className="section-band-contrast">
        <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary-foreground shadow-lg">
              <Sparkles className="size-3.5" /> Flagship Center — Launching January 2027
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              CAMET — Building Africa's next generation of agricultural machinery professionals.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              The Center for Agricultural Mechanization & Equipment Technology is ESTA's flagship training facility — specialising in indigenous technical capacity, tractor assembly, heavy diagnostics, precision agriculture and fleet entrepreneurship.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Become a Partner / Sponsor
                  <Handshake />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/20 bg-white/10 text-white hover:bg-white/15">
                <Link to="/contact">
                  Register Interest
                  <ArrowRight />
                </Link>
              </Button>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              <CalendarClock className="size-4 text-primary" /> Doors open January 2027 · Osogbo, Osun State
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/6">
            <img src={camet.image} alt="CAMET — tractor and agricultural machinery" className="h-full max-h-[520px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="site-container">
          <div className="max-w-3xl">
            <span className="eyebrow">Six strategic programs</span>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              A purpose-built curriculum for mechanised agriculture.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {camet.programs.map((p, i) => (
              <article key={p.title} className="industrial-card p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Tractor className="size-5 text-primary" />
                </div>
                <p className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">Program {i + 1}</p>
                <h3 className="mt-1 text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.duration}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-muted">
        <div className="site-container">
          <div className="max-w-3xl">
            <span className="eyebrow">Equipment & machinery</span>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Real machines. Real workshops. Real competence.
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {cametGallery.map((g) => (
              <figure key={g.url} className="industrial-card overflow-hidden p-0">
                <img src={g.url} alt={g.caption} loading="lazy" className="h-40 w-full object-cover sm:h-44" />
                <figcaption className="px-3 py-2 text-xs font-medium text-muted-foreground">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="site-container grid gap-10 lg:grid-cols-2">
          <div className="industrial-card p-8">
            <span className="eyebrow">Strategic partnerships</span>
            <h2 className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
              Partner with CAMET.
            </h2>
            <ul className="mt-5 space-y-3">
              {camet.partnerships.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-7 text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Open Partnership Conversation
                  <Handshake />
                </Link>
              </Button>
            </div>
          </div>
          <div className="industrial-card p-8">
            <span className="eyebrow">Sponsorship & scholarship</span>
            <h2 className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
              Fund a trainee. Build a livelihood.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">{camet.sponsorship}</p>
            <div className="mt-7">
              <Button asChild variant="quiet" size="lg">
                <Link to="/contact">
                  Sponsor a Student
                  <Rocket />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
