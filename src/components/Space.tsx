import { images, spaceCopy } from "@/lib/content";

export function Space() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[var(--color-ink)] text-white"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-20 text-center md:grid-cols-2 md:gap-14 md:px-8 md:py-28 md:text-left">
        <div className="relative z-10 mx-auto w-full min-w-0 max-w-md md:mx-0">
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-[var(--color-lime)] uppercase">
            {spaceCopy.eyebrow}
          </p>
          <h2 className="mb-5 font-display text-2xl font-extrabold leading-[1.15] tracking-tight text-balance uppercase sm:text-3xl md:text-4xl">
            {spaceCopy.headline}
          </h2>
          <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-white/70 md:mx-0 md:text-lg">
            {spaceCopy.body}
          </p>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.16em] text-[var(--color-lime)] uppercase transition hover:text-[var(--color-lime-bright)]"
          >
            Explore the gallery
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="relative mx-auto min-h-[280px] w-full min-w-0 max-w-md overflow-hidden rounded-md md:mx-0 md:max-w-none md:min-h-[420px]">
          <img
            src={images.space}
            alt="BaguetteSub restaurant dining atmosphere"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/35 to-transparent" />
        </div>
      </div>
    </section>
  );
}
