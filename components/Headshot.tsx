'use client'

import { useState } from 'react'
import Image from 'next/image'

interface HeadshotProps {
  src: string
  alt: string
  name: string
}

export default function Headshot({ src, alt, name }: HeadshotProps) {
  const [imageError, setImageError] = useState(false)
  const initials = name.split(' ').map((n) => n[0]).join('')

  const ringClass =
    'relative w-48 h-48 mx-auto rounded-full overflow-hidden border border-white/15'

  if (imageError || !src) {
    return (
      <div className={`${ringClass} bg-white/[0.04] flex items-center justify-center`}>
        <span className="text-6xl font-bold text-white">{initials}</span>
      </div>
    )
  }

  return (
    <div className={ringClass}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        onError={() => setImageError(true)}
      />
    </div>
  )
}
