import { Link } from "react-router-dom";
import { menuCategories } from "@/lib/content";

export function Menu() {
  return (
    <section
      id="menu"
      className="bg-[var(--color-ink)] pt-20 pb-10 text-white md:pt-28 md:pb-16"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 flex flex-col items-center gap-6 text-center sm:mb-14 sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-[var(--color-lime)] uppercase">
              Our menu
            </p>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-balance uppercase sm:text-3xl md:text-4xl">
              Fresh. Bold. Satisfying.
            </h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-white/80 uppercase transition hover:text-[var(--color-lime)]"
          >
            Explore full menu
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="group flex flex-col text-center sm:text-left"
            >
              <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-md">
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-1 font-display text-lg font-bold tracking-tight uppercase">
                {category.name}
              </h3>
              <p className="mb-4 text-sm text-white/55">{category.description}</p>
              <div className="mt-auto flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-white/90">
                  {category.priceFrom}
                </span>
                <span
                  aria-hidden="true"
                  className="text-[var(--color-lime)] transition group-hover:translate-x-0.5"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
