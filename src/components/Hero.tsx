import { Link } from "react-router-dom";
import { images, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-screen relative flex w-full items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={images.hero}
          aria-label="BaguetteSub restaurant atmosphere"
        >
          <source src={images.heroVideo} type="video/mp4" />
        </video>
        {/* Lighter scrims so food stays sharp while text remains readable */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,10,6,0.72)_0%,rgba(8,10,6,0.42)_38%,rgba(8,10,6,0.12)_62%,rgba(8,10,6,0.04)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
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

        <div className="mt-8 flex w-full justify-center sm:mt-10 md:mt-12 md:justify-end">
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
