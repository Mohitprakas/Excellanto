"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FadeIn } from "@/components/animations/fade-in";
import { Hero3DScene } from "@/components/sections/hero-3d-scene";
import { useCms } from "@/lib/cms/provider";

export function Hero() {
  const { homepage } = useCms();
  const hero = homepage.hero;
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#040712] pt-20 md:pt-24">
      {/* Full-bleed 3D IT / AI scene */}
      <Hero3DScene />

      {/* Readability veil over 3D */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#040712]/35 via-[#040712]/25 to-[#040712]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-[#040712]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-5 pt-14 text-center sm:pt-16 md:pt-20">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-[#0b1220]/65 px-3.5 py-1.5 shadow-[0_0_28px_rgba(56,189,248,0.18)] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-sky-300" />
            <span className="text-[12px] font-medium tracking-wide text-sky-100/90">
              {hero.eyebrow}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 className="mt-7 max-w-4xl text-balance text-[2rem] font-bold leading-[1.12] tracking-[-0.04em] sm:text-5xl md:text-[3.5rem] md:leading-[1.08]">
            <span className="text-white">{hero.title} </span>
            <span className="bg-gradient-to-b from-sky-200 to-sky-400 bg-clip-text text-transparent">
              {hero.highlight}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-slate-200/90 md:text-base md:leading-8">
            {hero.body}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3">
            <MagneticButton
              href={hero.primaryCta.href}
              className="!h-11 !rounded-full !border-0 !bg-gradient-to-b !from-[#dbeafe] !to-[#7dd3fc] !px-6 !text-sm !font-semibold !text-slate-900 !shadow-[0_0_32px_rgba(56,189,248,0.4)] hover:!from-white hover:!to-sky-200"
            >
              {hero.primaryCta.label}
            </MagneticButton>
            <MagneticButton
              href={hero.secondaryCta.href}
              className="!h-11 !rounded-full !border !border-white/25 !bg-white/[0.04] !px-6 !text-sm !font-semibold !text-white backdrop-blur-sm hover:!bg-white/[0.08]"
            >
              {hero.secondaryCta.label}
            </MagneticButton>
          </div>
        </FadeIn>
      </div>

      {/* 3D floating product preview */}
      <div className="hero-3d-stage relative z-10 mx-auto mt-10 w-full max-w-5xl px-4 pb-0 sm:mt-12 md:mt-14 md:px-6">
        <div className="pointer-events-none absolute -top-10 left-1/2 h-28 w-[70%] -translate-x-1/2 rounded-full bg-sky-400/30 blur-3xl" />

        <motion.div
          className="relative mx-auto"
          initial={{ y: 56, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
        >
          <div className="hero-dashboard-3d relative">
            <div className="hero-dashboard-frame relative overflow-hidden rounded-t-[1.25rem] border border-white/15 border-b-0 bg-[#0a1020]/90 shadow-[0_-40px_100px_rgba(37,99,235,0.35)] backdrop-blur-sm">
              <div className="absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-sky-400/35 to-transparent" />
              <div className="pointer-events-none absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
              <div className="relative aspect-[16/9] w-full sm:aspect-[16/7.2]">
                <Image
                  src={hero.dashboardImage.src}
                  alt={hero.dashboardImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040712] via-[#040712]/20 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
