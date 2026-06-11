import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/application-received")({
  head: () => ({
    meta: [
      { title: "Application Received | Eternity Stone Training Academy" },
      { name: "description", content: "Thank you for applying to ESTA. Our admissions team will contact you shortly." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ApplicationReceivedPage,
});

function ApplicationReceivedPage() {
  // Read query params on the client for personalisation; safe-default during SSR.
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const name = params?.get("name") ?? "";
  const track = params?.get("track") ?? "";
  const ref = `ESTA-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  return (
    <div className="min-h-[80vh] bg-background">
      <section className="section-band">
        <div className="site-container max-w-3xl">
          <div className="industrial-card p-8 sm:p-12">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckCircle2 className="size-7" />
              </span>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Confirmation</p>
                <h1 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
                  Application received
                </h1>
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-muted-foreground">
              {name ? <>Thank you, <span className="font-bold text-foreground">{name}</span>. </> : "Thank you. "}
              Your application{track ? <> for <span className="font-bold text-foreground">{track}</span></> : null} has been logged with our admissions team.
              You will hear from us within 2 business days with payment and onboarding details.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="industrial-card p-4">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">Reference</p>
                <p className="mt-1 text-sm font-bold text-foreground">{ref}</p>
              </div>
              <div className="industrial-card p-4">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">Status</p>
                <p className="mt-1 text-sm font-bold text-foreground">Under review</p>
              </div>
              <div className="industrial-card p-4">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">Next step</p>
                <p className="mt-1 text-sm font-bold text-foreground">Admissions call-back</p>
              </div>
            </div>

            <div className="mt-8 space-y-3 rounded-xl border border-border bg-card p-5 text-sm leading-7 text-foreground">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Need to reach us sooner?</p>
              <p className="flex items-center gap-3"><MapPin className="size-4 text-primary" /> Building 4, IDC, Osogbo, Osun State.</p>
              <p className="flex items-center gap-3"><Phone className="size-4 text-primary" /> 08032146803</p>
              <p className="flex items-center gap-3"><Mail className="size-4 text-primary" /> academy@eternitystonegroup.ng</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/programs">
                  Browse more programs
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/">Back to home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
