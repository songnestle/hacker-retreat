import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to #id when location includes a hash (e.g. footer / nav links to /#about).
 * Helps after client navigation when smooth scroll (Lenis) does not apply native hash scrolling.
 */
export default function HashScrollHandler() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.replace(/^#/, ''));
    if (!id) return;

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    scrollToTarget();
    const raf = requestAnimationFrame(scrollToTarget);
    const timer = window.setTimeout(scrollToTarget, 80);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [pathname, hash]);

  return null;
}
