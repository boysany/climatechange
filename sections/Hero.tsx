import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Sparkles, Star } from 'lucide-react';
import { motion as m } from 'framer-motion';
import gsap from 'gsap';
import { getReducedMotion } from '../lib/animations.ts';
import TextReveal from '../components/TextReveal.tsx';
import MarkerHighlight from '../components/MarkerHighlight.tsx';

const motion = m as any;

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const artRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPointer({ x, y });

      if (artRef.current && !getReducedMotion()) {
        const deltaX = (e.clientX - window.innerWidth / 2) / 25;
        const deltaY = (e.clientY - window.innerHeight / 2) / 25;
        gsap.to(artRef.current.querySelector('.art-panel'), {
          rotateY: deltaX,
          rotateX: -deltaY,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section className="hero section-pad alien-hero" id="home">
      <div className="hero-grid alien-hero-grid">
        {/* Top Status Bar (Live Availability & Clutch Rating) */}
        <div className="hero-meta alien-hero-meta">
          <div className="hero-live-status">
            <span className="live-pulse-dot" />
            <span className="live-status-text">AVAILABLE FOR SPRINT COMMISSIONS</span>
          </div>

          <button
            onClick={() => onNavigate?.('about')}
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

        {/* Main Headline & Narrative Copy */}
        <div className="hero-copy alien-hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge-row"
          >
            <button
              onClick={() => onNavigate?.('about')}
              className="kicker-pill"
              style={{ cursor: 'pointer', border: 'none', display: 'inline-flex', alignItems: 'center' }}
            >
              <Sparkles size={13} className="pill-spark" />
              GLOBAL DIGITAL PRODUCT STUDIO
            </button>
          </motion.div>

          <h1 className="display-title alien-display-title">
            <span className="hero-brand-name">CCDL</span> creates{' '}
            <span onClick={() => onNavigate?.('digital-products')} style={{ cursor: 'pointer' }}>
              <MarkerHighlight color="blue" className="hero-no-marker-bg">digital products</MarkerHighlight>
            </span>,{' '}
            <span className="hero-hl-purple" onClick={() => onNavigate?.('design-systems')} style={{ cursor: 'pointer' }}>design systems</span>, &amp;{' '}
            <span onClick={() => onNavigate?.('software')} style={{ cursor: 'pointer' }}>
              <MarkerHighlight color="cyan" className="hero-no-marker-bg">experiences</MarkerHighlight>
            </span> that move business forward.
          </h1>

          <div className="hero-bottom alien-hero-bottom">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="hero-narrative"
            >
              We craft identities, web applications, design systems, and software for
              forward-thinking companies and founders.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="hero-actions alien-hero-actions"
            >
              <button
                className="button button-dark alien-hero-btn"
                onClick={() => onNavigate?.('work')}
                style={{ cursor: 'pointer' }}
                data-cursor="EXPLORE"
              >
                <span>Explore Work</span>
                <ArrowDownRight size={16} />
              </button>

              <button
                className="button alien-hero-btn-outline"
                onClick={() => onNavigate?.('contact')}
                style={{ cursor: 'pointer' }}
                data-cursor="CONNECT"
              >
                <span>Contact Us</span>
                <ArrowUpRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Exact Original Interactive Geometric Art Showcase Card */}
        <div
          ref={artRef}
          className="hero-art"
          style={{ '--mx': `${pointer.x}%`, '--my': `${pointer.y}%`, perspective: 1000, cursor: 'pointer' } as any}
          aria-label="Interactive geometric design card"
          onClick={() => onNavigate?.('product-design')}
          data-cursor="VIEW"
        >
          <span className="art-label">System / Specimen</span>
          <span className="art-code">
            REV. <b>2026.08</b>
            <br />
            FIGMA + CODE
          </span>
          <div className="art-panel">
            <span>01 / INTERACTION</span>
            <strong>
              Crafted with
              <br />
              <i>precision</i> &amp; code
            </strong>
            <small>CCDL Collective</small>
          </div>
          <div className="art-crosshair">+</div>
        </div>
      </div>

      {/* Strategic Product Roadmap Section */}
      <div className="hero-roadmap-section" id="roadmap">
        <div className="hero-roadmap-header">
          <div className="hero-roadmap-header-left">
            <span className="hero-roadmap-eyebrow">
              <span className="hero-roadmap-pulse" />
              CAPABILITIES &amp; SPRINT MILESTONES
            </span>
            <h2 className="hero-roadmap-title">Strategic Product Roadmap</h2>
          </div>
          <p className="hero-roadmap-subtitle">
            From product discovery to enterprise deployment — structured in 3 synchronized phases with zero vendor lock-in.
          </p>
        </div>

        <div className="hero-roadmap-cards-grid">
          {/* Card 01: Strategy & Product Roadmaps */}
          <div
            className="hero-roadmap-card card-glow-cyan"
            onClick={() => onNavigate?.('strategy')}
            style={{ cursor: 'pointer' }}
          >
            <div className="roadmap-card-top">
              <span className="roadmap-phase-tag">PHASE 01</span>
              <span className="roadmap-timeline-pill">WEEKS 1–2</span>
            </div>
            <h3 className="roadmap-card-title">Strategy &amp; Product Roadmaps</h3>
            <p className="roadmap-card-desc">
              Deconstruct market opportunity, user journeys, unit economics, and data architecture to eliminate execution risk.
            </p>
            <div className="roadmap-deliverables-list">
              <span>• Product Market Validation</span>
              <span>• Information Architecture &amp; User Flows</span>
              <span>• Technical Feasibility &amp; API Schemas</span>
            </div>
            <div className="roadmap-card-bottom">
              <span className="roadmap-link-text">Explore Strategy Blueprint</span>
              <ArrowUpRight size={15} className="roadmap-arrow" />
            </div>
          </div>

          {/* Card 02: Design Systems & Dev */}
          <div
            className="hero-roadmap-card card-glow-purple"
            onClick={() => onNavigate?.('design-systems')}
            style={{ cursor: 'pointer' }}
          >
            <div className="roadmap-card-top">
              <span className="roadmap-phase-tag tag-purple">PHASE 02</span>
              <span className="roadmap-timeline-pill">WEEKS 2–4</span>
            </div>
            <h3 className="roadmap-card-title">Design Systems &amp; Dev</h3>
            <p className="roadmap-card-desc">
              Mathematical typography, tactile atomic components, and living Figma tokens linked seamlessly to production code.
            </p>
            <div className="roadmap-deliverables-list">
              <span>• Figma Tokenized UI System</span>
              <span>• Fluid Micro-Interactions &amp; States</span>
              <span>• WCAG AAA Accessibility Compliance</span>
            </div>
            <div className="roadmap-card-bottom">
              <span className="roadmap-link-text">View Design Tokens</span>
              <ArrowUpRight size={15} className="roadmap-arrow" />
            </div>
          </div>

          {/* Card 03: Full-Stack Web Apps & Cloud */}
          <div
            className="hero-roadmap-card card-glow-blue"
            onClick={() => onNavigate?.('software')}
            style={{ cursor: 'pointer' }}
          >
            <div className="roadmap-card-top">
              <span className="roadmap-phase-tag tag-blue">PHASE 03</span>
              <span className="roadmap-timeline-pill">WEEKS 4–6</span>
            </div>
            <h3 className="roadmap-card-title">Full-Stack Web Apps &amp; Cloud</h3>
            <p className="roadmap-card-desc">
              Resilient TypeScript engineering, edge cloud architecture, sub-second Core Web Vitals, and automated CI/CD.
            </p>
            <div className="roadmap-deliverables-list">
              <span>• Modern React &amp; Next.js Architecture</span>
              <span>• Edge Caching &amp; Sub-200ms Latency</span>
              <span>• Zero-Downtime Deployment &amp; QA</span>
            </div>
            <div className="roadmap-card-bottom">
              <span className="roadmap-link-text">Inspect Tech Stack</span>
              <ArrowUpRight size={15} className="roadmap-arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
