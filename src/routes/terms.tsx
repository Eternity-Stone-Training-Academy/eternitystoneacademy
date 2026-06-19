import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Eternity Stone Training Academy" },
      {
        name: "description",
        content:
          "Read the terms and conditions of Eternity Stone Training Academy (ESTA). Understand our rules, expectations, and safety waivers.",
      },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="section-band pb-6">
        <div className="site-container">
          <span className="eyebrow">Legal & Policies</span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">Last Updated: June 19, 2026</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-band pt-0">
        <div className="site-container">
          <div className="industrial-card p-8 sm:p-10 md:p-12 space-y-8 bg-card max-w-4xl">
            
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                By accessing this website, registering for courses, or participating in training programs at Eternity Stone Training Academy ("ESTA"), you agree to be bound by these Terms & Conditions and all applicable laws and regulations in Nigeria.
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                If you do not agree with any of these terms, you are prohibited from using or accessing this site and participating in our programs.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">2. Admissions & Program Enrollment</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Admissions to ESTA's courses (including Welding & Fabrication, Electrical Instrumentation, Solar Installation, and CAMET programs) are subject to availability, eligibility criteria, and submission of accurate information. We reserve the right to refuse admission or terminate enrollment at our sole discretion.
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                Course structures, durations, and materials are subject to change to align with industrial standards or regulatory requirements.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">3. Fees & Financial Terms</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                All training fees, tuition, and materials costs are communicated by our admissions office. Payments must be completed according to the agreed schedule prior to starting the training track. All fees paid are non-refundable unless explicitly stated otherwise in writing by the ESTA management.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">4. Workshop Safety & Student Conduct</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Vocational and technical training involves operating industrial tools, heavy machinery, and electrical installations.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Safety Equipment:</strong> Students must wear appropriate Personal Protective Equipment (PPE) at all times in the workshop.</li>
                <li><strong>Compliance:</strong> Students must follow all instructions from facilitators and instructors regarding tool handling and safety protocols.</li>
                <li><strong>Zero Tolerance:</strong> ESTA maintains zero tolerance for unsafe behavior, harassment, theft, vandalism, or disruption of training sessions. Violation of these rules will lead to immediate expulsion without a refund.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">5. Liability Waiver</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                While ESTA implements strict workshop safety measures, technical training carries inherent risks. By enrolling in our practical courses, you acknowledge these risks and waive any claims against Eternity Stone Training Academy, its parent Eternity Stone Group, facilitators, officers, and employees for personal injury, property damage, or loss sustained during training operations.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">6. Intellectual Property</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                All training materials, manuals, presentations, software designs, and curriculum content provided by ESTA are the intellectual property of Eternity Stone Training Academy and the Eternity Stone Group. You may not distribute, reproduce, or commercially exploit these materials without express written authorization.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">7. Governing Law</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                These Terms & Conditions shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these terms or your participation in our programs shall be subject to the exclusive jurisdiction of the courts in Osun State, Nigeria.
              </p>
            </div>

            <div className="space-y-3 border-t border-border pt-6">
              <h2 className="text-xl font-bold text-foreground">8. Changes to Terms</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                We reserve the right to revise these Terms & Conditions at any time without notice. By using this website or participating in our programs, you agree to be bound by the then-current version of these terms.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
