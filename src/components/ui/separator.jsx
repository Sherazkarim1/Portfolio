import { cn } from '../../lib/utils'

/**
 * Hairline rule. Vertical variant used to divide editorial columns.
 */
function Separator({ className, orientation = 'horizontal', ...props }) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
}

export { Separator }