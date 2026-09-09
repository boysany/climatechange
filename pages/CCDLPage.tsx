import React, { useMemo, useState } from 'react';
import { motion as m } from 'framer-motion';
const motion = m as any;
import ScrollReveal from '../components/ScrollReveal.tsx';
import TextReveal from '../components/TextReveal.tsx';
import { ServiceDetailPage } from '../sections/ServiceDetailPage.tsx';
import { SEOStrategyPage } from '../sections/SEOStrategyPage.tsx';
import { BlogPage, BLOG_POSTS } from '../sections/BlogPage.tsx';
import { CommunityPage } from '../sections/CommunityPage.tsx';
import { SingleArticlePage } from '../sections/SingleArticlePage.tsx';
import { SEO_SERVICES_MAP } from '../lib/seoData.ts';
import { portfolioProjects } from '../sections/Portfolio.tsx';

import MarkerHighlight from '../components/MarkerHighlight.tsx';
import TiltCard from '../components/TiltCard.tsx';
import { AUTHENTIC_TEAM_MEMBERS } from '../lib/teamData.ts';

import {
  ArrowUpRight,
  ArrowRight,
  ArrowDownRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
  Code2,
  Cpu,
  Globe2,
  Clock,
  Send,
  MessageCircle,
  Phone,
  Mail,
  User,
  Users,
  Briefcase,
  Award,
  ChevronRight,
  Calendar,
  Search,
  ChevronDown,
  Check,
  TrendingUp,
  ShoppingBag,
  Palette,
  Layout,
  Lock,
  FileText,
  HelpCircle,
  BarChart3,
  Server,
  Star,
  ExternalLink,
  Shield,
  Key,
  Database,
  RefreshCw,
  Copy,
  CheckCheck,
  FileCode,
  CheckCircle,
  Smartphone,
  MapPin,
  Download,
  Share2,
  Linkedin,
  MessageSquare,
} from 'lucide-react';

/* ============================================================
   DATA COLLECTIONS FOR ENTERPRISE PAGES
   ============================================================ */

export const servicesData = [
  {
    id: 'product-design',
    title: 'Product Design (UI/UX)',
    category: 'Design & Systems',
    description:
      'Human-centered interface architecture, rapid prototyping, and high-conversion UX designed from first principles.',
    deliverables: ['Design Discovery & Research', 'Figma Interactive Prototypes', 'User Journey Mapping', 'Micro-interactions & Motion'],
    tech: ['Figma', 'Principle', 'Framer', 'Design Tokens'],
    tag: 'UI/UX & Systems',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=85&w=1200',
  },
  {
    id: 'design-systems',
    title: 'Design Systems & Scale',
    category: 'Design & Systems',
    description:
      'Multi-brand design token architectures, reusable component libraries, and automated Storybook synchronization.',
    deliverables: ['Design Token Architecture', 'Component Library', 'Storybook Documentation', 'Accessibility (WCAG AAA)'],
    tech: ['Figma Tokens', 'Storybook', 'Tailwind', 'Zeroheight'],
    tag: 'Reusable Tokens',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=85&w=1200',
  },
  {
    id: 'fullstack-software',
    title: 'Full-Stack Software Engineering',
    category: 'Engineering & Cloud',
    description:
      'Robust web applications, microservices, secure backend APIs, and cloud infrastructure engineered for zero downtime.',
    deliverables: ['Full-Stack Web Apps', 'REST & GraphQL APIs', 'Database Architecture', 'Cloud Deployment & CI/CD'],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    tag: 'React & TypeScript',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=85&w=1200',
  },
  {
    id: 'startups-mvp',
    title: 'Startup MVP Acceleration',
    category: 'Product & Growth',
    description:
      'From zero to market-ready product in 30 days. Fast-track validation, pitch-ready prototypes, and scalable architecture.',
    deliverables: ['30-Day MVP Sprint', 'Investor Pitch Prototype', 'Analytics & Event Tracking', 'Launch Strategy'],
    tech: ['Next.js', 'Supabase', 'Stripe', 'PostHog'],
    tag: '30-Day MVP',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=85&w=1200',
  },
  {
    id: 'enterprise-transform',
    title: 'Enterprise Digital Transformation',
    category: 'Engineering & Cloud',
    description:
      'Legacy modernization, SOC2-compliant engineering, dedicated agile squads, and bespoke enterprise software systems.',
    deliverables: ['Legacy Code Modernization', 'Security & SOC2 Compliance', 'Dedicated Squad Delivery', '24/7 SLA Support'],
    tech: ['Kubernetes', 'Microservices', 'GraphQL', 'Terraform'],
    tag: 'SOC2 & Scale',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=85&w=1200',
  },
  {
    id: 'seo-growth',
    title: 'Google SEO & Performance Growth',
    category: 'Product & Growth',
    description:
      'Data-driven search engine dominance, technical Core Web Vitals optimization, and high-ROI PPC marketing campaigns.',
    deliverables: ['Technical SEO Audit', 'Core Web Vitals 95+ Score', 'Content Engine Strategy', 'Google Ads Management'],
    tech: ['Semrush', 'Google Search Console', 'Next.js SSR', 'Schema.org'],
    tag: 'Growth & Ads',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=1200',
  },
];

export const projectsData = [
  {
    id: 'hire-professional',
    title: 'Hire Professional',
    type: 'Platforms',
    category: 'Enterprise SaaS',
    metrics: '+185% Match Rate · 45k Active Users',
    text: 'A high-performance talent orchestration platform connecting vetted specialists with enterprise teams through automated AI matchmaking and smart contracts.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=82&w=1200',
    tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    liveUrl: 'https://hireprofessional.vercel.app/',
  },
  {
    id: 'school-management',
    title: 'School Management',
    type: 'EdTech',
    category: 'Institutional Portal',
    metrics: '99.98% Uptime · 12,000+ Daily Students',
    text: 'An all-in-one institutional management portal orchestrating student grading, attendance telemetry, faculty scheduling, fee pipelines, and parent communication.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=82&w=1200',
    tech: ['Next.js', 'PostgreSQL', 'Express', 'D3.js'],
    liveUrl: 'https://schoolmangment.vercel.app/',
  },
  {
    id: 'urmi-swap',
    title: 'Urmi Swap',
    type: 'DeFi',
    category: 'FinTech & Web3',
    metrics: '$24M+ Volume · <250ms Execution',
    text: 'A focused decentralized liquidity exchange experience built around real-time liquidity pools, minimal slippage, speed, and confident asset swapping.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=82&w=1200',
    tech: ['Web3.js', 'React', 'Tailwind', 'Ethers'],
    liveUrl: 'https://swap-zeta.vercel.app/',
  },
];

const livePortfolioProjects = portfolioProjects
  .filter((project) => !projectsData.some((existing) => existing.title === project.title))
  .map((project) => ({
    id: `live-${project.num}`,
    title: project.title,
    type: project.category.includes('Education') ? 'EdTech' : project.category.includes('DeFi') ? 'DeFi' : 'Platforms',
    category: project.category,
    metrics: 'Live project preview',
    text: project.desc,
    image: project.img,
    tech: [project.tag, 'Live Preview'],
    liveUrl: project.liveUrl,
  }));

const allProjectsData = portfolioProjects.map((project) => ({
  id: `live-${project.liveUrl}`,
  title: project.title,
  type: project.category.includes('Education') ? 'EdTech' : project.category.includes('DeFi') ? 'DeFi' : 'Platforms',
  category: project.category,
  metrics: 'Live project preview',
  text: project.desc,
  image: project.img,
  tech: [project.tag, 'Live Preview'],
  liveUrl: project.liveUrl,
}));

export const caseStudiesDetail: Record<string, {
  title: string;
  subtitle: string;
  tag: string;
  year: string;
  client: string;
  duration: string;
  metrics: string;
  heroImg: string;
  challenge: string;
  solution: string;
  stack: string[];
  features: { title: string; desc: string }[];
  results: { stat: string; label: string }[];
}> = {
  'hire-professional': {
    title: 'Hire Professional',
    subtitle: 'Enterprise Specialist Matchmaking & Workspace Platform',
    tag: 'Enterprise SaaS • Platforms',
    year: '2026',
    client: 'HirePro Inc. (San Francisco, CA)',
    duration: '6 Weeks Sprint',
    metrics: '+185% Match Rate · 45,000+ Active Users',
    heroImg: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=82&w=1200',
    challenge: 'Enterprises were losing up to 4 weeks vetting niche senior contractors across disjointed platforms, with high mis-hire rates and delayed onboarding cycles.',
    solution: 'We engineered a high-throughput talent orchestration portal with algorithmic skill graphing, automated verification telemetry, smart contract milestones, and unified workspace billing.',
    stack: ['React 18', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
    features: [
      { title: 'Algorithmic Skill Graphing', desc: 'Deep competency matching evaluating live code repositories and technical portfolios in real-time.' },
      { title: 'Milestone Smart Escrow', desc: 'Automated escrow payment releases triggered on verified deliverable sign-offs.' },
      { title: 'Zero-Latency Direct Messaging', desc: 'End-to-end encrypted messaging channels with inline code reviews and scheduled calendar sync.' }
    ],
    results: [
      { stat: '+185%', label: 'Talent Match Accuracy' },
      { stat: '4.2 Days', label: 'Average Time to Hire (down from 28 days)' },
      { stat: '45,000+', label: 'Active Enterprise Specialists' },
      { stat: '99.98%', label: 'Platform Availability SLA' }
    ]
  },
  'school-management': {
    title: 'School Management',
    subtitle: 'Next-Generation Unified Institutional Governance System',
    tag: 'Institutional Portal • EdTech',
    year: '2026',
    client: 'EduCore Systems',
    duration: '8 Weeks Sprint',
    metrics: '99.98% Uptime · 12,000+ Daily Active Students',
    heroImg: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=82&w=1200',
    challenge: 'Educational institutions were struggling with fractured legacy software for attendance, grading, fee collections, and parent communications, causing massive administrative overhead.',
    solution: 'Designed and deployed an all-in-one administrative hub featuring role-based dashboards, automated SMS/WhatsApp alerts, real-time grading analytics, and automated fee reconciliation.',
    stack: ['Next.js App Router', 'TypeScript', 'PostgreSQL', 'Express', 'D3.js', 'AWS ECS'],
    features: [
      { title: 'Multi-Role Access Control', desc: 'Custom tailored interfaces for Super-Admins, Principals, Faculty, Students, and Parents.' },
      { title: 'Live Academic Analytics', desc: 'D3.js interactive visualizations tracking class performance trends, attendance dropouts, and student progress.' },
      { title: 'Automated Fee Pipelines', desc: 'Instant UPI/NetBanking payment reconciliation with automated digital receipts and SMS reminders.' }
    ],
    results: [
      { stat: '99.98%', label: 'System Uptime Across Academic Year' },
      { stat: '12,000+', label: 'Daily Active Students & Faculty' },
      { stat: '-70%', label: 'Reduction in Manual Administrative Work' },
      { stat: '100%', label: 'Digital Fee Collection Compliance' }
    ]
  },
  'urmi-swap': {
    title: 'Urmi Swap',
    subtitle: 'High-Velocity Decentralized Token Liquidity Engine',
    tag: 'DeFi • Web3 Financial Protocol',
    year: '2026',
    client: 'Urmi Protocol Labs',
    duration: '5 Weeks Sprint',
    metrics: '$24M+ Total Swapped Volume · <250ms Execution',
    heroImg: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=82&w=1200',
    challenge: 'Existing decentralized exchanges suffered from complex, intimidating interfaces, excessive transaction failures, high slippage, and unclear gas estimation for retail traders.',
    solution: 'Engineered an ultra-clean, tactile swapping interface with instant routing optimization, dynamic slippage protection, and real-time mempool tracking.',
    stack: ['Web3.js', 'Ethers.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: [
      { title: 'Intelligent Route Splitting', desc: 'Automatically splits swap volume across multiple pools to achieve minimum price impact.' },
      { title: 'Real-Time Slippage Guard', desc: 'Instant warning telemetry when volatility exceeds safe tolerance thresholds.' },
      { title: 'One-Click Gas Optimization', desc: 'Preset gas strategies ensuring rapid execution even during severe network congestion.' }
    ],
    results: [
      { stat: '$24M+', label: 'Cumulative Swapped Volume' },
      { stat: '<250ms', label: 'Average Route Calculation Time' },
      { stat: '0.04%', label: 'Average Slippage Impact' },
      { stat: '99.9%', label: 'Transaction Success Rate' }
    ]
  },
  'gurukul-school': {
    title: 'Gurukul School',
    subtitle: 'Modern Digital Campus Experience & Interactive Admissions Portal',
    tag: 'EdTech • Institutional Experience',
    year: '2026',
    client: 'Gurukul International Academy',
    duration: '4 Weeks Sprint',
    metrics: '3.4x Online Admissions Growth · 100% Mobile Ready',
    heroImg: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=85&w=1600',
    challenge: 'The academy needed an inspiring, brand-defining digital presence to convey its holistic education philosophy and streamline prospective parent inquiries into admissions.',
    solution: 'Crafted a modern, story-driven web experience with interactive virtual campus tours, curriculum roadmaps, and an intuitive 3-step digital admission application.',
    stack: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Cloudflare Pages'],
    features: [
      { title: 'Interactive Campus Tour', desc: 'Engaging visual hotspots highlighting laboratories, sports complexes, and digital classrooms.' },
      { title: '3-Step Admissions Funnel', desc: 'Frictionless application flow with instant document uploads and automated entrance exam scheduling.' },
      { title: 'Holistic Curriculum Explorer', desc: 'Interactive grade-by-grade learning outcomes and co-curricular showcase.' }
    ],
    results: [
      { stat: '3.4x', label: 'Increase in Online Admission Inquiries' },
      { stat: '98/100', label: 'Google Lighthouse Performance Score' },
      { stat: '4m 12s', label: 'Average Session Duration' },
      { stat: '100%', label: 'Responsive Mobile Experience' }
    ]
  }
};

export const processStages = [
  {
    step: '01',
    name: 'Discovery & Product Intelligence',
    time: 'Week 1',
    description:
      'We deconstruct your domain, competitor landscape, business unit unit economics, and user mental models to define an unassailable roadmap.',
    deliverables: ['Stakeholder Interviews', 'Technical Feasibility Map', 'KPI & North Star Metrics', 'Product Architecture Blueprint'],
  },
  {
    step: '02',
    name: 'UX Architecture & Token Systems',
    time: 'Week 2',
    description:
      'We establish the foundational design tokens, mathematical typography scales, wireflows, and interaction hierarchy before writing a single line of code.',
    deliverables: ['Design Token Library', 'Information Architecture', 'User Journey Mapping', 'Low-Fidelity Wireframes'],
  },
  {
    step: '03',
    name: 'High-Fidelity Prototyping & Motion',
    time: 'Week 3–4',
    description:
      'Pixel-perfect interfaces crafted in Figma with realistic micro-animations, lighting, and states that simulate production quality.',
    deliverables: ['Production Figma Files', 'Clickable Prototype', 'Component States & Edge Cases', 'Design Review Sign-off'],
  },
  {
    step: '04',
    name: 'Full-Stack Engineering & Tests',
    time: 'Week 4–7',
    description:
      'Clean TypeScript, component-driven frontend, resilient APIs, and optimized database pipelines backed by automated end-to-end testing.',
    deliverables: ['Modular Codebase', 'API Endpoints & Documentation', 'Automated Test Suites', 'Staging Environment Access'],
  },
  {
    step: '05',
    name: 'Performance Hardening & Security Audit',
    time: 'Week 8',
    description:
      'Rigorous penetration testing, Core Web Vitals 95+ optimization, cross-device responsiveness verification, and database index tuning.',
    deliverables: ['Lighthouse 95+ Performance Audit', 'Security Penetration Report', 'SEO & OpenGraph Tags', 'Zero-Downtime Rollout Plan'],
  },
  {
    step: '06',
    name: 'Launch, Telemetry & Compound Scale',
    time: 'Ongoing',
    description:
      'Seamless production deployment, event telemetry integration, and continuous post-launch iteration based on real user behavioral telemetry.',
    deliverables: ['Production Cloud Ingress', 'Real-time Error Tracking', 'Post-Launch Retrospective', 'Dedicated Maintenance SLA'],
  },
];

export const teamMembers = AUTHENTIC_TEAM_MEMBERS;

export const openJobs = [
  {
    id: 'lead-designer',
    title: 'Senior Product & Motion Designer',
    team: 'Product Design',
    location: 'Remote (Global) / Jaipur',
    type: 'Full-time',
    experience: '5+ Years',
    description:
      'Lead UI/UX architecture, create multi-brand design systems in Figma, and design micro-interactions for venture-backed startups and enterprise platforms.',
  },
  {
    id: 'fullstack-engineer',
    title: 'Staff Full-Stack TypeScript Engineer',
    team: 'Engineering',
    location: 'Remote (Global) / Bangalore',
    type: 'Full-time',
    experience: '5+ Years',
    description:
      'Architect robust web applications using Next.js 14, React 18, Node.js, PostgreSQL, and AWS. Focus on sub-second render performance and automated test coverage.',
  },
  {
    id: 'design-technologist',
    title: 'Creative Design Technologist (WebGL/Motion)',
    team: 'Creative Dev',
    location: 'Remote',
    type: 'Full-time / Contract',
    experience: '3+ Years',
    description:
      'Bridge the gap between pure visual art and production frontend code. Build fluid GSAP animations, shader interactions, and Three.js canvas specimens.',
  },
];

export const insightsPosts = [
  {
    slug: 'designing-for-clarity',
    title: 'Designing for Extreme Cognitive Clarity in Enterprise Software',
    category: 'Design Systems',
    date: 'August 2026',
    read: '6 min read',
    intro:
      'Why modern software interfaces feel cluttered, and how applying mathematical spacing ratios and spatial hierarchy restores effortless user focus.',
    content: [
      'Enterprise software has traditionally suffered from excessive visual density. When every feature screams for attention, the user absorbs none of it. By establishing a rigorous 8px mathematical baseline and enforcing optical hierarchy, we eliminate up to 70% of cognitive strain.',
      'A true design system is not a collection of pretty colored buttons in Figma; it is an organizational contract between product vision and code execution. When engineers and designers share the same tokenized dictionary, shipping velocity accelerates exponentially.',
      'The modern user does not read software; they scan and react. High-contrast typography paired with purposeful micro-motion provides the immediate visual confirmation required for critical decisions.',
    ],
  },
  {
    slug: 'systems-that-scale',
    title: 'Building Resilient TypeScript Architecture for Zero-Downtime SaaS',
    category: 'Engineering',
    date: 'July 2026',
    read: '8 min read',
    intro:
      'How to structure modular Node.js microservices and Next.js applications to withstand unpredictable user spikes and scale seamlessly.',
    content: [
      'Premature optimization is dangerous, but architectural negligence is fatal. Choosing clean TypeScript types across the entire client-server boundary ensures errors are caught at compile time rather than in production logs.',
      'By decoupling database operations through Prisma ORM and integrating Redis caching layers for read-heavy routes, our web services consistently maintain sub-150ms response times under heavy concurrent load.',
      'Automated end-to-end integration tests combined with preview staging environments on Vercel and AWS guarantee that zero regressions reach the end customer.',
    ],
  },
  {
    slug: 'the-value-of-momentum',
    title: 'The Unfair Advantage of the 30-Day Product Sprint for Early Startups',
    category: 'Strategy & Growth',
    date: 'June 2026',
    read: '5 min read',
    intro:
      'Why the fastest companies win not by perfection, but by shipping polished iterations with relentless cadence.',
    content: [
      'Every week a product spends in stealth without user telemetry is a week of compounded learning lost. The most successful founders ship focused, high-craft MVPs within 30 days.',
      'Early traction fuels investor confidence, refines the value proposition, and creates genuine organic word-of-mouth momentum that paid ads cannot buy.',
      'When you combine high-speed engineering with enterprise design craftsmanship, you create software that competitors cannot replicate easily.',
    ],
  },
];

export const faqList = [
  {
    q: 'How does CCDL handle project delivery and milestone ownership?',
    a: 'We operate in 1-to-2 week agile sprint cycles with live staging builds delivered weekly. Upon milestone completion and payment, 100% of all intellectual property, source repositories, design tokens, and Figma files are irrevocably transferred to you without recurring royalties.',
    cat: 'Delivery',
    takeaway: '100% IP ownership transferred upon milestone completion with zero vendor lock-in.',
  },
  {
    q: 'What is the typical timeline for a 30-Day Startup MVP Sprint?',
    a: 'Week 1 is dedicated to product discovery, database schema, and user journeys. Week 2 focuses on high-fidelity Figma token prototypes. Weeks 3 and 4 encompass full-stack TypeScript engineering, auth, payment rails, integration tests, and live production deployment on Vercel/AWS.',
    cat: 'Delivery',
    takeaway: 'From blank canvas to production-grade, investor-ready web app in 30 calendar days.',
  },
  {
    q: 'Do you work with enterprise teams on existing legacy codebases?',
    a: 'Yes. We specialize in zero-downtime modernization. We incrementally decouple legacy monolithic systems into modular React/TypeScript micro-frontends and robust Node.js/PostgreSQL microservices while maintaining continuous uptime.',
    cat: 'Engineering',
    takeaway: 'Zero-disruption modernization with SOC2-ready testing and rollback safety.',
  },
  {
    q: 'What technologies and frameworks does CCDL build with?',
    a: 'Our core stack focuses on React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, PostgreSQL, Prisma, Redis, Docker, and AWS/Cloudflare edge infrastructure for sub-100ms global latency.',
    cat: 'Engineering',
    takeaway: 'Strictly modern TypeScript with zero-bloat modular architecture and 95+ Core Web Vitals.',
  },
  {
    q: 'What are your pricing structures and engagement models?',
    a: 'We offer two primary models: (1) Fixed-Scope Sprints for defined milestones (like 30-Day MVP at $10k–$25k) with clear deliverables, and (2) Dedicated Senior Squad Retainers for continuous high-velocity product engineering.',
    cat: 'Pricing',
    takeaway: 'Transparent, value-based pricing with clearly defined milestones and zero hidden fees.',
  },
  {
    q: 'How do you protect client confidentiality and proprietary data?',
    a: 'We execute mutual Non-Disclosure Agreements (NDAs) prior to detailed discovery. All client repositories are isolated in dedicated private environments with hardware 2FA and strict role-based access control.',
    cat: 'Pricing',
    takeaway: 'Enforced mutual NDA and complete repository isolation for every partner.',
  },
  {
    q: 'What post-launch warranty and SLA support do you provide?',
    a: 'All custom builds include a standard 30-day post-launch warranty covering any unforeseen bug fixes. We also provide dedicated monthly SLA retainers covering 24/7 security monitoring, feature velocity, and cloud optimization.',
    cat: 'Support',
    takeaway: '30-day comprehensive QA warranty included with every production delivery.',
  },
  {
    q: 'What communication channels do you use during active sprints?',
    a: 'We integrate directly into your workspace (Slack, Microsoft Teams, Discord). You have direct access to our founding architects, daily asynchronous standups, Loom walkthroughs, and weekly live review sessions.',
    cat: 'Support',
    takeaway: 'High-bandwidth direct sync with senior architects — no account manager middlemen.',
  },
];

/* ============================================================
   PAGE COPY DEFINITIONS
   ============================================================ */
interface PageMetaItem {
  label: string;
  title: string;
  titleNode?: React.ReactNode;
  intro: string;
  status?: string;
  primaryText?: string;
  primaryRoute?: string;
  secondaryText?: string;
  secondaryRoute?: string;
}

const pageMeta: Record<string, PageMetaItem> = {
  about: {
    label: 'ABOUT CCDL STUDIO',
    title: 'We design and engineer what comes next.',
    titleNode: (
      <>
        We design &amp; engineer <MarkerHighlight color="blue">what comes next</MarkerHighlight> with <MarkerHighlight color="yellow">human craft</MarkerHighlight> &amp; <MarkerHighlight color="cyan">deep code</MarkerHighlight>.
      </>
    ),
    intro:
      'Climate Change Digital Labs (CCDL) brings strategic product vision, award-winning UI/UX design, and full-stack engineering together to build software that scales globally.',
    status: 'GLOBAL DELIVERY SQUAD • HEADQUARTERS IN INDIA',
    primaryText: 'Explore Capabilities',
    primaryRoute: 'services',
    secondaryText: 'Get in Touch',
    secondaryRoute: 'contact'
  },
  services: {
    label: 'STUDIO CAPABILITIES',
    title: 'Digital product systems built for ambitious scale.',
    titleNode: (
      <>
        Digital product <span className="hero-hl-blue">systems</span>, resilient <span className="hero-hl-purple">architecture</span>, &amp; software for <span className="hero-hl-cyan">ambitious scale</span>.
      </>
    ),
    intro:
      'From foundational product architecture to full-stack cloud deployment, we build systems, interfaces, and software that give our partners an unassailable edge.',
    status: 'ACTIVE PRODUCTION SPRINTS • 18 DEDICATED DOMAINS',
    primaryText: 'Explore Work',
    primaryRoute: 'work',
    secondaryText: 'Get in Touch',
    secondaryRoute: 'contact'
  },
  work: {
    label: 'CLIENT ARCHIVES',
    title: 'Proven work engineered for industry leaders.',
    titleNode: (
      <>
        Proven <span className="hero-hl-blue">digital platforms</span>, design <span className="hero-hl-purple">systems</span>, &amp; apps for <span className="hero-hl-cyan">industry leaders</span>.
      </>
    ),
    intro:
      'A curated showcase of digital applications, decentralized protocols, and enterprise portals crafted for teams that demand absolute craft.',
    status: 'VERIFIED PRODUCTION DEPLOYMENTS • ZERO DOWNTIME',
    primaryText: 'Start a Project',
    primaryRoute: 'contact',
    secondaryText: 'Explore Capabilities',
    secondaryRoute: 'services'
  },
  portfolio: {
    label: 'CLIENT ARCHIVES',
    title: 'Proven work engineered for industry leaders.',
    titleNode: (
      <>
        Proven <span className="hero-hl-blue">digital platforms</span>, design <span className="hero-hl-purple">systems</span>, &amp; apps for <span className="hero-hl-cyan">industry leaders</span>.
      </>
    ),
    intro:
      'A curated showcase of digital applications, decentralized protocols, and enterprise portals crafted for teams that demand absolute craft.',
    status: 'VERIFIED PRODUCTION DEPLOYMENTS • ZERO DOWNTIME',
    primaryText: 'Start a Project',
    primaryRoute: 'contact',
    secondaryText: 'Explore Capabilities',
    secondaryRoute: 'services'
  },
  process: {
    label: 'ENGINEERING BLUEPRINT',
    title: 'A disciplined path from discovery to compound impact.',
    titleNode: (
      <>
        A disciplined <span className="hero-hl-blue">engineering blueprint</span> from <span className="hero-hl-purple">first principles</span> to <span className="hero-hl-cyan">compound impact</span>.
      </>
    ),
    intro:
      'Every engagement is backed by an agile 6-phase engineering lifecycle designed to eliminate guesswork, accelerate delivery, and guarantee enterprise reliability.',
    status: 'AGILE 2-WEEK SPRINT CADENCES • 100% IP TRANSFER',
    primaryText: 'Start Discovery Sprint',
    primaryRoute: 'contact',
    secondaryText: 'Explore Case Studies',
    secondaryRoute: 'work'
  },
  team: {
    label: 'THE COLLECTIVE',
    title: 'Small, elite squad. Serious technical range.',
    titleNode: (
      <>
        Small, elite squad with <span className="hero-hl-blue">serious technical range</span>, obsessive <span className="hero-hl-purple">craft</span>, &amp; <span className="hero-hl-cyan">founder speed</span>.
      </>
    ),
    intro:
      'CCDL is a focused collective of senior architects, product designers, and creative engineers obsessed with craftsmanship and measurable results.',
    status: 'SENIOR ARCHITECTS • ZERO JUNIOR OUTSOURCING',
    primaryText: 'Join the Squad',
    primaryRoute: 'careers',
    secondaryText: 'Get in Touch',
    secondaryRoute: 'contact'
  },
  insights: {
    label: 'THOUGHT LEADERSHIP',
    title: 'Ideas and architecture for modern digital builders.',
    titleNode: (
      <>
        Ideas &amp; <span className="hero-hl-blue">architecture playbooks</span> for modern <span className="hero-hl-purple">product builders</span> &amp; <span className="hero-hl-cyan">engineering leaders</span>.
      </>
    ),
    intro:
      'Deep dives into interface design mathematics, resilient software architecture, and the economics of scaling modern digital products.',
    status: 'PEER-REVIEWED TECHNICAL DISPATCHES',
    primaryText: 'Explore Dispatches',
    primaryRoute: 'blog',
    secondaryText: 'Subscribe via Email',
    secondaryRoute: 'contact'
  },
  contact: {
    label: 'CONTACT US',
    title: 'Get in Touch with Our Team',
    titleNode: (
      <>
        Get in touch with our <span className="hero-hl-blue">founding architects</span> to build <span className="hero-hl-purple">transformative</span> digital <span className="hero-hl-cyan">software</span>.
      </>
    ),
    intro:
      'Have a project inquiry, partnership idea, or question? Reach out to us directly via phone, WhatsApp, email, or by sending a message below.',
    status: 'SUB-2 HOUR INQUIRY RESPONSE TIME GUARANTEED',
    primaryText: 'Explore Our Work',
    primaryRoute: 'work',
    secondaryText: 'Our Methodology',
    secondaryRoute: 'process'
  },
  startups: {
    label: 'FOR STARTUPS & FOUNDERS',
    title: 'Go from concept to market-ready MVP in 30 days.',
    titleNode: (
      <>
        Go from raw <span className="hero-hl-blue">concept</span> to market-ready <span className="hero-hl-purple">MVP</span> in <span className="hero-hl-cyan">30 days flat</span>.
      </>
    ),
    intro:
      'We help venture-backed founders and ambitious entrepreneurs turn complex ideas into polished, investor-grade products ready for immediate traction.',
    status: '30-DAY MVP COMMITMENT • INVESTOR-GRADE QUALITY',
    primaryText: 'Start 30-Day Sprint',
    primaryRoute: 'contact',
    secondaryText: 'Explore Case Studies',
    secondaryRoute: 'work'
  },
  enterprise: {
    label: 'FOR ENTERPRISE & SCALE',
    title: 'Modernize legacy systems and scale design with confidence.',
    titleNode: (
      <>
        Modernize <span className="hero-hl-blue">legacy platforms</span> and scale <span className="hero-hl-purple">design systems</span> with <span className="hero-hl-cyan">zero downtime</span>.
      </>
    ),
    intro:
      'Enterprise-grade digital transformation, SOC2-compliant engineering, dedicated agile squads, and multi-brand design systems built for millions of users.',
    status: 'SOC2-READY PROTOCOLS • ENTERPRISE SLAS',
    primaryText: 'Request Enterprise Proposal',
    primaryRoute: 'contact',
    secondaryText: 'Explore Capabilities',
    secondaryRoute: 'services'
  },
  software: {
    label: 'SOFTWARE ENGINEERING',
    title: 'Full-stack cloud applications engineered for 99.99% uptime.',
    titleNode: (
      <>
        Full-stack <span className="hero-hl-blue">cloud software</span>, resilient <span className="hero-hl-purple">APIs</span>, &amp; systems for <span className="hero-hl-cyan">99.99% uptime</span>.
      </>
    ),
    intro:
      'Resilient TypeScript backends, modern React architectures, microservices, and automated cloud pipelines built to handle massive data throughput.',
    status: 'SUB-100MS LATENCY • EDGE-READY ARCHITECTURE',
    primaryText: 'View Software Work',
    primaryRoute: 'work',
    secondaryText: 'Start a Project',
    secondaryRoute: 'contact'
  },
  strategy: {
    label: 'DIGITAL STRATEGY & ROADMAPS',
    title: 'Architecting market fit before writing a single line of code.',
    titleNode: (
      <>
        Architecting <span className="hero-hl-blue">market fit</span> before writing a single line of <span className="hero-hl-purple">code</span> or <span className="hero-hl-cyan">tokens</span>.
      </>
    ),
    intro:
      'We deconstruct your competitive landscape, user mental models, and unit economics to create an unshakeable digital product blueprint.',
    status: 'DATA-DRIVEN PRODUCT DISCOVERY & TELEMETRY',
    primaryText: 'Explore Methodology',
    primaryRoute: 'process',
    secondaryText: 'Start Strategy Sprint',
    secondaryRoute: 'contact'
  },
  'seo-ads': {
    label: 'GOOGLE SEO & PERFORMANCE ADS',
    title: 'Search engine dominance and high-ROI acquisition engines.',
    titleNode: (
      <>
        Google <span className="hero-hl-blue">search dominance</span>, technical <span className="hero-hl-purple">Core Web Vitals</span>, &amp; high-ROI <span className="hero-hl-cyan">growth engines</span>.
      </>
    ),
    intro:
      'Technical Core Web Vitals optimization, semantic schema data, and precision Google Ads campaigns engineered to drive compounding qualified revenue.',
    status: '100% WHITE-HAT TECHNICAL AUDIT & RANKINGS',
    primaryText: 'Explore SEO Audit Hub',
    primaryRoute: 'seo-strategy',
    secondaryText: 'Start a Project',
    secondaryRoute: 'contact'
  },
  ecommerce: {
    label: 'E-COMMERCE & STOREFRONTS',
    title: 'High-conversion headless commerce and checkout experiences.',
    titleNode: (
      <>
        High-conversion <span className="hero-hl-blue">headless commerce</span>, 3D <span className="hero-hl-purple">visualizers</span>, &amp; friction-free <span className="hero-hl-cyan">checkout flows</span>.
      </>
    ),
    intro:
      'Sub-second load times, bespoke 3D product visualizers, dynamic bundling, and friction-free payment funnels designed to maximize average order value.',
    status: 'SUB-SECOND PAGE LOADS • HIGH AOV OPTIMIZED',
    primaryText: 'Start Commerce Sprint',
    primaryRoute: 'contact',
    secondaryText: 'View Case Studies',
    secondaryRoute: 'work'
  },
  'web-design': {
    label: 'EDITORIAL WEB DESIGN',
    title: 'Brand experiences with mathematical layout precision.',
    titleNode: (
      <>
        Editorial <span className="hero-hl-blue">web design</span> with mathematical <span className="hero-hl-purple">layout precision</span> &amp; fluid <span className="hero-hl-cyan">micro-motion</span>.
      </>
    ),
    intro:
      'We design bespoke, responsive web presences that fuse striking visual storytelling, kinetic typography, and fluid micro-motion.',
    status: 'AWWWARDS-CALIBER TYPOGRAPHY & PERFORMANCE',
    primaryText: 'Explore Web Work',
    primaryRoute: 'work',
    secondaryText: 'Start a Project',
    secondaryRoute: 'contact'
  },
  branding: {
    label: 'BRAND IDENTITY & SYSTEMS',
    title: 'Distinctive visual identities engineered for digital scale.',
    titleNode: (
      <>
        Distinctive <span className="hero-hl-blue">visual identities</span>, token <span className="hero-hl-purple">systems</span>, &amp; typography for <span className="hero-hl-cyan">digital scale</span>.
      </>
    ),
    intro:
      'From custom logomarks and typographic rules to comprehensive multi-channel digital design guidelines that make your brand unmistakable.',
    status: 'MULTI-CHANNEL DESIGN TOKENS & FIGMA KITS',
    primaryText: 'Start Brand Project',
    primaryRoute: 'contact',
    secondaryText: 'Explore Portfolio',
    secondaryRoute: 'work'
  },
  'digital-products': {
    label: 'DIGITAL PRODUCTS & SAAS',
    title: 'SaaS applications built around habit loops and user retention.',
    titleNode: (
      <>
        SaaS applications built around <span className="hero-hl-blue">habit loops</span>, telemetry, &amp; <span className="hero-hl-cyan">world-class UX</span>.
      </>
    ),
    intro:
      'Intuitive onboarding journeys, telemetry-driven features, and responsive design systems that keep power users engaged and churn at record lows.',
    status: 'USER-CENTRIC RETENTION LOOPS & TELEMETRY',
    primaryText: 'Explore SaaS Work',
    primaryRoute: 'work',
    secondaryText: 'Start a Project',
    secondaryRoute: 'contact'
  },
  'product-design': {
    label: 'PRODUCT DESIGN (UI/UX)',
    title: 'Interfaces engineered for intuitive clarity and delight.',
    titleNode: (
      <>
        Product interfaces engineered for <span className="hero-hl-blue">intuitive clarity</span>, speed, &amp; <span className="hero-hl-cyan">user delight</span>.
      </>
    ),
    intro:
      'Human-centered interaction design, user journey optimization, design tokens, and fluid micro-animations that turn casual visitors into loyal power users.',
    status: 'FIGMA INTERACTIVE PROTOTYPES • DESIGN TOKENS',
    primaryText: 'View Design Work',
    primaryRoute: 'work',
    secondaryText: 'Start a Project',
    secondaryRoute: 'contact'
  },
  'design-systems': {
    label: 'DESIGN SYSTEMS & SCALE',
    title: 'Unified tokens and component libraries for rapid product velocity.',
    titleNode: (
      <>
        Unified <span className="hero-hl-blue">design tokens</span> and component libraries for <span className="hero-hl-purple">10x product velocity</span> &amp; <span className="hero-hl-cyan">consistency</span>.
      </>
    ),
    intro:
      'Stop recreating wheels. We build production-ready, multi-brand token architectures and Storybook component ecosystems that 10x developer shipping speed.',
    status: 'STORYBOOK & FIGMA TOKENS SYNCHRONIZATION',
    primaryText: 'Explore Systems Work',
    primaryRoute: 'work',
    secondaryText: 'Start a Project',
    secondaryRoute: 'contact'
  },
  careers: {
    label: 'CAREERS AT CCDL',
    title: 'Join an elite collective of digital craftspeople.',
    titleNode: (
      <>
        Join an elite <span className="hero-hl-blue">collective</span> of digital <span className="hero-hl-purple">craftspeople</span> shipping <span className="hero-hl-cyan">world-class software</span>.
      </>
    ),
    intro:
      'We are looking for ambitious product designers, TypeScript architects, and creative technologists who obsess over details and take pride in their craft.',
    status: 'REMOTE-FIRST • GLOBAL TALENT WELCOME',
    primaryText: 'Send Portfolio & Code',
    primaryRoute: 'contact',
    secondaryText: 'Read Our Story',
    secondaryRoute: 'about'
  },
  privacy: {
    label: 'LEGAL & COMPLIANCE',
    title: 'Enterprise Privacy Policy & Data Protection Standards.',
    titleNode: (
      <>
        Enterprise <span className="hero-hl-blue">privacy policy</span>, strict <span className="hero-hl-purple">data protection</span>, &amp; zero-trust <span className="hero-hl-cyan">standards</span>.
      </>
    ),
    intro:
      'Your privacy and data security are fundamental to our engineering philosophy. Learn how CCDL handles, protects, and isolates client information.',
    status: 'GDPR, CCPA & ZERO-TRUST ARCHITECTURE COMPLIANT',
    primaryText: 'Explore Security Standards',
    primaryRoute: 'security',
    secondaryText: 'Contact Privacy Officer',
    secondaryRoute: 'contact'
  },
  terms: {
    label: 'LEGAL AGREEMENT',
    title: 'Terms of Service & Master Services Standards.',
    titleNode: (
      <>
        Terms of <span className="hero-hl-blue">service</span>, master <span className="hero-hl-purple">services agreement</span>, &amp; irrevocable <span className="hero-hl-cyan">IP transfer</span>.
      </>
    ),
    intro:
      'Clear, transparent terms governing client engagements, intellectual property ownership, service level agreements, and project deliverables.',
    status: '100% REPOSITORY TRANSFER • ZERO IP AMBIGUITY',
    primaryText: 'Partner With Us',
    primaryRoute: 'contact',
    secondaryText: 'Explore Delivery Process',
    secondaryRoute: 'process'
  },
  security: {
    label: 'SECURITY & COMPLIANCE',
    title: 'Zero-Trust Architecture & Enterprise Security Protocols.',
    titleNode: (
      <>
        Zero-trust <span className="hero-hl-blue">architecture</span>, automated <span className="hero-hl-purple">vulnerability testing</span>, &amp; <span className="hero-hl-cyan">SOC2 protocols</span>.
      </>
    ),
    intro:
      'How CCDL implements automated vulnerability testing, strict client repository isolation, SOC2 readiness, and end-to-end data encryption.',
    status: 'SOC2-READY • AIR-GAPPED REPOSITORIES • HARDWARE 2FA',
    primaryText: 'Start Secure Engagement',
    primaryRoute: 'contact',
    secondaryText: 'Contact Security Desk',
    secondaryRoute: 'contact'
  },
  cookies: {
    label: 'COOKIE POLICY',
    title: 'Transparent Cookie & Telemetry Standards.',
    titleNode: (
      <>
        Transparent <span className="hero-hl-blue">cookie policy</span> and essential <span className="hero-hl-purple">session telemetry</span> <span className="hero-hl-cyan">standards</span>.
      </>
    ),
    intro:
      'We respect your digital footprint. Learn how we utilize essential session tokens and anonymous Core Web Vitals telemetry.',
    status: 'ZERO THIRD-PARTY TRACKERS • RESPECTFUL TELEMETRY',
    primaryText: 'Read Privacy Terms',
    primaryRoute: 'privacy',
    secondaryText: 'Contact Support',
    secondaryRoute: 'contact'
  },
  faqs: {
    label: 'FREQUENTLY ASKED QUESTIONS',
    title: 'Everything you need to know about partnering with CCDL.',
    titleNode: (
      <>
        Frequently asked <span className="hero-hl-blue">questions</span> on delivery <span className="hero-hl-purple">sprints</span>, pricing, &amp; <span className="hero-hl-cyan">ownership</span>.
      </>
    ),
    intro:
      'Answers to common questions regarding our delivery methodology, sprint timelines, pricing models, IP ownership, and post-launch SLAs.',
    status: '100% TRANSPARENCY • FLAT-RATE PRICING GUIDES',
    primaryText: 'Get in Touch',
    primaryRoute: 'contact',
    secondaryText: 'View Case Studies',
    secondaryRoute: 'work'
  },
};

/* ============================================================
   MAIN CCDLPAGE COMPONENT
   ============================================================ */
export default function CCDLPage({
  pageId,
  onNavigate,
}: {
  pageId: string;
  onNavigate: (page: string) => void;
}) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [calcTier, setCalcTier] = useState<'startup' | 'growth' | 'enterprise'>('growth');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState('All');
  const [faqSearch, setFaqSearch] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactSubject, setContactSubject] = useState('General Inquiry');
  const [contactMessage, setContactMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [cookieResetSuccess, setCookieResetSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  // Filtered FAQs for FAQ page
  const filteredFaqs = useMemo(() => {
    return faqList.filter((item) => {
      const matchCat = faqCategory === 'All' || item.cat === faqCategory;
      const matchSearch =
        !faqSearch.trim() ||
        item.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
        item.a.toLowerCase().includes(faqSearch.toLowerCase()) ||
        (item.takeaway && item.takeaway.toLowerCase().includes(faqSearch.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [faqCategory, faqSearch]);

  // Normalize page IDs for aliased routes
  let normalizedPageId = pageId;
  if (pageId === 'portfolio') normalizedPageId = 'work';
  if (pageId === 'growth' || pageId === 'seo-growth') normalizedPageId = 'seo-ads';
  if (pageId === 'fullstack-software') normalizedPageId = 'software';
  if (pageId === 'digital-strategy') normalizedPageId = 'strategy';

  // 0. SEO STRATEGY & TECHNICAL AUDIT HUB
  if (pageId === 'seo-strategy' || pageId === 'seo-audit') {
    return <SEOStrategyPage onNavigate={onNavigate} />;
  }

  // 0.1 DEDICATED 18 SERVICE HUBS
  let serviceSlug = '';
  if (pageId.startsWith('service-')) {
    serviceSlug = pageId.replace('service-', '');
  } else if (pageId.startsWith('services/')) {
    serviceSlug = pageId.replace('services/', '');
  } else if (SEO_SERVICES_MAP[pageId]) {
    serviceSlug = pageId;
  }

  // Handle common aliases
  if (serviceSlug === 'uiux' || serviceSlug === 'ui-ux') serviceSlug = 'ui-ux-design';
  if (serviceSlug === 'software') serviceSlug = 'software-development';
  if (serviceSlug === 'web' || serviceSlug === 'website') serviceSlug = 'website-development';
  if (serviceSlug === 'mobile' || serviceSlug === 'app') serviceSlug = 'mobile-app-development';

  if (serviceSlug) {
    let matched = SEO_SERVICES_MAP[serviceSlug];
    if (!matched) {
      const foundKey = Object.keys(SEO_SERVICES_MAP).find(k => k.includes(serviceSlug) || serviceSlug.includes(k));
      matched = foundKey ? SEO_SERVICES_MAP[foundKey] : SEO_SERVICES_MAP['software-development'];
    }
    return <ServiceDetailPage service={matched} onNavigate={onNavigate} />;
  }

  // 1. DEDICATED SINGLE BLOG ARTICLE VIEW (e.g. article/:slug or blog/:slug or insights/:slug)
  if (
    pageId.startsWith('article/') ||
    pageId.startsWith('blog/') ||
    (pageId.startsWith('insights/') && pageId.includes('/'))
  ) {
    const parts = pageId.split('/');
    const slug = parts.slice(1).join('/');
    return <SingleArticlePage slug={slug} onNavigate={onNavigate} />;
  }

  // 1.01 Match directly by slug if route matches a known blog post
  const directPostMatch = BLOG_POSTS.find((p) => p.slug === pageId);
  if (directPostMatch) {
    return <SingleArticlePage slug={directPostMatch.slug} onNavigate={onNavigate} />;
  }

  // 1. DEDICATED BLOG AND COMMUNITY HUBS
  if (normalizedPageId === 'blog' || normalizedPageId === 'insights') {
    return <BlogPage onNavigate={onNavigate} />;
  }

  if (normalizedPageId === 'community') {
    return <CommunityPage onNavigate={onNavigate} />;
  }

  // 1. DEDICATED CASE STUDY VIEW (e.g. case-study/hire-professional)
  if (pageId.startsWith('case-study/')) {
    const slug = pageId.replace('case-study/', '');
    const study = caseStudiesDetail[slug] || caseStudiesDetail['hire-professional'];

    return (
      <main className="inner-page case-study-page">
        <section className="section-pad case-study-hero">
          <div className="case-study-hero-inner">
            <button
              onClick={() => onNavigate('work')}
              className="article-back-btn"
              style={{ cursor: 'pointer', background: 'transparent', border: 'none', font: 'inherit', color: 'inherit' }}
            >
              ← Back to All Work
            </button>

            <div className="case-study-badge-row">
              <span className="case-category-tag">{study.tag}</span>
              <span className="article-date-badge">{study.year}</span>
              <span className="case-metric-highlight">{study.metrics}</span>
            </div>

            <h1 className="case-study-hero-title">{study.title}</h1>
            <p className="case-study-hero-subtitle">{study.subtitle}</p>

            <div className="case-study-meta-grid">
              <div className="meta-box">
                <span className="meta-box-label">CLIENT</span>
                <strong>{study.client}</strong>
              </div>
              <div className="meta-box">
                <span className="meta-box-label">DURATION</span>
                <strong>{study.duration}</strong>
              </div>
              <div className="meta-box">
                <span className="meta-box-label">ARCHITECTURE STATUS</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.02em' }}>
                  Enterprise Production
                </span>
              </div>
            </div>

            <div className="case-study-hero-img-wrap">
              <img src={study.heroImg} alt={study.title} className="case-study-hero-img" />
            </div>
          </div>
        </section>

        <section className="section-pad case-study-content">
          <div className="case-study-layout">
            <div className="case-section-block">
              <span className="sub-badge">01 / THE CHALLENGE</span>
              <h2>Eliminating friction at enterprise scale.</h2>
              <p className="case-narrative-p">{study.challenge}</p>
            </div>

            <div className="case-section-block">
              <span className="sub-badge">02 / ARCHITECTURE & SOLUTION</span>
              <h2>Engineered with mathematical precision.</h2>
              <p className="case-narrative-p">{study.solution}</p>

              <div className="case-features-grid">
                {study.features.map((f) => (
                  <div key={f.title} className="case-feature-card">
                    <CheckCircle2 size={18} className="text-cyan-400" />
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-section-block">
              <span className="sub-badge">03 / QUANTIFIABLE IMPACT</span>
              <h2>Verified operational results.</h2>

              <div className="case-results-grid">
                {study.results.map((r) => (
                  <div key={r.label} className="case-result-card">
                    <strong className="result-stat">{r.stat}</strong>
                    <span className="result-label-text">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-tech-stack-section">
              <span className="deliverables-title">PRODUCTION TECH STACK</span>
              <div className="srv-tech-pills" style={{ marginTop: '0.75rem' }}>
                {study.stack.map((t) => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="case-bottom-cta">
              <div>
                <h2>Ready to build your next flagship product?</h2>
                <p>Collaborate directly with the senior architects behind this case study.</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('contact')} className="button button-dark">
                  Start Project Brief <ArrowUpRight size={16} />
                </button>
                <button
                  onClick={() => onNavigate('work')}
                  className="button alien-hero-btn-outline"
                >
                  View All Projects ←
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // 2. DEDICATED ARTICLE READING VIEW (e.g. article/optimizing-core-web-vitals-react-nextjs)
  if (pageId.startsWith('article/')) {
    const slug = pageId.split('/')[1];
    return <SingleArticlePage slug={slug} onNavigate={onNavigate} />;
  }

  const copy = pageMeta[normalizedPageId] || pageMeta.about;

  // Filtered projects for work page
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return allProjectsData;
    return allProjectsData.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <div className={`inner-page inner-${normalizedPageId}`}>
      {/* ============================================================
          UNIVERSAL HIGH-END HERO HEADER (Matching Home Page Foundation)
          ============================================================ */}
      <section className="hero section-pad alien-hero inner-hero" id={`inner-${normalizedPageId}`}>
        <div className="hero-grid alien-hero-grid inner-hero-grid" style={{ minHeight: 'auto', display: 'block' }}>
          {/* Top Status Bar (Live Availability & Clutch Rating - matches Home Hero) */}
          <div className="hero-meta alien-hero-meta">
            <div className="hero-live-status">
              <span className="live-pulse-dot" />
              <span className="live-status-text">
                {copy.status || 'AVAILABLE FOR SPRINT COMMISSIONS'}
              </span>
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="hero-rating-badge"
              style={{ cursor: 'pointer', background: 'transparent', border: 'none' }}
            >
              <span className="rating-clutch">CLUTCH</span>
              <span className="rating-num">4.9</span>
              <Star size={13} fill="currentColor" />
              <span className="rating-divider">/</span>
              <span>50+ REVIEWS</span>
            </button>
          </div>

          {/* Main Headline & Narrative Copy */}
          <div className="hero-copy alien-hero-copy">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-badge-row"
            >
              <button
                onClick={() => onNavigate('about')}
                className="kicker-pill"
                style={{ cursor: 'pointer', border: 'none', display: 'inline-flex', alignItems: 'center' }}
              >
                <Sparkles size={13} className="pill-spark" />
                {copy.label}
              </button>
            </motion.div>

            <h1 className="display-title alien-display-title">
              {copy.titleNode || copy.title}
            </h1>

            <div className="hero-bottom alien-hero-bottom">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="hero-narrative"
              >
                {copy.intro}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="hero-actions alien-hero-actions"
              >
                <button
                  className="button button-dark alien-hero-btn"
                  onClick={() => onNavigate(copy.primaryRoute || (normalizedPageId === 'work' ? 'contact' : 'work'))}
                  style={{ cursor: 'pointer' }}
                >
                  <span>{copy.primaryText || (normalizedPageId === 'work' ? 'Start a Project' : 'Explore Work')}</span>
                  <ArrowDownRight size={16} />
                </button>

                <button
                  className="button alien-hero-btn-outline"
                  onClick={() => onNavigate(copy.secondaryRoute || 'contact')}
                  style={{ cursor: 'pointer' }}
                >
                  <span>{copy.secondaryText || 'Get in Touch'}</span>
                  <ArrowUpRight size={16} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PAGE: WORK / PORTFOLIO
          ============================================================ */}
      {normalizedPageId === 'work' && (
        <section className="section-pad inner-work-section">
          <div className="work-controls-bar">
            <div className="work-filter-pills">
              {['All', 'Platforms', 'EdTech', 'DeFi'].map((cat) => (
                <button
                  key={cat}
                  className={`work-filter-btn ${activeFilter === cat ? 'is-active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="work-count-label">
              Showing {filteredProjects.length} Verified Case Studies
            </span>
          </div>

          <div className="inner-work-grid">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal
                key={project.title}
                delay={idx * 80}
                className="enterprise-case-card"
                role={project.liveUrl ? 'link' : undefined}
                tabIndex={project.liveUrl ? 0 : undefined}
                onClick={project.liveUrl ? () => window.open(project.liveUrl, '_blank', 'noopener,noreferrer') : undefined}
                onKeyDown={project.liveUrl ? (event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                  }
                } : undefined}
              >
                <div
                  className="case-card-media"
                  onClick={(event) => {
                    event.stopPropagation();
                    if (project.liveUrl) window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                    else onNavigate(`case-study/${project.id}`);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <img
    src={project.image}
    alt={`${project.title} project preview`}
    loading={idx < 3 ? 'eager' : 'lazy'}
    decoding="async"
    onError={(event) => {
      const image = event.currentTarget;
      if (image.dataset.fallbackApplied) return;
      image.dataset.fallbackApplied = 'true';
      image.src = 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=1200';
    }}
  />
                  <span className="case-category-tag">{project.category}</span>
                </div>

                <div className="case-card-body">
                  <div className="case-meta-row">
                    <span className="case-metric-highlight">{project.metrics}</span>
                  </div>

                  <h3
                    className="case-title"
                    onClick={(event) => {
                      event.stopPropagation();
                      if (project.liveUrl) window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                      else onNavigate(`case-study/${project.id}`);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {project.title}
                  </h3>
                  <p className="case-description">{project.text}</p>

                  <div className="case-tech-stack">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="case-action-row">
                    {'liveUrl' in project && project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="case-live-btn">
                        <span>View Project</span>
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <button
                        onClick={() => onNavigate(`case-study/${project.id}`)}
                        className="case-live-btn"
                      >
                        <span>In-Depth Case Study</span>
                        <ArrowRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>


        </section>
      )}

      {/* ============================================================
          PAGE: SERVICES
          ============================================================ */}
      {normalizedPageId === 'services' && (
        <section className="section-pad inner-services-section">
          {/* Services Grid */}
          <div className="enterprise-services-grid">
            {servicesData.map((srv, idx) => (
              <ScrollReveal key={srv.id} delay={idx * 60} className="enterprise-service-card">
                <div className="srv-card-top">
                  <span className="srv-index">0{idx + 1}</span>
                  <span className="srv-category-tag">{srv.category}</span>
                </div>

                <h3 className="srv-card-title">{srv.title}</h3>
                <p className="srv-card-desc">{srv.description}</p>

                <div className="srv-deliverables-box">
                  <span className="deliverables-title">CORE DELIVERABLES</span>
                  <ul>
                    {srv.deliverables.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={14} className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="srv-card-footer">
                  <div className="srv-tech-pills">
                    {srv.tech.map((t) => (
                      <span key={t} className="tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button onClick={() => onNavigate('contact')} className="srv-inquire-btn">
                    <span>Inquire</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Interactive Project Scope Estimator */}
          <div className="interactive-scope-estimator">
            <div className="estimator-header">
              <span className="estimator-badge">INTERACTIVE SCOPE BUILDER</span>
              <h2>Calculate Your Project Architecture Timeline</h2>
              <p>Select your tier to see recommended dedicated squad allocation and delivery milestones.</p>
            </div>

            <div className="tier-selector-pills">
              <button
                className={`tier-btn ${calcTier === 'startup' ? 'is-active' : ''}`}
                onClick={() => setCalcTier('startup')}
              >
                <b>01. Startup MVP</b>
                <span>3–4 Week Sprint</span>
              </button>

              <button
                className={`tier-btn ${calcTier === 'growth' ? 'is-active' : ''}`}
                onClick={() => setCalcTier('growth')}
              >
                <b>02. Growth & Scaling</b>
                <span>6–8 Week Sprint</span>
              </button>

              <button
                className={`tier-btn ${calcTier === 'enterprise' ? 'is-active' : ''}`}
                onClick={() => setCalcTier('enterprise')}
              >
                <b>03. Enterprise System</b>
                <span>Dedicated Squad</span>
              </button>
            </div>

            <div className="estimator-result-card">
              <div className="result-col">
                <span className="result-label">ESTIMATED TIMELINE</span>
                <strong className="result-val">
                  {calcTier === 'startup' ? '3–4 Weeks' : calcTier === 'growth' ? '6–8 Weeks' : '10–12 Weeks'}
                </strong>
                <span className="result-sub">Includes Discovery, UI/UX & Deployment</span>
              </div>

              <div className="result-col">
                <span className="result-label">DEDICATED SQUAD</span>
                <strong className="result-val">
                  {calcTier === 'startup' ? '1 Designer + 1 Fullstack Eng' : calcTier === 'growth' ? '1 Lead UX + 2 Fullstack Eng + QA' : 'Full Agile Pod (Lead + 4 Eng + QA)'}
                </strong>
                <span className="result-sub">Direct Slack/Teams channel integration</span>
              </div>

              <div className="result-action">
                <button onClick={() => onNavigate('contact')} className="button button-dark">
                  Book This Sprint <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}



      {/* ============================================================
          PAGE: PROCESS
          ============================================================ */}
      {normalizedPageId === 'process' && (
        <section className="section-pad inner-process-section">
          <div className="process-timeline-wrap">
            {processStages.map((stage, idx) => (
              <ScrollReveal key={stage.step} delay={idx * 70} className="process-timeline-card">
                <div className="timeline-col-step">
                  <span className="timeline-step-num">{stage.step}</span>
                  <span className="timeline-time-badge">{stage.time}</span>
                </div>

                <div className="timeline-col-content">
                  <h3 className="timeline-title">{stage.name}</h3>
                  <p className="timeline-description">{stage.description}</p>

                  <div className="timeline-deliverables-grid">
                    {stage.deliverables.map((item) => (
                      <div key={item} className="timeline-deliverable-item">
                        <CheckCircle2 size={15} className="timeline-check" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Enterprise SLA Guarantee Bar */}
          <div className="enterprise-sla-bar">
            <div className="sla-item">
              <ShieldCheck size={28} className="text-blue-500" />
              <div>
                <strong>100% IP Ownership</strong>
                <span>All Figma source files, tokens, and code repositories are 100% yours.</span>
              </div>
            </div>

            <div className="sla-item">
              <Zap size={28} className="text-blue-500" />
              <div>
                <strong>Weekly Live Demos</strong>
                <span>No black-box engineering. Interactive staging builds delivered every sprint.</span>
              </div>
            </div>

            <div className="sla-item">
              <Award size={28} className="text-blue-500" />
              <div>
                <strong>99.99% Reliability Guarantee</strong>
                <span>Production code engineered for maximum resilience and speed.</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: ABOUT & THE COLLECTIVE
          ============================================================ */}
      {(normalizedPageId === 'about' || normalizedPageId === 'team') && (
        <section className="section-pad inner-about-section">
          {/* Studio Telemetry Cockpit */}
          <div className="about-telemetry-cockpit">
            <div className="telemetry-top-bar">
              <div className="telemetry-pulse-label">
                <span className="telemetry-live-dot" />
                <span>STUDIO TELEMETRY & VERIFIED METRICS</span>
              </div>
              <span className="telemetry-sub-meta">JAIPUR HQ • GLOBAL CLIENTS • 2026 SPRINT ARCHIVE</span>
            </div>

            <div className="about-metrics-grid">
              <ScrollReveal delay={40} className="metric-box metric-box-cyan">
                <div className="metric-icon-wrap">
                  <Sparkles size={20} className="metric-icon" />
                  <span className="metric-badge-tag">SHIPPED</span>
                </div>
                <strong className="metric-number">50+</strong>
                <span className="metric-title">Digital Products Shipped</span>
                <span className="metric-desc">Web apps, SaaS & enterprise platforms delivered</span>
                <div className="metric-footer-bar">
                  <span className="metric-trend-pill">100% On-Time Delivery</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80} className="metric-box metric-box-gold">
                <div className="metric-icon-wrap">
                  <Star size={20} className="metric-icon text-amber-400" />
                  <span className="metric-badge-tag">VERIFIED</span>
                </div>
                <strong className="metric-number">4.9/5</strong>
                <span className="metric-title">Verified Clutch Score</span>
                <span className="metric-desc">Independent verified client reviews & testimonials</span>
                <div className="metric-footer-bar">
                  <span className="metric-trend-pill">Top 1% Digital Studio</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120} className="metric-box metric-box-blue">
                <div className="metric-icon-wrap">
                  <TrendingUp size={20} className="metric-icon text-blue-400" />
                  <span className="metric-badge-tag">CAPITAL</span>
                </div>
                <strong className="metric-number">$120M+</strong>
                <span className="metric-title">Client Capital Raised</span>
                <span className="metric-desc">Across YC, Seed & Series A partner portfolios</span>
                <div className="metric-footer-bar">
                  <span className="metric-trend-pill">High-Conversion MVPs</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={160} className="metric-box metric-box-purple">
                <div className="metric-icon-wrap">
                  <Globe2 size={20} className="metric-icon text-purple-400" />
                  <span className="metric-badge-tag">REACH</span>
                </div>
                <strong className="metric-number">14+</strong>
                <span className="metric-title">Global Client Markets</span>
                <span className="metric-desc">US, UK, UAE, India, Singapore & European hubs</span>
                <div className="metric-footer-bar">
                  <span className="metric-trend-pill">24/7 Timezone Sync</span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Philosophy Statement & Engineering Code Split */}
          <div className="about-narrative-split">
            <div className="narrative-col-left">
              <span className="sub-badge">01 / OUR ENGINEERING CODE</span>
              <h2>We reject digital noise in favor of mathematical craftsmanship.</h2>
              
              <div className="narrative-quote-card">
                <p>
                  “Exceptional software is not born from decorative vanity. It is forged through optical
                  balance, typographic discipline, and resilient TypeScript engineering.”
                </p>
                <div className="quote-author-row">
                  <span className="quote-badge">CCDL CORE PHILOSOPHY</span>
                  <span className="quote-loc">SRI GANGANAGAR, RAJASTHAN</span>
                </div>
              </div>

              <div className="narrative-loc-pill">
                <Globe2 size={16} className="text-cyan-400" />
                <span>Near Bikaner Bypass, Anupgarh, Sri Ganganagar, Rajasthan, India • Global Engineering Network</span>
              </div>
            </div>

            <div className="narrative-col-right">
              <div className="engineering-pillars-grid">
                <div className="pillar-mini-card">
                  <div className="pillar-num-badge">01</div>
                  <h4>Extreme Visual Clarity</h4>
                  <p>8px layout baseline grids, mathematical contrast, and spatial breathing room that eliminates user cognitive fatigue.</p>
                </div>

                <div className="pillar-mini-card">
                  <div className="pillar-num-badge">02</div>
                  <h4>Sub-Second Performance</h4>
                  <p>Zero-bloat TypeScript, Next.js/Vite bundles, and 95+ Core Web Vitals optimized for instant search engine indexing.</p>
                </div>

                <div className="pillar-mini-card">
                  <div className="pillar-num-badge">03</div>
                  <h4>100% Source Code Ownership</h4>
                  <p>Complete Git repositories, Figma design tokens, and infrastructure configurations transferred without royalties or lock-in.</p>
                </div>

                <div className="pillar-mini-card">
                  <div className="pillar-num-badge">04</div>
                  <h4>Direct Senior Engineering</h4>
                  <p>High-bandwidth async Slack/Teams syncs directly with founding architects — zero junior handoffs or account manager lag.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Collective / Team Members Showcase (Compressed 2-Section Design) */}
          <div className="team-collective-block">
            <div className="team-header-split">
              <div>
                <span className="sub-badge">02 / CORE COLLECTIVE & SQUAD</span>
                <h2>Meet the minds behind every build.</h2>
                <p className="team-header-sub">
                  Dedicated specialists in Web Design, High-Speed Frontend, and Scalable Backend Systems.
                </p>
              </div>
              <div className="team-header-badges">
                <span className="team-badge-pill">
                  <span className="kicker-dot" /> 4 CORE ARCHITECTS
                </span>
                <span className="team-badge-pill">100% IN-HOUSE</span>
              </div>
            </div>

            <div className="team-section-container">
              {/* Section 1: Design & Frontend Leadership */}
              <div className="team-sub-section">
                <div className="team-sub-header">
                  <div className="team-sub-header-left">
                    <span className="sub-badge">01 / CREATIVE CORE</span>
                    <h3>Design & Frontend Leadership</h3>
                    <p>Interface design, visual architecture & high-speed frontend engineering</p>
                  </div>
                  <span className="team-sub-badge">2 Core Specialists</span>
                </div>

                <div className="team-compressed-grid">
                  {teamMembers.slice(0, 2).map((member, idx) => (
                    <ScrollReveal key={member.name} delay={idx * 80}>
                      <TiltCard className="team-compact-card" maxTilt={7} scale={1.02} glare={true}>
                        {/* ONLY Photo */}
                        <div className="team-compact-avatar-wrap" data-cursor="LEADER">
                          <img
                            src={member.image}
                            alt={`${member.name} - ${member.role}`}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* ONLY Name, Experience, and Role */}
                        <div className="team-compact-body">
                          <div className="team-compact-header-row">
                            <h4 className="team-compact-name">{member.name}</h4>
                            <span className="team-compact-exp">{member.experience}</span>
                          </div>
                          <p className="team-compact-role">{member.role}</p>
                        </div>
                      </TiltCard>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Section 2: Backend Architecture & Cloud Systems */}
              <div className="team-sub-section">
                <div className="team-sub-header">
                  <div className="team-sub-header-left">
                    <span className="sub-badge">02 / SYSTEMS CORE</span>
                    <h3>Backend Architecture & Cloud Systems</h3>
                    <p>Distributed services, database schemas & secure cloud infrastructure</p>
                  </div>
                  <span className="team-sub-badge">2 Core Specialists</span>
                </div>

                <div className="team-compressed-grid">
                  {teamMembers.slice(2, 4).map((member, idx) => (
                    <ScrollReveal key={member.name} delay={idx * 80 + 160}>
                      <TiltCard className="team-compact-card" maxTilt={7} scale={1.02} glare={true}>
                        {/* ONLY Photo */}
                        <div className="team-compact-avatar-wrap" data-cursor="LEADER">
                          <img
                            src={member.image}
                            alt={`${member.name} - ${member.role}`}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* ONLY Name, Experience, and Role */}
                        <div className="team-compact-body">
                          <div className="team-compact-header-row">
                            <h4 className="team-compact-name">{member.name}</h4>
                            <span className="team-compact-exp">{member.experience}</span>
                          </div>
                          <p className="team-compact-role">{member.role}</p>
                        </div>
                      </TiltCard>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Studio Tech DNA & Tooling Matrix */}
          <div className="about-tech-dna-section">
            <div className="tech-dna-header">
              <span className="sub-badge">03 / STUDIO TECH DNA</span>
              <h2>Engineered with modern, production-hardened tools.</h2>
              <p>We select our stack strictly for speed, type-safety, resilience, and developer velocity.</p>
            </div>

            <div className="tech-dna-grid">
              <div className="tech-dna-card">
                <div className="dna-card-header">
                  <Palette size={20} className="text-cyan-400" />
                  <h4>Product & UI/UX Design</h4>
                </div>
                <p>Human-centered interaction design and multi-brand token systems.</p>
                <div className="dna-tags-wrap">
                  <span className="dna-tag">Figma Tokens</span>
                  <span className="dna-tag">Storybook</span>
                  <span className="dna-tag">Principle</span>
                  <span className="dna-tag">Design Systems</span>
                  <span className="dna-tag">Micro-Motion</span>
                </div>
              </div>

              <div className="tech-dna-card">
                <div className="dna-card-header">
                  <Code2 size={20} className="text-blue-400" />
                  <h4>Frontend Engineering</h4>
                </div>
                <p>Ultra-responsive, accessible React interfaces with sub-second rendering.</p>
                <div className="dna-tags-wrap">
                  <span className="dna-tag">React 18+</span>
                  <span className="dna-tag">TypeScript</span>
                  <span className="dna-tag">Next.js App Router</span>
                  <span className="dna-tag">Tailwind CSS</span>
                  <span className="dna-tag">GSAP / Motion</span>
                </div>
              </div>

              <div className="tech-dna-card">
                <div className="dna-card-header">
                  <Server size={20} className="text-purple-400" />
                  <h4>Backend & Architecture</h4>
                </div>
                <p>Resilient microservices, REST/GraphQL APIs, and scalable relational schemas.</p>
                <div className="dna-tags-wrap">
                  <span className="dna-tag">Node.js</span>
                  <span className="dna-tag">PostgreSQL</span>
                  <span className="dna-tag">Prisma ORM</span>
                  <span className="dna-tag">Redis Caching</span>
                  <span className="dna-tag">GraphQL</span>
                </div>
              </div>

              <div className="tech-dna-card">
                <div className="dna-card-header">
                  <ShieldCheck size={20} className="text-emerald-400" />
                  <h4>Cloud & Security</h4>
                </div>
                <p>Automated CI/CD pipelines, containerization, and zero-trust security protocols.</p>
                <div className="dna-tags-wrap">
                  <span className="dna-tag">Docker</span>
                  <span className="dna-tag">AWS ECS / S3</span>
                  <span className="dna-tag">Cloudflare Edge</span>
                  <span className="dna-tag">SOC2 Standards</span>
                  <span className="dna-tag">Vercel Enterprise</span>
                </div>
              </div>
            </div>
          </div>

          {/* Studio How-We-Work Principles */}
          <div className="about-principles-block">
            <div className="principles-intro">
              <span className="sub-badge">04 / ENGAGEMENT PRINCIPLES</span>
              <h2>How our collective partners with you.</h2>
            </div>

            <div className="principles-grid">
              <div className="principle-item">
                <div className="principle-num">01</div>
                <h4>1-to-2 Week Agile Sprints</h4>
                <p>Short, high-velocity iterations with clear milestone deliverables and zero wasted effort.</p>
              </div>

              <div className="principle-item">
                <div className="principle-num">02</div>
                <h4>Weekly Live Staging Demos</h4>
                <p>No black-box delivery. You test real clickable staging builds deployed to live URLs every Friday.</p>
              </div>

              <div className="principle-item">
                <div className="principle-num">03</div>
                <h4>Direct Slack & Teams Access</h4>
                <p>Daily async standups, video walkthroughs, and direct Slack integration with our lead engineers.</p>
              </div>

              <div className="principle-item">
                <div className="principle-num">04</div>
                <h4>Post-Launch 30-Day QA Warranty</h4>
                <p>Guaranteed bug fixes, performance telemetry monitoring, and hands-on handover training included.</p>
              </div>
            </div>
          </div>

          {/* Bottom Collective Intake CTA */}
          <div className="about-bottom-cta-dock">
            <div className="cta-dock-text">
              <span className="cta-dock-badge">READY TO SHIP WITH CCDL?</span>
              <h2>Let's build your next flagship product together.</h2>
              <p>Collaborate directly with our founding architecture collective in Jaipur & worldwide.</p>
            </div>
            <div className="cta-dock-actions">
              <button onClick={() => onNavigate('contact')} className="button button-dark cta-main-btn">
                <span>Start Project Brief</span>
                <ArrowUpRight size={16} />
              </button>
              <button onClick={() => onNavigate('work')} className="button alien-hero-btn-outline">
                <span>Explore Client Archives</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: FOR STARTUPS
          ============================================================ */}
      {normalizedPageId === 'startups' && (
        <section className="section-pad inner-startups-section">
          <div className="startup-pillars-grid">
            <div className="startup-pillar-card card-glow-amber">
              <div className="icon-wrap icon-amber">
                <Zap size={26} />
              </div>
              <h3>30-Day MVP Acceleration</h3>
              <p>
                From idea to live production software in 4 weeks. We build lean, high-fidelity MVPs
                that validate your core hypothesis and delight initial users.
              </p>
              <ul className="pillar-list">
                <li>Interactive Figma Prototype</li>
                <li>Production React/Next.js code</li>
                <li>Stripe & Auth integration</li>
              </ul>
            </div>

            <div className="startup-pillar-card card-glow-cyan">
              <div className="icon-wrap icon-cyan">
                <Sparkles size={26} />
              </div>
              <h3>Investor Pitch Prototypes</h3>
              <p>
                Raise your Seed or Series A with clickable prototypes that look and feel like
                billion-dollar software, convincing investors in minutes.
              </p>
              <ul className="pillar-list">
                <li>High-fidelity motion demos</li>
                <li>Product storytelling deck</li>
                <li>Technical architecture map</li>
              </ul>
            </div>

            <div className="startup-pillar-card card-glow-purple">
              <div className="icon-wrap icon-purple">
                <Layers size={26} />
              </div>
              <h3>Scalable Foundation</h3>
              <p>
                Zero throwaway code. We engineer your MVP on scalable TypeScript stacks that
                seamlessly transition into your Series A growth phase.
              </p>
              <ul className="pillar-list">
                <li>Modular database schemas</li>
                <li>Serverless cloud deployment</li>
                <li>Automated CI/CD workflows</li>
              </ul>
            </div>
          </div>

          <div className="startup-cta-banner">
            <div>
              <h2>Have a startup vision you want to build this month?</h2>
              <p>Book a confidential architecture discovery call with our founding team.</p>
            </div>
            <button onClick={() => onNavigate('contact')} className="button button-dark">
              Launch Startup Sprint <ArrowUpRight size={16} />
            </button>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: FOR ENTERPRISE
          ============================================================ */}
      {normalizedPageId === 'enterprise' && (
        <section className="section-pad inner-enterprise-section">
          <div className="enterprise-solutions-grid">
            <div className="enterprise-solution-card card-glow-emerald">
              <div className="icon-wrap icon-emerald">
                <ShieldCheck size={28} />
              </div>
              <h3>SOC2-Compliant Engineering</h3>
              <p>
                Enterprise software built to meet rigorous corporate compliance standards, data
                isolation, end-to-end encryption, and audit-ready logging.
              </p>
            </div>

            <div className="enterprise-solution-card card-glow-blue">
              <div className="icon-wrap icon-blue">
                <Code2 size={28} />
              </div>
              <h3>Legacy System Modernization</h3>
              <p>
                Transform bloated legacy monolithic applications into lightning-fast, modular
                micro-frontends and scalable microservices without business disruption.
              </p>
            </div>

            <div className="enterprise-solution-card card-glow-purple">
              <div className="icon-wrap icon-purple">
                <Users size={28} />
              </div>
              <h3>Dedicated Agile Squads</h3>
              <p>
                Plug-and-play elite senior engineering squads integrated directly into your Jira,
                Slack, and sprint cycles with dedicated technical project managers.
              </p>
            </div>

            <div className="enterprise-solution-card card-glow-cyan">
              <div className="icon-wrap icon-cyan">
                <Cpu size={28} />
              </div>
              <h3>Design Systems at Scale</h3>
              <p>
                Unify dozens of internal and external enterprise products under a single, tokenized
                multi-brand design system with automated Storybook versioning.
              </p>
            </div>
          </div>

          <div className="enterprise-contact-dock">
            <div>
              <h2>Need custom enterprise procurement or strict NDA?</h2>
              <p>We work with enterprise procurement workflows, MSAs, and custom SLA agreements.</p>
            </div>
            <button onClick={() => onNavigate('contact')} className="button button-dark">
              Request Enterprise Briefing <ArrowUpRight size={16} />
            </button>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: FULL-STACK SOFTWARE ENGINEERING
          ============================================================ */}
      {normalizedPageId === 'software' && (
        <section className="section-pad inner-software-section">
          <div className="tech-stack-showcase">
            <div className="tech-stack-header">
              <span className="sub-badge">ENGINEERING STACK</span>
              <h2>Production-proven technologies engineered for speed and uptime.</h2>
            </div>

            <div className="stack-categories-grid">
              <div className="stack-cat-card card-glow-cyan">
                <div className="icon-wrap icon-cyan" style={{ marginBottom: '1rem' }}>
                  <Layout size={24} />
                </div>
                <h3>Frontend & Interaction</h3>
                <p>React 18+, Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Three.js.</p>
              </div>

              <div className="stack-cat-card card-glow-blue">
                <div className="icon-wrap icon-blue" style={{ marginBottom: '1rem' }}>
                  <Server size={24} />
                </div>
                <h3>Backend & API Services</h3>
                <p>Node.js, Express, Nest.js, Python, GraphQL, REST, WebSocket real-time pipelines.</p>
              </div>

              <div className="stack-cat-card card-glow-amber">
                <div className="icon-wrap icon-amber" style={{ marginBottom: '1rem' }}>
                  <BarChart3 size={24} />
                </div>
                <h3>Databases & Caching</h3>
                <p>PostgreSQL, Redis, Supabase, Cloudflare D1/KV, MongoDB, Prisma ORM.</p>
              </div>

              <div className="stack-cat-card card-glow-purple">
                <div className="icon-wrap icon-purple" style={{ marginBottom: '1rem' }}>
                  <Cpu size={24} />
                </div>
                <h3>Cloud & Infrastructure</h3>
                <p>AWS (ECS, S3, CloudFront), Google Cloud Run, Vercel, Docker, Kubernetes, CI/CD.</p>
              </div>
            </div>
          </div>

          <div className="software-architecture-callout">
            <div className="callout-inner">
              <h2>99.99% Uptime & Sub-200ms Latency Standards</h2>
              <p>
                Every web system we engineer undergoes rigorous load testing, automated security
                scans, and Core Web Vitals optimization before reaching production.
              </p>
              <button onClick={() => onNavigate('contact')} className="button button-dark">
                Review Engineering Roadmap <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: DIGITAL STRATEGY & ROADMAPS
          ============================================================ */}
      {normalizedPageId === 'strategy' && (
        <section className="section-pad inner-design-section">
          <div className="design-philosophy-grid">
            <div className="design-block card-glow-cyan">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-cyan">01</span>
                <div className="icon-wrap icon-cyan" style={{ width: '40px', height: '40px' }}>
                  <Search size={18} />
                </div>
              </div>
              <h3>Product Intelligence & Discovery</h3>
              <p>
                Deconstruct unit economics, user personas, competitive moats, and technical feasibility
                before committing engineering resources.
              </p>
            </div>

            <div className="design-block card-glow-emerald">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-emerald">02</span>
                <div className="icon-wrap icon-emerald" style={{ width: '40px', height: '40px' }}>
                  <TrendingUp size={18} />
                </div>
              </div>
              <h3>North Star Metrics Definition</h3>
              <p>
                Establish clear, measurable KPIs (retention rates, CAC/LTV ratios, task completion velocity)
                to anchor design decisions in business value.
              </p>
            </div>

            <div className="design-block card-glow-purple">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-purple">03</span>
                <div className="icon-wrap icon-purple" style={{ width: '40px', height: '40px' }}>
                  <Layers size={18} />
                </div>
              </div>
              <h3>Phased Engineering Roadmapping</h3>
              <p>
                Detailed sprint schedules, risk mitigation strategies, and architectural blueprints
                designed for rapid stakeholder alignment.
              </p>
            </div>
          </div>

          <div className="design-showcase-strip">
            <div className="strip-content">
              <h2>Ready to map your unassailable product roadmap?</h2>
              <p>Schedule a confidential strategy and architecture sprint with our principal architects.</p>
              <button onClick={() => onNavigate('contact')} className="button button-dark">
                Book Strategy Sprint <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: GOOGLE SEO & PERFORMANCE ADS
          ============================================================ */}
      {normalizedPageId === 'seo-ads' && (
        <section className="section-pad inner-software-section">
          <div className="tech-stack-showcase">
            <div className="tech-stack-header">
              <span className="sub-badge">GROWTH & ACQUISITION ENGINE</span>
              <h2>Data-driven organic rankings and high-converting performance ads.</h2>
            </div>

            <div className="stack-categories-grid">
              <div className="stack-cat-card card-glow-emerald">
                <div className="icon-wrap icon-emerald" style={{ marginBottom: '1rem' }}>
                  <Zap size={24} />
                </div>
                <h3>Technical Core Web Vitals</h3>
                <p>Ensure 95+ Google Lighthouse scores, instant LCP (Largest Contentful Paint), and zero CLS.</p>
              </div>

              <div className="stack-cat-card card-glow-blue">
                <div className="icon-wrap icon-blue" style={{ marginBottom: '1rem' }}>
                  <Code2 size={24} />
                </div>
                <h3>Semantic Schema & Indexing</h3>
                <p>Structured JSON-LD schema markup, canonicalization, dynamic sitemaps, and rich search snippets.</p>
              </div>

              <div className="stack-cat-card card-glow-amber">
                <div className="icon-wrap icon-amber" style={{ marginBottom: '1rem' }}>
                  <TrendingUp size={24} />
                </div>
                <h3>High-ROI Google Ads</h3>
                <p>Search, Performance Max, and remarketing campaigns structured for maximum lead quality and lowest CPA.</p>
              </div>

              <div className="stack-cat-card card-glow-purple">
                <div className="icon-wrap icon-purple" style={{ marginBottom: '1rem' }}>
                  <Sparkles size={24} />
                </div>
                <h3>Conversion Rate Optimization (CRO)</h3>
                <p>A/B landing page testing, heatmapping telemetry, and friction-free signup funnel refinement.</p>
              </div>
            </div>
          </div>

          <div className="software-architecture-callout">
            <div className="callout-inner">
              <h2>Scale Organic Pipeline & Inbound Lead Volume</h2>
              <p>
                Get a comprehensive 360° technical SEO audit and paid acquisition growth roadmap.
              </p>
              <button onClick={() => onNavigate('contact')} className="button button-dark">
                Request Growth Audit <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: E-COMMERCE & STOREFRONTS
          ============================================================ */}
      {normalizedPageId === 'ecommerce' && (
        <section className="section-pad inner-design-section">
          <div className="design-philosophy-grid">
            <div className="design-block card-glow-cyan">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-cyan">01</span>
                <div className="icon-wrap icon-cyan" style={{ width: '40px', height: '40px' }}>
                  <ShoppingBag size={18} />
                </div>
              </div>
              <h3>Headless Sub-Second Checkout</h3>
              <p>Shopify Plus & custom Headless architectures engineered for instantaneous page switches and lightning checkout.</p>
            </div>

            <div className="design-block card-glow-amber">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-amber">02</span>
                <div className="icon-wrap icon-amber" style={{ width: '40px', height: '40px' }}>
                  <TrendingUp size={18} />
                </div>
              </div>
              <h3>Dynamic Bundles & Upsells</h3>
              <p>High-AOV mechanics, intelligent product recommendation engines, and customized tiered volume discounts.</p>
            </div>

            <div className="design-block card-glow-purple">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-purple">03</span>
                <div className="icon-wrap icon-purple" style={{ width: '40px', height: '40px' }}>
                  <Cpu size={18} />
                </div>
              </div>
              <h3>Interactive 3D Product Viewers</h3>
              <p>Three.js and WebGL product customizers allowing shoppers to inspect textures and finishes in real time.</p>
            </div>
          </div>

          <div className="design-showcase-strip">
            <div className="strip-content">
              <h2>Transform your online store into a high-converting machine.</h2>
              <p>Bespoke digital shopping experiences built for maximum revenue velocity.</p>
              <button onClick={() => onNavigate('contact')} className="button button-dark">
                Build E-Commerce Platform <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: EDITORIAL WEB DESIGN
          ============================================================ */}
      {normalizedPageId === 'web-design' && (
        <section className="section-pad inner-design-section">
          <div className="design-philosophy-grid">
            <div className="design-block card-glow-purple">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-purple">01</span>
                <div className="icon-wrap icon-purple" style={{ width: '40px', height: '40px' }}>
                  <FileText size={18} />
                </div>
              </div>
              <h3>Bespoke Spatial Typography</h3>
              <p>Carefully balanced type pairings with mathematical scale ratios that command authority and captivate readers.</p>
            </div>

            <div className="design-block card-glow-cyan">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-cyan">02</span>
                <div className="icon-wrap icon-cyan" style={{ width: '40px', height: '40px' }}>
                  <Sparkles size={18} />
                </div>
              </div>
              <h3>Fluid Motion Choreography</h3>
              <p>Scroll-driven GSAP and Framer Motion transitions that unfold brand narratives smoothly across all viewport sizes.</p>
            </div>

            <div className="design-block card-glow-blue">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-blue">03</span>
                <div className="icon-wrap icon-blue" style={{ width: '40px', height: '40px' }}>
                  <Layers size={18} />
                </div>
              </div>
              <h3>Tactile Geometric Interactions</h3>
              <p>Custom magnetic cursors, spring physics, and subtle glass accents designed specifically for modern high-DPI displays.</p>
            </div>
          </div>

          <div className="design-showcase-strip">
            <div className="strip-content">
              <h2>Stand out with a website that leaves an unforgettable impression.</h2>
              <p>No cookie-cutter templates. 100% bespoke creative design engineered to win awards and clients.</p>
              <button onClick={() => onNavigate('contact')} className="button button-dark">
                Commission Web Experience <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: BRAND IDENTITY & SYSTEMS
          ============================================================ */}
      {normalizedPageId === 'branding' && (
        <section className="section-pad inner-design-section">
          <div className="design-philosophy-grid">
            <div className="design-block card-glow-rose">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-rose">01</span>
                <div className="icon-wrap icon-rose" style={{ width: '40px', height: '40px' }}>
                  <Palette size={18} />
                </div>
              </div>
              <h3>Geometric Brand Marks</h3>
              <p>Distinctive, timeless logomarks crafted with mathematical symmetry for digital screens and physical collateral.</p>
            </div>

            <div className="design-block card-glow-amber">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-amber">02</span>
                <div className="icon-wrap icon-amber" style={{ width: '40px', height: '40px' }}>
                  <Sparkles size={18} />
                </div>
              </div>
              <h3>Color Theory & Lighting</h3>
              <p>Calibrated color systems with high-contrast light and deep luxury dark variants that pass strict accessibility standards.</p>
            </div>

            <div className="design-block card-glow-emerald">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-emerald">03</span>
                <div className="icon-wrap icon-emerald" style={{ width: '40px', height: '40px' }}>
                  <FileText size={18} />
                </div>
              </div>
              <h3>Comprehensive Brand Guidelines</h3>
              <p>Complete design rulebooks, typography hierarchy, social kits, and icon sets delivered in Figma and vector packages.</p>
            </div>
          </div>

          <div className="design-showcase-strip">
            <div className="strip-content">
              <h2>Forge an iconic brand identity.</h2>
              <p>Give your technology company the visual poise and gravitas it deserves.</p>
              <button onClick={() => onNavigate('contact')} className="button button-dark">
                Start Identity Sprint <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: DIGITAL PRODUCTS & SAAS
          ============================================================ */}
      {normalizedPageId === 'digital-products' && (
        <section className="section-pad inner-design-section">
          <div className="design-philosophy-grid">
            <div className="design-block card-glow-cyan">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-cyan">01</span>
                <div className="icon-wrap icon-cyan" style={{ width: '40px', height: '40px' }}>
                  <Users size={18} />
                </div>
              </div>
              <h3>Frictionless Onboarding</h3>
              <p>Shorten time-to-value with interactive guided walkthroughs that turn new signups into habitual power users.</p>
            </div>

            <div className="design-block card-glow-blue">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-blue">02</span>
                <div className="icon-wrap icon-blue" style={{ width: '40px', height: '40px' }}>
                  <BarChart3 size={18} />
                </div>
              </div>
              <h3>Dense Data Visualizers</h3>
              <p>Complex metrics rendered through readable charts, searchable filters, and responsive tables without performance lag.</p>
            </div>

            <div className="design-block card-glow-emerald">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-emerald">03</span>
                <div className="icon-wrap icon-emerald" style={{ width: '40px', height: '40px' }}>
                  <TrendingUp size={18} />
                </div>
              </div>
              <h3>Telemetry & Churn Prevention</h3>
              <p>Integrate behavioral analytics to identify drop-off friction points and continuously refine interaction loops.</p>
            </div>
          </div>

          <div className="design-showcase-strip">
            <div className="strip-content">
              <h2>Engineer a SaaS application that users love to open every morning.</h2>
              <p>Partner with a dedicated product design and full-stack engineering collective.</p>
              <button onClick={() => onNavigate('contact')} className="button button-dark">
                Build Digital Product <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: PRODUCT DESIGN (UI/UX)
          ============================================================ */}
      {normalizedPageId === 'product-design' && (
        <section className="section-pad inner-design-section">
          <div className="design-philosophy-grid">
            <div className="design-block card-glow-cyan">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-cyan">01</span>
                <div className="icon-wrap icon-cyan" style={{ width: '40px', height: '40px' }}>
                  <Cpu size={18} />
                </div>
              </div>
              <h3>Cognitive Load Reduction</h3>
              <p>
                We design interfaces that feel invisible by stripping away extraneous cognitive
                friction and guiding user intuition directly toward value.
              </p>
            </div>

            <div className="design-block card-glow-purple">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-purple">02</span>
                <div className="icon-wrap icon-purple" style={{ width: '40px', height: '40px' }}>
                  <Layout size={18} />
                </div>
              </div>
              <h3>Mathematical Typography & Grid</h3>
              <p>
                Proportionate optical scales and baseline vertical rhythm that ensure every screen
                radiates authority, balance, and poise.
              </p>
            </div>

            <div className="design-block card-glow-amber">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="block-step step-amber">03</span>
                <div className="icon-wrap icon-amber" style={{ width: '40px', height: '40px' }}>
                  <Sparkles size={18} />
                </div>
              </div>
              <h3>Fluid Micro-Interactions</h3>
              <p>
                Delightful, responsive spring animations and hover mechanics that provide tactile
                feedback and make software feel alive.
              </p>
            </div>
          </div>

          <div className="design-showcase-strip">
            <div className="strip-content">
              <h2>Ready to elevate your product's visual authority?</h2>
              <p>From initial design sprint to complete design system handoff in Figma.</p>
              <button onClick={() => onNavigate('contact')} className="button button-dark">
                Start Design Consultation <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: DESIGN SYSTEMS
          ============================================================ */}
      {normalizedPageId === 'design-systems' && (
        <section className="section-pad inner-tokens-section">
          <div className="tokens-features-grid">
            <div className="token-card card-glow-cyan">
              <div className="icon-wrap icon-cyan" style={{ marginBottom: '1rem' }}>
                <Layers size={24} />
              </div>
              <h3>Single Source of Truth</h3>
              <p>Design tokens synchronized seamlessly between Figma variables and code repositories.</p>
            </div>

            <div className="token-card card-glow-blue">
              <div className="icon-wrap icon-blue" style={{ marginBottom: '1rem' }}>
                <Code2 size={24} />
              </div>
              <h3>Automated Storybook</h3>
              <p>Living documentation showing interactive states, accessibility guidelines, and code snippets.</p>
            </div>

            <div className="token-card card-glow-purple">
              <div className="icon-wrap icon-purple" style={{ marginBottom: '1rem' }}>
                <Palette size={24} />
              </div>
              <h3>Multi-Brand Theming</h3>
              <p>Easily switch between light/dark modes and custom enterprise white-label themes in real time.</p>
            </div>

            <div className="token-card card-glow-emerald">
              <div className="icon-wrap icon-emerald" style={{ marginBottom: '1rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h3>WCAG AAA Compliance</h3>
              <p>Color contrast, keyboard navigation, and screen reader accessibility verified out of the box.</p>
            </div>
          </div>

          <div className="tokens-cta-bar">
            <h2>Accelerate your engineering team's output by 40%.</h2>
            <button onClick={() => onNavigate('contact')} className="button button-dark">
              Request Design System Audit <ArrowUpRight size={16} />
            </button>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: INSIGHTS & EDITORIAL
          ============================================================ */}
      {normalizedPageId === 'insights' && (
        <section className="section-pad inner-insights-section">
          <div className="insights-posts-grid">
            {insightsPosts.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 80} className="editorial-post-card">
                <div className="post-header-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                </div>

                <h3 className="post-title">
                  <a
                    href={`/article/${post.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`article/${post.slug}`);
                    }}
                  >
                    {post.title}
                  </a>
                </h3>

                <p className="post-intro-txt">{post.intro}</p>

                <div className="post-card-bottom">
                  <span className="post-read-time">{post.read}</span>
                  <button
                    onClick={() => onNavigate(`article/${post.slug}`)}
                    className="post-read-link"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: FAQS (FREQUENTLY ASKED QUESTIONS)
          ============================================================ */}
      {normalizedPageId === 'faqs' && (
        <section className="section-pad inner-process-section">
          <div className="faq-explorer-wrap">
            {/* Search & Category Filter Bar */}
            <div className="faq-search-filter-bar">
              <div className="faq-search-box">
                <Search size={18} className="text-blue-500 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search questions by topic, stack, pricing, or SLAs..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                />
                {faqSearch && (
                  <button
                    onClick={() => setFaqSearch('')}
                    style={{ background: 'transparent', border: 0, cursor: 'pointer', color: 'var(--muted)', fontSize: '0.8rem' }}
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="faq-cat-pills">
                {['All', 'Delivery', 'Engineering', 'Pricing', 'Support'].map((cat) => (
                  <button
                    key={cat}
                    className={`faq-cat-btn ${faqCategory === cat ? 'is-active' : ''}`}
                    onClick={() => setFaqCategory(cat)}
                  >
                    {cat === 'All' ? 'All Questions' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Rich Accordion List */}
            <div className="faq-rich-accordion">
              {filteredFaqs.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'var(--paper-card)', borderRadius: '1rem', border: '1px solid var(--line)' }}>
                  <HelpCircle size={36} className="text-blue-500" style={{ margin: '0 auto 0.75rem' }} />
                  <h3 style={{ margin: '0 0 0.5rem' }}>No matching questions found</h3>
                  <p style={{ color: 'var(--muted)', margin: 0 }}>Try adjusting your search terms or filter category.</p>
                </div>
              ) : (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = activeFaqIndex === idx;
                  return (
                    <div key={faq.q} className={`faq-item-card ${isOpen ? 'is-open' : ''}`}>
                      <button
                        className="faq-header-btn"
                        onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                      >
                        <div className="faq-header-left">
                          <span className="faq-step-badge">0{idx + 1}</span>
                          <h3 className="faq-item-title">{faq.q}</h3>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                          <span className="faq-category-tag">{faq.cat}</span>
                          <ChevronDown
                            size={20}
                            style={{
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.25s ease',
                              color: isOpen ? 'var(--blue)' : 'var(--muted)',
                            }}
                          />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="faq-body-drawer">
                          <p className="faq-body-text">{faq.a}</p>
                          {faq.takeaway && (
                            <div className="faq-takeaway-pill">
                              <CheckCircle2 size={18} />
                              <span>{faq.takeaway}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Support CTA */}
            <div className="tokens-cta-bar" style={{ marginTop: '2rem' }}>
              <h2>Have a custom question about your project?</h2>
              <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
                Our founding architects are ready to review your requirements, review technical feasibility, and map out sprint timelines.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('contact')} className="button button-dark">
                  Start Architecture Brief <ArrowUpRight size={16} />
                </button>
                <a
                  href="https://wa.me/917852052323"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-light"
                  style={{ textDecoration: 'none' }}
                  title="WhatsApp Line 1"
                >
                  <MessageCircle size={16} /> WhatsApp (+91 78520 52323)
                </a>
                <a
                  href="https://wa.me/918005873764"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-light"
                  style={{ textDecoration: 'none' }}
                  title="WhatsApp Line 2"
                >
                  <MessageCircle size={16} /> WhatsApp (+91 80058 73764)
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: SECURITY & COMPLIANCE
          ============================================================ */}
      {normalizedPageId === 'security' && (
        <section className="section-pad inner-legal-section">
          {/* Security Metric Strip */}
          <div className="security-metrics-row">
            <div className="security-metric-chip">
              <span className="security-metric-val">99.99%</span>
              <span className="security-metric-lbl">Architecture Uptime Target</span>
            </div>
            <div className="security-metric-chip">
              <span className="security-metric-val">&lt;4 Hours</span>
              <span className="security-metric-lbl">P1 Security SLA Response</span>
            </div>
            <div className="security-metric-chip">
              <span className="security-metric-val">100%</span>
              <span className="security-metric-lbl">Isolated Client Repos</span>
            </div>
            <div className="security-metric-chip">
              <span className="security-metric-val">AES-256</span>
              <span className="security-metric-lbl">Military Data Encryption</span>
            </div>
          </div>

          {/* 4 Pillars Bento Grid */}
          <div className="legal-overview-bento">
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <ShieldCheck size={22} />
              </div>
              <h4>Zero-Trust Ingress</h4>
              <p>Cloudflare Edge routing with automated DDoS mitigation, TLS 1.3 strict encryption, and TLS certificate rotation.</p>
            </div>
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Lock size={22} />
              </div>
              <h4>Isolated Repositories</h4>
              <p>Dedicated client codebases protected by hardware FIDO2 MFA, encrypted SSH key auth, and automated secret scanning.</p>
            </div>
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Database size={22} />
              </div>
              <h4>Encrypted Data at Rest</h4>
              <p>PostgreSQL, Redis, and object storage encrypted with AES-256 keys and automated point-in-time recovery snapshots.</p>
            </div>
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Cpu size={22} />
              </div>
              <h4>Automated DevSecOps</h4>
              <p>CI/CD pipelines with automated OWASP Top 10 vulnerability scanners, Dependabot audits, and static code quality gates.</p>
            </div>
          </div>

          {/* Document Content Wrap */}
          <div className="legal-doc-wrap">
            <div className="legal-meta-strip">
              <div className="legal-badges-list">
                <span className="legal-badge-chip">SOC2 READINESS</span>
                <span className="legal-badge-chip">GDPR ENFORCED</span>
                <span className="legal-badge-chip">OWASP COMPLIANT</span>
                <span className="legal-badge-chip">TLS 1.3 STRICT</span>
              </div>
              <span>SECURITY CERTIFICATION: ZERO-TRUST</span>
            </div>

            <div className="legal-content-body">
              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">01</span>
                  <h3>Zero-Trust Architecture & Edge Protection</h3>
                </div>
                <p>
                  At CCDL, security is not a post-launch add-on; it is hardcoded into every line of TypeScript, every database migration, and every cloud ingress route. We enforce Principle of Least Privilege (PoLP) and mutual zero-trust across all service endpoints.
                </p>
                <div className="legal-highlight-box">
                  <ShieldCheck size={18} />
                  <span>All API ingress routes are filtered through Cloudflare Edge with Web Application Firewall (WAF) rate limiting and automated bot defense.</span>
                </div>
              </div>

              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">02</span>
                  <h3>Code Repository & Environment Isolation</h3>
                </div>
                <p>
                  Every client engagement operates in dedicated, access-segregated GitHub/GitLab organizations. We never share database instances or compute clusters across distinct partner accounts.
                </p>
                <ul>
                  <li>Mandatory hardware token MFA (YubiKey / WebAuthn) for all engineers.</li>
                  <li>Automated pre-commit hooks to prevent credential and API key leaks.</li>
                  <li>Granular Role-Based Access Control (RBAC) configured per sprint milestone.</li>
                </ul>
              </div>

              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">03</span>
                  <h3>Continuous Penetration Testing & CI/CD Audits</h3>
                </div>
                <p>
                  Our deployment pipelines run automated SAST (Static Application Security Testing) and DAST scans before any pull request is merged into production staging.
                </p>
                <div className="legal-highlight-box">
                  <CheckCircle size={18} />
                  <span>Dependency bots run 24/7 scanning for CVE zero-day vulnerabilities across npm, yarn, and Docker container base layers.</span>
                </div>
              </div>

              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">04</span>
                  <h3>Incident Response Protocol & 4-Hour SLA</h3>
                </div>
                <p>
                  In the event of a suspected security anomaly or vulnerability disclosure, our designated Security Incident Response Team (SIRT) initiates forensic triage within 60 minutes, with resolution SLAs guaranteed under 4 hours for P1 severity items.
                </p>
              </div>
            </div>

            {/* Action Box */}
            <div className="legal-rights-action-card">
              <div>
                <h3>Need a custom Security & Compliance Review?</h3>
                <p>We provide vendor security questionnaires, architecture diagrams, and SOC2 readiness audits upon request.</p>
              </div>
              <a
                href="mailto:climatechangedigitallabs@gmail.com?subject=Security%20Whitepaper%20Request"
                className="button button-dark"
                style={{ textDecoration: 'none' }}
              >
                Request Security Package <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: COOKIE POLICY
          ============================================================ */}
      {normalizedPageId === 'cookies' && (
        <section className="section-pad inner-legal-section">
          {/* Transparency Bento Grid */}
          <div className="legal-overview-bento">
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <ShieldCheck size={22} />
              </div>
              <h4>Zero Ad Profiling</h4>
              <p>We do not use third-party advertising cookies, retargeting pixels, or behavioral tracking networks.</p>
            </div>
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Sparkles size={22} />
              </div>
              <h4>Essential Session State</h4>
              <p>Cookies are utilized solely to store your UI theme preference (Dark/Light) and active navigation state.</p>
            </div>
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Cpu size={22} />
              </div>
              <h4>Anonymous Telemetry</h4>
              <p>Aggregated Core Web Vitals telemetry (LCP, FID, CLS) to ensure sub-100ms interface rendering.</p>
            </div>
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Lock size={22} />
              </div>
              <h4>Full User Control</h4>
              <p>You have the absolute right to inspect, clear, or block cookies at any time via your browser settings.</p>
            </div>
          </div>

          {/* Document Content Wrap */}
          <div className="legal-doc-wrap">
            <div className="legal-meta-strip">
              <div className="legal-badges-list">
                <span className="legal-badge-chip">MINIMAL COOKIES ONLY</span>
                <span className="legal-badge-chip">ZERO THIRD-PARTY ADS</span>
                <span className="legal-badge-chip">LOCAL STORAGE PREFERRED</span>
              </div>
              <span>COOKIE SPECIFICATION: ESSENTIAL ONLY</span>
            </div>

            <div className="legal-content-body">
              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">01</span>
                  <h3>What Are Cookies and How CCDL Uses Them</h3>
                </div>
                <p>
                  Cookies are lightweight data tokens stored locally in your browser to maintain essential session state. At CCDL, we adhere to a strict data-minimalism principle: we do not trade, sell, or profile your personal interaction history with advertising platforms.
                </p>
              </div>

              {/* Interactive Cookie Inventory Table */}
              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">02</span>
                  <h3>Detailed Cookie & Storage Inventory</h3>
                </div>
                <p>The following table lists every storage token utilized across the CCDL digital platform:</p>

                <div className="cookie-table-wrap">
                  <table className="cookie-table">
                    <thead>
                      <tr>
                        <th>Cookie / Key</th>
                        <th>Category</th>
                        <th>Storage Type</th>
                        <th>Duration</th>
                        <th>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span className="cookie-token-name">theme</span></td>
                        <td>Essential UI</td>
                        <td>LocalStorage</td>
                        <td>365 Days</td>
                        <td>Remembers your Dark / Light Obsidian theme choice.</td>
                      </tr>
                      <tr>
                        <td><span className="cookie-token-name">ccdl-preloader-seen</span></td>
                        <td>Experience</td>
                        <td>SessionStorage</td>
                        <td>Current Session</td>
                        <td>Prevents redundant intro animations during continuous browsing.</td>
                      </tr>
                      <tr>
                        <td><span className="cookie-token-name">_cf_bm</span></td>
                        <td>Security</td>
                        <td>HTTP Cookie</td>
                        <td>30 Minutes</td>
                        <td>Cloudflare bot detection to protect against DDoS and spam abuse.</td>
                      </tr>
                      <tr>
                        <td><span className="cookie-token-name">web_vitals</span></td>
                        <td>Performance</td>
                        <td>LocalStorage</td>
                        <td>30 Days</td>
                        <td>Anonymous render latency metrics for speed optimization.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">03</span>
                  <h3>Managing and Disabling Cookies in Your Browser</h3>
                </div>
                <p>
                  You can configure your browser to block or alert you about these cookies. Please note that disabling essential storage may reset your Dark/Light theme preferences upon page reload.
                </p>
                <ul>
                  <li><b>Google Chrome:</b> Settings → Privacy & Security → Third-party cookies.</li>
                  <li><b>Apple Safari:</b> Preferences → Privacy → Manage Website Data.</li>
                  <li><b>Mozilla Firefox:</b> Settings → Privacy & Security → Enhanced Tracking Protection.</li>
                  <li><b>Microsoft Edge:</b> Settings → Cookies & site permissions → Manage cookies.</li>
                </ul>
              </div>
            </div>

            {/* Quick Preference Reset Action */}
            <div className="legal-rights-action-card">
              <div>
                <h3>Reset Local Site Preferences</h3>
                <p>Clear all local theme and session state stored on this device with a single click.</p>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem('theme');
                  sessionStorage.removeItem('ccdl-preloader-seen');
                  setCookieResetSuccess(true);
                  setTimeout(() => setCookieResetSuccess(false), 3000);
                }}
                className="button button-dark"
              >
                {cookieResetSuccess ? (
                  <>
                    <CheckCheck size={16} className="text-green-400" /> Preferences Cleared!
                  </>
                ) : (
                  <>
                    <RefreshCw size={16} /> Reset Local Cache
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: CAREERS
          ============================================================ */}
      {normalizedPageId === 'careers' && (
        <section className="section-pad inner-careers-section">
          <div className="careers-perks-row">
            <div className="perk-pill">🌍 100% Remote / Hybrid Freedom</div>
            <div className="perk-pill">⚡ Top-Tier Hardware & Setup Budget</div>
            <div className="perk-pill">📈 Profit Share & Performance Bonuses</div>
            <div className="perk-pill">📚 Annual Learning & Conference Stipend</div>
          </div>

          <div className="open-positions-list">
            <div className="positions-header">
              <span className="sub-badge">CURRENT OPEN ROLES</span>
              <h2>Join the CCDL Collective</h2>
            </div>

            {openJobs.map((job) => (
              <div key={job.id} className="job-row-card">
                <div className="job-main-info">
                  <span className="job-team-tag">{job.team}</span>
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-desc">{job.description}</p>
                </div>

                <div className="job-meta-side">
                  <div className="job-tags">
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                    <span>{job.experience}</span>
                  </div>

                  <a
                    href={`mailto:climatechangedigitallabs@gmail.com?subject=Application for ${encodeURIComponent(job.title)}`}
                    className="job-apply-btn"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: CONTACT
          ============================================================ */}
      {normalizedPageId === 'contact' && (
        <section className="section-pad inner-contact-section">
          <div className="contact-dual-layout">
            {/* Left Column: Real Contact Information */}
            <div className="contact-info-col">
              <span className="sub-badge">DIRECT CONTACT</span>
              <h2>Contact Information</h2>
              <p>
                Get in touch with Climate Change Digital Labs directly. You can call, WhatsApp, or email us, or visit our office during working hours.
              </p>

              <div className="contact-cards-stack">
                {/* Office Address Card */}
                <div className="contact-card-simple">
                  <div className="contact-card-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-card-details">
                    <strong>Office Address</strong>
                    <p>Near Bikaner Bypass, Anupgarh, Sri Ganganagar, Rajasthan, India</p>
                    <a
                      href="https://maps.google.com/?q=Near+Bikaner+Bypass,+Anupgarh,+Sri+Ganganagar,+Rajasthan,+India"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-card-link"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Direct Phone & WhatsApp Card */}
                <div className="contact-card-simple">
                  <div className="contact-card-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-card-details">
                    <strong>Phone & WhatsApp</strong>
                    <p style={{ marginBottom: '0.5rem' }}>Direct lines for calls and WhatsApp messages:</p>
                    <div className="contact-numbers-list">
                      <div className="contact-num-row">
                        <span className="contact-num-val">+91 78520 52323</span>
                        <div className="contact-num-actions">
                          <a href="tel:+917852052323" className="contact-action-btn" title="Call Line 1">
                            <Phone size={13} /> Call
                          </a>
                          <a
                            href="https://wa.me/917852052323?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                            target="_blank"
                            rel="noreferrer"
                            className="contact-action-btn wa-btn"
                            title="WhatsApp Line 1"
                          >
                            <MessageCircle size={13} /> WhatsApp
                          </a>
                        </div>
                      </div>

                      <div className="contact-num-row">
                        <span className="contact-num-val">+91 80058 73764</span>
                        <div className="contact-num-actions">
                          <a href="tel:+918005873764" className="contact-action-btn" title="Call Line 2">
                            <Phone size={13} /> Call
                          </a>
                          <a
                            href="https://wa.me/918005873764?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                            target="_blank"
                            rel="noreferrer"
                            className="contact-action-btn wa-btn"
                            title="WhatsApp Line 2"
                          >
                            <MessageCircle size={13} /> WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Address Card */}
                <div className="contact-card-simple">
                  <div className="contact-card-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-card-details">
                    <strong>Email Address</strong>
                    <p className="contact-email-val">climatechangedigitallabs@gmail.com</p>
                    <div className="contact-card-actions-inline">
                      <a
                        href="mailto:climatechangedigitallabs@gmail.com"
                        className="contact-action-btn"
                      >
                        <Mail size={13} /> Send Email
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText('climatechangedigitallabs@gmail.com');
                          setCopiedEmail(true);
                          setTimeout(() => setCopiedEmail(false), 2500);
                        }}
                        className="contact-action-btn"
                      >
                        {copiedEmail ? <CheckCheck size={13} color="#10b981" /> : <Copy size={13} />}
                        {copiedEmail ? 'Copied' : 'Copy Email'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Business Timings Card */}
                <div className="contact-card-simple">
                  <div className="contact-card-icon">
                    <Clock size={20} />
                  </div>
                  <div className="contact-card-details">
                    <strong>Working Hours</strong>
                    <p>Monday – Saturday: 9:00 AM – 8:00 PM IST</p>
                    <span className="contact-timing-sub">Sunday: Closed</span>
                  </div>
                </div>

                {/* Social & Community Channels Card */}
                <div className="contact-card-simple">
                  <div className="contact-card-icon">
                    <Share2 size={20} />
                  </div>
                  <div className="contact-card-details">
                    <strong>Community &amp; Social</strong>
                    <p style={{ marginBottom: '0.65rem' }}>Connect directly with our engineering collective and founding architects:</p>
                    <div className="contact-card-actions-inline">
                      <a
                        href="https://www.linkedin.com/in/climate-change-digital-labs-3796b1431/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-action-btn"
                        style={{ color: '#0077b5', borderColor: 'rgba(0, 119, 181, 0.3)' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://www.linkedin.com/in/climate-change-digital-labs-3796b1431/', '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <Linkedin size={13} /> LinkedIn
                      </a>
                      <a
                        href="https://discord.gg/climatechangedigitallabs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-action-btn"
                        style={{ color: '#5865F2', borderColor: 'rgba(88, 101, 242, 0.3)' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://discord.gg/climatechangedigitallabs', '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <MessageSquare size={13} /> Discord Guild
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean & Real Contact Form */}
            <div className="contact-form-col">
              <div className="contact-form-box">
                {contactSubmitted ? (
                  <div className="contact-success-message">
                    <div className="contact-success-icon-wrap">
                      <CheckCircle2 size={36} strokeWidth={2.5} />
                    </div>
                    <h3>Message Sent Successfully</h3>
                    <p>
                      Thank you for contacting us. We have received your message and will respond to you shortly.
                    </p>

                    <div className="contact-success-whatsapp">
                      <p style={{ margin: '0 0 0.75rem', fontSize: '0.85rem', color: 'var(--ink)', fontWeight: 600 }}>
                        Need an immediate response? Connect directly on WhatsApp:
                      </p>
                      <div className="contact-success-wa-buttons">
                        <a
                          href={`https://wa.me/917852052323?text=${encodeURIComponent(
                            `Hello, my name is ${contactName || 'Client'}. Inquiring about: ${contactSubject}. ${contactMessage ? `Message: ${contactMessage}` : ''}`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="contact-wa-btn-main"
                        >
                          <MessageCircle size={15} /> WhatsApp: +91 78520 52323
                        </a>
                        <a
                          href={`https://wa.me/918005873764?text=${encodeURIComponent(
                            `Hello, my name is ${contactName || 'Client'}. Inquiring about: ${contactSubject}. ${contactMessage ? `Message: ${contactMessage}` : ''}`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="contact-wa-btn-main"
                        >
                          <MessageCircle size={15} /> WhatsApp: +91 80058 73764
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactName('');
                        setContactEmail('');
                        setContactPhone('');
                        setContactSubject('General Inquiry');
                        setContactMessage('');
                      }}
                      className="button button-light"
                      style={{ marginTop: '1.5rem', fontSize: '0.85rem' }}
                    >
                      <RefreshCw size={14} /> Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="contact-form-inner">
                    <div className="contact-form-header">
                      <div className="contact-form-status-row">
                        <span className="contact-live-status-badge">
                          <span className="contact-live-pulse-dot" />
                          Direct Client Desk
                        </span>
                        <span className="contact-reply-sla-tag">⚡ Avg Response: &lt; 2 hrs</span>
                      </div>

                      <h3 className="contact-form-main-title">Send a Message</h3>
                      <p className="contact-form-sub-desc">
                        Share your requirement or project vision. Our architects review and respond promptly.
                      </p>
                    </div>

                    {/* Quick Requirement Chips */}
                    <div className="contact-field-group">
                      <label className="contact-field-label">
                        <span>Select Requirement</span>
                        <span className="contact-field-hint">Click to choose</span>
                      </label>
                      <div className="contact-chips-grid">
                        {[
                          'General Inquiry',
                          'Web Development',
                          'Mobile Apps',
                          'UI/UX Design',
                          'Custom Software',
                          'E-Commerce',
                          'SEO & Growth',
                        ].map((srv) => (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => setContactSubject(srv)}
                            className={`contact-chip-pill ${contactSubject === srv ? 'is-active' : ''}`}
                          >
                            {srv}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name and Phone Inputs */}
                    <div className="contact-form-2col">
                      <div className="contact-field-group">
                        <label className="contact-field-label" htmlFor="contact-name">
                          <span>Your Full Name<span className="contact-required-dot">*</span></span>
                        </label>
                        <div className="contact-input-wrapper">
                          <div className="contact-input-icon-slot">
                            <User size={16} className="contact-field-icon" />
                          </div>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            placeholder="e.g. Rahul Sharma"
                            className="contact-clean-input"
                          />
                        </div>
                      </div>

                      <div className="contact-field-group">
                        <label className="contact-field-label" htmlFor="contact-phone">
                          <span>Phone / WhatsApp<span className="contact-required-dot">*</span></span>
                        </label>
                        <div className="contact-input-wrapper">
                          <div className="contact-input-icon-slot">
                            <Phone size={16} className="contact-field-icon" />
                          </div>
                          <input
                            id="contact-phone"
                            type="tel"
                            required
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            className="contact-clean-input"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="contact-field-group">
                      <label className="contact-field-label" htmlFor="contact-email">
                        <span>Email Address<span className="contact-required-dot">*</span></span>
                      </label>
                      <div className="contact-input-wrapper">
                        <div className="contact-input-icon-slot">
                          <Mail size={16} className="contact-field-icon" />
                        </div>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="contact-clean-input"
                        />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="contact-field-group">
                      <label className="contact-field-label" htmlFor="contact-message">
                        <span>Your Message<span className="contact-required-dot">*</span></span>
                      </label>
                      <div className="contact-input-wrapper contact-textarea-wrapper">
                        <div className="contact-input-icon-slot icon-slot-textarea">
                          <FileText size={16} className="contact-field-icon" />
                        </div>
                        <textarea
                          id="contact-message"
                          required
                          rows={3}
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          placeholder="Briefly describe your requirements, questions, or project timeline..."
                          className="contact-clean-input contact-clean-textarea"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="contact-submit-action-btn"
                    >
                      <Send size={15} />
                      <span>Send Message Now</span>
                      <ArrowRight size={14} className="submit-arrow-icon" />
                    </button>

                    <div className="contact-form-guarantees">
                      <span className="guarantee-badge">
                        <CheckCircle2 size={13} className="text-emerald-500" /> Rapid Reply
                      </span>
                      <span className="guarantee-dot">•</span>
                      <span className="guarantee-badge">
                        <Lock size={12} className="text-blue-500" /> 100% Confidential
                      </span>
                      <span className="guarantee-dot">•</span>
                      <span className="guarantee-badge">
                        <ShieldCheck size={13} className="text-violet-500" /> Zero Spam
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: PRIVACY POLICY
          ============================================================ */}
      {normalizedPageId === 'privacy' && (
        <section className="section-pad inner-legal-section">
          {/* Executive Summary Bento Grid */}
          <div className="legal-overview-bento">
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <ShieldCheck size={22} />
              </div>
              <h4>Zero Data Monetization</h4>
              <p>We never sell, rent, or cross-utilize client or user data for third-party advertising or AI training.</p>
            </div>
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Lock size={22} />
              </div>
              <h4>Client IP Isolation</h4>
              <p>All client codebases, Figma assets, and database schemas remain segregated in dedicated private environments.</p>
            </div>
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Cpu size={22} />
              </div>
              <h4>Privacy-by-Design</h4>
              <p>Strict data minimalism. We only store essential data required to execute contractual project deliverables.</p>
            </div>
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <CheckCircle2 size={22} />
              </div>
              <h4>Data Subject Rights</h4>
              <p>Full rights to inspect, download, or purge your contact records and telemetry within 48 hours upon request.</p>
            </div>
          </div>

          {/* Main Legal Document Wrap */}
          <div className="legal-doc-wrap">
            <div className="legal-meta-strip">
              <div className="legal-badges-list">
                <span className="legal-badge-chip">GDPR COMPLIANT</span>
                <span className="legal-badge-chip">CCPA READY</span>
                <span className="legal-badge-chip">IT ACT 2000 (INDIA)</span>
                <span className="legal-badge-chip">ISO/IEC 27001 ALIGNED</span>
              </div>
              <span>LAST AUDITED: AUGUST 2026</span>
            </div>

            <div className="legal-content-body">
              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">01</span>
                  <h3>Commitment to Enterprise Data Protection</h3>
                </div>
                <p>
                  Climate Change Digital Labs ("CCDL", "we", "us", or "our"), registered in Rajasthan, India, operates with strict privacy-by-design standards. We respect your fundamental right to digital privacy and ensure that all personal, corporate, and technical information entrusted to our studio is protected with enterprise-grade encryption and administrative safeguards.
                </p>
              </div>

              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">02</span>
                  <h3>Information We Collect & Purpose of Processing</h3>
                </div>
                <p>
                  When you initiate contact through our web interfaces, submit an Architecture Brief, or commission our engineering services, we collect:
                </p>
                <ul>
                  <li><b>Identity & Contact Data:</b> Full name, work email address, company entity, and phone number.</li>
                  <li><b>Project Specifications:</b> Product vision, target technology requirements, and sprint timelines.</li>
                  <li><b>Technical Interaction Data:</b> Anonymous aggregated Core Web Vitals telemetry to maintain interface speed.</li>
                </ul>
                <div className="legal-highlight-box">
                  <CheckCircle size={18} />
                  <span>This information is used strictly to execute Master Services Agreements (MSAs), deliver weekly staging builds, and maintain direct client communications.</span>
                </div>
              </div>

              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">03</span>
                  <h3>Client Codebase & Intellectual Property Isolation</h3>
                </div>
                <p>
                  All source code repositories, design tokens, Figma design files, database migrations, and proprietary algorithm assets developed for clients are strictly isolated in dedicated, access-controlled repositories with hardware MFA enforcement.
                </p>
                <div className="legal-highlight-box">
                  <Lock size={18} />
                  <span>We never feed client code or proprietary data into public AI models, third-party marketplaces, or unauthorized training sets.</span>
                </div>
              </div>

              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">04</span>
                  <h3>Data Retention & Right to Erasure</h3>
                </div>
                <p>
                  We retain client communication records for the duration of the active engagement plus standard statutory warranty periods. You may exercise your rights under GDPR and CCPA to request a full audit, data export, or irrevocable data purge at any time.
                </p>
              </div>
            </div>

            {/* Data Protection Officer Action Card */}
            <div className="legal-rights-action-card">
              <div>
                <h3>Exercise Your Data Privacy Rights</h3>
                <p>Submit a formal data access, export, or erasure request directly to our designated compliance officer.</p>
              </div>
              <a
                href="mailto:climatechangedigitallabs@gmail.com?subject=Data%20Privacy%20Request"
                className="button button-dark"
                style={{ textDecoration: 'none' }}
              >
                Contact Compliance Officer <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAGE: TERMS OF SERVICE
          ============================================================ */}
      {normalizedPageId === 'terms' && (
        <section className="section-pad inner-legal-section">
          {/* Key Guarantees Bento Grid */}
          <div className="legal-overview-bento">
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Award size={22} />
              </div>
              <h4>100% IP Ownership Transfer</h4>
              <p>Full irrevocable transfer of source code, Figma design files, and UI tokens upon milestone settlement.</p>
            </div>
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <ShieldCheck size={22} />
              </div>
              <h4>30-Day QA Warranty</h4>
              <p>Comprehensive post-launch defect rectification warranty included with every production delivery.</p>
            </div>
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Lock size={22} />
              </div>
              <h4>Mutual NDA Protection</h4>
              <p>Strict confidentiality enforced across all proprietary client concepts, roadmaps, and business logic.</p>
            </div>
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Zap size={22} />
              </div>
              <h4>Transparent Sprints</h4>
              <p>Fixed-scope sprint milestones with live staging environments and weekly video demo reviews.</p>
            </div>
          </div>

          {/* Main Legal Document Wrap */}
          <div className="legal-doc-wrap">
            <div className="legal-meta-strip">
              <div className="legal-badges-list">
                <span className="legal-badge-chip">MASTER SERVICES STANDARD</span>
                <span className="legal-badge-chip">JURISDICTION: JAIPUR, RAJASTHAN</span>
                <span className="legal-badge-chip">WORK-FOR-HIRE IRREVOCABLE</span>
              </div>
              <span>EFFECTIVE DATE: AUGUST 2026</span>
            </div>

            <div className="legal-content-body">
              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">01</span>
                  <h3>Agreement Framework & Master Services Terms</h3>
                </div>
                <p>
                  By accessing this website, reviewing our studio case studies, or executing a Statement of Work (SOW) with Climate Change Digital Labs ("CCDL"), you enter into a binding agreement governed by these Terms of Service and our Master Services Agreement (MSA) framework.
                </p>
              </div>

              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">02</span>
                  <h3>Intellectual Property Rights & Code Ownership</h3>
                </div>
                <p>
                  Upon receipt of full milestone payments specified in your Statement of Work:
                </p>
                <ul>
                  <li>100% of all custom-authored Figma design components, vectors, design tokens, and prototypes become your exclusive property.</li>
                  <li>100% of all frontend React/TypeScript source code, backend microservices, database schemas, and documentation are transferred irrevocably as work-for-hire.</li>
                  <li>You receive complete freedom to deploy, commercialize, modify, or patent the delivered software with zero recurring studio royalty obligations.</li>
                </ul>
                <div className="legal-highlight-box">
                  <Award size={18} />
                  <span>No vendor lock-in. We structure all deliverables with clean documentation and standard npm scripts for effortless internal handoff.</span>
                </div>
              </div>

              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">03</span>
                  <h3>Sprint Delivery, Reviews & Staging Milestones</h3>
                </div>
                <p>
                  We operate on structured 1-to-2 week sprint cadences. Each sprint concludes with a live staging deployment on Vercel/AWS and an asynchronous walkthrough demo. Clients have a standard 5-business-day review window to test and approve sprint deliverables.
                </p>
              </div>

              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">04</span>
                  <h3>Post-Launch Warranty & Service Level Guarantees</h3>
                </div>
                <p>
                  All custom software builds delivered by CCDL include a standard 30-day post-launch warranty starting from the production release date. During this period, CCDL rectifies any functional bugs or regressions at zero additional charge.
                </p>
              </div>

              <div className="legal-clause-block">
                <div className="legal-clause-header">
                  <span className="legal-clause-num">05</span>
                  <h3>Governing Law & Legal Jurisdiction</h3>
                </div>
                <p>
                  These Terms and any project dispute shall be governed by and construed in accordance with the laws of the Republic of India, with exclusive jurisdiction in the courts of Jaipur, Rajasthan.
                </p>
              </div>
            </div>

            {/* Action Card */}
            <div className="legal-rights-action-card">
              <div>
                <h3>Need a customized Master Services Agreement (MSA)?</h3>
                <p>We provide enterprise MSAs with tailored payment milestones, mutual NDAs, and bespoke SLA commitments.</p>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="button button-dark"
              >
                Request Custom MSA <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
