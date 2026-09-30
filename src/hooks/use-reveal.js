import { useEffect, useRef, useState } from 'react'

/**
 * Reveal-on-scroll. Same IntersectionObserver behaviour as the
 * original script.js, but returns a ref instead of mutating
 * inline styles, so the animation is driven purely by CSS.
 */
export function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}