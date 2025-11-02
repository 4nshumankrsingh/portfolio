import { Inter, Calistoga } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: "--font-sans" 
})

const calistoga = Calistoga({ 
  subsets: ['latin'], 
  variable: "--font-serif", 
  weight: ["400"] 
})

export const metadata = {
  title: "Anshuman | Portfolio",
  description: "Full-Stack Developer specializing in Next.js, React, and modern web technologies.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${calistoga.variable} bg-black text-white antialiased font-sans`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}