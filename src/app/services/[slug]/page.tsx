import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";
import { getServiceImage } from "@/lib/images";
import { PageHero } from "@/components/ui/page-hero";
import { SectionImage } from "@/components/ui/section-image";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CTA } from "@/components/sections/cta";
import { FadeIn } from "@/components/animations/fade-in";
import { MobileAppServicePage } from "@/components/sections/mobile-app-service-page";
import { WebsiteDevServicePage } from "@/components/sections/website-dev-service-page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };
  if (slug === "mobile-app-development") {
    return {
      title: "Mobile App Development Services, Build App with Excellanto",
      description: service.description,
    };
  }
  if (slug === "website-development") {
    return {
      title: "Website Development Services, PHP, Wordpress, Try Excellanto",
      description: service.description,
    };
  }
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  if (slug === "mobile-app-development") {
    return <MobileAppServicePage />;
  }

  if (slug === "website-development") {
    return <WebsiteDevServicePage />;
  }

  const Icon = service.icon;
  const image = getServiceImage(service.slug);

  return (
    <>
      <PageHero
        variant="banner"
        eyebrow="Service"
        title={service.title}
        description={service.description}
        image={image}
      />

      <section className="section-padding bg-white">
        <div className="container-xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <FadeIn direction="left">
            <Link
              href="/services"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Services
            </Link>
            <SectionImage
              {...image}
              className="mb-8 aspect-[16/10] w-full"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="mb-6 flex h-11 w-11 items-center justify-center border border-border bg-surface text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              {service.detailIntro ?? service.description}
            </p>
            <ul className="mt-8 space-y-3.5">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="text-sm font-medium text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <MagneticButton href="/contact" strength={0.15}>
                Let’s Talk
              </MagneticButton>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="border border-border bg-surface p-6 md:p-7">
              <h3 className="font-display text-lg font-bold tracking-tight text-secondary">
                Contact Us
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Get AI Automation Solutions for Your Business
              </p>
              <div className="mt-6">
                <MagneticButton href="/contact" strength={0.12}>
                  Message Now
                </MagneticButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA />
    </>
  );
}
