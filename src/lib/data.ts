import {
  Calendar,
  Code2,
  Database,
  Globe,
  LayoutTemplate,
  LineChart,
  Rocket,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  icon: LucideIcon;
  stats: { label: string; value: string }[];
  price: string;
  offerPrice: string;
};

export const services: ServiceItem[] = [
  {
    id: "landing-page",
    title: "Landing Page Development",
    description:
      "High-converting landing pages optimized for lead generation, campaigns, and product launches.",
    category: "Web Development · Marketing",
    image: "/services/landing-page.jpg",
    icon: LayoutTemplate,
    stats: [
      { label: "Timeline", value: "2-3 W" },
      { label: "Pages", value: "1-5" },
      { label: "Rating", value: "4.9" },
    ],
    price: "₹66,000",
    offerPrice: "₹5,999/- only",
  },
  {
    id: "website",
    title: "Website Development",
    description:
      "Business websites, portfolios, corporate sites, and custom web platforms built for growth.",
    category: "Web Development · Business",
    image: "/services/website.jpg",
    icon: Globe,
    stats: [
      { label: "Timeline", value: "3-6 W" },
      { label: "Pages", value: "5-20" },
      { label: "Rating", value: "4.9" },
    ],
    price: "₹1,66,000",
    offerPrice: "₹5,999/- only",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description:
      "Android and iOS applications with polished UI, secure backends, and scalable architecture.",
    category: "Mobile · Product",
    image: "/services/mobile-app.jpg",
    icon: Smartphone,
    stats: [
      { label: "Timeline", value: "6-12 W" },
      { label: "Platforms", value: "2" },
      { label: "Rating", value: "4.8" },
    ],
    price: "₹4,15,000",
    offerPrice: "₹5,999/- only",
  },
  {
    id: "booking",
    title: "Appointment Booking Systems",
    description:
      "Scheduling systems for clinics, salons, and consultants with reminders and admin panels.",
    category: "SaaS · Scheduling",
    image: "/services/booking.jpg",
    icon: Calendar,
    stats: [
      { label: "Timeline", value: "4-8 W" },
      { label: "Modules", value: "6+" },
      { label: "Rating", value: "4.9" },
    ],
    price: "₹2,07,000",
    offerPrice: "₹5,999/- only",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "CRM systems, dashboards, ERP tools, and business automation tailored to your workflow.",
    category: "Enterprise · Automation",
    image: "/services/custom-software.jpg",
    icon: Code2,
    stats: [
      { label: "Timeline", value: "8-16 W" },
      { label: "Systems", value: "CRM+" },
      { label: "Rating", value: "5.0" },
    ],
    price: "₹6,64,000",
    offerPrice: "₹5,999/- only",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description:
      "Long-term technical support, monitoring, security updates, and performance improvements.",
    category: "Support · DevOps",
    image: "/services/maintenance.jpg",
    icon: ShieldCheck,
    stats: [
      { label: "Uptime", value: "99.9%" },
      { label: "Support", value: "24/7" },
      { label: "Rating", value: "4.9" },
    ],
    price: "₹41,000/mo",
    offerPrice: "₹5,999/- only",
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
    image: "/portfolio/finflow.jpg",
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
    image: "/portfolio/healthbridge.jpg",
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
    image: "/portfolio/shopnova.jpg",
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
    image: "/portfolio/logitrack.jpg",
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
    title: "Discovery & Planning",
    description: "We analyze your goals, users, and requirements to create a detailed project roadmap.",
  },
  {
    step: 2,
    title: "UI/UX Design",
    description: "Wireframes, prototypes, and pixel-perfect designs aligned with your brand.",
  },
  {
    step: 3,
    title: "Development",
    description: "Agile sprints with clean code, regular demos, and continuous integration.",
  },
  {
    step: 4,
    title: "Quality Assurance",
    description: "Rigorous testing across devices, browsers, and performance benchmarks.",
  },
  {
    step: 5,
    title: "Deployment",
    description: "Seamless launch with CI/CD pipelines, monitoring, and zero-downtime deploys.",
  },
  {
    step: 6,
    title: "Ongoing Support",
    description: "Maintenance, updates, scaling, and dedicated support for long-term success.",
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

export const testimonials = [
  {
    quote:
      "CraftDesk Solutions delivered our SaaS platform ahead of schedule. Their technical expertise and communication were exceptional throughout the project.",
    author: "Neha Patel",
    company: "TechVenture Labs",
    role: "CTO",
    rating: 5,
    avatar: "/avatars/emily.jpg",
  },
  {
    quote:
      "Working with CraftDesk felt like having an in-house development team. They understood our vision and brought it to life beautifully.",
    author: "Rohit Kumar",
    company: "NovaStart Technologies",
    role: "Founder & CEO",
    rating: 5,
    avatar: "/avatars/david.jpg",
  },
  {
    quote:
      "The mobile app they built for us has a 4.8-star rating on both app stores. Incredible attention to detail and performance.",
    author: "Kavya Singh",
    company: "FitLife India",
    role: "Product Director",
    rating: 5,
    avatar: "/avatars/rachel.jpg",
  },
  {
    quote:
      "From discovery to deployment, every phase was handled professionally. Our enterprise portal now serves 10,000+ employees daily.",
    author: "Vikram Sharma",
    company: "BharatCorp Industries",
    role: "VP of Technology",
    rating: 5,
    avatar: "/avatars/mark.jpg",
  },
];

export const pricingPlans = [
  {
    name: "Startup",
    price: "₹4,15,000",
    period: "starting at",
    description: "Perfect for MVPs and early-stage startups launching their first product.",
    features: [
      "Up to 5 core features",
      "Responsive web or mobile app",
      "UI/UX design included",
      "3 months post-launch support",
      "Basic analytics integration",
      "2-week sprint cycles",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Business",
    price: "₹12,45,000",
    period: "starting at",
    description: "Ideal for growing businesses needing scalable, feature-rich solutions.",
    features: [
      "Unlimited core features",
      "Web + mobile applications",
      "Advanced UI/UX & prototyping",
      "6 months post-launch support",
      "API integrations & automation",
      "Cloud deployment & DevOps",
      "Priority support channel",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "Full-scale enterprise solutions with dedicated teams and SLA guarantees.",
    features: [
      "Dedicated development team",
      "Custom architecture & security",
      "Multi-platform deployment",
      "12+ months support & SLA",
      "AI & advanced integrations",
      "Compliance & audit support",
      "24/7 dedicated support",
      "On-site consultation across India",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export const blogPosts = [
  {
    slug: "choosing-right-tech-stack-2026",
    title: "How to Choose the Right Tech Stack in 2026",
    excerpt:
      "A comprehensive guide to selecting technologies that balance performance, scalability, and team expertise.",
    category: "Development",
    image: "/blog/tech-stack.jpg",
    date: "May 28, 2026",
    readTime: "8 min read",
  },
  {
    slug: "saas-mvp-launch-guide",
    title: "From Idea to Launch: Building Your SaaS MVP",
    excerpt:
      "Step-by-step strategies for validating your idea and shipping a minimum viable product fast.",
    category: "SaaS",
    image: "/blog/saas-mvp.jpg",
    date: "May 15, 2026",
    readTime: "12 min read",
  },
  {
    slug: "ai-integration-business",
    title: "AI Integration: Practical Applications for Business",
    excerpt:
      "How companies are leveraging AI and automation to reduce costs and improve customer experience.",
    category: "AI",
    image: "/blog/ai-integration.jpg",
    date: "April 30, 2026",
    readTime: "10 min read",
  },
  {
    slug: "mobile-app-security-best-practices",
    title: "Mobile App Security Best Practices",
    excerpt:
      "Essential security measures every mobile application should implement before going to production.",
    category: "Security",
    image: "/blog/mobile-security.jpg",
    date: "April 18, 2026",
    readTime: "7 min read",
  },
  {
    slug: "cloud-migration-strategies",
    title: "Cloud Migration Strategies for Enterprise",
    excerpt:
      "Planning your move to the cloud with minimal downtime and maximum ROI.",
    category: "Cloud",
    image: "/blog/cloud-migration.jpg",
    date: "April 5, 2026",
    readTime: "9 min read",
  },
  {
    slug: "ux-design-conversion-rates",
    title: "UX Design Patterns That Boost Conversion Rates",
    excerpt:
      "Proven design principles that turn visitors into customers and increase engagement.",
    category: "Design",
    image: "/blog/ux-design.jpg",
    date: "March 22, 2026",
    readTime: "6 min read",
  },
];

export const budgetOptions = [
  "Under ₹4 Lakh",
  "₹4 Lakh - ₹12 Lakh",
  "₹12 Lakh - ₹40 Lakh",
  "₹40 Lakh - ₹80 Lakh",
  "₹80 Lakh+",
  "Not sure yet",
];

export const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "GitHub", href: "https://github.com" },
  { name: "Instagram", href: "https://instagram.com" },
];

export const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Developers" },
  { value: "12+", label: "Years Experience" },
];
