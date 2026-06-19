import { assetPath } from "@/lib/paths";
import { siteConfig } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { type LucideIcon } from "lucide-react";

const img = (path: string) => assetPath(path);

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: routes.products, label: "Products" },
  { href: routes.customized, label: "Customized" },
  { href: "/contact", label: "Contact" },
];

/** Footer service links — title + href only */
export const services = [
  { title: "Landing Page Development", href: "/landing-page-design-agency" },
  { title: "Website Development", href: "/productized-website-design" },
  { title: "Mobile App Development", href: "/react-native-app-development" },
  { title: "Appointment Booking Systems", href: "/contact" },
  { title: "Custom Software Development", href: "/contact" },
  { title: "Maintenance & Support", href: "/contact" },
];

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

export const deployedProjects = [
  "Cavrio",
  "MemorYou & co Cafe",
  "Galaxy Toy studio",
  "Ex-Seats Restaurant",
  "Dreamy Makeovers",
  "ScanTable",
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
  imageAlt?: string;
  price: string;
  priceNote: string;
  badge: string;
  accent: "products" | "custom";
};

export const solutionPaths: SolutionPath[] = [
  {
    id: "products",
    title: "Products",
    subtitle: "Software built for your business",
    description:
      "Explore CraftDesk products — purpose-built software for startups and growing teams.",
    highlights: [],
    cta: "Explore Products",
    href: routes.products,
    image: img("/projects/Toy-store.png"),
    imageAlt: "Toys Studio Gallery ecommerce website",
    price: "Contact us",
    priceNote: "Get a custom quote",
    badge: "Products",
    accent: "products" as const,
  },
  {
    id: "custom",
    title: "Custom Build",
    subtitle: "Tailor-made platforms built for scale",
    description:
      "Complex web apps, mobile products, and enterprise systems engineered for long-term growth.",
    highlights: [],
    cta: "Book a Consultation",
    href: routes.customized,
    image: img("/projects/resturant-system.png"),
    imageAlt: "Restaurant web application with digital menu and booking",
    price: "Contact us",
    priceNote: "Scoped after discovery",
    badge: "Full Platform",
    accent: "custom" as const,
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

export const processSteps = [
  {
    step: 1,
    title: "Discovery & Scoping",
    description:
      "We align on your vision, users, features, and budget — so you know exactly what you're building before development starts.",
  },
  {
    step: 2,
    title: "UI/UX Design",
    description:
      "Wireframes and interactive prototypes you can see and approve, shaped for clarity, conversion, and brand consistency.",
  },
  {
    step: 3,
    title: "Agile Development & Testing",
    description:
      "Bi-weekly demos, clean code, and rigorous QA — you stay in the loop while we build in focused sprints.",
  },
  {
    step: 4,
    title: "Launch & Support",
    description:
      "Deployment, performance checks, handoff docs, and post-launch support so your product goes live with confidence.",
  },
];

/** About page — partnership journey (not the same as delivery process). */
export const aboutPartnershipSteps = [
  {
    step: 1,
    title: "You Bring the Vision",
    description:
      "Founders and operators come to us with a problem worth solving. We listen first — market, users, constraints, and what success looks like for you.",
  },
  {
    step: 2,
    title: "We Map the Path Together",
    description:
      "No black-box proposals. We co-create scope, milestones, and trade-offs so you always know what ships, when, and why.",
  },
  {
    step: 3,
    title: "Delivery Without the Drama",
    description:
      "Structured sprints, async updates, and demo-driven feedback — the same rigor we use on our own Micro SaaS products.",
  },
  {
    step: 4,
    title: "Proof Over Promises",
    description:
      "Live products, clean handoffs, and measurable outcomes. We earn trust through shipped software, not personality marketing.",
  },
];

/** Services page — how engagements run (package-focused). */
export const serviceWorkflowSteps = [
  {
    step: 1,
    title: "Pick Your Package",
    description:
      "Landing Page Sprint, Website Ecosystem, or Micro SaaS MVP — each with fixed scope, timeline, and deliverables listed upfront.",
  },
  {
    step: 2,
    title: "Scope & Sign-Off",
    description:
      "One structured kickoff to lock requirements, integrations, and acceptance criteria before design or code begins.",
  },
  {
    step: 3,
    title: "Design → Build → Demo",
    description:
      "UI approval, then agile build with bi-weekly demos. You see progress in Figma and staging — not just status emails.",
  },
  {
    step: 4,
    title: "Launch + Optional Care",
    description:
      "Deployment, analytics, handoff docs, and post-launch support windows so your product goes live with confidence.",
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
    question: "Do you work with startups in Nashik and across India?",
    answer:
      `Yes. CraftDesk Solutions is based at ${siteConfig.address}. We partner with founders locally and across India through remote collaboration, structured milestones, and transparent scoping.`,
  },
  {
    question: "Who owns the code and designs?",
    answer:
      "You do. Upon final payment, all source code, designs, and assets are transferred to you with full ownership rights.",
  },
];

export const customizedTickerPhrases = [
  "Build from Scratch",
  "Design to Deployment",
  "Crafted for Your Brand",
  "Scale with Confidence",
];

export const customizedProjectFilters = [
  { id: "websites", label: "Websites" },
  { id: "applications", label: "Applications" },
] as const;

export const customizedProjects = [
  {
    id: "restaurant-web-app",
    title: "Restaurant Web App",
    category: "websites",
    features: [
      "Digital menu with categories, specials, and item details",
      "Table booking and reservation management flow",
      "Admin-ready structure for orders and daily operations",
    ],
    image: img("/projects/resturant-system.png"),
    imageAlt: "Restaurant web application with digital menu and booking",
    gradient: "from-red-800/45 via-orange-950/40 to-zinc-900",
    href: "https://buildwithmozi.github.io/Restaurant-web-app/",
  },
  {
    id: "toys-studio-gallery",
    title: "Toys Studio Gallery",
    category: "websites",
    features: [
      "Product gallery with collections and visual storytelling",
      "Brand-forward layout built for a toy retail studio",
      "Mobile-first design with smooth browsing experience",
    ],
    image: img("/projects/Toy-store.png"),
    imageAlt: "Toys Studio Gallery ecommerce website",
    gradient: "from-indigo-900/50 via-violet-900/40 to-zinc-900",
    href: "https://buildwithmozi.github.io/Toys-Studio-Gallery/",
  },
  {
    id: "cosmetic-products-site",
    title: "Cosmetic Products Site",
    category: "websites",
    features: [
      "Skincare and beauty product catalog with ordering flow",
      "Category-based browsing for cosmetics and wellness items",
      "Conversion-focused product pages with clear CTAs",
    ],
    image: img("/projects/skin-care-and-beauty-ordering-system.png"),
    imageAlt: "Cosmetic products ordering website",
    gradient: "from-rose-800/40 via-pink-900/30 to-zinc-900",
    href: "https://buildwithmozi.github.io/cosmetic-products-site/",
  },
  {
    id: "cafe-landing-page",
    title: "Cafe Landing Page",
    category: "websites",
    features: [
      "Menu showcase with cafe branding and atmosphere",
      "Location, gallery, and contact sections for local discovery",
      "Fast-loading landing page optimized for conversions",
    ],
    image: img("/projects/cafeteria-shop.png"),
    imageAlt: "Cafe landing page with menu and branding",
    gradient: "from-orange-950/80 via-amber-900/50 to-zinc-900",
    href: "https://buildwithmozi.github.io/cafe-landing-page/",
  },
  {
    id: "shopnova-mobile",
    title: "ShopNova Mobile App",
    category: "applications",
    features: [
      "Cross-platform iOS & Android ecommerce experience",
      "Product browsing, cart, checkout, and order tracking",
      "Push notifications, wishlist, and personalized recommendations",
    ],
    image: img("/projects/skin-care-and-beauty-ordering-system.png"),
    imageAlt: "Cosmetic products ordering website — ShopNova mobile app preview",
    gradient: "from-amber-600/30 via-orange-500/10 to-zinc-950",
    href: "/contact",
    comingSoon: true,
  },
];

export const customizedFaqs: FaqItem[] = [
  {
    question: "How long does a custom project take?",
    answer:
      "Timelines depend on scope — landing pages take 1–2 weeks, business websites 3–5 weeks, and full platforms 8–16 weeks. We share a fixed timeline after discovery.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer post-launch support windows and ongoing maintenance plans for updates, monitoring, security patches, and feature additions.",
  },
  {
    question: "What is the process of building custom software?",
    answer:
      "Discovery → UI/UX design → agile development with demos → testing → launch & handoff. You stay in the loop at every milestone.",
  },
  {
    question: "Do you provide source code?",
    answer:
      "Yes. After final payment you receive full source code, designs, and deployment assets with complete ownership rights.",
  },
  {
    question: "What is the cost of building custom software?",
    answer:
      "Every project is scoped individually. Share your requirements and we will send a transparent quote — typically with milestone-based payments.",
  },
];

export const budgetOptions = [
  "Small scope",
  "Medium scope",
  "Large / enterprise",
  "Ongoing support",
  "Not sure yet",
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  image?: string;
  social: { name: string; href: string }[];
};

export const teamMembers: TeamMember[] = [
  {
    id: "zishan",
    name: "Zishan Shaikh",
    role: "Founder & Chief Technology Officer (CTO)",
    bio: "Leads product vision, technology strategy, and software architecture while driving innovation across CraftDesk.",
    initials: "ZS",
    gradient: "from-slate-600/80 to-slate-800/80",
    image: img("/team/zeeshan_shaikhjpeg.jpeg"),
    social: [
      { name: "LinkedIn", href: "https://www.linkedin.com/company/craftdesk" },
      { name: "Gmail", href: "mailto:craftdesk.tech@gmail.com" },
      { name: "Instagram", href: "https://instagram.com/craftdesk" },
    ],
  },
  {
    id: "moin",
    name: "Moin Shaikh",
    role: "Co-Founder & Solutions Architect",
    bio: "Designs scalable system architecture, business workflows, and technical solutions for complex software products.",
    initials: "MS",
    gradient: "from-emerald-600/80 to-teal-700/80",
    image: img("/team/Moin_shaikh.jpeg"),
    social: [
      { name: "LinkedIn", href: "https://www.linkedin.com/company/craftdesk" },
      { name: "Gmail", href: "mailto:support.buildwithmozi@gmail.com" },
      { name: "Instagram", href: "https://instagram.com/craftdesk" },
    ],
  },
  {
    id: "juned",
    name: "Juned Shaikh",
    role: "Co-Founder & Senior Full Stack Developer",
    bio: "Develops robust web applications, backend services, and seamless user experiences using modern technologies.",
    initials: "JS",
    gradient: "from-orange-500/80 to-amber-600/80",
    image: img("/team/Juned_shaikh.jpeg"),
    social: [
      { name: "LinkedIn", href: "https://www.linkedin.com/in/juned-shaikh-833258410" },
      { name: "Gmail", href: "mailto:skjuned7666@gmail.com" },
      { name: "Instagram", href: "https://www.instagram.com/skjuned_7666" },
    ],
  },
  {
    id: "maaz",
    name: "Maaz Khan",
    role: "UI/UX Designer & Product Designer",
    bio: "Creates intuitive interfaces and engaging user experiences with a focus on usability and modern design.",
    initials: "MK",
    gradient: "from-violet-500/80 to-purple-700/80",
    image: img("/team/maaz-khan.png"),
    social: [
      { name: "LinkedIn", href: "https://www.linkedin.com/company/craftdesk" },
      { name: "Gmail", href: "mailto:craftdesk.tech@gmail.com" },
      { name: "Instagram", href: "https://instagram.com/craftdesk" },
    ],
  },
  {
    id: "zoya",
    name: "Zoya Ansari",
    role: "Backend Engineer",
    bio: "Builds secure APIs, database architecture, and scalable backend systems powering CraftDesk products.",
    initials: "ZA",
    gradient: "from-sky-500/80 to-blue-700/80",
    image: img("/team/Zoya-ansari.png"),
    social: [
      { name: "LinkedIn", href: "https://www.linkedin.com/company/craftdesk" },
      { name: "Gmail", href: "mailto:craftdesk.tech@gmail.com" },
      { name: "Instagram", href: "https://instagram.com/craftdesk" },
    ],
  },
  {
    id: "bushra",
    name: "Bushra Pathan",
    role: "Growth & Digital Marketing Specialist",
    bio: "Drives business growth through digital marketing, lead generation, branding, and customer engagement.",
    initials: "BP",
    gradient: "from-pink-500/80 to-rose-600/80",
    image: img("/team/bushra-pathan.png"),
    social: [
      { name: "LinkedIn", href: "https://www.linkedin.com/company/craftdesk" },
      { name: "Gmail", href: "mailto:craftdesk.tech@gmail.com" },
      { name: "Instagram", href: "https://instagram.com/craftdesk" },
    ],
  },
];

export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/craftdesk" },
  { name: "Twitter", href: "https://twitter.com/craftdesk" },
  { name: "Gmail", href: "mailto:craftdesk.tech@gmail.com" },
  { name: "Instagram", href: "https://instagram.com/craftdesk" },
];

export const heroContent = {
  image: {
    src: img("/startup-mvp-development-hero.png"),
    alt: "CraftDesk brand illustration",
  },
  tagline:
    "Nashik-based software development company building custom web platforms, React Native mobile apps, and MVPs that help founders launch faster and grow revenue across India.",
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
