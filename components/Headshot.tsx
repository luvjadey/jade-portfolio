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

  const initials = name.split(' ').map(n => n[0]).join('')

  if (imageError || !src) {
    return (
      <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-wine-red-800 shadow-2xl bg-wine-red-800/10 flex items-center justify-center">
        <span className="text-6xl font-bold text-wine-red-800">
          {initials}
        </span>
      </div>
    )
  }

  return (
    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-wine-red-800 shadow-2xl">
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

