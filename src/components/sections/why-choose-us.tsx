"use client";

import { FadeIn, Stagger, StaggerItem } from "@/components/animations/fade-in";
import { SectionImage } from "@/components/ui/section-image";
import { whyChooseUs, whyChooseCardsIntro } from "@/lib/data";
import { sectionImages } from "@/lib/images";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <FadeIn direction="left">
            <div className="sticky top-28">
              <div className="ui-accent-bar mb-6" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                {whyChooseCardsIntro.eyebrow}
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-secondary md:text-4xl">
                {whyChooseCardsIntro.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted md:text-base">
                {whyChooseCardsIntro.body}
              </p>
              <div className="mt-8 overflow-hidden">
                <SectionImage
                  {...sectionImages.whyChooseUs}
                  className="aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="mt-8">
                <MagneticButton href="/contact" strength={0.1}>
                  Contact Us
                </MagneticButton>
              </div>
            </div>
          </FadeIn>

          <Stagger className="space-y-0">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="group grid gap-4 border-t border-border py-7 md:grid-cols-[4.5rem_1fr] md:gap-6">
                    <div className="flex items-start gap-3 md:block">
                      <span className="font-display text-3xl font-bold tracking-tight text-border transition-colors group-hover:text-primary">
                        0{i + 1}
                      </span>
                    </div>
                    <div>
                      <div className="mb-3 flex h-10 w-10 items-center justify-center border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-[18px] w-[18px]" />
                      </div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-secondary">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
