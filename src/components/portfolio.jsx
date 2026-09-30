import { Star } from 'lucide-react'
import {
  HEADLINES,
  PORTFOLIO,
  REVIEWS_LEFT,
  REVIEWS_RIGHT,
} from '../data/content'

/**
 * Marquee rows. The original script duplicated each track's
 * innerHTML to make the -50% translate seamless; rendering the
 * array twice in JSX produces the identical loop without the
 * DOM mutation.
 */
function HeadlineRow() {
  return (
    <div className="pause-on-hover mask-edges overflow-hidden">
      <div className="flex w-max animate-[marquee_52s_linear_infinite] items-center gap-8 py-3.5">
        {[...HEADLINES, ...HEADLINES].map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-3">
            <span className="flex items-center gap-1.5">
              <Star
                className="size-3 fill-[var(--color-amber-rating)] text-[var(--color-amber-rating)]"
                strokeWidth={0}
              />
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-foreground">
                {item.title}
              </span>
            </span>
            <span className="text-caption text-muted-foreground">
              {item.body}
            </span>
            <span
              className="size-1 shrink-0 rounded-full bg-primary/60"
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  )
}

function RatingStars() {
  return (
    <span className="flex items-center gap-1" aria-label="5.0 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-3 fill-[var(--color-amber-rating)] text-[var(--color-amber-rating)]"
          strokeWidth={0}
        />
      ))}
      <span className="ml-1 font-mono text-[0.6875rem] text-muted-foreground">
        5.0
      </span>
    </span>
  )
}

function ReviewCard({ review }) {
  return (
    <article className="flex w-[min(420px,82vw)] shrink-0 flex-col rounded-lg border border-border bg-card p-5 transition-colors duration-300 hover:border-foreground/20">
      <div className="mb-3 flex items-start justify-between gap-3">
        <RatingStars />
        <span className="label-micro shrink-0 text-primary/80">
          {review.project}
        </span>
      </div>
      <blockquote className="flex-1 text-body leading-relaxed text-foreground/90">
        <p>&ldquo;{review.quote}&rdquo;</p>
      </blockquote>
      <footer className="mt-4 border-t border-border pt-3 font-mono text-[0.6875rem] tracking-wide text-muted-foreground">
        {review.client}
      </footer>
    </article>
  )
}

function ReviewRow({ reviews, reverse }) {
  return (
    <div className="pause-on-hover mask-edges overflow-hidden">
      <div
        className={`flex w-max gap-4 py-1 ${
          reverse
            ? 'animate-[marquee-reverse_70s_linear_infinite]'
            : 'animate-[marquee_62s_linear_infinite]'
        }`}
      >
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="border-t border-border bg-[oklch(13%_0.005_65)] py-[var(--spacing-section)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label-micro text-primary">{PORTFOLIO.tag}</span>
            <h2 className="mt-6 text-headline">{PORTFOLIO.heading}</h2>
          </div>
          <p className="max-w-[42ch] text-caption text-muted-foreground md:text-right">
            {PORTFOLIO.subtext}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="border-y border-border bg-background/40 py-0.5">
          <HeadlineRow />
        </div>
        <ReviewRow reviews={REVIEWS_LEFT} />
        <ReviewRow reviews={REVIEWS_RIGHT} reverse />
      </div>
    </section>
  )
}