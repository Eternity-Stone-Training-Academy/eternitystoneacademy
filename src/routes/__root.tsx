import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useLocation,
  useRouter,
} from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import logoAsset from "@/assets/esta-logo.png.asset.json";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="industrial-card max-w-md p-8 text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Button asChild variant="hero" size="xl">
            <Link to="/">Go home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="industrial-card max-w-md p-8 text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn&apos;t load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button
            variant="hero"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </Button>
          <Button asChild variant="outline">
            <a href="/">Go home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Eternity Stone Training Academy equips learners in Osogbo with practical welding, electrical instrumentation, and solar installation skills.",
      },
      { property: "og:title", content: "Eternity Stone Training Academy" },
      {
        property: "og:description",
        content:
          "Professional technical training in welding, electrical instrumentation, and solar installation with ITF-aligned practical learning.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Eternity Stone Training Academy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Eternity Stone Training Academy" },
      { name: "description", content: "A modern, responsive website for Eternity Stone Training Academy, showcasing indegeneous technical skills development programs." },
      { property: "og:description", content: "A modern, responsive website for Eternity Stone Training Academy, showcasing indegeneous technical skills development programs." },
      { name: "twitter:description", content: "A modern, responsive website for Eternity Stone Training Academy, showcasing indegeneous technical skills development programs." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1f9586ed-c153-4217-a9ca-d77223a934c1/id-preview-ca8d2d24--6cd04f28-73c6-40f3-b268-a523f31e2a46.lovable.app-1780313354955.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1f9586ed-c153-4217-a9ca-d77223a934c1/id-preview-ca8d2d24--6cd04f28-73c6-40f3-b268-a523f31e2a46.lovable.app-1780313354955.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Eternity Stone Training Academy",
          description:
            "Professional technical capacity development academy offering practical industrial training in Osogbo, Osun State, Nigeria.",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Building 4, Industrial Development Centre, Opposite St. Charles Grammar School, Oke-Ayepe",
            addressLocality: "Osogbo",
            addressRegion: "Osun State",
            addressCountry: "Nigeria",
          },
          telephone: "+2348032146803",
          email: "academy@eternitystonegroup.ng",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

const schoolLinks = [
  { hash: "sves", label: "SVES — Vocational & Entrepreneurship" },
  { hash: "saas", label: "SAAS — Agriculture & Agro-Allied" },
  { hash: "sses", label: "SSES — Sustainability & ESG" },
] as const;

function SiteHeader() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  // Nav background is always dark (hero gradient at home top, solid hero color
  // when scrolled or on inner pages), so text stays white throughout.
  const shellTextClass = useMemo(() => "nav-shell text-hero-foreground", []);

  return (
    <header className={`sticky top-0 z-50 ${shellTextClass}`} data-scrolled={scrolled || !isHome}>
      <div className="site-container">
        <div className="flex min-h-16 items-center justify-between gap-6 py-2">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Eternity Stone Training Academy logo" className="h-10 w-10 rounded-md object-contain bg-white/95 p-1" />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                Eternity Stone
              </span>
              <span className="font-heading text-sm font-bold sm:text-base">
                Training Academy
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <Link
              to="/"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>

            {/* About Us Dropdown with Nested Submenu */}
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary cursor-pointer"
              >
                About Us <ChevronDown className="size-4" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="industrial-card flex flex-col gap-1 bg-card p-2 shadow-xl border border-border/80">
                  <Link
                    to="/about"
                    activeProps={{ className: "text-primary bg-secondary/60" }}
                    activeOptions={{ exact: true }}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    About ESTA (Overview)
                  </Link>
                  <Link
                    to="/about/founder"
                    activeProps={{ className: "text-primary bg-secondary/60" }}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    Meet Our Founder
                  </Link>
                  
                  {/* Nested Directors Dropdown */}
                  <div className="group/sub relative">
                    <div className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent cursor-pointer">
                      <span>Director of Schools</span>
                      <ChevronDown className="size-4 -rotate-90 group-hover/sub:rotate-0 transition-transform" />
                    </div>
                    <div className="invisible absolute left-full top-0 z-50 w-64 pl-2 opacity-0 transition-all duration-150 group-hover/sub:visible group-hover/sub:opacity-100">
                      <div className="industrial-card flex flex-col gap-1 bg-card p-2 shadow-xl border border-border">
                        <Link
                          to="/about/director-sves"
                          activeProps={{ className: "text-primary bg-secondary/60 font-bold" }}
                          className="rounded-lg px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
                        >
                          Vocational & Entrepreneurship (SVES)
                        </Link>
                        <Link
                          to="/about/director-saas"
                          activeProps={{ className: "text-primary bg-secondary/60 font-bold" }}
                          className="rounded-lg px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
                        >
                          Agriculture & Agro-Allied (SAAS)
                        </Link>
                        <Link
                          to="/about/director-sses"
                          activeProps={{ className: "text-primary bg-secondary/60 font-bold" }}
                          className="rounded-lg px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
                        >
                          Sustainability & ESG (SSES)
                        </Link>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/about/instructors"
                    activeProps={{ className: "text-primary bg-secondary/60" }}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    Our Instructors
                  </Link>
                </div>
              </div>
            </div>

            {/* Schools Dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary cursor-pointer"
              >
                Schools <ChevronDown className="size-4" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="industrial-card flex flex-col gap-1 bg-card p-2 shadow-xl border border-border/80">
                  {schoolLinks.map((s) => (
                    <Link
                      key={s.hash}
                      to="/programs"
                      hash={s.hash}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    >
                      {s.label}
                    </Link>
                  ))}
                  <Link
                    to="/camet"
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                  >
                    CAMET — Flagship Center (Jan 2027)
                  </Link>
                  <Link
                    to="/programs"
                    className="rounded-lg border-t border-border px-3 py-2 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-accent"
                  >
                    View all programs →
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Apply for Training
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground md:hidden cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen ? (
          <div className="pb-5 md:hidden">
            <div className="industrial-card flex flex-col gap-3 p-4">
              <Link
                to="/"
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                activeOptions={{ exact: true }}
              >
                Home
              </Link>
              
              <Link
                to="/programs"
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
              >
                Programs
              </Link>

              {/* Mobile About Us Sub-sections */}
              <div className="border-t border-border pt-2">
                <p className="px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary">About Us</p>
                <div className="flex flex-col gap-1 pl-2">
                  <Link
                    to="/about"
                    className="block rounded-lg px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    activeProps={{ className: "bg-secondary/40 text-primary" }}
                    activeOptions={{ exact: true }}
                  >
                    About ESTA (Overview)
                  </Link>
                  <Link
                    to="/about/founder"
                    className="block rounded-lg px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    activeProps={{ className: "bg-secondary/40 text-primary" }}
                  >
                    Meet Our Founder
                  </Link>
                  
                  {/* Indented Directors List */}
                  <div className="pl-3 py-1 space-y-1 border-l border-border/80 ml-3">
                    <p className="px-3 text-[10px] font-extrabold uppercase tracking-[0.15em] text-muted-foreground">Directors</p>
                    <Link
                      to="/about/director-sves"
                      className="block rounded-lg px-3 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
                      activeProps={{ className: "bg-secondary/40 text-primary font-bold" }}
                    >
                      Vocational & Entrepreneurship (SVES)
                    </Link>
                    <Link
                      to="/about/director-saas"
                      className="block rounded-lg px-3 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
                      activeProps={{ className: "bg-secondary/40 text-primary font-bold" }}
                    >
                      Agriculture & Agro-Allied (SAAS)
                    </Link>
                    <Link
                      to="/about/director-sses"
                      className="block rounded-lg px-3 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
                      activeProps={{ className: "bg-secondary/40 text-primary font-bold" }}
                    >
                      Sustainability & ESG (SSES)
                    </Link>
                  </div>
                  
                  <Link
                    to="/about/instructors"
                    className="block rounded-lg px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    activeProps={{ className: "bg-secondary/40 text-primary" }}
                  >
                    Our Instructors
                  </Link>
                </div>
              </div>

              {/* Mobile Schools Link */}
              <div className="border-t border-border pt-2">
                <p className="px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary">Schools</p>
                {schoolLinks.map((s) => (
                  <Link
                    key={s.hash}
                    to="/programs"
                    hash={s.hash}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {s.label}
                  </Link>
                ))}
                <Link
                  to="/camet"
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                >
                  CAMET — Flagship Center (Jan 2027)
                </Link>
              </div>

              <Link
                to="/contact"
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
              >
                Contact
              </Link>
              
              <Button asChild variant="hero" size="xl" className="w-full mt-2">
                <Link to="/contact">Apply for Training</Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="site-container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="Eternity Stone Training Academy logo" className="h-14 w-14 rounded-lg bg-white/95 p-1.5" />
              <div>
                <p className="font-heading text-lg font-bold">Eternity Stone Training Academy</p>
                <p className="text-sm text-white/72">Professional technical capacity development in Osogbo.</p>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/78">
              ESTA prepares youth, artisans, and professionals for modern industry through practical, standards-aligned training in welding, instrumentation, and renewable energy.
            </p>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Learn it. Live it. Build the future.
            </p>
            <div className="rounded-lg border border-white/12 bg-white/6 p-4 text-xs leading-6 text-white/78">
              <p className="font-semibold text-white">Eternity Stone Training Academy Limited</p>
              <p>Training & Capacity Development Arm of Eternity Stone Group. CAC-registered in Nigeria.</p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Quick links
            </h2>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/78">
              <Link to="/" className="transition-colors hover:text-primary">Home</Link>
              <Link to="/programs" className="transition-colors hover:text-primary">Programs</Link>
              <Link to="/about" className="transition-colors hover:text-primary font-medium">About Us (Overview)</Link>
              <Link to="/about/founder" className="transition-colors hover:text-primary pl-3 text-xs opacity-85">— Meet Our Founder</Link>
              <Link to="/about/director-sves" className="transition-colors hover:text-primary pl-3 text-xs opacity-85">— SVES Director</Link>
              <Link to="/about/director-saas" className="transition-colors hover:text-primary pl-3 text-xs opacity-85">— SAAS Director</Link>
              <Link to="/about/director-sses" className="transition-colors hover:text-primary pl-3 text-xs opacity-85">— SSES Director</Link>
              <Link to="/about/instructors" className="transition-colors hover:text-primary pl-3 text-xs opacity-85">— Our Instructors</Link>
              <Link to="/contact" className="transition-colors hover:text-primary">Contact</Link>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Contact
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/78">
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 text-primary" /> Osogbo, Osun State, Nigeria</p>
              <p className="flex items-center gap-3"><Phone className="size-4 text-primary" /> 08032146803</p>
              <p className="flex items-center gap-3" suppressHydrationWarning><Mail className="size-4 text-primary" /> academy@eternitystonegroup.ng</p>
            </div>
            <div className="mt-5 flex items-center gap-3 text-white/78">
              <a
                href="https://www.linkedin.com/company/eternity-stone-training-academy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ESTA on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61589763473657"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ESTA on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Eternity Stone Training Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
        <a
          href="https://wa.me/2348032146803?text=Hello%20ESTA%2C%20I%27d%20like%20to%20chat%20with%20an%20advisor."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with an Advisor on WhatsApp"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.55)] transition-transform hover:scale-[1.03]"
        >
          <MessageCircle className="size-5" />
          <span className="hidden sm:inline">Chat with an Advisor</span>
        </a>
        <Toaster richColors position="top-center" />
      </div>
    </QueryClientProvider>
  );
}
