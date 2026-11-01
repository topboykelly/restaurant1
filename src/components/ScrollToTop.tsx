import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SHOW_AFTER = 420;
const SCROLL_MS = 1100;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function scrollToTopSlow() {
  const start = window.scrollY;
  if (start <= 0) return;

  const startTime = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / SCROLL_MS, 1);
    window.scrollTo(0, start * (1 - easeInOutCubic(progress)));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTopSlow}
      className={`fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-lime)] text-[var(--color-ink)] shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition duration-300 ease-out hover:bg-[var(--color-lime-bright)] md:bottom-8 md:right-8 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
