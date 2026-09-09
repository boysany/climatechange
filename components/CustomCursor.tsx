import React, { useEffect, useState, useRef } from 'react';
import { motion as m, useSpring } from 'framer-motion';
import { getReducedMotion } from '../lib/animations.ts';

const motion = m as any;

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState('');
  const [cursorMode, setCursorMode] = useState<'default' | 'pointer' | 'view' | 'drag' | 'explore'>('default');
  const [isClicking, setIsClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Smooth spring physics for outer ring
  const ringX = useSpring(-100, { damping: 28, stiffness: 260, mass: 0.5 });
  const ringY = useSpring(-100, { damping: 28, stiffness: 260, mass: 0.5 });

  // Direct fast spring for center dot
  const dotX = useSpring(-100, { damping: 35, stiffness: 450, mass: 0.2 });
  const dotY = useSpring(-100, { damping: 35, stiffness: 450, mass: 0.2 });

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || getReducedMotion()) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest('[data-cursor]') as HTMLElement | null;
      const clickableEl = target.closest('a, button, [role="button"], input, select, textarea, .clickable') as HTMLElement | null;

      if (cursorEl) {
        const customLabel = cursorEl.getAttribute('data-cursor') || '';
        setLabel(customLabel);
        if (customLabel.toLowerCase().includes('view')) setCursorMode('view');
        else if (customLabel.toLowerCase().includes('drag')) setCursorMode('drag');
        else if (customLabel.toLowerCase().includes('explore')) setCursorMode('explore');
        else setCursorMode('pointer');
      } else if (clickableEl) {
        setLabel('');
        setCursorMode('pointer');
      } else {
        setLabel('');
        setCursorMode('default');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeaveDoc = () => setIsVisible(false);
    const handleMouseEnterDoc = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeaveDoc);
    document.addEventListener('mouseenter', handleMouseEnterDoc);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeaveDoc);
      document.removeEventListener('mouseenter', handleMouseEnterDoc);
    };
  }, [dotX, dotY, ringX, ringY]);

  if (isTouch) return null;

  const getRingSize = () => {
    if (label) return 76;
    if (cursorMode === 'pointer') return 48;
    return 34;
  };

  const ringSize = getRingSize();
  const halfRing = ringSize / 2;

  return (
    <>
      {/* Precision Center Dot */}
      <motion.div
        className={`cursor-precision-dot ${isVisible ? 'is-visible' : ''} ${cursorMode !== 'default' ? 'is-hover' : ''}`}
        style={{
          x: dotX,
          y: dotY,
          translateX: -3,
          translateY: -3,
        }}
      />

      {/* Smooth Outer Follower Aura */}
      <motion.div
        className={`cursor-fluid-ring cursor-mode-${cursorMode} ${isVisible ? 'is-visible' : ''} ${
          label ? 'has-label' : ''
        } ${isClicking ? 'is-clicking' : ''}`}
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: -halfRing,
          translateY: -halfRing,
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 280 }}
      >
        {label && <span className="cursor-label-text">{label}</span>}
      </motion.div>
    </>
  );
}
