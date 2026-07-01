import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/about/director-sves")({
  head: () => ({
    meta: [
      { title: "Director of SVES | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Read the message and professional profile of Mr. Oluwaseun Bodunde, Director of the School of Vocational & Entrepreneurship Studies (SVES).",
      },
    ],
  }),
  component: DirectorSvesPage,
});

function DirectorSvesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="section-band pb-6">
        <div className="site-container">
          <span className="eyebrow">Leadership</span>
          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Office of the Director – School of Vocational & Entrepreneurship Studies (SVES)
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-band pt-0">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_2.2fr] lg:items-start">

            {/* Left Side: Photo and Bio Card */}
            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="industrial-card overflow-hidden bg-card shadow-soft max-w-sm mx-auto lg:mx-0">
                <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                  <img
                    src="/images/director-saas.jpg"
                    alt="Mr. Oluwaseun Bodunde - Director of SVES"
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center lg:text-left bg-card">
                  <h3 className="text-lg font-extrabold text-foreground">Mr. Oluwaseun Bodunde (B.Sc., MBA)</h3>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary mt-1">
                    Director, SVES
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Bio and Welcome Message */}
            <div className="space-y-10">

              {/* Professional Bio */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3">
                  Professional Biography
                </h2>
                <div className="space-y-4 text-base leading-8 text-muted-foreground">
                  <p>
                    Mr. Oluwaseun Bodunde is a seasoned agribusiness strategist and vocational education professional with over 12 years of experience in enterprise development, skills training, and sustainable value chain management. He holds a Bachelor of Science in Agricultural Economics and a Master of Business Administration (MBA).
                  </p>
                  <p>
                    His work focus has been centered on empowering youth, promoting entrepreneurship, and scaling vocational enterprises. As the Director of the School of Vocational & Entrepreneurship Studies (SVES) at the Eternity Stone Training Academy (ESTA), he designs vocational courses that integrate modern technology and business principles, enabling learners to build highly productive and profitable enterprises across Nigeria and Africa.
                  </p>
                </div>
              </div>

              {/* Welcome Message */}
              <div className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3">
                  Welcome Message
                </h2>
                <div className="industrial-card relative overflow-hidden border-l-4 border-l-primary bg-secondary/20 p-6 sm:p-8">
                  <div className="absolute top-4 right-4 text-primary/5">
                    <Quote className="size-16 rotate-180" />
                  </div>

                  <div className="relative z-10 space-y-4 text-base leading-8 text-foreground/90 font-medium">
                    <p>
                      "Welcome to the School of Vocational & Entrepreneurship Studies, the largest and most diverse school within the Eternity Stone Training Academy (ESTA). We live in a rapidly changing world where technical skills, innovation, and entrepreneurship have become essential drivers of personal success and national development. Unfortunately, many talented individuals possess academic qualifications but lack the practical skills required by industry and the confidence needed to create their own opportunities. Our school was established to address this challenge.
                    </p>
                    <p>
                      Through practical, hands-on, industry-relevant training, we equip learners with competencies that enable them to secure employment, become self-employed, launch successful businesses, and contribute meaningfully to economic development. Our programs span welding and fabrication, fitting and machining, electrical and instrumentation technology, solar design and installation, computer-aided design, plumbing and pipefitting technology, enterprise development, and the upcoming Center for Agricultural Mechanization & Equipment Technology (CAMET).
                    </p>
                    <p>
                      We are particularly passionate about developing a new generation of technical professionals and entrepreneurs who can build industries, solve practical problems, and create jobs. Whether you are a school leaver, graduate, artisan, entrepreneur, career changer, corporate employee, or institution seeking workforce development solutions, there is a place for you within our school.
                    </p>
                    <p>
                      I invite industry leaders, equipment manufacturers, corporate organizations, development agencies, and government institutions to partner with us in building a skilled workforce capable of driving Nigeria's industrial transformation. We also welcome scholarship sponsors and donors who share our commitment to youth empowerment and economic inclusion. Together, we can develop the skilled professionals and entrepreneurs who will shape the future of Nigeria and Africa. We look forward to welcoming you."
                    </p>
                  </div>

                  <div className="mt-6 pl-2">
                    <p className="font-heading font-bold text-foreground">Mr. Oluwaseun Bodunde (B.Sc., MBA)</p>
                    <p className="text-xs font-semibold text-primary">Director, School of Vocational & Entrepreneurship Studies (SVES)</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
