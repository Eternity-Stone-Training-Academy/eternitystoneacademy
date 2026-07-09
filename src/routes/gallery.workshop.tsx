import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import fabExt1 from "@/assets/workshop/Fabrication_Facility_Exterior_1.jpg.asset.json";
import fabExt2 from "@/assets/workshop/Fabrication_Facility_Exterior_2.jpg.asset.json";
import wingA from "@/assets/workshop/Workshop_Floor_Area_Wing_A.png.asset.json";
import floor from "@/assets/workshop/Workshop_Floor_Area.png.asset.json";
import wingB1 from "@/assets/workshop/Wing_B1.jpg.asset.json";
import wingB2 from "@/assets/workshop/Wing_B2.jpg.asset.json";
import wingB3 from "@/assets/workshop/Wing_B3.jpg.asset.json";

type Shot = {
  title: string;
  description: string;
  src: string;
};

const shots: Shot[] = [
  {
    title: "Fabrication Facility Exterior 1",
    description:
      "Aerial view of the ESTA fabrication facility entrance in Osogbo, showing the main training block and paved access walkway.",
    src: fabExt1.url,
  },
  {
    title: "Fabrication Facility Exterior 2",
    description:
      "Wide exterior view of the fabrication complex, with the adjoining Metal Workshop and surrounding grounds.",
    src: fabExt2.url,
  },
  {
    title: "Workshop Floor Area — Wing A",
    description:
      "Wing A of the machining floor, equipped with precision lathes, a cutting-off machine, and pedestal grinders for hands-on training.",
    src: wingA.url,
  },
  {
    title: "Workshop Floor Area",
    description:
      "The main workshop floor featuring a full line-up of engine lathes, milling and shaping machines used across ESTA's practical modules.",
    src: floor.url,
  },
  {
    title: "Wing B1",
    description:
      "Wing B1 of the fabrication hall, showcasing the sheet metal folding machine, hydraulic press, pillar drills and bench vices arranged for hands-on metalwork training.",
    src: wingB1.url,
  },
  {
    title: "Wing B2",
    description:
      "Wing B2 featuring the sheet metal rolling machine in the foreground with pillar drilling machines and workbenches extending into the main machining bay.",
    src: wingB2.url,
  },
  {
    title: "Wing B3",
    description:
      "Wing B3 equipped with a MIG welder, shaping machine, hydraulic presses and a pedestal grinder — configured for welding, forming and finishing practicals.",
    src: wingB3.url,
  },
];

export const Route = createFileRoute("/gallery/workshop")({
  head: () => ({
    meta: [
      { title: "Workshop Gallery | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Inside the ESTA fabrication facility and machining workshop floor — the spaces where our learners train.",
      },
      { property: "og:title", content: "Workshop Gallery | ESTA" },
      {
        property: "og:description",
        content:
          "Photos of ESTA's fabrication facility and workshop floor in Osogbo.",
      },
      { property: "og:image", content: fabExt1.url },
    ],
  }),
  component: WorkshopGalleryPage,
});

function WorkshopGalleryPage() {
  return (
    <div>
      <section className="section-band-contrast">
        <div className="site-container">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary-foreground shadow-lg">
            Gallery · Workshop
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Workshop Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            A look inside the ESTA fabrication facility and machining workshop — the spaces where learners get hands on real industrial equipment.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="site-container grid gap-8 md:grid-cols-2">
          {shots.map((shot) => (
            <figure key={shot.title} className="industrial-card overflow-hidden">
              <div className="aspect-[16/9] w-full overflow-hidden bg-secondary">
                <img
                  src={shot.src}
                  alt={shot.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="p-6">
                <h2 className="text-xl font-extrabold text-foreground">{shot.title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{shot.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="site-container mt-10 flex justify-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/gallery">Back to Gallery</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}