import {
  Bot,
  Cloud,
  Compass,
  TrendingUp,
  Share2,
  Search,
  Smartphone,
  Database,
  Users,
  Award,
  Headphones,
  LayoutDashboard,
  MonitorSmartphone,
  House,
  UserCheck,
  ShoppingCart,
  HeartPulse,
  Landmark,
  Globe,
  Plane,
  Building2,
  type LucideIcon,
} from "lucide-react";

/** Contact & company info from excellanto.com /contact-us/ and footer */
export const siteConfig = {
  name: "Excellanto",
  tagline: "AI Powered IT Solutions & Staffing",
  description:
    "Excellanto is at the forefront of leading the way, powering next-generation enterprises with comprehensive AI powered Software Solutions, Next Gen Digital Marketing Services and Workflow Automation end-to-end solutions, while extending our footprint as a global provider of onshore & outsourced IT services",
  phone: "+91 96677 97078",
  phoneSecondary: "+91 96677 97017",
  email: "support@excellanto.com",
  emailSecondary: "info@excellanto.com",
  url: "https://excellanto.com",
  address:
    "191-192 Neelkanth Plaza, Sant Nagar, 4th Floor East of Kailash New Delhi 110065",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://in.linkedin.com/company/excellanto",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", mega: true },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
] as const;

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  megaDescription: string;
  icon: LucideIcon;
  category: ServiceCategoryId;
  featured: boolean;
  features: string[];
  detailIntro?: string;
};

export type ServiceCategoryId =
  | "development"
  | "ai-cloud"
  | "marketing"
  | "talent";

/** Category labels used only for mega-menu grouping — titles match service groups on excellanto.com */
export const serviceCategories: {
  id: ServiceCategoryId;
  title: string;
}[] = [
  { id: "development", title: "Development" },
  { id: "ai-cloud", title: "AI, Cloud & Consulting" },
  { id: "marketing", title: "Digital Marketing" },
  { id: "talent", title: "Staffing" },
];

export const services: Service[] = [
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile App Development",
    description:
      "Why Choose Our Mobile App Development Services? We understand that every business is unique. Our expert team of developers crafts tailored mobile apps to match your specific needs and goals.",
    megaDescription: "Custom mobile apps for iOS and Android",
    icon: Smartphone,
    category: "development",
    featured: false,
    features: [
      "CUSTOM SOLUTION",
      "CUTTING EDGE TECHNOLOGY",
      "CROSS PLATFORM EXPERTISE",
      "AGILE DEVELOPMENT",
      "QUALITY ASSURANCE",
    ],
    detailIntro:
      "At Excellanto, we believe that exceptional mobile app development goes far beyond writing lines of code — it’s about understanding your business, your audience, and your vision.",
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Website Development",
    description:
      "Our Offerings Include Responsive Website Design, Custom Web Application Development, CMS Development, API Integration, and UI/UX Design Services.",
    megaDescription: "Responsive websites, CMS & UI/UX",
    icon: MonitorSmartphone,
    category: "development",
    featured: false,
    features: [
      "Responsive Website Design",
      "Custom Web Application Development",
      "CMS Development",
      "API Integration",
      "UI/UX Design Services",
      "Website Redesign & Migration",
    ],
    detailIntro:
      "Mobile-friendly designs that adapt to all screen sizes. Tailored solutions for your unique business needs.",
  },
  {
    slug: "ai-driven-operations-automation",
    title: "AI-Driven Operations Automation",
    shortTitle: "AI-Driven Operations Automation",
    description:
      "Leverage AI-powered automation to streamline business workflows, reduce manual processes, and improve operational efficiency. Our intelligent systems enable faster decision-making, optimize routine operations, and provide predictive insights that help organizations build scalable, high-performance digital operations.",
    megaDescription: "AI workflows & process automation",
    icon: Bot,
    category: "ai-cloud",
    featured: true,
    features: [
      "AI-based workflow automation",
      "Intelligent process optimization",
      "Robotic Process Automation (RPA)",
      "Enterprise system integration (ERP, CRM, APIs)",
    ],
    detailIntro:
      "Turning everyday operations into intelligent, automated systems. Traditional automation focuses only on repetitive tasks, but modern businesses require much more than that. Our AI-driven approach ensures that your operations are not only automated but also capable of learning, adapting, and improving over time.",
  },
  {
    slug: "intelligent-cloud-management",
    title: "Intelligent Cloud Management",
    shortTitle: "Intelligent Cloud Management",
    description:
      "Optimize enterprise cloud infrastructure with AI-driven resource management and performance monitoring. Our intelligent cloud solutions improve scalability, strengthen security, and reduce operational costs while delivering reliable performance across hybrid and multi-cloud environments.",
    megaDescription: "Hybrid & multi-cloud management",
    icon: Cloud,
    category: "ai-cloud",
    featured: true,
    features: [
      "Multi-cloud & hybrid environment management",
      "Cloud infrastructure optimization",
      "Resource allocation & cost control",
      "Continuous performance monitoring",
      "Security management & compliance support",
      "Automation of cloud operations",
    ],
    detailIntro:
      "Bringing structure and control to complex cloud environments. At Excellanto, we deliver Intelligent Cloud Management solutions that bring clarity, control, and performance to your cloud ecosystem while supporting long-term business growth.",
  },
  {
    slug: "smart-home-automation-powered-by-ai-llm-home-assistant",
    title: "Smart Home Automation Powered by AI & LLM Home Assistant",
    shortTitle: "Smart Home Automation",
    description:
      "Experience the next generation of home automation with an AI-powered Large Language Model (LLM) Home Assistant that understands natural conversations and intelligently manages your connected devices. Move beyond traditional automation rules and enjoy a home that adapts to your lifestyle, preferences, and daily routines.",
    megaDescription: "AI & LLM Home Assistant",
    icon: House,
    category: "development",
    featured: false,
    features: [
      "Open, Flexible & Vendor-Independent Automation",
      "Hybrid Architecture for Maximum Performance",
      "Freedom from Vendor Lock-In",
    ],
    detailIntro:
      "Transform Your Home Into an Intelligent Living Space. Our smart home solutions combine advanced automation technologies with cutting-edge AI to create a seamless, intuitive, and future-ready living environment.",
  },
  {
    slug: "it-strategy-innovation-consulting",
    title: "IT Strategy & Innovation Consulting",
    shortTitle: "IT Strategy & Innovation Consulting",
    description:
      "Partner with Excellanto experts to design strategic IT roadmaps and innovation-driven transformation initiatives. We help organizations align technology investments with business goals, accelerate digital adoption, and build future-ready enterprise technology ecosystems.",
    megaDescription: "IT strategy & innovation consulting",
    icon: Compass,
    category: "ai-cloud",
    featured: true,
    features: [
      "Strategic IT roadmaps",
      "Innovation-driven transformation",
      "Align technology with business goals",
      "Accelerate digital adoption",
    ],
    detailIntro:
      "Turning technology decisions into business advantages. Partner with Excellanto experts to design strategic IT roadmaps and innovation-driven transformation initiatives.",
  },
  {
    slug: "predictive-performance-marketing",
    title: "Predictive Performance Marketing",
    shortTitle: "Predictive Performance Marketing",
    description:
      "Run high-impact marketing campaigns powered by predictive analytics and AI-driven optimization. Identify high-conversion opportunities, forecast customer behavior, and maximize campaign ROI with intelligent targeting and continuous performance improvements.",
    megaDescription: "Predictive analytics & campaign ROI",
    icon: TrendingUp,
    category: "marketing",
    featured: true,
    features: [
      "Predictive Analytics",
      "Audience Segmentation",
      "Campaign Optimization",
      "Budget Optimization",
      "Multi-Channel Execution",
      "Performance Tracking",
    ],
    detailIntro:
      "Marketing that focuses on conversions, not just visibility. Run high-impact marketing campaigns powered by predictive analytics and AI-driven optimization.",
  },
  {
    slug: "social-media-intelligence",
    title: "Social Media Intelligence",
    shortTitle: "Social Media Intelligence",
    description:
      "Analyze audience behavior, engagement patterns, and brand sentiment across social platforms using AI-powered insights. Transform social data into actionable strategies that improve brand visibility, strengthen customer engagement, and drive measurable marketing growth.",
    megaDescription: "Audience insights & brand sentiment",
    icon: Share2,
    category: "marketing",
    featured: true,
    features: [
      "Audience behavior analysis",
      "Engagement pattern insights",
      "Brand sentiment monitoring",
      "Actionable growth strategies",
    ],
    detailIntro:
      "Analyze audience behavior, engagement patterns, and brand sentiment across social platforms using AI-powered insights.",
  },
  {
    slug: "seo-cognition",
    title: "SEO Cognition",
    shortTitle: "SEO Cognition",
    description:
      "Use AI-driven SEO intelligence to uncover high-value keywords, improve technical SEO, and optimize website visibility. Our data-driven strategies help businesses stay ahead of search algorithm changes and achieve sustainable organic search growth.",
    megaDescription: "AI-driven SEO intelligence",
    icon: Search,
    category: "marketing",
    featured: true,
    features: [
      "Keyword intelligence",
      "On-page SEO",
      "Technical SEO",
      "Content strategy",
    ],
    detailIntro:
      "Search engine optimization today requires more than keyword placement. It demands a strategic approach that aligns with user intent, search engine algorithms, and business goals. Excellanto delivers SEO services that are structured, data-driven, and focused on real performance.",
  },
  {
    slug: "staffing-recruitment-service",
    title: "Staffing Recruitment Service",
    shortTitle: "Staffing Recruitment Service",
    description:
      "Strategic Staffing & Recruitment Solutions. Building the right team is no longer a routine hiring activity—it is a business-critical function that directly impacts growth, delivery capability, and long-term success.",
    megaDescription: "Strategic staffing & recruitment",
    icon: UserCheck,
    category: "talent",
    featured: false,
    features: [
      "Requirement mapping",
      "Targeted sourcing",
      "Interview coordination",
      "Offer management",
      "Post-placement transition support",
    ],
    detailIntro:
      "At Excellanto, we approach staffing and recruitment as a strategic business solution, not a transactional service. We work closely with organizations to understand how talent fits into their larger vision, and then we design hiring strategies that deliver not just candidates, but the right people who can create measurable impact.",
  },
];

/** Homepage pillars — titles only as shown on excellanto.com */
export const capabilities = [
  { title: "Workflow & Process Automation", icon: Bot },
  { title: "Data Analytics & Business Intelligence", icon: Database },
  { title: "Next Gen Digital Marketing", icon: TrendingUp },
  { title: "HR Recruitment Employee Engagement", icon: Users },
];

export const featuredServices = services.filter((s) => s.featured);

export function getServicesByCategory(categoryId: ServiceCategoryId) {
  return services.filter((s) => s.category === categoryId);
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** From excellanto.com/about/ */
export const aboutContent = {
  eyebrow: "About Us",
  title: "Your Partner for Superior IT Solutions",
  intro:
    "At Excellanto, our strengths lie in combining deep industry expertise with innovative technology solutions. We excel in delivering tailored, scalable, and efficient systems that empower our clients to achieve their goals. From strategic planning to flawless execution, our team’s technical mastery, creativity, and commitment to excellence ensure we consistently turn challenges into opportunities.",
  mission: {
    title: "Our Mission",
    body: "Our mission is to help enterprises accelerate adoption of new technologies, untangle complex issues that always emerge during digital evolution, and orchestrate ongoing innovation.",
  },
  vision: {
    title: "Our Vision",
    body: "Our vision is to become a globally recognized, trusted, and profitable IT solutions provider, guided by integrity, innovation, and excellence in everything we do.",
  },
  values: {
    title: "Core Values",
    body: "At Excellanto, we drive innovation to deliver smart, future-ready solutions, keeping our customers at the heart of everything we do. We act with integrity and transparency, and strive for excellence in every project, ensuring quality, precision, and continuous improvement",
  },
  strengthsTitle: "Elevate Experience with Our Expertise",
  strengthsEyebrow: "Our Strengths",
  strengthsBody:
    "At Excellanto, our strengths lie in combining deep industry expertise with innovative technology solutions. We excel in delivering tailored, scalable, and efficient systems that empower our clients to achieve their goals. From strategic planning to flawless execution, our team’s technical mastery, creativity, and commitment to excellence ensure we consistently turn challenges into opportunities.",
  techTitle: "Empowering Progress Through Smart Technology",
  techEyebrow: "Technology & Innovation",
  techBody:
    "At Excellanto, we harness cutting-edge technology and AI-driven solutions to deliver smarter, faster, and more efficient systems. Innovation is at the core of everything we do—whether it’s streamlining processes, enhancing user experiences, or developing scalable solutions for complex challenges. By staying ahead of technological trends, we ensure our clients are equipped with future-ready tools that drive growth and success.",
  techHighlights: [
    "Cutting-Edge Technology",
    "Expertise & Excellence in Execution",
  ],
};

/** Homepage “We Want to Work The Best!” cards — excellanto.com */
export const whyChooseUs = [
  {
    title: "Dedicated Team",
    description:
      "Our experienced IT professionals work closely with your organization to deliver reliable technology solutions that improve efficiency, support innovation, and drive meaningful business outcomes.",
    icon: Users,
  },
  {
    title: "Award-Winning Expertise",
    description:
      "Our team brings proven industry experience and recognized excellence in delivering dependable, high-impact IT solutions designed to meet modern business challenges.",
    icon: Award,
  },
  {
    title: "24/7 Hours Support",
    description:
      "Our support team remains available around the clock to ensure your systems run smoothly, providing timely assistance and continuous monitoring whenever your business needs it.",
    icon: Headphones,
  },
  {
    title: "Clean & Structured Setup",
    description:
      "We implement well-organized and optimized system environments designed for strong performance, enhanced security, and scalable infrastructure that supports future growth",
    icon: LayoutDashboard,
  },
];

/** Homepage “Why Your Business Needs AI Powered IT Solution” */
export const valueProp = {
  eyebrow: "why choose us",
  title: "Why Your Business Needs AI Powered IT Solution",
  body: "Modern enterprises require intelligent technology to remain competitive and efficient. AI-powered IT solutions from Excellanto help organizations automate operations, improve system performance, and make faster data-driven decisions that strengthen overall business productivity. Our AI-driven monitoring and predictive analytics enable businesses to detect potential system issues early, enhance cybersecurity protection, and maintain stable IT infrastructure. These intelligent solutions scale easily with growing business demands, providing a secure, flexible, and future-ready technology environment.",
};

export const processIntro =
  "At Excellanto, our IT solutions process begins with a detailed understanding of your business requirements, followed by structured planning and solution design. Each implementation is carried out with precision, while continuous monitoring and optimization ensure reliable performance and long-term value for your organization.";

export const processSteps = [
  {
    step: "01",
    title: "Project Definition",
    description:
      "We work closely with organizations to clearly define project objectives by translating business goals into a well-structured scope. This step ensures clarity, alignment, and a strong foundation for successful project execution.",
  },
  {
    step: "02",
    title: "Project Analysis",
    description:
      "Our experts conduct thorough analysis to evaluate feasibility, identify potential challenges, and determine the most effective technology approach. This stage ensures that every solution is practical, scalable, and aligned with business outcomes.",
  },
  {
    step: "03",
    title: "Planning & Execution",
    description:
      "We develop a detailed project plan and execute each phase with precision, ensuring efficient coordination, resource optimization, and timely delivery while maintaining high standards of quality and performance.",
  },
  {
    step: "04",
    title: "Results Delivery",
    description:
      "Our focus is on delivering measurable results that support business objectives. Every solution is implemented to create operational value, improve efficiency, and contribute to sustainable long-term growth.",
  },
];

/** Industries listed on excellanto.com/mobile-app-development/ — titles only */
export const industries: { title: string; icon: LucideIcon }[] = [
  { title: "E-Commerce", icon: ShoppingCart },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Finance", icon: Landmark },
  { title: "Education", icon: Globe },
  { title: "Travel", icon: Plane },
  { title: "Real Estate", icon: Building2 },
];

/** Full page content from excellanto.com/mobile-app-development */
export const mobileAppPage = {
  heroTitle: "Why Choose Our Mobile App Development Services?",
  whyChoose: [
    {
      title: "CUSTOM SOLUTION",
      body: "We understand that every business is unique. Our expert team of developers crafts tailored mobile apps to match your specific needs and goals.",
    },
    {
      title: "CUTTING EDGE TECHNOLOGY",
      body: "Excellanto stays at the forefront of mobile technology, using the latest tools and frameworks to deliver high-performance, scalable, and secure applications.",
    },
    {
      title: "CROSS PLATFORM EXPERTISE",
      body: "Our development team is proficient in building apps for both iOS and Android platforms, reducing development time and costs without compromising quality.",
    },
    {
      title: "AGILE DEVELOPMENT",
      body: "We follow Agile methodologies to ensure transparency, adaptability, and timely delivery of your mobile app.",
    },
    {
      title: "QUALITY ASSURANCE",
      body: "Rigorous testing and quality checks are an essential part of our development process, guaranteeing a bug-free, smooth-running application.",
    },
  ],
  processEyebrow: "our process",
  processTitle: "How We Build Powerful Mobile Apps That Deliver Results",
  processIntro:
    "At Excellanto, we believe that exceptional mobile app development goes far beyond writing lines of code — it’s about understanding your business, your audience, and your vision.",
  processSteps: [
    {
      step: "01",
      title: "Discovery & Strategy",
      body: "Every successful app starts with a strong foundation. We begin by analyzing your idea, target audience, and industry trends to create a clear strategy for your mobile application development journey.",
    },
    {
      step: "02",
      title: "UI/UX Design",
      body: "Design isn’t just about aesthetics — it’s about experience. Our design team creates intuitive, engaging interfaces that offer seamless navigation and drive user retention.",
    },
    {
      step: "03",
      title: "Agile Development",
      body: "Our expert mobile app developers follow agile methodologies to accelerate the development process while maintaining flexibility and focus on performance and quality.",
    },
    {
      step: "04",
      title: "Quality Assurance",
      body: "We perform rigorous testing, including functionality validation, and device compatibility checks to ensure your app performs seamlessly under various conditions.",
    },
  ],
  brandsTitle: "We Build Modern Experience with Brands",
  industriesEyebrow: "chy choose us",
  industriesTitle: "Industries We Serve",
  industriesIntro:
    "From agile startups to established enterprises, we help brands across industries leverage cutting-edge mobile application development to stay competitive in the digital space.",
};

/** Content from excellanto.com/website-development */
export const websiteDevPage = {
  heroTitle: "Why Choose Excellanto?",
  offeringsTitle: "Our Offerings Include",
  offerings: [
    {
      title: "Responsive Website Design",
      body: "Mobile-friendly designs that adapt to all screen sizes.",
    },
    {
      title: "Custom Web Application Development",
      body: "Tailored solutions for your unique business needs.",
    },
    {
      title: "CMS Development",
      body: "WordPress, Joomla, Drupal solutions",
    },
    {
      title: "API Integration",
      body: "Seamless backend solutions",
    },
    {
      title: "UI/UX Design Services",
      body: "Beautiful, user-friendly interfaces",
    },
  ],
  whyChooseTitle: "Why Choose Excellanto?",
  whyChoose: [
    {
      title: "100% Customized",
      body: "Tailored solutions for your business needs",
    },
    {
      title: "Cross-browser Compatible",
      body: "W3C validated code that works everywhere",
    },
    {
      title: "SEO-Optimized",
      body: "Better visibility on search engines",
    },
    {
      title: "Expert UI/UX",
      body: "Designs focused on conversion",
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Consultation",
      body: "Requirement Gathering",
    },
    {
      step: "02",
      title: "Wireframing",
      body: "Design Planning",
    },
    {
      step: "03",
      title: "QA Testing +",
      body: "Performance Optimization",
    },
    {
      step: "04",
      title: "Development",
      body: "Coding",
    },
  ],
  redesignEyebrow: "Website Redesign & Migration",
  redesignTitle: "Modernize Your Website",
  redesignItems: [
    "Revamp outdated websites for modern appeal",
    "Migrate from Wix, Squarespace to WordPress",
    "Improve site speed and responsiveness",
    "Retain SEO rankings and URL structure",
  ],
  highlights: [
    "Security-first",
    "Responsive",
    "Cross-browser",
    "Fast Performance",
  ],
  discoverMore: "Discover More",
};

export const heroCopy = {
  eyebrow: "Digital Transformation",
  title: "AI Powered IT Solutions & Staffing",
  subtitle: "Streamlining Operations Accelerating Outcomes",
  body: "We provide advanced AI-powered IT solutions that streamline business operations, improve strategic decision-making, and deliver measurable results. Our intelligent technology platforms enable organizations to scale efficiently, strengthen security, and operate with greater speed, agility, and confidence.",
  primaryCta: "Let’s Talk",
  secondaryCta: "Contact Us",
};

export const servicesPageCopy = {
  title: "Delivering reliable solutions tailored to your business needs",
  viewMore: "Want to see our professional Services. Click here to View More",
};

export const whyChooseCardsIntro = {
  eyebrow: "why choose us",
  title: "We Want to Work The Best!",
  body: "At Excellanto, our goal is to work with forward-thinking organizations that value quality, innovation, and long-term success. We combine expertise, dedication, and advanced technology to deliver reliable IT solutions that help businesses operate efficiently and achieve measurable growth",
};

export const brandsHeading = "We Build Modern Experience with Brands";

export const footerLinks = {
  services: services.slice(0, 6).map((s) => ({
    href: `/services/${s.slug}`,
    label: s.shortTitle,
  })),
  company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ],
  resources: [
    { href: "/services", label: "All Services" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-condition", label: "Terms condition" },
  ],
};
