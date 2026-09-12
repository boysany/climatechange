import React, { useEffect, useState } from 'react';
import { motion as m, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import Preloader from './sections/Preloader.tsx';
import PageTransitionSplash from './components/PageTransitionSplash.tsx';
import Hero from './sections/Hero.tsx';
import About from './sections/About.tsx';
import Expertise from './sections/Expertise.tsx';
import Portfolio from './sections/Portfolio.tsx';
import Process from './sections/Process.tsx';
import WhyUs from './sections/WhyUs.tsx';
import CTA from './sections/CTA.tsx';
import Footer from './sections/Footer.tsx';
import CCDLPage from './pages/CCDLPage.tsx';
import { initLenis, destroyLenis, refreshScrollTriggers } from './lib/animations.ts';

const motion = m as any;

function getRoute() {
  const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
  return path || 'home';
}

export default function App() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      const hasLoaded = sessionStorage.getItem('ccdl_preloader_seen');
      if (hasLoaded) return false;
    }
    return true;
  });

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [route, setRoute] = useState(getRoute);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = initLenis();
    return () => {
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    if (loading) {
      const timer = window.setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('ccdl_preloader_seen', 'true');
        refreshScrollTriggers();
      }, 2000);
      return () => window.clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    const onPop = () => {
      const target = getRoute();
      setRoute(target);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      refreshScrollTriggers();
    };

    window.addEventListener('popstate', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const navigate = (page: string) => {
    const cleanCurrent = route.replace(/^\//, '').replace(/\/$/, '') || 'home';
    const cleanTarget = page.replace(/^\//, '').replace(/\/$/, '') || 'home';
    const path = cleanTarget === 'home' ? '/' : `/${cleanTarget}`;

    if (cleanCurrent !== cleanTarget || window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setRoute(cleanTarget);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      refreshScrollTriggers();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const internal = route !== 'home';

  return (
    <div className="site-shell">
      <CustomCursor />
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Full-Screen Initialization Loading Curtain (First visit only) */}
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader
            key="fullscreen-app-preloader"
            isDark={isDark}
            onComplete={() => {
              setLoading(false);
              sessionStorage.setItem('ccdl_preloader_seen', 'true');
              refreshScrollTriggers();
            }}
          />
        )}
      </AnimatePresence>

      <Navbar
        isDark={isDark}
        currentRoute={route}
        toggleTheme={() => setIsDark((v) => !v)}
        onNavigate={navigate}
      />
      <motion.div
        key={route}
        className="route-transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        style={{ transform: 'none' }}
      >
        <main>
          {internal ? (
            <CCDLPage pageId={route} onNavigate={navigate} />
          ) : (
            <>
              <Hero onNavigate={navigate} />
              <About onNavigate={navigate} />
              <Expertise onNavigate={navigate} />
              <Portfolio onNavigate={navigate} />
              <Process onNavigate={navigate} />
              <WhyUs onNavigate={navigate} />
              <CTA onNavigate={navigate} />
            </>
          )}
        </main>
      </motion.div>
      <Footer onNavigate={navigate} isDark={isDark} toggleTheme={() => setIsDark((v) => !v)} />
    </div>
  );
}
