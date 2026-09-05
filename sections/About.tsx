import React, { useEffect, useRef, useState } from 'react';
import TextReveal from '../components/TextReveal.tsx';
import ScrollReveal from '../components/ScrollReveal.tsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getReducedMotion } from '../lib/animations.ts';
import { Sparkles, Terminal, TrendingUp, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const pillars = [
  {
    num: '01',
    role: 'Designers',
    tag: 'Craft & Usability',
    icon: Sparkles,
    metric: '60 FPS Transitions',
    accent: '#06b6d4',
    desc: 'Considered, intuitive interfaces shaped with typographic discipline, visual balance, and human empathy.',
    bullets: ['Tokenized Design Systems', 'Fluid Micro-Interactions', 'Editorial Typography & Rhythm', 'Spatial Precision Layouts'],
  },
  {
    num: '02',
    role: 'Developers',
    tag: 'Systems & Speed',
    icon: Terminal,
    metric: '<0.8s First Contentful Paint',
    accent: '#3b82f6',
    desc: 'Clean, durable TypeScript engineering that turns design vision into ultra-responsive, resilient code.',
    bullets: ['Sub-second Load Times', 'Modern React & Vite Stacks', 'Zero Code Bloat Architecture', 'Automated CI/CD Pipelines'],
  },
  {
    num: '03',
    role: 'Problem Solvers',
    tag: 'Business & Value',
    icon: TrendingUp,
    metric: '+185% Conversion Lift',
    accent: '#8b5cf6',
    desc: 'Strategic partners aligned with commercial objectives, user conversion velocity, and measurable scale.',
    bullets: ['Conversion Architecture', 'User Behavior Telemetry', '100% IP Code Ownership', 'Compounding Growth Returns'],
  },
];

const flowSteps = [
  {
    num: '01',
    title: 'Strategy',
    desc: 'Uncovering the sharpest commercial opportunity and product direction.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Crafting interfaces with intention, character, and strict usability.',
  },
  {
    num: '03',
    title: 'Technology',
    desc: 'Building with resilient, high-speed, modern full-stack code.',
  },
  {
    num: '04',
    title: 'Impact',
    desc: 'Deploying digital products that move business forward and scale.',
  },
];

interface AboutProps {
  onNavigate?: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const watermarkRef = useRef<HTMLDivElement | null>(null);
  const statementRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const flowRef = useRef<HTMLDivElement | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [flowProgress, setFlowProgress] = useState(25);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || getReducedMotion()) return;

    const ctx = gsap.context(() => {
      // 1. Watermark horizontal parallax on vertical scroll
      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          xPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // 2. Statement Scroll Scrubbing (Lights up each word progressively)
      if (statementRef.current) {
        const words = statementRef.current.querySelectorAll('.about-scrub-word');
        ScrollTrigger.create({
          trigger: statementRef.current,
          start: 'top 75%',
          end: 'bottom 45%',
          scrub: 0.5,
          onUpdate: (self) => {
            const p = self.progress;
            words.forEach((word, idx) => {
              const threshold = (idx + 0.3) / words.length;
              if (p >= threshold) {
                word.classList.add('is-active');
              } else {
                word.classList.remove('is-active');
              }
            });
          },
        });
      }

      // 3. Stagger & Parallax on Pillar Cards
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.about-pillar-card');
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }

      // 4. Interactive Flow Timeline & Step Activation on Scroll
      if (flowRef.current) {
        const steps = flowRef.current.querySelectorAll('.about-flow-step');
        ScrollTrigger.create({
          trigger: flowRef.current,
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: 0.6,
          onUpdate: (self) => {
            const p = self.progress;
            setFlowProgress(Math.max(15, p * 100));
            const activeIdx = Math.min(
              flowSteps.length - 1,
              Math.floor(p * flowSteps.length)
            );
            setActiveStepIndex(activeIdx);
          },
        });

        gsap.fromTo(
          steps,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: flowRef.current,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-pad editorial" id="about">
      {/* Background Watermark Parallax */}
      <div className="about-watermark-wrap" aria-hidden="true">
        <span ref={watermarkRef} className="about-watermark-text">
          STRATEGY • DESIGN • TECHNOLOGY • IMPACT •
        </span>
      </div>

      {/* Structured Section Heading */}
      <div className="about-heading-layout">
        <div className="about-heading-top">
          <span className="eyebrow">
            <span className="about-pulse-dot" />
            Point of view / 03
          </span>
          <span className="about-heading-tag">CCDL PHILOSOPHY • PURPOSE-DRIVEN</span>
        </div>

        <div className="about-heading-body">
          <h2>
            <TextReveal delay={0.05} stagger={0.04} duration={0.9}>
              Digital products should do more than <em>look good.</em>
            </TextReveal>
          </h2>

          <div className="about-heading-aside">
            <ScrollReveal delay={120}>
              <p>
                They should communicate clearly, perform beautifully and create measurable
                business value.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <button
                onClick={() => onNavigate?.('about')}
                className="about-heading-badge-box"
                style={{ cursor: 'pointer', border: 'none', textAlign: 'left', background: 'transparent' }}
              >
                <strong>That's where CCDL comes in.</strong>
                <span>100% Bespoke</span>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Kinetic Statement with Scroll Scrub */}
      <div ref={statementRef} className="about-scrub-statement-wrap">
        <div className="about-scrub-statement">
          <span className="about-scrub-word word-1" onClick={() => onNavigate?.('product-design')} style={{ cursor: 'pointer' }}>Designers.</span>
          <span className="about-scrub-word word-2" onClick={() => onNavigate?.('software')} style={{ cursor: 'pointer' }}>Developers.</span>
          <span className="about-scrub-word word-3" onClick={() => onNavigate?.('strategy')} style={{ cursor: 'pointer' }}>Problem Solvers.</span>
        </div>
      </div>

      {/* 3 Discipline Pillar Cards */}
      <div ref={cardsRef} className="about-pillars-grid">
        {pillars.map((pillar) => {
          const targetPage =
            pillar.num === '01' ? 'product-design' : pillar.num === '02' ? 'software' : 'strategy';
          const IconComponent = pillar.icon;
          return (
            <div
              key={pillar.num}
              className="about-pillar-card"
              onClick={() => onNavigate?.(targetPage)}
              style={{ cursor: 'pointer' }}
            >
              <div>
                <div className="about-pillar-top">
                  <div className="about-pillar-badge-group">
                    <div className="about-pillar-icon-box" style={{ color: pillar.accent }}>
                      <IconComponent size={18} />
                    </div>
                    <span className="about-pillar-num">{pillar.num} / DISCIPLINE</span>
                  </div>
                  <span className="about-pillar-metric">{pillar.metric}</span>
                </div>
                <h3>{pillar.role}</h3>
                <span className="about-pillar-subtag">{pillar.tag}</span>
                <p>{pillar.desc}</p>
              </div>

              <div>
                <ul className="about-pillar-bullets">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet}>
                      <CheckCircle2 size={13} className="bullet-check-icon" style={{ color: pillar.accent }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="about-pillar-cta">
                  <span>Explore {pillar.role}</span>
                  <ArrowUpRight size={14} className="pillar-arrow-icon" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progressive Flow Timeline (Strategy -> Design -> Technology -> Impact) */}
      <div className="about-flow-container">
        <div className="about-flow-header">
          <span className="eyebrow">Execution Progression</span>
          <span className="eyebrow">Stage 0{activeStepIndex + 1} / 04</span>
        </div>

        {/* Scroll-Driven Gradient Progress Bar */}
        <div className="about-flow-progress-bar">
          <div
            className="about-flow-progress-fill"
            style={{ width: `${flowProgress}%` }}
          />
        </div>

        <div ref={flowRef} className="about-flow-grid">
          {flowSteps.map((step, idx) => {
            const stepRoute =
              idx === 0 ? 'strategy' : idx === 1 ? 'product-design' : idx === 2 ? 'software' : 'seo-ads';
            return (
              <div
                key={step.num}
                className={`about-flow-step ${activeStepIndex >= idx ? 'is-active' : ''}`}
                onClick={() => onNavigate?.(stepRoute)}
                style={{ cursor: 'pointer' }}
              >
                <div className="about-flow-step-top">
                  <span className="about-flow-step-num">{step.num}</span>
                  {idx < flowSteps.length - 1 ? (
                    <span className="about-flow-arrow">→</span>
                  ) : (
                    <span className="about-flow-arrow" style={{ color: 'var(--cyan)' }}>
                      ✦
                    </span>
                  )}
                </div>
                <h4>{step.title}</h4>
                <span>{step.desc}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
