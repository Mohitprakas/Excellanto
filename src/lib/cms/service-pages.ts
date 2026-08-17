import { industries, mobileAppPage, websiteDevPage } from "@/lib/data";
import { brandLogos, mobileAppImages, websiteDevImages } from "@/lib/images";
import { getCmsIcon } from "./icons";
import { pickArray, pickText, resolveCmsImage, type CmsImageValue } from "./resolve";
import type { CmsService } from "./types";

type Raw = Record<string, unknown>;

export function getMobilePageContent(service?: CmsService | null) {
  const raw = (service?.mobile ?? {}) as Raw;
  const why = Array.isArray(raw.mobileWhyChoose)
    ? (raw.mobileWhyChoose as { title?: string; body?: string }[]).map((item, i) => ({
        title: pickText(item.title, mobileAppPage.whyChoose[i]?.title ?? ""),
        body: pickText(item.body, mobileAppPage.whyChoose[i]?.body ?? ""),
      }))
    : mobileAppPage.whyChoose;

  const steps = Array.isArray(raw.mobileProcessSteps)
    ? (raw.mobileProcessSteps as { step?: string; title?: string; body?: string; image?: CmsImageValue }[]).map(
        (item, i) => ({
          step: pickText(item.step, mobileAppPage.processSteps[i]?.step ?? ""),
          title: pickText(item.title, mobileAppPage.processSteps[i]?.title ?? ""),
          body: pickText(item.body, mobileAppPage.processSteps[i]?.body ?? ""),
          image: resolveCmsImage(item.image, mobileAppImages.process[i] ?? mobileAppImages.hero),
        })
      )
    : mobileAppPage.processSteps.map((step, i) => ({
        ...step,
        image: mobileAppImages.process[i],
      }));

  const industryItems = Array.isArray(raw.mobileIndustries)
    ? (raw.mobileIndustries as { title?: string; icon?: string }[]).map((item, i) => ({
        title: pickText(item.title, industries[i]?.title ?? ""),
        icon: getCmsIcon(item.icon),
      }))
    : industries;

  return {
    heroTitle: pickText(raw.mobileHeroTitle as string, mobileAppPage.heroTitle),
    heroEyebrow: pickText(raw.mobileHeroEyebrow as string, service?.bannerEyebrow || "Mobile App Development"),
    heroImage: resolveCmsImage(raw.mobileHeroImage as CmsImageValue, mobileAppImages.hero),
    whyChoose: pickArray(why, mobileAppPage.whyChoose),
    processEyebrow: pickText(raw.mobileProcessEyebrow as string, mobileAppPage.processEyebrow),
    processTitle: pickText(raw.mobileProcessTitle as string, mobileAppPage.processTitle),
    processIntro: pickText(raw.mobileProcessIntro as string, mobileAppPage.processIntro),
    processSteps: pickArray(steps, steps),
    brandsTitle: pickText(raw.mobileBrandsTitle as string, mobileAppPage.brandsTitle),
    industriesEyebrow: pickText(raw.mobileIndustriesEyebrow as string, mobileAppPage.industriesEyebrow),
    industriesTitle: pickText(raw.mobileIndustriesTitle as string, mobileAppPage.industriesTitle),
    industriesIntro: pickText(raw.mobileIndustriesIntro as string, mobileAppPage.industriesIntro),
    industriesImage: resolveCmsImage(raw.mobileIndustriesImage as CmsImageValue, mobileAppImages.industries),
    industries: industryItems,
    brandsVisual: mobileAppImages.brandsVisual,
    brandLogos,
  };
}

export function getWebsitePageContent(service?: CmsService | null) {
  const raw = (service?.website ?? {}) as Raw;
  const offerings = Array.isArray(raw.websiteOfferings)
    ? (raw.websiteOfferings as { title?: string; body?: string; image?: CmsImageValue }[]).map((item, i) => ({
        title: pickText(item.title, websiteDevPage.offerings[i]?.title ?? ""),
        body: pickText(item.body, websiteDevPage.offerings[i]?.body ?? ""),
        image: resolveCmsImage(item.image, websiteDevImages.offerings[i] ?? websiteDevImages.hero),
      }))
    : websiteDevPage.offerings.map((item, i) => ({
        ...item,
        image: websiteDevImages.offerings[i],
      }));

  const why = Array.isArray(raw.websiteWhyChoose)
    ? (raw.websiteWhyChoose as { title?: string; body?: string }[]).map((item, i) => ({
        title: pickText(item.title, websiteDevPage.whyChoose[i]?.title ?? ""),
        body: pickText(item.body, websiteDevPage.whyChoose[i]?.body ?? ""),
      }))
    : websiteDevPage.whyChoose;

  const steps = Array.isArray(raw.websiteProcessSteps)
    ? (raw.websiteProcessSteps as { step?: string; title?: string; body?: string; image?: CmsImageValue }[]).map(
        (item, i) => ({
          step: pickText(item.step, websiteDevPage.processSteps[i]?.step ?? ""),
          title: pickText(item.title, websiteDevPage.processSteps[i]?.title ?? ""),
          body: pickText(item.body, websiteDevPage.processSteps[i]?.body ?? ""),
          image: resolveCmsImage(item.image, websiteDevImages.process[i] ?? websiteDevImages.hero),
        })
      )
    : websiteDevPage.processSteps.map((step, i) => ({
        ...step,
        image: websiteDevImages.process[i],
      }));

  return {
    heroTitle: pickText(raw.websiteHeroTitle as string, websiteDevPage.heroTitle),
    heroEyebrow: pickText(raw.websiteHeroEyebrow as string, service?.bannerEyebrow || "Website Development"),
    heroImage: resolveCmsImage(raw.websiteHeroImage as CmsImageValue, websiteDevImages.hero),
    offeringsTitle: pickText(raw.websiteOfferingsTitle as string, websiteDevPage.offeringsTitle),
    offerings: pickArray(offerings, offerings),
    whyChooseTitle: pickText(raw.websiteWhyTitle as string, websiteDevPage.whyChooseTitle),
    whyChoose: pickArray(why, websiteDevPage.whyChoose),
    processSteps: pickArray(steps, steps),
    redesignEyebrow: pickText(raw.websiteRedesignEyebrow as string, websiteDevPage.redesignEyebrow),
    redesignTitle: pickText(raw.websiteRedesignTitle as string, websiteDevPage.redesignTitle),
    redesignItems: pickArray(raw.websiteRedesignItems as string[], [...websiteDevPage.redesignItems]),
    redesignImage: resolveCmsImage(raw.websiteRedesignImage as CmsImageValue, websiteDevImages.redesign),
    highlights: pickArray(raw.websiteHighlights as string[], [...websiteDevPage.highlights]),
    highlightsImage: resolveCmsImage(raw.websiteHighlightsImage as CmsImageValue, websiteDevImages.highlights),
    discoverMore: pickText(raw.websiteDiscoverMore as string, websiteDevPage.discoverMore),
  };
}
