import { site } from "@/lib/content";

export function Visit() {
  return (
    <section
      id="visit"
      className="bg-[var(--color-cream)] text-[var(--color-ink)]"
    >
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-20 md:px-8 md:pb-14 md:pt-28">
        <p className="mb-4 text-center text-xs font-semibold tracking-[0.22em] text-[var(--color-forest)] uppercase">
          Find us — Reserve — Connect
        </p>
        <h2 className="text-center font-display text-4xl font-extrabold tracking-tight uppercase md:text-5xl lg:text-6xl">
          Come find us
        </h2>
      </div>

      <div className="relative w-full border-y border-[var(--color-ink)]/10">
        <div className="relative h-[min(62vh,520px)] w-full min-h-[280px]">
          <iframe
            title="BaguetteSub Restaurant on Google Maps"
            src={site.mapsEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 bottom-4 z-10 rounded-sm bg-white px-3 py-2 text-xs font-semibold text-[var(--color-ink)] shadow-sm transition hover:bg-[var(--color-cream)]"
        >
          Open in Google Maps
        </a>
      </div>

      <div
        id="contact"
        className="bg-[var(--color-ink)] text-[var(--color-cream)]"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3 sm:gap-6 md:px-8 md:py-12">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-[var(--color-citrus)] uppercase">
              Address
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-cream-muted)] md:text-base">
              {site.address}
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              Get directions
            </a>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-[var(--color-citrus)] uppercase">
              Hours
            </p>
            <ul className="space-y-1.5 text-sm text-[var(--color-cream-muted)] md:text-base">
              {site.hours.map((row) => (
                <li key={row.days}>
                  <span className="text-white">{row.days}</span>
                  {": "}
                  {row.time}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-[var(--color-cream-muted)]/80">
              Demo hours — confirm when you visit.
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-[var(--color-citrus)] uppercase">
              Contact
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="block text-sm font-semibold text-white md:text-base"
            >
              {site.phoneDisplay}
            </a>
            <p className="mt-1 text-sm text-[var(--color-cream-muted)]">
              Call to reserve, takeout, or delivery.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-[var(--color-citrus)] underline-offset-4 hover:underline"
            >
              {site.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
