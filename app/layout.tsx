import './globals.css'
import { Inter } from 'next/font/google'
import AppBar from '@mui/material/AppBar';
import Link from 'next/link';

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
        <nav className="bg-blue-500 p-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center text-white text-2xl">
                QunatumX.io
              </div>
              <div className="flex space-x-2">
                <div className="relative group">
                  <button className="text-white">Human Resource</button>
                  <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white text-black z-10 hidden group-hover:block">
                    <a href="#" className="block px-4 py-2">Employees</a>
                    <a href="#" className="block px-4 py-2">Departments</a>
                    <Link href="/HumanResource/Grades" className="block px-4 py-2">Grades</Link>
                    <a href="#" className="block px-4 py-2">Geo Locations</a>
                  </div>
                </div>
                <div className="relative group">
                  <button className="text-white">Time Management</button>
                  <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white text-black z-10 hidden group-hover:block">
                    <a href="#" className="block px-4 py-2">Roster</a>
                    <a href="#" className="block px-4 py-2">Shifts</a>
                    <a href="#" className="block px-4 py-2">Holiday Types</a>
                    <a href="#" className="block px-4 py-2">Devices</a>
                  </div>
                </div>
                <div className="relative group">
                  <button className="text-white">Leave Management</button>
                  <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white text-black z-10 hidden group-hover:block">
                    <a href="#" className="block px-4 py-2">Leave Types</a>
                    <a href="#" className="block px-4 py-2">Leave Models</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>



        {children}
      </body>
    </html>

  )
}
