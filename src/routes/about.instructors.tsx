import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { facilitators } from "@/lib/facilitators";

export const Route = createFileRoute("/about/instructors")({
  head: () => ({
    meta: [
      { title: "Our Instructors | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Meet the practitioner-led faculty teams at ESTA, spanning technical & vocational experts, agribusiness specialists, and sustainability professionals.",
      },
    ],
  }),
  component: InstructorsPage,
});

const facultyTeams = [
  {
    name: "Technical & Vocational Experts",
    description:
      "Professionals with extensive experience in welding, fabrication, machining, electrical systems, instrumentation, plumbing, renewable energy, and engineering design.",
    tag: "TECHNICAL DIVISION",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop",
  },
  {
    name: "Agricultural & Agribusiness Specialists",
    description:
      "Experienced practitioners in modern agriculture, agricultural extension, mechanization, agribusiness development, and rural enterprise.",
    tag: "AGRICULTURAL DIVISION",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop",
  },
  {
    name: "Sustainability & ESG Professionals",
    description:
      "Experts in environmental management, climate change, ESG implementation, corporate governance, social impact, sustainability reporting, and responsible leadership.",
    tag: "SUSTAINABILITY & ESG",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop",
  },
  {
    name: "Industry Practitioners",
    description:
      "Engineers, consultants, entrepreneurs, project managers, and subject matter experts who bring practical insights and real-world experience into the classroom.",
    tag: "INDUSTRY ADVOCATES",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
  },
  {
    name: "Visiting Faculty & Guest Facilitators",
    description:
      "ESTA also engages distinguished industry leaders, professors, development practitioners, OEM specialists, and international experts as visiting instructors and guest facilitators.",
    tag: "VISITING FACULTY",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop",
  },
] as const;

function InstructorsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="section-band pb-6">
        <div className="site-container">
          <span className="eyebrow">Faculty</span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Our Instructors
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            At Eternity Stone Training Academy (ESTA), we believe that the quality of training can never exceed the quality of the instructors delivering it. Our instructors are carefully selected based on their academic qualifications, professional certifications, practical industry experience, and passion for developing people. Unlike many institutions that rely primarily on classroom teaching, ESTA adopts a practitioner-led learning model. This means our trainees learn directly from professionals who have worked in the field, managed projects, solved real industry challenges, and built successful careers.
          </p>
        </div>
      </section>

      {/* SECTION 1: FACULTY TEAMS (using FacilitatorCard layout) */}
      <section className="section-band-muted">
        <div className="site-container">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">Core Divisions</span>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Faculty Divisions & Teams
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Our training program is structured across five major practitioner groups.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facultyTeams.map((team) => (
              <article key={team.name} className="industrial-card overflow-hidden flex flex-col h-full">
                <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src={team.image}
                    alt={team.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
                    {team.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-foreground leading-tight">
                    {team.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground flex-grow">
                    {team.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE INSTRUCTORS SHOWCASE */}
      <section className="section-band bg-background">
        <div className="site-container">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">Technical Team</span>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Meet Our Core Technical Faculty
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Meet the specialists leading our hands-on engineering, solar, and fabrication workshops.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {facilitators.map((f) => (
              <article key={f.name} className="industrial-card overflow-hidden">
                <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                  <img
                    src={f.image}
                    alt={`Portrait of ${f.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 bg-card">
                  <h3 className="text-md font-extrabold text-foreground">{f.name}</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground min-h-[40px]">{f.role}</p>
                  <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary">
                    {f.years}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CALL TO ACTION FOOTER */}
      <section className="section-band-contrast">
        <div className="site-container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white mb-2">
              <GraduationCap className="size-8" />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl leading-tight text-white">
              Ready to learn from industry experts?
            </h2>
            <p className="text-base sm:text-lg leading-8 text-white/80 max-w-3xl mx-auto">
              Our instructors are committed to helping every learner acquire practical skills, professional competence, entrepreneurial confidence, and the mindset required to succeed in today’s rapidly changing world. At ESTA, we do not simply teach concepts—we prepare people to perform, innovate, lead, and create value. Join a Learning Environment Led by Professionals, Built for Excellence, and Focused on Results.
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
