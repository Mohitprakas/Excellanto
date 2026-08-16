"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FadeIn } from "@/components/animations/fade-in";
import { heroCopy } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#060912] pt-20 md:pt-24">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-10%,rgba(59,130,246,0.28),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_35%_at_50%_70%,rgba(37,99,235,0.08),transparent_60%)]" />

      {/* Top glowing arc */}
      <div className="pointer-events-none absolute left-1/2 top-16 h-[34vw] w-[110vw] max-w-6xl -translate-x-1/2 md:top-20 md:h-[28rem]">
        <div className="hero-glow-arc absolute inset-0" />
        <div className="absolute left-1/2 top-[8%] h-40 w-[70%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.35),transparent_70%)] blur-2xl" />
      </div>

      {/* Soft particles under CTAs area */}
      <div className="pointer-events-none absolute inset-x-0 top-[42%] h-40">
        {[18, 28, 38, 48, 58, 68, 78].map((left, i) => (
          <motion.span
            key={left}
            className="absolute h-1 w-1 rounded-full bg-sky-300/60"
            style={{ left: `${left}%`, top: `${20 + (i % 3) * 18}%` }}
            animate={{ opacity: [0.15, 0.85, 0.15], y: [0, -8, 0] }}
            transition={{
              duration: 3 + i * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Content block — same vertical order as reference */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-5 pt-16 text-center sm:pt-20 md:pt-24">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-[#0b1220]/70 px-3.5 py-1.5 shadow-[0_0_24px_rgba(56,189,248,0.12)] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-sky-300" />
            <span className="text-[12px] font-medium tracking-wide text-sky-100/90">
              {heroCopy.eyebrow}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 className="mt-7 max-w-4xl text-balance text-[2rem] font-bold leading-[1.12] tracking-[-0.04em] sm:text-5xl md:text-[3.5rem] md:leading-[1.08]">
            <span className="text-white">AI Powered IT Solutions &amp; </span>
            <span className="bg-gradient-to-b from-sky-200 to-sky-400 bg-clip-text text-transparent">
              Staffing
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-slate-300/90 md:text-base md:leading-8">
            {heroCopy.body}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3">
            <MagneticButton
              href="/contact"
              size="lg"
              strength={0.1}
              className="!h-11 !rounded-full !border-0 !bg-gradient-to-b !from-[#dbeafe] !to-[#7dd3fc] !px-6 !text-sm !font-semibold !text-slate-900 !shadow-[0_0_32px_rgba(56,189,248,0.4)] hover:!from-white hover:!to-sky-200"
            >
              {heroCopy.primaryCta}
            </MagneticButton>
            <MagneticButton
              href="/contact"
              size="lg"
              strength={0.08}
              className="!h-11 !rounded-full !border !border-white/20 !bg-transparent !px-6 !text-sm !font-semibold !text-white hover:!bg-white/[0.04]"
            >
              {heroCopy.secondaryCta}
            </MagneticButton>
          </div>
        </FadeIn>
      </div>

      {/* Bottom product / dashboard — same as reference */}
      <div className="relative z-10 mx-auto mt-12 w-full max-w-5xl px-4 sm:mt-14 md:mt-16 md:px-6">
        <div className="pointer-events-none absolute -top-8 left-1/2 h-20 w-[75%] -translate-x-1/2 rounded-full bg-sky-400/25 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-10 top-0 z-20 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />

        <motion.div
          className="hero-dashboard-frame relative overflow-hidden rounded-t-[1.25rem] border border-white/10 border-b-0 bg-[#0a1020]"
          initial={{ y: 36, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-sky-400/30 to-transparent" />
          <div className="relative aspect-[16/9] w-full sm:aspect-[16/7.2]">
            <Image
              src="/images/ai/hero-dashboard-preview.png"
              alt={heroCopy.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060912] via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
