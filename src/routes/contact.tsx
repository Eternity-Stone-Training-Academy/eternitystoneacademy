import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import drillingAsset from "@/assets/esta-drilling.jpg.asset.json";
import { allCourseTitles } from "@/lib/courses";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+0-9\s()-]+$/, "Phone can only contain digits and + ( ) -"),
  subject: z.string().min(1, "Please select a subject"),
  track: z.string().optional(),
  message: z.string().trim().min(10, "Please enter a message of at least 10 characters").max(2000),
}).refine(
  (data) => {
    if (data.subject === "Admissions & Training" && (!data.track || data.track === "")) {
      return false;
    }
    return true;
  },
  {
    message: "Please select a program track for admissions",
    path: ["track"],
  }
);

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Get in touch with ESTA in Osogbo. Send inquiries, discuss partnerships, or apply for technical training courses.",
      },
      { property: "og:title", content: "Contact Us | Eternity Stone Training Academy" },
      {
        property: "og:description",
        content:
          "Reach ESTA for general inquiries, admissions, partnerships, and sponsorships at our Osogbo location.",
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
  const [submitting, setSubmitting] = useState(false);
  const [subject, setSubject] = useState("General Inquiry");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const parsed = contactSchema.safeParse({
      fullName: String(data.get("fullName") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      subject: String(data.get("subject") ?? ""),
      track: String(data.get("track") ?? ""),
      message: String(data.get("message") ?? ""),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your entries");
      return;
    }

    setSubmitting(true);
    const { fullName, email, phone, subject: sub, track, message } = parsed.data;

    if (sub === "Admissions & Training") {
      const qs = new URLSearchParams({ name: fullName, email, phone, track: track || "" }).toString();
      window.open(`/application-received?${qs}`, "_blank", "noopener,noreferrer");
      toast.success("Application submitted — a confirmation tab has been opened.");
    } else {
      // General contact submission simulation
      toast.success(`Thank you, ${fullName}! Your message has been received and our team will get back to you shortly.`);
    }
    
    form.reset();
    setSubject("General Inquiry");
    setTimeout(() => setSubmitting(false), 600);
  };

  return (
    <div>
      {/* Contact Banner Section */}
      <section className="section-band">
        <div className="site-container">
          <div className="flex max-w-3xl flex-col gap-4">
            <span className="eyebrow">Contact Us</span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Get in touch with Eternity Stone Training Academy.
            </h1>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              Visit our training facility in Osogbo, reach out for general inquiries, or submit your admission application directly below.
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            
            {/* Left Column: Direct Info */}
            <div className="industrial-card overflow-hidden p-0 bg-card">
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

            {/* Right Column: Contact & Admissions Form */}
            <div className="industrial-card p-8 sm:p-10 bg-card">
              <div className="flex flex-col gap-3">
                <span className="eyebrow">Contact & Inquiry</span>
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  Have questions about courses, partnerships, or sponsorships? Select your subject and send us a message.
                </p>
              </div>

              <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
                
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="text-sm font-medium">Full Name</span>
                  <input name="fullName" type="text" required className="field-shell" placeholder="Enter your full name" />
                </label>
                
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="text-sm font-medium">Email</span>
                  <input name="email" type="email" required className="field-shell" placeholder="Enter your email" />
                </label>
                
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="text-sm font-medium">Phone</span>
                  <input name="phone" type="tel" required className="field-shell" placeholder="Enter your phone number" />
                </label>
                
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="text-sm font-medium">Subject</span>
                  <div className="field-shell items-center">
                    <select
                      name="subject"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Admissions & Training">Admissions & Training Application</option>
                      <option value="Partnerships & Collaborations">Partnerships & Collaborations</option>
                      <option value="Sponsorships & Scholarships">Sponsorships & Scholarships</option>
                    </select>
                  </div>
                </label>
                
                {subject === "Admissions & Training" ? (
                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="text-sm font-medium">Selected Program / Track</span>
                    <div className="field-shell items-center">
                      <select name="track" required defaultValue="">
                        <option value="" disabled>
                          Select a program
                        </option>
                        {allCourseTitles.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </label>
                ) : null}

                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    name="message"
                    required
                    className="field-shell min-h-32 py-3 resize-y"
                    placeholder={
                      subject === "Admissions & Training"
                        ? "Briefly tell us about your goals or questions about the course..."
                        : "Describe how we can help you..."
                    }
                  />
                </label>
                
                <div className="sm:col-span-2">
                  <Button type="submit" variant="hero" size="xl" disabled={submitting} className="w-full sm:w-auto">
                    {submitting ? "Submitting…" : subject === "Admissions & Training" ? "Apply for Training" : "Send Message"}
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

