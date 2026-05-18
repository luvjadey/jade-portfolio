'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'

export default function AboutMe() {
  const { personal } = portfolioConfig

  return (
    <section id="about" className="px-4 pt-4 pb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide">
          About Me
        </h2>
        <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
          {personal.aboutMe}
        </p>
      </motion.div>
    </section>
  )
}
