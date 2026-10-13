type SectionHeadingProps = {
  index: string
  title: string
  description: string
}

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-sm text-accent">{index}</p>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-relaxed text-neutral-400">{description}</p>
    </div>
  )
}
