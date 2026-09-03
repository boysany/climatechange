import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { motion as m, AnimatePresence, useSpring } from 'framer-motion';
import TextReveal from '../components/TextReveal.tsx';
import ScrollReveal from '../components/ScrollReveal.tsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getReducedMotion } from '../lib/animations.ts';

const motion = m as any;

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ServiceItem {
  num: string;
  title: string;
  category: string;
  filterCategory: 'all' | 'design' | 'web-mobile' | 'software' | 'growth';
  tag: string;
  desc: string;
  deliverables: string[];
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    num: '01',
    title: 'UI/UX & Product Design',
    category: 'Product & Design',
    filterCategory: 'design',
    tag: 'Figma Systems • UX Research • Intuitive Flow',
    desc: 'User-centered web and mobile app interfaces crafted with disciplined typographic hierarchy, atomic design tokens, clear user journeys, and tactile Figma prototypes.',
    deliverables: [
      'Figma UI/UX & Interactive Prototyping',
      'Reusable Component Libraries & Design Systems',
      'User Journey Mapping, Wireframes & Information Flow',
    ],
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=85&w=1200',
  },
  {
    num: '02',
    title: 'Website & Web App Development',
    category: 'Web & Frontend',
    filterCategory: 'web-mobile',
    tag: 'React / Next.js • Sub-Second Load • Clean Code',
    desc: 'Ultra-fast, responsive websites and interactive web platforms built with modern React, Next.js, and TypeScript, engineered for instant loading and cross-device performance.',
    deliverables: [
      'Custom React & Next.js Web Platforms',
      'Sub-second Load Speeds & Responsive Layouts',
      'Clean Modular TypeScript Architecture & API Integrations',
    ],
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&q=85&w=1200',
  },
  {
    num: '03',
    title: 'Mobile App Development',
    category: 'Mobile & Native',
    filterCategory: 'web-mobile',
    tag: 'Flutter / React Native • iOS & Android • 60fps',
    desc: 'Cross-platform mobile applications for iOS and Android delivering fluid 60fps animations, intuitive native gestures, real-time push notifications, and offline-ready local storage.',
    deliverables: [
      'Cross-Platform iOS & Android Applications',
      'Smooth Gestures, Camera & Device Hardware Integration',
      'App Store & Google Play Ready Release Pipelines',
    ],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=85&w=1200',
  },
  {
    num: '04',
    title: 'Custom Software & SaaS Solutions',
    category: 'Software & Backend',
    filterCategory: 'software',
    tag: 'Full-Stack • Admin Portals • Scalable Database',
    desc: 'Tailored business software, management portals, internal ERP tools, and SaaS products built to automate company workflows, handle data securely, and scale with your growth.',
    deliverables: [
      'Custom Business Portals & Admin Dashboards',
      'Secure Authentication & Relational Database Architecture',
      'Robust REST & GraphQL API Engineering',
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=85&w=1200',
  },
  {
    num: '05',
    title: 'E-Commerce Development',
    category: 'Commerce & Sales',
    filterCategory: 'growth',
    tag: 'Shopify / Custom • Payment Gateways • High AOV',
    desc: 'High-converting online storefronts and custom e-commerce platforms engineered for fast catalog browsing, secure payments (Razorpay, Stripe, UPI), and frictionless checkout.',
    deliverables: [
      'Shopify & Custom E-Commerce Storefronts',
      'Secure Payment Gateway & Order Tracking Integrations',
      'Frictionless Mobile-First Checkout Experiences',
    ],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=85&w=1200',
  },
  {
    num: '06',
    title: 'Brand Identity & Visual Design',
    category: 'Identity & Creative',
    filterCategory: 'design',
    tag: 'Vector Logotypes • Brand Guidelines • Visual Identity',
    desc: 'Distinctive visual identities, memorable logos, typography pairings, and comprehensive brand manuals that establish strong market credibility and make your business stand out.',
    deliverables: [
      'Vector Logo Marks & Brand Collateral',
      'Typography, Color Palette & Usage Guidelines',
      'High-Resolution Export Assets & Social Presence Kits',
    ],
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=85&w=1200',
  },
  {
    num: '07',
    title: 'SEO & Performance Growth',
    category: 'Growth & Rankings',
    filterCategory: 'growth',
    tag: 'Technical SEO • 95+ Core Web Vitals • Google Indexing',
    desc: 'Search engine optimization, Core Web Vitals audits, technical on-page structure, and schema markup to maximize your organic visibility on Google and attract high-intent visitors.',
    deliverables: [
      'Technical SEO Audits & Keyword Structure',
      'Core Web Vitals & Speed Optimization',
      'Google Search Console Setup & Schema Markup',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=1200',
  },
];

interface ExpertiseProps {
  onNavigate?: (page: string) => void;
}

const serviceRouteMap: Record<string, string> = {
  '01': 'service-ui-ux-design',
  '02': 'service-website-development',
  '03': 'service-flutter-cross-platform',
  '04': 'service-software-development',
  '05': 'service-ecommerce-development',
  '06': 'service-branding',
  '07': 'service-seo-services',
};

const filterTabs = [
  { key: 'all', label: 'All Services (7)' },
  { key: 'design', label: 'Design & UI/UX' },
  { key: 'web-mobile', label: 'Web & Mobile' },
  { key: 'software', label: 'Software & SaaS' },
  { key: 'growth', label: 'E-Commerce & Growth' },
];

export default function Expertise({ onNavigate }: ExpertiseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [active, setActive] = useState(0); // Default highlighted first service
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const filteredServices = selectedCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.filterCategory === selectedCategory);

  // Smooth floating spring coordinates for Allies.design hover image popup
  const mouseX = useSpring(0, { stiffness: 220, damping: 24 });
  const mouseY = useSpring(0, { stiffness: 220, damping: 24 });
  const rotateSpring = useSpring(0, { stiffness: 180, damping: 20 });
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const list = listRef.current;
    if (!list || getReducedMotion()) return;

    const rows = list.querySelectorAll('.service-row');
    const st = ScrollTrigger.create({
      trigger: list,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          rows,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.05, ease: 'power3.out' }
        );
      },
    });

    return () => {
      st.kill();
    };
  }, [selectedCategory]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const deltaX = e.clientX - lastMousePos.current.x;
    lastMousePos.current = { x: e.clientX, y: e.clientY };

    // Floating offset: slightly above and to the right of cursor
    const targetX = Math.min(window.innerWidth - 320, Math.max(20, e.clientX + 30));
    const targetY = Math.min(window.innerHeight - 230, Math.max(80, e.clientY - 100));

    mouseX.set(targetX);
    mouseY.set(targetY);

    // Subtle dynamic tilt based on horizontal cursor speed
    const tilt = Math.max(-8, Math.min(8, deltaX * 0.4));
    rotateSpring.set(tilt);
  };

  const handleRowMouseEnter = (idx: number, e: React.MouseEvent) => {
    setActive(idx);
    setHoveredIdx(idx);
    handleMouseMove(e);
  };

  const currentPopupItem = hoveredIdx !== null ? filteredServices[hoveredIdx] : null;
  const activeService = filteredServices[active] || filteredServices[0] || servicesData[0];

  return (
    <section
      ref={containerRef}
      className="section-pad services"
      id="services"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIdx(null)}
    >
      {/* Allies.design Floating Hover Image Popup */}
      <AnimatePresence>
        {currentPopupItem && (
          <motion.div
            key="floating-preview"
            className="service-floating-preview"
            style={{
              x: mouseX,
              y: mouseY,
              rotate: rotateSpring,
            }}
            initial={{ opacity: 0, scale: 0.82, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 10, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            <div className="service-floating-card">
              <img
                src={currentPopupItem.image}
                alt={currentPopupItem.title}
                className="service-floating-image"
                loading="eager"
              />
              <div className="service-floating-overlay">
                <div className="service-floating-top">
                  <span className="service-floating-num">
                    {currentPopupItem.num} / {currentPopupItem.category}
                  </span>
                  <span className="service-floating-badge">
                    <Sparkles size={10} style={{ display: 'inline', marginRight: 3 }} />
                    Live Capability
                  </span>
                </div>
                <div className="service-floating-bottom">
                  <span className="service-floating-title">{currentPopupItem.title}</span>
                  <span className="service-floating-tag">{currentPopupItem.tag}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="services-header">
        <div className="services-heading-copy">
          <span className="eyebrow services-eyebrow">
            <span className="services-eyebrow-dot" aria-hidden="true" />
            Capabilities & Services <span>/ 02</span>
          </span>
          <h2>
            <TextReveal>
              What we <em>build.</em>
            </TextReveal>
          </h2>
        </div>
        <ScrollReveal delay={120}>
          <p className="services-intro">
            One multidisciplinary engineering studio combining strategy, bespoke UI/UX, full-stack cloud
            architectures, autonomous AI agents, and data-driven revenue growth.
          </p>
        </ScrollReveal>
      </header>

      <nav className="services-filters" aria-label="Filter services">
        <span className="services-filter-label">Explore by discipline</span>
        <div className="services-filter-list">
          {filterTabs.map((tab) => {
            const isSelected = selectedCategory === tab.key;
            return (
              <button
                key={tab.key}
                className={`services-filter-button ${isSelected ? 'is-selected' : ''}`}
                onClick={() => {
                  setSelectedCategory(tab.key);
                  setActive(0);
                }}
                aria-pressed={isSelected}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="services-layout">
        {/* Interactive Services List with Hover Image Popups */}
        <div ref={listRef} className="service-list">
          {filteredServices.map((item, i) => {
            const isRowActive = active === i;

            return (
              <div
                key={item.num}
                className={`service-row ${isRowActive ? 'is-active' : ''}`}
                onMouseEnter={(e) => handleRowMouseEnter(i, e)}
                onFocus={() => {
                  setActive(i);
                  setHoveredIdx(i);
                }}
                onClick={() => {
                  setActive(i);
                  const targetPage = serviceRouteMap[item.num] || 'services';
                  onNavigate?.(targetPage);
                }}
                role="button"
                tabIndex={0}
                style={{ cursor: 'pointer' }}
                aria-label={`View details for ${item.title}`}
              >
                <span className="service-number">{item.num}</span>
                <span className="service-name">
                  {item.title}
                </span>
                <span className="service-tag-pill">{item.tag.split('•')[0].trim()}</span>
                <ArrowUpRight size={20} className="service-row-arrow" />
              </div>
            );
          })}
        </div>

        {/* Side Sticky Detail Card */}
        <div className="service-detail">
          <div
            className="service-detail-image-box"
            onClick={() => onNavigate?.(serviceRouteMap[activeService.num] || 'services')}
            style={{ cursor: 'pointer' }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService.num}
                src={activeService.image}
                alt={activeService.title}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </AnimatePresence>
            <span className="service-detail-image-badge">{activeService.category}</span>
          </div>

          <div className="service-detail-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span className="detail-mark">{activeService.num}</span>
              <span className="eyebrow" style={{ color: 'var(--cyan)' }}>{activeService.tag}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.num}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <h3>{activeService.title}</h3>
                <p>{activeService.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <span className="service-deliverables-title">Key Capabilities & Deliverables</span>
            <ul className="service-deliverables-list">
              {activeService.deliverables.map((deliv) => (
                <li key={deliv} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="detail-line" style={{ marginBottom: '1.25rem' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate?.(serviceRouteMap[activeService.num] || 'services')}
                className="text-link"
                style={{ fontSize: '0.75rem', color: 'var(--cyan)', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                View Deep Dive Page <ArrowUpRight size={14} />
              </button>
              <button
                onClick={() => onNavigate?.('contact')}
                className="text-link"
                style={{ fontSize: '0.75rem', color: 'var(--blue)', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                Inquire Service <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
