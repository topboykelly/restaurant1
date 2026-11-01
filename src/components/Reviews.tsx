import { useState, type FormEvent } from "react";
import { reviewCopy, whatsappReviewUrl } from "@/lib/content";

export function Reviews() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedComment = comment.trim();
    if (!trimmedName || !trimmedComment || rating === null) return;

    window.open(
      whatsappReviewUrl({
        name: trimmedName,
        rating,
        comment: trimmedComment,
      }),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section
      id="reviews"
      className="border-t border-[var(--color-ink)]/8 bg-[var(--color-cream)] pt-14 pb-6 text-[var(--color-ink)] md:pt-20 md:pb-8"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-start md:gap-14 md:px-8">
        <div className="text-center md:text-left">
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-[var(--color-forest)] uppercase">
            {reviewCopy.eyebrow}
          </p>
          <h2 className="mb-4 font-display text-2xl font-extrabold leading-[1.15] tracking-tight text-balance uppercase sm:text-3xl md:text-4xl">
            {reviewCopy.headline}
          </h2>
          <p className="mx-auto max-w-md text-base leading-relaxed text-[var(--color-ink-muted)] md:mx-0">
            {reviewCopy.body}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto w-full max-w-lg space-y-5 md:mx-0"
        >
          <label className="block text-left">
            <span className="mb-2 block text-[0.65rem] font-semibold tracking-[0.16em] text-[var(--color-ink-muted)] uppercase">
              Your name
            </span>
            <input
              type="text"
              name="name"
              required
              maxLength={80}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-[var(--color-ink)]/15 bg-white px-4 py-3 text-base text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-ink-muted)]/50 focus:border-[var(--color-forest)]"
              placeholder="e.g. Ama"
              autoComplete="name"
            />
          </label>

          <fieldset className="text-left">
            <legend className="mb-2 block text-[0.65rem] font-semibold tracking-[0.16em] text-[var(--color-ink-muted)] uppercase">
              Rating
            </legend>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((value) => {
                const selected = rating !== null && rating >= value;
                return (
                  <button
                    key={value}
                    type="button"
                    aria-label={`${value} star${value === 1 ? "" : "s"}`}
                    aria-pressed={rating === value}
                    onClick={() => setRating(value)}
                    className={`h-11 min-w-11 rounded-full border px-3 text-sm font-semibold transition ${
                      selected
                        ? "border-[var(--color-lime)] bg-[var(--color-lime)] text-[var(--color-ink)]"
                        : "border-[var(--color-ink)]/15 bg-white text-[var(--color-ink-muted)] hover:border-[var(--color-ink)]/35"
                    }`}
                  >
                    ★ {value}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label className="block text-left">
            <span className="mb-2 block text-[0.65rem] font-semibold tracking-[0.16em] text-[var(--color-ink-muted)] uppercase">
              Your review
            </span>
            <textarea
              name="comment"
              required
              maxLength={800}
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full resize-y rounded-md border border-[var(--color-ink)]/15 bg-white px-4 py-3 text-base text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-ink-muted)]/50 focus:border-[var(--color-forest)]"
              placeholder="Food, service, atmosphere…"
            />
          </label>

          <button type="submit" className="btn w-full sm:w-auto">
            Send on WhatsApp
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
