import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import drillingAsset from "@/assets/esta-drilling.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Admission | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Contact ESTA in Osogbo and review the admission form for welding, electrical instrumentation, and solar installation programs.",
      },
      { property: "og:title", content: "Contact & Admission | Eternity Stone Training Academy" },
      {
        property: "og:description",
        content:
          "Reach ESTA for admissions, visit our Osogbo location, and apply for one of our flagship technical training programs.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: drillingAsset.url },
      { name: "twitter:image", content: drillingAsset.url },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="section-band">
        <div className="site-container">
          <div className="flex max-w-3xl flex-col gap-4">
            <span className="eyebrow">Contact & admission</span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Speak with admissions and start your ESTA journey.
            </h1>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              Visit our training location in Osogbo or send your admission details through the static form layout below to begin your application process.
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="industrial-card overflow-hidden p-0">
              <img
                src={drillingAsset.url}
                alt="ESTA learner using a workshop machine"
                className="h-72 w-full object-cover"
              />
              <div className="space-y-6 p-8">
                <div>
                  <h2 className="text-2xl font-bold">Visit ESTA</h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    We are located in the Industrial Development Centre, giving learners close proximity to a real-world technical environment.
                  </p>
                </div>

                <div className="space-y-5 text-sm leading-7 text-foreground">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                      <MapPin className="size-5 text-primary" />
                    </span>
                    <p>
                      Building 4, Industrial Development Centre, Opposite St. Charles Grammar School, Oke-Ayepe, Osogbo, Osun State, Nigeria.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                      <Phone className="size-5 text-primary" />
                    </span>
                    <p>08032146803</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                      <Mail className="size-5 text-primary" />
                    </span>
                    <p>academy@eternitystonegroup.ng</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="industrial-card p-8 sm:p-10">
              <div className="flex flex-col gap-3">
                <span className="eyebrow">Admission form</span>
                <h2 className="text-3xl font-bold">Submit your details</h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  This static form layout is designed for admissions presentation and can be connected to a backend later if needed.
                </p>
              </div>

              <form className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="text-sm font-medium">Full Name</span>
                  <input type="text" className="field-shell" placeholder="Enter your full name" />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="text-sm font-medium">Email</span>
                  <input type="email" className="field-shell" placeholder="Enter your email" />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="text-sm font-medium">Phone</span>
                  <input type="tel" className="field-shell" placeholder="Enter your phone number" />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="text-sm font-medium">Selected Track</span>
                  <div className="field-shell items-center">
                    <select defaultValue="">
                      <option value="" disabled>
                        Select a program
                      </option>
                      <option>Welding & Fabrication Technology</option>
                      <option>Electrical & Instrumentation</option>
                      <option>Solar Design & Installation</option>
                    </select>
                  </div>
                </label>
                <div className="sm:col-span-2">
                  <Button type="button" variant="hero" size="xl" className="w-full sm:w-auto">
                    Apply Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
