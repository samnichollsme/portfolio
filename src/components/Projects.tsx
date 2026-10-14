import { type Project, projects } from '../data/site'
import { ArrowUpRightIcon, GitHubIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

const NewTabHint = () => {
  return <span className="sr-only"> (opens in new tab)</span>
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/40 p-6 sm:p-8">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
      <div className="relative flex h-full flex-col">
        <ul
          aria-label={`${project.title} includes`}
          className="flex flex-wrap gap-2 rounded-2xl border border-white/5 bg-neutral-950/60 p-4"
        >
          {project.highlights.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-medium text-neutral-200 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mt-6 font-display font-semibold text-2xl text-white">{project.title}</h3>
        <p className="mt-3 text-neutral-400 leading-relaxed">{project.description}</p>

        <ul aria-label="Built with" className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 font-mono text-neutral-400 text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-semibold text-neutral-950 text-sm transition hover:bg-neutral-200"
          >
            {project.liveLabel}
            <span className="sr-only"> for {project.title}</span>
            <NewTabHint />
            <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-semibold text-sm text-white transition hover:border-white/20 hover:bg-white/10"
          >
            <GitHubIcon className="size-4" />
            Source
            <span className="sr-only"> code for {project.title}</span>
            <NewTabHint />
          </a>
        </div>
      </div>
    </article>
  )
}

const ComingSoonCard = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-white/10 border-dashed p-8 text-center">
      <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-semibold text-accent text-xs uppercase tracking-wide">
        Coming soon
      </span>
      <h3 className="mt-5 font-display font-semibold text-white text-xl">More on the way</h3>
      <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
        I'm working on more projects to showcase here. Check back soon.
      </p>
    </div>
  )
}

export const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="01 / Projects"
          title="Selected work"
          description="Things I've built, with more on the way."
        />

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <li key={project.title} className="md:col-span-2">
              <ProjectCard project={project} />
            </li>
          ))}
          <li>
            <ComingSoonCard />
          </li>
        </ul>
      </div>
    </section>
  )
}
