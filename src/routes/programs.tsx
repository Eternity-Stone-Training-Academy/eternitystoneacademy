import { createFileRoute } from "@tanstack/react-router";
import { Download, Flame, PlugZap, SunMedium } from "lucide-react";

import { Button } from "@/components/ui/button";
import prospectusAsset from "@/assets/esta-prospectus-2026.pdf.asset.json";
import weldingAsset from "@/assets/esta-welding.jpg.asset.json";
import heroAsset from "@/assets/esta-hero-machining.jpg.asset.json";
import solarAsset from "@/assets/esta-solar.jpg.asset.json";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Explore ESTA's three flagship ITF-aligned programs in welding and fabrication, electrical instrumentation, and solar design installation.",
      },
      { property: "og:title", content: "Programs | Eternity Stone Training Academy" },
      {
        property: "og:description",
        content:
          "Three premium, practical technical tracks designed to build competence for today's industrial economy.",
      },
      { property: "og:url", content: "/programs" },
      { property: "og:image", content: solarAsset.url },
      { name: "twitter:image", content: solarAsset.url },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    title: "Welding & Fabrication Technology",
    duration: "3-Month ITF-aligned track",
    description:
      "Build strong fabrication fundamentals and workshop confidence through guided practical projects and industrial safety routines.",
    highlights: [
      "Arc, MIG, and TIG welding practice",
      "Metal cutting, grinding, and finishing",
      "Structural frame layout and fabrication planning",
    ],
    icon: Flame,
    image: weldingAsset.url,
    alt: "Welding trainee demonstrating fabrication work at ESTA",
  },
  {
    title: "Electrical & Instrumentation",
    duration: "3-Month ITF-aligned track",
    description:
      "Train for the systems that keep facilities running — from wiring and motor control to process instrumentation and testing.",
    highlights: [
      "Domestic wiring and installation practice",
      "Control panel building and motor controls",
      "Process instrumentation loop testing",
    ],
    icon: PlugZap,
    image: heroAsset.url,
    alt: "Industrial machining and workshop environment representing ESTA technical training",
  },
  {
    title: "Solar Design & Installation",
    duration: "3-Month ITF-aligned track",
    description:
      "Master the practical workflow behind renewable energy systems, from sizing and layout to safe rooftop installation protocols.",
    highlights: [
      "Load analysis calculations and PV-string layouts",
      "Battery bank wiring and hybrid inverters",
      "Roofing access, mounting, and safety protocols",
    ],
    icon: SunMedium,
    image: solarAsset.url,
    alt: "ESTA learners holding a solar panel during renewable energy training",
  },
] as const;

function ProgramsPage() {
  return (
    <div>
      <section className="section-band">
        <div className="site-container flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Flagship curriculum</span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Three focused tracks. One practical standard of excellence.
            </h1>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              ESTA's premium programs are structured as intensive 3-month pathways that combine workshop immersion, guided practice, and ITF-aligned technical outcomes.
            </p>
          </div>
          <Button asChild variant="hero" size="xl">
            <a href={prospectusAsset.url} download target="_blank" rel="noreferrer">
              Download Prospectus
              <Download />
            </a>
          </Button>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-container grid gap-6 xl:grid-cols-3">
          {programs.map((program) => (
            <article key={program.title} className="industrial-card overflow-hidden">
              <img src={program.image} alt={program.alt} className="h-60 w-full object-cover" />
              <div className="p-7">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <program.icon className="size-6 text-primary" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{program.duration}</p>
                <h2 className="mt-3 text-2xl font-bold leading-tight">{program.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{program.description}</p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-foreground">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
