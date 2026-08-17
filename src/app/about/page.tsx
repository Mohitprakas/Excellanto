import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Process } from "@/components/sections/process";
import { CTA } from "@/components/sections/cta";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionImage } from "@/components/ui/section-image";
import { getAboutPage } from "@/lib/cms/content";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutPage();
  return {
    title: about.seoTitle || about.eyebrow,
    description: about.seoDescription || about.intro,
  };
}

export default async function AboutPage() {
  const about = await getAboutPage();

  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.intro}
        image={about.heroImage}
      />

      <section className="section-padding bg-white">
        <div className="container-xl grid gap-4 md:grid-cols-3">
          {[about.mission, about.vision, about.values].map((item, i) => (
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
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-xl grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <SectionImage
                {...about.strengthsImage}
                className="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
              {about.strengthsEyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              {about.strengthsTitle}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">{about.strengthsBody}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-xl grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <div className="pro-card p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                {about.techEyebrow}
              </p>
              <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-secondary">
                {about.techTitle}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted">{about.techBody}</p>
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {about.techHighlights.map((item) => (
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
                {...about.techImage}
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
