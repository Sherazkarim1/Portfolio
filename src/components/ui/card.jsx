import { cn } from '../../lib/utils'

/**
 * Deliberately flat. Cards here are hairline-bordered surfaces,
 * not floating drop-shadow slabs — avoids the nested-card look.
 */
function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-card text-card-foreground',
        'transition-colors duration-300 ease-[var(--ease-out-expo)]',
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }) {
  return <div className={cn('flex flex-col gap-1.5 p-5', className)} {...props} />
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn('font-display text-headline tracking-tight', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }) {
  return <p className={cn('text-caption text-muted-foreground', className)} {...props} />
}

function CardContent({ className, ...props }) {
  return <div className={cn('p-5 pt-0', className)} {...props} />
}

function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn('flex items-center p-5 pt-0 text-caption', className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }