import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Read the privacy policy of Eternity Stone Training Academy (ESTA). Learn how we protect and manage your personal data.",
      },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="section-band pb-6">
        <div className="site-container">
          <span className="eyebrow">Legal & Policies</span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">Last Updated: June 19, 2026</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-band pt-0">
        <div className="site-container">
          <div className="industrial-card p-8 sm:p-10 md:p-12 space-y-8 bg-card max-w-4xl">
            
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">1. Introduction</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Eternity Stone Training Academy ("ESTA", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or register for our programs in Osogbo, Nigeria.
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">2. Information We Collect</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                We may collect personal information that you voluntarily provide to us when registering interest, applying for training, or contacting us. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Personal Identifiers:</strong> Full name, email address, phone number.</li>
                <li><strong>Training & Admissions Data:</strong> Selected track/course of interest, training background, and educational level.</li>
                <li><strong>Message Details:</strong> Any text or files you submit via our contact forms.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">3. How We Use Your Information</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Process your admission and coordinate vocational training programs.</li>
                <li>Send you updates, course changes, and marketing materials related to ESTA.</li>
                <li>Respond to your inquiries, partnership requests, or support messages.</li>
                <li>Improve our website, facility offerings, and curriculum design.</li>
                <li>Comply with regulatory and accreditation bodies, such as the Industrial Training Fund (ITF).</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">4. Sharing Your Information</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Eternity Stone Group:</strong> Our parent company, for unified services and administrative purposes.</li>
                <li><strong>Regulatory & Partner Institutions:</strong> Accrediting bodies, corporate scholarship sponsors, or government agencies supporting your training.</li>
                <li><strong>Legal Requirements:</strong> Where required by Nigerian law to protect our rights or comply with judicial proceedings.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">5. Data Security</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                We use reasonable administrative, technical, and physical security measures to protect your personal information. However, no electronic transmission over the Internet or information storage technology can be guaranteed 100% secure, so we cannot promise or guarantee absolute security.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">6. Your Rights</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Depending on your location and local regulations, you have the right to request access to the personal data we hold about you, request corrections to inaccurate data, or request the deletion of your data once it is no longer required for regulatory purposes. Contact us to make such requests.
              </p>
            </div>

            <div className="space-y-3 border-t border-border pt-6">
              <h2 className="text-xl font-bold text-foreground">7. Contact Us</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-3 text-sm text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground">Eternity Stone Training Academy Limited</p>
                <p>Building 4, Industrial Development Centre, Opposite St. Charles Grammar School, Oke-Ayepe, Osogbo.</p>
                <p>Email: academy@eternitystonegroup.ng</p>
                <p>Phone: +234 803 214 6803</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
