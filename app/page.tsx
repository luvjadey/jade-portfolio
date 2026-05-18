import CyberMapBackground from '@/components/CyberMapBackground'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CyberMapBackground />
      <Navigation />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <footer className="border-t border-white/10 py-8 px-4 bg-navy-950/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Jade Yang. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
