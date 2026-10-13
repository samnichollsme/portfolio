import { site } from '../data/site'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-neutral-500 sm:flex-row">
        <p>
          © {year} {site.name}
        </p>
        <p>Built with React, TypeScript &amp; Tailwind.</p>
      </div>
    </footer>
  )
}
