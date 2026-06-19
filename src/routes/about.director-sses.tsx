import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/about/director-sses")({
  head: () => ({
    meta: [
      { title: "Director of SSES | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Read the message and professional profile of Amb. Dolapo Adebola, Director of the School of Sustainability & ESG (SSES).",
      },
    ],
  }),
  component: DirectorSsesPage,
});

function DirectorSsesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="section-band pb-6">
        <div className="site-container">
          <span className="eyebrow">Leadership</span>
          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Office of the Director – School of Sustainability & ESG (SSES)
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-band pt-0">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_2.2fr] lg:items-start">
            
            {/* Left Side: Photo and Bio Card */}
            <div className="space-y-6">
              {/* 1. Profile Picture: Male portrait with beard, dark blue suit */}
              <div className="industrial-card overflow-hidden bg-card shadow-soft max-w-sm mx-auto lg:mx-0">
                <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                  <img
                    src="/images/director-sses.jpg"
                    alt="Amb. Dolapo Adebola - Director of SSES"
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center lg:text-left bg-card">
                  <h3 className="text-lg font-extrabold text-foreground">Amb. Dolapo Adebola</h3>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary mt-1">
                    Director, SSES
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Bio and Welcome Message */}
            <div className="space-y-10">
              
              {/* 2. Professional Bio (Beside/under the photo) */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3">
                  Professional Biography
                </h2>
                <div className="space-y-4 text-base leading-8 text-muted-foreground">
                  <p>
                    Dolapo Adebola is a seasoned Environmental, Social, and Governance (ESG) and Sustainability Professional with over a decade of hands-on experience supporting organizations to achieve regulatory compliance, environmental stewardship, and long-term sustainable value. He graduated at the top of his class from Ladoke Akintola University of Technology, Ogbomoso, Nigeria, where he earned a Bachelor of Technology degree in Pure and Applied Chemistry, specializing in Industrial and Environmental Chemistry. He also holds an Educational Diploma in Environmental Quality Monitoring and Analysis.
                  </p>
                  <p>
                    Dolapo has strengthened his professional expertise through globally recognized certifications from the World Bank Group, including the Environmental and Social Framework (ESF) Fundamentals and IFC Managing Environmental and Social Performance (MESP). He is a Certified Project Manager (CPM). He holds advanced certifications in ESG Reporting, ESG and Climate Change, and Sustainability and Strategy from leading international institutions in Singapore, the United States, and the United Kingdom.
                  </p>
                  <p>
                    A leading Quality, Health, Safety, and Environment (QHSE) Specialist, Dolapo possesses both onshore and offshore competency and supervisory certifications from the International Institute of Risk and Safety Management (IIRSM), UK. His technical expertise spans frameworks and standards such as IFC Performance Standards, African Development Bank Operational Safeguards, GRI, SASB, IFRS S1 & S2, TCFD, RSPO, World Bank EHS Guidelines, and ISO Management Systems, including ISO 9001, 14001, and 45001, and so on. He is also a World Safety Organization and Safety and Emergency Response Ready (SafERR) Global Ambassador, as well as a recognized Member of the SafERR Global Institute.
                  </p>
                  <p>
                    Professionally, Dolapo has served as a Senior Sustainability Consultant at Natural Eco Capital Ltd, where he supported corporate clients in environmental and social impact assessments, sustainability strategy development, stakeholder engagement, and Environmental and Social Management Systems. He currently serves as a Senior Sustainability and ESG Consultant at the Distributed Renewable Energy Enhancement Facility (DREEF), providing project preparation, development, and advisory support services to distributed renewable energy clients to achieve bankability and financial close.
                  </p>
                  <p>
                    Beyond consulting, Dolapo is the Managing Director and CEO of Dolapo's Career Compass Ltd, where he delivers practical coaching and capacity-building programmes for graduates, professionals, and career switchers seeking to build impactful careers in sustainability and ESG. Driven by a strong passion for sustainability, risk management, and climate-resilient development, Dolapo Adebola is widely recognized for his analytical depth, strategic insight, and ability to translate ESG principles into practical, results-oriented solutions for businesses and institutions.
                  </p>
                </div>
              </div>

              {/* 3. Welcome Message (Comes After Bio) */}
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
                      "Welcome to the School of Sustainability & ESG. Across the world, organizations, governments, investors, and communities are increasingly recognizing that sustainable development is no longer optional—it is essential. Environmental responsibility, social impact, ethical leadership, sound governance, diversity and inclusion, climate action, and responsible business practices have become critical drivers of long-term success and societal progress. The School of Sustainability & ESG was established to prepare individuals and organizations for this rapidly evolving future.
                    </p>
                    <p>
                      Through our specialized programs in climate change, community engagement, diversity, equity and inclusion, waste management and circular economy, corporate governance, ethical leadership, and ESG risk management, we equip participants with the knowledge and practical tools needed to create measurable and lasting impact. Our programs are designed for business leaders, government officials, development practitioners, sustainability professionals, entrepreneurs, NGOs, educators, and individuals who desire to contribute to a more sustainable and equitable world.
                    </p>
                    <p>
                      At our school, sustainability is not merely a concept—it is a call to action. We believe organizations can achieve profitability while protecting the environment, empowering communities, and strengthening governance systems. We welcome partnerships with corporations, development agencies, foundations, international organizations, academic institutions, and public sector entities that are committed to advancing sustainability and responsible leadership. We also invite sponsors and scholarship partners to support the development of future sustainability leaders who will help shape Africa’s transition toward a more resilient and prosperous future. The challenges of our time require bold thinking, collaboration, and purposeful leadership. Together, we can build organizations, communities, and societies that thrive today while preserving opportunities for generations to come."
                    </p>
                  </div>
                  
                  <div className="mt-6 pl-2">
                    <p className="font-heading font-bold text-foreground font-semibold">Amb. Dolapo Adebola</p>
                    <p className="text-xs font-semibold text-primary">Director, School of Sustainability & ESG (SSES)</p>
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
