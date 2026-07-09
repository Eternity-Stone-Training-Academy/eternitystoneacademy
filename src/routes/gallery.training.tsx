import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";

import { Button } from "@/components/ui/button";

import img1 from "@/assets/training/Merged_ChatGPT_Image_Jul_7_2026_02_30_38_PM_and_more_1.jpg.asset.json";
import img3 from "@/assets/training/Merged_ChatGPT_Image_Jul_7_2026_02_30_38_PM_and_more_3.jpg.asset.json";
import img4 from "@/assets/training/Merged_ChatGPT_Image_Jul_7_2026_02_30_38_PM_and_more_4.jpg.asset.json";
import img5 from "@/assets/training/Merged_ChatGPT_Image_Jul_7_2026_02_30_38_PM_and_more_5.jpg.asset.json";
import img6 from "@/assets/training/Merged_ChatGPT_Image_Jul_7_2026_02_30_38_PM_and_more_6.jpg.asset.json";
import wf1 from "@/assets/training/Merged_ChatGPT_Image_Jul_7_2026_02_54_16_PM_and_more_1.jpg.asset.json";
import wf4 from "@/assets/training/Merged_ChatGPT_Image_Jul_7_2026_02_54_16_PM_and_more_4.jpg.asset.json";
import wf5 from "@/assets/training/Merged_ChatGPT_Image_Jul_7_2026_02_54_16_PM_and_more_5.jpg.asset.json";
import wf6 from "@/assets/training/Merged_ChatGPT_Image_Jul_7_2026_02_54_16_PM_and_more_6.jpg.asset.json";
import wf7 from "@/assets/training/Merged_ChatGPT_Image_Jul_7_2026_02_54_16_PM_and_more_7.jpg.asset.json";

const trainingPhotos: { url: string; caption: string }[] = [
  { url: img3.url, caption: "Cohort arrival and orientation at the training facility" },
  { url: img5.url, caption: "Classroom briefing on tools, safety and workshop procedures" },
  { url: img4.url, caption: "Trainees completing written coursework during theory sessions" },
  { url: img6.url, caption: "Hand tools and PPE laid out for practical demonstrations" },
  { url: img1.url, caption: "Group photo with the lathe machine after workshop induction" },
  { url: wf1.url, caption: "Kitted-up trainees observing a live grinding demonstration" },
  { url: wf5.url, caption: "Cutting and grinding steel stock in full PPE" },
  { url: wf4.url, caption: "Team fabricating a welded steel frame — Group D bench work" },
  { url: wf6.url, caption: "Group welding practice on a fabricated steel table" },
  { url: wf7.url, caption: "Close-up welding on a fabricated frame with cohort observing" },
];

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
                  <Flame className="size-4 text-primary" /> Flagship Programme
                </span>
                <h2 className="mt-2 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
                  2026 World Bank Funded Training in Welding and Fabrication
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                  Highlights from our 2026 World Bank funded cohort — orientation, classroom theory, PPE and tool induction, and hands-on welding, cutting and fabrication practice.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trainingPhotos.map((photo) => (
                <figure key={photo.url} className="industrial-card overflow-hidden">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="p-4 text-sm leading-6 text-muted-foreground">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
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