import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { AboutPageSections } from "@/components/sections/about-page-sections";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Process } from "@/components/sections/process";
import { CTA } from "@/components/sections/cta";
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
        variant="banner"
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.intro}
        image={about.heroImage}
        showCtas={false}
        showBrandName={false}
        imageUnoptimized
      />

      <AboutPageSections about={about} />

      <div className="border-t border-border/80">
        <WhyChooseUs />
      </div>
      <Process />
      <CTA />
    </>
  );
}
