import { site } from '../data/site'
import { ArrowUpIcon } from './Icons'

const year = new Date().getFullYear()

export const Footer = () => {
  return (
    <footer className="border-white/5 border-t">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 text-neutral-400 text-sm">
        <p>
          © {year} {site.name}
        </p>
        <a href="#top" className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent">
          Back to top
          <ArrowUpIcon className="size-4 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  )
}
