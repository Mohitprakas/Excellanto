import { industries, mobileAppPage, seoCognitionPage, socialMediaIntelligencePage, staffingRecruitmentPage, websiteDevPage } from "@/lib/data";
import {
  brandLogos,
  mobileAppImages,
  seoCognitionImages,
  socialMediaImages,
  staffingRecruitmentImages,
  websiteDevImages,
} from "@/lib/images";
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

export function getSocialMediaPageContent(service?: CmsService | null) {
  const page = socialMediaIntelligencePage;
  const raw = (service?.socialMedia ?? {}) as Raw;

  const featureSections = Array.isArray(raw.socialFeatureSections)
    ? (raw.socialFeatureSections as { title?: string; intro?: string; bullets?: string[]; result?: string }[]).map(
        (item, i) => ({
          title: pickText(item.title, page.featureSections[i]?.title ?? ""),
          intro: pickText(item.intro, page.featureSections[i]?.intro ?? ""),
          bullets: pickArray(item.bullets, page.featureSections[i]?.bullets ?? []),
          result: pickText(item.result, page.featureSections[i]?.result ?? ""),
        })
      )
    : page.featureSections;

  const processSteps = Array.isArray(raw.socialProcessSteps)
    ? (raw.socialProcessSteps as { step?: string; title?: string; body?: string }[]).map((item, i) => ({
        step: pickText(item.step, page.process.steps[i]?.step ?? ""),
        title: pickText(item.title, page.process.steps[i]?.title ?? ""),
        body: pickText(item.body, page.process.steps[i]?.body ?? ""),
      }))
    : page.process.steps;

  const sectionImages = [
    socialMediaImages.contentStrategy,
    socialMediaImages.realtime,
    socialMediaImages.competitive,
  ] as const;

  return {
    heroTitle: pickText(raw.socialHeroTitle as string, page.heroTitle),
    heroEyebrow: pickText(raw.socialHeroEyebrow as string, service?.bannerEyebrow || "Services"),
    heroImage: resolveCmsImage(raw.socialHeroImage as CmsImageValue, socialMediaImages.hero),
    intro: pickArray(raw.socialIntro as string[], [...page.intro]),
    chooseUs: {
      eyebrow: pickText(raw.socialChooseEyebrow as string, page.chooseUs.eyebrow),
      title: pickText(raw.socialChooseTitle as string, page.chooseUs.title),
      body: pickText(raw.socialChooseBody as string, page.chooseUs.body),
      bullets: pickArray(raw.socialChooseBullets as string[], [...page.chooseUs.bullets]),
      result: pickText(raw.socialChooseResult as string, page.chooseUs.result),
      image: resolveCmsImage(raw.socialChooseImage as CmsImageValue, socialMediaImages.intelligenceHub),
    },
    audience: {
      eyebrow: pickText(raw.socialAudienceEyebrow as string, page.audience.eyebrow),
      body: pickText(raw.socialAudienceBody as string, page.audience.body),
      leadIn: pickText(raw.socialAudienceLeadIn as string, page.audience.leadIn),
      bullets: pickArray(raw.socialAudienceBullets as string[], [...page.audience.bullets]),
      result: pickText(raw.socialAudienceResult as string, page.audience.result),
      image: resolveCmsImage(raw.socialAudienceImage as CmsImageValue, socialMediaImages.audience),
    },
    featureSections: featureSections.map((section, index) => ({
      ...section,
      image: sectionImages[index] ?? socialMediaImages.contentStrategy,
    })),
    process: {
      eyebrow: pickText(raw.socialProcessEyebrow as string, page.process.eyebrow),
      title: pickText(raw.socialProcessTitle as string, page.process.title),
      intro: pickText(raw.socialProcessIntro as string, page.process.intro),
      steps: pickArray(processSteps, processSteps),
      image: resolveCmsImage(raw.socialProcessImage as CmsImageValue, socialMediaImages.process),
    },
    impact: {
      title: pickText(raw.socialImpactTitle as string, page.impact.title),
      intro: pickText(raw.socialImpactIntro as string, page.impact.intro),
      bullets: pickArray(raw.socialImpactBullets as string[], [...page.impact.bullets]),
      result: pickText(raw.socialImpactResult as string, page.impact.result),
      image: resolveCmsImage(raw.socialImpactImage as CmsImageValue, socialMediaImages.impact),
    },
    idealFor: {
      eyebrow: pickText(raw.socialIdealEyebrow as string, page.idealFor.eyebrow),
      title: pickText(raw.socialIdealTitle as string, page.idealFor.title),
      intro: pickText(raw.socialIdealIntro as string, page.idealFor.intro),
      bullets: pickArray(raw.socialIdealBullets as string[], [...page.idealFor.bullets]),
      result: pickText(raw.socialIdealResult as string, page.idealFor.result),
      image: resolveCmsImage(raw.socialIdealImage as CmsImageValue, socialMediaImages.idealFor),
    },
    cta: {
      title: pickText(raw.socialCtaTitle as string, page.cta.title),
      body: pickText(raw.socialCtaBody as string, page.cta.body),
      closingTitle: pickText(raw.socialCtaClosingTitle as string, page.cta.closingTitle),
      tagline: pickText(raw.socialCtaTagline as string, page.cta.tagline),
      subtext: pickText(raw.socialCtaSubtext as string, page.cta.subtext),
    },
  };
}

export function getSeoCognitionPageContent(service?: CmsService | null) {
  const page = seoCognitionPage;
  const raw = (service?.seoCognition ?? {}) as Raw;

  const pillars = Array.isArray(raw.seoPillars)
    ? (raw.seoPillars as {
        title?: string;
        intro?: string;
        leadIn?: string;
        bullets?: string[];
        result?: string;
      }[]).map((item, i) => ({
        title: pickText(item.title, page.pillars[i]?.title ?? ""),
        intro: pickText(item.intro, page.pillars[i]?.intro ?? ""),
        leadIn: pickText(item.leadIn, page.pillars[i]?.leadIn ?? ""),
        bullets: pickArray(item.bullets, page.pillars[i]?.bullets ?? []),
        result: pickText(item.result, page.pillars[i]?.result ?? ""),
      }))
    : page.pillars;

  const pillarImages = [seoCognitionImages.onPage, seoCognitionImages.technical, seoCognitionImages.content];

  return {
    heroTitle: pickText(raw.seoHeroTitle as string, page.heroTitle),
    heroEyebrow: pickText(raw.seoHeroEyebrow as string, service?.bannerEyebrow || "Services"),
    heroImage: resolveCmsImage(raw.seoHeroImage as CmsImageValue, seoCognitionImages.hero),
    intro: pickArray(raw.seoIntro as string[], [...page.intro]),
    approach: {
      eyebrow: pickText(raw.seoApproachEyebrow as string, page.approach.eyebrow),
      title: pickText(raw.seoApproachTitle as string, page.approach.title),
      leadIn: pickText(raw.seoApproachLeadIn as string, page.approach.leadIn),
      bullets: pickArray(raw.seoApproachBullets as string[], [...page.approach.bullets]),
      result: pickText(raw.seoApproachResult as string, page.approach.result),
      image: resolveCmsImage(raw.seoApproachImage as CmsImageValue, seoCognitionImages.strategy),
    },
    keywords: {
      eyebrow: pickText(raw.seoKeywordsEyebrow as string, page.keywords.eyebrow),
      title: pickText(raw.seoKeywordsTitle as string, page.keywords.title),
      body: pickText(raw.seoKeywordsBody as string, page.keywords.body),
      leadIn: pickText(raw.seoKeywordsLeadIn as string, page.keywords.leadIn),
      bullets: pickArray(raw.seoKeywordsBullets as string[], [...page.keywords.bullets]),
      image: resolveCmsImage(raw.seoKeywordsImage as CmsImageValue, seoCognitionImages.keywords),
    },
    pillars: pillars.map((pillar, index) => ({
      ...pillar,
      image: pillarImages[index] ?? seoCognitionImages.onPage,
    })),
    accentImage: resolveCmsImage(raw.seoAccentImage as CmsImageValue, seoCognitionImages.accent),
    cta: {
      title: pickText(raw.seoCtaTitle as string, page.cta.title),
      body: pickText(raw.seoCtaBody as string, page.cta.body),
      closingTitle: pickText(raw.seoCtaClosingTitle as string, page.cta.closingTitle),
      tagline: pickText(raw.seoCtaTagline as string, page.cta.tagline),
      subtext: pickText(raw.seoCtaSubtext as string, page.cta.subtext),
    },
  };
}

export function getStaffingRecruitmentPageContent(service?: CmsService | null) {
  const page = staffingRecruitmentPage;
  const raw = (service?.staffingRecruitment ?? {}) as Raw;

  const principles = Array.isArray(raw.staffPrinciples)
    ? (raw.staffPrinciples as { label?: string; body?: string }[]).map((item, i) => ({
        label: pickText(item.label, page.principles[i]?.label ?? ""),
        body: pickText(item.body, page.principles[i]?.body ?? ""),
      }))
    : page.principles;

  const expertiseDomains = Array.isArray(raw.staffExpertiseDomains)
    ? (raw.staffExpertiseDomains as { title?: string; body?: string }[]).map((item, i) => ({
        title: pickText(item.title, page.expertise.domains[i]?.title ?? ""),
        body: pickText(item.body, page.expertise.domains[i]?.body ?? ""),
      }))
    : page.expertise.domains;

  const processSteps = Array.isArray(raw.staffProcessSteps)
    ? (raw.staffProcessSteps as { title?: string; body?: string }[]).map((item, i) => ({
        title: pickText(item.title, page.process.steps[i]?.title ?? ""),
        body: pickText(item.body, page.process.steps[i]?.body ?? ""),
      }))
    : page.process.steps;

  const segments = Array.isArray(raw.staffIdealSegments)
    ? (raw.staffIdealSegments as { title?: string; body?: string }[]).map((item, i) => ({
        title: pickText(item.title, page.idealFor.segments[i]?.title ?? ""),
        body: pickText(item.body, page.idealFor.segments[i]?.body ?? ""),
      }))
    : page.idealFor.segments;

  return {
    heroTitle: pickText(raw.staffHeroTitle as string, page.heroTitle),
    heroEyebrow: pickText(raw.staffHeroEyebrow as string, service?.bannerEyebrow || "Talent Solutions"),
    heroImage: resolveCmsImage(raw.staffHeroImage as CmsImageValue, staffingRecruitmentImages.hero),
    intro: pickArray(raw.staffIntro as string[], [...page.intro]),
    principles,
    approach: {
      eyebrow: pickText(raw.staffApproachEyebrow as string, page.approach.eyebrow),
      paragraphs: pickArray(raw.staffApproachParagraphs as string[], [...page.approach.paragraphs]),
      result: pickText(raw.staffApproachResult as string, page.approach.result),
      image: resolveCmsImage(raw.staffApproachImage as CmsImageValue, staffingRecruitmentImages.approach),
    },
    expertise: {
      eyebrow: pickText(raw.staffExpertiseEyebrow as string, page.expertise.eyebrow),
      intro: pickText(raw.staffExpertiseIntro as string, page.expertise.intro),
      domains: expertiseDomains,
      image: resolveCmsImage(raw.staffExpertiseImage as CmsImageValue, staffingRecruitmentImages.expertise),
    },
    process: {
      title: pickText(raw.staffProcessTitle as string, page.process.title),
      intro: pickText(raw.staffProcessIntro as string, page.process.intro),
      steps: processSteps,
      image: resolveCmsImage(raw.staffProcessImage as CmsImageValue, staffingRecruitmentImages.process),
    },
    idealFor: {
      title: pickText(raw.staffIdealTitle as string, page.idealFor.title),
      intro: pickText(raw.staffIdealIntro as string, page.idealFor.intro),
      segments: segments.map((segment, index) => ({
        ...segment,
        image: staffingRecruitmentImages.segments[index] ?? staffingRecruitmentImages.hero,
      })),
      result: pickText(raw.staffIdealResult as string, page.idealFor.result),
    },
    impact: {
      title: pickText(raw.staffImpactTitle as string, page.impact.title),
      intro: pickArray(raw.staffImpactIntro as string[], [...page.impact.intro]),
      bullets: pickArray(raw.staffImpactBullets as string[], [...page.impact.bullets]),
      image: resolveCmsImage(raw.staffImpactImage as CmsImageValue, staffingRecruitmentImages.impact),
    },
    cta: {
      title: pickText(raw.staffCtaTitle as string, page.cta.title),
      body: pickText(raw.staffCtaBody as string, page.cta.body),
      closingTitle: pickText(raw.staffCtaClosingTitle as string, page.cta.closingTitle),
      tagline: pickText(raw.staffCtaTagline as string, page.cta.tagline),
      subtext: pickText(raw.staffCtaSubtext as string, page.cta.subtext),
      buttonLabel: pickText(raw.staffCtaButtonLabel as string, page.cta.buttonLabel),
    },
  };
}
