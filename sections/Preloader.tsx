import React, { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import CcdlLogo from '../components/CcdlLogo.tsx';

const motion = m as any;

interface PreloaderProps {
  isDark: boolean;
  onComplete?: () => void;
}

export default function Preloader({ isDark, onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const origBodyOverflow = document.body.style.overflow;
    const origDocOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const duration = 2000; // Fast & crisp 2.0s clean loading experience
    const startTime = performance.now();
    let completed = false;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easeOutCubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.min(100, Math.floor(easeProgress * 100));
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else if (!completed) {
        completed = true;
        window.setTimeout(() => {
          if (onComplete) {
            onComplete();
          }
        }, 250);
      }
    };

    const animFrame = requestAnimationFrame(updateCounter);
    return () => {
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = origBodyOverflow;
      document.documentElement.style.overflow = origDocOverflow;
    };
  }, [onComplete]);

  return (
    <motion.div
      className={`simple-preloader ${isDark ? 'is-dark' : 'is-light'}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      <div className="simple-preloader-content">
        {/* Clean Logo */}
        <motion.div
          className="simple-preloader-logo-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <CcdlLogo height={52} className="simple-preloader-logo" />
        </motion.div>

        {/* Minimal Studio Title */}
        <div className="simple-preloader-brand">
          <span className="simple-preloader-title">AGENCY</span>
        </div>

        {/* Sleek Minimal Progress Line */}
        <div className="simple-preloader-bar-wrap">
          <div
            className="simple-preloader-bar-fill"
            style={{ width: `${count}%` }}
          />
        </div>

        {/* Crisp Numeric Progress Counter */}
        <div className="simple-preloader-footer">
          <span className="simple-preloader-percent">{count}%</span>
        </div>
      </div>
    </motion.div>
  );
}
