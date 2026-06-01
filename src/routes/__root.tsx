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
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Menu,
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
      { name: "description", content: "A modern, responsive website for Eternity Stone Training Academy, showcasing technical skills development programs." },
      { property: "og:description", content: "A modern, responsive website for Eternity Stone Training Academy, showcasing technical skills development programs." },
      { name: "twitter:description", content: "A modern, responsive website for Eternity Stone Training Academy, showcasing technical skills development programs." },
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
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/contact", label: "Contact Us" },
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
        <div className="flex min-h-20 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Eternity Stone Training Academy logo" className="h-12 w-12 rounded-lg object-cover bg-white/95 p-1.5" />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Eternity Stone
              </span>
              <span className="font-heading text-base font-bold sm:text-lg">
                Training Academy
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Enroll Now
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen ? (
          <div className="pb-5 lg:hidden">
            <div className="industrial-card flex flex-col gap-3 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild variant="hero" size="xl" className="w-full">
                <Link to="/contact">Enroll Now</Link>
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
          </div>

          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Quick links
            </h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/78">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              ))}
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

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/58">
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
        <Toaster richColors position="top-center" />
      </div>
    </QueryClientProvider>
  );
}
