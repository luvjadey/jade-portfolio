'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'
import Headshot from './Headshot'
import ConnectButton from './ConnectButton'

export default function Hero() {
  const { personal } = portfolioConfig

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-20 relative scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8"
        >
          <Headshot src={personal.headshot} alt={personal.name} name={personal.name} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-5xl md:text-7xl mb-6 text-white tracking-tight"
          style={{ fontWeight: 600 }}
        >
          {personal.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          {personal.shortIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          <ConnectButton href={personal.linkedin} />
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn"
          >
            GitHub
          </a>
          <a
            href={`/${personal.resume}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
