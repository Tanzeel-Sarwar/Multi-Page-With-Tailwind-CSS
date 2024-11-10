import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6 text-sm font-medium">
            <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-500">
          &copy; 2023 Simple Website. All rights reserved.
        </div>
      </footer>
    </div>
  )
}