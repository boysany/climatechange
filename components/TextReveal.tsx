import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getReducedMotion } from '../lib/animations.ts';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TextRevealProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  triggerHook?: string;
  animateOnScroll?: boolean;
}

export default function TextReveal({
  children,
  as: Component = 'span',
  className = '',
  delay = 0,
  stagger = 0.038,
  duration = 0.85,
  triggerHook = 'top 88%',
  animateOnScroll = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (getReducedMotion()) {
      const words = el.querySelectorAll<HTMLElement>('.reveal-word-inner');
      words.forEach((w) => {
        w.style.opacity = '1';
        w.style.transform = 'none';
      });
      return;
    }

    const wordInners = el.querySelectorAll<HTMLElement>('.reveal-word-inner');
    if (!wordInners.length) return;

    gsap.set(wordInners, {
      yPercent: 110,
      opacity: 0,
      rotateX: 10,
      transformOrigin: '0% 50% -20px',
    });

    let st: ScrollTrigger | undefined;

    if (animateOnScroll) {
      st = ScrollTrigger.create({
        trigger: el,
        start: triggerHook,
        once: true,
        onEnter: () => {
          gsap.to(wordInners, {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration,
            stagger,
            delay,
            ease: 'power3.out',
            force3D: true,
          });
        },
      });
    } else {
      gsap.to(wordInners, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
        force3D: true,
      });
    }

    return () => {
      st?.kill();
    };
  }, [delay, stagger, duration, triggerHook, animateOnScroll]);

  // Recursively process nodes into masked words
  const renderFormattedChildren = (nodes: React.ReactNode): React.ReactNode => {
    if (typeof nodes === 'string') {
      return nodes.split(/(\s+)/).map((segment, i) => {
        if (/^\s+$/.test(segment)) {
          return segment;
        }
        return (
          <span
            key={i}
            className="reveal-word-wrap"
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'bottom',
              paddingBottom: '0.08em',
              marginBottom: '-0.08em',
            }}
          >
            <span
              className="reveal-word-inner"
              style={{ display: 'inline-block', willChange: 'transform, opacity' }}
            >
              {segment}
            </span>
          </span>
        );
      });
    }

    if (React.isValidElement(nodes)) {
      const element = nodes as React.ReactElement<any>;
      if (element.type === 'br') {
        return <br />;
      }
      return React.cloneElement(
        element,
        { ...element.props, key: element.key || Math.random() },
        renderFormattedChildren(element.props.children)
      );
    }

    if (Array.isArray(nodes)) {
      return nodes.map((child, idx) => (
        <React.Fragment key={idx}>{renderFormattedChildren(child)}</React.Fragment>
      ));
    }

    return nodes;
  };

  const Tag = Component as any;

  return (
    <Tag ref={containerRef} className={`text-reveal-container ${className}`}>
      {renderFormattedChildren(children)}
    </Tag>
  );
}
