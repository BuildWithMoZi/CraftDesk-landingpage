import { assetPath } from "@/lib/paths";
import {
  Calendar,
  Code2,
  Database,
  FileText,
  Globe,
  Layers,
  LayoutTemplate,
  LineChart,
  Receipt,
  Rocket,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

const img = (path: string) => assetPath(path);

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export const CONTACT_FOR_PRICING_LABEL = "Contact for pricing";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  icon: LucideIcon;
  stats: { label: string; value: string }[];
  href?: string;
  variant?: "overlay" | "split";
  gradient: string;
  subtitle: string;
};

export type BentoServiceItem = {
  id: string;
  title: string;
  description: string;
  timeline: string;
  icon: LucideIcon;
  href: string;
  span?: "normal" | "wide";
  variant: "overlay" | "split";
  gradient: string;
  image?: string;
  subtitle: string;
};

export type MicroSaasProduct = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: "live" | "beta" | "coming-soon";
  metrics?: string;
  gradient: string;
  href?: string;
  variant: "overlay" | "split";
  image?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  company: string;
  role: string;
  rating: number;
  companyInitial: string;
};

export const services: ServiceItem[] = [
  {
    id: "landing-page",
    title: "Landing Page Development",
    description:
      "High-converting landing pages optimized for lead generation, campaigns, and product launches.",
    category: "Web Development · Marketing",
    image: img("/services/landing-page.jpg"),
    icon: LayoutTemplate,
    stats: [
      { label: "Timeline", value: "2-3 W" },
      { label: "Pages", value: "1-5" },
      { label: "Rating", value: "4.9" },
    ],
    href: "/landing-page-design-agency",
    variant: "overlay",
    gradient: "from-zinc-900 via-orange-950/80 to-amber-900/60",
    subtitle: "Conversion sprint · Marketing",
  },
  {
    id: "website",
    title: "Website Development",
    description:
      "Business websites, portfolios, corporate sites, and custom web platforms built for growth.",
    category: "Web Development · Business",
    image: img("/services/website.jpg"),
    icon: Globe,
    stats: [
      { label: "Timeline", value: "3-6 W" },
      { label: "Pages", value: "5-20" },
      { label: "Rating", value: "4.9" },
    ],
    href: "/productized-website-design",
    variant: "split",
    gradient: "from-sky-900/70 via-blue-800/50 to-zinc-900",
    subtitle: "CMS ready · Business sites",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description:
      "Android and iOS applications with polished UI, secure backends, and scalable architecture.",
    category: "Mobile · Product",
    image: img("/services/mobile-app.jpg"),
    icon: Smartphone,
    stats: [
      { label: "Timeline", value: "6-12 W" },
      { label: "Platforms", value: "2" },
      { label: "Rating", value: "4.8" },
    ],
    href: "/react-native-app-development",
    variant: "overlay",
    gradient: "from-indigo-950 via-violet-900/70 to-zinc-900",
    subtitle: "iOS + Android · React Native",
  },
  {
    id: "booking",
    title: "Appointment Booking Systems",
    description:
      "Scheduling systems for clinics, salons, and consultants with reminders and admin panels.",
    category: "SaaS · Scheduling",
    image: img("/services/booking.jpg"),
    icon: Calendar,
    stats: [
      { label: "Timeline", value: "4-8 W" },
      { label: "Modules", value: "6+" },
      { label: "Rating", value: "4.9" },
    ],
    href: "/contact",
    variant: "split",
    gradient: "from-teal-900/60 via-emerald-900/40 to-zinc-900",
    subtitle: "Scheduling · SaaS module",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "CRM systems, dashboards, ERP tools, and business automation tailored to your workflow.",
    category: "Enterprise · Automation",
    image: img("/services/custom-software.jpg"),
    icon: Code2,
    stats: [
      { label: "Timeline", value: "8-16 W" },
      { label: "Systems", value: "CRM+" },
      { label: "Rating", value: "5.0" },
    ],
    href: "/contact",
    variant: "overlay",
    gradient: "from-slate-900 via-zinc-800 to-orange-950/50",
    subtitle: "Enterprise · Automation",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description:
      "Long-term technical support, monitoring, security updates, and performance improvements.",
    category: "Support · DevOps",
    image: img("/services/maintenance.jpg"),
    icon: ShieldCheck,
    stats: [
      { label: "Uptime", value: "99.9%" },
      { label: "Support", value: "24/7" },
      { label: "Rating", value: "4.9" },
    ],
    href: "/contact",
    variant: "split",
    gradient: "from-orange-900/50 via-amber-900/30 to-zinc-900",
    subtitle: "DevOps · Long-term support",
  },
];

export const deployedProjects = [
  "Cavrio",
  "Belfrie & co Cafe",
  "Safal Toy studio",
  "Mykonos",
  "CarftDesk",
  "Naziya Makeovers",
  "scanTable",
];

type SolutionHighlight = {
  icon: LucideIcon;
  text: string;
};

export type SolutionPath = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: SolutionHighlight[];
  cta: string;
  href: string;
  image: string;
  price: string;
  priceNote: string;
  badge: string;
  accent: "prebuilt" | "custom";
};

export const solutionPaths: SolutionPath[] = [
  {
    id: "prebuilt",
    title: "Prebuilt Products",
    subtitle: "Launch your prebuilt site in days",
    description:
      "Landing pages, campaign sites, and Micro SaaS MVPs delivered on strict timelines with clear scope.",
    highlights: [],
    cta: "Explore Packages",
    href: "/contact",
    image: img("/services/landing-page.jpg"),
    price: "Contact us",
    priceNote: "Get a custom quote",
    badge: "Landing Sprint",
    accent: "prebuilt" as const,
  },
  {
    id: "custom",
    title: "Custom Build",
    subtitle: "Tailor-made platforms built for scale",
    description:
      "Complex web apps, mobile products, and enterprise systems engineered for long-term growth.",
    highlights: [],
    cta: "Book a Consultation",
    href: "/contact",
    image: img("/services/custom-software.jpg"),
    price: "Contact us",
    priceNote: "Scoped after discovery",
    badge: "Full Platform",
    accent: "custom" as const,
  },
];

export const bentoServices: BentoServiceItem[] = [
  {
    id: "landing-architecture",
    title: "Landing Page Architecture",
    description: "Conversion-focused pages built for campaigns, launches, and lead generation.",
    timeline: "5–7 days",
    icon: LayoutTemplate,
    href: "/landing-page-design-agency",
    span: "wide",
    variant: "overlay",
    gradient: "from-zinc-900 via-orange-950/80 to-amber-900/60",
    subtitle: "High-velocity sprint",
    image: img("/services/landing-page.jpg"),
  },
  {
    id: "full-stack-websites",
    title: "Full-Stack Websites",
    description: "Marketing sites and CMS platforms with clean structure and premium polish.",
    timeline: "3–5 weeks",
    icon: Globe,
    href: "/productized-website-design",
    variant: "split",
    gradient: "from-sky-900/70 via-blue-800/50 to-zinc-900",
    subtitle: "Productized website tier",
    image: img("/services/website.jpg"),
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description: "React Native and native builds with secure backends and polished UX.",
    timeline: "6–10 weeks",
    icon: Smartphone,
    href: "/react-native-app-development",
    variant: "split",
    gradient: "from-indigo-950 via-violet-900/70 to-zinc-900",
    subtitle: "Cross-platform build",
    image: img("/services/mobile-app.jpg"),
  },
  {
    id: "micro-saas",
    title: "Micro SaaS Builds",
    description: "Focused software products with auth, payments, and deployment included.",
    timeline: "4–6 weeks",
    icon: Rocket,
    href: "/micro-saas-development",
    span: "wide",
    variant: "overlay",
    gradient: "from-violet-950 via-purple-900/60 to-zinc-900",
    subtitle: "MVP accelerator",
    image: img("/services/custom-software.jpg"),
  },
];

export const microSaasProducts: MicroSaasProduct[] = [
  {
    id: "code-review-ai",
    name: "CodeReview AI",
    tagline: "AI-powered code review assistant",
    description:
      "Contextual suggestions for pull requests — built for dev teams who ship fast without sacrificing quality.",
    status: "beta",
    metrics: "500+ reviews processed",
    gradient: "from-violet-600/30 via-indigo-500/20 to-zinc-900",
    href: "/contact",
    variant: "overlay",
  },
  {
    id: "shopify-seo-auditor",
    name: "StoreSEO Auditor",
    tagline: "Automated e-commerce SEO audits",
    description:
      "Scans Shopify stores for speed, schema markup, and technical SEO gaps — with actionable fix lists.",
    status: "live",
    metrics: "120+ stores audited",
    gradient: "from-emerald-600/30 via-teal-500/15 to-zinc-900",
    href: "/contact",
    variant: "split",
  },
  {
    id: "content-refine",
    name: "ContentRefine",
    tagline: "AI content refinement for SMBs",
    description:
      "Audits existing copy and suggests stronger headlines, CTAs, and keyword placement.",
    status: "coming-soon",
    gradient: "from-orange-600/30 via-amber-500/15 to-zinc-900",
    variant: "split",
  },
];

export const whyStory = {
  lines: [
    "You bring the idea.",
    "We shape it, build it, and ship it on time.",
    "Then we stay — support, updates, and growth.",
  ],
  note: "Senior team · Clear updates · Secure builds · Long-term partnership",
};

export const portfolioProjects = [
  {
    id: "finflow",
    title: "FinFlow Analytics",
    category: "FinTech SaaS",
    image: img("/portfolio/finflow.jpg"),
    description:
      "Real-time financial analytics platform serving 50K+ users with sub-second data processing.",
    metrics: ["50K+ Users", "99.9% Uptime", "3x Revenue Growth"],
    gradient: "from-orange-600/40 via-amber-500/20 to-zinc-900",
    testimonial: {
      quote:
        "CraftDesk transformed our vision into a market-leading product. Their expertise in fintech compliance was invaluable.",
      author: "Priya Sharma",
      role: "CEO, FinFlow Pvt. Ltd.",
      rating: 5,
    },
  },
  {
    id: "healthbridge",
    title: "HealthBridge Portal",
    category: "Healthcare",
    image: img("/portfolio/healthbridge.jpg"),
    description:
      "NABH-compliant patient management system connecting 200+ healthcare providers.",
    metrics: ["200+ Providers", "40% Efficiency Gain", "NABH Compliant"],
    gradient: "from-zinc-800 via-orange-900/30 to-black",
    testimonial: {
      quote:
        "The team delivered a secure, user-friendly platform that revolutionized our patient care workflow.",
      author: "Dr. Rajesh Mehta",
      role: "CMO, HealthBridge",
      rating: 5,
    },
  },
  {
    id: "shopnova",
    title: "ShopNova Commerce",
    category: "E-Commerce",
    image: img("/portfolio/shopnova.jpg"),
    description:
      "Multi-vendor marketplace with AI-powered recommendations and UPI & Razorpay payment support.",
    metrics: ["₹16 Cr+ GMV", "150+ Vendors", "45% Conversion Lift"],
    gradient: "from-amber-600/30 via-orange-500/10 to-zinc-950",
    testimonial: {
      quote:
        "Our marketplace went from concept to launch in 4 months. CraftDesk exceeded every expectation.",
      author: "Arjun Malhotra",
      role: "Founder, ShopNova",
      rating: 5,
    },
  },
  {
    id: "logitrack",
    title: "LogiTrack Pro",
    category: "Logistics",
    image: img("/portfolio/logitrack.jpg"),
    description:
      "Fleet management and route optimization platform reducing delivery costs by 35%.",
    metrics: ["35% Cost Reduction", "500+ Vehicles", "Real-time Tracking"],
    gradient: "from-orange-700/20 via-zinc-800 to-black",
    testimonial: {
      quote:
        "The logistics platform CraftDesk built has become the backbone of our operations across India.",
      author: "Ananya Reddy",
      role: "COO, LogiTrack",
      rating: 5,
    },
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We align on goals, users, scope, and success metrics to define a clear project roadmap.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Wireframes, UI systems, and prototypes shaped for conversion, clarity, and brand consistency.",
  },
  {
    step: 3,
    title: "Technical Development",
    description:
      "Agile sprints with clean code, regular demos, integrations, and performance-first engineering.",
  },
  {
    step: 4,
    title: "Launch",
    description:
      "Deployment, QA, handoff, and go-live support so your product ships confidently on schedule.",
  },
];

export const techStack = {
  frontend: ["React", "Next.js", "Vue.js", "Angular"],
  backend: ["Node.js", "Laravel", "Django", "ASP.NET"],
  mobile: ["Flutter", "React Native", "Swift", "Kotlin"],
  cloud: ["AWS", "Azure", "Google Cloud", "PostgreSQL", "MongoDB"],
};

export const industries = [
  {
    name: "Healthcare",
    description: "NABH-compliant solutions for providers, patients, and health tech startups.",
    icon: Shield,
  },
  {
    name: "Finance",
    description: "Secure fintech platforms, payment systems, and regulatory-compliant apps.",
    icon: LineChart,
  },
  {
    name: "Real Estate",
    description: "Property management, virtual tours, and CRM platforms for real estate.",
    icon: Globe,
  },
  {
    name: "Education",
    description: "LMS platforms, e-learning apps, and student management systems.",
    icon: Sparkles,
  },
  {
    name: "E-Commerce",
    description: "Online stores, marketplaces, and omnichannel retail solutions.",
    icon: Wallet,
  },
  {
    name: "Logistics",
    description: "Fleet tracking, warehouse management, and supply chain optimization.",
    icon: Rocket,
  },
  {
    name: "Manufacturing",
    description: "IoT integrations, ERP systems, and production monitoring dashboards.",
    icon: Database,
  },
  {
    name: "Startups",
    description: "MVP development, rapid prototyping, and scale-ready architecture.",
    icon: Zap,
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "CraftDesk Solutions delivered our SaaS platform ahead of schedule. Their technical expertise and communication were exceptional throughout the project.",
    author: "Neha Patel",
    company: "TechVenture Labs",
    role: "CTO",
    rating: 5,
    companyInitial: "TV",
  },
  {
    quote:
      "Working with CraftDesk felt like having an in-house development team. They understood our vision and brought it to life beautifully.",
    author: "Rohit Kumar",
    company: "NovaStart Technologies",
    role: "Founder & CEO",
    rating: 5,
    companyInitial: "NS",
  },
  {
    quote:
      "The mobile app they built for us has a 4.8-star rating on both app stores. Incredible attention to detail and performance.",
    author: "Kavya Singh",
    company: "FitLife India",
    role: "Product Director",
    rating: 5,
    companyInitial: "FL",
  },
  {
    quote:
      "From discovery to deployment, every phase was handled professionally. Our enterprise portal now serves 10,000+ employees daily.",
    author: "Vikram Sharma",
    company: "BharatCorp Industries",
    role: "VP of Technology",
    rating: 5,
    companyInitial: "BC",
  },
];

export const pricingPlans = [
  {
    name: "Landing Page Sprint",
    timeline: "5–7 days",
    description:
      "A fully designed, copywritten, and developed landing page — delivered on a strict timeline.",
    features: [
      "Conversion-focused UI/UX design",
      "Mobile-responsive development",
      "Copywriting & SEO basics",
      "1 structured revision round",
      "Analytics setup",
      "Launch support",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
  {
    name: "Website Ecosystem",
    timeline: "3–5 weeks",
    description:
      "Clean marketing websites with optional CMS, blog, and growth-ready structure.",
    features: [
      "Up to 5 custom pages",
      "CMS integration available",
      "Responsive across all devices",
      "Performance optimization",
      "Contact forms & integrations",
      "3 months post-launch support",
    ],
    highlighted: true,
    cta: "Contact Us",
  },
  {
    name: "Micro SaaS MVP Accelerator",
    timeline: "4–6 weeks",
    description:
      "A working MVP for non-technical founders — auth, core features, payments, and deployment.",
    features: [
      "Product scoping & architecture",
      "Auth & user management",
      "Core feature development",
      "Payment gateway integration",
      "Cloud deployment",
      "30-day post-launch support",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Landing page sprints ship in 5–7 days. Websites take 3–5 weeks. Mobile apps and Micro SaaS MVPs typically run 4–10 weeks depending on scope. We provide a fixed timeline before work begins.",
  },
  {
    question: "How do I get pricing for my project?",
    answer:
      "Reach out via our contact form or book a free consultation. We'll scope your requirements and share a transparent quote tailored to your project — no hidden fees.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Productized packages include structured revision rounds (typically 1–2). Additional iterations can be added as fixed-scope change requests.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes — milestone-based payments aligned with project phases: typically 30% upfront, 40% at midpoint, and 30% at delivery.",
  },
  {
    question: "Who owns the code and designs?",
    answer:
      "You do. Upon final payment, all source code, designs, and assets are transferred to you with full ownership rights.",
  },
];

export const blogPosts = [
  {
    slug: "choosing-right-tech-stack-2026",
    title: "How to Choose the Right Tech Stack in 2026",
    excerpt:
      "A comprehensive guide to selecting technologies that balance performance, scalability, and team expertise.",
    category: "Development",
    image: img("/blog/tech-stack.jpg"),
    date: "May 28, 2026",
    readTime: "8 min read",
    gradient: "from-slate-900 via-zinc-800 to-orange-950/40",
    variant: "overlay" as const,
    relatedHref: "/productized-website-design",
  },
  {
    slug: "saas-mvp-launch-guide",
    title: "From Idea to Launch: Building Your SaaS MVP",
    excerpt:
      "Step-by-step strategies for validating your idea and shipping a minimum viable product fast.",
    category: "SaaS",
    image: img("/blog/saas-mvp.jpg"),
    date: "May 15, 2026",
    readTime: "12 min read",
    gradient: "from-violet-950 via-indigo-900/70 to-zinc-900",
    variant: "split" as const,
    relatedHref: "/micro-saas-development",
  },
  {
    slug: "ai-integration-business",
    title: "AI Integration: Practical Applications for Business",
    excerpt:
      "How companies are leveraging AI and automation to reduce costs and improve customer experience.",
    category: "AI",
    image: img("/blog/ai-integration.jpg"),
    date: "April 30, 2026",
    readTime: "10 min read",
    gradient: "from-cyan-950/80 via-blue-900/50 to-zinc-900",
    variant: "overlay" as const,
    relatedHref: "/contact",
  },
  {
    slug: "mobile-app-security-best-practices",
    title: "Mobile App Security Best Practices",
    excerpt:
      "Essential security measures every mobile application should implement before going to production.",
    category: "Security",
    image: img("/blog/mobile-security.jpg"),
    date: "April 18, 2026",
    readTime: "7 min read",
    gradient: "from-indigo-950 via-violet-900/60 to-zinc-900",
    variant: "split" as const,
    relatedHref: "/react-native-app-development",
  },
  {
    slug: "cloud-migration-strategies",
    title: "Cloud Migration Strategies for Enterprise",
    excerpt:
      "Planning your move to the cloud with minimal downtime and maximum ROI.",
    category: "Cloud",
    image: img("/blog/cloud-migration.jpg"),
    date: "April 5, 2026",
    readTime: "9 min read",
    gradient: "from-sky-950 via-blue-900/50 to-zinc-900",
    variant: "overlay" as const,
    relatedHref: "/contact",
  },
  {
    slug: "ux-design-conversion-rates",
    title: "UX Design Patterns That Boost Conversion Rates",
    excerpt:
      "Proven design principles that turn visitors into customers and increase engagement.",
    category: "Design",
    image: img("/blog/ux-design.jpg"),
    date: "March 22, 2026",
    readTime: "6 min read",
    gradient: "from-orange-950/80 via-amber-900/50 to-zinc-900",
    variant: "split" as const,
    relatedHref: "/landing-page-design-agency",
  },
  {
    slug: "productized-agency-model-guide",
    title: "Why Productized Agencies Beat Custom Quotes Every Time",
    excerpt:
      "How fixed-scope packages reduce friction, speed up delivery, and build trust with modern buyers.",
    category: "Strategy",
    image: img("/blog/ux-design.jpg"),
    date: "June 10, 2026",
    readTime: "7 min read",
    gradient: "from-zinc-900 via-stone-800 to-orange-950/30",
    variant: "overlay" as const,
    relatedHref: "/contact",
  },
  {
    slug: "landing-page-conversion-checklist",
    title: "The B2B Landing Page Conversion Checklist for 2026",
    excerpt:
      "A practical audit framework for SaaS landing pages — from hero copy to CTA placement and page speed.",
    category: "Marketing",
    image: img("/blog/saas-mvp.jpg"),
    date: "June 5, 2026",
    readTime: "9 min read",
    gradient: "from-amber-950/70 via-orange-900/40 to-zinc-900",
    variant: "split" as const,
    relatedHref: "/landing-page-design-agency",
  },
];

export const budgetOptions = [
  "Small scope",
  "Medium scope",
  "Large / enterprise",
  "Ongoing support",
  "Not sure yet",
];

export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/craftdesk" },
  { name: "Twitter", href: "https://twitter.com/craftdesk" },
  { name: "Gmail", href: "mailto:craftdesk.tech@gmail.com" },
  { name: "Instagram", href: "https://instagram.com/craftdesk" },
];

export const heroContent = {
  image: {
    src: img("/hero-center-img-Photoroom.png"),
    alt: "CraftDesk creative innovation",
  },
};

export const heroSocialLinks = {
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/919403429923",
  },
  instagram: {
    label: "Instagram",
    href: "https://instagram.com",
  },
};

export const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Developers" },
  { value: "12+", label: "Years Experience" },
];
