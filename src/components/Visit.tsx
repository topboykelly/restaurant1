import { useState } from "react";
import { site, visitCopy } from "@/lib/content";

export function Visit() {
  const [mapActive, setMapActive] = useState(false);

  return (
    <section
      id="visit"
      className="bg-[var(--color-cream)] pt-6 pb-14 text-[var(--color-ink)] md:pt-8 md:pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 text-center md:grid-cols-3 md:gap-10 md:px-8 md:text-left lg:gap-14">
        <div className="flex min-w-0 flex-col justify-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-[var(--color-forest)] uppercase">
            {visitCopy.eyebrow}
          </p>
          <h2 className="mb-4 font-display text-2xl font-extrabold leading-[1.15] tracking-tight text-balance uppercase sm:text-3xl md:text-4xl">
            {visitCopy.headline}
          </h2>
          <p className="mx-auto mb-8 max-w-sm text-base leading-relaxed text-[var(--color-ink-muted)] md:mx-0">
            {visitCopy.body}
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap md:items-stretch">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Get directions
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi BaguetteSub — I'd like to place an order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              Order now
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div
          id="contact"
          className="relative min-h-[280px] overflow-hidden rounded-md border border-[var(--color-ink)]/10 bg-white md:min-h-[360px]"
          onMouseLeave={() => setMapActive(false)}
        >
          <iframe
            title="BaguetteSub Restaurant on Google Maps"
            src={site.mapsEmbedUrl}
            className={`absolute inset-0 h-full w-full border-0 ${
              mapActive ? "pointer-events-auto" : "pointer-events-none"
            }`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          {!mapActive && (
            <button
              type="button"
              aria-label="Activate map"
              className="absolute inset-0 z-10 cursor-pointer bg-transparent"
              onClick={() => setMapActive(true)}
              onTouchStart={() => setMapActive(true)}
            />
          )}
        </div>

        <div className="mx-auto flex w-full max-w-xs flex-col justify-center gap-7 md:mx-0 md:max-w-none">
          <div className="flex items-center gap-3">
            <ClockIcon />
            <div className="min-w-0 text-left">
              <p className="mb-1 text-xs font-semibold tracking-[0.16em] text-[var(--color-forest)] uppercase">
                Opening hours
              </p>
              <p className="text-sm text-[var(--color-ink-muted)] md:text-base">
                {site.hoursLabel}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <PhoneIcon />
            <div className="min-w-0 text-left">
              <p className="mb-1 text-xs font-semibold tracking-[0.16em] text-[var(--color-forest)] uppercase">
                Phone
              </p>
              <a
                href={`tel:${site.phoneTel}`}
                className="text-sm font-semibold text-[var(--color-ink)] transition hover:text-[var(--color-forest)] md:text-base"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <InstagramIcon />
            <div className="min-w-0 text-left">
              <p className="mb-1 text-xs font-semibold tracking-[0.16em] text-[var(--color-forest)] uppercase">
                Instagram
              </p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[var(--color-ink)] transition hover:text-[var(--color-forest)] md:text-base"
              >
                {site.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-[var(--color-forest)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-[var(--color-forest)]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-[var(--color-forest)]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.92.52 3.72 1.44 5.28L2 22l5.05-1.55a9.86 9.86 0 0 0 4.99 1.34h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2zm5.75 13.96c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.2-4.93-4.39-.14-.2-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35h.55c.17 0 .4-.07.63.48.24.56.81 1.98.88 2.12.07.14.12.31.02.5-.1.2-.15.31-.3.48-.15.17-.31.37-.44.5-.15.14-.3.3-.13.58.17.28.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.14.46.12.63-.07.17-.2.74-.86.94-1.15.2-.29.4-.24.67-.14.28.1 1.75.83 2.05.98.3.15.5.22.57.34.08.13.08.74-.16 1.42z" />
    </svg>
  );
}
