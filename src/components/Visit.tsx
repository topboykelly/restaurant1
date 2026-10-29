import { images, site } from "@/lib/content";

export function Visit() {
  return (
    <section
      id="visit"
      className="bg-[var(--color-cream)] py-20 text-[var(--color-ink)] md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[var(--color-forest)] uppercase">
            Visit
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight uppercase md:text-5xl">
            Find us in East Legon
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-sm font-semibold tracking-wide text-[var(--color-forest)] uppercase">
                Address
              </h3>
              <p className="text-lg">{site.address}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-[var(--color-forest)] underline-offset-4 hover:underline"
              >
                Open in Google Maps
              </a>
            </div>

            <div id="contact">
              <h3 className="mb-2 text-sm font-semibold tracking-wide text-[var(--color-forest)] uppercase">
                Contact
              </h3>
              <p className="text-lg">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="font-semibold hover:text-[var(--color-forest)]"
                >
                  {site.phoneDisplay}
                </a>
              </p>
              <p className="mt-1 text-[var(--color-ink-muted)]">
                Call for reservations, takeout, or delivery.
              </p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-[var(--color-forest)] underline-offset-4 hover:underline"
              >
                Instagram {site.instagramHandle}
              </a>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold tracking-wide text-[var(--color-forest)] uppercase">
                Hours
              </h3>
              <ul className="space-y-2">
                {site.hours.map((row) => (
                  <li
                    key={row.days}
                    className="flex max-w-sm justify-between gap-6 border-b border-[var(--color-ink)]/10 pb-2 text-[var(--color-ink-muted)]"
                  >
                    <span>{row.days}</span>
                    <span className="text-[var(--color-ink)]">{row.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-[var(--color-ink-muted)]">
                Hours shown are illustrative for this demo site.
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden md:min-h-full">
            <img
              src={images.plate}
              alt="Plated grilled meal with rice and salad"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-forest)]/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
