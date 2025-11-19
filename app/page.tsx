import CyberMapBackground from '@/components/CyberMapBackground'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Leadership from '@/components/Leadership'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CyberMapBackground />
      <Navigation />
      <Hero />
      <Education />
      <Experience />
      <Leadership />
      <Skills />
      
      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-sm border-t-2 border-wine-red-800/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Jade Yang. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

