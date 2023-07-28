import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { i18n } from '@/app/translate/i18n';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  
  title: i18n.t('metadata.title'),
  description:  i18n.t('metadata.description')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={"en"}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
