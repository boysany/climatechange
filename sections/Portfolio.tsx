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
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=82&w=1200',
    liveUrl: 'https://hireprofessional.vercel.app/',
    year: '2025',
    category: 'Talent / Web Platform',
  },
  {
    num: '02',
    tag: 'Legal Platform',
    title: 'Legal Website',
    desc: 'A clear, trustworthy legal services website designed for discovery, education, and qualified inquiries.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=82&w=1200',
    liveUrl: 'https://legal-jz4g.vercel.app/',
    year: '2026',
    category: 'Legal / Web',
  },
  {
    num: '03',
    tag: 'DeFi & Web3',
    title: 'Swap Platform',
    desc: 'A live exchange interface designed around clear asset discovery, confident transaction flow, and real-time market context.',
    img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=82&w=1200',
    liveUrl: 'https://swap-zeta.vercel.app/',
    year: '2026',
    category: 'DeFi / Web3 Product',
  },
  {
    num: '04',
    tag: 'Fintech Exchange',
    title: 'CC Exchange',
    desc: 'A focused digital exchange experience with clear market context and accessible account workflows.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=82&w=1200',
    liveUrl: 'https://ccexchange.vercel.app/',
    year: '2026',
    category: 'Fintech / Exchange',
  },
  {
    num: '05',
    tag: 'EdTech System',
    title: 'School Management',
    desc: 'An all-in-one institutional management portal orchestrating student grading, attendance telemetry, faculty scheduling, and parent communication.',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=82&w=1200',
    liveUrl: 'https://schoolmangment.vercel.app/',
    year: '2025',
    category: 'EdTech / Dashboard',
  },
  {
    num: '06',
    tag: 'Fintech Wallet',
    title: 'TP Wallet',
    desc: 'A digital wallet experience built around simple financial actions and trustworthy information design.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=82&w=1200',
    liveUrl: 'https://tpwallet.vercel.app/',
    year: '2026',
    category: 'Fintech / Wallet',
  },
  {
    num: '07',
    tag: 'Translation AI',
    title: 'AI Translate',
    desc: 'An approachable translation product designed for fast, direct multilingual workflows.',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=82&w=1200',
    liveUrl: 'https://aitraslate.vercel.app/',
    year: '2026',
    category: 'AI / Language',
  },
  {
    num: '08',
    tag: 'Commerce',
    title: 'GShop',
    desc: 'A storefront experience balancing product discovery, visual merchandising, and a smooth shopping journey.',
    img: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=82&w=1200',
    liveUrl: 'https://gshop-gamma.vercel.app/',
    year: '2026',
    category: 'E-Commerce / Growth',
  },
  {
    num: '09',
    tag: 'Digital Product',
    title: 'Zenith',
    desc: 'A polished digital product experience with a strong visual identity and focused navigation.',
    img: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=82&w=1200',
    liveUrl: 'https://zenith-gules-seven.vercel.app/',
    year: '2026',
    category: 'Product / Web',
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
              role="link"
              tabIndex={0}
              onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <a
                className="project-image-box"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} live site`}
                onClick={(event) => event.stopPropagation()}
              >
                <img
                  src={project.img}
                  alt={`${project.title} software preview`}
                  loading={i < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  onError={(event) => {
                    const image = event.currentTarget;
                    if (image.dataset.fallbackApplied) return;
                    image.dataset.fallbackApplied = 'true';
                    image.src = 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=1200';
                  }}
                />
                <span className="project-live-badge">Live site <ArrowUpRight size={14} /></span>
              </a>
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
