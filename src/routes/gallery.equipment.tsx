import { createFileRoute } from "@tanstack/react-router";

import lathe3 from "@/assets/equipment/All_3_Lathe_Machines.png.asset.json";
import arcWelder from "@/assets/equipment/Arc_Welding_Machine_SMAW.png.asset.json";
import benchGrinder from "@/assets/equipment/Bench_Grinder_Pedestal_Grinder.png.asset.json";
import centerLathe from "@/assets/equipment/Center_Lathe_Machine.JPG.asset.json";
import furnace from "@/assets/equipment/Electric_Heat_Treatment_Furnace.png.asset.json";
import milling from "@/assets/equipment/Horizontal_Milling_Machine.png.asset.json";
import hydraulicPress from "@/assets/equipment/Hydraulic_Workshop_Press.png.asset.json";
import pillarDrill from "@/assets/equipment/Pillar_Drilling_Machine.png.asset.json";
import powerSaw from "@/assets/equipment/Power_Arc_Saw.JPG.asset.json";
import sheetFolder from "@/assets/equipment/Sheet_Metal_Folding_Machine.png.asset.json";
import sheetRoller from "@/assets/equipment/Sheet_Metal_Rolling_Machine.png.asset.json";
import spotWelder from "@/assets/equipment/Spot_Welding_Machine.png.asset.json";
import verticalMilling from "@/assets/equipment/Vertical_Milling_Machine.png.asset.json";

const equipment = [
  {
    title: "Center Lathe Machine",
    description:
      "Heavy-duty precision lathe for turning, facing, threading and boring cylindrical metal workpieces.",
    image: centerLathe.url,
  },
  {
    title: "Lathe Machines Bay",
    description:
      "Multi-station lathe bay equipped with Pinacho S-90/200 machines for parallel hands-on training.",
    image: lathe3.url,
  },
  {
    title: "Horizontal Milling Machine",
    description:
      "Industrial horizontal milling machine for slotting, gear cutting and profiling flat and contoured surfaces.",
    image: milling.url,
  },
  {
    title: "Pillar Drilling Machine",
    description:
      "Column-mounted Rigi DP-25 drill press for accurate vertical drilling on metal stock.",
    image: pillarDrill.url,
  },
  {
    title: "Power Arc Saw",
    description:
      "Heavy-duty power hacksaw for cutting bar stock, pipes and structural sections to length.",
    image: powerSaw.url,
  },
  {
    title: "Sheet Metal Folding Machine",
    description:
      "Manual sheet metal folder for producing accurate bends, flanges and box sections from flat sheet.",
    image: sheetFolder.url,
  },
  {
    title: "Sheet Metal Rolling Machine",
    description:
      "Three-roller bending machine for forming cylindrical shells, cones and curved profiles from flat sheet metal.",
    image: sheetRoller.url,
  },
  {
    title: "Hydraulic Workshop Press",
    description:
      "United Kingdom Goodwill hydraulic press for bending, straightening, pressing bearings and forming operations.",
    image: hydraulicPress.url,
  },
  {
    title: "Bench / Pedestal Grinder",
    description:
      "Pair of GEMCO pedestal grinders for tool sharpening, deburring and surface finishing of metal parts.",
    image: benchGrinder.url,
  },
  {
    title: "Arc Welding Machine (SMAW)",
    description:
      "Edon ARC-400 inverter-based shielded metal arc welder for high-current stick welding on structural steel.",
    image: arcWelder.url,
  },
  {
    title: "Spot Welding Machine",
    description:
      "Pedestal-mounted resistance spot welder for joining overlapping sheet metal parts in fabrication work.",
    image: spotWelder.url,
  },
  {
    title: "Vertical Milling Machine",
    description:
      "HAWK turret-type vertical milling machine for precision face milling, slotting, drilling and profiling operations.",
    image: verticalMilling.url,
  },
  {
    title: "Electric Heat Treatment Furnace",
    description:
      "GEMCO electric furnaces for annealing, hardening, tempering and normalizing metal specimens.",
    image: furnace.url,
  },
];

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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item) => (
              <article
                key={item.title}
                className="industrial-card overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-extrabold text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}