import { useLayoutEffect } from "react";

/** Keeps --app-height at least as tall as the visible mobile viewport. */
export function useViewportHeight() {
  useLayoutEffect(() => {
    const setHeight = () => {
      const visual = window.visualViewport?.height ?? 0;
      // Prefer the larger value so the next section never peeks under browser chrome.
      const height = Math.max(window.innerHeight, visual);
      document.documentElement.style.setProperty(
        "--app-height",
        `${Math.round(height)}px`,
      );
    };

    setHeight();
    window.addEventListener("resize", setHeight);
    window.visualViewport?.addEventListener("resize", setHeight);
    window.visualViewport?.addEventListener("scroll", setHeight);
    window.addEventListener("orientationchange", setHeight);

    return () => {
      window.removeEventListener("resize", setHeight);
      window.visualViewport?.removeEventListener("resize", setHeight);
      window.visualViewport?.removeEventListener("scroll", setHeight);
      window.removeEventListener("orientationchange", setHeight);
    };
  }, []);
}
