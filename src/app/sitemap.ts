import type { MetadataRoute } from "next";
import { services, siteConfig } from "@/lib/data";
import { getAllPublishedBlogs } from "@/lib/sanity/blog-service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/about",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-condition",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogs = await getAllPublishedBlogs();
  const blogRoutes = blogs.map((b) => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
