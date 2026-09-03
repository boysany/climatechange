import React, { useEffect, useRef } from 'react';
import TextReveal from '../components/TextReveal.tsx';
import ScrollReveal from '../components/ScrollReveal.tsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getReducedMotion } from '../lib/animations.ts';

const capabilities = [
  'Digital Strategy',
  'Product Design',
  'Full-Stack Engineering',
  'Performance Auditing',
  'Design Systems',
  'Long-Term Evolution',
];

interface WhyUsProps {
  onNavigate?: (page: string) => void;
}

const capabilityRouteMap: Record<string, string> = {
  'Digital Strategy': 'strategy',
  'Product Design': 'product-design',
  'Full-Stack Engineering': 'software',
  'Performance Auditing': 'seo-ads',
  'Design Systems': 'design-systems',
  'Long-Term Evolution': 'enterprise',
};

export default function WhyUs({ onNavigate }: WhyUsProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || getReducedMotion()) return;

    const items = el.querySelectorAll('.capabilities span, .capabilities button');
    const st = ScrollTrigger.create({
      trigger: el.querySelector('.capabilities'),
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          items,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: 'power2.out' }
        );
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-pad why" id="why">
      <span className="eyebrow" onClick={() => onNavigate?.('about')} style={{ cursor: 'pointer' }}>
        Why CCDL / 06
      </span>
      <h2>
        <TextReveal>
          We don't just make <em>websites.</em>
        </TextReveal>
      </h2>
      <ScrollReveal delay={120}>
        <p className="why-lead">
          We build digital systems that move businesses forward — with the strategic thinking,
          meticulous craft, and resilient engineering to keep them scaling.
        </p>
      </ScrollReveal>
      <div className="capabilities">
        {capabilities.map((x, i) => (
          <button
            key={x}
            onClick={() => onNavigate?.(capabilityRouteMap[x] || 'services')}
            style={{
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              color: 'inherit',
              padding: 0,
              font: 'inherit',
              textAlign: 'left',
              display: 'inline-flex',
              alignItems: 'baseline',
            }}
          >
            <span>
              <b>0{i + 1}</b>
              {x} ↗
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
