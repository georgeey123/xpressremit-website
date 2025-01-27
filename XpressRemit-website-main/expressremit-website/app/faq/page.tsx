"use client"
import Image from "next/image"


import { useState } from "react"
import { ChevronLeft, Plus, Minus } from "lucide-react"
import Link from "next/link"

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Xpressremit",
      answer:
        "XpressRemit is a secure money transfer platform that allows you to send money to your loved ones easily and safely.",
    },
    {
      question: "Who can use Xpressremit?",
      answer: "Anyone over 18 years old with valid identification can use Xpressremit to send money.",
    },
    {
      question: "What payment methods do you support?",
      answer: "We support bank transfers, debit cards, and various local payment methods.",
    },
    {
      question: "What do I need to verify my account?",
      answer: "You&apos;ll need a valid government-issued ID and proof of address to verify your account."
      ,
    },
    {
      question: "Are there any limits on how much I can send?",
      answer: "Transfer limits vary by country and verification level. Contact support for specific details.",
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Link href="/" className="mr-4">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-4xl font-bold text-black">Frequently Asked Questions</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-gray-600 mb-8">
              Your guide to using <span className="text-[#2F9E6E]">Xpressremit</span> - find answers to common
              questions about our platform, security, and services.
            </p>

            <div className="mb-8">
              <input
                type="text"
                placeholder="Search for keywords"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F9E6E]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left text-black" 
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    {openQuestion === index ? (
                      <Minus className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openQuestion === index && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="mb-4">
              <div className="relative h-[70px]">
                <Image
                  src="/assets/Vector 355.svg"
                  alt="About us logo"
                  fill
                  className="object-contain"
                />
              </div>
              </div>
              <h2 className="text-xl font-bold mb-2 text-black">Don't See Your Question?</h2>
              <p className="text-gray-600 mb-4">
              If your question isn&apos;t listed here, feel free to reach out to us through the Contact Us page.
              </p>
              <button className="w-full bg-[#E88B8B] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                Send Us an Email
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                This will open your email app with our support email pre-filled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

