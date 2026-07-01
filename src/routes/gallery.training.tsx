import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, ImageOff } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/gallery/training")({
  head: () => ({
    meta: [
      { title: "Training Gallery | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Photos from ESTA's ongoing training programs, including our TVET programme on welding and fabrication.",
      },
      { property: "og:title", content: "Training Gallery | ESTA" },
      {
        property: "og:description",
        content:
          "Highlights from ESTA training programs, organised by discipline.",
      },
    ],
  }),
  component: TrainingGalleryPage,
});

function TrainingGalleryPage() {
  return (
    <div>
      <section className="section-band-contrast">
        <div className="site-container">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary-foreground shadow-lg">
            Gallery · Training
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Training Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Photos and highlights from our ongoing training programs, organised by cohort and discipline.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="site-container space-y-14">
          {/* Section: TVET Welding & Fabrication */}
          <article id="tvet-welding-fabrication">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow inline-flex items-center gap-2">
                  <Flame className="size-4 text-primary" /> TVET Programme
                </span>
                <h2 className="mt-2 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
                  Welding & Fabrication
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                  Our current TVET cohort in welding and fabrication — practical bench work, joint preparation, and safe workshop practice.
                </p>
              </div>
            </div>

            <div className="mt-6 industrial-card flex flex-col items-center gap-3 p-10 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <ImageOff className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Photos coming soon</h3>
              <p className="max-w-xl text-sm text-muted-foreground">
                Images from this training will be uploaded shortly.
              </p>
            </div>
          </article>

          <div className="text-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/gallery">Back to Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}