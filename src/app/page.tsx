import { Hero } from "@/components/sections/hero";
import { Capabilities } from "@/components/sections/capabilities";
import { ValueProp } from "@/components/sections/value-prop";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Brands } from "@/components/sections/brands";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CTA } from "@/components/sections/cta";
import { Testimonials } from "@/components/sections/testimonials";
import { getLatestBlogs } from "@/lib/sanity/blog-service";

export const revalidate = 60;

export default async function HomePage() {
  const latestBlogs = await getLatestBlogs(3);

  return (
    <>
      <Hero />
      <Capabilities />
      <ValueProp />
      <Services />
      <Process />
      <Brands />
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview posts={latestBlogs} />
      <CTA />
    </>
  );
}
