import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jade Yang | Cybersecurity Professional',
  description: 'Senior at Arizona State University studying Applied Computing with a focus in cybersecurity. Passionate about national security work.',
  keywords: ['Jade Yang', 'Cybersecurity', 'National Security', 'ASU', 'FBI', 'Hacking for Defense'],
  authors: [{ name: 'Jade Yang' }],
  openGraph: {
    title: 'Jade Yang | Cybersecurity Professional',
    description: 'Senior at Arizona State University studying Applied Computing with a focus in cybersecurity.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

