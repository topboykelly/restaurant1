import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Visit" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-[var(--color-ink)]/95 text-[var(--color-cream)] backdrop-blur-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="group flex items-baseline gap-1">
          <span className="font-display text-2xl font-extrabold tracking-tight uppercase md:text-[1.65rem]">
            Baguette
          </span>
          <span className="font-script text-xl text-[var(--color-citrus)] md:text-2xl">
            Sub
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white/85 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi BaguetteSub — I'd like to place an order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-[var(--color-citrus)] px-4 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-citrus-bright)]"
          >
            Order via WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit rounded-sm bg-[var(--color-citrus)] px-4 py-2.5 text-sm font-semibold text-[var(--color-ink)]"
              onClick={() => setOpen(false)}
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
