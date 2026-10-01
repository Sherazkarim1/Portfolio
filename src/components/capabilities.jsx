import { ArrowUpRight } from 'lucide-react'
import { CAPABILITIES } from '../data/content'
import { useReveal } from '../hooks/use-reveal'

/**
 * Flat ruled index — deliberately not a grid of cards. Four service
 * areas on a single hairline baseline reads as a capability statement
 * rather than a pricing table.
 */
export function Capabilities() {
  const [ref, visible] = useReveal(0.1)

  return (
    <section
      id="capabilities"
      ref={ref}
      className="border-t border-border py-[var(--spacing-section)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div
          className={`grid grid-cols-1 gap-x-12 gap-y-10 transition-all duration-700 ease-[var(--ease-out-expo)] lg:grid-cols-12 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="lg:col-span-4">
            <span className="label-micro text-primary">/ Capabilities</span>
            <h2 className="mt-6 text-headline">
              What I build,
              <br />
              and what keeps it running
            </h2>
            <p className="mt-5 max-w-[38ch] text-caption text-muted-foreground">
              Four areas where I take systems from prototype to production —
              and stay on to operate them.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-border">
              {CAPABILITIES.map((capability) => (
                <article
                  key={capability.title}
                  className="group grid grid-cols-1 gap-x-8 gap-y-3 border-b border-border py-7 transition-colors duration-300 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-y-0"
                >
                  <h3 className="flex items-start gap-2 font-display text-[1.0625rem] font-medium leading-snug tracking-tight">
                    {capability.title}
                    <ArrowUpRight
                      className="mt-0.5 size-3.5 shrink-0 text-primary opacity-0 transition-all duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5 group-hover:opacity-100 sm:-translate-x-1 sm:group-hover:translate-x-0"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </h3>

                  <div>
                    <p className="text-caption leading-relaxed text-muted-foreground">
                      {capability.summary}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
                      {capability.stack.map((tech) => (
                        <li key={tech} className="label-micro text-foreground/70">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}