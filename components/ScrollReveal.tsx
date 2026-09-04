import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getReducedMotion } from '../lib/animations.ts';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => getReducedMotion());
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
  y?: number;
  duration?: number;
  scale?: number;
  key?: React.Key;
  role?: string;
  tabIndex?: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  as: Component = 'div',
  y = 32,
  duration = 0.85,
  scale = 0.98,
  role,
  tabIndex,
  onClick,
  onKeyDown,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (getReducedMotion()) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    gsap.set(el, {
      y,
      scale,
      opacity: 0,
      filter: 'blur(4px)',
    });

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          y: 0,
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration,
          delay: delay / 1000,
          ease: 'power3.out',
          clearProps: 'filter,scale',
        });
      },
    });

    return () => {
      st.kill();
    };
  }, [delay, y, duration, scale]);

  const Tag = Component as any;

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal-gsap ${className}`}
      role={role}
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </Tag>
  );
}

export function RevealWords({ children }: { children: string }) {
  return (
    <>
      {children.split(' ').map((word, index) => (
        <span
          className="reveal-word"
          style={{ transitionDelay: `${index * 40}ms` }}
          key={`${word}-${index}`}
        >
          {word}&nbsp;
        </span>
      ))}
    </>
  );
}
