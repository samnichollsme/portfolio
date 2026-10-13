import { site } from '../data/site'
import { ArrowUpRightIcon } from './Icons'

export const Hero = () => {
  return (
    <section id="top" className="relative pt-36 pb-12 sm:pt-44 sm:pb-16">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h1 className="mt-8 animate-fade-up font-bold font-display text-5xl text-white tracking-tight [animation-delay:100ms] sm:text-7xl md:text-8xl">
          Hi, I'm Sam.
          <br />
          <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
            Thoughtful interfaces, built for <span className="text-accent">everyone.</span>
          </span>
        </h1>
        <p className="mt-8 max-w-xl animate-fade-up text-lg text-neutral-400 leading-relaxed [animation-delay:200ms] sm:text-xl">
          {site.role} focused on building intuitive and accessible web applications with React &amp; TypeScript.
        </p>
        <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:300ms]">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-neutral-950 text-sm transition hover:bg-neutral-200"
          >
            Get in touch
            <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-sm text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10"
          >
            View work
          </a>
        </div>
        <ul className="mt-12 flex animate-fade-up flex-wrap gap-2 [animation-delay:400ms]" aria-label="Skills">
          {site.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 font-mono text-neutral-400 text-xs"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
