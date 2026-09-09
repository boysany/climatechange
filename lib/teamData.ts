/**
 * Human-centered executive and engineering leadership profiles.
 * Team cards use privacy-safe monogram avatars rather than personal photographs.
 */

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  tag: string;
  location: string;
  bio: string;
  skills: string[];
  experience: string;
  highlights: string;
}

export const FOUNDER_AVATARS = {
  sandeep: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  gagan: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  jaspal: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  sahiram: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
};

export const AUTHENTIC_TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Mira Kapoor',
    role: 'Lead Web & UI/UX Designer',
    specialty: 'Creative Direction & Design Systems',
    tag: 'FOUNDING CORE',
    location: 'Jaipur, Rajasthan',
    bio: 'Pioneers human-centered visual architectures, tokenized component libraries, and spatial interfaces engineered with pixel-level mathematical rigor.',
    skills: ['Figma Systems', 'UI/UX Architecture', 'Design Tokens', 'Web Design', 'Spatial Motion'],
    experience: '6+ Years Experience',
    highlights: '50+ High-Conversion Interfaces Delivered',
  },
  {
    name: 'Aarav Mehta',
    role: 'Lead Frontend Engineer',
    specialty: 'React 18, TypeScript & Micro-Interactions',
    tag: 'FOUNDING CORE',
    location: 'Jaipur, Rajasthan',
    bio: 'Turns complex design visions into ultra-responsive, resilient frontend applications with sub-second load times and silky-smooth GSAP motion physics.',
    skills: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js & Vite'],
    experience: '5+ Years Experience',
    highlights: '99.9% Uptime & 95+ Core Web Vitals Specialist',
  },
  {
    name: 'Rohan Verma',
    role: 'Senior Backend Architect',
    specialty: 'Distributed Systems & High-Throughput APIs',
    tag: 'FOUNDING CORE',
    location: 'Jaipur, Rajasthan',
    bio: 'Architects robust microservice pipelines, relational database schemas, and low-latency REST/GraphQL APIs engineered for 99.99% uptime.',
    skills: ['Node.js', 'PostgreSQL', 'REST & GraphQL', 'Prisma ORM', 'Redis Caching'],
    experience: '5+ Years Experience',
    highlights: '<100ms API Response Latency Engineering',
  },
  {
    name: 'Nisha Rao',
    role: 'Senior Backend & Cloud Engineer',
    specialty: 'Database Security & Cloud DevOps',
    tag: 'FOUNDING CORE',
    location: 'Jaipur, Rajasthan',
    bio: 'Translates high-load enterprise requirements into bulletproof cloud infrastructures, automated CI/CD pipelines, and SOC2-compliant microservices.',
    skills: ['Database Optimization', 'Cloud DevOps', 'Microservices', 'API Security', 'Docker'],
    experience: '5+ Years Experience',
    highlights: 'Zero-Downtime Migration & SOC2 Security Standards',
  },
  {
    name: 'Ishita Sen',
    role: 'Product Marketing Lead',
    specialty: 'Positioning, Content & Growth Campaigns',
    tag: 'DELIVERY CORE',
    location: 'Remote / Jaipur',
    bio: 'Builds clear product stories and practical growth systems that turn technical value into qualified enterprise demand.',
    skills: ['Content Strategy', 'Product Marketing', 'Growth Campaigns'],
    experience: '4+ Years Experience',
    highlights: 'Multi-channel launch strategy & enterprise narratives',
  },
  {
    name: 'Dev Malhotra',
    role: 'QA & Release Engineer',
    specialty: 'Quality Systems & Release Automation',
    tag: 'DELIVERY CORE',
    location: 'Remote / Bangalore',
    bio: 'Keeps every release dependable through thoughtful test coverage, end-to-end Cypress suites, and zero-regression protocols.',
    skills: ['QA Automation', 'CI/CD Pipelines', 'Performance Benchmarks'],
    experience: '4+ Years Experience',
    highlights: 'Reliable release pipelines & regression prevention',
  },
  {
    name: 'Kavya Iyer',
    role: 'Customer Success Partner',
    specialty: 'Client Enablement & Sprint Delivery',
    tag: 'DELIVERY CORE',
    location: 'Remote / Mumbai',
    bio: 'Connects client business objectives to practical sprint decisions and makes collaboration transparent from kickoff to production handoff.',
    skills: ['Sprint Discovery', 'Delivery Cadence', 'Client Enablement'],
    experience: '5+ Years Experience',
    highlights: 'High-trust enterprise client partnerships',
  },
  {
    name: 'Arjun Rao',
    role: 'Cloud Support Engineer',
    specialty: 'Infrastructure & Platform Reliability',
    tag: 'DELIVERY CORE',
    location: 'Remote / Pune',
    bio: 'Supports secure, observable cloud environments that help product teams deploy rapidly without compromising availability or security.',
    skills: ['Cloud Ops', 'Kubernetes', 'Real-Time Monitoring'],
    experience: '4+ Years Experience',
    highlights: 'Sub-minute telemetry response & 99.99% availability',
  },
];
