"use client";

import { processIntro, processSteps } from "@/lib/data";
import { processImages } from "@/lib/images";
import { SectionImage } from "@/components/ui/section-image";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations/fade-in";

export function Process() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-xl">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              our process
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              Our Work Process
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted md:text-base">
              {processIntro}
            </p>
          </div>
        </FadeIn>

        <Stagger className="relative mt-14 space-y-0">
          <div className="pointer-events-none absolute bottom-0 left-[1.15rem] top-0 hidden w-px bg-border md:left-[1.35rem] lg:block" />
          {processSteps.map((step, index) => {
            const image = processImages[index];
            const reverse = index % 2 === 1;
            return (
              <StaggerItem key={step.step}>
                <div
                  className={`grid items-center gap-6 border-t border-border py-8 lg:grid-cols-2 lg:gap-14 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="flex gap-5">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary bg-white font-display text-xs font-bold text-primary">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight text-secondary">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {image && (
                    <div className="overflow-hidden">
                      <SectionImage
                        {...image}
                        className="aspect-[16/10]"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
