import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Quote,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/esta-hero-machining.jpg.asset.json";
import observeAsset from "@/assets/esta-program-observation.jpg.asset.json";
import weldingAsset from "@/assets/esta-welding.jpg.asset.json";
import ceoAsset from "@/assets/bolaji-jegede.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eternity Stone Training Academy | Skills for Today" },
      {
        name: "description",
        content:
          "ESTA delivers practical technical training in welding, instrumentation, and solar installation for future-ready professionals in Osogbo.",
      },
      { property: "og:title", content: "Eternity Stone Training Academy | Skills for Today" },
      {
        property: "og:description",
        content:
          "Bridge classroom theory and industry reality with ESTA's premium practical training tracks.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:image", content: heroAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  { value: "3", label: "Flagship Tracks" },
  { value: "100%", label: "Practical Focus" },
  { value: "ITF", label: "Standards Aligned" },
] as const;

const pillars = [
  "Workshop-led instruction with industry equipment",
  "Career-shaping competencies for artisans and professionals",
  "Mentorship that connects training to enterprise and employability",
] as const;

function HomePage() {
  return (
    <div>
      <section className="section-band pb-10 sm:pb-14">
        <div className="site-container">
          <div className="hero-card grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-14">
            <div className="flex flex-col justify-between gap-8">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/74">
                  <Sparkles className="size-3.5 text-primary" />
                  Professional technical capacity development
                </span>
                <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                  Skills for Today. Competence for Tomorrow.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
                  Bridging the gap between classroom theory and industry reality through immersive, workshop-first learning at Eternity Stone Training Academy.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="hero" size="xl">
                    <Link to="/contact">
                      Enroll Now
                      <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="xl" className="border-white/16 bg-white/8 text-hero-foreground hover:bg-white/12 hover:text-hero-foreground">
                    <Link to="/programs">Explore Programs</Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="hero-stat-card">
                    <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                    <p className="mt-2 text-sm text-white/72">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-white/12 bg-white/6">
                <img
                  src={heroAsset.url}
                  alt="ESTA trainee operating machining equipment in the workshop"
                  className="h-full min-h-[260px] w-full object-cover"
                />
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-xl border border-white/12 bg-white/6">
                  <img
                    src={weldingAsset.url}
                    alt="ESTA welding trainee demonstrating practical fabrication skills"
                    className="h-44 w-full object-cover"
                  />
                </div>
                <div className="rounded-xl border border-white/12 bg-white/6 p-5 text-white/82">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Why ESTA</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7">
                    {pillars.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band-muted">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="industrial-card p-8 sm:p-10">
              <span className="eyebrow">Value proposition</span>
              <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
                Degrees tell people what you studied.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground">
                ESTA turns theory into confidence by placing learners in real technical environments that mirror modern production floors.
              </p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary p-8 text-primary-foreground shadow-[0_26px_56px_-30px_color-mix(in_oklab,var(--primary)_62%,transparent)] sm:p-10">
              <span className="eyebrow border-white/12 bg-white/10 text-white/72">Industry reality</span>
              <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
                Skills show people what you can DO.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-primary-foreground/88">
                From welding sparks to solar systems and industrial controls, every track is structured to produce measurable capability and workplace readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="site-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="page-hero overflow-hidden">
            <img
              src={observeAsset.url}
              alt="ESTA learners observing a practical machining session"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">Training impact</span>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Structured learning paths designed for technical excellence and enterprise growth.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "Workshop immersion with guided supervision",
                "Evidence-based practical tasks and competence checks",
                "Professional grooming for employment and self-reliance",
              ].map((item) => (
                <div key={item} className="industrial-card p-5">
                  <BadgeCheck className="size-5 text-primary" />
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band-contrast">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="industrial-card overflow-hidden border-white/10 bg-white/6 p-0 text-white">
              <img
                src={ceoAsset.url}
                alt="Portrait of Mr. Bolaji Jegede, CEO of Eternity Stone Training Academy"
                className="h-80 w-full object-cover object-top sm:h-96"
              />
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/64">Leadership note</p>
                <p className="mt-2 text-2xl font-bold">Mr. Bolaji Jegede</p>
                <p className="text-sm text-white/70">CEO, Eternity Stone Group</p>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/6 p-8 backdrop-blur-sm sm:p-10">
              <Quote className="size-10 text-primary" />
              <blockquote className="mt-5 max-w-3xl text-2xl font-bold leading-tight sm:text-4xl">
                Sustainable development begins with practical skills, innovation, and enterprise.
              </blockquote>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/76">
                ESTA exists to empower the next generation of professionals with the competence, discipline, and confidence required to thrive in industrial environments and build resilient futures.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/76">
                <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">Skills-based learning</span>
                <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">Industry discipline</span>
                <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">Enterprise mindset</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="site-container">
          <div className="industrial-card flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <span className="eyebrow">Next step</span>
              <h2 className="text-3xl font-bold sm:text-4xl">Ready to build practical competence?</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-muted-foreground">
                Review the curriculum, speak with our admissions team, and take the next step toward a future shaped by skill.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Start Admission
                  <ChevronRight />
                </Link>
              </Button>
              <Button asChild variant="quiet" size="xl">
                <Link to="/about">
                  Learn More
                  <BookOpen />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
