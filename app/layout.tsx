import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Page from './dashboard/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My-app',
  description: 'Generated by Encrypted',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Page />
        {/* {children} */}
        </body>
    </html>
  )
}
