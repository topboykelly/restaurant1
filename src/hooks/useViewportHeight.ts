import { useLayoutEffect } from "react";

/**
 * Sets a stable --app-height for browsers without lvh.
 * Intentionally ignores visualViewport resize/scroll so the hero
 * does not jump when mobile browser chrome shows or hides.
 */
export function useViewportHeight() {
  useLayoutEffect(() => {
    if (typeof CSS !== "undefined" && CSS.supports("height", "100lvh")) {
      document.documentElement.style.removeProperty("--app-height");
      return;
    }

    const setHeight = () => {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`,
      );
    };

    setHeight();
    window.addEventListener("orientationchange", setHeight);
    return () => window.removeEventListener("orientationchange", setHeight);
  }, []);
}
