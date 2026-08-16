import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Process } from "@/components/sections/process";
import { CTA } from "@/components/sections/cta";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionImage } from "@/components/ui/section-image";
import { aboutContent } from "@/lib/data";
import { sectionImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutContent.intro,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.title}
        description={aboutContent.intro}
        image={sectionImages.aboutHero}
      />

      <section className="section-padding bg-white">
        <div className="container-xl grid gap-4 md:grid-cols-3">
          {[aboutContent.mission, aboutContent.vision, aboutContent.values].map(
            (item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <article className="pro-card h-full p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                    0{i + 1}
                  </p>
                  <h2 className="font-display mt-3 text-lg font-bold tracking-tight text-secondary">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
                </article>
              </FadeIn>
            )
          )}
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-xl grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <SectionImage
                {...sectionImages.aboutStrengths}
                className="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
              {aboutContent.strengthsEyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              {aboutContent.strengthsTitle}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              {aboutContent.strengthsBody}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-xl grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <div className="pro-card p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                {aboutContent.techEyebrow}
              </p>
              <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-secondary">
                {aboutContent.techTitle}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted">
                {aboutContent.techBody}
              </p>
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {aboutContent.techHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border bg-surface px-3.5 py-3 text-sm font-medium text-secondary"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <SectionImage
                {...sectionImages.aboutTechnology}
                className="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <WhyChooseUs />
      <Process />
      <CTA />
    </>
  );
}
