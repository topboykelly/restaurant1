import { useEffect, useRef, useState } from "react";
import { menuItems, site } from "@/lib/content";

export function Menu() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
      ref={ref}
      className="bg-[var(--color-ink)] py-20 text-[var(--color-cream)] md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div
          className={`mb-12 max-w-xl transition duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[var(--color-citrus)] uppercase">
            Menu highlights
          </p>
          <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tight uppercase md:text-5xl">
            What we&apos;re known for
          </h2>
          <p className="text-[var(--color-cream-muted)]">
            A taste of the board — demo prices for this pitch site. Ask for
            today&apos;s full menu when you visit or message us.
          </p>
        </div>

        <ul className="divide-y divide-white/10 border-t border-white/10">
          {menuItems.map((item, i) => (
            <li
              key={item.name}
              className={`grid gap-2 py-6 transition duration-700 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: visible ? `${120 + i * 60}ms` : "0ms" }}
            >
              <div>
                <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold text-white md:text-xl">
                    {item.name}
                  </h3>
                  <span className="text-xs tracking-wide text-[var(--color-citrus)] uppercase">
                    {item.category}
                  </span>
                </div>
                <p className="max-w-xl text-[var(--color-cream-muted)]">
                  {item.description}
                </p>
              </div>
              <p className="font-display text-lg tracking-wide text-[var(--color-citrus)] sm:text-right">
                {item.price}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi BaguetteSub — I'd like to see today's menu / place an order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-sm bg-[var(--color-citrus)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-citrus-bright)]"
          >
            Ask for the full menu on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
