import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import TextReveal from '../components/TextReveal.tsx';
import ScrollReveal from '../components/ScrollReveal.tsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getReducedMotion } from '../lib/animations.ts';

interface WhyUsProps {
  onNavigate?: (page: string) => void;
}

// 8-Pointed Star Asterisk matching user screenshot
function StarAsterisk({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="24" y1="4" x2="24" y2="44" />
      <line x1="4" y1="24" x2="44" y2="24" />
      <line x1="10" y1="10" x2="38" y2="38" />
      <line x1="38" y1="10" x2="10" y2="38" />
    </svg>
  );
}

// Primary Navigation Pill Buttons (Exact match to uploaded user screenshot)
const primaryPillButtons = [
  { label: 'Work', page: 'portfolio' },
  { label: 'Process', page: 'process' },
  { label: 'About', page: 'about' },
  { label: 'Insights', page: 'blog' },
  { label: 'Contact Us', page: 'contact' },
  { label: 'SEO', page: 'seo-strategy' },
];

// Core Architecture & Capability Pills
const capabilityPillButtons = [
  { label: 'Digital Strategy', page: 'service-software-development' },
  { label: 'Product Design', page: 'service-ui-ux-design' },
  { label: 'Full-Stack Engineering', page: 'service-software-development' },
  { label: 'Performance Auditing', page: 'seo-strategy' },
  { label: 'Design Systems', page: 'service-ui-ux-design' },
  { label: 'Long-Term Evolution', page: 'services' },
];

const marqueeRepeats = [
  'JUST GREAT WORK',
  'JUST GREAT WORK',
  'JUST GREAT WORK',
  'JUST GREAT WORK',
  'JUST GREAT WORK',
];

export default function WhyUs({ onNavigate }: WhyUsProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || getReducedMotion()) return;

    const items = el.querySelectorAll('.why-pills-row button');
    const st = ScrollTrigger.create({
      trigger: el.querySelector('.why-pills-container'),
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          items,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, stagger: 0.05, ease: 'power2.out' }
        );
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-pad why" id="why">
      {/* Ambient background atmosphere distinguishing Why CCDL */}
      <div className="why-ambient-canvas" aria-hidden="true">
        <div className="why-glow-violet" />
        <div className="why-glow-purple" />
        <div className="why-grid-subtle" />
      </div>

      <div className="why-inner-content">
        <span
          className="eyebrow"
          onClick={() => onNavigate?.('about')}
          style={{ cursor: 'pointer' }}
        >
          Why CCDL / 06
        </span>

        {/* Hero Headline from image: Let's turn your idea into reality */}
        <div className="why-header-group">
          <h2>
            <TextReveal>
              Let's turn your <em>idea into reality</em>
            </TextReveal>
          </h2>

          {/* Purple Pill CTA Button from uploaded image */}
          <div className="why-top-cta-wrap">
            <button
              onClick={() => onNavigate?.('contact')}
              className="why-contact-purple-btn"
              title="Contact Climate Change Digital Labs"
            >
              <span>Contact Us</span>
            </button>
          </div>
        </div>

        <div className="why-divider-line" />

        {/* Industry subheadline matching user screenshot */}
        <ScrollReveal delay={120}>
          <p className="why-industry-lead">
            Designed Products across various Industries Fintech • Healthcare • SAAS • E-commerce • Retail • Real estate
          </p>
        </ScrollReveal>

        {/* The Exact Pill Buttons matching image.png */}
        <div className="why-pills-container">
          <div className="why-pills-row">
            {primaryPillButtons.map((btn) => (
              <button
                key={btn.label}
                onClick={() => onNavigate?.(btn.page)}
                className="why-pill-btn"
                title={`Navigate to ${btn.label}`}
              >
                <span>{btn.label}</span>
                <ArrowUpRight size={18} className="pill-arrow" />
              </button>
            ))}
          </div>

          {/* Secondary Capabilities Pill Row */}
          <div className="why-pills-row capabilities-pills-row">
            {capabilityPillButtons.map((btn) => (
              <button
                key={btn.label}
                onClick={() => onNavigate?.(btn.page)}
                className="why-pill-btn why-pill-sub"
                title={`Explore ${btn.label}`}
              >
                <span>{btn.label}</span>
                <ArrowUpRight size={16} className="pill-arrow" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Continuous Scrolling Text Banner (JUST GREAT WORK ✳) */}
      <div className="why-scrolling-marquee-wrap" aria-label="Just Great Work continuous marquee banner">
        <div className="why-scrolling-marquee-track">
          {/* First loop group */}
          <div className="why-marquee-group">
            {marqueeRepeats.map((text, idx) => (
              <div key={`group1-${idx}`} className="why-marquee-item">
                <StarAsterisk className="why-marquee-star" />
                <span className="why-marquee-text">{text}</span>
              </div>
            ))}
          </div>

          {/* Duplicate loop group for seamless continuous loop */}
          <div className="why-marquee-group" aria-hidden="true">
            {marqueeRepeats.map((text, idx) => (
              <div key={`group2-${idx}`} className="why-marquee-item">
                <StarAsterisk className="why-marquee-star" />
                <span className="why-marquee-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

