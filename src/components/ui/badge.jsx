import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

/**
 * Badge tuned for project tags and platform names.
 * Squared-off, mono, low-contrast — a label, not a pill-shaped badge.
 */
const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-xs border font-mono uppercase tracking-[0.12em] transition-colors duration-200',
  {
    variants: {
      variant: {
        neutral: 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/25',
        accent: 'border-primary/30 bg-primary/10 text-primary',
        outline: 'border-foreground/20 text-foreground/80',
      },
      size: {
        sm: 'px-2 py-0.5 text-[0.625rem]',
        md: 'px-2.5 py-1 text-micro',
      },
    },
    defaultVariants: { variant: 'neutral', size: 'md' },
  }
)

function Badge({ className, variant, size, ...props }) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { Badge, badgeVariants }