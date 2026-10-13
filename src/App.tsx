import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'

const Background = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 size-[36rem] rounded-full bg-accent/15 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 size-[32rem] rounded-full bg-neutral-400/[0.06] blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
    </div>
  )
}

const App = () => {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-xl bg-white px-4 py-2.5 font-semibold text-neutral-950 text-sm focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Background />
      <Nav />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
