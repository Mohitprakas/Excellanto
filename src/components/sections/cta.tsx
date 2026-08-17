"use client";

import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionImage } from "@/components/ui/section-image";
import { useCms } from "@/lib/cms/provider";

export function CTA() {
  const { homepage } = useCms();
  const cta = homepage.cta;

  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-20">
      <SectionImage
        {...cta.image}
        className="absolute inset-0 opacity-20"
        sizes="100vw"
        overlay
        overlayClassName="bg-primary/70"
      />
      <div className="container-xl relative">
        <FadeIn>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                {cta.eyebrow}
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {cta.title}
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <MagneticButton
                href={cta.primary.href}
                size="lg"
                strength={0.1}
                className="!bg-white !text-secondary hover:!bg-white/90"
              >
                {cta.primary.label}
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                href={cta.secondary.href}
                size="lg"
                strength={0.08}
                className="!border-white/35 !bg-transparent !text-white hover:!bg-white/10"
              >
                {cta.secondary.label}
              </MagneticButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
