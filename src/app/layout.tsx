import type { Metadata } from 'next'
import { Cairo, Teko } from 'next/font/google'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  weight: ['400', '500', '600', '700'],
})

const teko = Teko({
  subsets: ['latin'],
  variable: '--font-teko',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'NABT Energy Drink',
  description: 'Premium date-seeds energy drink landing page with cinematic 3D product presentation.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} ${teko.variable}`}>{children}</body>
    </html>
  )
}
