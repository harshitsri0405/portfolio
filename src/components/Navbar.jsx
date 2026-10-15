import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { navLinks, profile } from '../data/profile.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8"
      >
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-text">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-text">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resume} download className="btn btn-ghost !py-2.5 !text-sm">
              <Icon name="download" size={16} />
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-text md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-ink px-5 pb-5 pt-2 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base text-text"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href={profile.resume} download className="btn btn-primary">
              <Icon name="download" size={16} />
              Download resume
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
