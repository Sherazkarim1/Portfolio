import { ArrowDown, ArrowUpRight, Check } from 'lucide-react'
import { HERO, PROFILE, SIDEBAR, SOCIALS, SPECIALITIES } from '../data/content'
import { Badge } from './ui/badge'

/* Brand marks are no longer shipped in lucide, so these two stay
   as the official glyphs while every other icon uses lucide. */
const BRAND_GLYPHS = {
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  github:
    'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0.315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  /* Upwork's "U" mark, drawn as a stroke so it matches the
     hairline weight of the lucide icons beside it. */
  upwork:
    'M2 6h4.4a3.6 3.6 0 1 0 0 7.2H6V6H2v6.4A9.6 9.6 0 0 0 11.6 22',
}

function SocialLinks({ className }) {
  return (
    <ul className={`flex items-center gap-2 ${className ?? ''}`}>
      {SOCIALS.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="group flex size-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-all duration-300 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill={social.icon === 'upwork' ? 'none' : 'currentColor'}
              stroke={social.icon === 'upwork' ? 'currentColor' : 'none'}
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d={BRAND_GLYPHS[social.icon]} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      {/* Single soft light source, kept low-contrast so it reads as
          depth rather than decoration. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] opacity-[0.55]"
        style={{
          background:
            'radial-gradient(60% 60% at 22% 40%, oklch(80% 0.17 125 / 0.10), transparent 70%)',
        }}
      />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-x-12 gap-y-14 px-6 pb-20 md:px-10 lg:grid-cols-12 lg:pb-28">
        {/* ---- Left: the statement ---- */}
        <div className="lg:col-span-6 lg:pr-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            <span className="label-micro text-muted-foreground">
              {HERO.eyebrow}
            </span>
          </div>

          <h1 className="mt-7 text-display text-balance">
            {HERO.heading[0]}
            <br />
            <span className="text-primary">{HERO.heading[1]}</span>
          </h1>

          <p className="mt-7 max-w-[46ch] text-lead text-muted-foreground">
            {HERO.subtext}
          </p>

          {/* Specialities — a compact keyword rail, not a cloud of pills */}
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {SPECIALITIES.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-caption text-muted-foreground"
              >
                <Check
                  className="size-3.5 shrink-0 text-primary"
                  strokeWidth={2.25}
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-body font-medium text-foreground"
            >
              <span className="relative">
                More about me
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-100 bg-primary transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:origin-left group-hover:scale-x-0" />
              </span>
              <ArrowUpRight
                className="size-4 text-primary transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </a>

            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2.5 text-caption text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-primary/50">
                <ArrowDown
                  className="size-3.5 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-y-0.5"
                  strokeWidth={1.75}
                />
              </span>
              Scroll
            </a>
          </div>
        </div>

        {/* ---- Centre: portrait, deliberately off-axis ---- */}
        <div className="order-first lg:order-none lg:col-span-3 lg:col-start-8">
          <figure className="relative mx-auto max-w-[300px] lg:mx-0 lg:ml-auto">
            {/* Registration mark — top + right only. A full rectangle would
                cut across the subject's shoulder, since the cutout fills the
                frame edge-to-edge where the old bordered photo contained it. */}
            <span
              aria-hidden="true"
              className="absolute -right-3 -top-3 hidden h-full w-full border-r border-t border-border/70 lg:block"
            />
            <img
              src="profile.png"
              alt="Sheraz Karim"
              width="500"
              height="620"
              className="relative w-full"
            />
            <figcaption className="relative mt-4 flex items-center justify-between border-t border-border pt-3">
              <span className="label-micro text-muted-foreground">
                {PROFILE.location}
              </span>
              <Badge variant="accent" size="sm">
                Available
              </Badge>
            </figcaption>
          </figure>
        </div>

        {/* ---- Right: editorial index of sidebars ---- */}
        <aside className="lg:col-span-3 lg:col-start-11">
          <div className="border-t border-border">
            {SIDEBAR.map((item) => (
              <div key={item.title} className="border-b border-border py-6">
                <h2 className="label-micro text-foreground">{item.title}</h2>
                <p className="mt-3 text-caption leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <a
                  href={item.href}
                  className="group mt-4 inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-foreground transition-colors duration-200 hover:text-primary"
                >
                  {item.cta}
                  <ArrowUpRight
                    className="size-3 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </a>
              </div>
            ))}

            <div className="py-6">
              <h2 className="label-micro text-foreground">Follow me</h2>
              <SocialLinks className="mt-4" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}