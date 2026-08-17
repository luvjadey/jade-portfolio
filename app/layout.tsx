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
  title: 'Jade Yang | Platform Engineer',
  description:
    'Platform Engineer at Autonomous Cyber building cloud infrastructure and developer tooling behind AI-driven security work.',
  keywords: [
    'Jade Yang',
    'Platform Engineering',
    'Autonomous Cyber',
    'Cloud Infrastructure',
    'Terraform',
    'Kubernetes',
    'Cybersecurity',
    'National Security',
  ],
  authors: [{ name: 'Jade Yang' }],
  openGraph: {
    title: 'Jade Yang | Platform Engineer',
    description:
      'Platform Engineer at Autonomous Cyber building cloud infrastructure and developer tooling behind AI-driven security work.',
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
