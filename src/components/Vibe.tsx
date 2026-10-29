import { images, vibeCopy } from "@/lib/content";

export function Vibe() {
  return (
    <section className="bg-[var(--color-cream)] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[var(--color-forest)] uppercase">
            {vibeCopy.eyebrow}
          </p>
          <h2 className="mb-5 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] uppercase md:text-5xl">
            {vibeCopy.headline}
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-[var(--color-ink-muted)]">
            {vibeCopy.body}
          </p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
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
