import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import TextReveal from '../components/TextReveal.tsx';
import ScrollReveal from '../components/ScrollReveal.tsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getReducedMotion } from '../lib/animations.ts';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const portfolioProjects = [
  {
    num: '01',
    tag: 'Talent Platform',
    title: 'Hire Professional',
    desc: 'A modern on-demand hiring platform connecting vetted industry specialists with enterprise teams through automated matchmaking and contract workflows.',
    img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=85&w=1600',
    year: '2025',
    category: 'Talent / Web Platform',
  },
  {
    num: '02',
    tag: 'EdTech System',
    title: 'School Management',
    desc: 'An all-in-one institutional management portal orchestrating student grading, attendance telemetry, faculty scheduling, and parent communication.',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=85&w=1600',
    year: '2025',
    category: 'EdTech / Dashboard',
  },
  {
    num: '03',
    tag: 'DeFi & Web3',
    title: 'Urmi Swap',
    desc: 'A focused decentralized exchange experience built around real-time liquidity pools, minimal slippage, speed, and confident asset swapping.',
    img: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=85&w=1600',
    year: '2025',
    category: 'DeFi / Web3 Product',
  },
  {
    num: '04',
    tag: 'Academic Portal',
    title: 'Gurukul School',
    desc: 'An inspiring, student-first digital campus portal for holistic education, curriculum discovery, admissions, and virtual campus exploration.',
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=85&w=1600',
    year: '2026',
    category: 'Education / Web Portal',
  },
  {
    num: '05',
    tag: 'Fintech & Cloud AI',
    title: 'Apex Global Banking',
    desc: 'An institutional-grade real-time treasury analytics portal processing multi-currency payouts, AI fraud detection, and instant liquidity settlement.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=1600',
    year: '2026',
    category: 'Fintech / Enterprise Platform',
  },
];

interface PortfolioProps {
  onNavigate?: (page: string) => void;
}

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [progressPercent, setProgressPercent] = useState(20);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    if (getReducedMotion()) {
      return;
    }

    const calcDistance = () => {
      const totalWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const extraOffset = viewportWidth <= 800 ? 40 : 160;
      return Math.max(100, totalWidth - viewportWidth + extraOffset);
    };

    const ctx = gsap.context(() => {
      const tween = gsap.to(track, {
        x: () => -calcDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.75,
          start: 'top top',
          end: () => `+=${calcDistance() * 1.15}`,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const prog = self.progress;
            setProgressPercent(Math.max(12, Math.min(100, prog * 100)));
            const currentIndex = Math.min(
              portfolioProjects.length,
              Math.max(1, Math.ceil(prog * portfolioProjects.length) || 1)
            );
            setActiveIndex(currentIndex);
          },
        },
      });

      // Subtle parallax & zoom on card images during horizontal scroll
      const images = track.querySelectorAll('.project-image-box img');
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 0.95 },
          {
            scale: 1.05,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              containerAnimation: tween,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          }
        );
      });
    }, section);

    const onResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', onResize);
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-pad portfolio portfolio-pinned-section" id="portfolio">
      <div className="portfolio-header-wrap">
        <div onClick={() => onNavigate?.('work')} style={{ cursor: 'pointer' }}>
          <span className="eyebrow">Selected work / 05</span>
          <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.85rem)', letterSpacing: '-0.035em', lineHeight: 1.02, fontWeight: 700, margin: '0.8rem 0 0' }}>
            <TextReveal>
              Made to be <em>remembered.</em>
            </TextReveal>
          </h2>
        </div>
        <div className="portfolio-counter" onClick={() => onNavigate?.('work')} style={{ cursor: 'pointer' }}>
          <span>
            0{activeIndex} / 0{portfolioProjects.length}
          </span>
          <div className="portfolio-progress-bar">
            <div
              className="portfolio-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="horizontal-track-container">
        <div ref={trackRef} className="horizontal-track">
          {portfolioProjects.map((project, i) => (
            <div
              key={project.title}
              className={`project-card-h project-${i}`}
            >
              <div className="project-image-box">
                <img src={project.img} alt={project.title} loading="lazy" />
              </div>
              <small>
                {project.num} — {project.tag}
              </small>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div style={{ marginTop: 'auto', paddingTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {project.category}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
