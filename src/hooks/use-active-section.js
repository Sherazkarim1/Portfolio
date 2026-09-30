import { useEffect, useState } from 'react'

/**
 * Scroll-spy hook. Replaces the original window scroll listener
 * but preserves identical behaviour: marks the nav link whose
 * section occupies the viewport band ~100px below the top.
 */
export function useActiveSection(ids, offset = 100) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    function onScroll() {
      const probe = window.scrollY + offset
      let current = ids[0]

      for (const id of ids) {
        const section = document.getElementById(id)
        if (!section) continue
        if (probe >= section.offsetTop && probe < section.offsetTop + section.offsetHeight) {
          current = id
        }
      }

      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}