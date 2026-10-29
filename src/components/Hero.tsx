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
        <div className="w-full max-w-2xl animate-fade-up">
          <p className="mb-4 font-display text-[clamp(2.35rem,11.5vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-white uppercase sm:text-6xl sm:tracking-tight md:text-7xl lg:text-8xl">
            <span className="block w-full break-words">Baguette</span>
            <span className="font-script text-[0.72em] font-normal normal-case tracking-normal text-[var(--color-citrus)]">
              Sub
            </span>
          </p>
          <p className="mb-8 max-w-md text-base text-white/85 sm:text-lg md:text-xl">
            {site.tagline}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex justify-center rounded-sm bg-[var(--color-forest)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-forest-bright)] sm:justify-start"
            >
              Call {site.phoneDisplay}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-sm border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 sm:justify-start"
            >
              <span className="sm:hidden">Instagram</span>
              <span className="hidden sm:inline">
                Instagram {site.instagramHandle}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
