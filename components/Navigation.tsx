'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/70 backdrop-blur-xl border-b border-white/10 shadow-glow'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 pt-7 pb-4">
        <div className="flex justify-center items-center">
          <ul className="flex flex-wrap gap-1 md:gap-2 justify-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <motion.a
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="relative inline-block px-4 py-2 text-base md:text-lg font-semibold text-white/80 hover:text-white tracking-wide transition-colors group"
                >
                  {item.name}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-cyber-glow scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}
