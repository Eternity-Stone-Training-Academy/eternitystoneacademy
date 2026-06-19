import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/about/director-saas")({
  head: () => ({
    meta: [
      { title: "Director of SAAS | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Read the message and professional profile of Mr. Oluwaseun Bodunde, Director of the School of Agriculture & Agro-Allied Studies (SAAS).",
      },
    ],
  }),
  component: DirectorSaasPage,
});

function DirectorSaasPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="section-band pb-6">
        <div className="site-container">
          <span className="eyebrow">Leadership</span>
          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Office of the Director – School of Agriculture & Agro-Allied Studies (SAAS)
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-band pt-0">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_2.2fr] lg:items-start">
            
            {/* Left Side: Photo and Bio Card */}
            <div className="space-y-6">
              {/* 1. Profile Picture: Female portrait with braided hair, dark turtleneck sweater, and floral outer kimono */}
              <div className="industrial-card overflow-hidden bg-card shadow-soft max-w-sm mx-auto lg:mx-0">
                <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                  <img
                    src="/images/director-saas.jpg"
                    alt="Mr. Oluwaseun Bodunde - Director of SAAS"
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center lg:text-left bg-card">
                  <h3 className="text-lg font-extrabold text-foreground">Mr. Oluwaseun Bodunde (B.Sc., MBA)</h3>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary mt-1">
                    Director, SAAS
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
                    Mr. Oluwaseun Bodunde is a seasoned agribusiness strategist and agricultural education professional with over 12 years of experience in agricultural extension, food systems planning, and sustainable value chain management. He holds a Bachelor of Science in Agricultural Economics and a Master of Business Administration (MBA).
                  </p>
                  <p>
                    His work focus has been centered on empowering smallholder farmers, promoting climate-smart agriculture, and scaling rural enterprises. As the Director of the School of Agriculture & Agro-Allied Studies (SAAS) at the Eternity Stone Training Academy (ESTA), he designs vocational agricultural courses that integrate modern technology and business principles, enabling learners to build highly productive and profitable agribusinesses across Nigeria and Africa.
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
                      "Agriculture remains one of the greatest opportunities for economic growth, food security, employment generation, and sustainable development across Africa. Yet, despite its enormous potential, many agricultural systems continue to struggle with low productivity, inadequate mechanization, poor value addition, and limited access to modern farming knowledge. The School of Agriculture & Agro-Allied Studies was established to help bridge these gaps.
                    </p>
                    <p>
                      Our mission is to equip farmers, agripreneurs, extension officers, agribusiness professionals, youth, women, and agricultural organizations with practical skills, modern technologies, and innovative approaches that improve productivity and profitability. Our programs cover agricultural extension services, farmer capacity development, agribusiness management, agro-processing, value addition, mechanized agriculture, and rural enterprise development. We believe agriculture must evolve from subsistence activities into profitable, technology-driven enterprises capable of transforming communities and strengthening national economies.
                    </p>
                    <p>
                      Our school welcomes individuals at all levels—from first-time farmers to experienced professionals seeking to improve their knowledge and skills. We are committed to promoting sustainable agriculture, food systems development, climate-smart farming, and agribusiness innovation. We invite development partners, agricultural institutions, donor organizations, governments, equipment manufacturers, cooperatives, and agribusiness companies to collaborate with us in strengthening agricultural capacity across Nigeria and Africa. We also encourage organizations and philanthropists to support scholarship initiatives that will enable deserving individuals to access quality agricultural education and training. The future of Africa depends significantly on the future of its agriculture. Together, we can build that future."
                    </p>
                  </div>
                  
                  <div className="mt-6 pl-2">
                    <p className="font-heading font-bold text-foreground">Mr. Oluwaseun Bodunde (B.Sc., MBA)</p>
                    <p className="text-xs font-semibold text-primary">Director, School of Agriculture & Agro-Allied Studies (SAAS)</p>
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
