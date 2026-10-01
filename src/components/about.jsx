import { ABOUT } from '../data/content'
import { useReveal } from '../hooks/use-reveal'
import { Badge } from './ui/badge'

export function About() {
  const [ref, visible] = useReveal(0.15)

  return (
    <section
      id="about"
      ref={ref}
      className="border-t border-border py-[var(--spacing-section)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div
          className={`grid grid-cols-1 gap-x-12 gap-y-12 transition-all duration-700 ease-[var(--ease-out-expo)] lg:grid-cols-12 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="lg:col-span-7">
            <span className="label-micro text-primary">{ABOUT.tag}</span>
            <h2 className="mt-6 text-title">
              {ABOUT.heading[0]}
              <br />
              {ABOUT.heading[1]}
            </h2>
            <ul className="mt-7 flex flex-wrap gap-2">
              {ABOUT.badges.map((badge) => (
                <li key={badge}>
                  <Badge variant="outline" size="sm">
                    {badge}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats sit on one hairline baseline — no cards, no boxes */}
          <dl className="flex flex-col gap-10 lg:col-span-5 lg:justify-end">
            {ABOUT.stats.map((stat) => (
              <div
                key={stat.value}
                className="flex items-baseline gap-6 border-t border-border pt-5"
              >
                <dt className="sr-only">{stat.label.join(' ')}</dt>
                <dd className="flex items-baseline gap-6">
                  <span className="font-display text-[3.5rem] font-semibold leading-none tracking-tight text-primary tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-caption uppercase leading-snug tracking-wide text-muted-foreground">
                    {stat.label[0]}
                    <br />
                    {stat.label[1]}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}