import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-ink)] py-8 text-[var(--color-cream)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-display text-lg font-extrabold tracking-tight uppercase">
          Baguette
          <span className="font-script text-[var(--color-citrus)] normal-case">
            {" "}
            Sub
          </span>
        </p>
        <div className="flex flex-wrap gap-5 text-sm text-[var(--color-cream-muted)]">
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
      <div className="mx-auto mt-6 max-w-6xl px-5 md:px-8">
        <p className="text-xs text-[var(--color-cream-muted)]">
          Demo marketing site — menu items and hours are illustrative
          placeholders, not an official listing.
        </p>
      </div>
    </footer>
  );
}
