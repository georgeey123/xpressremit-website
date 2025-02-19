"use client"
import Link from "next/link"

import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
  }

  return (
    <section className="bg-[#009460] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="block sm:hidden">
          <p className="text-left mb-4 text-2xl ">Quick Links</p>
          <div className="grid grid-cols-2 gap-5 mb-20">
          <Link href="/#about" className="hover:underline text-left">
            About
          </Link>
          <Link href="/faq" className="hover:underline text-left">
            FAQs
          </Link>
          <Link href="/#contact" className="hover:underline text-left">
            Contact us
          </Link>
          <Link href="/privacy" className="hover:underline text-left">
            Cookie policy
          </Link>
          <Link href="/terms" className="hover:underline text-left">
            Terms and conditions
          </Link>
        </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="mb-8">
          Join our newsletter to get the latest updates, special offers, and tips for secure and seamless money
          transfers delivered straight to your inbox
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 mb-4 text-gray-900 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              id="terms"
              className="mt-1"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
            <label htmlFor="terms" className="ml-2 text-xs">
              I confirm I am over 18 and I agree to the{" "}
              <a href="#" className="underline">
                Terms and Conditions and Privacy Policy
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            SUBSCRIBE NOW
          </button>
        </form>
      </div>
    </section>
  )
}

