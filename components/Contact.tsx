'use client'

import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'
import ConnectButton from './ConnectButton'

export default function Contact() {
  const { personal } = portfolioConfig

  return (
    <section id="contact" className="py-24 px-4 relative scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 inline-block">
          Contact
          <span className="block h-1 w-16 mt-3 mx-auto bg-gradient-to-r from-cyber-glow to-cyber-blue rounded-full" />
        </h2>

        <p className="text-lg md:text-xl text-white/85 leading-relaxed mt-6 mb-8 max-w-2xl">
          Open to new cybersecurity roles and collaborations. Feel free to connect with me on LinkedIn.
        </p>

        <ConnectButton href={personal.linkedin} />
      </motion.div>
    </section>
  )
}
