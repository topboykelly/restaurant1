import { Link } from "react-router-dom";
import { footerLinks, site } from "@/lib/content";
import { Wordmark } from "@/components/Wordmark";

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-14">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Link to="/" className="inline-block">
              <Wordmark size="footer" />
            </Link>
            <p className="mt-3 text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">
              {site.footerTagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={
                  "hash" in link && link.hash
                    ? { pathname: link.to, hash: link.hash }
                    : link.to
                }
                className="text-[0.68rem] font-semibold tracking-[0.16em] text-white/70 uppercase transition hover:text-[var(--color-lime)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mb-8 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 transition hover:text-[var(--color-lime)]"
            >
              <InstagramIcon />
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white/70 transition hover:text-[var(--color-lime)]"
            >
              <WhatsAppIcon />
            </a>
          </div>
          <p className="text-sm text-white/45">{site.address}</p>
        </div>

        <p className="text-[0.65rem] tracking-[0.12em] text-white/35 uppercase">
          © {new Date().getFullYear()} Baguette Sub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.92.52 3.72 1.44 5.28L2 22l5.05-1.55a9.86 9.86 0 0 0 4.99 1.34h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2zm5.75 13.96c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.2-4.93-4.39-.14-.2-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35h.55c.17 0 .4-.07.63.48.24.56.81 1.98.88 2.12.07.14.12.31.02.5-.1.2-.15.31-.3.48-.15.17-.31.37-.44.5-.15.14-.3.3-.13.58.17.28.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.14.46.12.63-.07.17-.2.74-.86.94-1.15.2-.29.4-.24.67-.14.28.1 1.75.83 2.05.98.3.15.5.22.57.34.08.13.08.74-.16 1.42z" />
    </svg>
  );
}
