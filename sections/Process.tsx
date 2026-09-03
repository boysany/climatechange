import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import TextReveal from '../components/TextReveal.tsx';
import ScrollReveal from '../components/ScrollReveal.tsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getReducedMotion } from '../lib/animations.ts';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const processSteps = [
  {
    num: '01',
    phase: 'Discovery & User Research',
    title: 'Discover',
    tagline: 'Understand the business model and uncover high-conviction opportunity.',
    desc: 'We immerse ourselves in your market landscape, customer behaviors, business unit economics, and technical constraints before writing a single line of code or finalizing wireframes.',
    deliverables: ['Market Audit', 'Stakeholder Workshops', 'User Persona Mapping'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=85&w=1200',
    timeline: 'Phase 01',
    accent: '#3b82f6',
  },
  {
    num: '02',
    phase: 'Strategic Architecture',
    title: 'Strategize',
    tagline: 'Define the clearest path to product-market traction and technical feasibility.',
    desc: 'We translate raw insights into a structured product roadmap, measurable KPIs, system architectures, and high-impact design directions that eliminate execution risk.',
    deliverables: ['Architecture Blueprint', 'User Journey Mapping', 'KPI & Feasibility Specs'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=85&w=1200',
    timeline: 'Phase 02',
    accent: '#8b5cf6',
  },
  {
    num: '03',
    phase: 'Experience & Interface',
    title: 'Design',
    tagline: 'Craft interfaces with intention, character, tactile feel, and mathematical polish.',
    desc: 'We shape interactive systems that balance editorial beauty with strict usability standards. Every micro-interaction, typography pairing, and state transition is deliberately engineered.',
    deliverables: ['Design Token Systems', 'Interactive Prototypes', 'Production Design Specs'],
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=85&w=1200',
    timeline: 'Phase 03',
    accent: '#06b6d4',
  },
  {
    num: '04',
    phase: 'High-Velocity Engineering',
    title: 'Build',
    tagline: 'Engineer high-performance, resilient, and scalable software systems.',
    desc: 'We develop using modern TypeScript stacks, component architecture, and cloud-native backends to ensure lightning-fast speeds, accessibility, and clean maintainability.',
    deliverables: ['TypeScript Codebase', 'Sub-second Core Web Vitals', 'CI/CD Pipelines'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=85&w=1200',
    timeline: 'Phase 04',
    accent: '#10b981',
  },
  {
    num: '05',
    phase: 'Precision Deployment',
    title: 'Launch',
    tagline: 'Deploy with precision, zero downtime, and complete operational confidence.',
    desc: 'We execute comprehensive QA, stress testing, security checks, and cross-platform verification before orchestrating a seamless, zero-downtime launch day rollout.',
    deliverables: ['Zero-Downtime Deployment', 'SSL & DNS Handover', 'Telemetry Setup'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=85&w=1200',
    timeline: 'Phase 05',
    accent: '#f59e0b',
  },
  {
    num: '06',
    phase: 'Continuous Optimization',
    title: 'Grow',
    tagline: 'Iterate based on empirical evidence, telemetry, and real user signals.',
    desc: 'Digital products must evolve. We monitor live telemetry, conversion funnels, and feature adoption to continuously refine the experience and drive long-term business value.',
    deliverables: ['CRO Sprints', 'Telemetry Auditing', 'Continuous Feature Scaling'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=85&w=1200',
    timeline: 'Phase 06',
    accent: '#ec4899',
  },
];

interface ProcessProps {
  onNavigate?: (page: string) => void;
}

export default function Process({ onNavigate }: ProcessProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsRef.current;
    if (!section || !cardsContainer || getReducedMotion()) return;

    const cards = cardsContainer.querySelectorAll<HTMLElement>('.process-card-item');

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        // Active indicator on scroll
        ScrollTrigger.create({
          trigger: card,
          start: 'top center+=80',
          end: 'bottom center-=40',
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });

        // Bottom to top progressive scroll animation
        gsap.fromTo(
          card,
          {
            y: 80,
            opacity: 0.35,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              end: 'top 48%',
              scrub: 0.6,
            },
          }
        );
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  const scrollToStep = (index: number) => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll<HTMLElement>('.process-card-item');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActiveStep(index);
    }
  };

  return (
    <section ref={sectionRef} className="section-pad process-pinned-section" id="process">
      <div className="process-layout">
        {/* Pinned Left Narrative & Navigation */}
        <div className="process-pinned-left">
          <div
            className="section-heading"
            style={{ display: 'block', cursor: 'pointer' }}
            onClick={() => onNavigate?.('process')}
          >
            <span className="eyebrow">
              Methodology & How we work / 04
            </span>
            <h2>
              <TextReveal>
                From first thought to <em>forward motion.</em>
              </TextReveal>
            </h2>
            <ScrollReveal delay={120}>
              <p>
                A clear, collaborative process that keeps the big strategic idea connected to
                every precise execution detail.
              </p>
            </ScrollReveal>
            <div style={{ marginTop: '1rem' }}>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--mono)',
                  color: 'var(--cyan)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                Explore 6-Phase Engineering Blueprint ↗
              </span>
            </div>
          </div>

          <div className="process-nav-list">
            {processSteps.map((step, idx) => (
              <button
                key={step.num}
                className={`process-nav-item ${activeStep === idx ? 'is-active' : ''}`}
                onClick={() => scrollToStep(idx)}
                aria-label={`Scroll to phase ${step.num} ${step.title}`}
              >
                <div className="nav-dot" />
                <span>
                  {step.num} — {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Bottom-to-Top Scrolling Cards Stack */}
        <div ref={cardsRef} className="process-cards-stack">
          {processSteps.map((step, idx) => (
            <div
              key={step.num}
              className={`process-card-item ${activeStep === idx ? 'is-active' : ''}`}
              style={{ '--card-index': idx } as React.CSSProperties}
            >
              {/* Top Media Banner (Full Bleed, No Padding Pinch) */}
              <div className="process-card-media">
                <img src={step.image} alt={step.title} loading="lazy" />
                <div className="process-card-media-gradient" />
                <div className="process-card-media-top">
                  <span
                    className="process-phase-pill"
                    style={{ borderColor: `color-mix(in srgb, ${step.accent} 40%, transparent)` }}
                  >
                    <span className="phase-dot" style={{ backgroundColor: step.accent }} />
                    {step.num} • {step.phase}
                  </span>
                  <span className="process-timeline-pill">{step.timeline}</span>
                </div>
              </div>

              {/* Card Content with Balanced Spacing */}
              <div className="process-card-content">
                <div className="process-card-body">
                  <div className="process-card-title-row">
                    <h3>{step.title}</h3>
                    <span className="process-stage-indicator" style={{ color: step.accent }}>
                      Stage {step.num}
                    </span>
                  </div>
                  <p className="process-card-tagline">{step.tagline}</p>
                  <p className="process-card-desc">{step.desc}</p>
                </div>

                <div className="process-deliverables-box">
                  <span className="process-deliverables-title">Key Phase Deliverables</span>
                  <div className="process-deliverables-list">
                    {step.deliverables.map((deliv) => (
                      <span key={deliv} className="process-deliverable-chip">
                        <CheckCircle2 size={13} style={{ color: step.accent, flexShrink: 0 }} />
                        <span>{deliv}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
