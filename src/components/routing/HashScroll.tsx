import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to hash targets after client-side navigations, and to top when
 * there is no hash. Native same-page anchors still work; scroll-margin-top
 * on targets accounts for the sticky header.
 */
function HashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const id = decodeURIComponent(hash.replace(/^#/, ''))
    const scrollToTarget = () => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
    }

    scrollToTarget()
    const frame = window.requestAnimationFrame(scrollToTarget)
    const timeout = window.setTimeout(scrollToTarget, 80)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timeout)
    }
  }, [pathname, hash])

  return null
}

export default HashScroll
