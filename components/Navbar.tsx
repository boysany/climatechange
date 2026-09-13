import React, { useEffect, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  X,
  Clock,
  Sparkles,
} from 'lucide-react';
import CcdlLogo from './CcdlLogo.tsx';

const motion = m as any;

const menuShowcaseImages = [
  { src: '/images/projects/hirepro.jpg', alt: 'HirePro portfolio interface' },
  { src: '/images/projects/aicafe.jpg', alt: 'AI Cafe portfolio interface' },
  { src: '/images/projects/ccexchange.jpg', alt: 'CC Exchange portfolio interface' },
  { src: '/images/projects/aitranslate.jpg', alt: 'AI Translate portfolio interface' },
];

interface NavbarProps {
  isDark?: boolean;
  currentRoute?: string;
  toggleTheme?: () => void;
  onNavigate?: (page: string, scroll?: boolean) => void;
}

export default function Navbar({ currentRoute = 'home', onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [showcaseImageIndex, setShowcaseImageIndex] = useState(0);

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
    if (!open) return;
    const interval = setInterval(() => {
      setShowcaseImageIndex((current) => (current + 1) % menuShowcaseImages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [open]);

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

  return (
    <>
      <header className={`alien-nav-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="alien-nav-container">
          {/* CCDL Agency Geometric Brandmark & Link */}
          <a
            className="alien-logo"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('home');
            }}
            aria-label="Climate change Digital Labs Home"
          >
            <CcdlLogo height={28} />
          </a>

          {/* Desktop & Mobile Right Action Bar */}
          <div className="alien-nav-right">
            {/* Contact Solid Dark Pill */}
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

      {/* Full-Screen Alien Design Menu Overlay Portal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="alien-mega-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ambient Background Glowing Blobs matching thealien.design */}
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
                    <CcdlLogo height={24} showLabel={false} />
                    <span className="menu-topbar-agency-name">AGENCY</span>
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
                  {/* Exact Clutch 4.9/5.0 ★ Pill Badge */}
                  <div className="alien-clutch-pill">
                    <span className="clutch-brand">CLUTCH</span>
                    <span className="clutch-score">4.9/5.0</span>
                    <span className="clutch-star">★</span>
                  </div>

                  {/* Circular Solid Dark Close Button with ESC badge */}
                  <button
                    onClick={() => setOpen(false)}
                    className="alien-close-circle-btn"
                    aria-label="Close navigation menu (ESC)"
                    title="Close (ESC)"
                  >
                    <X size={18} strokeWidth={2.4} />
                    <span className="esc-key-badge">ESC</span>
                  </button>
                </div>
              </div>

              {/* Sub-header Studio Index marker */}
              <div className="menu-studio-index-marker">
                <span className="marker-dot" />
                <span>01 // STUDIO INDEX</span>
              </div>

              {/* Main 3-Column Content Layout (Matching User Screenshot Exactly) */}
              <div className="alien-mega-content-grid">
                {/* Column 1: Core Capabilities & Process Card */}
                <div className="studio-index-card">
                  <div className="studio-index-card-header">
                    <div className="index-card-header-left">
                      <span className="index-dot dot-blue" />
                      <span>CORE CAPABILITIES & PROCESS</span>
                    </div>
                    <span className="index-badge">05 SECTIONS</span>
                  </div>

                  <div className="studio-index-items-list">
                    {/* 01 WORK */}
                    <div
                      className={`studio-index-item cursor-pointer group ${cleanCurrent === 'portfolio' ? 'is-active' : ''}`}
                      onClick={() => handleNav('portfolio')}
                    >
                      <div className="item-num">01</div>
                      <div className="item-content">
                        <div className="item-title-row">
                          <span className="item-title">WORK</span>
                          {cleanCurrent === 'portfolio' && (
                            <span className="current-route-badge">CURRENT</span>
                          )}
                        </div>
                        <p className="item-desc">Selected enterprise systems & award-winning products</p>
                      </div>
                      <ArrowUpRight className="item-arrow" size={18} />
                    </div>

                    {/* 02 PROCESS */}
                    <div
                      className={`studio-index-item cursor-pointer group ${cleanCurrent === 'process' ? 'is-active' : ''}`}
                      onClick={() => handleNav('process')}
                    >
                      <div className="item-num">02</div>
                      <div className="item-content">
                        <div className="item-title-row">
                          {cleanCurrent === 'process' && (
                            <span className="current-route-badge">CURRENT</span>
                          )}
                          <span className="item-title">PROCESS</span>
                        </div>
                        <p className="item-desc">Our 4-stage sprint & architecture methodology</p>
                      </div>
                      <ArrowUpRight className="item-arrow" size={18} />
                    </div>

                    {/* 03 SERVICES */}
                    <div
                      className={`studio-index-item cursor-pointer group ${cleanCurrent === 'services' ? 'is-active' : ''}`}
                      onClick={() => handleNav('services')}
                    >
                      <div className="item-num">03</div>
                      <div className="item-content">
                        <div className="item-title-row">
                          <span className="item-title">SERVICES</span>
                          {cleanCurrent === 'services' && (
                            <span className="current-route-badge">CURRENT</span>
                          )}
                        </div>
                        <p className="item-desc">Full-cycle design, cloud engineering & AI systems</p>
                      </div>
                      <ArrowUpRight className="item-arrow" size={18} />
                    </div>

                    {/* 04 SEO STRATEGY */}
                    <div
                      className={`studio-index-item cursor-pointer group ${cleanCurrent === 'seo-strategy' ? 'is-active' : ''}`}
                      onClick={() => handleNav('seo-strategy')}
                    >
                      <div className="item-num">04</div>
                      <div className="item-content">
                        <div className="item-title-row">
                          <span className="item-title">SEO STRATEGY</span>
                          {cleanCurrent === 'seo-strategy' && (
                            <span className="current-route-badge">CURRENT</span>
                          )}
                        </div>
                        <p className="item-desc">Technical SEO audit, keyword clusters & ranking roadmap</p>
                      </div>
                      <ArrowUpRight className="item-arrow" size={18} />
                    </div>

                    {/* 05 ABOUT */}
                    <div
                      className={`studio-index-item cursor-pointer group ${cleanCurrent === 'about' ? 'is-active' : ''}`}
                      onClick={() => handleNav('about')}
                    >
                      <div className="item-num">05</div>
                      <div className="item-content">
                        <div className="item-title-row">
                          <span className="item-title">ABOUT</span>
                          {cleanCurrent === 'about' && (
                            <span className="current-route-badge">CURRENT</span>
                          )}
                        </div>
                        <p className="item-desc">Founding team, collective mindset & studio origins</p>
                      </div>
                      <ArrowUpRight className="item-arrow" size={18} />
                    </div>
                  </div>
                </div>

                {/* Column 2: Perspectives & Direct Reach Card */}
                <div className="studio-index-card">
                  <div className="studio-index-card-header">
                    <div className="index-card-header-left">
                      <span className="index-dot dot-purple" />
                      <span>PERSPECTIVES & DIRECT REACH</span>
                    </div>
                    <span className="index-badge">05 SECTIONS</span>
                  </div>

                  <div className="studio-index-items-list">
                    {/* 06 BLOG */}
                    <div
                      className={`studio-index-item cursor-pointer group ${cleanCurrent === 'blog' ? 'is-active' : ''}`}
                      onClick={() => handleNav('blog')}
                    >
                      <div className="item-num">06</div>
                      <div className="item-content">
                        <div className="item-title-row">
                          <span className="item-title">BLOG</span>
                          {cleanCurrent === 'blog' && (
                            <span className="current-route-badge">CURRENT</span>
                          )}
                        </div>
                        <p className="item-desc">Architectural thinking & deep tech engineering analysis</p>
                      </div>
                      <ArrowUpRight className="item-arrow" size={18} />
                    </div>

                    {/* 07 COMMUNITY */}
                    <div
                      className={`studio-index-item cursor-pointer group ${cleanCurrent === 'community' ? 'is-active' : ''}`}
                      onClick={() => handleNav('community')}
                    >
                      <div className="item-num">07</div>
                      <div className="item-content">
                        <div className="item-title-row">
                          <span className="item-title">COMMUNITY</span>
                          {cleanCurrent === 'community' && (
                            <span className="current-route-badge">CURRENT</span>
                          )}
                        </div>
                        <p className="item-desc">Open source tooling, developer hub & collective sync</p>
                      </div>
                      <ArrowUpRight className="item-arrow" size={18} />
                    </div>

                    {/* 08 CAREERS */}
                    <div
                      className={`studio-index-item cursor-pointer group ${cleanCurrent === 'careers' ? 'is-active' : ''}`}
                      onClick={() => handleNav('careers')}
                    >
                      <div className="item-num">08</div>
                      <div className="item-content">
                        <div className="item-title-row">
                          <span className="item-title">CAREERS</span>
                          {cleanCurrent === 'careers' && (
                            <span className="current-route-badge">CURRENT</span>
                          )}
                        </div>
                        <p className="item-desc">Open roles in design engineering & cloud systems</p>
                      </div>
                      <ArrowUpRight className="item-arrow" size={18} />
                    </div>

                    {/* 09 CONTACT */}
                    <div
                      className={`studio-index-item cursor-pointer group ${cleanCurrent === 'contact' ? 'is-active' : ''}`}
                      onClick={() => handleNav('contact')}
                    >
                      <div className="item-num">09</div>
                      <div className="item-content">
                        <div className="item-title-row">
                          <span className="item-title">CONTACT</span>
                          {cleanCurrent === 'contact' && (
                            <span className="current-route-badge">CURRENT</span>
                          )}
                        </div>
                        <p className="item-desc">Direct channels, project intake & founder sync</p>
                      </div>
                      <ArrowUpRight className="item-arrow" size={18} />
                    </div>
                  </div>
                </div>

                {/* Column 3: Dynamic portfolio showcase only */}
                <div className="studio-showcase-stack">
                  <div className="studio-flagship-photo-card">
                    <motion.img
                      key={menuShowcaseImages[showcaseImageIndex].src}
                      src={menuShowcaseImages[showcaseImageIndex].src}
                      alt={menuShowcaseImages[showcaseImageIndex].alt}
                      className="flagship-photo-bg"
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                    />
                    <div className="flagship-photo-overlay" />
                    <div className="flagship-card-content">
                      <div className="flagship-case-badge">
                        <span className="flagship-badge-dot" />
                        <span>SELECTED WORK • {String(showcaseImageIndex + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="flagship-card-title">Portfolio Showcase</h3>
                      <p className="flagship-card-sub">Selected digital products and enterprise experiences.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

