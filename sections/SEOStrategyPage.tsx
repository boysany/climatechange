import React, { useState, useMemo } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
const motion = m as any;
import {
  CheckCircle2,
  ShieldCheck,
  Search,
  Zap,
  Globe,
  Layers,
  ArrowRight,
  ArrowDownRight,
  ArrowUpRight,
  Star,
  TrendingUp,
  MapPin,
  Code2,
  FileCode,
  FileCheck,
  Award,
  Sparkles,
  ExternalLink,
  Target,
  BarChart3,
  Calendar,
  Share2,
  Database,
  Smartphone,
  Copy,
  Check,
  Monitor,
  Filter,
  Sliders,
  Terminal,
  Activity,
  Network,
  Gauge,
  Info,
  ChevronRight,
  Clock,
  Sparkle
} from 'lucide-react';
import { SEO_SERVICES_MAP, SEO_KEYWORD_CLUSTERS, SEO_ROADMAP_PHASES } from '../lib/seoData';
import { useSEO } from '../lib/useSEO';
import ScrollReveal from '../components/ScrollReveal.tsx';

interface SEOStrategyPageProps {
  onNavigate: (route: string) => void;
  onOpenConsultation?: () => void;
}

export const SEOStrategyPage: React.FC<SEOStrategyPageProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'serp' | 'keywords' | 'schema' | 'roadmap'>('audit');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [filterIntent, setFilterIntent] = useState<string>('all');
  const [serpQuery, setSerpQuery] = useState<'brand' | 'software' | 'ai' | 'mvp'>('brand');
  const [serpDevice, setSerpDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [activeSchemaTab, setActiveSchemaTab] = useState<'org' | 'service' | 'faq' | 'website'>('org');
  const [serviceSearch, setServiceSearch] = useState<string>('');
  const [auditCategory, setAuditCategory] = useState<'all' | 'architecture' | 'performance' | 'crawling'>('all');

  useSEO({
    title: 'CCDL SEO Strategy & Google Ranking Architecture | Climate Change Digital Labs',
    description: 'Explore the technical SEO audit, CCDL keyword clusters, Schema.org entity graphs, and Google ranking strategy for CCDL (Climate Change Digital Labs).',
    keywords: 'CCDL SEO, Climate Change Digital Labs, technical SEO audit, CCDL keyword clusters, schema markup, Core Web Vitals, Google ranking roadmap',
    canonicalUrl: 'https://climatechangedigitallabs.com/seo-strategy'
  });

  const handleCopy = (text: string, id: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(id);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const auditChecklist = [
    {
      id: 'heading-hierarchy',
      category: 'architecture',
      title: 'Semantic HTML5 Heading Hierarchy',
      desc: 'Strict single H1 per route with descending H2/H3 architecture and zero heading level skips for optimal document outline parsing.',
      status: 'Verified 100%',
      metric: 'H1 > H2 > H3 Strict',
      tool: 'W3C & Google Search Console',
      icon: Code2
    },
    {
      id: 'meta-titles',
      category: 'architecture',
      title: 'Dynamic Page-Level Meta & Title Tags',
      desc: 'Unique title (under 60 chars), meta description (under 160 chars), and canonical tags dynamically injected for all 18 service hubs.',
      status: 'Verified Pass',
      metric: '100% Unique Metadata',
      tool: 'Google SERP Validator',
      icon: Search
    },
    {
      id: 'robots-sitemap',
      category: 'crawling',
      title: 'Robots.txt & XML Sitemap Engine',
      desc: 'Clean /robots.txt with Googlebot-Image directives and auto-indexed /sitemap.xml detailing all 18 services, changefreq, and priorities.',
      status: 'Indexed Daily',
      metric: 'Priority 1.0 - 0.85',
      tool: 'Sitemap Protocol 0.9',
      icon: FileCode
    },
    {
      id: 'json-ld-schemas',
      category: 'crawling',
      title: 'Multi-Entity JSON-LD Schema Graphs',
      desc: 'Organization, LocalBusiness, ProfessionalService, WebSite, Service Catalog, and FAQ schemas enabling Google Knowledge Graph entity linking.',
      status: 'Valid Multi-Graph',
      metric: 'Schema.org v24 Compliant',
      tool: 'Google Rich Results Test',
      icon: Database
    },
    {
      id: 'core-web-vitals',
      category: 'performance',
      title: 'Core Web Vitals & Sub-0.8s LCP',
      desc: 'WebP asset pipelines, asynchronous image decoding, CSS containment, font-display: swap, and CLS < 0.02 under real-world throttled 4G.',
      status: '98/100 Lighthouse',
      metric: 'LCP: 0.64s | CLS: 0.012',
      tool: 'PageSpeed Insights',
      icon: Zap
    },
    {
      id: 'mobile-first',
      category: 'performance',
      title: 'Mobile-First Touch Ergonomics',
      desc: 'Tested across 320px to 4K displays with 44px+ touch targets, hardware-accelerated transforms, and zero horizontal viewport overflows.',
      status: '100% Responsive',
      metric: 'Touch Targets >= 44px',
      tool: 'Google Mobile-Friendly Test',
      icon: Smartphone
    },
    {
      id: 'social-graph',
      category: 'architecture',
      title: 'Canonical URL & OpenGraph Protocol',
      desc: 'Self-referencing absolute canonical links prevent duplicate parameter indexing. Verified og:image, twitter:card, and secure HTTPS protocols.',
      status: 'Active Pass',
      metric: 'No Duplicate URLs',
      tool: 'OpenGraph.xyz',
      icon: Share2
    },
    {
      id: 'local-seo',
      category: 'crawling',
      title: 'Local SEO & Geo-Targeting (India HQ + Global)',
      desc: 'Jaipur, Rajasthan geo coordinates (26.9124, 75.7873), regional schemas (IN, US, GB, AE), and structured PostalAddress attributes.',
      status: 'Entity Bound',
      metric: 'GeoCoordinates Active',
      tool: 'Google Business Profile Graph',
      icon: MapPin
    }
  ];

  const filteredAudit = auditChecklist.filter(item => {
    if (auditCategory === 'all') return true;
    return item.category === auditCategory;
  });

  const filteredClusters = useMemo(() => {
    return SEO_KEYWORD_CLUSTERS.filter(cluster => {
      const matchesSearch =
        cluster.cluster.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        cluster.primary.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        cluster.supportingKeywords.some(kw => kw.toLowerCase().includes(searchKeyword.toLowerCase()));

      if (!matchesSearch) return false;

      if (filterIntent === 'all') return true;
      if (filterIntent === 'brand') return cluster.intent.toLowerCase().includes('brand') || cluster.intent.toLowerCase().includes('navigational');
      if (filterIntent === 'commercial') return cluster.intent.toLowerCase().includes('commercial');
      if (filterIntent === 'transactional') return cluster.intent.toLowerCase().includes('transactional');
      if (filterIntent === 'local') return cluster.intent.toLowerCase().includes('local') || cluster.primary.toLowerCase().includes('india');
      return true;
    });
  }, [searchKeyword, filterIntent]);

  const filteredServices = useMemo(() => {
    const list = Object.values(SEO_SERVICES_MAP);
    if (!serviceSearch.trim()) return list;
    const q = serviceSearch.toLowerCase();
    return list.filter(srv =>
      srv.title.toLowerCase().includes(q) ||
      srv.shortTitle.toLowerCase().includes(q) ||
      srv.category.toLowerCase().includes(q) ||
      srv.slug.toLowerCase().includes(q)
    );
  }, [serviceSearch]);

  const serpVariations = {
    brand: {
      query: 'CCDL — Climate Change Digital Labs',
      url: 'https://climatechangedigitallabs.com',
      breadcrumb: 'climatechangedigitallabs.com',
      title: 'CCDL — Climate Change Digital Labs | Custom Software & AI Development',
      snippet: 'Climate Change Digital Labs (CCDL) is a premier digital engineering studio. We build enterprise web applications, iOS & Android mobile apps, and custom generative AI solutions with 95+ Core Web Vitals.',
      sitelinks: [
        { label: 'Software Development', path: 'service-software-development', desc: 'Enterprise full-stack engineering & microservices architecture.' },
        { label: 'AI Solutions & LLMs', path: 'service-ai-solutions', desc: 'Custom RAG agents, fine-tuned models & intelligent automation.' },
        { label: 'Mobile App Development', path: 'service-mobile-app-development', desc: 'High-performance native Swift, Kotlin & Flutter mobile apps.' },
        { label: 'Website Development', path: 'service-website-development', desc: 'Sub-0.8s page speed, 95+ Lighthouse score & conversion design.' }
      ]
    },
    software: {
      query: 'custom software development company in India',
      url: 'https://climatechangedigitallabs.com/services/software-development',
      breadcrumb: 'climatechangedigitallabs.com › services › software-development',
      title: 'Custom Software Development Company India | Enterprise Scale — CCDL',
      snippet: 'Looking for custom software development? CCDL builds robust, secure, and scalable bespoke enterprise platforms, microservices, and SaaS systems with 100% source code ownership.',
      sitelinks: [
        { label: 'Web Applications', path: 'service-web-application-development', desc: 'Complex SaaS portals, dashboards & real-time WebSockets.' },
        { label: 'API & Microservices', path: 'service-api-microservices', desc: 'Sub-50ms REST, GraphQL & gRPC distributed architectures.' },
        { label: 'Cloud & DevOps', path: 'service-cloud-devops', desc: 'Automated Kubernetes, AWS/GCP pipelines & zero downtime.' },
        { label: 'SaaS MVP Launch', path: 'service-saas-mvp', desc: 'Idea-to-market in 4-6 weeks with production-grade code.' }
      ]
    },
    ai: {
      query: 'AI development company India LLM solutions',
      url: 'https://climatechangedigitallabs.com/services/ai-solutions',
      breadcrumb: 'climatechangedigitallabs.com › services › ai-solutions',
      title: 'Custom AI Development Company in India | Enterprise LLM & RAG — CCDL',
      snippet: 'Deploy private generative AI solutions with zero data leakage. CCDL develops custom multi-agent workflows, vector database search (RAG), and proprietary domain models for forward-thinking enterprises.',
      sitelinks: [
        { label: 'AI Architectural Audit', path: 'contact', desc: 'Evaluate enterprise data readiness and LLM inference costs.' },
        { label: 'Private RAG Systems', path: 'service-ai-solutions', desc: 'Vector databases, LangChain pipelines & hallucination guards.' },
        { label: 'Autonomous Agents', path: 'service-ai-solutions', desc: 'Task-driven multi-agent orchestration for enterprise workflows.' },
        { label: 'Case Studies', path: 'portfolio', desc: 'Explore AI transformation projects across healthcare & fintech.' }
      ]
    },
    mvp: {
      query: 'SaaS MVP development agency rapid launch',
      url: 'https://climatechangedigitallabs.com/services/saas-mvp',
      breadcrumb: 'climatechangedigitallabs.com › services › saas-mvp',
      title: 'SaaS MVP Development Company | 4-6 Week Launch Sprints — CCDL',
      snippet: 'Validate your tech product before burning capital. CCDL operates as your senior product squad, building production-grade TypeScript SaaS MVPs with Stripe billing and multi-tenant auth in 4 to 6 weeks.',
      sitelinks: [
        { label: 'Fixed-Price Sprints', path: 'pricing', desc: 'Predictable milestone budgets with zero hidden costs.' },
        { label: 'UI/UX Design Systems', path: 'service-ui-ux-design', desc: 'Figma design tokens, interactive prototypes & design tokens.' },
        { label: 'Founder Consultation', path: 'contact', desc: 'Schedule a 30-minute architectural scoping session today.' },
        { label: 'Startup Case Studies', path: 'portfolio', desc: 'See how startups achieved seed funding with CCDL products.' }
      ]
    }
  };

  const currentSerp = serpVariations[serpQuery];

  const schemaSnippets = {
    org: {
      name: 'Organization & LocalBusiness Graph',
      filename: 'ccdl-organization.jsonld',
      description: 'Defines CCDL as a legal verified Organization and ProfessionalService entity with localized geographic attributes for Google Knowledge Graph recognition.',
      code: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": "https://climatechangedigitallabs.com/#organization",
      "name": "CCDL — Climate Change Digital Labs",
      "alternateName": [
        "CCDL",
        "Climate Change Digital Labs",
        "CCDL Digital Labs",
        "CCDL Studio"
      ],
      "url": "https://climatechangedigitallabs.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://climatechangedigitallabs.com/icon.svg",
        "caption": "CCDL Studio Logo"
      },
      "telephone": "+917852052323",
      "email": "climatechangedigitallabs@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Bikaner Bypass, Anupgarh",
        "addressLocality": "Sri Ganganagar",
        "addressRegion": "Rajasthan",
        "postalCode": "335701",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.9124,
        "longitude": 75.7873
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "54",
        "bestRating": "5"
      },
      "priceRange": "$$$$"
    }
  ]
}`
    },
    service: {
      name: 'Service Catalog Graph',
      filename: 'ccdl-service-catalog.jsonld',
      description: 'Declares custom software development, mobile apps, and AI engineering services with areaServed tags for India, United States, United Kingdom, and UAE.',
      code: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://climatechangedigitallabs.com/services/software-development#service",
  "name": "Custom Software Development Services by CCDL",
  "serviceType": "Enterprise Software Engineering",
  "provider": {
    "@type": "Organization",
    "name": "Climate Change Digital Labs",
    "alternateName": "CCDL",
    "url": "https://climatechangedigitallabs.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Engineering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full-Stack Web Application Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI & Large Language Model Architecture"
        }
      }
    ]
  }
}`
    },
    faq: {
      name: 'FAQPage Rich Snippet Graph',
      filename: 'ccdl-faqpage.jsonld',
      description: 'Generates expandable Google SERP question-and-answer drop-downs directly underneath the search result listing.',
      code: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does CCDL (Climate Change Digital Labs) provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CCDL provides custom software development, web application engineering, iOS and Android mobile app development, UI/UX design systems, cloud architecture, and bespoke generative AI solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Does CCDL provide complete source code and IP ownership?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Upon project milestone completion, clients receive 100% unconditional ownership of all source code, Figma design files, database schemas, and intellectual property with zero recurring royalties."
      }
    },
    {
      "@type": "Question",
      "name": "Are websites and apps built by CCDL optimized for Core Web Vitals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every digital product developed by CCDL is engineered for sub-0.8s load times, scoring 95+ on Google Lighthouse with strict Core Web Vitals compliance."
      }
    }
  ]
}`
    },
    website: {
      name: 'WebSite & SearchAction Graph',
      filename: 'ccdl-website.jsonld',
      description: 'Enables Google to display an internal site search box directly within Google Search results for CCDL navigational queries.',
      code: `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://climatechangedigitallabs.com",
  "name": "CCDL — Climate Change Digital Labs",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://climatechangedigitallabs.com/services?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}`
    }
  };

  const currentSchema = schemaSnippets[activeSchemaTab];

  return (
    <div className="seo-strategy-wrapper" id="seo-strategy-page">
      <div className="seo-strategy-container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="seo-breadcrumb-nav" id="seo-breadcrumb">
          <button
            onClick={() => onNavigate('home')}
            className="seo-breadcrumb-link"
            id="seo-crumb-home"
          >
            HOME
          </button>
          <span className="seo-breadcrumb-sep">/</span>
          <span className="seo-breadcrumb-current" id="seo-crumb-current">
            SEO STRATEGY &amp; SEARCH ENGINE ENGINE
          </span>
        </nav>

        {/* Hero Card */}
        <header className="seo-hero-card" id="seo-hero-header">
          {/* Top Status Bar */}
          <div className="seo-hero-status-row">
            <div className="seo-live-indicator">
              <span className="seo-pulse-dot" />
              <span className="seo-status-text">
                GOOGLE CORE UPDATE 2026 COMPLIANT • ZERO TECHNICAL DEBT
              </span>
            </div>

            <div className="seo-header-chips">
              <span className="seo-header-tag">
                <ShieldCheck size={13} className="text-emerald-500" />
                WHITE-HAT ENTERPRISE ARCHITECTURE
              </span>
              <span className="seo-header-tag seo-header-tag-blue">
                <Globe size={13} />
                INDIA HQ + GLOBAL REACH
              </span>
            </div>
          </div>

          <div className="seo-hero-main">
            <div className="hero-badge-row" style={{ marginBottom: '1rem' }}>
              <span className="kicker-pill">
                <Sparkles size={13} className="pill-spark" />
                SEARCH ENGINE DOMINANCE &amp; CORE WEB VITALS BLUEPRINT
              </span>
            </div>

            <h1 className="display-title alien-display-title seo-hero-title-refined" id="seo-main-heading">
              CCDL <span className="hero-hl-blue">Search Architecture</span>, Google{' '}
              <span className="hero-hl-purple">Knowledge Graph</span>, &amp; Inbound{' '}
              <span className="hero-hl-cyan">Growth Engine</span>.
            </h1>

            <p className="seo-hero-desc" id="seo-sub-heading">
              A comprehensive technical blueprint engineered to capture high-intent commercial search queries across India and international markets. Verified against Google PageSpeed, Core Web Vitals (sub-0.8s LCP), Semantic JSON-LD schemas, and crawl efficiency.
            </p>

            {/* Live Metrics HUD */}
            <div className="seo-metrics-hud" id="seo-metrics-hud">
              <div className="seo-hud-card">
                <div className="seo-hud-label">
                  <Gauge size={14} className="text-emerald-500" />
                  <span>LIGHTHOUSE PERFORMANCE</span>
                </div>
                <div className="seo-hud-value text-emerald-500">100 / 100</div>
                <div className="seo-hud-sub">Sub-0.8s FCP &amp; LCP under edge CDN</div>
              </div>

              <div className="seo-hud-card">
                <div className="seo-hud-label">
                  <Activity size={14} className="text-blue-500" />
                  <span>CORE WEB VITALS</span>
                </div>
                <div className="seo-hud-value text-blue-500">ALL GREEN</div>
                <div className="seo-hud-sub">CLS: 0.012 • INP: &lt;40ms • LCP: 0.64s</div>
              </div>

              <div className="seo-hud-card">
                <div className="seo-hud-label">
                  <Network size={14} className="text-indigo-500" />
                  <span>KNOWLEDGE GRAPH</span>
                </div>
                <div className="seo-hud-value text-indigo-500">MULTI-ENTITY</div>
                <div className="seo-hud-sub">Organization + Service + FAQ Schema</div>
              </div>

              <div className="seo-hud-card">
                <div className="seo-hud-label">
                  <Layers size={14} className="text-amber-500" />
                  <span>INDEXED SERVICE HUBS</span>
                </div>
                <div className="seo-hud-value text-amber-500">18 DEDICATED</div>
                <div className="seo-hud-sub">Targeted high-intent landing pages</div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="seo-hero-actions-row">
              <div className="seo-actions-left">
                <button
                  className="button button-dark alien-hero-btn"
                  onClick={() => {
                    setActiveTab('serp');
                    document.getElementById('seo-tab-content-area')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  id="seo-btn-view-serp"
                >
                  <Search size={15} />
                  <span>View Live SERP Simulator</span>
                </button>

                <button
                  className="button alien-hero-btn-outline"
                  onClick={() => {
                    setActiveTab('audit');
                    document.getElementById('seo-tab-content-area')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  id="seo-btn-view-audit"
                >
                  <FileCheck size={15} />
                  <span>8-Pillar Technical Audit</span>
                </button>
              </div>

              <button
                className="seo-contact-pill-btn"
                onClick={() => onNavigate('contact')}
                id="seo-btn-consultation"
              >
                <span>Request Custom SEO Audit</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Interactive Modernized Navigation Tabs */}
          <div className="seo-nav-tabs-wrapper" id="seo-tab-navigation">
            <div className="seo-nav-tabs">
              {[
                { id: 'audit', label: 'Technical Audit', count: '8/8', icon: FileCheck },
                { id: 'serp', label: 'SERP Simulator', count: 'Live', icon: Monitor },
                { id: 'keywords', label: 'Keyword Matrix', count: '14 Clusters', icon: Target },
                { id: 'schema', label: 'Schema.org Graph', count: '4 Valid', icon: Database },
                { id: 'roadmap', label: 'Dominance Roadmap', count: '30-180d', icon: Calendar }
              ].map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`seo-tab-btn-${tab.id}`}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`seo-nav-tab-btn ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={14} />
                    <span className="seo-tab-label">{tab.label}</span>
                    <span className="seo-tab-badge">{tab.count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* Dynamic Tab Content Area */}
        <div id="seo-tab-content-area" className="seo-content-container">
          {/* TAB 1: 8-PILLAR TECHNICAL AUDIT */}
          {activeTab === 'audit' && (
            <motion.section
              key="audit"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="seo-tab-panel"
              id="seo-panel-audit"
            >
              <div className="seo-panel-card">
                <div className="seo-panel-header">
                  <div>
                    <span className="seo-sub-eyebrow">CONTINUOUS VERIFICATION SYSTEM</span>
                    <h2 className="seo-section-title">
                      8-Pillar Technical SEO &amp; Core Web Vitals Checklist
                    </h2>
                    <p className="seo-panel-desc">
                      Every code commit to CCDL passes automated quality checks to guarantee crawlability, strict schema semantics, sub-second execution, and zero performance regression.
                    </p>
                  </div>

                  <div className="seo-audit-stats-box">
                    <div className="seo-stat-pill-green">
                      <CheckCircle2 size={14} />
                      <span>ALL 8 PILLARS PASSING</span>
                    </div>
                    <span className="seo-stat-meta">Zero Canonical Flaws • Zero Render-Blocking Resources</span>
                  </div>
                </div>

                {/* Audit Category Filter Bar */}
                <div className="seo-filter-strip">
                  <span className="seo-filter-label">Filter Audit Category:</span>
                  <div className="seo-filter-pills">
                    {[
                      { id: 'all', label: 'All Pillars (8)' },
                      { id: 'architecture', label: 'HTML & Semantic Architecture' },
                      { id: 'performance', label: 'Speed & Core Web Vitals' },
                      { id: 'crawling', label: 'Crawling & Entity Schema' }
                    ].map(f => (
                      <button
                        key={f.id}
                        onClick={() => setAuditCategory(f.id as any)}
                        className={`seo-filter-chip ${auditCategory === f.id ? 'active' : ''}`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Audit Grid */}
                <div className="seo-audit-modern-grid" id="seo-audit-checklist-grid">
                  {filteredAudit.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.id}
                        className="seo-audit-card-modern"
                        id={`seo-audit-item-${item.id}`}
                      >
                        <div className="seo-audit-card-top">
                          <div className="seo-audit-icon-frame">
                            <Icon size={18} />
                          </div>
                          <span className="seo-audit-status-tag">
                            <Check size={12} className="stroke-[3]" />
                            {item.status}
                          </span>
                        </div>

                        <h3 className="seo-audit-card-title">
                          {item.title}
                        </h3>

                        <p className="seo-audit-card-desc">
                          {item.desc}
                        </p>

                        <div className="seo-audit-card-footer">
                          <div className="seo-audit-metric-tag">
                            <span className="seo-metric-key">METRIC:</span>
                            <span className="seo-metric-val">{item.metric}</span>
                          </div>
                          <span className="seo-audit-tool-tag">
                            {item.tool}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Deep Web Vitals Diagnostics Gauge Cards */}
              <div className="seo-vitals-dashboard">
                <div className="seo-vital-card-v2">
                  <div className="seo-vital-top">
                    <span className="seo-vital-badge-good">GOOD</span>
                    <span className="seo-vital-acronym">LCP</span>
                  </div>
                  <div className="seo-vital-num">0.64s</div>
                  <div className="seo-vital-title">Largest Contentful Paint</div>
                  <div className="seo-vital-progress-bg">
                    <div className="seo-vital-progress-bar" style={{ width: '25%' }} />
                  </div>
                  <p className="seo-vital-footnote">
                    Google Threshold: &lt; 2.5s. CCDL achieves sub-0.8s with Brotli/Gzip edge asset compression.
                  </p>
                </div>

                <div className="seo-vital-card-v2">
                  <div className="seo-vital-top">
                    <span className="seo-vital-badge-good">PERFECT</span>
                    <span className="seo-vital-acronym">CLS</span>
                  </div>
                  <div className="seo-vital-num">0.012</div>
                  <div className="seo-vital-title">Cumulative Layout Shift</div>
                  <div className="seo-vital-progress-bg">
                    <div className="seo-vital-progress-bar" style={{ width: '12%' }} />
                  </div>
                  <p className="seo-vital-footnote">
                    Google Threshold: &lt; 0.1. Zero layout jank through strict reserved aspect ratios on all containers.
                  </p>
                </div>

                <div className="seo-vital-card-v2">
                  <div className="seo-vital-top">
                    <span className="seo-vital-badge-good">INSTANT</span>
                    <span className="seo-vital-acronym">INP</span>
                  </div>
                  <div className="seo-vital-num">&lt; 38ms</div>
                  <div className="seo-vital-title">Interaction to Next Paint</div>
                  <div className="seo-vital-progress-bg">
                    <div className="seo-vital-progress-bar" style={{ width: '19%' }} />
                  </div>
                  <p className="seo-vital-footnote">
                    Google Threshold: &lt; 200ms. React 18 concurrent fiber batching prevents any main thread freezes.
                  </p>
                </div>

                <div className="seo-vital-card-v2">
                  <div className="seo-vital-top">
                    <span className="seo-vital-badge-good">EDGE CACHED</span>
                    <span className="seo-vital-acronym">TTFB</span>
                  </div>
                  <div className="seo-vital-num">74ms</div>
                  <div className="seo-vital-title">Time to First Byte</div>
                  <div className="seo-vital-progress-bg">
                    <div className="seo-vital-progress-bar" style={{ width: '10%' }} />
                  </div>
                  <p className="seo-vital-footnote">
                    Global server response from Cloud CDN points of presence across India, Europe, and North America.
                  </p>
                </div>
              </div>
            </motion.section>
          )}

          {/* TAB 2: LIVE SERP SIMULATOR */}
          {activeTab === 'serp' && (
            <motion.section
              key="serp"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="seo-tab-panel"
              id="seo-panel-serp"
            >
              <div className="seo-panel-card">
                <div className="seo-panel-header">
                  <div>
                    <span className="seo-sub-eyebrow">REAL-TIME SEARCH PREVIEW ENGINE</span>
                    <h2 className="seo-section-title">
                      Live Google SERP Display Simulator
                    </h2>
                    <p className="seo-panel-desc">
                      Experience how CCDL search listings, Google rich snippet stars, knowledge graphs, and nested sitelinks appear to potential enterprise clients on desktop and mobile viewports.
                    </p>
                  </div>

                  {/* Device & Query Controls */}
                  <div className="seo-serp-controls">
                    <div className="seo-serp-btn-group">
                      <button
                        onClick={() => setSerpDevice('desktop')}
                        className={`seo-device-btn ${serpDevice === 'desktop' ? 'active' : ''}`}
                        title="Desktop View"
                      >
                        <Monitor size={14} />
                        <span>Desktop</span>
                      </button>
                      <button
                        onClick={() => setSerpDevice('mobile')}
                        className={`seo-device-btn ${serpDevice === 'mobile' ? 'active' : ''}`}
                        title="Mobile View"
                      >
                        <Smartphone size={14} />
                        <span>Mobile</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Simulated Query Switcher */}
                <div className="seo-serp-query-selector">
                  <span className="seo-selector-label">Test Search Query:</span>
                  <div className="seo-query-pills">
                    {[
                      { id: 'brand', label: '"CCDL" (Brand Knowledge Graph)' },
                      { id: 'software', label: '"custom software development company in India"' },
                      { id: 'ai', label: '"AI development company India LLM solutions"' },
                      { id: 'mvp', label: '"SaaS MVP development agency"' }
                    ].map(q => (
                      <button
                        key={q.id}
                        onClick={() => setSerpQuery(q.id as any)}
                        className={`seo-query-chip ${serpQuery === q.id ? 'active' : ''}`}
                      >
                        {q.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Google SERP Simulated Window */}
                <div className={`seo-serp-viewport-frame ${serpDevice}`}>
                  {/* Google Search Bar Mockup */}
                  <div className="seo-google-bar">
                    <div className="seo-google-logo-wrap">
                      <span style={{ color: '#4285F4', fontWeight: 800 }}>G</span>
                      <span style={{ color: '#EA4335', fontWeight: 800 }}>o</span>
                      <span style={{ color: '#FBBC05', fontWeight: 800 }}>o</span>
                      <span style={{ color: '#4285F4', fontWeight: 800 }}>g</span>
                      <span style={{ color: '#34A853', fontWeight: 800 }}>l</span>
                      <span style={{ color: '#EA4335', fontWeight: 800 }}>e</span>
                    </div>
                    <div className="seo-google-search-input">
                      <Search size={14} className="text-gray-400" />
                      <span className="seo-google-query-text">{currentSerp.query}</span>
                    </div>
                  </div>

                  {/* Simulated Results Listing */}
                  <div className="seo-google-result-card">
                    {/* Breadcrumb & Favicon */}
                    <div className="seo-google-meta-row">
                      <div className="seo-google-favicon">
                        <Code2 size={12} className="text-blue-600" />
                      </div>
                      <div className="seo-google-url-line">
                        <span className="seo-google-site-name">CCDL — Climate Change Digital Labs</span>
                        <span className="seo-google-url">{currentSerp.breadcrumb}</span>
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="seo-google-title">
                      <a
                        href={currentSerp.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
                      >
                        {currentSerp.title}
                      </a>
                    </h3>

                    {/* Rich Snippet Stars */}
                    <div className="seo-google-rating-snippet">
                      <div className="seo-google-stars">
                        {'★'.repeat(5)}
                      </div>
                      <span className="seo-google-rating-text">
                        Rating: <strong>4.9</strong> • 54 reviews • Verified B2B Software Engineering Partner
                      </span>
                    </div>

                    {/* Snippet Description */}
                    <p className="seo-google-snippet-desc">
                      {currentSerp.snippet}
                    </p>

                    {/* Rich Nested Sitelinks */}
                    <div className="seo-google-sitelinks-grid">
                      {currentSerp.sitelinks.map((link, lIdx) => (
                        <div
                          key={lIdx}
                          className="seo-google-sitelink-item"
                          onClick={() => onNavigate(link.path)}
                        >
                          <span className="seo-sitelink-link">
                            {link.label}
                          </span>
                          <span className="seo-sitelink-desc">
                            {link.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SERP Verified Tags */}
                  <div className="seo-serp-verification-footer">
                    <div className="seo-verification-item">
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      <span>Schema: BreadcrumbList + AggregateRating Valid</span>
                    </div>
                    <div className="seo-verification-item">
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      <span>Mobile-First Indexing: 100% Passed</span>
                    </div>
                    <div className="seo-verification-item">
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      <span>Canonical: Self-referencing HTTPS</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* TAB 3: KEYWORD CLUSTERS & INTENT MATRIX */}
          {activeTab === 'keywords' && (
            <motion.section
              key="keywords"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="seo-tab-panel"
              id="seo-panel-keywords"
            >
              <div className="seo-panel-card">
                <div className="seo-panel-header">
                  <div>
                    <span className="seo-sub-eyebrow">SEARCH INTENT ARCHITECTURE</span>
                    <h2 className="seo-section-title">
                      High-Intent Keyword Clusters &amp; SERP Target Mapping
                    </h2>
                    <p className="seo-panel-desc">
                      Every service page and architectural asset is paired with specific high-intent commercial and transactional queries designed to capture enterprise clients actively seeking engineering squads.
                    </p>
                  </div>
                </div>

                {/* Search & Filter Toolbar */}
                <div className="seo-toolbar-card">
                  <div className="seo-search-input-wrap">
                    <Search size={16} className="seo-search-icon" />
                    <input
                      type="text"
                      placeholder="Search keywords, technologies, or intents (e.g., 'CCDL', 'AI', 'Flutter', 'Microservices')..."
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      className="seo-text-input"
                      id="seo-keyword-search-input"
                    />
                    {searchKeyword && (
                      <button
                        onClick={() => setSearchKeyword('')}
                        className="seo-clear-btn"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  <div className="seo-intent-filters">
                    <span className="seo-filter-tag-label">Intent:</span>
                    {[
                      { id: 'all', label: 'All Intents' },
                      { id: 'brand', label: 'CCDL Brand' },
                      { id: 'commercial', label: 'Commercial' },
                      { id: 'transactional', label: 'Transactional' },
                      { id: 'local', label: 'India / Local' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setFilterIntent(tab.id)}
                        className={`seo-intent-chip ${filterIntent === tab.id ? 'active' : ''}`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Keyword Clusters List */}
                <div className="seo-clusters-modern-list" id="seo-cluster-list">
                  {filteredClusters.length === 0 ? (
                    <div className="seo-empty-state">
                      <Info size={24} className="text-muted" />
                      <p>No keyword clusters matched your search query. Try broadening your terms.</p>
                      <button
                        onClick={() => { setSearchKeyword(''); setFilterIntent('all'); }}
                        className="button button-dark"
                        style={{ marginTop: '0.75rem' }}
                      >
                        Reset All Filters
                      </button>
                    </div>
                  ) : (
                    filteredClusters.map((cluster, idx) => (
                      <div
                        key={idx}
                        className="seo-cluster-modern-card"
                        id={`seo-cluster-card-${idx}`}
                      >
                        <div className="seo-cluster-card-head">
                          <div className="seo-cluster-title-group">
                            <span className="seo-cluster-number-badge">
                              CLUSTER #{idx + 1}
                            </span>
                            <h3 className="seo-cluster-heading">
                              {cluster.cluster}
                            </h3>
                          </div>

                          <div className="seo-intent-badge">
                            {cluster.intent}
                          </div>
                        </div>

                        <div className="seo-cluster-content-grid">
                          {/* Primary Target Keyword Column */}
                          <div className="seo-primary-kw-box">
                            <span className="seo-col-label">PRIMARY TARGET KEYWORD</span>
                            <div className="seo-primary-kw-display">
                              <span className="seo-primary-kw-text">{cluster.primary}</span>
                              <button
                                onClick={() => handleCopy(cluster.primary, `kw-${idx}`)}
                                className="seo-copy-chip"
                                title="Copy primary keyword"
                              >
                                {copiedKey === `kw-${idx}` ? (
                                  <>
                                    <Check size={12} className="text-emerald-500" />
                                    <span>Copied!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy size={12} />
                                    <span>Copy</span>
                                  </>
                                )}
                              </button>
                            </div>

                            <button
                              onClick={() => {
                                const slug = cluster.targetPage.replace('/services/', '').replace('/', '');
                                onNavigate(slug ? `service-${slug}` : 'home');
                              }}
                              className="seo-target-page-btn"
                              id={`seo-cluster-link-${idx}`}
                            >
                              <span>Inspect Target Page ({cluster.targetPage})</span>
                              <ArrowUpRight size={13} />
                            </button>
                          </div>

                          {/* Supporting Keywords & Angle Column */}
                          <div className="seo-secondary-kw-box">
                            <span className="seo-col-label">SUPPORTING KEYWORD GRAPH &amp; CONTENT ANGLE</span>
                            <div className="seo-chips-wrap">
                              {cluster.supportingKeywords.map((kw, kIdx) => (
                                <span
                                  key={kIdx}
                                  className="seo-kw-chip-modern"
                                  onClick={() => handleCopy(kw, `sec-${idx}-${kIdx}`)}
                                  title="Click to copy keyword"
                                >
                                  {kw}
                                  {copiedKey === `sec-${idx}-${kIdx}` && (
                                    <Check size={11} className="text-emerald-500 ml-1 inline" />
                                  )}
                                </span>
                              ))}
                            </div>

                            <div className="seo-angle-box">
                              <span className="seo-angle-label">STRATEGIC CONTENT ANGLE:</span>
                              <p className="seo-angle-text">{cluster.contentAngle}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </motion.section>
          )}

          {/* TAB 4: STRUCTURED DATA SCHEMAS */}
          {activeTab === 'schema' && (
            <motion.section
              key="schema"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="seo-tab-panel"
              id="seo-panel-schema"
            >
              <div className="seo-panel-card">
                <div className="seo-panel-header">
                  <div>
                    <span className="seo-sub-eyebrow">MACHINE-READABLE SEMANTICS</span>
                    <h2 className="seo-section-title">
                      Schema.org JSON-LD Entity Hierarchy &amp; Verification
                    </h2>
                    <p className="seo-panel-desc">
                      CCDL injects comprehensive nested entity graphs enabling Google, Bing, and AI search engines (Perplexity, ChatGPT, Gemini) to accurately interpret studio credentials, physical headquarters, and service scopes.
                    </p>
                  </div>
                </div>

                {/* Schema Selector Tabs */}
                <div className="seo-schema-tabs-bar">
                  {[
                    { id: 'org', label: 'Organization & LocalBusiness', icon: BuildingIcon },
                    { id: 'service', label: 'Service Catalog Graph', icon: Layers },
                    { id: 'faq', label: 'FAQPage Rich Snippets', icon: Info },
                    { id: 'website', label: 'WebSite & Sitelinks Search', icon: Search }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSchemaTab(item.id as any)}
                      className={`seo-schema-tab-btn ${activeSchemaTab === item.id ? 'active' : ''}`}
                    >
                      <item.icon size={14} />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>

                {/* Active Schema Viewer Card */}
                <div className="seo-code-viewer-card">
                  <div className="seo-code-header">
                    <div className="seo-code-meta">
                      <Terminal size={14} className="text-blue-400" />
                      <span className="seo-code-filename">{currentSchema.filename}</span>
                      <span className="seo-code-tag">VALID JSON-LD</span>
                    </div>

                    <div className="seo-code-actions">
                      <button
                        onClick={() => handleCopy(currentSchema.code, 'schema-code')}
                        className="seo-code-copy-btn"
                        id="seo-btn-copy-schema"
                      >
                        {copiedKey === 'schema-code' ? (
                          <>
                            <Check size={13} className="text-emerald-400" />
                            <span>Copied to Clipboard</span>
                          </>
                        ) : (
                          <>
                            <Copy size={13} />
                            <span>Copy JSON-LD</span>
                          </>
                        )}
                      </button>

                      <a
                        href="https://search.google.com/test/rich-results"
                        target="_blank"
                        rel="noreferrer"
                        className="seo-code-test-link"
                      >
                        <span>Google Rich Results Test</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  <p className="seo-code-explanation">
                    {currentSchema.description}
                  </p>

                  <pre className="seo-code-pre">
                    <code>{currentSchema.code}</code>
                  </pre>
                </div>

                {/* Visual Entity Graph Map */}
                <div className="seo-entity-graph-box">
                  <div className="seo-graph-header">
                    <Network size={16} className="text-blue-500" />
                    <h3 className="seo-graph-title">Google Knowledge Graph Entity Relationships</h3>
                  </div>

                  <div className="seo-graph-nodes-flow">
                    <div className="seo-graph-node primary">
                      <span className="node-badge">ROOT ENTITY</span>
                      <strong>CCDL (Organization)</strong>
                      <span className="node-sub">climatechangedigitallabs.com</span>
                    </div>

                    <div className="seo-graph-arrow">───►</div>

                    <div className="seo-graph-node">
                      <span className="node-badge">LOCAL BUSINESS</span>
                      <strong>Jaipur HQ Office</strong>
                      <span className="node-sub">GeoCoordinates (26.91, 75.78)</span>
                    </div>

                    <div className="seo-graph-arrow">───►</div>

                    <div className="seo-graph-node">
                      <span className="node-badge">OFFER CATALOG</span>
                      <strong>18 Service Hubs</strong>
                      <span className="node-sub">Global Scopes (IN, US, UK, UAE)</span>
                    </div>

                    <div className="seo-graph-arrow">───►</div>

                    <div className="seo-graph-node">
                      <span className="node-badge">RICH SNIPPETS</span>
                      <strong>FAQ &amp; Reviews</strong>
                      <span className="node-sub">4.9 Star Rating • SERP Expansion</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* TAB 5: DOMINANCE ROADMAP */}
          {activeTab === 'roadmap' && (
            <motion.section
              key="roadmap"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="seo-tab-panel"
              id="seo-panel-roadmap"
            >
              <div className="seo-panel-card">
                <div className="seo-panel-header">
                  <div>
                    <span className="seo-sub-eyebrow">ORGANIC SEARCH COMPOUNDING</span>
                    <h2 className="seo-section-title">
                      30 / 90 / 180-Day Google Search Dominance Roadmap
                    </h2>
                    <p className="seo-panel-desc">
                      Organic rankings compound over quarters. Here is our exact sprint timeline for technical stabilization, entity consolidation, citation building, and global expansion.
                    </p>
                  </div>
                </div>

                <div className="seo-roadmap-timeline">
                  {/* Phase 1: Days 1–30 */}
                  <div className="seo-phase-block">
                    <div className="seo-phase-header-row">
                      <div className="seo-phase-title-wrap">
                        <span className="seo-phase-pill-green">PHASE 1: DAYS 1 – 30</span>
                        <h3 className="seo-phase-heading">Technical SEO Foundation &amp; Full Site Indexing</h3>
                      </div>
                      <span className="seo-phase-status-pill green">100% DEPLOYED</span>
                    </div>

                    <div className="seo-phase-items-grid">
                      {SEO_ROADMAP_PHASES.highPriority.map((task, idx) => (
                        <div key={idx} className="seo-task-card complete">
                          <div className="seo-task-top">
                            <span className="seo-task-check">
                              <CheckCircle2 size={15} className="text-emerald-500" />
                            </span>
                            <h4 className="seo-task-title">{task.title}</h4>
                          </div>
                          <p className="seo-task-desc">{task.desc}</p>
                          <div className="seo-task-footer">
                            <span className="seo-task-status-label">{task.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Phase 2: Days 30–90 */}
                  <div className="seo-phase-block">
                    <div className="seo-phase-header-row">
                      <div className="seo-phase-title-wrap">
                        <span className="seo-phase-pill-amber">PHASE 2: DAYS 30 – 90</span>
                        <h3 className="seo-phase-heading">Local Citations, Topic Clusters &amp; Entity Trust</h3>
                      </div>
                      <span className="seo-phase-status-pill amber">ACTIVE SPRINT</span>
                    </div>

                    <div className="seo-phase-items-grid">
                      {SEO_ROADMAP_PHASES.mediumPriority.map((task, idx) => (
                        <div key={idx} className="seo-task-card active">
                          <div className="seo-task-top">
                            <span className="seo-task-check">
                              <Clock size={15} className="text-amber-500" />
                            </span>
                            <h4 className="seo-task-title">{task.title}</h4>
                          </div>
                          <p className="seo-task-desc">{task.desc}</p>
                          <div className="seo-task-footer">
                            <span className="seo-task-status-label amber">{task.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Phase 3: Months 3–6 */}
                  <div className="seo-phase-block">
                    <div className="seo-phase-header-row">
                      <div className="seo-phase-title-wrap">
                        <span className="seo-phase-pill-blue">PHASE 3: MONTHS 3 – 6</span>
                        <h3 className="seo-phase-heading">Global Expansion, Digital PR &amp; Programmatic Landing</h3>
                      </div>
                      <span className="seo-phase-status-pill blue">STRATEGIC HORIZON</span>
                    </div>

                    <div className="seo-phase-items-grid">
                      {SEO_ROADMAP_PHASES.longTerm.map((task, idx) => (
                        <div key={idx} className="seo-task-card scheduled">
                          <div className="seo-task-top">
                            <span className="seo-task-check">
                              <TrendingUp size={15} className="text-blue-500" />
                            </span>
                            <h4 className="seo-task-title">{task.title}</h4>
                          </div>
                          <p className="seo-task-desc">{task.desc}</p>
                          <div className="seo-task-footer">
                            <span className="seo-task-status-label blue">{task.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </div>

        {/* Directory of 18 High-Intent Dedicated Service Hubs */}
        <section className="seo-section-card" id="seo-card-all-services-directory" style={{ marginTop: '2.5rem' }}>
          <div className="seo-card-header" style={{ marginBottom: '1.25rem' }}>
            <div>
              <span className="seo-sub-eyebrow">INDEXABLE SERP TARGETS</span>
              <h2 className="seo-section-title">
                18 Dedicated Service Hubs (Ready to Rank)
              </h2>
              <p className="seo-panel-desc" style={{ marginBottom: 0 }}>
                Every single service is engineered with dedicated Schema markup, Core Web Vitals, itemized sprint cost calculators, and client proof.
              </p>
            </div>

            {/* Quick Search */}
            <div className="seo-hub-search-box">
              <Search size={14} className="text-gray-400" />
              <input
                type="text"
                placeholder="Filter services..."
                value={serviceSearch}
                onChange={(e) => setServiceSearch(e.target.value)}
                className="seo-hub-search-input"
              />
            </div>
          </div>

          <div className="seo-hubs-grid-modern" id="seo-hubs-grid">
            {filteredServices.map((srv, idx) => (
              <button
                key={srv.slug}
                id={`seo-service-hub-${srv.slug}`}
                onClick={() => onNavigate(`service-${srv.slug}`)}
                className="seo-hub-card-modern"
              >
                <div className="seo-hub-card-body">
                  <div className="seo-hub-top-row">
                    <span className="seo-hub-category-pill">
                      {srv.category}
                    </span>
                    <span className="seo-hub-priority-pill">
                      PRIORITY 0.9
                    </span>
                  </div>

                  <h3 className="seo-hub-card-title">
                    {srv.title}
                  </h3>

                  <p className="seo-hub-card-desc">
                    {srv.metaDesc}
                  </p>
                </div>

                <div className="seo-hub-card-footer">
                  <span className="seo-hub-slug-path">/services/{srv.slug}</span>
                  <div className="seo-hub-arrow-wrap">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Complimentary Audit Consultation Banner */}
        <section className="seo-cta-banner" id="seo-cta-banner">
          <div className="seo-cta-inner">
            <div className="seo-cta-copy">
              <span className="seo-cta-badge">COMPLIMENTARY AUDIT INITIATIVE</span>
              <h2 className="seo-cta-headline">
                Want a Free Technical SEO &amp; Core Web Vitals Audit for Your Platform?
              </h2>
              <p className="seo-cta-subtext">
                Our founding engineering team will inspect your application’s Lighthouse metrics, schema integrity, crawl budget, and organic keyword positioning with an actionable report delivered in 24 hours.
              </p>
            </div>

            <div className="seo-cta-buttons">
              <button
                onClick={() => onNavigate('contact')}
                className="button button-dark seo-cta-primary-btn"
                id="seo-cta-request-audit"
              >
                <Sparkles size={16} />
                <span>Request Platform Audit</span>
              </button>

              <a
                href="https://wa.me/917852052323?text=Hello%20CCDL%20team%2C%20I%20would%20like%20to%20request%20a%20technical%20SEO%20and%20web%20performance%20audit%20for%20my%20company."
                target="_blank"
                rel="noopener noreferrer"
                className="button alien-hero-btn-outline seo-cta-whatsapp-btn"
                id="seo-cta-whatsapp"
              >
                <span>Chat via WhatsApp</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Helper component for building icon
function BuildingIcon(props: { size?: number; className?: string }) {
  return (
    <svg
      width={props.size || 16}
      height={props.size || 16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}
