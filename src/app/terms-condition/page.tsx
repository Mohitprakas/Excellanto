import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Excellanto Ventures services and website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms carefully before using our website or engaging our services."
      />
      <section className="section-padding bg-white">
        <div className="container-xl max-w-3xl space-y-6">
          <FadeIn>
            <p className="text-base leading-relaxed text-muted">
              By accessing {siteConfig.url} or engaging Excellanto Ventures, you agree to these
              terms. Our services include AI-powered software solutions, digital marketing,
              workflow automation, and staffing.
            </p>
            <h2 className="font-display mt-8 text-xl font-bold text-secondary">
              Use of website
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Content on this website is for general information. You may not misuse the site,
              attempt unauthorized access, or use our materials without permission.
            </p>
            <h2 className="font-display mt-8 text-xl font-bold text-secondary">
              Services & engagements
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Specific project scopes, timelines, and fees are defined in separate agreements.
              Nothing on this website constitutes a binding offer unless confirmed in writing.
            </p>
            <h2 className="font-display mt-8 text-xl font-bold text-secondary">Contact</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Questions about these terms? Reach us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary">
                {siteConfig.email}
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
