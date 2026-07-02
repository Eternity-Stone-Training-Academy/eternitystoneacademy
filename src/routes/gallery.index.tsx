import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, GraduationCap, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/gallery/")({
  head: () => ({
    meta: [
      { title: "Gallery | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Browse ESTA's equipment and training galleries — a visual record of our workshops, machinery, and hands-on programs.",
      },
      { property: "og:title", content: "Gallery | Eternity Stone Training Academy" },
      {
        property: "og:description",
        content:
          "Explore ESTA's equipment inventory and training program galleries.",
      },
    ],
  }),
  component: GalleryIndex,
});

function GalleryIndex() {
  return (
    <div>
      <section className="section-band-contrast">
        <div className="site-container">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary-foreground shadow-lg">
            Gallery
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            A visual record of our workshops, machinery and learners in action.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Explore ESTA's equipment inventory and browse photos from our ongoing training programs.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="site-container grid gap-6 md:grid-cols-3">
          <article className="industrial-card p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <Wrench className="size-5 text-primary" />
            </div>
            <h2 className="mt-5 text-2xl font-extrabold text-foreground">Equipment Gallery</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              A visual inventory of the machinery, tools and rigs available in our workshops.
            </p>
            <div className="mt-6">
              <Button asChild variant="hero" size="lg">
                <Link to="/gallery/equipment">
                  View Equipment Gallery
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </article>

          <article className="industrial-card p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <GraduationCap className="size-5 text-primary" />
            </div>
            <h2 className="mt-5 text-2xl font-extrabold text-foreground">Training Gallery</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Photos and highlights from our ongoing training programs, organised by cohort and discipline.
            </p>
            <div className="mt-6">
              <Button asChild variant="hero" size="lg">
                <Link to="/gallery/training">
                  View Training Gallery
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </article>

          <article className="industrial-card p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <Building2 className="size-5 text-primary" />
            </div>
            <h2 className="mt-5 text-2xl font-extrabold text-foreground">Workshop Gallery</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              A look inside the ESTA fabrication facility and machining workshop floor in Osogbo.
            </p>
            <div className="mt-6">
              <Button asChild variant="hero" size="lg">
                <Link to="/gallery/workshop">
                  View Workshop Gallery
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}