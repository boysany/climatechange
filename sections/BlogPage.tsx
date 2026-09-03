import React, { useState, useMemo } from 'react';
import {
  Search,
  ArrowUpRight,
  Clock,
  Calendar,
  Sparkles,
  CheckCircle2,
  Share2,
  Check,
  X,
  BookOpen,
  Mail,
  ChevronRight,
  Tag,
  Code2,
  Palette,
  Server,
  TrendingUp,
  Smartphone,
} from 'lucide-react';

// Author avatars
import sandeepAvatar from '../src/assets/images/sandeep_barupal_1787155579146.jpg';
import gaganAvatar from '../src/assets/images/gagan_chouhan_1787155556813.jpg';
import jaspalAvatar from '../src/assets/images/jaspal_byavat_1787155617742.jpg';
import sahiramAvatar from '../src/assets/images/sahiram_nayak_1787155597072.jpg';

export interface BlogPost {
  slug: string;
  title: string;
  category: 'Web Development' | 'UI/UX Design' | 'Backend & Cloud' | 'SEO & Performance' | 'Mobile Apps';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  excerpt: string;
  featured?: boolean;
  tags: string[];
  takeaways: string[];
  contentSections: {
    heading: string;
    body: string[];
    codeSnippet?: string;
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'optimizing-core-web-vitals-react-nextjs',
    title: 'How We Achieve 95+ Core Web Vitals on Heavy React & Next.js Websites',
    category: 'Web Development',
    date: 'August 28, 2026',
    readTime: '7 min read',
    author: {
      name: 'Sandeep Barupal',
      role: 'Lead Frontend Engineer',
      avatar: sandeepAvatar,
    },
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    excerpt:
      'A practical engineering guide on tackling Largest Contentful Paint (LCP), eliminating layout shifts (CLS), and managing hydration overhead for real-world client websites.',
    featured: true,
    tags: ['React 18', 'Next.js', 'Core Web Vitals', 'Performance', 'Lighthouse'],
    takeaways: [
      'Eliminate client-side CSS font-swapping layout shifts by preloading critical web fonts with font-display: swap.',
      'Always specify explicit aspect-ratio or hardcoded width/height attributes on media wrappers to drop CLS below 0.02.',
      'Defer non-essential third-party analytics and chat widgets until after the main thread completes DOMContentLoaded.',
    ],
    contentSections: [
      {
        heading: '1. The Real Bottlenecks in Modern Frontend Frameworks',
        body: [
          'Many engineering teams believe that switching to Next.js or Vite automatically guarantees high Google Lighthouse scores. In reality, large JavaScript bundles, unoptimized Google Fonts, third-party analytics scripts, and unconstrained image assets frequently drag LCP well beyond 3.5 seconds.',
          'At Selmedic Digital Labs, our target benchmark on all client web applications is LCP < 1.2s, CLS < 0.02, and INP < 50ms across standard 4G mobile emulation.',
        ],
      },
      {
        heading: '2. Taming Largest Contentful Paint (LCP)',
        body: [
          'The primary culprit behind poor LCP is almost always delayed image discovery and render-blocking resources. If your hero image is rendered via client-side JavaScript without explicit priority preloading, the browser cannot fetch it until the JS bundle finishes evaluating.',
          'To solve this, inject direct `<link rel="preload" as="image">` tags into your server-rendered HTML entry point, and ensure hero assets are served in modern WebP or AVIF format compressed under 120KB.',
        ],
        codeSnippet: `// Preload hero banner in document head for instant LCP
<link
  rel="preload"
  as="image"
  href="/assets/hero-banner.webp"
  type="image/webp"
  fetchpriority="high"
/>`,
      },
      {
        heading: '3. Eradicating Layout Shifts (CLS) Permanently',
        body: [
          'Cumulative Layout Shift frustrates users and severely degrades Google rankings. We enforce a zero-shift policy by pairing modern CSS aspect-ratio on all card containers with skeleton placeholders that match the final element dimensions.',
        ],
      },
    ],
  },
  {
    slug: 'scalable-rest-graphql-microservices-nodejs',
    title: 'Building Resilient REST & GraphQL APIs with Node.js and PostgreSQL',
    category: 'Backend & Cloud',
    date: 'August 14, 2026',
    readTime: '9 min read',
    author: {
      name: 'Jaspal Byavat',
      role: 'Senior Backend Architect',
      avatar: jaspalAvatar,
    },
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    excerpt:
      'Designing database connection pooling, query indexing patterns, and Redis caching layers that maintain sub-80ms API response times under high concurrency.',
    featured: false,
    tags: ['Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'API Design'],
    takeaways: [
      'Use PgBouncer or native connection pool sizing matched to CPU cores rather than spawning unlimited client connections.',
      'Implement multi-tier Redis caching with stale-while-revalidate logic for read-heavy catalogue endpoints.',
      'Enforce compound indexing on frequently filtered columns to drop query execution times from 450ms to under 12ms.',
    ],
    contentSections: [
      {
        heading: '1. Why API Latency Matters for Business Conversion',
        body: [
          'Backend latency is directly coupled to user churn. If an API request takes more than 300ms, user engagement drops sharply. We architect Node.js services with clear separation between routing, business services, and database query layers.',
        ],
      },
      {
        heading: '2. Connection Pooling & Database Resilience',
        body: [
          'Node.js is single-threaded in its event loop, but PostgreSQL processes each connection in a separate worker process. Exhausting DB connections during traffic surges will crash your backend. A properly configured pool keeps connection overhead constant.',
        ],
        codeSnippet: `// Robust PostgreSQL connection pool setup with pg
import { Pool } from 'pg';

export const dbPool = new Pool({
  max: 20, // Max clients in pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});`,
      },
    ],
  },
  {
    slug: 'figma-design-tokens-to-react-components',
    title: 'Figma Design Systems: Bridging Design Tokens to Production React Components',
    category: 'UI/UX Design',
    date: 'July 30, 2026',
    readTime: '6 min read',
    author: {
      name: 'Gagan Chouhan',
      role: 'Lead Web & UI/UX Designer',
      avatar: gaganAvatar,
    },
    coverImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200',
    excerpt:
      'How our design collective establishes mathematical spacing grids, synchronized token naming, and reusable component libraries that speed up product delivery by 40%.',
    featured: false,
    tags: ['Figma', 'UI/UX Design', 'Design Tokens', 'Design Systems', 'Workflow'],
    takeaways: [
      'Define semantic color tokens (surface-primary, text-muted, border-subtle) rather than raw hex values in Figma Variables.',
      'Maintain an 8px spatial grid across both Figma frames and Tailwind CSS configurations to guarantee visual rhythm.',
      'Ensure zero disconnect between design files and code by syncing tokens directly to CSS variables.',
    ],
    contentSections: [
      {
        heading: '1. The Disconnect Between Design and Code',
        body: [
          'Traditional agency handoffs produce pixel-mismatched screens because developers guess margins and designers use arbitrary font sizes. By synchronizing design tokens directly from Figma into CSS custom properties, designers and developers speak the exact same language.',
        ],
      },
    ],
  },
  {
    slug: 'zero-downtime-devops-docker-vps',
    title: 'Production DevOps: Zero-Downtime Deployments with Docker, Nginx & Cloud VPS',
    category: 'Backend & Cloud',
    date: 'July 18, 2026',
    readTime: '8 min read',
    author: {
      name: 'Sahiram Nayak',
      role: 'Senior Backend & Cloud Engineer',
      avatar: sahiramAvatar,
    },
    coverImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1200',
    excerpt:
      'A practical guide to setting up automated GitHub Actions pipelines, Blue-Green container deployments, SSL automation, and server hardening on cost-effective cloud VPS.',
    featured: false,
    tags: ['Docker', 'DevOps', 'CI/CD', 'Nginx', 'Cloud Security'],
    takeaways: [
      'Use Docker multi-stage builds to strip devDependencies and compile lightweight Alpine images under 80MB.',
      'Implement Blue-Green health-checked port swapping behind Nginx reverse proxy for zero dropped connections during deploys.',
      'Automate daily database snapshots with off-site S3 encrypted backup retention.',
    ],
    contentSections: [
      {
        heading: '1. Cost-Effective, Resilient Cloud Architecture',
        body: [
          'Enterprise cloud hosting does not require complex Kubernetes clusters for 95% of businesses. A hardened Linux instance with automated Docker Compose pipelines provides exceptional performance, 99.99% uptime, and predictable monthly costs.',
        ],
      },
    ],
  },
  {
    slug: 'technical-seo-blueprint-service-pages-rank',
    title: 'Technical SEO Masterclass: Structuring Service Landing Pages for Google Page 1',
    category: 'SEO & Performance',
    date: 'July 05, 2026',
    readTime: '8 min read',
    author: {
      name: 'Sandeep Barupal',
      role: 'Lead Frontend Engineer',
      avatar: sandeepAvatar,
    },
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    excerpt:
      'How to engineer semantic HTML hierarchies, dynamic JSON-LD Schema graphs, and internal topical linking clusters that earn top commercial search rankings.',
    featured: false,
    tags: ['SEO', 'Structured Data', 'Schema.org', 'Google Search', 'Organic Traffic'],
    takeaways: [
      'Embed validated JSON-LD schema (Organization, Service, FAQPage) directly into page templates for rich snippets.',
      'Structure headings logically (H1 -> H2 -> H3) with zero missing levels for search crawler clarity.',
      'Maintain sub-1s initial server response time (TTFB) on edge networks to maximize Google crawl budget.',
    ],
    contentSections: [
      {
        heading: '1. Why Content Alone Is Not Enough for Modern SEO',
        body: [
          'Writing good copy without solid technical fundamentals will leave your website buried on Page 3. Google rewards sites that load instantly, provide machine-readable Schema.org entities, and present mobile-first responsive experiences.',
        ],
      },
    ],
  },
  {
    slug: 'native-vs-cross-platform-mobile-architecture',
    title: 'Native Kotlin/Swift vs Cross-Platform Flutter/React Native: The 2026 Decision Matrix',
    category: 'Mobile Apps',
    date: 'June 22, 2026',
    readTime: '7 min read',
    author: {
      name: 'Jaspal Byavat',
      role: 'Senior Backend Architect',
      avatar: jaspalAvatar,
    },
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
    excerpt:
      'An objective engineering evaluation comparing development velocity, native sensor access, battery efficiency, and maintenance costs across modern mobile platforms.',
    featured: false,
    tags: ['Mobile Development', 'Flutter', 'React Native', 'Kotlin', 'Swift'],
    takeaways: [
      'Choose Flutter or React Native when business logic is identical across iOS and Android and rapid launch velocity is key.',
      'Choose Native Kotlin / Swift when your application relies on real-time hardware sensors, complex video processing, or native widgets.',
      'Build unified GraphQL or REST backend schemas so mobile and web clients share identical data contracts.',
    ],
    contentSections: [
      {
        heading: '1. Navigating the Mobile Platform Dilemma',
        body: [
          'Startups and growing enterprises often face the dilemma of building native iOS and Android apps simultaneously versus adopting a cross-platform framework. The answer depends on your performance requirements, budget, and engineering team composition.',
        ],
      },
    ],
  },
  {
    slug: 'typography-spacing-mathematics-ui-ux',
    title: 'Visual Rhythm & Cognitive Hierarchy: Designing Interfaces that Eliminate User Friction',
    category: 'UI/UX Design',
    date: 'June 10, 2026',
    readTime: '6 min read',
    author: {
      name: 'Gagan Chouhan',
      role: 'Lead Web & UI/UX Designer',
      avatar: gaganAvatar,
    },
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
    excerpt:
      'Exploring typographic scale ratios, generous negative space, and mathematical contrast standards that make digital products effortless to navigate.',
    featured: false,
    tags: ['UI/UX', 'Typography', 'Visual Design', 'Cognitive Ergonomics', 'Heuristics'],
    takeaways: [
      'Adopt a strict Major Second (1.125) or Minor Third (1.200) typographic step scale for clean visual cadence.',
      'Ensure minimum body contrast ratio of 4.5:1 against backgrounds to meet WCAG AA legibility criteria.',
      'Use whitespace as an active structural divider instead of cluttering cards with heavy border lines.',
    ],
    contentSections: [
      {
        heading: '1. The Art of Intentional White Space',
        body: [
          'Cluttered screens cause decision paralysis. When every button, badge, and card is competing for visual dominance, users miss the primary call-to-action. Generous, mathematically balanced spacing creates an interface that feels calm and premium.',
        ],
      },
    ],
  },
  {
    slug: 'database-indexing-query-tuning-high-scale',
    title: 'Database Indexing & Query Tuning: Preventing Latency Spikes in Growing Applications',
    category: 'Backend & Cloud',
    date: 'May 25, 2026',
    readTime: '8 min read',
    author: {
      name: 'Sahiram Nayak',
      role: 'Senior Backend & Cloud Engineer',
      avatar: sahiramAvatar,
    },
    coverImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1200',
    excerpt:
      'How to inspect PostgreSQL EXPLAIN ANALYZE execution plans, identify sequential scans, and design composite B-Tree indexes for lightning-fast queries.',
    featured: false,
    tags: ['Database', 'PostgreSQL', 'Performance Tuning', 'Indexing', 'SQL'],
    takeaways: [
      'Always run EXPLAIN ANALYZE on slow query logs to identify whether the database planner is falling back to sequential scans.',
      'Order composite index columns starting with the highest-cardinality equality filter before range operators.',
      'Regularly run VACUUM ANALYZE to update query planner table statistics and prevent dead tuple bloat.',
    ],
    contentSections: [
      {
        heading: '1. Diagnosing Slow Queries Before They Hit Production',
        body: [
          'When database tables hold just a few thousand records, even unindexed queries execute in under 10ms. But once tables cross millions of records, lack of indexes causes catastrophic database CPU spikes. Understanding execution plans is an essential engineering skill.',
        ],
      },
    ],
  },
];

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [subscriberEmail, setSubscriberEmail] = useState<string>('');
  const [subscribedMessage, setSubscribedMessage] = useState<string>('');

  const categories = [
    'All',
    'Web Development',
    'UI/UX Design',
    'Backend & Cloud',
    'SEO & Performance',
    'Mobile Apps',
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const handleShareArticle = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail || !subscriberEmail.includes('@')) {
      setSubscribedMessage('Please enter a valid email address.');
      return;
    }
    setSubscribedMessage('Subscribed! Welcome to Selmedic Engineering Dispatches.');
    setSubscriberEmail('');
    setTimeout(() => setSubscribedMessage(''), 5000);
  };

  return (
    <div className="blog-page-root" id="blog-page-container">
      {/* Article Detail Modal / Reader */}
      {activeArticle && (
        <div className="blog-reader-backdrop" onClick={() => setActiveArticle(null)}>
          <div
            className="blog-reader-modal"
            id="blog-reader-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="blog-reader-top-bar">
              <div className="blog-reader-meta-chips">
                <span className="blog-cat-pill">{activeArticle.category}</span>
                <span className="blog-time-pill">
                  <Clock size={12} /> {activeArticle.readTime}
                </span>
                <span className="blog-date-pill">
                  <Calendar size={12} /> {activeArticle.date}
                </span>
              </div>
              <div className="blog-reader-actions">
                <button
                  onClick={handleShareArticle}
                  className="blog-share-btn"
                  title="Copy link to article"
                >
                  {copiedLink ? <Check size={15} className="text-emerald-500" /> : <Share2 size={15} />}
                  <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="blog-close-btn"
                  aria-label="Close article"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="blog-reader-scrollable">
              <div className="blog-reader-hero-img-wrap">
                <img
                  src={activeArticle.coverImage}
                  alt={activeArticle.title}
                  className="blog-reader-hero-img"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="blog-reader-body-content">
                <h1 className="blog-reader-title">{activeArticle.title}</h1>
                <p className="blog-reader-lead">{activeArticle.excerpt}</p>

                {/* Author Info Card */}
                <div className="blog-author-strip">
                  <img
                    src={activeArticle.author.avatar}
                    alt={activeArticle.author.name}
                    className="blog-author-avatar"
                  />
                  <div>
                    <strong className="blog-author-name">{activeArticle.author.name}</strong>
                    <span className="blog-author-role">{activeArticle.author.role} • Selmedic Digital Labs</span>
                  </div>
                </div>

                {/* Key Takeaways Box */}
                <div className="blog-takeaways-card">
                  <div className="blog-takeaways-heading">
                    <Sparkles size={16} />
                    <span>KEY ARCHITECTURAL TAKEAWAYS</span>
                  </div>
                  <ul className="blog-takeaways-list">
                    {activeArticle.takeaways.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Content Sections */}
                {activeArticle.contentSections.map((sec, sIdx) => (
                  <div key={sIdx} className="blog-content-section">
                    <h3>{sec.heading}</h3>
                    {sec.body.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                    {sec.codeSnippet && (
                      <pre className="blog-code-snippet">
                        <code>{sec.codeSnippet}</code>
                      </pre>
                    )}
                  </div>
                ))}

                {/* Tags */}
                <div className="blog-tags-row">
                  <Tag size={14} className="text-cyan-400" />
                  {activeArticle.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="blog-topic-tag">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer Consultation CTA */}
                <div className="blog-reader-cta-card">
                  <h3>Need expert engineering or design execution?</h3>
                  <p>
                    Our core team at Selmedic Digital Labs designs and engineers robust, scalable web and mobile software for ambitious businesses.
                  </p>
                  <div className="blog-cta-actions">
                    <button
                      onClick={() => {
                        setActiveArticle(null);
                        onNavigate('book-call');
                      }}
                      className="button button-dark"
                    >
                      <span>Book a Discovery Call</span>
                      <ArrowUpRight size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setActiveArticle(null);
                        onNavigate('contact');
                      }}
                      className="button alien-hero-btn-outline"
                    >
                      <span>Contact Us</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="blog-container max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="blog-breadcrumb">
          <button onClick={() => onNavigate('home')} className="blog-breadcrumb-crumb">
            HOME
          </button>
          <span>/</span>
          <span className="blog-breadcrumb-current">BLOG & ENGINEERING DISPATCHES</span>
        </nav>

        {/* Featured Post Spotlight Banner */}
        <div className="blog-featured-card" id="blog-featured-hero">
          <div className="blog-featured-grid">
            <div className="blog-featured-media">
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                className="blog-featured-img"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="blog-featured-badge">FEATURED ARTICLE</span>
            </div>

            <div className="blog-featured-content">
              <div className="blog-featured-meta">
                <span className="blog-cat-pill">{featuredPost.category}</span>
                <span className="blog-time-pill">
                  <Clock size={12} /> {featuredPost.readTime}
                </span>
                <span className="blog-date-pill">{featuredPost.date}</span>
              </div>

              <h2 className="blog-featured-title">
                {featuredPost.title}
              </h2>

              <p className="blog-featured-excerpt">
                {featuredPost.excerpt}
              </p>

              <div className="blog-featured-author-row">
                <div className="blog-author-compact">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="blog-author-avatar-sm"
                  />
                  <div>
                    <strong>{featuredPost.author.name}</strong>
                    <span>{featuredPost.author.role}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticle(featuredPost)}
                  className="button button-dark blog-read-btn"
                  id="read-featured-article-btn"
                >
                  <span>Read Full Article</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="blog-filter-bar" id="blog-filter-controls">
          <div className="blog-categories-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`blog-category-btn ${selectedCategory === cat ? 'active' : ''}`}
                id={`blog-category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-search-box">
            <Search size={16} className="blog-search-icon" />
            <input
              type="text"
              placeholder="Search topics, keywords, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-search-input"
              id="blog-search-field"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="blog-search-clear"
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="blog-results-meta">
          <span>
            Showing <strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'article' : 'articles'}
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
            {searchQuery ? ` matching "${searchQuery}"` : ''}
          </span>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="blog-reset-filters-btn"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="blog-grid" id="blog-posts-grid">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="blog-card"
                id={`blog-card-${post.slug}`}
                onClick={() => setActiveArticle(post)}
              >
                <div className="blog-card-media">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    className="blog-card-img"
                    referrerPolicy="no-referrer"
                  />
                  <span className="blog-card-category-tag">{post.category}</span>
                </div>

                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{post.date}</span>
                    <span className="blog-card-read">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>

                  <div className="blog-card-footer">
                    <div className="blog-card-author">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="blog-card-author-img"
                      />
                      <div>
                        <span className="blog-card-author-name">{post.author.name}</span>
                        <span className="blog-card-author-role">{post.author.role}</span>
                      </div>
                    </div>

                    <span className="blog-card-arrow">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-empty-state">
            <BookOpen size={40} className="text-cyan-400 mb-3" />
            <h3>No articles found</h3>
            <p>Try searching for a different keyword or select another category filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="button button-dark mt-4"
            >
              View All Articles
            </button>
          </div>
        )}

        {/* Newsletter Subscription Box */}
        <section className="blog-newsletter-card" id="blog-newsletter-section">
          <div className="blog-newsletter-content">
            <span className="sub-badge">ENGINEERING DISPATCHES</span>
            <h2>Join 1,500+ developers & product leaders.</h2>
            <p>
              Get monthly in-depth engineering breakdowns, UI/UX architecture case studies, and practical code tutorials directly in your inbox. Strictly zero spam.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="blog-newsletter-form">
              <div className="blog-input-group">
                <Mail size={18} className="blog-input-icon" />
                <input
                  type="email"
                  placeholder="Enter your work email address..."
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                  className="blog-newsletter-input"
                  id="newsletter-email-input"
                />
              </div>
              <button
                type="submit"
                className="button button-dark blog-subscribe-btn"
                id="newsletter-submit-btn"
              >
                <span>Subscribe Free</span>
                <ArrowUpRight size={15} />
              </button>
            </form>

            {subscribedMessage && (
              <div className="blog-subscribe-alert">
                <CheckCircle2 size={16} />
                <span>{subscribedMessage}</span>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
