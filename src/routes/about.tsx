import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lightbulb, Target, Trees, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import drillingAsset from "@/assets/esta-drilling.jpg.asset.json";
import observeAsset from "@/assets/esta-program-observation.jpg.asset.json";
import { facilitators } from "@/lib/facilitators";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Learn about ESTA's mission, vision, and focus areas for practical technical capacity development in Osun State.",
      },
      { property: "og:title", content: "About Us | Eternity Stone Training Academy" },
      {
        property: "og:description",
        content:
          "ESTA equips youth, artisans, and professionals with industry-relevant technical knowledge and practical exposure.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: drillingAsset.url },
      { name: "twitter:image", content: drillingAsset.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const focusAreas = [
  {
    title: "Technical Skills Development",
    description:
      "Hands-on training pathways that build competence in industrial fabrication, electrical systems, instrumentation, and installation practice.",
    icon: Wrench,
  },
  {
    title: "Enterprise & MSME Growth",
    description:
      "Entrepreneurial discipline, practical problem-solving, and trade execution that support small business growth and long-term employability.",
    icon: Lightbulb,
  },
  {
    title: "Renewable Energy Advancement",
    description:
      "A future-facing training focus that prepares learners to design, install, and maintain clean energy solutions safely and professionally.",
    icon: Trees,
  },
] as const;

function AboutPage() {
  return (
    <div>
      <section className="section-band">
        <div className="site-container grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <span className="eyebrow">About Us</span>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
              Premium technical training shaped by industry reality.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Eternity Stone Training Academy Limited (ESTA) is the Training & Capacity Development Arm of Eternity Stone Group — a CAC-registered Nigerian academy dedicated to helping learners in Osogbo and beyond gain practical, industry-relevant competence across vocational trades, agriculture and sustainability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/programs">
                  View Programs
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="quiet" size="xl">
                <Link to="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
          <div className="page-hero overflow-hidden">
            <img
              src={observeAsset.url}
              alt="Learners receiving workshop guidance at Eternity Stone Training Academy"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-band-muted">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <div className="industrial-card p-8 sm:p-10">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <Target className="size-6 text-primary" />
            </div>
            <h2 className="mt-6 text-3xl font-bold">Mission</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              To equip youth, artisans, and professionals with practical technical knowledge, modern workplace discipline, and the confidence to solve real industry problems through standards-aligned training.
            </p>
          </div>
          <div className="industrial-card p-8 sm:p-10">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <Lightbulb className="size-6 text-primary" />
            </div>
            <h2 className="mt-6 text-3xl font-bold">Vision</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              To become a leading technical academy in Nigeria where industrial competence, innovation, and enterprise converge to create future-ready professionals and sustainable communities.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="site-container">
          <div className="flex max-w-3xl flex-col gap-4">
            <span className="eyebrow">Focus areas</span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              ESTA's work sits at the intersection of practical capability and economic relevance.
            </h2>
            <p className="text-base leading-8 text-muted-foreground">
              Every initiative is built to strengthen technical competence, empower enterprise, and support industrial and renewable energy advancement.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area.title} className="industrial-card p-7">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <area.icon className="size-6 text-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{area.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-contrast">
        <div className="site-container grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="page-hero overflow-hidden border-white/10">
            <img
              src={drillingAsset.url}
              alt="ESTA learner operating industrial drilling equipment"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow border-white/12 bg-white/8 text-white/70">Why it matters</span>
            <h2 className="text-3xl font-bold sm:text-4xl">Technical education that translates into work, value, and confidence.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/76">
              ESTA's approach prioritizes guided repetition, safety culture, and measurable competence so learners leave with more than theory — they leave with skills they can demonstrate.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Facilitators */}
      <section className="section-band-muted">
        <div className="site-container">
          <div className="max-w-2xl">
            <span className="eyebrow">Our team</span>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Meet Our Facilitators
            </h2>
            <p className="mt-3 text-base leading-8 text-muted-foreground">
              Industry practitioners with decades of combined fabrication, welding, electrical and solar installation experience.
            </p>
          </div>

          {/* Static grid (md+) */}
          <div className="mt-10 hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
            {facilitators.map((f) => (
              <FacilitatorCard key={f.name} f={f} />
            ))}
          </div>

          {/* Moving marquee (mobile) */}
          <div className="mt-10 overflow-hidden md:hidden" aria-label="Facilitators carousel">
            <div className="marquee">
              {[...facilitators, ...facilitators].map((f, i) => (
                <div key={`${f.name}-${i}`} className="w-64 shrink-0">
                  <FacilitatorCard f={f} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FacilitatorCard({ f }: { f: { name: string; role: string; years: string; image: string } }) {
  return (
    <article className="industrial-card overflow-hidden">
      <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
        <img
          src={f.image}
          alt={`Portrait of ${f.name}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-extrabold text-foreground">{f.name}</h3>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">{f.role}</p>
        <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.14em] text-primary">{f.years}</p>
      </div>
    </article>
  );
}
