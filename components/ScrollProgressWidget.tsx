import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { getReducedMotion } from '../lib/animations.ts';

export default function ScrollProgressWidget() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let ticking = false;

    const calculateScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollPercent(0);
        setIsVisible(false);
        return;
      }

      const currentScroll = window.scrollY;
      const progress = Math.min(100, Math.max(0, (currentScroll / docHeight) * 100));
      setScrollPercent(Math.round(progress));
      setIsVisible(currentScroll > 160);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    calculateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: getReducedMotion() ? 'auto' : 'smooth',
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div
      className={`scroll-progress-widget ${isVisible ? 'is-visible' : ''}`}
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`Scroll to top. Page progress ${scrollPercent}%`}
      data-cursor="TOP"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          scrollToTop();
        }
      }}
    >
      <svg className="scroll-progress-svg" width="44" height="44" viewBox="0 0 44 44">
        {/* Background track */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          className="scroll-track"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Animated Progress indicator */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          className="scroll-indicator-bar"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 22 22)"
        />
      </svg>

      <div className="scroll-progress-inner">
        {isHovered ? (
          <ArrowUp size={14} className="scroll-top-arrow" />
        ) : (
          <span className="scroll-percent-label">{scrollPercent}%</span>
        )}
      </div>
    </div>
  );
}
