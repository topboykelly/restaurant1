import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to hash targets after client-side navigation (e.g. /#story). */
export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace(/^#/, "");
    const frame = window.requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);
}
