import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { images, site } from "@/lib/content";

const SLIDE_MS = 4500;

export function Hero() {
  const slides = images.heroSlides;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <section
      id="top"
      className="hero-screen relative flex w-full items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-out ${
              i === active ? "opacity-100 animate-ken-burns" : "opacity-0"
            }`}
            fetchPriority={i === 0 ? "high" : "low"}
            aria-hidden={i !== active}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(8,10,6,0.9)_0%,rgba(8,10,6,0.68)_40%,rgba(8,10,6,0.32)_68%,rgba(8,10,6,0.18)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-end px-6 pb-10 pt-32 sm:px-8 sm:pb-12 md:pb-20">
        <div className="mx-auto w-full max-w-xl animate-fade-up text-center md:mx-0 md:max-w-[32rem] md:text-left">
          <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--color-lime)] uppercase sm:mb-4 sm:text-xs">
            {site.tagline}
          </p>
          <h1 className="mb-3 font-display text-[clamp(1.75rem,5vw,3.25rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-balance text-white uppercase sm:mb-4">
            {site.heroHeadline}
          </h1>
          <p className="mx-auto mb-7 max-w-md text-[0.95rem] leading-relaxed text-white/80 sm:mb-8 sm:text-lg md:mx-0">
            {site.heroSupport}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link to="/menu" className="btn">
              Explore the menu
              <span aria-hidden="true">→</span>
            </Link>
            <a href="#visit" className="btn btn--ghost">
              Find us
            </a>
          </div>
        </div>

        <div className="mt-8 flex w-full flex-col items-center gap-4 sm:mt-10 md:mt-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2" aria-label="Hero image slides">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show hero image ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-[var(--color-lime)]"
                    : "w-1.5 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          <p className="flex items-center gap-2 text-[0.65rem] font-medium tracking-[0.16em] text-white/50 uppercase sm:text-[0.7rem]">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 shrink-0 text-[var(--color-lime)]"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
            </svg>
            {site.locationLine}
          </p>
        </div>
      </div>
    </section>
  );
}
