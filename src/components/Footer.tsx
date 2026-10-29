import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-ink)] py-12 text-[var(--color-cream)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight uppercase">
            Baguette
            <span className="font-script text-[var(--color-citrus)] normal-case">
              {" "}
              Sub
            </span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-[var(--color-cream-muted)]">
            {site.address}
            <br />
            <a href={`tel:${site.phoneTel}`} className="hover:text-white">
              {site.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm">
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-citrus)]"
          >
            WhatsApp
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-citrus)]"
          >
            Instagram
          </a>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-citrus)]"
          >
            Directions
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-5 md:px-8">
        <p className="text-xs text-[var(--color-cream-muted)]">
          Demo marketing site — menu items and hours are illustrative placeholders,
          not an official listing.
        </p>
      </div>
    </footer>
  );
}
