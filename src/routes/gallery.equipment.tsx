import { createFileRoute, Link } from "@tanstack/react-router";
import { ImageOff } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/gallery/equipment")({
  head: () => ({
    meta: [
      { title: "Equipment Gallery | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "A visual inventory of the machinery, tools and rigs available in ESTA's workshops.",
      },
      { property: "og:title", content: "Equipment Gallery | ESTA" },
      {
        property: "og:description",
        content:
          "Browse ESTA's workshop machinery and equipment.",
      },
    ],
  }),
  component: EquipmentGalleryPage,
});

function EquipmentGalleryPage() {
  return (
    <div>
      <section className="section-band-contrast">
        <div className="site-container">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary-foreground shadow-lg">
            Gallery · Equipment
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Equipment Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            A visual inventory of the machinery, tools and rigs that power hands-on training at ESTA.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="site-container">
          <div className="industrial-card flex flex-col items-center gap-4 p-12 text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
              <ImageOff className="size-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-foreground">Photos coming soon</h2>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Our equipment photo library is being prepared. Check back shortly — high-resolution images of our workshop machinery will appear here.
            </p>
            <div className="pt-2">
              <Button asChild variant="hero" size="lg">
                <Link to="/gallery">Back to Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}