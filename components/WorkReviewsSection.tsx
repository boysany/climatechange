import React, { useState, useEffect, useRef } from 'react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CheckCircle2,
  Award,
  Sparkles,
} from 'lucide-react';

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  metric: string;
  project: string;
  quote: string;
  verifiedSource: string;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'David Vance',
    role: 'Chief Technology Officer',
    company: 'Global Talent Platforms',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    metric: '4.2x Faster Onboarding',
    project: 'Algorithmic Skill Graph & Portal',
    quote:
      'CCDL transformed our complex product architecture into a seamless, high-speed experience. Their attention to detail, modular component design, and design-to-code velocity are unmatched across our global tech partners.',
    verifiedSource: 'Clutch Verified Review',
  },
  {
    id: 'rev-2',
    name: 'Elena Rostova',
    role: 'VP of Engineering',
    company: 'QuantumFin Protocol',
    location: 'Zurich, Switzerland',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    metric: '$450M+ Volume Processed',
    project: 'Real-time DeFi Telemetry & Trading Engine',
    quote:
      'The institutional trading interface CCDL engineered for us passed strict SOC2 audits with zero defects. They delivered ultra-low latency charts and rock-solid state management under peak network volatility.',
    verifiedSource: 'Gartner Peer Insights',
  },
  {
    id: 'rev-3',
    name: 'Marcus Sterling',
    role: 'Founder & CEO',
    company: 'Apex Logistics SaaS',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    metric: '99.99% Uptime SLA',
    project: 'Multi-Tenant Fleet Optimization Platform',
    quote:
      'From discovery sprint to global deployment, CCDL exceeded every milestone. Our enterprise customers constantly praise the snappy UX and effortless dark-mode telemetry workflows.',
    verifiedSource: 'Clutch Global Leader',
  },
  {
    id: 'rev-4',
    name: 'Priya Sundaram',
    role: 'Head of Product',
    company: 'MedPulse AI Systems',
    location: 'Boston, MA',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    metric: '-68% Query Latency',
    project: 'Clinical Intelligence Dashboard',
    quote:
      'Their senior engineering depth in React, Tailwind, and scalable backend orchestration allowed us to compress a 9-month roadmap into 14 weeks. The UI craftsmanship and polish are truly world-class.',
    verifiedSource: 'G2 Enterprise Verified',
  },
  {
    id: 'rev-5',
    name: 'Alexander Lindqvist',
    role: 'Chief Architect',
    company: 'Nordik CleanTech Labs',
    location: 'Stockholm, Sweden',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    metric: '400k+ IoT Nodes',
    project: 'Carbon Emissions Telemetry Platform',
    quote:
      'CCDL doesn’t just write clean code; they grasp domain complexity immediately. The energy telemetry visualization portal they delivered is our single highest-converting sales asset.',
    verifiedSource: 'Clutch Verified Review',
  },
  {
    id: 'rev-6',
    name: 'Siddharth Mehta',
    role: 'Co-Founder & Managing Partner',
    company: 'Horizon Venture Studio',
    location: 'Singapore',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    metric: '12-Day Turnaround to MVP',
    project: 'Enterprise Deal-Flow Orchestrator',
    quote:
      'Fast, disciplined, and uncompromisingly high quality. CCDL is our secret weapon for engineering category-defining digital products that scale smoothly from day one.',
    verifiedSource: 'Clutch Verified Review',
  },
];

export const WorkReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const total = REVIEWS_DATA.length;
  const timerRef = useRef<number | null>(null);
  const intervalMs = 5000;
  const stepMs = 50;

  // Auto-scroll ticker effect
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % total);
          return 0;
        }
        return prev + (stepMs / intervalMs) * 100;
      });
    }, stepMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((idx) => (idx - 1 + total) % total);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((idx) => (idx + 1) % total);
    setProgress(0);
  };

  const current = REVIEWS_DATA[currentIndex];

  return (
    <div
      className="work-reviews-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      id="work-client-reviews"
    >
      {/* Top Header Bar */}
      <div className="work-reviews-topbar">
        <div className="work-reviews-badge">
          <Award size={14} className="badge-icon" />
          <span>VERIFIED CLIENT REVIEWS & ENDORSEMENTS</span>
        </div>

        <div className="work-reviews-controls">
          <div className="work-reviews-status-pill">
            <span
              className={`status-pulse ${isPaused ? 'is-paused' : 'is-running'}`}
            />
            <span className="status-label">
              {isPaused ? 'Paused' : 'Auto-Scroll Active'}
            </span>
          </div>

          <button
            type="button"
            className="ctrl-icon-btn"
            onClick={() => setIsPaused((p) => !p)}
            title={isPaused ? 'Resume Auto-Scroll' : 'Pause Auto-Scroll'}
            aria-label={isPaused ? 'Resume Auto-Scroll' : 'Pause Auto-Scroll'}
          >
            {isPaused ? <Play size={13} /> : <Pause size={13} />}
          </button>

          <button
            type="button"
            className="ctrl-icon-btn"
            onClick={handlePrev}
            title="Previous Review"
            aria-label="Previous Review"
          >
            <ChevronLeft size={15} />
          </button>

          <button
            type="button"
            className="ctrl-icon-btn"
            onClick={handleNext}
            title="Next Review"
            aria-label="Next Review"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {/* Main Review Card Banner */}
      <div className="work-review-featured-card">
        {/* Animated Progress Line */}
        <div className="review-progress-track">
          <div
            className="review-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="work-review-grid">
          {/* Left: Quote & Details */}
          <div className="work-review-content">
            <div className="work-review-meta-line">
              <div className="review-stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#eab308"
                    color="#eab308"
                    className="review-star"
                  />
                ))}
                <span className="review-rating-number">5.0</span>
              </div>
              <span className="review-source-tag">
                <CheckCircle2 size={12} />
                {current.verifiedSource}
              </span>
              <span className="review-metric-pill">
                <Sparkles size={11} />
                {current.metric}
              </span>
            </div>

            <div className="work-review-quote-wrapper">
              <span className="quote-mark-large">“</span>
              <p className="work-review-quote-text">{current.quote}</p>
            </div>

            <div className="work-review-author-wrap">
              <img
                src={current.avatar}
                alt={current.name}
                className="review-author-avatar"
                loading="lazy"
              />
              <div className="review-author-info">
                <h4 className="review-author-name">{current.name}</h4>
                <p className="review-author-role">
                  <strong>{current.role}</strong> • {current.company}
                </p>
                <span className="review-author-loc">{current.location}</span>
              </div>
            </div>
          </div>

          {/* Right: Clutch Trust Pillar */}
          <div className="work-review-score-pillar">
            <div className="score-pillar-top">
              <span className="score-pillar-val">4.98</span>
              <span className="score-pillar-max">/ 5.0</span>
            </div>
            <div className="score-pillar-stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  fill="#eab308"
                  color="#eab308"
                />
              ))}
            </div>
            <span className="score-pillar-badge">★ CLUTCH VERIFIED</span>
            <p className="score-pillar-caption">
              52+ Completed Enterprise Deployments with 100% On-Time SLA Record
            </p>
            <div className="score-pillar-item">
              <span className="metric-lbl">Architecture Quality</span>
              <span className="metric-val">100%</span>
            </div>
            <div className="score-pillar-item">
              <span className="metric-lbl">Design-to-Code Velocity</span>
              <span className="metric-val">5.0 / 5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-scrolling horizontal cards ribbon showing all 6 reviews */}
      <div className="work-reviews-ribbon-section">
        <div className="ribbon-header">
          <span className="ribbon-title">ALL CLIENT CASE REVIEWS ({total})</span>
          <div className="ribbon-indicators">
            {REVIEWS_DATA.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`ribbon-dot ${idx === currentIndex ? 'is-active' : ''}`}
                aria-label={`View review by ${item.name}`}
              />
            ))}
          </div>
        </div>

        {/* Continuous auto-scroll marquee / track */}
        <div className="reviews-marquee-outer">
          <div
            className={`reviews-marquee-track ${isPaused ? 'is-paused' : ''}`}
          >
            {/* Duplicated for seamless infinite loop */}
            {[...REVIEWS_DATA, ...REVIEWS_DATA].map((item, idx) => {
              const originalIndex = idx % total;
              const isActive = originalIndex === currentIndex;
              return (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={() => handleSelect(originalIndex)}
                  className={`review-ribbon-card ${isActive ? 'is-selected' : ''}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleSelect(originalIndex);
                    }
                  }}
                >
                  <div className="ribbon-card-header">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="ribbon-avatar"
                      loading="lazy"
                    />
                    <div className="ribbon-author-meta">
                      <strong className="ribbon-author-name">{item.name}</strong>
                      <span className="ribbon-company-name">{item.company}</span>
                    </div>
                    <span className="ribbon-metric-tag">{item.metric}</span>
                  </div>
                  <p className="ribbon-quote-snippet">
                    "{item.quote.slice(0, 85)}..."
                  </p>
                  <div className="ribbon-card-footer">
                    <div className="ribbon-stars">
                      {[...Array(5)].map((_, s) => (
                        <Star
                          key={s}
                          size={11}
                          fill="#eab308"
                          color="#eab308"
                        />
                      ))}
                    </div>
                    <span className="ribbon-view-link">
                      {isActive ? 'Currently Viewing' : 'Read Full Review →'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkReviewsSection;
