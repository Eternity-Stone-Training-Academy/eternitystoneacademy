import { createFileRoute } from "@tanstack/react-router";
import { Quote, BookOpen } from "lucide-react";

export const Route = createFileRoute("/about/founder")({
  head: () => ({
    meta: [
      { title: "Meet Our Founder | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Read the welcome message and professional biography of Engr. Bolaji Abiodun Jegede, Founder and Chairman of Eternity Stone Training Academy (ESTA).",
      },
      { property: "og:title", content: "Meet Our Founder | Eternity Stone Training Academy" },
      {
        property: "og:description",
        content:
          "Welcome message and professional biography of Engr. Bolaji Abiodun Jegede, Founder and Chairman of ESTA.",
      },
      { property: "og:url", content: "/about/founder" },
      { property: "og:image", content: "/images/founder.jpg" },
    ],
    links: [{ rel: "canonical", href: "/about/founder" }],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="section-band pb-6">
        <div className="site-container">
          <span className="eyebrow">Leadership</span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Meet Our Founder
          </h1>
        </div>
      </section>

      {/* SECTION 1: FOUNDER'S WELCOME MESSAGE (MUST COME FIRST) */}
      <section className="section-band-muted pt-0">
        <div className="site-container">
          <div className="industrial-card relative overflow-hidden border-l-4 border-l-primary bg-card p-8 shadow-panel sm:p-10 md:p-12">
            <div className="absolute top-6 right-6 text-primary/10">
              <Quote className="size-24 rotate-180" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
                Founder's Welcome Message
              </h2>
              
              <div className="space-y-5 text-base leading-8 text-foreground/90 sm:text-lg sm:leading-9 font-medium">
                <p>
                  Thank you for visiting the Eternity Stone Training Academy (ESTA).
                </p>
                <p>
                  At ESTA, we believe that skills are among the most powerful tools for transforming lives, creating wealth, and building nations. Across Nigeria and Africa, millions of young people possess talent and potential but often lack access to practical, industry-relevant training that can unlock opportunities and empower them to become productive contributors to society.
                </p>
                <p>
                  ESTA was established to bridge this gap.
                </p>
                <p>
                  Our vision is to develop a new generation of highly skilled professionals, technicians, entrepreneurs, innovators, and industry leaders who are equipped not only with technical competence but also with the entrepreneurial mindset needed to create sustainable value.
                </p>
                <p>
                  Unlike traditional learning institutions that focus heavily on theory, our approach combines practical hands-on training, real-world applications, industry exposure, and entrepreneurship development. We want every trainee who passes through our academy to leave with the confidence and competence to secure employment, start a business, or become a solution provider within their community.
                </p>
                <p>
                  Today, the academy offers training across vocational skills, agriculture, sustainability, engineering technologies, renewable energy, entrepreneurship, and emerging sectors. Tomorrow, through our Center for Agricultural Mechanization & Equipment Technology (CAMET) and other planned centers of excellence, we aspire to become a leading skills development institution serving Nigeria, Africa, and the global community.
                </p>
                <p>
                  Whether you are a student, graduate, artisan, entrepreneur, professional, corporate organization, government agency, or development partner, we invite you to join us on this journey of building skills, creating opportunities, and transforming lives.
                </p>
                <p>
                  Together, we can create a future where practical knowledge, innovation, and entrepreneurship become the foundation for sustainable development.
                </p>
                <p>
                  Thank you for choosing ESTA.
                </p>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-heading text-lg font-bold text-foreground">Engr. Bolaji Abiodun Jegede</p>
                <p className="text-sm font-semibold text-primary">Founder & Chairman, Eternity Stone Training Academy (ESTA)</p>
                <p className="text-sm text-muted-foreground">Chief Executive Officer, Eternity Stone Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROFESSIONAL BIOGRAPHY (MUST COME AFTER THE MESSAGE) */}
      <section className="section-band bg-background">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">
            
            {/* Column 1: Portrait */}
            <div className="space-y-4">
              <div className="industrial-card overflow-hidden bg-muted shadow-soft max-w-sm mx-auto lg:mx-0">
                <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                  <img
                    src="/images/founder.jpg"
                    alt="Engr. Bolaji Abiodun Jegede wearing a grey suit and a blue-striped tie"
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center lg:text-left bg-card">
                  <h3 className="text-lg font-extrabold text-foreground">Engr. Bolaji Abiodun Jegede</h3>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary mt-1">Founder & Chairman</p>
                </div>
              </div>
            </div>

            {/* Column 2: Biographical Text */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl border-b border-border pb-3">
                Professional Biography
              </h2>
              
              <div className="space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  Engr. Bolaji Abiodun Jegede is a distinguished entrepreneur, engineer, development strategist, and social impact leader with over 23 years of entrepreneurial experience and more than 17 years of professional experience spanning energy, manufacturing, agriculture, consulting, technical education, and community development.
                </p>
                
                <p>
                  A First-Class Graduate of Chemical Engineering from the University of Lagos, he is widely recognized for his commitment to economic transformation, workforce development, entrepreneurship, and sustainable development. His career has been driven by a passion for creating opportunities, empowering people, and building institutions that deliver long-term value.
                </p>

                <p>
                  As Founder and Group CEO of Eternity Stone Group, he leads a growing industrial and consulting organization with interests in oil and gas, renewable energy, fabrication, agriculture, technical training, equipment manufacturing, and business advisory services. Through his leadership, the organization has established strategic partnerships with numerous international Original Equipment Manufacturers (OEMs) and continues to expand its footprint across multiple sectors.
                </p>

                <p>
                  He is also the Founder of Pabio Stone Foundation, a social impact organization dedicated to youth empowerment, health advocacy, economic inclusion, and community development. Over the years, he has led initiatives addressing public health challenges, entrepreneurship development, and poverty reduction while supporting thousands of beneficiaries across Nigeria.
                </p>

                <p>
                  A passionate advocate for skills development, Engr. Jegede established the Eternity Stone Training Academy (ESTA) to help bridge the skills gap in Nigeria and Africa by providing practical, industry-relevant training that empowers individuals for employment, entrepreneurship, and lifelong success.
                </p>

                <p>
                  His vision is to build ESTA into a globally respected institution that develops highly skilled professionals, innovators, entrepreneurs, and industry leaders capable of driving sustainable economic growth across Africa and beyond.
                </p>

                <div className="industrial-card bg-secondary/30 border border-secondary p-6 rounded-xl space-y-4">
                  <h4 className="flex items-center gap-2 font-heading font-bold text-foreground text-md">
                    <BookOpen className="size-5 text-primary" />
                    Publications & Works
                  </h4>
                  <ul className="grid gap-2 text-sm pl-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span><strong className="text-foreground">Anchored in Christ:</strong> The Power of Knowing Who You Are</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span><strong className="text-foreground">Vision 2035:</strong> Make Osun Great For All (MOGFA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span><strong className="text-foreground">Vision 2050:</strong> The Nigerian Dream</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span><strong className="text-foreground">Nigeria’s 2026 Tax Reform:</strong> A Practical Guide for Individuals, SMEs, NGOs, Startups & Institutions</span>
                    </li>
                  </ul>
                </div>

                <p>
                  He has spoken at conferences, facilitated training programs, appeared on radio and media platforms, mentored entrepreneurs and young professionals, and continues to contribute to conversations on economic development, industrialization, entrepreneurship, and nation-building.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
