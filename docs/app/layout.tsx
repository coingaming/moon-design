import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Moon Design System',
  description: 'Maintain the integrity of their user experience and optimize design and development resources.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <main className='bg-slate-30 flex flex-col items-center py-20'>
          {children}
        </main>
      </body>
    </html>
  )
}
