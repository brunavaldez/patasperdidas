import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Patas Perdidas',
  description: 'Lost & Found Dogs - Help bring pets home'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
