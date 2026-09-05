import React, { useState } from 'react';
import {
  Users,
  Code2,
  Calendar,
  MessageSquare,
  Sparkles,
  GitBranch,
  Star,
  Copy,
  Check,
  ExternalLink,
  ArrowUpRight,
  ShieldCheck,
  Terminal,
  HeartHandshake,
  Laptop,
  Compass,
  CheckCircle2,
  X,
  Clock,
  MapPin,
  Send,
  Globe,
  Share2,
} from 'lucide-react';

// Author avatars
import sandeepAvatar from '../src/assets/images/sandeep_barupal_1787155579146.jpg';
import gaganAvatar from '../src/assets/images/gagan_chouhan_1787155556813.jpg';
import jaspalAvatar from '../src/assets/images/jaspal_byavat_1787155617742.jpg';
import sahiramAvatar from '../src/assets/images/sahiram_nayak_1787155597072.jpg';

interface WorkshopEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  platform: string;
  hosts: {
    name: string;
    role: string;
    avatar: string;
  }[];
  description: string;
  topics: string[];
  attendees: number;
}

const UPCOMING_EVENTS: WorkshopEvent[] = [
  {
    id: 'gsap-react-performance',
    title: 'Masterclass: High-Performance Animated Web Interfaces with GSAP & React 18',
    category: 'Frontend Engineering',
    date: 'Saturday, September 19, 2026',
    time: '4:00 PM - 5:30 PM IST (10:30 AM UTC)',
    platform: 'Google Meet / Virtual Live Stream',
    hosts: [
      {
        name: 'Aarav Mehta',
        role: 'Lead Frontend Engineer',
        avatar: sandeepAvatar,
      },
      {
        name: 'Mira Kapoor',
        role: 'Lead UI/UX Designer',
        avatar: gaganAvatar,
      },
    ],
    description:
      'Learn how we engineer 60fps silky smooth scroll animations, GPU-accelerated transforms, and interactive UI micro-physics without degrading Core Web Vitals.',
    topics: [
      'ScrollTrigger setup and Lenis smooth scroll synchronization',
      'Preventing layout thrashing and forced reflows during scroll',
      'Figma token handoff directly to GSAP easing curves',
      'Live Q&A and code specimen teardown',
    ],
    attendees: 184,
  },
  {
    id: 'nodejs-postgresql-scale',
    title: 'Architecture AMA: Scaling Node.js & PostgreSQL to 1M+ Monthly API Requests',
    category: 'Backend Architecture',
    date: 'Thursday, October 01, 2026',
    time: '6:00 PM - 7:15 PM IST (12:30 PM UTC)',
    platform: 'Discord Stage Audio & Screen Share',
    hosts: [
      {
        name: 'Rohan Verma',
        role: 'Senior Backend Architect',
        avatar: jaspalAvatar,
      },
      {
        name: 'Nisha Rao',
        role: 'Senior Backend & Cloud Engineer',
        avatar: sahiramAvatar,
      },
    ],
    description:
      'A candid technical discussion on database connection pooling, query indexing, Redis cache invalidation strategies, and zero-downtime Docker deployments.',
    topics: [
      'Configuring PgBouncer and connection pool limits safely',
      'PostgreSQL EXPLAIN ANALYZE debugging on real query logs',
      'Building idempotent Webhooks with Redis deduplication',
      'Open mic session for developer architecture questions',
    ],
    attendees: 215,
  },
  {
    id: 'figma-systems-saas-clinic',
    title: 'Design Clinic: Figma Systems, Optical Spacing & B2B SaaS Dashboards',
    category: 'UI/UX & Design Systems',
    date: 'Saturday, October 17, 2026',
    time: '4:00 PM - 5:30 PM IST (10:30 AM UTC)',
    platform: 'Virtual Live Stream & Community Figma Canvas',
    hosts: [
      {
        name: 'Mira Kapoor',
        role: 'Lead UI/UX Designer',
        avatar: gaganAvatar,
      },
    ],
    description:
      'Watch live portfolio and UI teardowns. Discover how applying mathematical scales, deliberate negative space, and semantic color tokens eliminates design debt.',
    topics: [
      'Structuring scalable Figma component sets with variant properties',
      'Building flexible data tables and complex data visualizers',
      'Dark mode token architectures without contrast defects',
      'Live review of 3 community member Figma submissions',
    ],
    attendees: 142,
  },
];

interface OpenSourceRepo {
  name: string;
  slug: string;
  description: string;
  stars: string;
  forks: string;
  language: string;
  cloneCmd: string;
  npmCmd?: string;
  url: string;
  tags: string[];
}

const OPEN_SOURCE_REPOS: OpenSourceRepo[] = [
  {
    name: 'react-enterprise-boilerplate',
    slug: 'selmedic/react-enterprise-boilerplate',
    description:
      'Production-ready React 18, Vite, TypeScript, and Tailwind CSS starter featuring pre-configured Lenis smooth scrolling, SEO Schema tags, and accessibility hooks.',
    stars: '420+',
    forks: '85',
    language: 'TypeScript',
    cloneCmd: 'git clone https://github.com/selmedic/react-enterprise-boilerplate.git',
    url: 'https://github.com',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'figma-tokens-exporter',
    slug: 'selmedic/figma-tokens-exporter',
    description:
      'Lightweight Node.js CLI tool that exports Figma Variables and Styles into synchronized CSS custom variables and Tailwind theme definitions.',
    stars: '280+',
    forks: '42',
    language: 'TypeScript / Node',
    cloneCmd: 'npm install -g @selmedic/figma-tokens-exporter',
    npmCmd: 'npm i -D @selmedic/figma-tokens-exporter',
    url: 'https://github.com',
    tags: ['Figma', 'CLI', 'Design Tokens', 'Automation'],
  },
  {
    name: 'node-api-resilience',
    slug: 'selmedic/node-api-resilience',
    description:
      'Plug-and-play Express.js middleware suite for sliding-window rate limiting, Redis caching, structured Pino logging, and graceful degradation.',
    stars: '340+',
    forks: '67',
    language: 'TypeScript / Express',
    cloneCmd: 'npm install @selmedic/api-resilience',
    npmCmd: 'npm i @selmedic/api-resilience',
    url: 'https://github.com',
    tags: ['Node.js', 'Express', 'Redis', 'Security'],
  },
  {
    name: 'seo-schema-engine',
    slug: 'selmedic/seo-schema-engine',
    description:
      'Typed JSON-LD structured data engine supporting LocalBusiness, FAQPage, Organization, and Service schemas for React and Next.js applications.',
    stars: '190+',
    forks: '31',
    language: 'TypeScript',
    cloneCmd: 'npm install @selmedic/seo-schema-engine',
    npmCmd: 'npm i @selmedic/seo-schema-engine',
    url: 'https://github.com',
    tags: ['SEO', 'Schema.org', 'JSON-LD', 'Google Search'],
  },
];

interface CommunityPageProps {
  onNavigate: (page: string) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate }) => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [activeRSVP, setActiveRSVP] = useState<WorkshopEvent | null>(null);
  const [rsvpName, setRsvpName] = useState<string>('');
  const [rsvpEmail, setRsvpEmail] = useState<string>('');
  const [rsvpSuccess, setRsvpSuccess] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'all' | 'repos' | 'events' | 'channels'>('all');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2500);
  };

  const handleRSVPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName || !rsvpEmail || !rsvpEmail.includes('@')) {
      return;
    }
    setRsvpSuccess(true);
    setTimeout(() => {
      setRsvpSuccess(false);
      setActiveRSVP(null);
      setRsvpName('');
      setRsvpEmail('');
    }, 3000);
  };

  return (
    <div className="community-page-root" id="community-page-container">
      {/* RSVP Modal */}
      {activeRSVP && (
        <div className="community-modal-backdrop" onClick={() => setActiveRSVP(null)}>
          <div
            className="community-modal-box"
            id="community-rsvp-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="community-modal-header">
              <div className="community-modal-kicker">
                <Sparkles size={14} className="text-cyan-400" />
                <span>FREE COMMUNITY WORKSHOP RSVP</span>
              </div>
              <button
                onClick={() => setActiveRSVP(null)}
                className="community-modal-close"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            <div className="community-modal-body">
              <h2 className="community-modal-title">{activeRSVP.title}</h2>
              <div className="community-modal-meta">
                <span>
                  <Calendar size={13} /> {activeRSVP.date}
                </span>
                <span>
                  <Clock size={13} /> {activeRSVP.time}
                </span>
                <span>
                  <Laptop size={13} /> {activeRSVP.platform}
                </span>
              </div>

              {rsvpSuccess ? (
                <div className="community-rsvp-confirmed">
                  <CheckCircle2 size={36} className="text-emerald-400 mb-2" />
                  <h3>You're Registered!</h3>
                  <p>
                    We've saved your spot. An invite with calendar link and direct access credentials has been sent to <strong>{rsvpEmail}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRSVPSubmit} className="community-rsvp-form">
                  <p className="community-form-sub">
                    Reserve your live access link and receive the recording & source code after the session:
                  </p>
                  <div className="community-form-field">
                    <label>Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                      className="community-text-input"
                    />
                  </div>
                  <div className="community-form-field">
                    <label>Your Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={rsvpEmail}
                      onChange={(e) => setRsvpEmail(e.target.value)}
                      className="community-text-input"
                    />
                  </div>
                  <button type="submit" className="button button-dark w-full mt-2 justify-center">
                    <span>Confirm Free Registration</span>
                    <ArrowUpRight size={16} />
                  </button>
                  <span className="community-form-privacy">
                    Strictly zero spam. We only send session links and open-source materials.
                  </span>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content Wrap */}
      <div className="community-container max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="blog-breadcrumb">
          <button onClick={() => onNavigate('home')} className="blog-breadcrumb-crumb">
            HOME
          </button>
          <span>/</span>
          <span className="blog-breadcrumb-current">COMMUNITY & DEVELOPER HUB</span>
        </nav>

        {/* Community Live Stats Cockpit */}
        <div className="community-cockpit-banner" id="community-metrics-cockpit">
          <div className="community-hero-copy">
            <span className="community-hero-kicker">THE SELMEDIC BUILDER COLLECTIVE</span>
            <h1 className="community-hero-title">Build Together.<br /><em>Go Further.</em></h1>
            <p className="community-hero-lead">A growing community of developers, designers, and creators building real-world products, sharing knowledge, and helping each other grow.</p>
            <div className="community-hero-actions">
              <button className="button button-dark" onClick={() => setActiveTab('channels')}><span>Join the Community</span><ArrowUpRight size={16} /></button>
              <button className="button button-outline" onClick={() => setActiveTab('repos')}><span>Explore Projects</span><ArrowUpRight size={16} /></button>
            </div>
          </div>
          <div className="community-cockpit-header">
            <div className="telemetry-pulse-label">
              <span className="telemetry-live-dot" />
              <span>THE SELMEDIC BUILDER COLLECTIVE</span>
            </div>
            <span className="community-cockpit-sub">FREE OPEN-SOURCE TOOLS • LIVE WORKSHOPS • PEER REVIEW</span>
          </div>

          <div className="community-metrics-grid">
            <div className="community-stat-card">
              <div className="community-stat-icon-row">
                <Users size={20} className="text-cyan-400" />
                <span className="community-badge-tag">MEMBERS</span>
              </div>
              <strong className="community-stat-num">1,200+</strong>
              <span className="community-stat-title">Developers & Designers</span>
              <span className="community-stat-desc">Collaborating on frontend, backend, and Figma architectures</span>
            </div>

            <div className="community-stat-card">
              <div className="community-stat-icon-row">
                <GitBranch size={20} className="text-blue-400" />
                <span className="community-badge-tag">REPOSITORIES</span>
              </div>
              <strong className="community-stat-num">4</strong>
              <span className="community-stat-title">Open Source Packages</span>
              <span className="community-stat-desc">Boilerplates, Figma token sync, and API resilience tools</span>
            </div>

            <div className="community-stat-card">
              <div className="community-stat-icon-row">
                <Calendar size={20} className="text-amber-400" />
                <span className="community-badge-tag">WORKSHOPS</span>
              </div>
              <strong className="community-stat-num">100%</strong>
              <span className="community-stat-title">Free Live Sessions</span>
              <span className="community-stat-desc">Deep-dive technical webinars, AMAs, and code clinics</span>
            </div>

            <div className="community-stat-card">
              <div className="community-stat-icon-row">
                <MessageSquare size={20} className="text-purple-400" />
                <span className="community-badge-tag">CHANNELS</span>
              </div>
              <strong className="community-stat-num">24/7</strong>
              <span className="community-stat-title">Discord & Discussions</span>
              <span className="community-stat-desc">Direct technical exchange with our core engineering team</span>
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="community-tab-bar" id="community-tab-controls">
          <button
            onClick={() => setActiveTab('all')}
            className={`community-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          >
            All Sections
          </button>
          <button
            onClick={() => setActiveTab('repos')}
            className={`community-tab-btn ${activeTab === 'repos' ? 'active' : ''}`}
          >
            Open Source Repositories
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`community-tab-btn ${activeTab === 'events' ? 'active' : ''}`}
          >
            Live Workshops & AMAs
          </button>
          <button
            onClick={() => setActiveTab('channels')}
            className={`community-tab-btn ${activeTab === 'channels' ? 'active' : ''}`}
          >
            Discussion Hubs
          </button>
        </div>

        {/* SECTION 1: Open Source Repositories */}
        {(activeTab === 'all' || activeTab === 'repos') && (
          <section className="community-section-block" id="community-open-source-section">
            <div className="community-section-heading">
              <div className="sub-badge">01 / OPEN SOURCE TOOLING</div>
              <h2>Built by Selmedic. Free for the community.</h2>
              <p>
                We publish production-tested templates, CLI utilities, and architectural modules to accelerate developer workflows across the global ecosystem.
              </p>
            </div>

            <div className="community-repos-grid">
              {OPEN_SOURCE_REPOS.map((repo) => (
                <div key={repo.slug} className="community-repo-card" id={`repo-card-${repo.name}`}>
                  <div className="community-repo-top">
                    <div className="community-repo-meta-col">
                      <div className="community-repo-name-row">
                        <Terminal size={17} className="text-cyan-400" />
                        <h3 className="community-repo-title">{repo.slug}</h3>
                      </div>
                      <span className="community-repo-lang-tag">{repo.language}</span>
                    </div>

                    <div className="community-repo-stats">
                      <span className="repo-stat-pill">
                        <Star size={13} className="text-amber-400 fill-amber-400" />
                        {repo.stars}
                      </span>
                      <span className="repo-stat-pill">
                        <GitBranch size={13} />
                        {repo.forks}
                      </span>
                    </div>
                  </div>

                  <p className="community-repo-desc">{repo.description}</p>

                  <div className="community-repo-tags">
                    {repo.tags.map((t, idx) => (
                      <span key={idx} className="repo-tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Terminal Command Box */}
                  <div className="community-terminal-box">
                    <code>{repo.cloneCmd}</code>
                    <button
                      onClick={() => handleCopy(repo.cloneCmd, repo.slug)}
                      className="community-copy-btn"
                      title="Copy command to clipboard"
                    >
                      {copiedCmd === repo.slug ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                      <span>{copiedCmd === repo.slug ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: Upcoming Workshops & Live AMAs */}
        {(activeTab === 'all' || activeTab === 'events') && (
          <section className="community-section-block" id="community-workshops-section">
            <div className="community-section-heading">
              <div className="sub-badge">02 / LIVE WORKSHOPS & AMAS</div>
              <h2>Learn directly with our senior collective.</h2>
              <p>
                Interactive live streams, code walk-throughs, and design critiques led by our lead engineers and designers. 100% free with live interactive Q&A.
              </p>
            </div>

            <div className="community-events-grid">
              {UPCOMING_EVENTS.map((event) => (
                <div key={event.id} className="community-event-card" id={`event-card-${event.id}`}>
                  <div className="community-event-header-row">
                    <span className="event-cat-badge">{event.category}</span>
                    <span className="event-attendees-badge">
                      <Users size={12} /> {event.attendees} Registered
                    </span>
                  </div>

                  <h3 className="community-event-title">{event.title}</h3>
                  <p className="community-event-desc">{event.description}</p>

                  <div className="community-event-details-card">
                    <div className="event-detail-item">
                      <Calendar size={15} className="text-cyan-400" />
                      <div>
                        <strong>Date:</strong>
                        <span>{event.date}</span>
                      </div>
                    </div>
                    <div className="event-detail-item">
                      <Clock size={15} className="text-cyan-400" />
                      <div>
                        <strong>Time:</strong>
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <div className="event-detail-item">
                      <Laptop size={15} className="text-cyan-400" />
                      <div>
                        <strong>Platform:</strong>
                        <span>{event.platform}</span>
                      </div>
                    </div>
                  </div>

                  {/* Topics Covered */}
                  <div className="community-event-topics">
                    <strong>Topics Covered:</strong>
                    <ul>
                      {event.topics.map((top, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={13} className="text-cyan-400" />
                          <span>{top}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hosts & RSVP Footer */}
                  <div className="community-event-footer">
                    <div className="community-hosts-list">
                      {event.hosts.map((host, hIdx) => (
                        <div key={hIdx} className="community-host-item">
                          <img src={host.avatar} alt={host.name} className="community-host-avatar" />
                          <div>
                            <span className="community-host-name">{host.name}</span>
                            <span className="community-host-role">{host.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveRSVP(event)}
                      className="button button-dark community-rsvp-btn"
                      id={`rsvp-btn-${event.id}`}
                    >
                      <span>RSVP Free</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: Community Discussion Hubs */}
        {(activeTab === 'all' || activeTab === 'channels') && (
          <section className="community-section-block" id="community-channels-section">
            <div className="community-section-heading">
              <div className="sub-badge">03 / CONNECT & DISCUSS</div>
              <h2>Join the conversation across our channels.</h2>
              <p>
                Whether you need feedback on a Figma prototype, debugging support on a React component, or advice on database schemas, our channels are active and open.
              </p>
            </div>

            <div className="community-channels-grid">
              <div className="community-channel-card channel-discord">
                <div className="channel-icon-wrap">
                  <MessageSquare size={26} className="text-indigo-400" />
                </div>
                <h3>Discord Server</h3>
                <p>
                  Our primary real-time gathering spot. Dedicated rooms for #frontend, #backend, #ui-ux, #code-reviews, and #job-opportunities.
                </p>
                <div className="channel-meta">
                  <span>1,200+ Members • Active Daily</span>
                </div>
                <button
                  onClick={() => window.open('https://discord.com', '_blank')}
                  className="button button-dark w-full justify-center"
                >
                  <span>Join Discord Community</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <div className="community-channel-card channel-github">
                <div className="channel-icon-wrap">
                  <GitBranch size={26} className="text-cyan-400" />
                </div>
                <h3>GitHub Discussions</h3>
                <p>
                  Asynchronous RFCs, open-source bug reports, feature proposals, and code architecture debates on our public repositories.
                </p>
                <div className="channel-meta">
                  <span>Public Issues • Open RFCs</span>
                </div>
                <button
                  onClick={() => window.open('https://github.com', '_blank')}
                  className="button button-dark w-full justify-center"
                >
                  <span>Explore Discussions</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <div className="community-channel-card channel-whatsapp">
                <div className="channel-icon-wrap">
                  <Globe size={26} className="text-emerald-400" />
                </div>
                <h3>Developer Broadcast</h3>
                <p>
                  Curated weekly dispatches with the most important web updates, new browser APIs, Figma release tips, and studio announcements.
                </p>
                <div className="channel-meta">
                  <span>Zero Spam • Weekly Digest</span>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="button button-dark w-full justify-center"
                >
                  <span>Join Broadcast Feed</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: Community Values & Code of Conduct */}
        <section className="community-values-card" id="community-values-block">
          <div className="community-values-header">
            <ShieldCheck size={24} className="text-cyan-400" />
            <div>
              <h3>Our Collective Values & Code of Conduct</h3>
              <p>To keep our community welcoming, constructive, and productive for all creators:</p>
            </div>
          </div>

          <div className="community-values-grid">
            <div className="community-value-item">
              <strong>1. Constructive Code Reviews</strong>
              <span>Critique the architecture, not the person. Provide actionable recommendations and explain the 'why'.</span>
            </div>
            <div className="community-value-item">
              <strong>2. Practical Code Over Pure Theory</strong>
              <span>We value real-world production reliability, clean readability, and measurable performance over academic complexity.</span>
            </div>
            <div className="community-value-item">
              <strong>3. Respectful Inclusivity</strong>
              <span>We welcome developers and designers of all experience levels—from self-taught beginners to seasoned architects.</span>
            </div>
            <div className="community-value-item">
              <strong>4. Strictly Zero Promotional Spam</strong>
              <span>No self-promotion, affiliate links, or unsolicted sales pitches. Pure technical exchange only.</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: "Want to Collaborate or Speak?" CTA */}
        <section className="community-cta-dock" id="community-speak-cta">
          <div className="community-cta-inner">
            <span className="sub-badge">COLLABORATE WITH US</span>
            <h2>Want to speak at our next meetup or build with us?</h2>
            <p>
              Have an open-source project to showcase or want to hire our senior collective for your company's next digital build? Let's talk.
            </p>
            <div className="community-cta-buttons">
              <button onClick={() => onNavigate('book-call')} className="button button-dark">
                <span>Schedule a Call with our Team</span>
                <ArrowUpRight size={16} />
              </button>
              <button onClick={() => onNavigate('contact')} className="button alien-hero-btn-outline">
                <span>Submit a Talk or Inquiry</span>
                <Send size={15} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
