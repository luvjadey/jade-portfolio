'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  eyebrow?: string
  children: ReactNode
}

export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="py-24 px-4 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.3em] text-cyber-glow/80 mb-3 font-semibold">
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-white inline-block">
            {title}
            <span className="block h-1 w-16 mt-3 bg-gradient-to-r from-cyber-glow to-cyber-blue rounded-full" />
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  )
}
