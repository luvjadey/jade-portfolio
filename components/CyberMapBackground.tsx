'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface BinaryColumn {
  x: number
  y: number
  speed: number
  chars: string[]
  charHeights: number[]
}

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

    // Create binary columns spread across the screen
    const columns: BinaryColumn[] = []
    const columnSpacing = 30 // Space between columns
    const numColumns = Math.ceil(canvas.width / columnSpacing)

    for (let i = 0; i < numColumns; i++) {
      const x = i * columnSpacing + (Math.random() * 20 - 10)
      const columnLength = 15 + Math.random() * 25 // Variable length columns
      const chars: string[] = []
      const charHeights: number[] = []
      
      for (let j = 0; j < columnLength; j++) {
        chars.push(Math.random() > 0.5 ? '1' : '0')
        charHeights.push(18 + Math.random() * 8) // Variable character heights
      }

      columns.push({
        x,
        y: -Math.random() * canvas.height, // Start at random positions above screen
        speed: 0.5 + Math.random() * 1.5, // Variable falling speed
        chars,
        charHeights,
      })
    }

    let time = 0

    // Color function - slowly transitions through light blue hues
    const getColorRGBA = (opacity: number) => {
      // Cycle through light blue to cyan
      const hue = 200 + Math.sin(time * 0.05) * 30 // 170-230 (blue to cyan)
      const saturation = 60 + Math.sin(time * 0.08) * 30
      const lightness = 50 + Math.sin(time * 0.06) * 20
      
      // Convert HSL to RGB
      const h = hue / 360
      const s = saturation / 100
      const l = lightness / 100
      const c = (1 - Math.abs(2 * l - 1)) * s
      const x = c * (1 - Math.abs((h * 6) % 2 - 1))
      const m = l - c / 2
      
      let r = 0, g = 0, b = 0
      if (h < 1/6) { r = c; g = x; b = 0 }
      else if (h < 2/6) { r = x; g = c; b = 0 }
      else if (h < 3/6) { r = 0; g = c; b = x }
      else if (h < 4/6) { r = 0; g = x; b = c }
      else if (h < 5/6) { r = x; g = 0; b = c }
      else { r = c; g = 0; b = x }
      
      r = Math.round((r + m) * 255)
      g = Math.round((g + m) * 255)
      b = Math.round((b + m) * 255)
      
      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }

    const animate = () => {
      time += 0.01
      
      // Clear with slight fade for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set font properties
      ctx.font = 'bold 16px "Courier New", monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'top'

      // Update and draw each column
      columns.forEach((column, colIndex) => {
        // Update position
        column.y += column.speed

        // Reset column if it goes off screen
        if (column.y > canvas.height + column.chars.length * 20) {
          column.y = -Math.random() * canvas.height
          // Randomly change some characters
          column.chars.forEach((_, i) => {
            if (Math.random() > 0.7) {
              column.chars[i] = Math.random() > 0.5 ? '1' : '0'
            }
          })
        }

        // Draw each character in the column
        let currentY = column.y
        column.chars.forEach((char, charIndex) => {
          // Calculate opacity - brighter at top, fading down
          const fadeStart = 0.3 // Start fading after 30% of column
          const charPosition = charIndex / column.chars.length
          let opacity = 1
          
          if (charPosition < fadeStart) {
            opacity = 0.15 + (charPosition / fadeStart) * 0.25 // 0.15 to 0.4
          } else {
            opacity = 0.4 - ((charPosition - fadeStart) / (1 - fadeStart)) * 0.3 // 0.4 to 0.1
          }

          // Make some characters glow brighter randomly
          const glow = Math.random() > 0.85 ? 1.5 : 1
          const finalOpacity = Math.min(opacity * glow, 0.6) // Cap at 0.6 for visibility

          // Draw glow effect
          ctx.shadowBlur = 10
          ctx.shadowColor = getColorRGBA(0.8)
          ctx.fillStyle = getColorRGBA(finalOpacity)
          
          // Draw the binary character
          ctx.fillText(char, column.x, currentY)
          
          currentY += column.charHeights[charIndex]
        })

        ctx.shadowBlur = 0
      })

      // Add some floating binary clusters for extra effect
      if (Math.floor(time * 10) % 5 === 0) {
        for (let i = 0; i < 3; i++) {
          const x = Math.random() * canvas.width
          const y = Math.random() * canvas.height
          const binary = Math.random() > 0.5 ? '1' : '0'
          
          ctx.shadowBlur = 15
          ctx.shadowColor = getColorRGBA(0.6)
          ctx.fillStyle = getColorRGBA(0.2)
          ctx.font = 'bold 20px "Courier New", monospace'
          ctx.fillText(binary, x, y)
        }
      }

      ctx.shadowBlur = 0

      requestAnimationFrame(animate)
    }

    // Recreate columns on resize
    const handleResize = () => {
      resizeCanvas()
      columns.length = 0
      const newNumColumns = Math.ceil(canvas.width / columnSpacing)
      
      for (let i = 0; i < newNumColumns; i++) {
        const x = i * columnSpacing + (Math.random() * 20 - 10)
        const columnLength = 15 + Math.random() * 25
        const chars: string[] = []
        const charHeights: number[] = []
        
        for (let j = 0; j < columnLength; j++) {
          chars.push(Math.random() > 0.5 ? '1' : '0')
          charHeights.push(18 + Math.random() * 8)
        }

        columns.push({
          x,
          y: -Math.random() * canvas.height,
          speed: 0.5 + Math.random() * 1.5,
          chars,
          charHeights,
        })
      }
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('resize', handleResize)
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
