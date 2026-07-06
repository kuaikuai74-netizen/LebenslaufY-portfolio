import { useEffect, useRef, useState } from 'react';
import { navItems, profile } from '../data/portfolio';

export default function Navbar() {
  const [activeHref, setActiveHref] = useState('#top');
  const [scrollProgress, setScrollProgress] = useState(0);
  const lockedHrefRef = useRef(null);
  const lockTimeoutRef = useRef(null);

  useEffect(() => {
    const updateNavigationState = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight <= 0 ? 0 : (window.scrollY / scrollableHeight) * 100;

      setScrollProgress(Math.min(100, Math.max(0, progress)));

      if (lockedHrefRef.current) {
        const targetSection = document.querySelector(lockedHrefRef.current);
        const targetTop = targetSection?.getBoundingClientRect().top ?? 0;

        if (targetTop > 16 || targetTop < -160) {
          setActiveHref(lockedHrefRef.current);
          return;
        }

        lockedHrefRef.current = null;
      }

      const sectionPositions = navItems
        .map((item) => {
          const section = document.querySelector(item.href);
          return section
            ? {
                ...item,
                top: section.getBoundingClientRect().top,
              }
            : null;
        })
        .filter(Boolean);
      const currentItem =
        sectionPositions
          .filter((item) => item.top <= 140)
          .sort((a, b) => b.top - a.top)[0] ?? sectionPositions[0];

      setActiveHref(currentItem?.href ?? '#top');
    };

    updateNavigationState();
    window.addEventListener('scroll', updateNavigationState, { passive: true });
    window.addEventListener('resize', updateNavigationState);

    return () => {
      window.clearTimeout(lockTimeoutRef.current);
      window.removeEventListener('scroll', updateNavigationState);
      window.removeEventListener('resize', updateNavigationState);
    };
  }, []);

  const handleNavigationClick = (href) => {
    lockedHrefRef.current = href;
    setActiveHref(href);
    window.clearTimeout(lockTimeoutRef.current);
    lockTimeoutRef.current = window.setTimeout(() => {
      lockedHrefRef.current = null;
    }, 1200);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/88 shadow-[0_12px_44px_rgba(31,41,40,0.045)] backdrop-blur-2xl">
      <div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-ink/70 transition-transform duration-300"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-10">
        <a href="#top" className="group inline-flex min-w-0 items-center gap-3">
          <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-white text-sm font-black text-ink shadow-glow transition group-hover:border-moss/35 group-hover:bg-mist/50">
            <span>AI</span>
            <span className="absolute -right-1 top-1 h-2 w-2 rounded-full bg-moss" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-wide text-ink sm:text-[0.95rem]">
              {profile.brand}
            </span>
            <span className="hidden text-[0.72rem] uppercase tracking-[0.16em] text-sage sm:block">
              AIGC Visual Designer
            </span>
          </span>
        </a>

        <div className="hidden items-center rounded-full border border-line bg-white/68 p-1 text-sm text-sage shadow-[0_12px_36px_rgba(31,41,40,0.045)] md:flex">
          {navItems.map((item) => (
            <a
              className={`rounded-full px-4 py-2 transition ${
                activeHref === item.href
                  ? 'bg-ink text-white shadow-[0_10px_28px_rgba(31,41,40,0.13)]'
                  : 'hover:bg-mist/65 hover:text-ink'
              }`}
              href={item.href}
              key={item.href}
              onClick={() => handleNavigationClick(item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-line bg-white/75 px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-moss/35 hover:bg-mist/60"
          href="#contact"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-moss transition group-hover:scale-125" aria-hidden="true" />
          联系合作
        </a>
      </nav>
    </header>
  );
}
