import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Sparkles, Star } from 'lucide-react';
import { motion as m } from 'framer-motion';
import gsap from 'gsap';
import { getReducedMotion } from '../lib/animations.ts';
import TextReveal from '../components/TextReveal.tsx';

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
        {/* Top Status Bar */}
        <div className="hero-meta alien-hero-meta">
          <button
            onClick={() => onNavigate?.('about')}
            className="hero-live-pill"
            style={{ cursor: 'pointer', background: 'transparent', border: 'none', textAlign: 'left' }}
          >
            <span className="live-pulse-dot" />
            <span>00 / INDEX • BASED IN RAJASTHAN • WORKING WORLDWIDE</span>
          </button>

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
            <span className="hero-hl-blue" onClick={() => onNavigate?.('digital-products')} style={{ cursor: 'pointer' }}>digital products</span>,{' '}
            <span className="hero-hl-purple" onClick={() => onNavigate?.('design-systems')} style={{ cursor: 'pointer' }}>design systems</span>, &amp;{' '}
            <span className="hero-hl-cyan" onClick={() => onNavigate?.('software')} style={{ cursor: 'pointer' }}>experiences</span> that move business forward.
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
              >
                Explore Work <ArrowDownRight size={16} />
              </button>

              <button
                className="button alien-hero-btn-outline"
                onClick={() => onNavigate?.('book-call')}
                style={{ cursor: 'pointer' }}
              >
                Book A Call <ArrowUpRight size={16} />
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

      {/* Hero Bottom Capabilities */}
      <div className="hero-foot alien-hero-foot">
        <button
          onClick={() => onNavigate?.('strategy')}
          className="hero-foot-col"
          style={{ cursor: 'pointer', background: 'transparent', border: 'none', textAlign: 'left', color: 'inherit' }}
        >
          <b>01</b>
          <span>STRATEGY &amp; PRODUCT ROADMAPS</span>
        </button>
        <button
          onClick={() => onNavigate?.('design-systems')}
          className="hero-foot-col"
          style={{ cursor: 'pointer', background: 'transparent', border: 'none', textAlign: 'left', color: 'inherit' }}
        >
          <b>02</b>
          <span>DESIGN SYSTEMS &amp; DEV</span>
        </button>
        <button
          onClick={() => onNavigate?.('software')}
          className="hero-foot-col"
          style={{ cursor: 'pointer', background: 'transparent', border: 'none', textAlign: 'left', color: 'inherit' }}
        >
          <b>03</b>
          <span>FULL-STACK WEB APPS &amp; CLOUD</span>
        </button>
      </div>
    </section>
  );
}
