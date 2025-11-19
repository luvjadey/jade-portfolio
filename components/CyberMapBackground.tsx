'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Simplified world map coordinates (major cities as nodes)
const worldNodes = [
  { x: 0.15, y: 0.25, name: 'San Francisco' }, // USA West
  { x: 0.25, y: 0.30, name: 'Phoenix' }, // USA Southwest
  { x: 0.30, y: 0.25, name: 'New York' }, // USA East
  { x: 0.50, y: 0.20, name: 'London' }, // UK
  { x: 0.55, y: 0.25, name: 'Paris' }, // France
  { x: 0.65, y: 0.30, name: 'Moscow' }, // Russia
  { x: 0.75, y: 0.25, name: 'Beijing' }, // China
  { x: 0.80, y: 0.35, name: 'Tokyo' }, // Japan
  { x: 0.85, y: 0.50, name: 'Sydney' }, // Australia
  { x: 0.20, y: 0.60, name: 'Mexico City' }, // Mexico
  { x: 0.30, y: 0.70, name: 'Bogota' }, // Colombia
  { x: 0.40, y: 0.65, name: 'Sao Paulo' }, // Brazil
  { x: 0.50, y: 0.50, name: 'Cairo' }, // Egypt
  { x: 0.60, y: 0.45, name: 'Dubai' }, // UAE
  { x: 0.70, y: 0.50, name: 'Mumbai' }, // India
  { x: 0.50, y: 0.75, name: 'Cape Town' }, // South Africa
]

export default function CyberMapBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Convert relative positions to absolute
    const nodes = worldNodes.map((node) => ({
      x: node.x * canvas.width,
      y: node.y * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      baseX: node.x * canvas.width,
      baseY: node.y * canvas.height,
    }))

    const animate = () => {
      // Clear with slight fade for trail effect - black background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update node positions with slight drift
      nodes.forEach((node) => {
        // Gentle drift around base position
        node.x += node.vx
        node.y += node.vy

        // Keep nodes near their base position
        const dx = node.baseX - node.x
        const dy = node.baseY - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance > 30) {
          node.vx *= -0.8
          node.vy *= -0.8
        }

        // Boundary check
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
      })

      // Draw connections between nearby nodes
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const opacity = 0.5 * (1 - distance / 200)
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})` // Bright blue
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })
      })

      // Draw nodes
      nodes.forEach((node) => {
        // Outer glow - bright blue
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          10
        )
        gradient.addColorStop(0, 'rgba(96, 165, 250, 0.9)') // Bright blue-400
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.5)') // Bright blue-500
        gradient.addColorStop(1, 'rgba(37, 99, 235, 0)') // Blue-600 fade

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, 10, 0, Math.PI * 2)
        ctx.fill()

        // Core node - bright blue
        ctx.fillStyle = 'rgba(59, 130, 246, 0.95)' // Bright blue-500
        ctx.beginPath()
        ctx.arc(node.x, node.y, 5, 0, Math.PI * 2)
        ctx.fill()

        // Bright center - very bright blue
        ctx.fillStyle = 'rgba(96, 165, 250, 1)' // Bright blue-400
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

