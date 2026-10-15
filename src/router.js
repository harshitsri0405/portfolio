import { useEffect, useState } from 'react'

// Tiny hash router, so the site works on Vercel/Netlify without any server setup.
//   #/projects/automock-ai  -> a page route
//   #about                  -> not a route: show the home page and scroll to that section
function read() {
  if (typeof window === 'undefined') return { path: '/', anchor: '' }
  const hash = window.location.hash.slice(1)
  if (hash.startsWith('/')) return { path: hash, anchor: '' }
  return { path: '/', anchor: hash }
}

export function useRoute() {
  const [route, setRoute] = useState(read)
  useEffect(() => {
    const onChange = () => setRoute(read())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}