'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'
import Section from './Section'

export default function Skills() {
  const { skills } = portfolioConfig

  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black/80 backdrop-blur-sm rounded-lg shadow-xl p-8 border-2 border-wine-red-800/20"
        >
          <h3 className="text-2xl font-bold text-wine-red-800 mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((lang, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-wine-red-800/10 text-wine-red-800 rounded-full font-medium border border-wine-red-800/20"
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-black/80 backdrop-blur-sm rounded-lg shadow-xl p-8 border-2 border-wine-red-800/20"
        >
          <h3 className="text-2xl font-bold text-wine-red-800 mb-4">Technical</h3>
          <div className="flex flex-wrap gap-2">
            {skills.technical.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-wine-red-800/10 text-wine-red-800 rounded-full font-medium border border-wine-red-800/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black/80 backdrop-blur-sm rounded-lg shadow-xl p-8 border-2 border-wine-red-800/20"
        >
          <h3 className="text-2xl font-bold text-wine-red-800 mb-4">Certifications</h3>
          <div className="flex flex-wrap gap-2">
            {skills.certifications.map((cert, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-wine-red-800/10 text-wine-red-800 rounded-full font-medium border border-wine-red-800/20"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

