import { SectionHeading } from './SectionHeading'

const placeholders = [
  { span: 'md:col-span-2', accent: 'from-accent/15' },
  { span: '', accent: 'from-white/[0.06]' },
  { span: '', accent: 'from-white/[0.06]' },
  { span: 'md:col-span-2', accent: 'from-white/10' },
]

function SkeletonLine({ className }: { className: string }) {
  return (
    <div
      className={`h-3 animate-shimmer rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.04)_100%)] bg-[length:200%_100%] ${className}`}
    />
  )
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="01 / Projects"
          title="Selected work"
          description="New projects are in the works. Check back soon — or follow along on GitHub in the meantime."
        />

        <div className="relative mt-10">
          <div className="grid gap-4 md:grid-cols-3" aria-hidden="true">
            {placeholders.map((card, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/40 p-6 ${card.span} ${i > 1 ? 'hidden md:block' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} to-transparent opacity-60`} />
                <div className="relative">
                  <div className="h-32 rounded-2xl border border-white/5 bg-white/[0.02]" />
                  <SkeletonLine className="mt-6 w-1/3" />
                  <SkeletonLine className="mt-3 w-2/3" />
                  <SkeletonLine className="mt-2 w-1/2" />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="max-w-sm rounded-3xl border border-white/10 bg-neutral-950/80 p-8 text-center shadow-2xl shadow-accent/10 backdrop-blur-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent uppercase">
                Coming soon
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-white">Something's being built</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                I'm putting together a fresh set of projects to showcase here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
