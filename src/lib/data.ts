import {
  Brain,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers,
  LineChart,
  Lock,
  MessageSquare,
  Palette,
  Rocket,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Timer,
  Users,
  Wallet,
  Wrench,
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

export const services: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Custom Web Development",
    description:
      "Scalable, high-performance web applications built with modern frameworks and best practices.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform iOS & Android apps with seamless user experiences.",
    icon: Smartphone,
  },
  {
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS platforms from MVP to enterprise-grade multi-tenant solutions.",
    icon: Layers,
  },
  {
    title: "Enterprise Software",
    description:
      "Robust enterprise systems that streamline operations and drive efficiency.",
    icon: Server,
  },
  {
    title: "E-Commerce Development",
    description:
      "Conversion-optimized online stores with secure payments and inventory management.",
    icon: Wallet,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with intuitive functionality.",
    icon: Palette,
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent automation, ML integrations, and AI-powered business solutions.",
    icon: Brain,
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud architecture, migration, and DevOps for scalable infrastructure.",
    icon: Cloud,
  },
  {
    title: "API Development",
    description:
      "RESTful and GraphQL APIs with seamless third-party integrations.",
    icon: Code2,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, updates, and 24/7 technical support for your products.",
    icon: Wrench,
  },
];

export const whyChooseUs: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Experienced Team",
    description: "Senior developers and designers with 10+ years of industry expertise.",
    icon: Users,
  },
  {
    title: "Agile Process",
    description: "Iterative development with regular demos and flexible scope management.",
    icon: Zap,
  },
  {
    title: "Transparent Communication",
    description: "Real-time updates, clear timelines, and direct access to your team.",
    icon: MessageSquare,
  },
  {
    title: "Scalable Architecture",
    description: "Future-proof systems designed to grow with your business needs.",
    icon: Layers,
  },
  {
    title: "Security First",
    description: "Industry-standard security practices and compliance-ready solutions.",
    icon: Shield,
  },
  {
    title: "Affordable Pricing",
    description: "Competitive rates without compromising on quality or delivery.",
    icon: Wallet,
  },
  {
    title: "On-Time Delivery",
    description: "Proven track record of meeting deadlines and launch dates.",
    icon: Timer,
  },
  {
    title: "Dedicated Support",
    description: "Post-launch support and long-term partnership for your success.",
    icon: Lock,
  },
];

export const portfolioProjects = [
  {
    id: "finflow",
    title: "FinFlow Analytics",
    category: "FinTech SaaS",
    description:
      "Real-time financial analytics platform serving 50K+ users with sub-second data processing.",
    metrics: ["50K+ Users", "99.9% Uptime", "3x Revenue Growth"],
    gradient: "from-orange-600/40 via-amber-500/20 to-zinc-900",
    testimonial: {
      quote:
        "Kyron transformed our vision into a market-leading product. Their expertise in fintech compliance was invaluable.",
      author: "Sarah Chen",
      role: "CEO, FinFlow Inc.",
      rating: 5,
    },
  },
  {
    id: "healthbridge",
    title: "HealthBridge Portal",
    category: "Healthcare",
    description:
      "HIPAA-compliant patient management system connecting 200+ healthcare providers.",
    metrics: ["200+ Providers", "40% Efficiency Gain", "HIPAA Compliant"],
    gradient: "from-zinc-800 via-orange-900/30 to-black",
    testimonial: {
      quote:
        "The team delivered a secure, user-friendly platform that revolutionized our patient care workflow.",
      author: "Dr. Michael Torres",
      role: "CMO, HealthBridge",
      rating: 5,
    },
  },
  {
    id: "shopnova",
    title: "ShopNova Commerce",
    category: "E-Commerce",
    description:
      "Multi-vendor marketplace with AI-powered recommendations and global payment support.",
    metrics: ["$2M+ GMV", "150+ Vendors", "45% Conversion Lift"],
    gradient: "from-amber-600/30 via-orange-500/10 to-zinc-950",
    testimonial: {
      quote:
        "Our marketplace went from concept to launch in 4 months. Kyron exceeded every expectation.",
      author: "James Wright",
      role: "Founder, ShopNova",
      rating: 5,
    },
  },
  {
    id: "logitrack",
    title: "LogiTrack Pro",
    category: "Logistics",
    description:
      "Fleet management and route optimization platform reducing delivery costs by 35%.",
    metrics: ["35% Cost Reduction", "500+ Vehicles", "Real-time Tracking"],
    gradient: "from-orange-700/20 via-zinc-800 to-black",
    testimonial: {
      quote:
        "The logistics platform Kyron built has become the backbone of our operations nationwide.",
      author: "Lisa Park",
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
    description: "HIPAA-compliant solutions for providers, patients, and health tech startups.",
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
      "Kyron Solutions delivered our SaaS platform ahead of schedule. Their technical expertise and communication were exceptional throughout the project.",
    author: "Emily Rodriguez",
    company: "TechVenture Labs",
    role: "CTO",
    rating: 5,
  },
  {
    quote:
      "Working with Kyron felt like having an in-house development team. They understood our vision and brought it to life beautifully.",
    author: "David Kim",
    company: "NovaStart Inc.",
    role: "Founder & CEO",
    rating: 5,
  },
  {
    quote:
      "The mobile app they built for us has a 4.8-star rating on both app stores. Incredible attention to detail and performance.",
    author: "Rachel Thompson",
    company: "FitLife Global",
    role: "Product Director",
    rating: 5,
  },
  {
    quote:
      "From discovery to deployment, every phase was handled professionally. Our enterprise portal now serves 10,000+ employees daily.",
    author: "Mark Anderson",
    company: "GlobalCorp Industries",
    role: "VP of Technology",
    rating: 5,
  },
];

export const pricingPlans = [
  {
    name: "Startup",
    price: "$4,999",
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
    price: "$14,999",
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
      "On-site consultation available",
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
    date: "May 28, 2026",
    readTime: "8 min read",
  },
  {
    slug: "saas-mvp-launch-guide",
    title: "From Idea to Launch: Building Your SaaS MVP",
    excerpt:
      "Step-by-step strategies for validating your idea and shipping a minimum viable product fast.",
    category: "SaaS",
    date: "May 15, 2026",
    readTime: "12 min read",
  },
  {
    slug: "ai-integration-business",
    title: "AI Integration: Practical Applications for Business",
    excerpt:
      "How companies are leveraging AI and automation to reduce costs and improve customer experience.",
    category: "AI",
    date: "April 30, 2026",
    readTime: "10 min read",
  },
  {
    slug: "mobile-app-security-best-practices",
    title: "Mobile App Security Best Practices",
    excerpt:
      "Essential security measures every mobile application should implement before going to production.",
    category: "Security",
    date: "April 18, 2026",
    readTime: "7 min read",
  },
  {
    slug: "cloud-migration-strategies",
    title: "Cloud Migration Strategies for Enterprise",
    excerpt:
      "Planning your move to the cloud with minimal downtime and maximum ROI.",
    category: "Cloud",
    date: "April 5, 2026",
    readTime: "9 min read",
  },
  {
    slug: "ux-design-conversion-rates",
    title: "UX Design Patterns That Boost Conversion Rates",
    excerpt:
      "Proven design principles that turn visitors into customers and increase engagement.",
    category: "Design",
    date: "March 22, 2026",
    readTime: "6 min read",
  },
];

export const budgetOptions = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
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
