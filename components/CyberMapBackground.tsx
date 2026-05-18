'use client'

import { useEffect, useRef } from 'react'

export default function CyberMapBackground() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    targetRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 3,
    }
    currentRef.current = { ...targetRef.current }

    const handleMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX
      targetRef.current.y = e.clientY
    }
    window.addEventListener('mousemove', handleMove)

    let raf = 0
    const tick = () => {
      // Ease toward cursor for a soft trailing feel
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentRef.current.x - 250}px, ${currentRef.current.y - 250}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Deep navy radial base */}
      <div
        className="fixed inset-0 -z-30"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, #0d1f3d 0%, #050e1f 55%, #020815 100%)',
        }}
      />

      {/* Subtle cyber grid */}
      <div
        className="fixed inset-0 -z-20 bg-grid opacity-50"
        style={{
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 85%)',
        }}
      />

      {/* Horizontal scan lines */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(125,211,252,0.06) 0px, rgba(125,211,252,0.06) 1px, transparent 1px, transparent 4px)',
        }}
      />

      {/* Diagonal laser beams */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(115deg, rgba(125,211,252,0.18) 0%, rgba(125,211,252,0.04) 12%, transparent 28%)',
        }}
      />
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(295deg, rgba(96,165,250,0.16) 0%, rgba(96,165,250,0.04) 12%, transparent 28%)',
        }}
      />

      {/* Drifting corner glows */}
      <div
        className="fixed top-[-180px] right-[-180px] -z-20 w-[640px] h-[640px] pointer-events-none rounded-full will-change-transform animate-drift-a"
        style={{
          background:
            'radial-gradient(circle, rgba(125,211,252,0.14) 0%, rgba(125,211,252,0) 70%)',
        }}
      />
      <div
        className="fixed bottom-[-200px] left-[-200px] -z-20 w-[680px] h-[680px] pointer-events-none rounded-full will-change-transform animate-drift-b"
        style={{
          background:
            'radial-gradient(circle, rgba(96,165,250,0.12) 0%, rgba(96,165,250,0) 70%)',
        }}
      />
      <div
        className="fixed top-1/2 left-1/3 -z-20 w-[500px] h-[500px] pointer-events-none rounded-full will-change-transform animate-drift-c"
        style={{
          background:
            'radial-gradient(circle, rgba(125,211,252,0.07) 0%, rgba(125,211,252,0) 70%)',
        }}
      />

      {/* Cursor-following glow */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -z-10 w-[500px] h-[500px] pointer-events-none rounded-full will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(125,211,252,0.18) 0%, rgba(125,211,252,0.05) 35%, rgba(125,211,252,0) 70%)',
          mixBlendMode: 'screen',
        }}
      />
    </>
  )
}
