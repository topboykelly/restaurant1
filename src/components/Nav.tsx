import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "@/lib/content";
import { Wordmark } from "@/components/Wordmark";

const links = [
  { to: "/menu", label: "Menu" },
  { to: "/", hash: "#story", label: "Our Story" },
  { to: "/", hash: "#gallery", label: "Gallery" },
  { to: "/", hash: "#reviews", label: "Reviews" },
  { to: "/", hash: "#contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";
  const solid = scrolled || open || !onHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-[var(--color-ink)]/95 text-white backdrop-blur-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8 md:py-4">
        <Link to="/" className="shrink-0">
          <Wordmark size="nav" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={linkHashTo(link, onHome)}
              className="text-[0.7rem] font-semibold tracking-[0.18em] text-white/85 uppercase transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="hidden h-5 w-px bg-white/25 lg:block" aria-hidden="true" />
          <a
            href={`tel:${site.phoneTel}`}
            aria-label={`Call ${site.phoneDisplay}`}
            className="text-white/85 transition hover:text-white"
          >
            <PhoneIcon />
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/85 transition hover:text-white"
          >
            <InstagramIcon />
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi BaguetteSub — I'd like to place an order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--sm"
          >
            Order now
          </a>
        </div>

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-[15.5px] w-[22px]" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-[3.5px] w-full rounded-full bg-current transition duration-300 ease-out ${
                open ? "top-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-[3.5px] w-full rounded-full bg-current transition duration-300 ease-out ${
                open ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-[3.5px] w-full rounded-full bg-current transition duration-300 ease-out ${
                open ? "top-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <div
            className={`border-t border-white/10 bg-[var(--color-ink)]/95 px-5 py-6 backdrop-blur-md transition duration-300 ease-out ${
              open
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-4">
              {!onHome && (
                <Link
                  to="/"
                  tabIndex={open ? 0 : -1}
                  className="text-sm font-semibold tracking-[0.14em] uppercase"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              )}
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={linkHashTo(link, onHome)}
                  tabIndex={open ? 0 : -1}
                  className="text-sm font-semibold tracking-[0.14em] uppercase"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="btn btn--sm mt-2 w-fit"
                onClick={() => setOpen(false)}
              >
                Order now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function linkHashTo(
  link: (typeof links)[number],
  onHome: boolean,
): string | { pathname: string; hash: string } {
  if (!("hash" in link) || !link.hash) return link.to;
  if (onHome) return link.hash;
  return { pathname: link.to, hash: link.hash };
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}
