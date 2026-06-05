import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Flame,
  GraduationCap,
  Leaf,
  PlugZap,
  Quote,
  Sparkles,
  SunMedium,
  Users,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/esta-hero-machining.jpg.asset.json";
import ceoAsset from "@/assets/bolaji-jegede.jpg.asset.json";
import { courseImages } from "@/lib/course-images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eternity Stone Training Academy | Skills for Today" },
      {
        name: "description",
        content:
          "ESTA delivers practical technical training in welding, instrumentation, and solar installation for future-ready professionals in Osogbo.",
      },
      { property: "og:title", content: "Eternity Stone Training Academy | Skills for Today" },
      {
        property: "og:description",
        content:
          "Bridge classroom theory and industry reality with ESTA's premium practical training tracks.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:image", content: heroAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  { value: "500+", label: "Professionals Trained" },
  { value: "95%", label: "Completion Rate" },
  { value: "Expert", label: "Industry Facilitators" },
  { value: "ITF", label: "Aligned Programs" },
] as const;

const whyPoints = [
  "Hands-on practical workshops",
  "Industry-experienced facilitators",
  "International best-practice standards",
  "Career-ready technical skills",
  "Certification upon completion",
] as const;

const programPreviews = [
  {
    title: "Welding & Fabrication Technology",
    icon: Flame,
    blurb: "Arc, MIG and TIG welding, structural fabrication, and industrial safety.",
    image: courseImages.welding,
  },
  {
    title: "Electrical & Instrumentation",
    icon: PlugZap,
    blurb: "Wiring, panel installation, instrumentation fundamentals, and fault diagnostics.",
    image: courseImages.electrical,
  },
  {
    title: "Solar Design & Installation",
    icon: SunMedium,
    blurb: "Sizing, installation, battery storage, and renewable energy fundamentals.",
    image: courseImages.solar,
  },
  {
    title: "Computer Aided Design (CAD)",
    icon: GraduationCap,
    blurb: "AutoCAD and SolidWorks for 2D drafting, 3D modeling, and industrial design.",
    image: courseImages.cad,
  },
  {
    title: "Enterprise Development",
    icon: Users,
    blurb: "Business planning, financial management, costing, and market positioning for MSMEs.",
    image: courseImages.enterprise,
  },
  {
    title: "Farmers & Agric Extension",
    icon: Leaf,
    blurb: "Modern farming techniques, irrigation, value chains, and climate-smart agriculture.",
    image: courseImages.farmers,
  },
] as const;

const facilitators = [
  {
    name: "Engr. Adewale Bamidele",
    qualification: "B.Eng Mechanical, COREN Registered",
    years: "18+ years experience",
    industry: "Oil & Gas Fabrication",
  },
  {
    name: "Mrs. Folake Adeyemi",
    qualification: "B.Sc Electrical Engineering, NSE",
    years: "14+ years experience",
    industry: "Industrial Instrumentation",
  },
  {
    name: "Mr. Tunde Ogunleye",
    qualification: "HND Renewable Energy",
    years: "10+ years experience",
    industry: "Solar & Clean Energy",
  },
  {
    name: "Dr. Halimat Ibrahim",
    qualification: "Ph.D Agricultural Extension",
    years: "20+ years experience",
    industry: "Agribusiness & Value Chains",
  },
] as const;

const testimonials = [
  {
    quote: "The training helped me secure a supervisory role within six months.",
    name: "Former Participant",
    role: "Welding & Fabrication Track",
  },
  {
    quote: "ESTA's hands-on workshops gave me the confidence to start my own solar installation business.",
    name: "Former Participant",
    role: "Solar Design & Installation",
  },
  {
    quote: "The facilitators are real industry professionals — every session felt like a day on the job.",
    name: "Former Participant",
    role: "Electrical & Instrumentation",
  },
  {
    quote: "I doubled my farm yield after applying what I learned at the farmers training programme.",
    name: "Former Participant",
    role: "Farmers Training Programme",
  },
] as const;

const partners = [
  "ITF",
  "Osun State Govt",
  "OAU",
  "Federal Polytechnic",
  "NACCIMA",
  "Eternity Stone Group",
] as const;

const faqs = [
  {
    q: "Who can apply for these programs?",
    a: "Our programs are open to school leavers, students, artisans, technical professionals, entrepreneurs, and anyone seeking practical, industry-ready skills.",
  },
  {
    q: "Are certificates issued upon completion?",
    a: "Yes. Every participant who completes the program and meets the assessment requirements receives an ESTA certificate of completion, aligned with ITF standards.",
  },
  {
    q: "Is the training online, physical, or hybrid?",
    a: "We offer Online, Physical, and Hybrid options for most programs so learners can choose the mode that fits their schedule and location.",
  },
  {
    q: "How long does each program last?",
    a: "Most flagship technical programs run for 3 months (with a 6-month advanced option for select tracks). Enterprise and agriculture programs run as 2–5 day intensives.",
  },
  {
    q: "What are the fees and payment options?",
    a: "Tuition varies by program and mode. Please contact admissions for current pricing and available installment options.",
  },
] as const;

function HomePage() {
  return (
    <div>
      <section className="pt-6 pb-10 sm:pt-8 sm:pb-14">
        <div className="site-container">
          <div className="hero-card grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-14">
            <div className="flex flex-col justify-between gap-8">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/74">
                  <Sparkles className="size-3.5 text-primary" />
                  Professional technical capacity development
                </span>
                <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                  Skills for Today. Competence for Tomorrow.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
                  Gain industry-ready skills in Occupational Safety, Quality Management, and Technical Operations through hands-on training aligned with international standards.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="hero" size="xl">
                    <Link to="/contact">
                      Apply for Training
                      <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="xl" className="border-white/16 bg-white/8 text-hero-foreground hover:bg-white/12 hover:text-hero-foreground">
                    <Link to="/programs">View Courses</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-xl border border-white/12 bg-white/6 p-5 text-white/82">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Built for industry</p>
                <p className="mt-3 text-sm leading-7">
                  Workshop-led instruction, certified facilitators, and ITF-aligned curriculum across welding, electrical, solar, CAD, agribusiness and enterprise development.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-white/12 bg-white/6">
                <img
                  src={heroAsset.url}
                  alt="ESTA trainee operating machining equipment in the workshop"
                  className="h-full min-h-[260px] w-full object-cover"
                />
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-xl border border-white/12 bg-white/6">
                  <img
                    src={courseImages.welding}
                    alt="ESTA welding trainee demonstrating practical fabrication skills"
                    className="h-44 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-white/12 bg-white/6">
                  <img
                    src={courseImages.solar}
                    alt="ESTA learners working with solar equipment"
                    className="h-44 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 sm:py-14 bg-surface">
        <div className="site-container">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="industrial-card p-6 text-center">
                <p className="text-3xl font-extrabold text-primary sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs preview */}
      <section className="section-band">
        <div className="site-container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Training Programs</span>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Eight flagship courses across three professional tracks.
              </h2>
            </div>
            <Button asChild variant="hero" size="lg">
              <Link to="/programs">
                View Courses
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programPreviews.map((p) => (
              <article key={p.title} className="industrial-card overflow-hidden">
                <img src={p.image} alt={p.title} className="h-44 w-full object-cover" />
                <div className="p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <p.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{p.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-band-muted">
        <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">Why ESTA</span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Why Learn With Eternity Stone Academy?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground">
              Every program is designed to translate directly into workplace competence, enterprise growth, and certifiable skill.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {whyPoints.map((p) => (
              <li key={p} className="industrial-card flex items-start gap-3 p-5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-sm font-medium leading-7">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Facilitators */}
      <section className="section-band">
        <div className="site-container">
          <div className="max-w-2xl">
            <span className="eyebrow">Facilitators</span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Meet Our Facilitators</h2>
            <p className="mt-3 text-base leading-8 text-muted-foreground">
              Industry practitioners with decades of combined fabrication, instrumentation, renewable energy and agribusiness experience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {facilitators.map((f) => (
              <article key={f.name} className="industrial-card overflow-hidden">
                <div className="flex aspect-square w-full items-center justify-center bg-gradient-to-br from-secondary to-muted">
                  <Users className="size-16 text-primary/70" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{f.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.qualification}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">{f.years}</p>
                  <p className="mt-1 text-sm text-foreground">{f.industry}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CEO note */}
      <section className="section-band-contrast">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="industrial-card overflow-hidden border-white/10 bg-white/6 p-0 text-white">
              <img
                src={ceoAsset.url}
                alt="Portrait of Mr. Bolaji Jegede, CEO of Eternity Stone Training Academy"
                className="h-80 w-full object-cover object-top sm:h-96"
              />
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/64">Leadership note</p>
                <p className="mt-2 text-2xl font-bold">Mr. Bolaji Jegede</p>
                <p className="text-sm text-white/70">CEO, Eternity Stone Group</p>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/6 p-8 backdrop-blur-sm sm:p-10">
              <Quote className="size-10 text-primary" />
              <blockquote className="mt-5 max-w-3xl text-2xl font-bold leading-tight sm:text-4xl">
                Sustainable development begins with practical skills, innovation, and enterprise.
              </blockquote>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/76">
                ESTA exists to empower the next generation of professionals with the competence, discipline, and confidence required to thrive in industrial environments and build resilient futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-band-muted">
        <div className="site-container">
          <div className="max-w-2xl">
            <span className="eyebrow">Testimonials</span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">What our graduates say</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((t, i) => (
              <figure key={i} className="industrial-card flex h-full flex-col p-6">
                <Quote className="size-8 text-primary" />
                <blockquote className="mt-4 flex-1 text-sm leading-7 text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-14">
        <div className="site-container">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Partners & Corporate Clients
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((p) => (
              <div
                key={p}
                className="industrial-card flex h-20 items-center justify-center px-4 text-center text-sm font-semibold text-muted-foreground"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="section-band-muted">
        <div className="site-container">
          <div className="industrial-card grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.4fr_1fr] lg:items-center">
            <div className="flex items-center justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
                <Award className="size-16" />
              </div>
            </div>
            <div>
              <span className="eyebrow">Certification</span>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                ITF-aligned certificates that travel with you.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                Every graduate receives an Eternity Stone Training Academy certificate of completion, aligned with Industrial Training Fund (ITF) standards and recognized by employers across construction, oil & gas, energy, and manufacturing.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-muted-foreground">
                <span className="rounded-full border border-border bg-card px-3 py-1.5">ITF Aligned</span>
                <span className="rounded-full border border-border bg-card px-3 py-1.5">Competence-Based</span>
                <span className="rounded-full border border-border bg-card px-3 py-1.5">Workplace Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-band">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Frequently asked questions</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Everything you need to know before applying. Still have questions? Contact our admissions team.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-base font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-20">
        <div className="site-container">
          <div className="hero-card flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/74">
                Apply today
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Build skills that move you forward.</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-white/76">
                Speak with our admissions team and start your ESTA journey in Osogbo.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Apply for Training
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/16 bg-white/8 text-hero-foreground hover:bg-white/12 hover:text-hero-foreground">
                <Link to="/programs">View Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
