import { useEffect, useState } from 'react'

// Tiny hash router (#/models/chetak) so the site works on any static host
// without server rewrites. "#/#services" = home page + scroll to a section.
function parse() {
  const raw = window.location.hash.replace(/^#/, '') || '/'
  const [path, section] = raw.split('#')
  return { path: path || '/', section: section || null }
}

export function useRoute() {
  const [route, setRoute] = useState(parse)

  useEffect(() => {
    const onChange = () => setRoute(parse())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  useEffect(() => {
    if (route.section) {
      const t = setTimeout(() => {
        document.getElementById(route.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0 })
  }, [route.path, route.section])

  return route
}

export function Link({ to, children, ...props }) {
  return (
    <a href={`#${to}`} {...props}>
      {children}
    </a>
  )
}
