'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'
import Section from './Section'

export default function Experience() {
  const { experience } = portfolioConfig

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="glass rounded-2xl p-7 md:p-8 hover:border-cyber-glow/40 transition-all"
          >
            <div className="flex gap-5 md:gap-7 items-start">
              {exp.logo && (
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white/[0.06] border border-white/10 p-2 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </div>
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 gap-3">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-cyber-glow/90">{exp.company}</p>
                    <p className="text-base text-white/60 mt-1">{exp.location}</p>
                  </div>
                  <p className="text-base text-white/75 font-medium whitespace-nowrap flex items-center gap-2 md:justify-end">
                    <span>
                      {exp.startDate} — {exp.endDate}
                    </span>
                    {exp.current && (
                      <span className="px-2.5 py-0.5 text-xs uppercase tracking-widest font-semibold bg-cyber-glow/15 text-cyber-glow border border-cyber-glow/30 rounded-full">
                        Current
                      </span>
                    )}
                  </p>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-white/90 text-lg flex items-start leading-relaxed">
                      <span className="text-cyber-glow mr-3 mt-2 flex-shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/10">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="chip text-base">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
