import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { Button } from './ui/button'
import { useActiveSection } from '../hooks/use-active-section'

const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id))

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile sheet when the viewport grows past the breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    function onChange() {
      if (mq.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[var(--ease-out-expo)]',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-[72px] md:px-10">
        <a
          href="#home"
          className="group flex items-baseline gap-2 font-display text-[0.9375rem] font-semibold tracking-tight"
        >
          Sheraz Karim
          <span className="label-micro text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            / AI Systems
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? 'true' : undefined}
              className={cn(
                'relative rounded-sm px-3 py-2 text-caption font-medium transition-colors duration-200',
                active === item.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.label}
              <span
                className={cn(
                  'absolute inset-x-3 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-300 ease-[var(--ease-out-expo)]',
                  active === item.id ? 'scale-x-100' : 'scale-x-0'
                )}
              />
            </a>
          ))}

          <span className="mx-3 h-4 w-px bg-border" aria-hidden="true" />

          <a
            href="#portfolio"
            className="group inline-flex items-center gap-1.5 rounded-sm px-3 py-2 text-caption font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Pages
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </a>
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-4" strokeWidth={1.75} />
          ) : (
            <Menu className="size-4" strokeWidth={1.75} />
          )}
        </Button>
      </div>

      {/* Mobile navigation sheet */}
      <div
        className={cn(
          'overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-[var(--ease-out-expo)] md:hidden',
          open ? 'max-h-72 border-t opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col px-6 py-2" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                'border-b border-border/60 py-3.5 text-body transition-colors duration-200 last:border-0',
                active === item.id ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}