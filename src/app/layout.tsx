import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CmsProvider } from "@/lib/cms/provider";
import { getCmsBundle, getSiteSettings } from "@/lib/cms/content";
import { defaultSettings } from "@/lib/cms/defaults";
import "./globals.css";

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = await getSiteSettings();
  const title = siteConfig.seoTitle || `${siteConfig.name} | AI-Powered IT Solutions & Staffing`;
  const description = siteConfig.seoDescription || siteConfig.description;

  return {
    metadataBase: new URL(siteConfig.url || defaultSettings.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: siteConfig.seoKeywords?.length
      ? siteConfig.seoKeywords
      : defaultSettings.seoKeywords,
    authors: [{ name: siteConfig.seoAuthor || defaultSettings.seoAuthor || siteConfig.name }],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", type: "image/png", sizes: "32x32" },
        { url: "/images/excellanto-favicon.png", type: "image/png", sizes: "78x78" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cms = await getCmsBundle();

  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <CmsProvider value={cms}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
          >
            {cms.settings.skipToContent}
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </CmsProvider>
      </body>
    </html>
  );
}
