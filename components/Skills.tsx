'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'
import Section from './Section'

interface SkillGroupProps {
  title: string
  items: string[]
  delay?: number
}

function SkillGroup({ title, items, delay = 0 }: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-2xl p-7"
    >
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-cyber-glow shadow-glow" />
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span key={i} className="chip">{item}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { skills } = portfolioConfig

  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid md:grid-cols-2 gap-6">
        <SkillGroup title="Security Operations & Analysis" items={skills.securityOps} />
        <SkillGroup title="Tools & Platforms" items={skills.tools} delay={0.08} />
        <SkillGroup title="Programming" items={skills.programming} delay={0.16} />
        <SkillGroup title="Languages" items={skills.languages} delay={0.24} />
      </div>
    </Section>
  )
}
