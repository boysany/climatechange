import React, { useEffect, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import CcdlLogo from './CcdlLogo.tsx';

const motion = m as any;

interface PageTransitionSplashProps {
  isVisible: boolean;
  targetPage: string;
  isDark: boolean;
  onTransitionComplete?: () => void;
}

const PAGE_NAMES: Record<string, { title: string; category: string }> = {
  home: { title: 'AGENCY HQ', category: 'HEADQUARTERS' },
  about: { title: 'COLLECTIVE MANIFESTO', category: 'AGENCY ETHOS' },
  services: { title: 'SPECIALIZED DISCIPLINES', category: 'CORE CAPABILITIES' },
  work: { title: 'FEATURED CASE STUDIES', category: 'PRODUCTION ARCHIVE' },
  portfolio: { title: 'PRODUCTION SPECIMENS', category: 'PORTFOLIO' },
  process: { title: 'ENGINEERING WORKFLOW', category: 'METHODOLOGY' },
  team: { title: 'LEADERSHIP & TALENT', category: 'PERSONNEL' },
  insights: { title: 'EDITORIAL & ARCHITECTURE', category: 'KNOWLEDGE BASE' },
  contact: { title: 'DIRECT INTAKE DESK', category: 'COMMUNICATION' },
  startups: { title: 'VENTURE & HYPERGROWTH', category: 'STARTUP ADVISORY' },
  enterprise: { title: 'ENTERPRISE TRANSFORMATION', category: 'GLOBAL SCALE' },
  software: { title: 'FULL-STACK SOFTWARE', category: 'CLOUD SYSTEMS' },
  'product-design': { title: 'DIGITAL PRODUCT DESIGN', category: 'DESIGN SYSTEMS' },
  'design-systems': { title: 'DESIGN SYSTEM INFRASTRUCTURE', category: 'TOKENS & UI' },
  careers: { title: 'OPEN EXPEDITIONS', category: 'TALENT NETWORK' },
  blog: { title: 'DISPATCHES & EDITORIAL', category: 'THOUGHT LEADERSHIP' },
  community: { title: 'OPEN NETWORK & HUB', category: 'COLLECTIVE' },
  faqs: { title: 'FREQUENTLY ASKED QUESTIONS', category: 'DOCUMENTATION' },
  privacy: { title: 'PRIVACY & DATA POLICY', category: 'LEGAL PROTOCOL' },
  terms: { title: 'TERMS OF SERVICE', category: 'COMPLIANCE' },
  cookies: { title: 'COOKIE PREFERENCES', category: 'PRIVACY' },
  security: { title: 'SECURITY STANDARDS', category: 'DATA PROTECTION' },
};

export default function PageTransitionSplash({
  isVisible,
  targetPage,
  isDark,
  onTransitionComplete,
}: PageTransitionSplashProps) {
  const [progress, setProgress] = useState(0);

  const cleanTarget = targetPage.replace(/^\//, '').replace(/\/$/, '') || 'home';
  const pageMeta = PAGE_NAMES[cleanTarget] || {
    title: cleanTarget.toUpperCase().replace(/-/g, ' '),
    category: 'DESTINATION ROUTE',
  };

  useEffect(() => {
    if (!isVisible) {
      setProgress(0);
      return;
    }

    const duration = 480;
    const start = performance.now();

    const frame = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(frame);
      }
    };

    const anim = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(anim);
  }, [isVisible]);

  return (
    <AnimatePresence onExitComplete={onTransitionComplete}>
      {isVisible && (
        <motion.div
          key="page-transition-curtain"
          className={`page-transition-overlay frosted-white-splash ${isDark ? 'is-dark' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Frosted Shutter Panels */}
          <motion.div
            className="splash-frosted-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Ambient Mesh Grid */}
          <div className="splash-matrix-grid">
            <div className="splash-radial-glow" />
          </div>

          {/* Center Frosted Glass Stage */}
          <motion.div
            className="splash-center-stage"
            initial={{ scale: 0.94, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.02, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Destination Pill */}
            <div className="splash-meta-header">
              <div className="splash-tag-pill">
                <span className="splash-pulse-dot" />
                <span>{pageMeta.category}</span>
              </div>
              <div className="splash-route-code">
                <span>ROUTING:</span>
                <b>/{cleanTarget === 'home' ? '' : cleanTarget}</b>
              </div>
            </div>

            {/* Geometric Logo Core */}
            <div className="splash-logo-matrix">
              <motion.div
                className="splash-ring-outer"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="splash-ring-inner"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className="splash-brand-core"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <CcdlLogo height={46} className="splash-logo-svg" />
              </motion.div>

              <div className="splash-corner-crosshairs">
                <span className="cross-tl">⌜</span>
                <span className="cross-tr">⌝</span>
                <span className="cross-bl">⌞</span>
                <span className="cross-br">⌟</span>
              </div>
            </div>

            {/* Target Page Heading */}
            <div className="splash-title-block">
              <span className="splash-agency-tag">AGENCY</span>
              <h2 className="splash-target-heading">{pageMeta.title}</h2>
            </div>

            {/* Soundwave Bars */}
            <div className="splash-equalizer-bars">
              {[35, 70, 95, 55, 85, 100, 65, 90, 45, 80, 60, 90, 40].map((h, i) => (
                <motion.span
                  key={i}
                  className="eq-bar"
                  animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.35}%`] }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    delay: i * 0.04,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Telemetry Progress Bar */}
            <div className="splash-telemetry-dock">
              <div className="splash-telemetry-left">
                <span className="telemetry-lbl">FLUID ENGINE</span>
                <span className="telemetry-val">HIGH-SPEED SYNC</span>
              </div>

              <div className="splash-counter-display">
                <span className="splash-num">{String(progress).padStart(3, '0')}</span>
                <span className="splash-percent">%</span>
              </div>
            </div>

            {/* High Precision Progress Bar */}
            <div className="splash-track-wrap">
              <motion.div
                className="splash-laser-progress"
                style={{ width: `${progress}%` }}
              >
                <div className="laser-spark-tip" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
