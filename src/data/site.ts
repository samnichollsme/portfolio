export const site = {
  name: 'Sam Nicholls',
  role: 'Senior Front-End Engineer',
  location: 'England, UK',
  email: 'contact@samnicholls.me',
  socials: {
    linkedin: 'https://www.linkedin.com/in/sam-nicholls-576253133/',
    github: 'https://github.com/samnichollsme',
  },
  skills: ['React', 'TypeScript', 'Tailwind CSS', 'Accessibility', 'Design Systems'],
} as const

export type Project = {
  title: string
  description: string
  highlights: readonly string[]
  tags: readonly string[]
  liveUrl: string
  liveLabel: string
  sourceUrl: string
}

export const projects: readonly Project[] = [
  {
    title: 'Components',
    description:
      'A library of accessible React components built from scratch. Each one follows the WAI-ARIA Authoring Practices and is tested to WCAG 2.2 AA, with every story doubling as a browser test that drives it by keyboard and runs axe.',
    highlights: ['Accordion', 'Button', 'Combobox', 'Dialog', 'Switch', 'Tabs', 'Toast', 'Tooltip'],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Vitest'],
    liveUrl: 'https://components.samnicholls.me/?path=/docs/introduction--docs',
    liveLabel: 'View docs',
    sourceUrl: 'https://github.com/samnichollsme/components',
  },
]
