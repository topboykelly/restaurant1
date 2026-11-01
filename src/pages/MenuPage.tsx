import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  menuSections,
  menuWelcome,
  site,
  whatsappOrderUrl,
} from "@/lib/content";

export function MenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[var(--color-ink)] text-white">
      <section className="relative overflow-hidden border-b border-white/10 pt-28 pb-14 md:pt-32 md:pb-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(200,240,0,0.18), transparent 55%), radial-gradient(ellipse 60% 50% at 90% 30%, rgba(232,163,23,0.12), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <p className="mb-3 text-center text-xs font-semibold tracking-[0.22em] text-[var(--color-lime)] uppercase md:text-left">
            Full menu
          </p>
          <h1 className="mb-6 text-center font-display text-[clamp(2.25rem,8vw,4.5rem)] font-extrabold leading-[1.02] tracking-tight uppercase md:text-left">
            The Baguette Sub menu
          </h1>
          <div className="mx-auto mb-8 max-w-2xl space-y-4 text-center text-[0.95rem] leading-relaxed text-white/65 md:mx-0 md:text-left md:text-base">
            {menuWelcome.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi BaguetteSub — I'd like to place an order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Order on WhatsApp
              <span aria-hidden="true">→</span>
            </a>
            <Link to="/" className="btn btn--ghost">
              Back home
            </Link>
          </div>
        </div>
      </section>

      <div className="sticky top-[3.75rem] z-40 border-b border-white/10 bg-[var(--color-ink)]/95 backdrop-blur-md md:top-[4.25rem]">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 [-ms-overflow-style:none] [scrollbar-width:none] md:px-8 [&::-webkit-scrollbar]:hidden">
          {menuSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.14em] text-white/70 uppercase transition hover:border-[var(--color-lime)]/50 hover:text-[var(--color-lime)]"
            >
              {section.name}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="flex flex-col gap-16 md:gap-20">
          {menuSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-36">
              <div className="mb-8 grid items-end gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,14rem)] md:gap-10">
                <div className="text-center md:text-left">
                  <h2 className="font-display text-2xl font-extrabold tracking-tight text-balance uppercase sm:text-3xl md:text-4xl">
                    {section.name}
                  </h2>
                  {section.note ? (
                    <p className="mt-3 inline-flex rounded-full bg-[var(--color-lime)]/15 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-[var(--color-lime)] uppercase">
                      {section.note}
                    </p>
                  ) : null}
                </div>
                <div className="relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-md md:mx-0 md:max-w-none">
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-10">
                {section.groups.map((group, groupIndex) => (
                  <div key={group.title ?? `${section.id}-${groupIndex}`}>
                    {group.title ? (
                      <h3 className="mb-4 text-center text-xs font-semibold tracking-[0.2em] text-[var(--color-citrus)] uppercase md:text-left">
                        {group.title}
                      </h3>
                    ) : null}
                    {group.note ? (
                      <p className="mb-4 text-center text-[0.65rem] font-semibold tracking-[0.14em] text-white/45 uppercase md:text-left">
                        {group.note}
                      </p>
                    ) : null}

                    <ul className="divide-y divide-white/10 border-y border-white/10">
                      {group.items.map((item) => (
                        <li
                          key={`${group.title ?? section.id}-${item.name}`}
                          className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-5"
                        >
                          <div className="min-w-0 text-center sm:text-left">
                            <h4 className="font-display text-base font-bold tracking-tight uppercase sm:text-lg">
                              {item.name}
                            </h4>
                            {item.description ? (
                              <p className="mt-1 text-sm leading-relaxed text-white/50">
                                {item.description}
                              </p>
                            ) : null}
                          </div>
                          <div className="flex shrink-0 items-center justify-center gap-3 sm:justify-end">
                            <p className="text-sm font-semibold tracking-wide text-[var(--color-lime)]">
                              {item.price}
                            </p>
                            <a
                              href={whatsappOrderUrl(item.name, item.price)}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Order ${item.name} on WhatsApp`}
                              className="text-lg leading-none text-white/70 transition hover:text-[var(--color-lime)]"
                            >
                              →
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 text-center md:mt-20 md:pt-12">
          <p className="mb-5 text-sm text-white/55">
            Ready to order? Message us on WhatsApp — we reply fast.
          </p>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi BaguetteSub — I'd like to place an order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Order now
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
