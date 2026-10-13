import { type ComponentType, type SVGProps, useState } from 'react'
import { site } from '../data/site'
import { ArrowUpRightIcon, CheckIcon, CopyIcon, LinkedInIcon, MailIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

type Channel = {
  label: string
  handle: string
  href: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  glow: string
  external?: boolean
}

const channels: Channel[] = [
  {
    label: 'Email',
    handle: site.email,
    href: `mailto:${site.email}`,
    Icon: MailIcon,
    glow: 'group-hover:shadow-accent/25 group-hover:border-accent/40 group-hover:text-accent',
  },
  {
    label: 'LinkedIn',
    handle: 'Samuel Nicholls',
    href: site.socials.linkedin,
    Icon: LinkedInIcon,
    glow: 'group-hover:shadow-accent/25 group-hover:border-accent/40 group-hover:text-accent',
    external: true,
  },
]

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-neutral-300 text-sm transition hover:border-white/20 hover:bg-white/10 hover:text-white"
      >
        {copied ? <CheckIcon className="size-4 text-accent" /> : <CopyIcon className="size-4" />}
        {copied ? 'Copied!' : 'Copy email'}
      </button>
      <span role="status" className="sr-only">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </>
  )
}

export const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="02 / Contact"
            title="Let's work together"
            description="Have a project in mind, a role to discuss, or just want to say hello? My inbox is always open."
          />
          <CopyEmailButton />
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {channels.map(({ label, handle, href, Icon, glow, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external && { target: '_blank', rel: 'noreferrer' })}
                className="group relative flex h-full flex-col justify-between gap-10 overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:bg-neutral-900/70"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white shadow-lg shadow-transparent transition duration-300 ${glow}`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <ArrowUpRightIcon className="size-5 text-neutral-600 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>
                <div>
                  <p className="font-display font-semibold text-lg text-white">{label}</p>
                  <p className="mt-1 truncate text-neutral-400 text-sm">{handle}</p>
                  {external && <span className="sr-only"> (opens in new tab)</span>}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
