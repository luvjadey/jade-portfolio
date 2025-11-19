'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'
import Section from './Section'

export default function Education() {
  const { education } = portfolioConfig

  return (
    <Section id="education" title="Education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-black/80 backdrop-blur-sm rounded-lg shadow-xl p-8 border-2 border-wine-red-800/20"
      >
        <h3 className="text-2xl font-bold text-wine-red-800 mb-2">
          {education.degree}
        </h3>
        <p className="text-xl text-gray-200 mb-4">{education.university}</p>
        
        {education.achievements.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-200 mb-2">Achievements</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {education.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="text-lg font-semibold text-gray-200 mb-2">Relevant Coursework</h4>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-wine-red-800/10 text-wine-red-800 rounded-full text-sm font-medium border border-wine-red-800/20"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

