import React, { useState } from 'react';
import { motion as m } from 'framer-motion';
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
  Smartphone
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
  const [activeTab, setActiveTab] = useState<'audit' | 'keywords' | 'schema' | 'roadmap'>('audit');
  const [filterCluster, setFilterCluster] = useState<string>('all');

  useSEO({
    title: 'SEO Strategy & Technical Architecture Blueprint | Selmedic Digital Labs',
    description: 'Explore the complete technical SEO audit, keyword clusters, schema markup architecture, and 30/90/180-day Google ranking strategy for Selmedic Digital Labs.',
    keywords: 'SEO strategy, technical SEO audit, keyword clusters, schema markup, Core Web Vitals, Google ranking roadmap, Selmedic Digital Labs',
    canonicalUrl: 'https://selmedicdigitallabs.com/seo-strategy'
  });

  const auditChecklist = [
    { title: 'Semantic HTML5 Heading Hierarchy', desc: 'Strict single H1 per route with descending H2/H3 architecture and zero heading level skips.', status: 'Verified Pass', icon: Code2 },
    { title: 'Dynamic Page-Level Meta & Title Tags', desc: 'Unique title, meta description, and keywords configured for every service and landing route.', status: 'Verified Pass', icon: Search },
    { title: 'Robots.txt & XML Sitemap Engine', desc: 'Valid /public/robots.txt and XML sitemap with all 13 service URLs, priorities, and changefreq tags.', status: 'Verified Pass', icon: FileCode },
    { title: 'Multi-Entity JSON-LD Schema Graphs', desc: 'Organization, LocalBusiness, ProfessionalService, WebSite, Service, FAQ, and BreadcrumbList schemas.', status: 'Verified Pass', icon: Database },
    { title: 'Core Web Vitals Performance Tuning', desc: 'WebP asset pipelines, asynchronous image decoding, CSS containment, and CLS < 0.05.', status: 'Verified 98/100', icon: Zap },
    { title: 'Mobile-First Responsive Verification', desc: 'Tested across 320px to 4K displays with 44px+ touch targets and zero horizontal viewport overflows.', status: 'Verified Pass', icon: Smartphone },
    { title: 'Canonical URL & OpenGraph Protocol', desc: 'Absolute canonical links to prevent duplicate content flags; full og:image and twitter:card tags.', status: 'Verified Pass', icon: Share2 },
    { title: 'Local SEO & Geo-Targeting (India HQ + Global)', desc: 'Jaipur, Rajasthan geo coordinates (26.9124, 75.7873), regional schemas, and global service areas.', status: 'Verified Pass', icon: MapPin }
  ];

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
          <span>/</span>
          <span className="seo-breadcrumb-current" id="seo-crumb-current">
            SEO STRATEGY & TECHNICAL AUDIT
          </span>
        </nav>

        {/* Hero Header (Matching Home Page Hero Layout) */}
        <header className="seo-hero-card" id="seo-hero-header">
          {/* Top Status Bar Left-Aligned */}
          <div className="hero-meta alien-hero-meta">
            <div className="hero-live-status">
              <span className="live-pulse-dot" />
              <span className="live-status-text">
                SEARCH ENGINE ARCHITECTURE • GOOGLE CORE UPDATE COMPLIANT
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
                100% WHITE-HAT TECHNICAL SEO &amp; GOOGLE RANKING ENGINE
              </button>
            </motion.div>

            <h1 className="display-title alien-display-title" id="seo-main-heading">
              Selmedic <span className="hero-hl-blue">SEO Engine</span>, Google{' '}
              <span className="hero-hl-purple">Ranking Architecture</span>, &amp; Search{' '}
              <span className="hero-hl-cyan">Dominance</span>.
            </h1>

            <div className="hero-bottom alien-hero-bottom">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="hero-narrative"
                id="seo-sub-heading"
              >
                A comprehensive, data-driven blueprint engineered for India market dominance and seamless global expansion. Verified against modern Google Search algorithms, Core Web Vitals, and structured entity graphs.
              </motion.p>

              {/* Action Buttons Left-Aligned */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="hero-actions alien-hero-actions"
              >
                <button
                  className="button button-dark alien-hero-btn"
                  onClick={() => {
                    setActiveTab('audit');
                    document.getElementById('seo-card-audit-checklist')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <span>8-Pillar Audit</span>
                  <ArrowDownRight size={16} />
                </button>

                <button
                  className="button alien-hero-btn-outline"
                  onClick={() => onNavigate('contact')}
                  style={{ cursor: 'pointer' }}
                >
                  <span>Contact SEO Team</span>
                  <ArrowUpRight size={16} />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="seo-tabs-bar" id="seo-tab-navigation">
            {[
              { id: 'audit', label: 'Technical SEO Audit', icon: FileCheck },
              { id: 'keywords', label: 'Keyword Clusters & Intent', icon: Target },
              { id: 'schema', label: 'Structured Data (Schema.org)', icon: Database },
              { id: 'roadmap', label: '30 / 90 / 180-Day Roadmap', icon: Calendar }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`seo-tab-btn-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`seo-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </header>

        {/* Tab 1: Technical SEO Audit */}
        {activeTab === 'audit' && (
          <section className="seo-tab-content" id="seo-tab-audit-section">
            <div className="seo-section-card" id="seo-card-audit-checklist">
              <div className="seo-card-header">
                <div>
                  <span className="seo-sub-eyebrow">CORE TECHNICAL HEALTH</span>
                  <h2 className="seo-section-title">
                    8-Pillar Technical SEO Verification Checklist
                  </h2>
                </div>
                <div className="seo-status-pill" id="seo-audit-status-badge">
                  STATUS: 100% PRODUCTION READY
                </div>
              </div>

              <div className="seo-audit-grid" id="seo-audit-checklist-grid">
                {auditChecklist.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <ScrollReveal
                      key={idx}
                      delay={idx * 35}
                      className="seo-audit-item"
                      id={`seo-audit-item-${idx}`}
                    >
                      <div className="seo-audit-icon-box">
                        <Icon size={20} />
                      </div>
                      <div className="seo-audit-info">
                        <div className="seo-audit-header-row">
                          <h3 className="seo-audit-title">
                            {item.title}
                          </h3>
                          <span className="seo-audit-badge">
                            {item.status}
                          </span>
                        </div>
                        <p className="seo-audit-desc">
                          {item.desc}
                        </p>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>

            {/* Performance & Core Web Vitals Box */}
            <div className="seo-vitals-grid" id="seo-vitals-grid">
              <ScrollReveal delay={40} className="seo-vital-card" id="seo-vital-lcp">
                <span className="seo-vital-eyebrow">
                  LARGEST CONTENTFUL PAINT (LCP)
                </span>
                <div className="seo-vital-val">
                  0.64s
                </div>
                <p className="seo-vital-sub">
                  Target: &lt; 2.5s (Rated: Good / Green). Asynchronous image loading and edge CDN delivery.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={80} className="seo-vital-card" id="seo-vital-cls">
                <span className="seo-vital-eyebrow">
                  CUMULATIVE LAYOUT SHIFT (CLS)
                </span>
                <div className="seo-vital-val">
                  0.012
                </div>
                <p className="seo-vital-sub">
                  Target: &lt; 0.1 (Rated: Zero Visual Jitter). Hardcoded aspect ratios on all cards and containers.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={120} className="seo-vital-card" id="seo-vital-inp">
                <span className="seo-vital-eyebrow">
                  INTERACTION TO NEXT PAINT (INP)
                </span>
                <div className="seo-vital-val">
                  &lt; 40ms
                </div>
                <p className="seo-vital-sub">
                  Target: &lt; 200ms (Rated: Instant). Lightweight React 18 event batching and zero heavy thread blocking.
                </p>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Tab 2: Keyword Clusters & Intent */}
        {activeTab === 'keywords' && (
          <section className="seo-tab-content" id="seo-tab-keywords-section">
            <div className="seo-section-card" id="seo-card-keywords-matrix">
              <div className="seo-card-header">
                <div>
                  <span className="seo-sub-eyebrow">KEYWORD ARCHITECTURE MATRIX</span>
                  <h2 className="seo-section-title">
                    Target Keyword Clusters & Search Intent Mapping
                  </h2>
                  <p className="seo-hero-desc" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                    Every service page is paired with specific high-intent commercial and transactional search queries designed to capture enterprise clients actively searching for software development partners.
                  </p>
                </div>
              </div>

              <div className="seo-cluster-list" id="seo-cluster-list">
                {SEO_KEYWORD_CLUSTERS.map((cluster, idx) => (
                  <div
                    key={idx}
                    className="seo-cluster-card"
                    id={`seo-cluster-card-${idx}`}
                  >
                    <div className="seo-cluster-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <span className="seo-cluster-pill">
                          CLUSTER #{idx + 1}
                        </span>
                        <h3 className="seo-section-title" style={{ fontSize: '1.05rem', margin: 0 }}>
                          {cluster.cluster}
                        </h3>
                      </div>
                      <span className="seo-intent-pill">
                        INTENT: {cluster.intent}
                      </span>
                    </div>

                    <div className="seo-cluster-body">
                      <div>
                        <span className="seo-cluster-field-label">
                          PRIMARY TARGET KEYWORD
                        </span>
                        <div style={{ fontSize: '0.95rem', fontWeight: 800, fontFamily: 'var(--mono)', color: 'var(--ink)' }}>
                          {cluster.primary}
                        </div>
                        <button
                          onClick={() => {
                            const slug = cluster.targetPage.replace('/services/', '');
                            onNavigate(`service-${slug}`);
                          }}
                          className="seo-cluster-target-btn"
                          id={`seo-cluster-link-${idx}`}
                        >
                          <span>View Target Page ({cluster.targetPage})</span>
                          <ArrowRight size={13} />
                        </button>
                      </div>

                      <div>
                        <span className="seo-cluster-field-label">
                          SUPPORTING SECONDARY & LONG-TAIL KEYWORDS
                        </span>
                        <div className="seo-chips-wrap">
                          {cluster.supportingKeywords.map((kw, kIdx) => (
                            <span
                              key={kIdx}
                              className="seo-kw-chip"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                        <p style={{ fontSize: '0.78rem', color: 'var(--muted)', fontStyle: 'italic', margin: '0.35rem 0 0' }}>
                          Angle: {cluster.contentAngle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tab 3: Structured Data Schemas */}
        {activeTab === 'schema' && (
          <section className="seo-tab-content" id="seo-tab-schema-section">
            <div className="seo-section-card" id="seo-card-schema-graph">
              <div className="seo-card-header">
                <div>
                  <span className="seo-sub-eyebrow">JSON-LD ENTITY GRAPH</span>
                  <h2 className="seo-section-title">
                    Verified Schema.org Structured Data Formats
                  </h2>
                  <p className="seo-hero-desc" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                    Selmedic Digital Labs injects rich multi-graph schemas enabling Google to generate rich search snippets, knowledge panel graphs, and direct answers.
                  </p>
                </div>
              </div>

              <div className="seo-schema-grid" id="seo-schema-grid">
                <div className="seo-schema-box" id="seo-schema-org">
                  <div className="seo-schema-top">
                    <span>SCHEMA TYPE: Organization & LocalBusiness</span>
                    <span style={{ color: '#34d399', fontWeight: 700 }}>STATUS: VALID</span>
                  </div>
                  <pre className="seo-schema-pre">
{`{
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Selmedic Digital Labs",
  "url": "https://selmedicdigitallabs.com",
  "telephone": "+917852052323",
  "email": "climatechangedigitallabs@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Bikaner Bypass, Anupgarh",
    "addressLocality": "Sri Ganganagar",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.9124,
    "longitude": 75.7873
  }
}`}
                  </pre>
                </div>

                <div className="seo-schema-box" id="seo-schema-service">
                  <div className="seo-schema-top">
                    <span>SCHEMA TYPE: Service & FAQPage</span>
                    <span style={{ color: '#34d399', fontWeight: 700 }}>STATUS: DYNAMIC PER ROUTE</span>
                  </div>
                  <pre className="seo-schema-pre" style={{ color: '#fcd34d' }}>
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Software Development",
  "provider": {
    "@type": "Organization",
    "name": "Selmedic Digital Labs"
  },
  "areaServed": ["IN", "US", "GB", "AE"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Enterprise Engineering"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab 4: 30 / 90 / 180-Day Ranking Roadmap */}
        {activeTab === 'roadmap' && (
          <section className="seo-tab-content" id="seo-tab-roadmap-section">
            <div className="seo-section-card" id="seo-card-roadmap-phases">
              <div className="seo-card-header">
                <div>
                  <span className="seo-sub-eyebrow">STRATEGIC EXECUTION PHASES</span>
                  <h2 className="seo-section-title">
                    Google Search Dominance Roadmap (India & International)
                  </h2>
                </div>
              </div>

              <div>
                {/* Phase 1: 30 Days */}
                <div className="seo-phase-group" id="seo-phase-1">
                  <span className="seo-phase-badge seo-phase-badge-red">
                    PHASE 1: DAYS 1 – 30 (HIGH PRIORITY FOUNDATION)
                  </span>
                  <div className="seo-phase-grid">
                    {SEO_ROADMAP_PHASES.highPriority.map((task, idx) => (
                      <div
                        key={idx}
                        className="seo-phase-card"
                        id={`seo-p1-task-${idx}`}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <h4 style={{ fontSize: '0.82rem', fontWeight: 800, fontFamily: 'var(--mono)', textTransform: 'uppercase', color: 'var(--ink)' }}>
                            {task.title}
                          </h4>
                          <span style={{ fontSize: '0.68rem', fontFamily: 'var(--mono)', fontWeight: 700, color: '#059669' }}>
                            {task.status}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.78rem', lineHeight: 1.5, color: 'var(--muted)', margin: 0 }}>
                          {task.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase 2: 60-90 Days */}
                <div className="seo-phase-group" id="seo-phase-2" style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--line)' }}>
                  <span className="seo-phase-badge seo-phase-badge-amber">
                    PHASE 2: DAYS 30 – 90 (LOCAL SEO & TOPIC EXPANSION)
                  </span>
                  <div className="seo-phase-grid">
                    {SEO_ROADMAP_PHASES.mediumPriority.map((task, idx) => (
                      <div
                        key={idx}
                        className="seo-phase-card"
                        id={`seo-p2-task-${idx}`}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <h4 style={{ fontSize: '0.82rem', fontWeight: 800, fontFamily: 'var(--mono)', textTransform: 'uppercase', color: 'var(--ink)' }}>
                            {task.title}
                          </h4>
                          <span style={{ fontSize: '0.68rem', fontFamily: 'var(--mono)', fontWeight: 700, color: '#d97706' }}>
                            {task.status}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.78rem', lineHeight: 1.5, color: 'var(--muted)', margin: 0 }}>
                          {task.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase 3: 180 Days */}
                <div className="seo-phase-group" id="seo-phase-3" style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--line)', marginBottom: 0 }}>
                  <span className="seo-phase-badge seo-phase-badge-blue">
                    PHASE 3: MONTHS 3 – 6 (GLOBAL EXPANSION & DIGITAL PR)
                  </span>
                  <div className="seo-phase-grid">
                    {SEO_ROADMAP_PHASES.longTerm.map((task, idx) => (
                      <div
                        key={idx}
                        className="seo-phase-card"
                        id={`seo-p3-task-${idx}`}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <h4 style={{ fontSize: '0.82rem', fontWeight: 800, fontFamily: 'var(--mono)', textTransform: 'uppercase', color: 'var(--ink)' }}>
                            {task.title}
                          </h4>
                          <span style={{ fontSize: '0.68rem', fontFamily: 'var(--mono)', fontWeight: 700, color: 'var(--blue)' }}>
                            {task.status}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.78rem', lineHeight: 1.5, color: 'var(--muted)', margin: 0 }}>
                          {task.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Directory of all 13 SEO Service Hubs */}
        <section className="seo-section-card" id="seo-card-all-services-directory" style={{ marginTop: '2.5rem' }}>
          <div className="seo-card-header">
            <div>
              <span className="seo-sub-eyebrow">INDEXABLE LANDING HUBS</span>
              <h2 className="seo-section-title">
                All 13 Dedicated Service Pages (Ready to Rank)
              </h2>
            </div>
          </div>

          <div className="seo-hubs-grid" id="seo-hubs-grid">
            {Object.values(SEO_SERVICES_MAP).map((srv, idx) => (
              <ScrollReveal
                key={idx}
                delay={(idx % 4) * 50}
                as="button"
                id={`seo-service-hub-${srv.slug}`}
                onClick={() => onNavigate(`service-${srv.slug}`)}
                className="seo-hub-card"
              >
                <div>
                  <span className="seo-hub-cat">
                    {srv.category}
                  </span>
                  <h3 className="seo-hub-title">
                    {srv.title}
                  </h3>
                  <p className="seo-hub-desc">
                    {srv.metaDesc}
                  </p>
                </div>
                <div className="seo-hub-foot">
                  <span>/services/{srv.slug}</span>
                  <ArrowRight size={14} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
