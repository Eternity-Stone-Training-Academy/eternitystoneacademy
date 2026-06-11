import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Clock,
  Download,
  MapPin,
  Monitor,
  Rocket,
  Sparkles,
  Tag,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import prospectusAsset from "@/assets/esta-prospectus-2026.pdf.asset.json";
import solarAsset from "@/assets/esta-solar.jpg.asset.json";
import { camet, schools, type Course } from "@/lib/courses";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Explore ESTA's three Schools — Vocational & Entrepreneurship (SVES), Agriculture & Agro-Allied (SAAS), and Sustainability & ESG (SSES) — across 20 industry-aligned courses.",
      },
      { property: "og:title", content: "Programs | Eternity Stone Training Academy" },
      {
        property: "og:description",
        content:
          "Three Schools. Twenty courses. One flagship CAMET center launching January 2027.",
      },
      { property: "og:url", content: "/programs" },
      { property: "og:image", content: solarAsset.url },
      { name: "twitter:image", content: solarAsset.url },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="industrial-card flex flex-col overflow-hidden">
      <img src={course.image} alt={course.title} loading="lazy" className="h-48 w-full object-cover" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-extrabold leading-tight text-foreground">{course.title}</h3>
        {course.subtitle ? (
          <p className="mt-1 text-xs font-medium text-muted-foreground">{course.subtitle}</p>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Clock className="size-3.5" /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Tag className="size-3.5" /> Contact Admissions for Pricing
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Monitor className="size-3.5" /> Online / Physical / Hybrid Options Available
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5" /> Building 4, IDC, Osogbo
          </span>
        </div>

        <div className="mt-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">Highlights</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
            {course.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">Outcomes</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
            {course.outcomes.map((o) => (
              <li key={o} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">Who can attend</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {course.audience.map((a) => (
              <span key={a} className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                <Users className="size-3" /> {a}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6">
          <Button asChild variant="hero" size="lg" className="w-full">
            <Link to="/contact">
              Apply for Training
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

function CametBanner({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="industrial-card relative my-10 overflow-hidden border-primary/30 p-0">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative">
          <img src={camet.image} alt="CAMET — tractor and agricultural machinery" className="h-full min-h-64 w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary-foreground shadow-lg">
            <Sparkles className="size-3.5" /> {camet.badge}
          </span>
        </div>
        <div className="flex flex-col gap-5 p-7 sm:p-9">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Flagship center</p>
          <h3 className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">{camet.name}</h3>
          <p className="text-sm leading-7 text-muted-foreground">{camet.summary}</p>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero" size="lg" onClick={onOpen}>
              Explore CAMET Programs
              <Rocket />
            </Button>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              <Clock className="size-3.5" /> {camet.launch}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CametDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-foreground">
            <Sparkles className="size-3" /> {camet.badge}
          </span>
          <DialogTitle className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
            {camet.name}
          </DialogTitle>
          <DialogDescription className="text-base leading-7 text-muted-foreground">
            {camet.summary}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 space-y-7">
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
              Six strategic programs
            </h4>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {camet.programs.map((p, i) => (
                <div key={p.title} className="industrial-card p-4">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">
                    Program {i + 1}
                  </p>
                  <p className="mt-1 text-sm font-bold text-foreground">{p.title}</p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="size-3.5 text-primary" /> {p.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
              Strategic Partnership Opportunities
            </h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {camet.partnerships.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm leading-6 text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
              Student Sponsorship & Scholarship Program
            </h4>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{camet.sponsorship}</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Register Interest
                <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => onOpenChange(false)}>
              Close
              <X />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ProgramsPage() {
  const [cametOpen, setCametOpen] = useState(false);

  return (
    <div>
      <section className="section-band">
        <div className="site-container flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Flagship curriculum</span>
            <h1 className="text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
              Three Schools. Twenty courses. One flagship center.
            </h1>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              ESTA's academic structure spans vocational engineering, agriculture and ESG —
              executed through workshop immersion, certified facilitators, and the upcoming CAMET flagship center.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Apply for Training
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="quiet" size="xl">
              <a href={prospectusAsset.url} download target="_blank" rel="noreferrer">
                Download Prospectus
                <Download />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {schools.map((school, idx) => (
        <section key={school.id} className={idx % 2 === 1 ? "section-band-muted" : "pb-20"}>
          <div className="site-container">
            <div className="flex flex-col gap-3 border-l-4 border-primary pl-5">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
                School {idx + 1} · {school.code}
              </span>
              <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
                {school.name}
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                {school.description}
              </p>
            </div>

            {school.id === "saas" ? <CametBanner onOpen={() => setCametOpen(true)} /> : null}

            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {school.courses.map((c) => (
                <CourseCard key={c.title} course={c} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CametDialog open={cametOpen} onOpenChange={setCametOpen} />
    </div>
  );
}
