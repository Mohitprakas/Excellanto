"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { brandLogos, sectionImages } from "@/lib/images";
import { brandsHeading } from "@/lib/data";
import { SectionImage } from "@/components/ui/section-image";

export function Brands() {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 md:py-20">
      <SectionImage
        {...sectionImages.brands}
        className="absolute inset-0 opacity-25"
        sizes="100vw"
        overlay
        overlayClassName="bg-[#0b1220]/75"
      />
      <div className="container-xl relative">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            Brands
          </p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            {brandsHeading}
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {brandLogos.map((logo) => (
              <div
                key={logo.src}
                className="flex h-14 items-center border border-white/15 bg-white/5 px-5 backdrop-blur-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-7 w-auto object-contain brightness-0 invert opacity-80"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
