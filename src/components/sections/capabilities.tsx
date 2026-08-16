"use client";

import { capabilities } from "@/lib/data";
import { getCapabilityImage } from "@/lib/images";
import { SectionImage } from "@/components/ui/section-image";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations/fade-in";

export function Capabilities() {
  return (
    <section className="bg-white">
      <div className="container-xl section-padding !pb-8">
        <FadeIn>
          <div className="flex flex-col gap-3 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                Digital Transformation
              </p>
              <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight text-secondary md:text-4xl">
                Streamlining Operations Accelerating Outcomes
              </h2>
            </div>
          </div>
        </FadeIn>
      </div>

      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item, index) => {
          const Icon = item.icon;
          const image = getCapabilityImage(item.title);
          return (
            <StaggerItem key={item.title}>
              <article className="group relative min-h-[280px] overflow-hidden border-t border-border sm:border-l sm:first:border-l-0 lg:min-h-[340px]">
                <SectionImage
                  {...image}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.05]"
                  overlay
                  overlayClassName="bg-gradient-to-t from-[#0b1220]/90 via-[#0b1220]/45 to-transparent"
                />
                <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6 lg:min-h-[340px] lg:p-7">
                  <span className="mb-auto text-[11px] font-semibold tracking-[0.14em] text-white/55">
                    0{index + 1}
                  </span>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white backdrop-blur-sm">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
