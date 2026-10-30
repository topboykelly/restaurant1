import { images, vibeCopy } from "@/lib/content";

export function Vibe() {
  return (
    <section id="story" className="bg-[var(--color-cream)] py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 text-center md:grid-cols-2 md:gap-16 md:px-8 md:text-left">
        <div className="mx-auto w-full min-w-0 max-w-xl md:mx-0">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[var(--color-forest)] uppercase">
            {vibeCopy.eyebrow}
          </p>
          <h2 className="mb-5 font-display text-2xl font-extrabold leading-[1.15] tracking-tight text-balance text-[var(--color-ink)] uppercase sm:text-3xl md:text-4xl">
            {vibeCopy.headline}
          </h2>
          <p className="mx-auto max-w-md text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg md:mx-0">
            {vibeCopy.body}
          </p>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full min-w-0 max-w-md overflow-hidden md:mx-0 md:max-w-none md:aspect-[5/6]">
          <img
            src={images.vibe}
            alt="Bright modern restaurant dining room"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[var(--color-forest)]/15 mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}
