import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import About from '@/about/about'
import Contact from '@/contact/contact'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto text-center mt-20">

      <h1 className="text-4xl font-bold mb-4">Welcome to Our Simple Website</h1>
      <p className="text-xl text-gray-600 mb-8">Discover our minimalist approach to web design and content.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p className="text-gray-600 mb-4">Learn more about our company and our mission.</p>
          <Link href="/About" className="inline-flex items-center text-blue-600 hover:underline">
            Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
        
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-4">Have questions? We're here to help. Contact us today.</p>
          <Link href="/contact" className="inline-flex items-center text-blue-600 hover:underline">
            Contact Us <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}