import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Builder Day Showcase',
  description: 'Showcasing amazing Builder Day projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

