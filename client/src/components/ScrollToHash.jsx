import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NAV_OFFSET = 96;
const RETRY_WINDOW_MS = 1500;
const RETRY_INTERVAL_MS = 150;

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const id = hash.slice(1);
    let cancelled = false;

    // The browser's own native fragment-scroll (triggered independently on
    // page load) respects `scroll-behavior: smooth` on <html> and animates
    // slowly, fighting with our own corrections below and landing in the
    // wrong place. Force instant scrolling for the duration of this effect.
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    const stopOnUserScroll = () => {
      cancelled = true;
    };
    window.addEventListener('wheel', stopOnUserScroll, { passive: true, once: true });
    window.addEventListener('touchmove', stopOnUserScroll, { passive: true, once: true });

    const start = Date.now();
    const tick = () => {
      if (cancelled) return;

      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top, behavior: 'auto' });
      }

      if (Date.now() - start < RETRY_WINDOW_MS) {
        window.setTimeout(tick, RETRY_INTERVAL_MS);
      } else {
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
      }
    };
    tick();

    return () => {
      cancelled = true;
      window.removeEventListener('wheel', stopOnUserScroll);
      window.removeEventListener('touchmove', stopOnUserScroll);
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, [hash, pathname]);

  return null;
}
