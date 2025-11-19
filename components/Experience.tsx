'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'
import Section from './Section'

export default function Experience() {
  const { experience } = portfolioConfig

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-black/80 backdrop-blur-sm rounded-lg shadow-xl p-8 border-2 border-wine-red-800/20 hover:border-wine-red-800/40 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-wine-red-800 mb-1">
                  {exp.title}
                </h3>
                <p className="text-xl text-gray-200 mb-1">{exp.company}</p>
                <p className="text-gray-400">{exp.location}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-gray-300 font-medium">
                  {exp.startDate} - {exp.endDate}
                  {exp.current && (
                    <span className="ml-2 px-2 py-1 bg-wine-red-800 text-white text-xs rounded-full">
                      Current
                    </span>
                  )}
                </p>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx} className="text-gray-300 flex items-start">
                  <span className="text-wine-red-800 mr-2 mt-1">▫</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {exp.skills && exp.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
                {exp.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-wine-red-800/10 text-wine-red-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

