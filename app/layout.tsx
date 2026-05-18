import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jade Yang | Cybersecurity Professional',
  description:
    'Cybersecurity graduate and bilingual professional passionate about tech, national security, and protecting critical assets through mission-driven work.',
  keywords: [
    'Jade Yang',
    'Cybersecurity',
    'National Security',
    'ASU',
    'FBI',
    'Threat Analysis',
    'OSINT',
    'Penetration Testing',
  ],
  authors: [{ name: 'Jade Yang' }],
  openGraph: {
    title: 'Jade Yang | Cybersecurity Professional',
    description:
      'Cybersecurity graduate passionate about national security and protecting critical assets.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
