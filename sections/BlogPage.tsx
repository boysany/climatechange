import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Code2,
  Copy,
  ExternalLink,
  Eye,
  Filter,
  Layers,
  Mail,
  MessageSquare,
  Search,
  Share2,
  Sparkles,
  Star,
  Tag,
  TrendingUp,
  User,
  X,
} from 'lucide-react';
import gsap from 'gsap';
import { getReducedMotion } from '../lib/animations.ts';

import sandeepAvatar from '../src/assets/images/sandeep_barupal_1787155579146.jpg';
import gaganAvatar from '../src/assets/images/gagan_chouhan_1787155556813.jpg';
import jaspalAvatar from '../src/assets/images/jaspal_byavat_1787155617742.jpg';
import sahiramAvatar from '../src/assets/images/sahiram_nayak_1787155597072.jpg';

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
  };
  coverImage: string;
  excerpt: string;
  featured?: boolean;
  spotlight?: boolean;
  tags: string[];
  takeaways: string[];
  contentSections: {
    heading: string;
    body: string[];
    codeSnippet?: string;
    callout?: string;
  }[];
}

const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=82&w=1400`;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'optimizing-core-web-vitals-react-nextjs',
    title: 'Building sub-second interfaces: Core Web Vitals & Next.js orchestration',
    category: 'Web Development',
    date: 'August 28, 2026',
    readTime: '7 min read',
    featured: true,
    author: {
      name: 'Aarav Mehta',
      role: 'Lead Frontend Engineer',
      avatar: sandeepAvatar,
      bio: 'Pioneers ultra-responsive React 18 & Next.js architectures with 99+ Core Web Vitals.',
    },
    coverImage: image('photo-1555066931-4365d14bab8c'),
    excerpt:
      'A practical architectural guide to eliminating layout shifts, streaming critical CSS, and optimizing hydration boundaries for flagship web apps.',
    tags: ['React 18', 'Next.js', 'Core Web Vitals', 'Performance'],
    takeaways: [
      'Prioritize Largest Contentful Paint (LCP) by pre-connecting image CDNs and inlining critical SVG glyphs.',
      'Eliminate Cumulative Layout Shift (CLS) through explicit aspect-ratio declarations and skeleton dimension reservations.',
      'De-hydrate below-the-fold components using dynamic imports and intersection observer triggers.',
    ],
    contentSections: [
      {
        heading: 'Speed is the ultimate product feature',
        body: [
          'In enterprise web applications, milliseconds directly correlate with user confidence and checkout conversion. When an interface takes longer than 300ms to visually settle, the human brain registers latency as instability.',
          'Core Web Vitals are not merely arbitrary Google metrics; they represent the physiological thresholds of cognitive attention. By structuring component hydration to prioritize first-screen interactive nodes, we achieve instantaneous responsiveness.',
        ],
        callout:
          'Golden Rule: Never render un-dimensioned media elements. Every image, video, and ad canvas must reserve geometric boundaries before payload arrival.',
        codeSnippet: `// Dynamic Partial Hydration boundary example
import dynamic from 'next/dynamic';

const HeavyInteractiveChart = dynamic(
  () => import('./HeavyInteractiveChart'),
  {
    ssr: false,
    loading: () => <div className="chart-skeleton-placeholder" style={{ minHeight: '380px' }} />
  }
);`,
      },
      {
        heading: 'De-bloating the critical rendering pipeline',
        body: [
          'Modern bundlers frequently bundle utility classes and tertiary dependencies into initial JavaScript chunks. Splitting vendor scripts into distinct runtime vendor manifests ensures the browser caches framework code indefinitely.',
          'Leveraging HTTP/3 multiplexing combined with edge CDN stale-while-revalidate headers yields sub-100ms Time-To-First-Byte across all global regions.',
        ],
      },
    ],
  },
  {
    slug: 'scalable-rest-graphql-microservices-nodejs',
    title: 'Resilient API boundaries: Connection pooling and graceful degradation',
    category: 'Technology',
    date: 'August 14, 2026',
    readTime: '9 min read',
    spotlight: true,
    author: {
      name: 'Rohan Verma',
      role: 'Senior Backend Architect',
      avatar: jaspalAvatar,
      bio: 'Architects distributed Node.js microservices and zero-downtime relational schemas.',
    },
    coverImage: image('photo-1558494949-ef010cbdcc31'),
    excerpt:
      'Connection pooling, Redis distributed lock patterns, and circuit-breaker telemetry for Node.js APIs that withstand 25k+ requests per second.',
    tags: ['Node.js', 'PostgreSQL', 'GraphQL', 'Redis', 'Architecture'],
    takeaways: [
      'Implement circuit-breaker thresholds on third-party integrations to prevent cascading connection exhaustion.',
      'Configure PostgreSQL connection pools based on physical CPU core count rather than arbitrary concurrency numbers.',
      'Employ structured JSON logging with OpenTelemetry trace identifiers for immediate distributed debugging.',
    ],
    contentSections: [
      {
        heading: 'Why APIs buckle under sudden traffic spikes',
        body: [
          'Most API outages are not caused by CPU exhaustion, but by unmanaged database connection pool saturation. When an upstream service experiences a 200ms delay, incoming queries queue exponentially until pool timeouts trigger cascading 500 errors.',
          'By introducing an explicit caching layer via Redis with exponential backoff and circuit-breaking proxies, we ensure core read pathways stay completely insulated.',
        ],
        codeSnippet: `// Circuit Breaker Middleware Pattern
const circuitBreaker = new CircuitBreaker(queryDatabase, {
  timeout: 3000, // If service takes longer than 3s, trigger failure
  errorThresholdPercentage: 50, // When 50% of requests fail, trip breaker
  resetTimeout: 10000 // Test downstream service health after 10s
});

circuitBreaker.fallback(() => getStaleCachedPayload(cacheKey));`,
      },
    ],
  },
  {
    slug: 'figma-design-tokens-to-react-components',
    title: 'From Figma Variables to living code: Automating the design token pipeline',
    category: 'UI/UX Design',
    date: 'July 30, 2026',
    readTime: '6 min read',
    spotlight: true,
    author: {
      name: 'Mira Kapoor',
      role: 'Lead Product & UX Designer',
      avatar: gaganAvatar,
      bio: 'Specializes in mathematical design tokens, visual typography scales, and spatial ergonomics.',
    },
    coverImage: image('photo-1581291518857-4e27b48ff24e'),
    excerpt:
      'How shared design tokens and CI/CD automated synchronization bridge the gap between creative teams and production frontend codebases.',
    tags: ['Figma', 'Design Tokens', 'Tailwind CSS', 'Design Systems'],
    takeaways: [
      'Name tokens according to semantic intent (surface-subtle, text-primary) rather than visual attributes (gray-100, blue-bold).',
      'Automate GitHub pull requests on Figma variable publish events via GitHub Actions webhooks.',
      'Enforce mathematical spacing multiples (4px/8px) across both Figma auto-layout and Tailwind theme configurations.',
    ],
    contentSections: [
      {
        heading: 'Bridging the semantic divide',
        body: [
          'Design systems fail when designers speak in pixels and hex codes while developers think in CSS variables and component props. A tokenized contract provides a singular source of truth for both disciplines.',
          'When color, typography, and elevation variables are serialized into version-controlled JSON, updating global branding across iOS, Android, and Web takes seconds rather than weeks of manual verification.',
        ],
      },
    ],
  },
  {
    slug: 'database-indexing-query-tuning-high-scale',
    title: 'Database indexing & query execution plans: When SQL becomes product speed',
    category: 'Technology',
    date: 'July 18, 2026',
    readTime: '8 min read',
    spotlight: true,
    author: {
      name: 'Nisha Rao',
      role: 'Platform & Cloud Engineer',
      avatar: sahiramAvatar,
      bio: 'Leads database performance engineering, Docker microservices, and SOC2 compliance.',
    },
    coverImage: image('photo-1544383835-bda2bc66a55d'),
    excerpt:
      'A deep dive into EXPLAIN ANALYZE, partial indexes, and B-Tree mechanics that transform 1,400ms table scans into 4ms index lookups.',
    tags: ['PostgreSQL', 'Database', 'SQL', 'Performance', 'Backend'],
    takeaways: [
      'Never deploy an index without reviewing the EXPLAIN ANALYZE cost output on staging with realistic data volume.',
      'Use partial indexes with WHERE clauses to reduce index size by up to 80% on soft-deleted tables.',
      'Avoid composite indexes with improper column cardinality ordering.',
    ],
    contentSections: [
      {
        heading: 'Reading the execution plan',
        body: [
          'A database query is an imperative set of instructions generated by the query planner. Understanding whether PostgreSQL selected a Sequential Scan, an Index Scan, or a Bitmap Heap Scan is the first step in unlocking 100x performance gains.',
        ],
        codeSnippet: `-- Highly optimized partial index for active user sessions
CREATE INDEX idx_active_user_sessions 
ON user_sessions (user_id, last_active_at DESC) 
WHERE status = 'ACTIVE' AND deleted_at IS NULL;`,
      },
    ],
  },
  {
    slug: 'technical-seo-blueprint-service-pages-rank',
    title: 'The technical SEO blueprint: Schema markup, URL hierarchy & crawl budgets',
    category: 'SEO',
    date: 'July 05, 2026',
    readTime: '8 min read',
    author: {
      name: 'Nisha Rao',
      role: 'Growth & Cloud Engineer',
      avatar: sahiramAvatar,
    },
    coverImage: image('photo-1460925895917-afdab827c52f'),
    excerpt:
      'Structured data architecture, internal link graph algorithms, and programmatic metadata generation that earn compounding search authority.',
    tags: ['SEO', 'Schema.org', 'Information Architecture', 'Growth'],
    takeaways: [
      'Embed valid Schema.org JSON-LD definitions on all service, product, and article entities.',
      'Organize site structure with logical parent-child URL taxonomy to maximize Googlebot crawl efficiency.',
      'Ensure canonical tags are strictly self-referential across all device variants.',
    ],
    contentSections: [
      {
        heading: 'Semantic search and modern crawlers',
        body: [
          'Modern search engines no longer evaluate web pages through raw keyword frequency. Instead, knowledge graphs parse entity relationships and context. By implementing structured JSON-LD schemas, you explicitly inform crawlers about your organization, authors, and services.',
        ],
      },
    ],
  },
  {
    slug: 'native-vs-cross-platform-mobile-architecture',
    title: 'Native vs. Cross-Platform in 2026: Choosing React Native vs. Swift/Kotlin',
    category: 'Technology',
    date: 'June 22, 2026',
    readTime: '7 min read',
    author: {
      name: 'Aarav Mehta',
      role: 'Lead Frontend Engineer',
      avatar: sandeepAvatar,
    },
    coverImage: image('photo-1512941937669-90a1b58e7e9c'),
    excerpt:
      'A pragmatic decision matrix for evaluating development speed, 120Hz gesture smoothness, and long-term maintenance overhead across platforms.',
    tags: ['Mobile', 'React Native', 'Swift', 'Architecture'],
    takeaways: [
      'Choose React Native with Expo when delivery velocity and unified web/mobile state logic are paramount.',
      'Reserve pure native Swift/Kotlin for products requiring hardware sensor synchronization or complex custom GPU shaders.',
      'Bridge native modules with JSI for zero-overhead asynchronous bridge communication.',
    ],
    contentSections: [
      {
        heading: 'The performance parity reality',
        body: [
          'With the advent of the new React Native architecture (Hermes engine, TurboModules, and Fabric renderer), the visual distinction between native and cross-platform mobile apps has virtually vanished for 95% of standard commercial apps.',
        ],
      },
    ],
  },
  {
    slug: 'typography-spacing-mathematics-ui-ux',
    title: 'The mathematics of visual rhythm: Modular type scales and spatial balance',
    category: 'UI/UX Design',
    date: 'June 10, 2026',
    readTime: '6 min read',
    author: {
      name: 'Mira Kapoor',
      role: 'Lead Product & UX Designer',
      avatar: gaganAvatar,
    },
    coverImage: image('photo-1507238691740-187a5b1d37b8'),
    excerpt:
      'Why interfaces feel effortless when designed around strict step ratios, optical baseline grids, and disciplined whitespace hierarchy.',
    tags: ['Typography', 'UI Design', 'Mathematics', 'Ergonomics'],
    takeaways: [
      'Maintain an optical step ratio between 1.25 (Major Third) and 1.333 (Perfect Fourth) for commanding editorial presence.',
      'Constrain paragraph character line length strictly to 60-75 characters for optimal human reading speed.',
      'Align padding math to container depth: outer padding must always exceed inner element spacing.',
    ],
    contentSections: [
      {
        heading: 'Visual hierarchy is mathematical',
        body: [
          'Great UI design is not subjective taste; it is optical physics and geometry. When headings, body copy, and captions observe a harmonized ratio, readers intuitively navigate content with zero hesitation or cognitive resistance.',
        ],
      },
    ],
  },
  {
    slug: 'designing-for-clarity',
    title: 'Designing for extreme cognitive clarity in enterprise software',
    category: 'UI/UX Design',
    date: 'May 28, 2026',
    readTime: '6 min read',
    author: {
      name: 'Mira Kapoor',
      role: 'Lead Product & UX Designer',
      avatar: gaganAvatar,
    },
    coverImage: image('photo-1531403009284-440f080d1e12'),
    excerpt:
      'Why enterprise dashboards feel overwhelming, and how applying optical hierarchy and progressive disclosure restores user focus.',
    tags: ['Enterprise UX', 'Design Systems', 'Cognitive Load'],
    takeaways: [
      'Eliminate dashboard cognitive overload by hiding secondary telemetry behind context-aware drawers.',
      'Use high-contrast monochromatic base palettes with a single deliberate accent color for primary actions.',
      'Replace vague iconography with explicit, unambiguous text labels.',
    ],
    contentSections: [
      {
        heading: 'The burden of density',
        body: [
          'Enterprise software has traditionally suffered from excessive visual density. When every button, statistic, and badge screams for attention, the user absorbs none of it. By applying intentional whitespace, we eliminate up to 70% of cognitive strain.',
        ],
      },
    ],
  },
  {
    slug: 'systems-that-scale',
    title: 'Building resilient TypeScript architecture for zero-downtime SaaS',
    category: 'Web Development',
    date: 'May 14, 2026',
    readTime: '8 min read',
    author: {
      name: 'Rohan Verma',
      role: 'Senior Backend Architect',
      avatar: jaspalAvatar,
    },
    coverImage: image('photo-1526374965328-7f61d4dc18c5'),
    excerpt:
      'How to structure shared TypeScript contracts between API services and frontends to catch regressions before deployment.',
    tags: ['TypeScript', 'SaaS Architecture', 'Full Stack'],
    takeaways: [
      'Share runtime validation schemas (Zod) across both server controllers and client form inputs.',
      'Implement automated database migration rollback scripts in your deployment pipeline.',
      'Prevent tight coupling by structuring code around domain bounded contexts rather than generic layer folders.',
    ],
    contentSections: [
      {
        heading: 'Type safety as an architectural moat',
        body: [
          'Premature optimization is dangerous, but architectural negligence is fatal. Choosing clean TypeScript types across the entire client-server boundary ensures errors are caught at compile time rather than in customer support tickets.',
        ],
      },
    ],
  },
  {
    slug: 'the-value-of-momentum',
    title: 'The unfair advantage of the 30-day product sprint for early startups',
    category: 'Technology',
    date: 'April 30, 2026',
    readTime: '5 min read',
    author: {
      name: 'Aarav Mehta',
      role: 'Lead Frontend Engineer',
      avatar: sandeepAvatar,
    },
    coverImage: image('photo-1519389950473-47ba0277781c'),
    excerpt:
      'Why the fastest companies win not through prolonged perfectionism, but through shipping polished iterations with relentless weekly cadence.',
    tags: ['Startups', 'Product Velocity', 'Agile Sprints'],
    takeaways: [
      'Every week a product spends in stealth without real telemetry is a week of compounded learning lost.',
      'High craft and high speed are not mutually exclusive when powered by seasoned specialist collectives.',
      'Early traction fuels investor confidence and builds organic word-of-mouth momentum.',
    ],
    contentSections: [
      {
        heading: 'Shipping is the only metric that compounds',
        body: [
          'The most successful founders ship focused, high-craft MVPs within 30 days. Real user feedback is the ultimate disinfectant for misguided architectural assumptions.',
        ],
      },
    ],
  },
];

const CATEGORIES = ['All', 'Web Development', 'UI/UX Design', 'Technology', 'SEO'];

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'latest' | 'readTime' | 'title'>('latest');
  const [copiedLink, setCopiedLink] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const artRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Mousemove tilt effect on the Hero Art Specimen Card (exact Home page experience)
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

  // Keyboard shortcut '/' to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter and sort articles
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const searchTerms = `${post.title} ${post.excerpt} ${post.category} ${post.tags.join(' ')} ${post.author.name}`.toLowerCase();
      const matchesQuery = searchTerms.includes(searchQuery.toLowerCase().trim());
      return matchesCategory && matchesQuery;
    }).sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'readTime') return parseInt(a.readTime) - parseInt(b.readTime);
      return 0; // default order is latest
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const spotlightPosts = BLOG_POSTS.filter((p) => p.spotlight).slice(0, 3);

  const handleShare = async (post: BlogPost) => {
    const url = typeof window !== 'undefined' ? `${window.location.origin}/article/${post.slug}` : '';
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  return (
    <div className="blog-page-root" id="blog-page-container">
      {/* 2. ENTERPRISE BLOG HERO SECTION */}
      <section className="blog-hero" id="blog-hero">
        <div className="alien-hero-aura" />

        <div className="blog-hero-centered-content">
          {/* Top Status & Metrics Row */}
          <div className="blog-hero-kicker-bar">
            <span className="blog-hero-kicker-pill">
              <span className="live-pulse-dot" />
              <span>EDITORIAL JOURNAL &amp; RESEARCH</span>
            </span>

            <span className="blog-hero-metric-badge">
              <Sparkles size={12} style={{ color: 'var(--blue)' }} />
              <span>10 Dispatches • Updated Weekly</span>
            </span>

            <span className="blog-hero-metric-badge">
              <Clock size={12} style={{ color: 'var(--blue)' }} />
              <span>42 Min Reading Archive</span>
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="blog-hero-title">
            Engineering <span className="hero-hl-blue">dispatches</span>, design{' '}
            <span className="hero-hl-purple">systems</span>, &amp; architecture{' '}
            <span className="hero-hl-cyan">playbooks</span>.
          </h1>

          {/* Subtitle / Narrative Copy */}
          <p className="blog-hero-description">
            In-depth architectural breakdowns on sub-100ms client applications, resilient distributed systems, mathematical design tokens, database query execution tuning, and high-velocity product engineering.
          </p>

          {/* Action CTAs */}
          <div className="blog-hero-actions-row">
            <button
              className="blog-hero-btn-featured"
              onClick={() => {
                const el = document.getElementById('featured-dispatch-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ cursor: 'pointer' }}
            >
              <span>Explore Featured Story</span>
              <ArrowDownRight size={17} className="btn-icon" />
            </button>

            <button
              className="blog-hero-btn-subscribe"
              onClick={() => {
                const el = document.getElementById('blog-newsletter-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ cursor: 'pointer' }}
            >
              <span>Subscribe to Dispatch</span>
              <ArrowUpRight size={17} className="btn-icon" />
            </button>
          </div>

          {/* Quick Topic Jump Chips */}
          <div className="blog-hero-topic-pills">
            <span className="blog-topic-label">QUICK TOPICS:</span>
            {['React 18', 'Design Systems', 'PostgreSQL', 'Microservices', 'Core Web Vitals'].map((tag) => (
              <button
                key={tag}
                className="blog-hero-tag-btn"
                onClick={() => {
                  setSearchQuery(tag);
                  document.getElementById('blog-catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Bottom Capabilities Ticker */}
        <div className="blog-hero-ticker-foot">
          <div className="blog-hero-ticker-col">
            <b>01</b>
            <span>FRONTEND ARCHITECTURE &amp; WEB VITALS</span>
          </div>
          <div className="blog-hero-ticker-col">
            <b>02</b>
            <span>SCALABLE BACKEND &amp; MICROSERVICES</span>
          </div>
          <div className="blog-hero-ticker-col">
            <b>03</b>
            <span>DESIGN SYSTEMS &amp; INTERFACES</span>
          </div>
        </div>
      </section>

      {/* 3. MAIN BLOG CONTENT SHELL (Max Width 1500px, Matching Home Page) */}
      <main className="blog-main-content">
        {/* Search, Filter & Category Control Center */}
        <div className="blog-control-bar" id="blog-catalog-section">
          <div className="blog-search-box">
            <Search size={18} className="search-icon" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search articles by title, topic, or author... (Press /)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search articles"
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery('')} aria-label="Clear search">
                <X size={16} />
              </button>
            )}
          </div>

          <div className="blog-category-chips" role="tablist">
            {CATEGORIES.map((cat) => {
              const count =
                cat === 'All' ? BLOG_POSTS.length : BLOG_POSTS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`blog-cat-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  <span>{cat}</span>
                  <span className="cat-count-badge">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="blog-sort-wrapper">
            <Filter size={14} className="text-muted" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="blog-sort-select"
              aria-label="Sort articles"
            >
              <option value="latest">Sort: Latest Published</option>
              <option value="readTime">Sort: Quickest Read</option>
              <option value="title">Sort: Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* SECTION 01: LEAD / FEATURED ARTICLE SHOWCASE */}
        {selectedCategory === 'All' && !searchQuery && (
          <section className="blog-section featured-dispatch-section" id="featured-dispatch-section">
            <div className="section-heading-row">
              <div className="about-heading-top">
                <span className="eyebrow">
                  <span className="about-pulse-dot" />
                  01 // LEAD EDITORIAL DISPATCH
                </span>
                <span className="about-heading-tag">ESSENTIAL READING</span>
              </div>
            </div>

            <article
              className="featured-story-card cursor-pointer"
              onClick={() => onNavigate('article/' + featuredPost.slug)}
            >
              <div className="featured-story-media">
                <img src={featuredPost.coverImage} alt={featuredPost.title} />
                <span className="featured-pill">FEATURED STORY</span>
              </div>

              <div className="featured-story-content">
                <div className="story-meta-row">
                  <span className="story-category-tag">{featuredPost.category}</span>
                  <span className="story-meta-sep">•</span>
                  <span className="story-date">{featuredPost.date}</span>
                  <span className="story-meta-sep">•</span>
                  <span className="story-time">
                    <Clock size={13} /> {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="featured-story-title">{featuredPost.title}</h2>
                <p className="featured-story-excerpt">{featuredPost.excerpt}</p>

                {/* Takeaways Snippet */}
                <div className="featured-takeaways-preview">
                  <span className="takeaways-preview-label">WHAT YOU'LL LEARN:</span>
                  <ul>
                    {featuredPost.takeaways.slice(0, 2).map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} className="takeaway-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="featured-story-footer">
                  <div className="author-badge">
                    <img src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                    <div>
                      <strong>{featuredPost.author.name}</strong>
                      <span>{featuredPost.author.role}</span>
                    </div>
                  </div>

                  <button
                    className="button button-dark featured-read-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('article/' + featuredPost.slug);
                    }}
                  >
                    Read Dispatch <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* SECTION 02: CURATED EDITOR'S SPOTLIGHTS (3-Column Grid) */}
        {selectedCategory === 'All' && !searchQuery && (
          <section className="blog-section spotlight-section">
            <div className="section-heading-row">
              <div className="about-heading-top">
                <span className="eyebrow">
                  <span className="about-pulse-dot" />
                  02 // CURATED DEEP DIVES
                </span>
                <span className="about-heading-tag">TECHNICAL SERIES</span>
              </div>
            </div>

            <div className="spotlight-grid">
              {spotlightPosts.map((post) => (
                <article
                  key={post.slug}
                  className="spotlight-card cursor-pointer"
                  onClick={() => onNavigate('article/' + post.slug)}
                >
                  <div className="spotlight-img-wrap">
                    <img src={post.coverImage} alt={post.title} />
                    <span className="spotlight-tag">{post.category}</span>
                  </div>

                  <div className="spotlight-body">
                    <div className="spotlight-meta">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="spotlight-title">{post.title}</h3>
                    <p className="spotlight-excerpt">{post.excerpt}</p>

                    <div className="spotlight-author-row">
                      <div className="flex items-center gap-2">
                        <img src={post.author.avatar} alt={post.author.name} className="mini-avatar" />
                        <span className="mini-author-name">{post.author.name}</span>
                      </div>
                      <span className="spotlight-read-link">
                        Read <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 03: COMPLETE ARTICLE ARCHIVE */}
        <section className="blog-section catalog-section">
          <div className="section-heading-row">
            <div className="about-heading-top">
              <span className="eyebrow">
                <span className="about-pulse-dot" />
                03 // COMPLETE ARCHIVE
              </span>
              <span className="about-heading-tag">
                SHOWING {filteredPosts.length} OF {BLOG_POSTS.length} DISPATCHES
              </span>
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="blog-archive-grid">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="archive-card cursor-pointer"
                  onClick={() => onNavigate('article/' + post.slug)}
                >
                  <div className="archive-img-wrap">
                    <img src={post.coverImage} alt={post.title} loading="lazy" />
                    <span className="archive-cat-badge">{post.category}</span>
                  </div>

                  <div className="archive-body">
                    <div className="archive-meta-row">
                      <span>
                        <Calendar size={12} /> {post.date}
                      </span>
                      <span>•</span>
                      <span>
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="archive-title">{post.title}</h3>
                    <p className="archive-excerpt">{post.excerpt}</p>

                    <div className="archive-tags-list">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="archive-tag-pill">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="archive-footer">
                      <div className="archive-author">
                        <img src={post.author.avatar} alt={post.author.name} />
                        <span>{post.author.name}</span>
                      </div>
                      <span className="archive-cta">
                        Read <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="blog-empty-state">
              <Search size={32} className="text-muted" />
              <h3>No articles found for "{searchQuery}"</h3>
              <p>Try searching for different terms like React, Design Systems, PostgreSQL, or SEO.</p>
              <button
                className="button button-dark"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </section>

        {/* SECTION 04: EDITORIAL COLLECTIVE (Meet the Authors) */}
        <section className="blog-section collective-authors-section">
          <div className="section-heading-row">
            <div className="about-heading-top">
              <span className="eyebrow">
                <span className="about-pulse-dot" />
                04 // EDITORIAL COLLECTIVE
              </span>
              <span className="about-heading-tag">AUTHORS &amp; ARCHITECTS</span>
            </div>
          </div>

          <div className="authors-grid">
            {[
              {
                name: 'Aarav Mehta',
                role: 'Lead Frontend Engineer',
                avatar: sandeepAvatar,
                specialty: 'React 18, GSAP Motion, Next.js & Web Vitals',
                articlesCount: 3,
              },
              {
                name: 'Mira Kapoor',
                role: 'Lead Product Designer',
                avatar: gaganAvatar,
                specialty: 'Figma Variables, Design Tokens & Spatial Systems',
                articlesCount: 3,
              },
              {
                name: 'Rohan Verma',
                role: 'Senior Backend Architect',
                avatar: jaspalAvatar,
                specialty: 'Node.js Microservices, Redis Caching & Zero-Downtime',
                articlesCount: 2,
              },
              {
                name: 'Nisha Rao',
                role: 'Platform & Cloud Engineer',
                avatar: sahiramAvatar,
                specialty: 'PostgreSQL Query Plans, Cloud DevOps & Security',
                articlesCount: 2,
              },
            ].map((author) => (
              <div key={author.name} className="author-card">
                <img src={author.avatar} alt={author.name} className="author-portrait" />
                <div className="author-info">
                  <h4>{author.name}</h4>
                  <span className="author-role">{author.role}</span>
                  <p className="author-specialty">{author.specialty}</p>
                  <span className="author-contributions">{author.articlesCount} Published Dispatches</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 05: NEWSLETTER SUBSCRIPTION (Matching Home Page CTA Style) */}
        <section className="blog-section blog-newsletter-section" id="blog-newsletter-section">
          <div className="blog-newsletter-card">
            <div className="newsletter-ambient" aria-hidden="true" />
            <div className="newsletter-content">
              <div className="newsletter-badge">
                <Sparkles size={14} />
                <span>FORTNIGHTLY ENGINEERING DISPATCH</span>
              </div>
              <h2>Get architectural insights delivered directly to your inbox.</h2>
              <p>
                Join over 1,200 founders, CTOs, and product engineers who read our technical teardowns.
                Zero promotional spam, 100% focused on software craft and performance.
              </p>

              {newsletterSuccess ? (
                <div className="newsletter-success-box">
                  <CheckCircle2 size={24} className="text-emerald-400" />
                  <div>
                    <strong>You are officially subscribed.</strong>
                    <span>Check your inbox for our latest architectural benchmark playbook.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                  <div className="newsletter-input-group">
                    <Mail size={18} className="newsletter-icon" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email address..."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      aria-label="Email address for newsletter"
                    />
                  </div>
                  <button type="submit" className="button button-dark newsletter-submit-btn">
                    Subscribe Now <ArrowUpRight size={16} />
                  </button>
                </form>
              )}

              <div className="newsletter-trust-row">
                <span>✓ Fortnightly Frequency</span>
                <span>•</span>
                <span>✓ Zero 3rd-Party Tracking</span>
                <span>•</span>
                <span>✓ 1-Click Unsubscribe Anytime</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
