import { SiteHeader } from './components/site-header'
import { Hero } from './components/hero'
import { Capabilities } from './components/capabilities'
import { About } from './components/about'
import { Portfolio } from './components/portfolio'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-caption focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <Capabilities />
        <About />
        <Portfolio />
      </main>
    </div>
  )
}