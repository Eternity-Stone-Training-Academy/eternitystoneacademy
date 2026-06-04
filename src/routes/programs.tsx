import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Download,
  Flame,
  MapPin,
  Monitor,
  PenTool,
  PlugZap,
  Shapes,
  Sprout,
  SunMedium,
  Tag,
  TrendingUp,
  Tractor,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import prospectusAsset from "@/assets/esta-prospectus-2026.pdf.asset.json";
import weldingAsset from "@/assets/esta-welding.jpg.asset.json";
import heroAsset from "@/assets/esta-hero-machining.jpg.asset.json";
import solarAsset from "@/assets/esta-solar.jpg.asset.json";
import drillingAsset from "@/assets/esta-drilling.jpg.asset.json";
import observeAsset from "@/assets/esta-program-observation.jpg.asset.json";

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

type Course = {
  title: string;
  subtitle?: string;
  duration: string;
  icon: typeof Flame;
  image: string;
  highlights: string[];
  outcomes: string[];
  audience: string[];
};

type Track = {
  id: string;
  name: string;
  description: string;
  courses: Course[];
};

const tracks: Track[] = [
  {
    id: "engineering",
    name: "Engineering & Technical Trades",
    description: "Core industrial trades that power construction, manufacturing, and oil & gas operations.",
    courses: [
      {
        title: "Computer Aided Design (CAD)",
        subtitle: "AutoCAD & SolidWorks",
        duration: "3 Months",
        icon: PenTool,
        image: drillingAsset.url,
        highlights: [
          "2D drafting and detailing",
          "3D modeling and simulation",
          "Mechanical component design",
          "Industrial drawing standards",
          "Project-based learning",
        ],
        outcomes: [
          "Produce professional engineering drawings",
          "Design mechanical components and assemblies",
          "Support fabrication and manufacturing processes",
          "Prepare for engineering, construction, and manufacturing roles",
        ],
        audience: [
          "Engineering students and graduates",
          "Technicians and fabricators",
          "Architects and designers",
          "Anyone interested in industrial design",
        ],
      },
      {
        title: "Welding & Fabrication Technology",
        duration: "3 Months (Basic) / 6 Months (Advanced)",
        icon: Flame,
        image: weldingAsset.url,
        highlights: [
          "Arc welding",
          "MIG and TIG welding",
          "Metal cutting and shaping",
          "Structural fabrication",
          "Equipment maintenance and safety",
        ],
        outcomes: [
          "Fabricate metal structures and equipment",
          "Work in construction and oil & gas support services",
          "Establish small-scale fabrication enterprises",
          "Meet industry safety standards",
        ],
        audience: ["School leavers", "Artisans", "Technical professionals", "Entrepreneurs"],
      },
      {
        title: "Electrical & Instrumentation",
        duration: "3 Months (Basic) / 6 Months (Advanced)",
        icon: PlugZap,
        image: heroAsset.url,
        highlights: [
          "Residential and industrial wiring",
          "Electrical panel installation",
          "Instrumentation fundamentals",
          "Fault detection and maintenance",
          "Safety compliance",
        ],
        outcomes: [
          "Perform professional electrical installations",
          "Maintain industrial systems",
          "Work in manufacturing, oil & gas, and power sectors",
          "Operate independently as certified technicians",
        ],
        audience: [
          "Aspiring electricians",
          "Engineering students",
          "Technical professionals",
          "Entrepreneurs",
        ],
      },
    ],
  },
  {
    id: "renewable",
    name: "Renewable Energy & Advanced Technologies",
    description: "Future-facing tracks for clean energy and creative production industries.",
    courses: [
      {
        title: "Solar Design & Installation",
        duration: "3 Months",
        icon: SunMedium,
        image: solarAsset.url,
        highlights: [
          "Solar system components",
          "System sizing and design",
          "Installation techniques",
          "Battery storage systems",
          "Renewable energy fundamentals",
        ],
        outcomes: [
          "Install residential and small commercial solar systems",
          "Provide maintenance services",
          "Start solar installation businesses",
          "Support clean energy initiatives",
        ],
        audience: [
          "Technicians",
          "Engineers",
          "Entrepreneurs",
          "Individuals interested in renewable energy",
        ],
      },
      {
        title: "Pottery & Ceramics Technology",
        duration: "3 Months",
        icon: Shapes,
        image: observeAsset.url,
        highlights: [
          "Clay preparation techniques",
          "Kiln operations",
          "Ceramics molding and finishing",
          "Product design",
          "Commercial production methods",
        ],
        outcomes: [
          "Produce ceramic products",
          "Establish pottery businesses",
          "Support local manufacturing initiatives",
        ],
        audience: [
          "Creative entrepreneurs",
          "Artisans",
          "Youth and women empowerment groups",
        ],
      },
    ],
  },
  {
    id: "agribusiness",
    name: "Agribusiness & Enterprise Development",
    description: "Short, intensive programmes that build business, farming, and advisory capacity.",
    courses: [
      {
        title: "Enterprise Development Training",
        subtitle: "For New and Existing MSMEs",
        duration: "2-3 Days Intensive Programme",
        icon: TrendingUp,
        image: observeAsset.url,
        highlights: [
          "Business planning and strategy",
          "Financial management",
          "Costing and pricing",
          "Market positioning",
          "Scaling and sustainability",
        ],
        outcomes: [
          "Develop viable business models",
          "Improve operational efficiency",
          "Increase profitability",
          "Access new market opportunities",
        ],
        audience: [
          "Entrepreneurs",
          "Startups",
          "MSMEs",
          "Cooperatives",
          "Youth-led enterprises",
        ],
      },
      {
        title: "Farmers Training Programme",
        duration: "2-3 Days Intensive Programme (Expandable)",
        icon: Sprout,
        image: observeAsset.url,
        highlights: [
          "Improved seedlings and animal breeds",
          "Modern farming techniques",
          "Soil management",
          "Irrigation systems",
          "Post-harvest handling",
        ],
        outcomes: [
          "Increase crop yield and livestock productivity",
          "Improve farm profitability",
          "Adopt modern agricultural methods",
          "Reduce production losses",
        ],
        audience: [
          "Crop farmers",
          "Livestock farmers",
          "Agricultural cooperatives",
          "Agripreneurs",
        ],
      },
      {
        title: "Agricultural Extension Training",
        duration: "2-5 Days (Customizable)",
        icon: Tractor,
        image: observeAsset.url,
        highlights: [
          "Farmer engagement strategies",
          "Technology adoption",
          "Value chain development",
          "Climate-smart agriculture",
          "Monitoring and reporting systems",
        ],
        outcomes: [
          "Support farmers with improved advisory services",
          "Enhance agricultural value chains",
          "Promote sustainable farming practices",
        ],
        audience: [
          "Extension officers",
          "NGOs",
          "Government agencies",
          "Agricultural institutions",
        ],
      },
    ],
  },
];

function ProgramsPage() {
  return (
    <div>
      <section className="section-band">
        <div className="site-container flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Flagship curriculum</span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Three focused tracks. Eight industry-ready courses.
            </h1>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              ESTA's premium programs combine workshop immersion, guided practice, and ITF-aligned technical outcomes across engineering, renewable energy, and agribusiness.
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

      {tracks.map((track, idx) => (
        <section key={track.id} className={idx % 2 === 1 ? "section-band-muted" : "pb-20"}>
          <div className="site-container">
            <div className="flex flex-col gap-3 border-l-4 border-primary pl-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Track {idx + 1}
              </span>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{track.name}</h2>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">{track.description}</p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {track.courses.map((course) => (
                <article key={course.title} className="industrial-card flex flex-col overflow-hidden">
                  <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                        <course.icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold leading-tight">{course.title}</h3>
                        {course.subtitle ? (
                          <p className="text-xs font-medium text-muted-foreground">{course.subtitle}</p>
                        ) : null}
                      </div>
                    </div>

                    {/* Metadata badges */}
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
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">Highlights</p>
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
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">Outcomes</p>
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
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">Who can attend</p>
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
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
