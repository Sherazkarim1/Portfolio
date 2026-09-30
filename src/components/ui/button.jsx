import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

/**
 * Bespoke button: restrained radii, mono eyebrow labels,
 * a hairline "lift" fill on hover rather than a colour swap.
 */
const buttonVariants = cva(
  [
    'relative inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'font-medium transition-all duration-200 ease-[var(--ease-out-expo)]',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    'active:translate-y-px',
  ].join(' '),
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground font-semibold hover:brightness-110 shadow-[0_1px_0_0_oklch(100%_0_0/0.18)_inset]',
        outline:
          'border border-border bg-transparent text-foreground hover:bg-muted hover:border-foreground/25',
        ghost: 'text-muted-foreground hover:text-foreground hover:bg-muted',
        link: 'text-primary underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm: 'h-9 px-3.5 text-caption rounded-sm',
        md: 'h-11 px-5 text-body rounded-md',
        lg: 'h-12 px-6 text-body rounded-md',
        icon: 'size-10 rounded-md',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
)

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? 'a' : 'button'
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export { Button, buttonVariants }