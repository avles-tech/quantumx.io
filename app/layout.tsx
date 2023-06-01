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
      <body>{children}</body>
    </html>
  )
}