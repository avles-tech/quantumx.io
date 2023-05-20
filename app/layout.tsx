import './globals.css'
import { Inter } from 'next/font/google'
import AppBar from '@mui/material/AppBar';
import Link from 'next/link';
import Header from './componenets/Header';

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
       <Header></Header>



        {children}
      </body>
    </html>

  )
}
