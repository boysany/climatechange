import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';
const motion = m as any;
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Star,
  CheckCircle2,
  ChevronDown,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Clock,
  Sparkles,
  PhoneCall,
  MessageSquare,
  ChevronRight,
  Target,
  Award,
  Globe,
  Check,
  Share2,
  Cpu,
  Database
} from 'lucide-react';
import { ServiceDetail, SEO_SERVICES_MAP } from '../lib/seoData';
import { useSEO } from '../lib/useSEO';
import ScrollReveal from '../components/ScrollReveal.tsx';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onNavigate: (route: string) => void;
  onOpenConsultation?: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service: inputService,
  onNavigate,
  onOpenConsultation
}) => {
  // Safe fallback if service is somehow undefined
  const service = inputService || SEO_SERVICES_MAP['software-development'];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top when service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service.slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      onNavigate('contact');
    }
  };

  const scrollToBlueprint = () => {
    const el = document.getElementById('sprint-blueprint');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to colorize service headline with home-page highlight tokens
  const renderHighlightedHeadline = (headline: string) => {
    const words = headline.split(' ');
    if (words.length < 4) return headline;

    const firstHl = Math.min(2, Math.floor(words.length * 0.22));
    const secondHl = Math.floor(words.length * 0.52);
    const thirdHl = Math.max(secondHl + 2, words.length - 2);

    return words.map((w, i) => {
      if (i === firstHl || i === firstHl + 1) {
        return <span key={i} className="hero-hl-blue">{w} </span>;
      }
      if (i === secondHl || i === secondHl + 1) {
        return <span key={i} className="hero-hl-purple">{w} </span>;
      }
      if (i >= thirdHl) {
        return <span key={i} className="hero-hl-cyan">{w} </span>;
      }
      return w + ' ';
    });
  };

  // Dynamic SEO Injection for Google Crawlers and Live Users
  useSEO({
    title: service.seoTitle,
    description: service.metaDesc,
    keywords: `${service.primaryKeyword}, ${service.secondaryKeywords.join(', ')}`,
    canonicalUrl: `https://selmedicdigitallabs.com/services/${service.slug}`,
    ogType: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `https://selmedicdigitallabs.com/services/${service.slug}#service`,
          'name': service.title,
          'serviceType': service.shortTitle,
          'provider': {
            '@type': 'Organization',
            'name': 'Selmedic Digital Labs',
            'url': 'https://selmedicdigitallabs.com'
          },
          'description': service.metaDesc,
          'areaServed': [
            { '@type': 'Country', 'name': 'India' },
            { '@type': 'Country', 'name': 'United States' },
            { '@type': 'Country', 'name': 'United Kingdom' },
            { '@type': 'Country', 'name': 'United Arab Emirates' }
          ],
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': service.title,
            'itemListElement': service.features.map((f) => ({
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': f.title,
                'description': f.desc
              }
            }))
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `https://selmedicdigitallabs.com/services/${service.slug}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://selmedicdigitallabs.com/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Services',
              'item': 'https://selmedicdigitallabs.com/services'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': service.shortTitle,
              'item': `https://selmedicdigitallabs.com/services/${service.slug}`
            }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': `https://selmedicdigitallabs.com/services/${service.slug}#faq`,
          'mainEntity': service.faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.q,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.a
            }
          }))
        }
      ]
    }
  });

  // Feature icon mapping
  const getDeliverableIcon = (idx: number) => {
    switch (idx % 4) {
      case 0:
        return <Zap size={18} />;
      case 1:
        return <Code2 size={18} />;
      case 2:
        return <Layers size={18} />;
      case 3:
      default:
        return <ShieldCheck size={18} />;
    }
  };

  return (
    <main className="sdp-page-root">
      <div className="sdp-container">
        {/* 1. Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumb" className="sdp-breadcrumb-nav">
          <button onClick={() => onNavigate('home')} className="sdp-breadcrumb-btn">
            HOME
          </button>
          <span className="sdp-breadcrumb-sep">/</span>
          <button onClick={() => onNavigate('services')} className="sdp-breadcrumb-btn">
            SERVICES
          </button>
          <span className="sdp-breadcrumb-sep">/</span>
          <span className="sdp-breadcrumb-current">{service.shortTitle}</span>
        </nav>

        {/* 2. Hero Section Card (Matching Home Page Hero Foundation) */}
        <header className="sdp-hero-card" style={{ textAlign: 'left' }}>
          <div className="sdp-hero-bg-glow" aria-hidden="true" />

          {/* Top Status Bar (Left-Aligned, Matching Home Hero) */}
          <div className="hero-meta alien-hero-meta">
            <div className="hero-live-status">
              <span className="live-pulse-dot" />
              <span className="live-status-text">
                ACTIVE SPRINT SQUAD • GLOBAL CLIENT DELIVERY
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
            {/* Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-badge-row sdp-badge-row"
            >
              <span className="kicker-pill" style={{ cursor: 'default' }}>
                <Sparkles size={13} className="pill-spark" />
                <span>{service.tag}</span>
              </span>

              <span className="sdp-badge-pill sdp-badge-muted">
                <span>{service.category}</span>
              </span>

              <button
                onClick={handleCopyLink}
                className="sdp-badge-pill sdp-badge-muted"
                style={{ cursor: 'pointer', background: 'transparent' }}
                title="Share service page"
              >
                {copiedLink ? <Check size={12} className="text-emerald-500" /> : <Share2 size={12} />}
                <span>{copiedLink ? 'COPIED!' : 'SHARE'}</span>
              </button>
            </motion.div>

            {/* Main Title with Home Page Highlight Colors */}
            <h1 className="display-title alien-display-title sdp-hero-headline" style={{ textAlign: 'left', maxWidth: '1240px' }}>
              {renderHighlightedHeadline(service.heroHeadline)}
            </h1>

            <div className="hero-bottom alien-hero-bottom">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="hero-narrative sdp-hero-subheadline"
                style={{ textAlign: 'left', maxWidth: '840px', margin: '0 0 1.85rem' }}
              >
                {service.heroSubheadline}
              </motion.p>

              {/* Conversion Action Buttons (Matching Home Page Buttons) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="hero-actions alien-hero-actions sdp-hero-actions"
              >
                <button onClick={handleConsultation} className="button button-dark alien-hero-btn" style={{ cursor: 'pointer' }}>
                  <PhoneCall size={16} />
                  <span>Architecture Review</span>
                  <ArrowDownRight size={16} />
                </button>

                <button onClick={scrollToBlueprint} className="button alien-hero-btn-outline" style={{ cursor: 'pointer' }}>
                  <span>Sprint Blueprint</span>
                  <ArrowUpRight size={16} />
                </button>

                <a
                  href={`https://wa.me/917852052323?text=Hello%20Selmedic%20Digital%20Labs%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.shortTitle)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sdp-whatsapp-btn"
                  style={{ textDecoration: 'none' }}
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Direct Desk</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="sdp-metrics-grid">
            {service.keyBenefits.map((benefit, idx) => (
              <ScrollReveal key={idx} delay={idx * 60} className="sdp-metric-card">
                <div className="sdp-metric-stat">{benefit.stat || '99.9%'}</div>
                <div className="sdp-metric-title">{benefit.title}</div>
                <div className="sdp-metric-desc">{benefit.desc}</div>
              </ScrollReveal>
            ))}
          </div>
        </header>

        {/* 3. Deep Architecture & Challenges Solved */}
        <section className="sdp-main-layout">
          {/* Left Column: Scope Overview & Deliverables */}
          <div className="sdp-left-col">
            {/* Overview & Challenges */}
            <div className="sdp-card">
              <span className="sdp-eyebrow">01 // ARCHITECTURAL SPECIFICATION</span>
              <h2 className="sdp-section-title">Engineered for High-Scale Enterprise Production</h2>
              <p className="sdp-lead-p">{service.overview}</p>

              <div className="sdp-sub-heading">
                <Target size={15} className="text-blue-500" />
                <span>Critical Bottlenecks We Eliminate</span>
              </div>

              <div className="sdp-challenges-grid">
                {service.challengesSolved.map((challenge, idx) => (
                  <div key={idx} className="sdp-challenge-item">
                    <CheckCircle2 size={16} className="sdp-challenge-icon" />
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Capabilities / Deliverables */}
            <div className="sdp-card">
              <span className="sdp-eyebrow">02 // PRODUCTION ARTIFACTS</span>
              <h2 className="sdp-section-title">Key Architectural Deliverables</h2>
              <p className="sdp-lead-p" style={{ marginBottom: '1.25rem' }}>
                Every sprint yields battle-tested code, fully documented schemas, and zero-debt system modules.
              </p>

              <div className="sdp-deliverables-grid">
                {service.features.map((feat, idx) => (
                  <ScrollReveal key={idx} delay={idx * 60} className="sdp-deliverable-card">
                    <div className="sdp-deliverable-icon-box">{getDeliverableIcon(idx)}</div>
                    <h3 className="sdp-deliverable-title">{feat.title}</h3>
                    <p className="sdp-deliverable-desc">{feat.desc}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Agency Advantage & Tech Stack (Sticky Sidebar) */}
          <aside className="sdp-sidebar">
            <div className="sdp-card">
              <span className="sdp-eyebrow">03 // THE CCDL ADVANTAGE</span>
              <h2 className="sdp-section-title" style={{ fontSize: '1.45rem' }}>
                Why Global Founders Partner With Us
              </h2>

              <div className="sdp-advantage-list">
                {service.whyChooseUs.map((reason, idx) => (
                  <div key={idx} className="sdp-advantage-item">
                    <div className="sdp-advantage-title">{reason.title}</div>
                    <p className="sdp-advantage-desc">{reason.desc}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--line)' }}>
                <div className="sdp-sub-heading" style={{ marginBottom: '0.65rem' }}>
                  <Code2 size={15} className="text-blue-500" />
                  <span>Production Technology Stack</span>
                </div>
                <div className="sdp-tech-chips">
                  {service.techStack.map((tech, idx) => (
                    <span key={idx} className="sdp-tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Inbound Direct Contact & NDA Guarantee */}
            <div className="sdp-card">
              <div className="sdp-sub-heading" style={{ marginBottom: '0.65rem' }}>
                <ShieldCheck size={18} className="text-emerald-500" />
                <span>100% IP Security &amp; Mutual NDA</span>
              </div>
              <p className="sdp-lead-p" style={{ fontSize: '0.82rem', marginBottom: '1.25rem' }}>
                We execute mutual NDAs before requirements discovery. You retain complete ownership of all repositories, design tokens, CI/CD secrets, and database schemas.
              </p>
              <button
                onClick={handleConsultation}
                className="sdp-primary-btn"
                style={{ width: '100%', boxSizing: 'border-box' }}
              >
                <span>Request Sprint Estimate</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </aside>
        </section>

        {/* 4. 5-Stage Sprint Execution Blueprint */}
        <section id="sprint-blueprint" className="sdp-process-card">
          <div className="sdp-process-header">
            <div>
              <span className="sdp-eyebrow">04 // SPRINT EXECUTION ROADMAP</span>
              <h2 className="sdp-section-title" style={{ margin: 0 }}>
                Our 5-Stage Structured Delivery Process
              </h2>
            </div>
            <span className="sdp-badge-pill sdp-badge-muted">TYPICAL TIMELINE: 4 TO 8 WEEKS</span>
          </div>

          <div className="sdp-process-grid">
            {service.process.map((stage, idx) => (
              <ScrollReveal key={idx} delay={idx * 60} className="sdp-stage-card">
                <div>
                  <div className="sdp-stage-top">
                    <span className="sdp-stage-num">{stage.step}</span>
                    <span className="sdp-stage-duration">{stage.duration}</span>
                  </div>
                  <h3 className="sdp-stage-title">{stage.title}</h3>
                  <p className="sdp-stage-desc">{stage.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 5. Comprehensive FAQs */}
        <section className="sdp-faq-card">
          <span className="sdp-eyebrow">05 // TECHNICAL CLARITY &amp; FAQ</span>
          <h2 className="sdp-section-title">
            Frequently Asked Questions About {service.shortTitle}
          </h2>

          <div className="sdp-faq-list">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`sdp-faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="sdp-faq-trigger"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className="sdp-faq-icon" />
                  </button>

                  {isOpen && (
                    <div className="sdp-faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Interlinked Related Services */}
        {service.relatedServices && service.relatedServices.length > 0 && (
          <section className="sdp-related-card">
            <span className="sdp-eyebrow">06 // CROSS-DISCIPLINARY CAPABILITIES</span>
            <h2 className="sdp-section-title">Complementary Software &amp; Design Services</h2>

            <div className="sdp-related-grid">
              {service.relatedServices.map((relSlug, idx) => {
                const rel = SEO_SERVICES_MAP[relSlug];
                if (!rel) return null;
                return (
                  <ScrollReveal
                    key={idx}
                    delay={idx * 60}
                    onClick={() => onNavigate(`service-${rel.slug}`)}
                    className="sdp-related-item"
                    role="button"
                    tabIndex={0}
                  >
                    <div>
                      <span className="sdp-related-cat">{rel.category}</span>
                      <h3 className="sdp-related-title">{rel.shortTitle}</h3>
                      <p className="sdp-related-desc">{rel.metaDesc}</p>
                    </div>
                    <div className="sdp-related-footer">
                      <span>EXPLORE SERVICE</span>
                      <ChevronRight size={15} />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>
        )}

        {/* 7. Full-Width Conversion Footer Banner */}
        <ScrollReveal as="footer" delay={60} className="sdp-cta-banner">
          <div className="sdp-cta-glow" aria-hidden="true" />
          <div className="sdp-cta-content">
            <span className="sdp-cta-eyebrow">READY TO DEPLOY YOUR SPRINT?</span>
            <h2 className="sdp-cta-title">
              Ready to engineer high-impact {service.shortTitle.toLowerCase()} with Selmedic Digital Labs?
            </h2>
            <p className="sdp-cta-desc">
              Our founding engineering and UI/UX design collective is ready to scope your requirements and provide an itemized sprint roadmap within 4 hours.
            </p>
            <div className="sdp-cta-actions">
              <button onClick={handleConsultation} className="sdp-cta-primary-btn">
                <span>Schedule Architecture Review</span>
                <ArrowUpRight size={15} />
              </button>
              <a href="tel:+917852052323" className="sdp-cta-phone-btn">
                <PhoneCall size={15} className="text-cyan-400" />
                <span>+91 78520 52323</span>
              </a>
              <a
                href={`https://wa.me/917852052323?text=Hello%20CCDL%2C%20I%20would%20like%20to%20discuss%20${encodeURIComponent(service.shortTitle)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="sdp-whatsapp-btn"
              >
                <MessageSquare size={15} />
                <span>WhatsApp Architect</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
};
