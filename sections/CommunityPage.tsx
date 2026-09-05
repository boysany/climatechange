import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Code2,
  Copy,
  ExternalLink,
  Github,
  Heart,
  HelpCircle,
  Layers,
  MapPin,
  MessageCircle,
  MessageSquare,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  ThumbsUp,
  User,
  Users,
  X,
  Zap,
} from 'lucide-react';
import gsap from 'gsap';
import { getReducedMotion } from '../lib/animations.ts';

import sandeepAvatar from '../src/assets/images/sandeep_barupal_1787155579146.jpg';
import gaganAvatar from '../src/assets/images/gagan_chouhan_1787155556813.jpg';
import jaspalAvatar from '../src/assets/images/jaspal_byavat_1787155617742.jpg';
import sahiramAvatar from '../src/assets/images/sahiram_nayak_1787155597072.jpg';

export interface CommunityRepo {
  id: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  category: 'React & Next.js' | 'Figma & Design Tokens' | 'Node.js & APIs' | 'Mobile & Cross-Platform';
  language: string;
  cloneCmd: string;
  githubUrl: string;
  tags: string[];
}

export interface CommunityEvent {
  id: string;
  title: string;
  type: 'Workshops' | 'AMAs' | 'Design Clinics';
  date: string;
  time: string;
  location: string;
  host: {
    name: string;
    role: string;
    avatar: string;
  };
  description: string;
  spotsLeft: number;
  tags: string[];
}

export interface CommunityDiscussion {
  id: string;
  title: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  replies: number;
  upvotes: number;
  tag: string;
  snippet: string;
  timestamp: string;
}

const REPOSITORIES: CommunityRepo[] = [
  {
    id: 'react-enterprise-starter',
    name: 'ccdl-labs/react-enterprise-starter',
    description:
      'Production-ready React 18 & Vite architecture with strict TypeScript, Tailwind v4 design tokens, and sub-second build times.',
    stars: 480,
    forks: 64,
    category: 'React & Next.js',
    language: 'TypeScript',
    cloneCmd: 'git clone https://github.com/selmedic/react-enterprise-starter.git',
    githubUrl: 'https://github.com',
    tags: ['React 18', 'TypeScript', 'Tailwind', 'Vite'],
  },
  {
    id: 'figma-tokens-sync',
    name: 'ccdl-labs/figma-tokens-sync',
    description:
      'Automated GitHub Actions CLI that pulls Figma Variables and generates type-safe CSS custom properties & Tailwind config.',
    stars: 320,
    forks: 41,
    category: 'Figma & Design Tokens',
    language: 'TypeScript',
    cloneCmd: 'npm i -g @ccdl/figma-tokens-sync',
    githubUrl: 'https://github.com',
    tags: ['Figma API', 'Design Tokens', 'CI/CD'],
  },
  {
    id: 'node-resilience-kit',
    name: 'ccdl-labs/node-resilience-kit',
    description:
      'Express & Fastify middleware toolkit featuring circuit breakers, distributed Redis lock orchestration, and graceful degradation.',
    stars: 395,
    forks: 53,
    category: 'Node.js & APIs',
    language: 'Node.js',
    cloneCmd: 'npm install @ccdl/node-resilience-kit',
    githubUrl: 'https://github.com',
    tags: ['Microservices', 'Redis', 'Circuit Breaker'],
  },
  {
    id: 'native-motion-primitives',
    name: 'ccdl-labs/native-motion-primitives',
    description:
      'Smooth 120Hz gesture interaction and shared element transitions for React Native and Expo applications.',
    stars: 240,
    forks: 28,
    category: 'Mobile & Cross-Platform',
    language: 'TypeScript',
    cloneCmd: 'git clone https://github.com/selmedic/native-motion-primitives.git',
    githubUrl: 'https://github.com',
    tags: ['React Native', 'Reanimated 3', 'Gestures'],
  },
];

const EVENTS: CommunityEvent[] = [
  {
    id: 'react-perf-clinic',
    title: 'Core Web Vitals Clinic: Profiling React Hydration & Layout Shifts',
    type: 'Workshops',
    date: 'September 19, 2026',
    time: '6:30 PM - 8:00 PM IST',
    location: 'Live Stream + Discord Stage',
    host: {
      name: 'Aarav Mehta',
      role: 'Lead Frontend Engineer',
      avatar: sandeepAvatar,
    },
    description:
      'Bring your slow web applications. We will inspect Chrome DevTools performance recordings live and fix LCP/CLS bottlenecks in real time.',
    spotsLeft: 24,
    tags: ['React', 'Performance', 'Chrome DevTools'],
  },
  {
    id: 'figma-tokens-ama',
    title: 'Design Systems AMA: Bridging Figma Variables to Production Code',
    type: 'Design Clinics',
    date: 'September 26, 2026',
    time: '7:00 PM - 8:30 PM IST',
    location: 'Discord Audio Stage',
    host: {
      name: 'Mira Kapoor',
      role: 'Lead Product & UX Designer',
      avatar: gaganAvatar,
    },
    description:
      'Deep dive into mathematical typography scaling, semantic spacing tokens, and automated pull requests when design updates in Figma.',
    spotsLeft: 38,
    tags: ['Figma', 'Tokens', 'Design Systems'],
  },
  {
    id: 'database-tuning-ama',
    title: 'PostgreSQL Deep Dive: Indexing, Connection Pools & Low Latency',
    type: 'AMAs',
    date: 'October 03, 2026',
    time: '6:00 PM - 7:30 PM IST',
    location: 'Google Meet + Stage',
    host: {
      name: 'Rohan Verma',
      role: 'Senior Backend Architect',
      avatar: jaspalAvatar,
    },
    description:
      'Analyzing real EXPLAIN query plans under high concurrency. Learn how to diagnose unindexed scans and prevent pool saturation.',
    spotsLeft: 18,
    tags: ['PostgreSQL', 'Databases', 'Backend'],
  },
];

const DISCUSSIONS: CommunityDiscussion[] = [
  {
    id: 'disc-1',
    title: 'How we achieved 99+ Core Web Vitals on Next.js 15 App Router',
    author: {
      name: 'Aarav Mehta',
      role: 'Frontend Core',
      avatar: sandeepAvatar,
    },
    replies: 28,
    upvotes: 74,
    tag: 'Next.js 15',
    snippet:
      'Partial Prerendering (PPR) combined with streaming CSS dropped our Time to Interactive to under 380ms on median 4G mobile devices...',
    timestamp: '2 hours ago',
  },
  {
    id: 'disc-2',
    title: 'Building an end-to-end token pipeline from Figma Variables to Tailwind v4',
    author: {
      name: 'Mira Kapoor',
      role: 'Design Systems',
      avatar: gaganAvatar,
    },
    replies: 19,
    upvotes: 62,
    tag: 'Design Tokens',
    snippet:
      'We stopped manually updating CSS variables. Here is our GitHub Action that validates semantic colors and creates an automated PR on every Figma publish...',
    timestamp: '5 hours ago',
  },
  {
    id: 'disc-3',
    title: 'PostgreSQL connection pooling under 10,000 concurrent RPS',
    author: {
      name: 'Rohan Verma',
      role: 'Backend Architect',
      avatar: jaspalAvatar,
    },
    replies: 34,
    upvotes: 89,
    tag: 'PostgreSQL',
    snippet:
      'Why setting max connections to 500 actually slowed down database throughput, and how PgBouncer in transaction mode resolved the bottleneck...',
    timestamp: 'Yesterday',
  },
  {
    id: 'disc-4',
    title: 'Micro-frontends vs. Modular Monoliths: What we learned scaling to 2M MAU',
    author: {
      name: 'Nisha Rao',
      role: 'Cloud & Infrastructure',
      avatar: sahiramAvatar,
    },
    replies: 15,
    upvotes: 43,
    tag: 'Architecture',
    snippet:
      'Why micro-frontends created more build latency and organizational friction than expected, and why modular monorepos with Turborepo won...',
    timestamp: '2 days ago',
  },
];

const FAQ_ITEMS = [
  {
    q: 'What is the CCDL Builder Guild and who is it for?',
    a: 'The CCDL Builder Guild is a collaborative network of software engineers, product designers, technical founders, and systems architects. Whether you are building an ambitious startup or refining enterprise systems, this is a space to share code, get honest peer feedback, and ship high-craft software.',
  },
  {
    q: 'Is membership free, and how do I participate?',
    a: 'Yes, participation is 100% free. We host weekly AMAs, open-source repositories, and code clinics on our private Discord and Slack channels. There are no paywalls or gated tiers.',
  },
  {
    q: 'Can I contribute to the open-source projects?',
    a: 'Absolutely. All CCDL open-source tools and starter kits are actively maintained on GitHub. You can pick up open issues, submit pull requests, or propose architectural RFCs.',
  },
  {
    q: 'How do peer code reviews and teardowns work?',
    a: 'Members can submit repositories or Figma designs to our weekly clinic channels. Our senior leads and community peers provide structured, constructive feedback on performance, ergonomics, and accessibility.',
  },
];

interface CommunityPageProps {
  onNavigate: (page: string) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate }) => {
  const [selectedRepoCategory, setSelectedRepoCategory] = useState<string>('All');
  const [selectedEventType, setSelectedEventType] = useState<string>('All');
  const [copiedRepoId, setCopiedRepoId] = useState<string | null>(null);
  const [activeRsvpEvent, setActiveRsvpEvent] = useState<CommunityEvent | null>(null);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [copiedInvite, setCopiedInvite] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [upvotesState, setUpvotesState] = useState<Record<string, number>>({
    'disc-1': 74,
    'disc-2': 62,
    'disc-3': 89,
    'disc-4': 43,
  });
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const artRef = useRef<HTMLDivElement | null>(null);

  // Mousemove tilt on hero art specimen card
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPointer({ x, y });

      if (artRef.current && !getReducedMotion()) {
        const deltaX = (e.clientX - window.innerWidth / 2) / 30;
        const deltaY = (e.clientY - window.innerHeight / 2) / 30;
        gsap.to(artRef.current.querySelector('.art-panel'), {
          rotateY: deltaX,
          rotateX: -deltaY,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const handleCopyClone = async (repo: CommunityRepo) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(repo.cloneCmd);
      setCopiedRepoId(repo.id);
      setTimeout(() => setCopiedRepoId(null), 2000);
    }
  };

  const handleCopyInvite = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText('https://discord.gg/selmedic-ccdl-guild');
      setCopiedInvite(true);
      setTimeout(() => setCopiedInvite(false), 2000);
    }
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rsvpName.trim() && rsvpEmail.trim()) {
      setRsvpSuccess(true);
      setTimeout(() => {
        setRsvpSuccess(false);
        setActiveRsvpEvent(null);
        setRsvpName('');
        setRsvpEmail('');
      }, 3000);
    }
  };

  const handleUpvote = (discId: string) => {
    setUpvotesState((prev) => ({
      ...prev,
      [discId]: (prev[discId] || 0) + 1,
    }));
  };

  const filteredRepos = useMemo(() => {
    if (selectedRepoCategory === 'All') return REPOSITORIES;
    return REPOSITORIES.filter((r) => r.category === selectedRepoCategory);
  }, [selectedRepoCategory]);

  const filteredEvents = useMemo(() => {
    if (selectedEventType === 'All') return EVENTS;
    return EVENTS.filter((e) => e.type === selectedEventType);
  }, [selectedEventType]);

  return (
    <div className="community-page-root" id="community-page-container">
      {/* 1. Join Guild Discord & Slack Modal */}
      {showJoinModal && (
        <div className="community-modal-backdrop" onClick={() => setShowJoinModal(false)}>
          <div
            className="community-modal-box"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="community-modal-close"
              onClick={() => setShowJoinModal(false)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="community-modal-header">
              <div className="flex items-center gap-2 text-blue-500 mb-2">
                <Sparkles size={16} />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  INSTANT ACCESS // WELCOME
                </span>
              </div>
              <h2>Join the CCDL Builder Guild</h2>
              <p>
                Connect directly with 1,200+ engineers, product designers, and technical founders.
                Access live workshops, peer code reviews, and private open-source sprints.
              </p>
            </div>

            <div className="community-modal-links">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="community-channel-btn discord"
              >
                <div className="channel-icon-wrap">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <strong>Join via Discord Stage</strong>
                  <span>Live audio stages, voice AMAs, and code clinics</span>
                </div>
                <ArrowUpRight size={16} className="ml-auto" />
              </a>

              <a
                href="https://slack.com"
                target="_blank"
                rel="noreferrer"
                className="community-channel-btn slack"
              >
                <div className="channel-icon-wrap">
                  <Terminal size={20} />
                </div>
                <div>
                  <strong>Join Slack Workspace</strong>
                  <span>Asynchronous technical RFCs, architecture threads, and hiring</span>
                </div>
                <ArrowUpRight size={16} className="ml-auto" />
              </a>
            </div>

            <div className="community-modal-footer">
              <button className="button button-dark w-full justify-center" onClick={handleCopyInvite}>
                {copiedInvite ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                <span>{copiedInvite ? 'Invite Link Copied!' : 'Copy Direct Invite Link'}</span>
              </button>
              <span className="text-xs text-muted text-center block mt-3">
                100% Free • Open to all engineers &amp; designers • Code of Conduct Enforced
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 2. RSVP Workshop Modal */}
      {activeRsvpEvent && (
        <div className="community-modal-backdrop" onClick={() => setActiveRsvpEvent(null)}>
          <div
            className="community-modal-box"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="community-modal-close"
              onClick={() => setActiveRsvpEvent(null)}
              aria-label="Close RSVP modal"
            >
              <X size={18} />
            </button>

            {rsvpSuccess ? (
              <div className="community-rsvp-confirmed">
                <CheckCircle2 size={44} className="text-emerald-400" />
                <h2>You're on the Guest List!</h2>
                <p>
                  We have saved your seat for <b>{activeRsvpEvent.title}</b>. We will send the calendar invite and
                  direct stage stream link to <b>{rsvpEmail}</b>.
                </p>
                <span className="text-xs text-muted">Closing window in 3 seconds...</span>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-blue-500 mb-2">
                  <Calendar size={14} />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    {activeRsvpEvent.type} // RSVP
                  </span>
                </div>
                <h2>Reserve Your Spot</h2>
                <p className="text-sm text-muted mt-1">{activeRsvpEvent.title}</p>

                <div className="community-modal-meta">
                  <span>
                    <Calendar size={13} /> {activeRsvpEvent.date}
                  </span>
                  <span>
                    <Clock size={13} /> {activeRsvpEvent.time}
                  </span>
                  <span>
                    <MapPin size={13} /> {activeRsvpEvent.location}
                  </span>
                </div>

                <form onSubmit={handleRsvpSubmit} className="community-rsvp-form">
                  <div>
                    <label className="text-xs font-mono font-bold block mb-1">YOUR FULL NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold block mb-1">YOUR WORK EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={rsvpEmail}
                      onChange={(e) => setRsvpEmail(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="button button-dark mt-2">
                    Confirm Free RSVP ({activeRsvpEvent.spotsLeft} spots left) <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. EXACT HOME PAGE HERO FOUNDATION */}
      <section className="hero section-pad alien-hero community-hero" id="community-hero">
        <div className="alien-hero-aura" />

        <div className="hero-grid alien-hero-grid">
          {/* Top Status Bar (Matching Home page .alien-hero-meta) */}
          <div className="hero-meta alien-hero-meta">
            <button
              onClick={() => onNavigate('home')}
              className="hero-live-pill"
              style={{ cursor: 'pointer', background: 'transparent', border: 'none', textAlign: 'left' }}
            >
              <span className="live-pulse-dot" />
              <span>06 / COLLECTIVE • OPEN GUILD • 1,200+ BUILDERS WORLDWIDE</span>
            </button>

            <div className="hero-rating-badge">
              <span className="rating-clutch">GITHUB STARS</span>
              <span className="rating-num">1,040+</span>
              <span className="rating-divider">/</span>
              <span>14 GLOBAL HUBS</span>
            </div>
          </div>

          {/* Left Column: Headline & Narrative Copy */}
          <div className="hero-copy alien-hero-copy">
            <div className="hero-badge-row">
              <span className="kicker-pill">
                <Sparkles size={13} className="pill-spark" />
                THE SELMEDIC &amp; CCDL BUILDER GUILD
              </span>
            </div>

            <h1 className="display-title alien-display-title">
              Build <span className="hero-hl-blue">together</span>, share{' '}
              <span className="hero-hl-purple">craft</span>, &amp; ship digital{' '}
              <span className="hero-hl-cyan">products</span>.
            </h1>

            <div className="hero-bottom alien-hero-bottom">
              <p className="hero-narrative">
                A high-density network of software engineers, product designers, technical founders, and growth
                architects. We build in public, contribute to production-grade open source, conduct live design
                clinics, and run weekly peer architectural AMAs.
              </p>

              {/* Action Buttons (Matching Home page buttons) */}
              <div className="hero-actions alien-hero-actions">
                <button
                  className="button button-dark alien-hero-btn"
                  onClick={() => setShowJoinModal(true)}
                  style={{ cursor: 'pointer' }}
                >
                  Join Guild Discord &amp; Slack <ArrowDownRight size={16} />
                </button>

                <button
                  className="button alien-hero-btn-outline"
                  onClick={() => {
                    const el = document.getElementById('community-repos-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  Explore Open Source Repos <ArrowUpRight size={16} />
                </button>
              </div>

              {/* Value proposition points */}
              <div className="community-hero-points-strip">
                <div className="hero-point-item">
                  <Code2 size={15} className="text-blue-500" />
                  <span>Production Code</span>
                </div>
                <div className="hero-point-sep">•</div>
                <div className="hero-point-item">
                  <Users size={15} className="text-purple-500" />
                  <span>1,200+ Active Builders</span>
                </div>
                <div className="hero-point-sep">•</div>
                <div className="hero-point-item">
                  <Sparkles size={15} className="text-cyan-500" />
                  <span>100% Free &amp; Open</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Interactive Specimen Terminal Card */}
          <div
            ref={artRef}
            className="hero-art community-hero-art"
            style={{ '--mx': `${pointer.x}%`, '--my': `${pointer.y}%`, perspective: 1000 } as any}
            aria-label="Interactive community terminal specimen card"
          >
            <span className="art-label">Guild / Radar</span>
            <span className="art-code">
              STATUS: <b>ACTIVE</b>
              <br />
              1,248 ONLINE
            </span>

            <div className="art-panel community-terminal-panel">
              <span className="art-panel-kicker">06 // TERMINAL SHELL</span>
              <div className="terminal-screen">
                <div className="terminal-line prompt">
                  <span className="term-user">builder@ccdl:~$</span> <code>npx @selmedic/cli init</code>
                </div>
                <div className="terminal-line success">
                  <Check size={13} className="text-emerald-400" /> <span>Connecting to CCDL Guild cluster...</span>
                </div>
                <div className="terminal-line info">
                  <span>✓ 1,248 builders active across 14 cities</span>
                </div>
                <div className="terminal-line info">
                  <span>✓ Next live session: React Perf Clinic (Sep 19)</span>
                </div>
                <div className="terminal-line accent">
                  <span>▶ Guild status: Accepting new builders</span>
                </div>
              </div>
              <small>Real-time collective collaboration hub</small>
            </div>

            <div className="art-crosshair">+</div>
          </div>
        </div>

        {/* Hero Bottom Capabilities Ticker (Matching Home page foot) */}
        <div className="hero-foot alien-hero-foot">
          <div className="hero-foot-col">
            <b>01</b>
            <span>OPEN SOURCE REPOSITORIES</span>
          </div>
          <div className="hero-foot-col">
            <b>02</b>
            <span>LIVE WORKSHOPS &amp; AMAS</span>
          </div>
          <div className="hero-foot-col">
            <b>03</b>
            <span>1:1 PEER CODE REVIEWS</span>
          </div>
        </div>
      </section>

      {/* 4. MAIN COMMUNITY CONTENT SHELL (Max Width 1500px, Matching Home Page) */}
      <main className="community-main-content">
        {/* SECTION 01: VITAL STATISTICS GRID */}
        <section className="community-section stats-section">
          <div className="section-heading-row">
            <div className="about-heading-top">
              <span className="eyebrow">
                <span className="about-pulse-dot" />
                01 // GUILD VITAL METRICS
              </span>
              <span className="about-heading-tag">REAL-TIME TELEMETRY</span>
            </div>
          </div>

          <div className="community-stats-grid">
            {[
              {
                num: '1,200+',
                label: 'Active Builders',
                desc: 'Engineers, product designers, and technical founders collaborating daily.',
                icon: Users,
              },
              {
                num: '4',
                label: 'Enterprise OSS Starters',
                desc: 'Battle-tested production boilerplates and toolkits hosted on GitHub.',
                icon: Code2,
              },
              {
                num: '48+',
                label: 'Workshops Hosted',
                desc: 'Performance teardowns, Figma design clinics, and backend deep dives.',
                icon: Calendar,
              },
              {
                num: '98%',
                label: 'Peer Satisfaction',
                desc: 'Measured across structured code reviews and 1:1 architectural mentorship.',
                icon: Sparkles,
              },
            ].map((stat, i) => {
              const IconComp = stat.icon;
              return (
                <div key={i} className="community-stat-box">
                  <div className="stat-icon-wrap">
                    <IconComp size={20} />
                  </div>
                  <strong>{stat.num}</strong>
                  <h3>{stat.label}</h3>
                  <p>{stat.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 02: OPEN SOURCE REPOSITORIES */}
        <section className="community-section repos-section" id="community-repos-section">
          <div className="section-heading-row">
            <div className="about-heading-top">
              <span className="eyebrow">
                <span className="about-pulse-dot" />
                02 // PRODUCTION OPEN SOURCE
              </span>
              <span className="about-heading-tag">100% FREE ON GITHUB</span>
            </div>
          </div>

          {/* Repo Filters */}
          <div className="community-filter-row">
            {['All', 'React & Next.js', 'Figma & Design Tokens', 'Node.js & APIs', 'Mobile & Cross-Platform'].map(
              (cat) => (
                <button
                  key={cat}
                  className={`community-filter-pill ${selectedRepoCategory === cat ? 'is-active' : ''}`}
                  onClick={() => setSelectedRepoCategory(cat)}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          <div className="community-repos-grid">
            {filteredRepos.map((repo) => (
              <div key={repo.id} className="community-repo-card">
                <div className="repo-top-row">
                  <div className="flex items-center gap-2">
                    <Github size={18} className="text-blue-500" />
                    <span className="repo-lang-badge">{repo.language}</span>
                  </div>
                  <div className="repo-stars-badge">
                    <Star size={13} className="text-amber-400 fill-amber-400" />
                    <span>{repo.stars} stars</span>
                  </div>
                </div>

                <h3 className="repo-name">{repo.name}</h3>
                <p className="repo-desc">{repo.description}</p>

                <div className="repo-tags-row">
                  {repo.tags.map((t) => (
                    <span key={t} className="repo-tag">
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Clone Command Bar */}
                <div className="repo-clone-bar" onClick={() => handleCopyClone(repo)}>
                  <code>{repo.cloneCmd}</code>
                  <button className="copy-cmd-btn" aria-label="Copy clone command">
                    {copiedRepoId === repo.id ? (
                      <Check size={14} className="text-emerald-400" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>

                <div className="repo-actions-row">
                  <a
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-dark repo-link-btn"
                  >
                    View on GitHub <ArrowUpRight size={14} />
                  </a>
                  <button className="text-link text-xs font-mono font-bold" onClick={() => handleCopyClone(repo)}>
                    {copiedRepoId === repo.id ? 'Copied to Clipboard!' : 'Copy Command'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 03: UPCOMING WORKSHOPS & AMAS (with RSVP Modal) */}
        <section className="community-section events-section" id="community-events-section">
          <div className="section-heading-row">
            <div className="about-heading-top">
              <span className="eyebrow">
                <span className="about-pulse-dot" />
                03 // UPCOMING LIVE SESSIONS
              </span>
              <span className="about-heading-tag">FREE REGISTRATION</span>
            </div>
          </div>

          <div className="community-filter-row">
            {['All', 'Workshops', 'AMAs', 'Design Clinics'].map((type) => (
              <button
                key={type}
                className={`community-filter-pill ${selectedEventType === type ? 'is-active' : ''}`}
                onClick={() => setSelectedEventType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="community-events-grid">
            {filteredEvents.map((evt) => (
              <div key={evt.id} className="community-event-card">
                <div className="event-date-badge">
                  <Calendar size={13} />
                  <span>{evt.date}</span>
                  <span className="event-type-pill">{evt.type}</span>
                </div>

                <h3 className="event-title">{evt.title}</h3>
                <p className="event-desc">{evt.description}</p>

                <div className="event-meta-block">
                  <div className="event-meta-item">
                    <Clock size={14} className="text-muted" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="event-meta-item">
                    <MapPin size={14} className="text-muted" />
                    <span>{evt.location}</span>
                  </div>
                </div>

                <div className="event-host-strip">
                  <img src={evt.host.avatar} alt={evt.host.name} />
                  <div>
                    <strong>{evt.host.name}</strong>
                    <span>{evt.host.role}</span>
                  </div>
                </div>

                <div className="event-footer-action">
                  <span className="spots-badge">{evt.spotsLeft} spots remaining</span>
                  <button
                    className="button button-dark event-rsvp-btn"
                    onClick={() => setActiveRsvpEvent(evt)}
                  >
                    RSVP Free <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 04: WHY JOIN / GUILD TENETS (Bento Grid) */}
        <section className="community-section tenets-section">
          <div className="section-heading-row">
            <div className="about-heading-top">
              <span className="eyebrow">
                <span className="about-pulse-dot" />
                04 // WHY BUILDERS JOIN
              </span>
              <span className="about-heading-tag">FOUR CORE TENETS</span>
            </div>
          </div>

          <div className="community-tenets-grid">
            {[
              {
                icon: Terminal,
                title: 'Learn by Building Real Software',
                desc: 'No theoretical whiteboard trivia. We inspect real pull requests, solve production performance bottlenecks, and share genuine post-mortems.',
              },
              {
                icon: Heart,
                title: 'Generous, High-Standard Collaboration',
                desc: 'Meet seasoned engineers, product designers, and co-founders who take pride in answering questions thoroughly and reviewing code carefully.',
              },
              {
                icon: Code2,
                title: 'Ship Open-Source Production Code',
                desc: 'Contribute to maintained open-source libraries used by companies worldwide. Build an undeniable public track record of craftsmanship.',
              },
              {
                icon: ShieldCheck,
                title: 'High-Trust, Zero-Spam Environment',
                desc: 'Our channels are strictly moderated. No aggressive marketing or recruitment spam—just builders discussing technical problems honestly.',
              },
            ].map((tenet, idx) => {
              const IconComp = tenet.icon;
              return (
                <div key={idx} className="tenet-card">
                  <div className="tenet-icon-wrap">
                    <IconComp size={22} />
                  </div>
                  <h3>{tenet.title}</h3>
                  <p>{tenet.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 05: ACTIVE BUILDERS & CONTRIBUTORS SPOTLIGHT */}
        <section className="community-section contributors-section">
          <div className="section-heading-row">
            <div className="about-heading-top">
              <span className="eyebrow">
                <span className="about-pulse-dot" />
                05 // GUILD MEMBERS &amp; MENTORS
              </span>
              <span className="about-heading-tag">PEER ARCHITECTS</span>
            </div>
          </div>

          <div className="community-people-grid">
            {[
              {
                name: 'Aarav Mehta',
                role: 'Lead Frontend Engineer',
                specialty: 'React 18, GSAP & Web Vitals',
                avatar: sandeepAvatar,
                location: 'Jaipur / Remote',
              },
              {
                name: 'Mira Kapoor',
                role: 'Lead Product Designer',
                specialty: 'Design Tokens & Spatial Ergonomics',
                avatar: gaganAvatar,
                location: 'Jaipur / Remote',
              },
              {
                name: 'Rohan Verma',
                role: 'Senior Backend Architect',
                specialty: 'Node.js, PostgreSQL & Redis Caching',
                avatar: jaspalAvatar,
                location: 'Jaipur / Remote',
              },
              {
                name: 'Nisha Rao',
                role: 'Platform & DevOps Engineer',
                specialty: 'Kubernetes, Cloud CI/CD & SOC2',
                avatar: sahiramAvatar,
                location: 'Jaipur / Remote',
              },
            ].map((person) => (
              <div key={person.name} className="community-person-card">
                <img src={person.avatar} alt={person.name} />
                <div>
                  <h4>{person.name}</h4>
                  <span className="person-role">{person.role}</span>
                  <p>{person.specialty}</p>
                  <span className="person-loc">
                    <MapPin size={11} /> {person.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 06: LIVE COMMUNITY DISCUSSIONS / SHOW & TELL */}
        <section className="community-section discussions-section">
          <div className="section-heading-row">
            <div className="about-heading-top">
              <span className="eyebrow">
                <span className="about-pulse-dot" />
                06 // SHOW &amp; TELL THREADS
              </span>
              <span className="about-heading-tag">COMMUNITY DISCUSSIONS</span>
            </div>
          </div>

          <div className="community-discussions-list">
            {DISCUSSIONS.map((disc) => (
              <div key={disc.id} className="discussion-row-card">
                <button
                  className="discussion-upvote-btn"
                  onClick={() => handleUpvote(disc.id)}
                  title="Upvote discussion"
                >
                  <ThumbsUp size={15} />
                  <span>{upvotesState[disc.id] || disc.upvotes}</span>
                </button>

                <div className="discussion-main-info">
                  <div className="discussion-meta-top">
                    <span className="discussion-tag">#{disc.tag}</span>
                    <span className="discussion-time">{disc.timestamp}</span>
                  </div>

                  <h3 className="discussion-title">{disc.title}</h3>
                  <p className="discussion-snippet">{disc.snippet}</p>

                  <div className="discussion-author-row">
                    <img src={disc.author.avatar} alt={disc.author.name} />
                    <span>
                      Posted by <b>{disc.author.name}</b> ({disc.author.role})
                    </span>
                    <span className="discussion-replies">
                      <MessageCircle size={13} /> {disc.replies} responses
                    </span>
                  </div>
                </div>

                <button
                  className="button button-dark discussion-join-btn"
                  onClick={() => setShowJoinModal(true)}
                >
                  Join Thread <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 07: COMMUNITY FAQ ACCORDION */}
        <section className="community-section faq-section">
          <div className="section-heading-row">
            <div className="about-heading-top">
              <span className="eyebrow">
                <span className="about-pulse-dot" />
                07 // FREQUENTLY ASKED QUESTIONS
              </span>
              <span className="about-heading-tag">EVERYTHING YOU NEED TO KNOW</span>
            </div>
          </div>

          <div className="community-faq-container">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 08: FINAL INTAKE CTA (Matching Home Page CTA Style) */}
        <section className="community-section community-final-cta-section">
          <div className="community-cta-box">
            <div className="cta-ambient" aria-hidden="true" />
            <div className="cta-inner-content">
              <div className="cta-badge">
                <Sparkles size={14} />
                <span>ACTIVE BUILDER INTAKE // 2026.09</span>
              </div>
              <h2>Ready to build alongside ambitious engineers?</h2>
              <p>
                Step inside the CCDL Builder Guild. Whether you are shipping your first production app or tuning
                distributed enterprise microservices, you will find your peers here.
              </p>

              <div className="cta-actions-row">
                <button
                  className="button button-dark cta-join-btn"
                  onClick={() => setShowJoinModal(true)}
                >
                  Join Discord &amp; Slack Now <ArrowUpRight size={16} />
                </button>
                <button
                  className="button button-outline cta-browse-btn"
                  onClick={() => {
                    const el = document.getElementById('community-repos-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Browse Repositories <ArrowDownRight size={16} />
                </button>
              </div>

              <div className="cta-trust-strip">
                <span>✓ 100% Free Forever</span>
                <span>•</span>
                <span>✓ Active Code of Conduct</span>
                <span>•</span>
                <span>✓ Direct Access to CCDL Architects</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CommunityPage;
