import type { FaqItem } from "@/lib/data";

export type SeoSection = {
  label: string;
  title: string;
  description: string;
  bullets?: string[];
};

export type SeoLandingPageData = {
  path: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    h1: string;
    description: string;
  };
  framework: "pas" | "four-ps";
  sections: SeoSection[];
  deliverables: string[];
  pricing: {
    name: string;
    period: string;
    features: string[];
  };
  proofMetrics: { value: string; label: string }[];
  faqs: FaqItem[];
  serviceName: string;
  serviceDescription: string;
};

export const seoLandingPages: SeoLandingPageData[] = [
  {
    path: "/landing-page-design-agency",
    meta: {
      title: "Landing Page Design Agency",
      description:
        "B2B SaaS landing page optimization services with fixed scope. Conversion-focused pages delivered in 5–7 days by CraftDesk.",
      keywords: [
        "landing page design agency",
        "b2b saas landing page optimization services",
        "conversion landing page design",
      ],
    },
    hero: {
      badge: "Landing Page Design Agency",
      h1: "B2B Landing Page Design Agency — Fixed Price, 7-Day Delivery",
      description:
        "High-converting landing pages for SaaS, campaigns, and product launches — engineered to turn traffic into revenue.",
    },
    framework: "pas",
    sections: [
      {
        label: "Problem",
        title: "Your landing page looks good — but it doesn't convert",
        description:
          "Most businesses invest in ads and traffic, then lose leads to weak messaging, slow load times, and pages that fail to communicate value in seconds.",
        bullets: [
          "Bounce rates stay high despite paid traffic",
          "No clear CTA hierarchy or conversion path",
          "Design agencies quote weeks with opaque pricing",
        ],
      },
      {
        label: "Agitate",
        title: "Every day without optimization, competitors capture your leads",
        description:
          "Delaying a conversion-focused rebuild means wasted ad spend, missed pipeline, and prospects choosing vendors who communicate value faster.",
        bullets: [
          "Campaign ROI erodes while pages underperform",
          "Sales teams chase cold leads instead of warm inbound",
          "Launch windows close before your page ships",
        ],
      },
      {
        label: "Solve",
        title: "CraftDesk delivers conversion-optimized landing pages on a fixed timeline",
        description:
          "Our productized Landing Page Sprint combines strategic copy, premium UI, and performance-first development — shipped in 5–7 days at a transparent price.",
        bullets: [
          "Conversion-focused wireframes and copy",
          "Mobile-responsive, fast-loading build",
          "Analytics and form integrations included",
        ],
      },
    ],
    deliverables: [
      "Strategic page structure & wireframes",
      "Conversion copywriting",
      "Premium responsive UI development",
      "Mobile & performance optimization",
      "Analytics & form setup",
      "1 structured revision round",
    ],
    pricing: {
      name: "Landing Page Sprint",
      period: "5–7 day delivery",
      features: [
        "Single high-converting landing page",
        "Copywriting & SEO basics",
        "Mobile-responsive development",
        "Launch support",
      ],
    },
    proofMetrics: [
      { value: "40%", label: "Avg. conversion lift" },
      { value: "7 days", label: "Delivery timeline" },
      { value: "150+", label: "Pages shipped" },
    ],
    faqs: [
      {
        question: "Is this suitable for B2B SaaS landing pages?",
        answer:
          "Yes. We specialize in SaaS and B2B pages with clear value props, social proof blocks, and demo/signup CTAs optimized for pipeline generation.",
      },
      {
        question: "How do I get pricing for a landing page sprint?",
        answer:
          "Contact us for a free consultation. We'll scope your requirements and share a transparent quote covering design, development, revisions, and launch support.",
      },
      {
        question: "Can you optimize an existing landing page?",
        answer:
          "Absolutely. We audit your current page and rebuild or refine sections focused on conversion — same sprint timeline applies.",
      },
    ],
    serviceName: "B2B Landing Page Design",
    serviceDescription:
      "Conversion-optimized landing page design and development for B2B SaaS and campaign launches.",
  },
  {
    path: "/micro-saas-development",
    meta: {
      title: "Micro SaaS MVP Development",
      description:
        "Build micro SaaS products with CraftDesk. Fixed-scope MVP development services — working product in 4–6 weeks with auth, payments, and deployment.",
      keywords: [
        "build micro saas",
        "micro saas mvp development services",
        "saas mvp development agency",
      ],
    },
    hero: {
      badge: "Micro SaaS Development",
      h1: "Micro SaaS MVP Development — Launch in 4–6 Weeks",
      description:
        "For non-technical founders who need a working, revenue-ready product — not a prototype that never ships.",
    },
    framework: "four-ps",
    sections: [
      {
        label: "Picture",
        title: "Imagine predictable monthly recurring revenue from your SaaS idea",
        description:
          "You have a niche problem to solve and a audience ready to pay — what you need is a focused product that validates fast and scales cleanly.",
        bullets: [
          "Recurring revenue from a narrow, high-value niche",
          "A product users actually log into daily",
          "Infrastructure that scales without rewrites",
        ],
      },
      {
        label: "Promise",
        title: "A working MVP in 4–6 weeks — scoped, fixed, and shippable",
        description:
          "We deliver auth, core features, payments, and cloud deployment in a single accelerator package — so you can start selling, not scoping forever.",
        bullets: [
          "Fixed-scope MVP with clear milestones",
          "Auth, billing, and admin included",
          "Production deployment on go-live",
        ],
      },
      {
        label: "Proof",
        title: "We build and operate our own micro SaaS products",
        description:
          "CraftDesk runs an internal portfolio of lean SaaS tools — proof that we understand product economics, not just client deliverables.",
        bullets: [
          "CodeReview AI — developer tooling in beta",
          "StoreSEO Auditor — live Shopify audits",
          "150+ client products shipped",
        ],
      },
      {
        label: "Push",
        title: "Limited accelerator slots each quarter",
        description:
          "We take on a fixed number of MVP builds to protect quality and timelines. Book a scoping call to reserve your build window.",
        bullets: [
          "Free 30-minute scoping call",
          "Transparent fixed quote before start",
          "Milestone-based payments",
        ],
      },
    ],
    deliverables: [
      "Product scoping & technical architecture",
      "User authentication & roles",
      "Core feature development",
      "Payment gateway integration",
      "Admin dashboard",
      "Cloud deployment & handoff",
    ],
    pricing: {
      name: "Micro SaaS MVP Accelerator",
      period: "4–6 week delivery",
      features: [
        "Auth & user management",
        "Core MVP features",
        "Stripe/Razorpay integration",
        "30-day post-launch support",
      ],
    },
    proofMetrics: [
      { value: "4–6 wks", label: "MVP timeline" },
      { value: "3", label: "Internal SaaS products" },
      { value: "98%", label: "Client satisfaction" },
    ],
    faqs: [
      {
        question: "Do I need a technical co-founder?",
        answer:
          "No. We handle architecture, development, and deployment. You bring the domain expertise and customer insight.",
      },
      {
        question: "What tech stack do you use?",
        answer:
          "Typically Next.js, React Native (if mobile), Node.js, PostgreSQL, and cloud deployment on AWS or Vercel — chosen for your product requirements.",
      },
      {
        question: "Do I own the code?",
        answer:
          "Yes. Full source code and IP transfer upon final payment.",
      },
    ],
    serviceName: "Micro SaaS MVP Development",
    serviceDescription:
      "Fixed-scope micro SaaS and MVP development for non-technical founders.",
  },
  {
    path: "/productized-website-design",
    meta: {
      title: "Productized Website Design for Startups",
      description:
        "Productized website packages for startups and SMBs — CMS, blog, and growth-ready structure. Contact CraftDesk for a tailored quote.",
      keywords: [
        "productized website design service for startups",
        "startup website design packages",
        "local website designers",
      ],
    },
    hero: {
      badge: "Website Design",
      h1: "Productized Website Design for Startups",
      description:
        "Marketing websites with clear deliverables and tiered packages — no endless proposal cycles or surprise invoices.",
    },
    framework: "pas",
    sections: [
      {
        label: "Problem",
        title: "Agencies quote custom prices for every simple website",
        description:
          "Startups and local businesses need a professional web presence fast — but traditional agencies hide pricing behind discovery calls and vague scopes.",
        bullets: [
          "Weeks lost waiting for proposals",
          "Unclear deliverables and revision limits",
          "Overbuilt solutions for simple marketing needs",
        ],
      },
      {
        label: "Agitate",
        title: "Without a credible site, trust and inbound leads stall",
        description:
          "Prospects research you online before they call. An outdated or missing site signals risk — and sends high-intent buyers to competitors.",
        bullets: [
          "Lost credibility with enterprise buyers",
          "SEO and content opportunities missed",
          "Sales decks link to pages that don't convert",
        ],
      },
      {
        label: "Solve",
        title: "Tiered website packages with exact page counts and features",
        description:
          "CraftDesk's Website Ecosystem offers Starter, Growth, and Pro tiers — from 5-page marketing sites to CMS-powered platforms with e-commerce.",
        bullets: [
          "Starter: 5-page marketing site package",
          "Growth: CMS + blog integration",
          "Pro: animations and e-commerce ready",
        ],
      },
    ],
    deliverables: [
      "Custom UI/UX design system",
      "Up to 5–20 pages (tier-dependent)",
      "CMS integration (Growth+)",
      "Contact forms & integrations",
      "Performance optimization",
      "3 months post-launch support",
    ],
    pricing: {
      name: "Website Ecosystem",
      period: "3–5 week delivery",
      features: [
        "Up to 5 custom pages",
        "Responsive design",
        "Performance optimization",
        "3 months support",
      ],
    },
    proofMetrics: [
      { value: "200+", label: "Websites delivered" },
      { value: "3 tiers", label: "Clear packages" },
      { value: "4.9★", label: "Client rating" },
    ],
    faqs: [
      {
        question: "What's the difference between tiers?",
        answer:
          "Starter covers marketing pages. Growth adds CMS and blog. Pro includes advanced animations and e-commerce capabilities.",
      },
      {
        question: "Do you work with local businesses?",
        answer:
          "Yes. We serve startups and SMBs across India with remote collaboration and clear milestone updates.",
      },
      {
        question: "Can I add pages later?",
        answer:
          "Yes. Additional pages are scoped as fixed add-ons without renegotiating the entire project.",
      },
    ],
    serviceName: "Productized Website Design",
    serviceDescription:
      "Tiered website design and development packages for startups and growing businesses.",
  },
  {
    path: "/react-native-app-development",
    meta: {
      title: "React Native App Development Agency",
      description:
        "React Native mobile app development for SMBs. Fixed-scope iOS and Android builds — polished UI, secure backend, predictable delivery. Contact for pricing.",
      keywords: [
        "react native mobile app development agency for smbs",
        "custom mobile app development fixed price",
        "mobile app development agency india",
      ],
    },
    hero: {
      badge: "Mobile App Development",
      h1: "React Native App Development — Fixed-Scope Builds for SMBs",
      description:
        "Cross-platform mobile apps with polished UX, secure backends, and clear scoping — built for businesses that need to ship, not experiment.",
    },
    framework: "pas",
    sections: [
      {
        label: "Problem",
        title: "Mobile app projects balloon in scope and budget",
        description:
          "SMBs need customer-facing apps without hiring a full in-house team — but agencies often sell open-ended retainers with no fixed outcome.",
        bullets: [
          "Unclear timelines and milestone definitions",
          "Separate iOS/Android teams doubling cost",
          "Apps that look good in demos but fail in production",
        ],
      },
      {
        label: "Agitate",
        title: "Every month without your app, competitors own the mobile channel",
        description:
          "Customers expect mobile access. Delay means lost engagement, weaker retention, and market share handed to apps already in the store.",
        bullets: [
          "Missed app store discovery and reviews",
          "Field teams stuck on manual workflows",
          "Investor and partner demos without a product",
        ],
      },
      {
        label: "Solve",
        title: "Fixed-scope React Native builds with defined features and timeline",
        description:
          "CraftDesk delivers cross-platform apps with a scoped feature set, secure API layer, and store submission support — at a price you know upfront.",
        bullets: [
          "Single codebase for iOS and Android",
          "Defined feature list and revision rounds",
          "Backend API and admin panel options",
        ],
      },
    ],
    deliverables: [
      "UI/UX design for iOS & Android",
      "React Native cross-platform development",
      "Secure backend API integration",
      "Push notifications setup",
      "App store submission support",
      "Post-launch bug-fix window",
    ],
    pricing: {
      name: "Mobile App Build",
      period: "6–10 week delivery",
      features: [
        "iOS + Android from one codebase",
        "Custom UI/UX design",
        "API & backend integration",
        "Store submission support",
      ],
    },
    proofMetrics: [
      { value: "4.8★", label: "Avg. app store rating" },
      { value: "2", label: "Platforms from 1 build" },
      { value: "50+", label: "Apps shipped" },
    ],
    faqs: [
      {
        question: "React Native vs native — which do you recommend?",
        answer:
          "For most SMB products, React Native delivers 90% of native quality at half the cost. We recommend native only for heavy graphics or platform-specific hardware.",
      },
      {
        question: "Is backend development included?",
        answer:
          "API integration is included. Full custom backend development is scoped as an add-on based on complexity.",
      },
      {
        question: "Do you handle app store submission?",
        answer:
          "Yes. We prepare builds, assets, and metadata and guide you through Apple and Google submission.",
      },
    ],
    serviceName: "React Native Mobile App Development",
    serviceDescription:
      "Fixed-scope React Native mobile app development for iOS and Android.",
  },
];

export function getSeoPageByPath(path: string): SeoLandingPageData | undefined {
  return seoLandingPages.find((page) => page.path === path);
}

export const seoPagePaths = seoLandingPages.map((page) => page.path);
