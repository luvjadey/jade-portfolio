'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'
import Headshot from './Headshot'

export default function Hero() {
  const { personal } = portfolioConfig

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Headshot
            src={personal.headshot}
            alt={personal.name}
            name={personal.name}
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-wine-red-800"
        >
          {personal.name}
        </motion.h1>

        {/* Elevator Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto whitespace-pre-line bg-black/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-wine-red-800/20"
        >
          {personal.elevatorPitch}
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-wine-red-800 text-white rounded-lg hover:bg-wine-red-900 transition-all shadow-lg font-medium"
          >
            Email
          </motion.a>
          <motion.a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-wine-red-800 text-white rounded-lg hover:bg-wine-red-900 transition-all shadow-lg font-medium"
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

