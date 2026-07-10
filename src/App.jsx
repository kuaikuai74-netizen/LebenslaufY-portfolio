import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import LockScreen from './components/LockScreen';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Skills from './components/Skills';
import Works from './components/Works';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(
    () => window.sessionStorage.getItem('portfolio-unlocked') === 'true',
  );

  const handleUnlock = () => {
    window.sessionStorage.setItem('portfolio-unlocked', 'true');
    setIsUnlocked(true);
  };

  useEffect(() => {
    if (!isUnlocked) {
      return undefined;
    }

    const scrollToCurrentHash = () => {
      if (!window.location.hash) {
        return;
      }

      window.requestAnimationFrame(() => {
        document.querySelector(window.location.hash)?.scrollIntoView({
          block: 'start',
        });
      });
    };

    scrollToCurrentHash();
    window.addEventListener('hashchange', scrollToCurrentHash);

    return () => {
      window.removeEventListener('hashchange', scrollToCurrentHash);
    };
  }, [isUnlocked]);

  if (!isUnlocked) {
    return <LockScreen onUnlock={handleUnlock} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper pt-20 text-ink">
      <Navbar />
      <div className="portfolio-shell">
        <div className="page-glow" />
        <main>
          <Hero />
          <About />
          <Works />
          <Services />
          <Skills />
          <Contact />
        </main>
        <footer className="mx-auto max-w-7xl px-5 pb-10 pt-4 text-sm text-sage sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-3 border-t border-line pt-8 sm:flex-row">
            <span>AI Portfolio 2026</span>
            <span>AIGC Visual Design / Prompt Design / Digital Content</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
