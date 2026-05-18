'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'
import Section from './Section'

export default function Projects() {
  const { projects } = portfolioConfig

  return (
    <Section id="projects" title="Projects">
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="glass rounded-2xl p-7 md:p-8 hover:border-cyber-glow/40 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 gap-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-white/70 font-medium whitespace-nowrap md:text-right">
                {project.date}
              </p>
            </div>

            <ul className="space-y-2.5">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="text-white/85 leading-relaxed flex items-start">
                  <span className="text-cyber-glow mr-3 mt-1.5 flex-shrink-0">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {project.skills && project.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/10">
                {project.skills.map((skill, i) => (
                  <span key={i} className="chip">{skill}</span>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
