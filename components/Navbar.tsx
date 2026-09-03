import React, { useEffect, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Mail,
  X,
  Globe,
  Sparkles,
  Shield,
  FileText,
  HelpCircle,
  Briefcase,
  Layers,
  Lock,
  Cookie,
  ExternalLink,
  Code2,
  Palette,
  Clock,
  Compass,
} from 'lucide-react';
import CcdlLogo from './CcdlLogo.tsx';

const motion = m as any;

interface NavbarProps {
  isDark?: boolean;
  currentRoute?: string;
  toggleTheme?: () => void;
  onNavigate?: (page: string, scroll?: boolean) => void;
}

export default function Navbar({ currentRoute = 'home', onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState<'main' | 'solutions' | 'legal'>('main');
  const [hoveredItem, setHoveredItem] = useState<{
    title: string;
    category: string;
    desc: string;
    preview: string;
  }>({
    title: 'Flagship Portfolio',
    category: 'CASE STUDIES • 2026',
    desc: 'Selected enterprise systems, SaaS platforms, and digital experiences.',
    preview: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop',
  });

  const [currentTime, setCurrentTime] = useState('');

  // Live world time for studio header
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (page: string) => {
    setOpen(false);
    onNavigate?.(page);
  };

  const cleanCurrent = currentRoute.replace(/^\//, '').replace(/\/$/, '') || 'home';

  const primaryMenuItems = [
    {
      num: '01',
      label: 'WORK',
      page: 'portfolio',
      category: 'CASE STUDIES',
      desc: 'Selected enterprise systems & award-winning products',
      preview: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=900&auto=format&fit=crop',
    },
    {
      num: '02',
      label: 'PROCESS',
      page: 'process',
      category: 'METHODOLOGY',
      desc: 'Our 4-stage sprint & architecture methodology',
      preview: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=900&auto=format&fit=crop',
    },
    {
      num: '03',
      label: 'SERVICES',
      page: 'services',
      category: 'CAPABILITIES',
      desc: 'Full-cycle design, cloud engineering & AI systems',
      preview: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop',
    },
    {
      num: '04',
      label: 'SEO STRATEGY',
      page: 'seo-strategy',
      category: 'GROWTH BLUEPRINT',
      desc: 'Technical SEO audit, keyword clusters & ranking roadmap',
      preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
    },
    {
      num: '05',
      label: 'ABOUT',
      page: 'about',
      category: 'STUDIO STORY',
      desc: 'Founding team, collective mindset & studio origins',
      preview: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop',
    },
    {
      num: '05',
      label: 'BLOG',
      page: 'blog',
      category: 'DISPATCHES',
      desc: 'Architectural thinking & deep tech analysis',
      preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=900&auto=format&fit=crop',
    },
    {
      num: '06',
      label: 'COMMUNITY',
      page: 'community',
      category: 'DEVELOPER HUB',
      desc: 'Open source tooling, developer hub & collective sync',
      preview: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop',
    },
    {
      num: '07',
      label: 'INSIGHTS',
      page: 'insights',
      category: 'RESEARCH',
      desc: 'Technical essays, architecture deep-dives & blueprints',
      preview: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop',
    },
    {
      num: '08',
      label: 'CAREERS',
      page: 'careers',
      category: 'JOIN STUDIO',
      desc: 'Open roles in design engineering & cloud systems',
      preview: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop',
    },
    {
      num: '09',
      label: 'CONTACT',
      page: 'contact',
      category: 'FOUNDER SYNC',
      desc: 'Direct channels, project intake & sprint bookings',
      preview: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop',
    },
  ];

  const solutionItems = [
    {
      label: 'FOR STARTUPS',
      tag: '0-to-1 MVP',
      page: 'startups',
      desc: 'Rapid venture builds & investor-ready cloud architectures',
      preview: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=900&auto=format&fit=crop',
    },
    {
      label: 'FOR ENTERPRISE',
      tag: 'Scale & SLAs',
      page: 'enterprise',
      desc: 'Multi-tenant systems, SOC2 compliance & platform migrations',
      preview: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop',
    },
    {
      label: 'FULL-STACK SOFTWARE',
      tag: 'React / Node / Cloud',
      page: 'software',
      desc: 'Ultra-fast web platforms, microservices & real-time APIs',
      preview: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop',
    },
  ];

  const designItems = [
    {
      label: 'PRODUCT DESIGN (UI/UX)',
      tag: 'Figma to Code',
      page: 'product-design',
      desc: 'Kinetic design systems, tactile prototypes & interactions',
      preview: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=900&auto=format&fit=crop',
    },
    {
      label: 'DESIGN SYSTEMS & SCALE',
      tag: 'Token Systems',
      page: 'design-systems',
      desc: 'Design token architectures, React component kits & docs',
      preview: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=900&auto=format&fit=crop',
    },
  ];

  const legalItems = [
    {
      label: 'Privacy Policy',
      page: 'privacy',
      icon: Lock,
      desc: 'GDPR & DPDP 2023 compliance standard',
    },
    {
      label: 'Terms of Service',
      page: 'terms',
      icon: FileText,
      desc: '100% IP ownership & milestone terms',
    },
    {
      label: 'Security & Compliance',
      page: 'security',
      icon: Shield,
      desc: 'SOC2 Type II, TLS 1.3 & AES-256 standards',
    },
    {
      label: 'Cookie Policy',
      page: 'cookies',
      icon: Cookie,
      desc: 'Zero 3rd-party ad trackers & preference controls',
    },
    {
      label: 'Frequently Asked Questions',
      page: 'faqs',
      icon: HelpCircle,
      desc: 'Sprint pricing, timelines & technical FAQ',
    },
    {
      label: 'Open Careers',
      page: 'careers',
      icon: Briefcase,
      desc: 'Remote roles in frontend, backend & design',
    },
  ];

  const quickServices = [
    { label: 'Software Dev', page: 'service-software-development' },
    { label: 'Website Dev', page: 'service-website-development' },
    { label: 'Mobile Apps', page: 'service-mobile-app-development' },
    { label: 'UI/UX Design', page: 'service-ui-ux-design' },
    { label: 'SEO & Growth', page: 'seo-strategy' },
    { label: 'Book Sprint', page: 'book-call' },
  ];

  return (
    <>
      <header className={`alien-nav-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="alien-nav-container">
          {/* CCDL Agency Precision Geometric Brandmark & Link */}
          <a
            className="alien-logo"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('home');
            }}
            aria-label="CCDL Digital Labs Home"
          >
            <CcdlLogo height={28} />
          </a>

          {/* Desktop & Mobile Right Action Bar */}
          <div className="alien-nav-right">
            {/* Book A Call Outline Pill */}
            <button
              onClick={() => handleNav('book-call')}
              className="alien-btn-pill alien-btn-outline nav-cta-book"
              style={{ cursor: 'pointer' }}
            >
              <span>Book A Call</span>
              <ArrowUpRight size={15} className="alien-btn-arrow" />
            </button>

            {/* Contact Solid Dark Pill (Desktop) */}
            <button
              onClick={() => handleNav('contact')}
              className="alien-btn-pill alien-btn-solid nav-cta-contact"
              style={{ cursor: 'pointer' }}
            >
              <span>Contact</span>
              <ArrowUpRight size={15} className="alien-btn-arrow" />
            </button>

            {/* Modern Circular Hamburger Menu Trigger */}
            <button
              onClick={() => setOpen(true)}
              className={`alien-menu-circle-btn ${open ? 'is-active' : ''}`}
              aria-label="Open navigation menu"
              title="Open Navigation Menu"
            >
              <div className="menu-btn-bars-wrapper">
                <span className="alien-menu-bar top-bar" />
                <span className="alien-menu-bar bottom-bar" />
              </div>
              <span className="menu-hover-tooltip">MENU</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Enterprise Mega Menu Portal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="alien-mega-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ambient Background Glowing Blobs & Grid Lines */}
            <div className="alien-ambient-blob blob-purple" />
            <div className="alien-ambient-blob blob-cyan" />
            <div className="alien-ambient-blob blob-yellow" />
            <div className="menu-portal-grid-lines" />

            <div className="alien-mega-inner">
              {/* Top Navigation Bar inside Menu */}
              <div className="alien-mega-topbar">
                <div className="alien-mega-top-left">
                  <div
                    onClick={() => handleNav('home')}
                    className="menu-topbar-brand"
                    style={{ cursor: 'pointer' }}
                  >
                    <CcdlLogo height={22} showLabel={false} />
                  </div>

                  <div className="alien-menu-status-pill">
                    <span className="menu-status-dot" />
                    <span>ACCEPTING Q3/Q4 SPRINTS</span>
                  </div>

                  {currentTime && (
                    <div className="alien-menu-time-pill desktop-only-pill">
                      <Clock size={12} className="text-blue-500" />
                      <span>{currentTime}</span>
                    </div>
                  )}
                </div>

                <div className="alien-mega-top-right">
                  <div className="alien-clutch-pill desktop-clutch-pill">
                    <span className="clutch-brand">CLUTCH</span>
                    <span className="clutch-score">4.9/5.0</span>
                    <span className="clutch-star">★</span>
                  </div>

                  {/* Close button with ESC indicator */}
                  <button
                    onClick={() => setOpen(false)}
                    className="alien-close-circle-btn"
                    aria-label="Close navigation menu (ESC)"
                    title="Close (ESC)"
                  >
                    <X size={20} strokeWidth={2.4} />
                    <span className="esc-key-badge">ESC</span>
                  </button>
                </div>
              </div>

              {/* Mobile-Only Segment Navigation Switcher Tabs */}
              <div className="mobile-menu-segment-tabs">
                <button
                  className={`mobile-tab-btn ${activeMobileTab === 'main' ? 'is-active' : ''}`}
                  onClick={() => setActiveMobileTab('main')}
                >
                  <span>Studio Index</span>
                </button>
                <button
                  className={`mobile-tab-btn ${activeMobileTab === 'solutions' ? 'is-active' : ''}`}
                  onClick={() => setActiveMobileTab('solutions')}
                >
                  <span>Domains</span>
                </button>
                <button
                  className={`mobile-tab-btn ${activeMobileTab === 'legal' ? 'is-active' : ''}`}
                  onClick={() => setActiveMobileTab('legal')}
                >
                  <span>Direct Reach</span>
                </button>
              </div>

              {/* Mega Menu Grid Content (Desktop View & Responsive Layout) */}
              <div className="alien-mega-content-grid">
                {/* Column 1: Primary Navigation List */}
                <div
                  className={`alien-mega-col primary-col ${
                    activeMobileTab === 'main' ? 'mobile-show' : 'mobile-hide'
                  }`}
                >
                  <div className="alien-col-label">
                    <span className="bullet-dot" />
                    <span>01 // STUDIO INDEX</span>
                  </div>

                  <nav className="alien-menu-nav-list" aria-label="Main Studio Navigation">
                    {primaryMenuItems.map((item, idx) => {
                      const isCurrent = cleanCurrent === item.page;
                      return (
                        <motion.a
                          key={item.label}
                          href={`/${item.page}`}
                          onMouseEnter={() =>
                            setHoveredItem({
                              title: item.label,
                              category: item.category,
                              desc: item.desc,
                              preview: item.preview,
                            })
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            handleNav(item.page);
                          }}
                          className={`alien-mega-link ${isCurrent ? 'is-current-route' : ''}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.02 + idx * 0.025, duration: 0.28 }}
                        >
                          <div className="menu-link-lead">
                            <span className="menu-num">{item.num}</span>
                            {isCurrent && <span className="current-route-badge">CURRENT</span>}
                          </div>

                          <div className="menu-text-wrap">
                            <span className="menu-text">{item.label}</span>
                            <span className="menu-sub-desc">{item.desc}</span>
                          </div>

                          <div className="link-arrow-circle">
                            <ArrowUpRight size={16} className="link-arrow" />
                          </div>
                        </motion.a>
                      );
                    })}
                  </nav>
                </div>

                {/* Column 2: Digital & Tech Solutions & Design Services */}
                <div
                  className={`alien-mega-col secondary-col ${
                    activeMobileTab === 'solutions' ? 'mobile-show' : 'mobile-hide'
                  }`}
                >
                  {/* Digital Solutions Group */}
                  <div className="alien-sub-group">
                    <div className="alien-col-label">
                      <Code2 size={13} className="text-blue-500" />
                      <span>02 // DOMAINS & PLATFORMS</span>
                    </div>

                    <div className="alien-menu-nav-list">
                      {solutionItems.map((item, idx) => {
                        const isCurrent = cleanCurrent === item.page;
                        return (
                          <motion.a
                            key={item.label}
                            href={`/${item.page}`}
                            onMouseEnter={() =>
                              setHoveredItem({
                                title: item.label,
                                category: `DOMAIN // ${item.tag}`,
                                desc: item.desc,
                                preview: item.preview,
                              })
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              handleNav(item.page);
                            }}
                            className={`alien-mega-link secondary-link ${
                              isCurrent ? 'is-current-route' : ''
                            }`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08 + idx * 0.03, duration: 0.28 }}
                          >
                            <div className="menu-text-wrap">
                              <div className="secondary-title-row">
                                <span className="secondary-title">{item.label}</span>
                                <span className="secondary-tag-badge">{item.tag}</span>
                              </div>
                              <span className="menu-sub-desc">{item.desc}</span>
                            </div>
                            <ArrowUpRight size={15} className="link-arrow" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Design Services Group */}
                  <div className="alien-sub-group menu-group-spacing">
                    <div className="alien-col-label">
                      <Palette size={13} className="text-purple-500" />
                      <span>03 // DESIGN & INTERFACES</span>
                    </div>

                    <div className="alien-menu-nav-list">
                      {designItems.map((item, idx) => {
                        const isCurrent = cleanCurrent === item.page;
                        return (
                          <motion.a
                            key={item.label}
                            href={`/${item.page}`}
                            onMouseEnter={() =>
                              setHoveredItem({
                                title: item.label,
                                category: `DESIGN // ${item.tag}`,
                                desc: item.desc,
                                preview: item.preview,
                              })
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              handleNav(item.page);
                            }}
                            className={`alien-mega-link secondary-link ${
                              isCurrent ? 'is-current-route' : ''
                            }`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 + idx * 0.03, duration: 0.28 }}
                          >
                            <div className="menu-text-wrap">
                              <div className="secondary-title-row">
                                <span className="secondary-title">{item.label}</span>
                                <span className="secondary-tag-badge">{item.tag}</span>
                              </div>
                              <span className="menu-sub-desc">{item.desc}</span>
                            </div>
                            <ArrowUpRight size={15} className="link-arrow" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Column 3: Interactive Media Showcase & Direct Booking Dock (Desktop) */}
                <div
                  className={`alien-mega-col preview-col ${
                    activeMobileTab === 'legal' ? 'mobile-show' : ''
                  }`}
                >
                  <div className="preview-col-wrapper">
                    {/* Live Preview Display Card */}
                    <motion.div
                      className="alien-preview-card"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1, duration: 0.35 }}
                    >
                      <img
                        src={hoveredItem.preview}
                        alt={hoveredItem.title}
                        className="alien-preview-img"
                      />
                      <div className="alien-preview-overlay">
                        <div className="preview-top-badge">
                          <span className="preview-pulse-dot" />
                          <span className="alien-preview-tag">{hoveredItem.category}</span>
                        </div>
                        <h4 className="preview-headline">{hoveredItem.title}</h4>
                        <p className="preview-desc-text">{hoveredItem.desc}</p>
                      </div>
                    </motion.div>

                    {/* Direct Contact & Founder Booking Box inside Menu */}
                    <div className="menu-direct-intake-card">
                      <div className="intake-header">
                        <span className="intake-label">INITIATE SPRINT //</span>
                        <span className="intake-sub">Direct Line</span>
                      </div>

                      <div className="intake-actions-grid">
                        <a
                          href="https://wa.me/917852052323"
                          target="_blank"
                          rel="noreferrer"
                          className="intake-action-btn intake-wa"
                          title="WhatsApp Direct"
                        >
                          <MessageCircle size={14} />
                          <span>WhatsApp (Line 1)</span>
                        </a>

                        <a
                          href="https://wa.me/918005873764"
                          target="_blank"
                          rel="noreferrer"
                          className="intake-action-btn intake-wa"
                          title="WhatsApp Direct"
                        >
                          <MessageCircle size={14} />
                          <span>WhatsApp (Line 2)</span>
                        </a>

                        <a
                          href="tel:+917852052323"
                          className="intake-action-btn intake-call"
                          title="Call Line 1"
                        >
                          <Phone size={14} />
                          <span>+91 78520 52323</span>
                        </a>

                        <a
                          href="tel:+918005873764"
                          className="intake-action-btn intake-call"
                          title="Call Line 2"
                        >
                          <Phone size={14} />
                          <span>+91 80058 73764</span>
                        </a>
                      </div>

                      <div className="intake-bottom-row">
                        <a href="mailto:climatechangedigitallabs@gmail.com" className="email-link">
                          <Mail size={13} />
                          <span>climatechangedigitallabs@gmail.com</span>
                        </a>
                        <button
                          onClick={() => handleNav('contact')}
                          className="intake-form-btn"
                        >
                          <span>Intake Form</span>
                          <ArrowUpRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile-Only Quick Focus Capabilities Pills */}
              <div className="alien-mobile-services-section">
                <div className="alien-col-label">
                  <Sparkles size={12} className="text-blue-500" />
                  <span>QUICK SHORTCUTS</span>
                </div>
                <div className="mobile-services-pills-wrap">
                  {quickServices.map((srv) => (
                    <button
                      key={srv.label}
                      onClick={() => handleNav(srv.page)}
                      className="mobile-service-chip"
                      style={{ cursor: 'pointer' }}
                    >
                      {srv.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Menu Bottom Meta Strip */}
              <div className="alien-menu-bottom-footer">
                <div className="menu-meta-location">
                  <Globe size={13} />
                  <span>JAIPUR HQ • BANGALORE HUB • GLOBAL CLIENTS</span>
                </div>

                <div className="menu-meta-system-badge desktop-only-pill">
                  <Compass size={13} />
                  <span>CCDL LABS // HIGH PERFORMANCE ENGINE</span>
                </div>

                <div className="menu-meta-socials">
                  <a
                    href="https://dribbble.com/climate-change-digital-labs"
                    target="_blank"
                    rel="noreferrer"
                    className="menu-social-link"
                  >
                    Dribbble
                  </a>
                  <a
                    href="https://www.behance.net/climatedigital1"
                    target="_blank"
                    rel="noreferrer"
                    className="menu-social-link"
                  >
                    Behance
                  </a>
                  <a
                    href="https://www.instagram.com/climate_change_digital_labs/"
                    target="_blank"
                    rel="noreferrer"
                    className="menu-social-link"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/in/climate-change-digital-labs-3796b1431/"
                    target="_blank"
                    rel="noreferrer"
                    className="menu-social-link"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/DD_Digitallabs"
                    target="_blank"
                    rel="noreferrer"
                    className="menu-social-link"
                  >
                    Twitter / X
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
