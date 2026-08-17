"use client";

import { FadeIn, Stagger, StaggerItem } from "@/components/animations/fade-in";
import { useCms } from "@/lib/cms/provider";

export function Testimonials() {
  const { homepage } = useCms();
  const testimonials = homepage.testimonials;
  if (!testimonials.length) return null;

  return (
    <section className="section-padding bg-surface">
      <div className="container-xl">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            {homepage.testimonialsEyebrow}
          </p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight text-secondary md:text-4xl">
            {homepage.testimonialsTitle}
          </h2>
        </FadeIn>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerItem key={`${item.name}-${item.quote.slice(0, 24)}`}>
              <article className="pro-card h-full p-6">
                <p className="text-sm leading-7 text-muted">&ldquo;{item.quote}&rdquo;</p>
                <p className="font-display mt-5 text-sm font-bold text-secondary">{item.name}</p>
                {item.role ? <p className="mt-1 text-xs text-muted">{item.role}</p> : null}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
