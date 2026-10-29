import { images, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Grilled plates and warm restaurant atmosphere"
          className="absolute inset-0 h-full w-full object-cover object-center animate-ken-burns"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/55 to-[var(--color-forest)]/35" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-4 font-display text-[clamp(2.1rem,9.2vw,5.5rem)] font-extrabold leading-none tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block whitespace-nowrap">Baguette</span>
            <span className="block font-script text-[0.72em] font-normal normal-case tracking-normal text-[var(--color-citrus)]">
              Sub
            </span>
          </p>
          <p className="mb-8 max-w-md text-lg text-white/85 md:text-xl">
            {site.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="rounded-sm bg-[var(--color-forest)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-forest-bright)]"
            >
              Call {site.phoneDisplay}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Instagram {site.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
