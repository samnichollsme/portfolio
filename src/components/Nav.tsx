import { useEffect, useState } from 'react'
import { site } from '../data/site'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'border-white/10 bg-neutral-950/70 shadow-black/20 shadow-lg backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="font-bold font-display text-lg text-white tracking-tight">
          SN<span className="text-accent">.</span>
          <span className="sr-only"> {site.name}, back to top</span>
        </a>
        <ul className="flex items-center gap-1 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
