import React, { useEffect, useRef, useState } from 'react';
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
    tag: 'Freelance & Talent',
    title: 'Hire Professional',
    desc: 'A complete platform for freelancers and enterprise professionals connecting vetted specialists with teams through automated matchmaking.',
    img: '/images/projects/hirepro.jpg',
    liveUrl: 'https://hireprofessional.vercel.app/',
    year: '2026',
    category: 'Talent / Web Platform',
  },
  {
    num: '02',
    tag: 'Crypto Spot Trading',
    title: 'CC Exchange',
    desc: 'An institutional crypto spot trading terminal with live order books, 180% reserve backing, and sub-millisecond execution matching.',
    img: '/images/projects/ccexchange.jpg',
    liveUrl: 'https://ccexchange.vercel.app/',
    year: '2026',
    category: 'Fintech / Exchange',
  },
  {
    num: '03',
    tag: 'DeFi & Web3',
    title: 'Urmi Swap',
    desc: 'A polished decentralized exchange experience designed around clear asset discovery, confident transaction flow, and real-time market context.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qynMwPc3KOW4ELNNfQHQXjzKtWfxrE.png',
    liveUrl: 'https://swap-zeta.vercel.app/',
    year: '2026',
    category: 'DeFi / Web3 Product',
  },
  {
    num: '04',
    tag: 'EdTech System',
    title: 'SchoolPro Academy',
    desc: 'Smart school management made intelligent, fast and unified with integrated student, faculty, and executive administrative portals.',
    img: '/images/projects/schoolpro.jpg',
    liveUrl: 'https://schoolmangment.vercel.app/',
    year: '2026',
    category: 'EdTech / Dashboard',
  },
  {
    num: '05',
    tag: 'AI Health & Fitness',
    title: 'Zenith',
    desc: 'An AI-powered fitness and health tracking dashboard monitoring daily activity streaks, biometric telemetry, and real-time nutritional analysis.',
    img: '/images/projects/zenith.jpg',
    liveUrl: 'https://zenith-gules-seven.vercel.app/',
    year: '2026',
    category: 'HealthTech / AI',
  },
  {
    num: '06',
    tag: 'AI Translation',
    title: 'AITranslate',
    desc: 'Break language barriers with fast, accurate multi-language translation across text, documents, images, and live websites in 100+ languages.',
    img: '/images/projects/aitranslate.jpg',
    liveUrl: 'https://aitraslate.vercel.app/',
    year: '2026',
    category: 'AI / Language',
  },
  {
    num: '07',
    tag: 'Haute Fashion',
    title: 'Élan & Vogue',
    desc: 'A luxury haute couture editorial e-commerce experience showcasing seasonal collections, runway highlights, and refined visual merchandising.',
    img: '/images/projects/elan-vogue.jpg',
    liveUrl: 'https://gshop-gamma.vercel.app/',
    year: '2026',
    category: 'E-Commerce / Luxury',
  },
  {
    num: '08',
    tag: 'Crypto Trading',
    title: 'HEZAFX Trade',
    desc: 'A professional crypto trading platform built with bank-grade security, real-time portfolio tracking, and deep algorithmic trading charts.',
    img: '/images/projects/hezafx.jpg',
    liveUrl: 'https://tpwallet.vercel.app/',
    year: '2026',
    category: 'Fintech / Trading',
  },
  {
    num: '09',
    tag: 'Healthcare Platform',
    title: 'MedExpert',
    desc: 'A patient-first healthcare discovery portal connecting 500k+ patients with 150k+ verified doctors and instant digital appointments.',
    img: '/images/projects/medexpert.jpg',
    liveUrl: 'https://legal-jz4g.vercel.app/',
    year: '2026',
    category: 'Health / Medical',
  },
  {
    num: '10',
    tag: 'Food & Delivery',
    title: 'Aicafe',
    desc: 'An interactive food delivery platform crafted for rapid ordering, seasonal chef menus, live kitchen tracking, and seamless checkout.',
    img: '/images/projects/aicafe.jpg',
    liveUrl: 'https://hireprofessional.vercel.app/',
    year: '2026',
    category: 'FoodTech / Delivery',
  },
  {
    num: '11',
    tag: 'Talent Marketplace',
    title: 'Allstar',
    desc: 'An elite agency and talent marketplace empowering 1250+ firms to discover, hire, and manage top-tier creative and engineering specialists.',
    img: '/images/projects/allstar.jpg',
    liveUrl: 'https://legal-jz4g.vercel.app/',
    year: '2026',
    category: 'Talent / Enterprise',
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
