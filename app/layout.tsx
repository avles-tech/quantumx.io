import './globals.css'
import { Inter } from 'next/font/google'
import AppNav from './componenets/AppNav';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuantumX.io',
  description: 'QuantumX.io',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (

    <html lang="en">

      <body className={inter.className}>
      <div className="flex flex-col">  {/* Changed to flex-col */}
      <AppNav />
      
          {children}
       
    </div>
      </body>
    </html>

  )
}
