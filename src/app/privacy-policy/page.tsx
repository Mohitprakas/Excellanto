import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Excellanto Ventures.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Excellanto Ventures collects, uses, and protects your information."
      />
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl space-y-6">
          <FadeIn>
            <p className="text-base leading-relaxed text-muted">
              Excellanto Ventures (&quot;{siteConfig.name}&quot;) respects your privacy. This
              policy explains what information we collect when you use our website or contact
              us, and how we use it to deliver IT solutions, digital marketing, and related
              services.
            </p>
            <h2 className="font-display mt-8 text-xl font-bold text-secondary">
              Information we collect
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              When you submit a contact form or reach out by phone or email, we may collect
              your name, email address, phone number, company details, and message content.
            </p>
            <h2 className="font-display mt-8 text-xl font-bold text-secondary">
              How we use information
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              We use your information to respond to inquiries, provide proposals, improve our
              services, and communicate about projects. We do not sell your personal data.
            </p>
            <h2 className="font-display mt-8 text-xl font-bold text-secondary">Contact</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              For privacy questions, email{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary">
                {siteConfig.email}
              </a>{" "}
              or call {siteConfig.phone}.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
