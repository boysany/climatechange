import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getReducedMotion } from '../lib/animations.ts';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export type MarkerColor = 'yellow' | 'blue' | 'cyan' | 'emerald' | 'coral' | 'violet';

export interface MarkerHighlightProps {
  children: React.ReactNode;
  color?: MarkerColor;
  delay?: number;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export default function MarkerHighlight({
  children,
  color = 'yellow',
  delay = 0.1,
  className = '',
  as: Component = 'span',
  style,
}: MarkerHighlightProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const markerRef = useRef<HTMLSpanElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    const marker = markerRef.current;
    if (!el || !marker) return;

    if (getReducedMotion()) {
      setIsActive(true);
      return;
    }

    // Set initial marker scale
    gsap.set(marker, {
      scaleX: 0,
      transformOrigin: 'left center',
    });

    const triggerMarker = () => {
      setIsActive(true);
      gsap.to(marker, {
        scaleX: 1,
        duration: 0.75,
        delay,
        ease: 'power3.out',
      });
    };

    // If already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      triggerMarker();
      return;
    }

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: triggerMarker,
    });

    return () => {
      st.kill();
    };
  }, [delay]);

  const Tag = Component as any;

  return (
    <Tag
      ref={containerRef}
      className={`marker-highlight-wrapper marker-${color} ${isActive ? 'is-marked' : ''} ${className}`}
      style={style}
    >
      <span ref={markerRef} className="marker-stroke-bg" aria-hidden="true" />
      <span className="marker-content">{children}</span>
    </Tag>
  );
}
