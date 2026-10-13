type SectionHeadingProps = {
  index: string
  title: string
  description: string
}

export const SectionHeading = ({ index, title, description }: SectionHeadingProps) => {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-accent text-sm">{index}</p>
      <h2 className="mt-3 font-bold font-display text-4xl text-white tracking-tight sm:text-5xl">{title}</h2>
      <p className="mt-4 text-lg text-neutral-400 leading-relaxed">{description}</p>
    </div>
  )
}
