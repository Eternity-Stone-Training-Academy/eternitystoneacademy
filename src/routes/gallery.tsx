import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Image as ImageIcon, Wrench, Shield, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cametGallery } from "@/lib/courses";

// Import workshop assets
import machiningAsset from "@/assets/esta-hero-machining.jpg.asset.json";
import observationAsset from "@/assets/esta-program-observation.jpg.asset.json";
import weldingAsset from "@/assets/esta-welding.jpg.asset.json";
import solarAsset from "@/assets/esta-solar.jpg.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Browse ESTA's workshops, training equipment, and agricultural machinery galleries in Osogbo.",
      },
      { property: "og:title", content: "Gallery | Eternity Stone Training Academy" },
      {
        property: "og:description",
        content:
          "Explore the technical workshops, machinery, and equipment used for practical capacity building at ESTA.",
      },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: "/images/lathe-pinacho.jpg" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const workshopItems = [
  {
    title: "Fitting & Machining Workshop",
    description: "Hands-on instruction on conventional lathe operation, turning, and precise component fabrication.",
    image: machiningAsset.url,
    category: "MACHINING",
  },
  {
    title: "Welding & Fabrication Lab",
    description: "Trainees practicing electric arc welding and structural fabrication in a safe, guided setting.",
    image: weldingAsset.url,
    category: "WELDING",
  },
  {
    title: "Solar & Electrical Installation",
    description: "Practical wiring, panel mounting, inverter setup, and solar energy systems installation.",
    image: solarAsset.url,
    category: "RENEWABLE ENERGY",
  },
  {
    title: "Facilitator Demonstrations",
    description: "Industry practitioners demonstrating industrial safety, tools, and technical procedures.",
    image: observationAsset.url,
    category: "PRACTICAL GUIDANCE",
  },
];

const equipmentItems = [
  {
    title: "Conventional Lathe Machines",
    subtitle: "Pinacho S-90/200",
    description:
      "Precision conventional lathe machines (Pinacho S-90/200) used in our fitting and machining workshop to teach trainees metal turning, facing, and threading operations.",
    image: "/images/lathe-pinacho.jpg",
    specs: ["Model: Pinacho S-90/200", "Use: Metal Turning & Threading", "Precision Machining"],
  },
  {
    title: "EDON ARC-400 Inverter Welder",
    subtitle: "High-Power Arc Welding",
    description:
      "High-capacity industrial inverter welding machine (ARC-400) used for heavy structural steel fabrication, manual metal arc welding (MMA), and safety training.",
    image: "/images/welding-edon.jpg",
    specs: ["Model: EDON ARC-400", "Use: Structural Fabrication", "MMA Inverter Welder"],
  },
  {
    title: "GEMCO Pedestal Grinders & Welder",
    subtitle: "Finishing & Inverter Station",
    description:
      "Dual pedestal grinding machines on heavy-duty stands paired with a GEMCO 160T welding inverter for weld preparation and metal finishing operations.",
    image: "/images/grinders-welder.jpg",
    specs: ["Equipment: GEMCO Station", "Use: Metal Grinding & Finishing", "GEMCO 160T Welder"],
  },
  {
    title: "Heavy-Duty Industrial Lathe Machine",
    subtitle: "Precision Machine Tool",
    description:
      "Large-scale conventional lathe machine utilized in advanced vocational engineering training for machining custom machine parts and complex turning operations.",
    image: "/images/lathe-industrial.jpg",
    specs: ["Equipment: Heavy Lathe", "Use: Complex Component Machining", "Industrial Capacity"],
  },
  {
    title: "GEMCO Heat Treatment Furnaces",
    subtitle: "Industrial Ovens",
    description:
      "GEMCO industrial electric furnaces used to teach heat treatment principles including annealing, tempering, stress-relieving, and hardening of metal parts.",
    image: "/images/ovens-industrial.jpg",
    specs: ["Equipment: GEMCO Furnaces", "Use: Annealing & Tempering", "Heat Treatment"],
  },
] as const;

function GalleryPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("workshop");

  // Synchronize active tab with URL hash (e.g., /gallery#equipment)
  useEffect(() => {
    const hash = location.hash;
    if (hash === "equipment") {
      setActiveTab("equipment");
    } else if (hash === "camet") {
      setActiveTab("camet");
    } else {
      setActiveTab("workshop");
    }
  }, [location.hash]);

  const handleTabChange = (val: string) => {
    setActiveTab(val);
    // Smoothly update location hash without full page reload
    window.history.pushState(null, "", `#${val}`);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="section-band pb-6">
        <div className="site-container">
          <span className="eyebrow">Visual Tour</span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            ESTA Gallery
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            Step inside our practical training facilities. ESTA provides learners with direct exposure to industrial environments, professional machinery, and advanced technologies to build skills that command value.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section-band-muted">
        <div className="site-container">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="grid w-full max-w-lg grid-cols-3 bg-secondary">
                <TabsTrigger value="workshop" className="text-xs sm:text-sm font-semibold">Workshop</TabsTrigger>
                <TabsTrigger value="equipment" className="text-xs sm:text-sm font-semibold">Equipment</TabsTrigger>
                <TabsTrigger value="camet" className="text-xs sm:text-sm font-semibold">CAMET Machinery</TabsTrigger>
              </TabsList>
            </div>

            {/* WORKSHOP GALLERY */}
            <TabsContent value="workshop" className="mt-0 focus-visible:ring-0">
              <div className="max-w-2xl mb-8">
                <span className="eyebrow">Workspaces</span>
                <h2 className="text-3xl font-extrabold leading-tight text-foreground">
                  Our Training Workshops
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Trainees collaborating, learning, and practicing in safety-first industrial workshop environments.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {workshopItems.map((item) => (
                  <article key={item.title} className="industrial-card overflow-hidden flex flex-col h-full bg-card">
                    <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
                        {item.category}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-foreground leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>

            {/* EQUIPMENT GALLERY */}
            <TabsContent value="equipment" className="mt-0 focus-visible:ring-0">
              <div className="max-w-2xl mb-8">
                <span className="eyebrow">Workshop Tools</span>
                <h2 className="text-3xl font-extrabold leading-tight text-foreground">
                  Machinery & Equipment
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  A detailed view of the industrial machines used to train students in vocational engineering.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {equipmentItems.map((item) => (
                  <article key={item.title} className="industrial-card overflow-hidden flex flex-col h-full bg-card">
                    <div className="aspect-[16/10] w-full overflow-hidden bg-muted border-b border-border/80">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
                        {item.subtitle}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-foreground leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground flex-grow">
                        {item.description}
                      </p>
                      
                      {/* Specs Tags */}
                      <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-1.5">
                        {item.specs.map((spec) => (
                          <span
                            key={spec}
                            className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>

            {/* CAMET MACHINERY GALLERY */}
            <TabsContent value="camet" className="mt-0 focus-visible:ring-0">
              <div className="max-w-2xl mb-8">
                <span className="eyebrow">Agriculture Technology</span>
                <h2 className="text-3xl font-extrabold leading-tight text-foreground">
                  CAMET Machinery & Equipment
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tractors, harvesters, backhoes, and implement systems utilized at our Center for Agricultural Mechanization & Equipment Technology.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cametGallery.map((g) => (
                  <figure key={g.url} className="industrial-card overflow-hidden p-0 bg-card">
                    <div className="aspect-[16/10] w-full overflow-hidden bg-muted border-b border-border/80">
                      <img
                        src={g.url}
                        alt={g.caption}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <figcaption className="px-4 py-3 text-xs font-semibold text-muted-foreground">
                      {g.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section-band-contrast">
        <div className="site-container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white mb-2">
              <Wrench className="size-8" />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl leading-tight text-white">
              Get hands-on training with modern equipment
            </h2>
            <p className="text-base sm:text-lg leading-8 text-white/80 max-w-3xl mx-auto">
              Our workshops are designed to bridge the gap between classroom theory and industry reality. Enroll in our welding, machining, electrical, or solar installation programs to learn by doing.
            </p>
            <div className="pt-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Apply for Training
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
