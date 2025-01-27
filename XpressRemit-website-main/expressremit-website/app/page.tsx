"use client";

import Image from "next/image";
import { Newsletter } from "@/components/newsletter";
import About from "@/components/about";
import Contact from "@/components/contact";

export const dynamic = 'force-static'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-[#2F9E6E] leading-tight">
              <span className="text-[#CE2029]">
              Fast
                </span>. Secure.
              <br />
              Reliable Remittance
              <br />
              Made <span className="text-[#CE2029]">Easy</span>
            </h1>
            <p className="text-gray-600 mt-4">
              Send money to your loved ones with smiles.<br/> Enjoy faster money
              transfer, which is secure and <br />reliable in all ways. Send smiles
              today with the <br/> XpressRemit mobile app. Get on Playstore and Appstore
            </p>
            <a
              href="/download"
              className="mt-6 inline-block bg-[#2F9E6E] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition"
            >
              Download the Mobile App
            </a>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/assets/iphone_home.svg"
              alt="Mobile App Preview"
              width={600}
              height={600}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-[#A0D3B3] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Money Transfer Made Easy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Biometric Security
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Your safety first – access with fingerprint or face ID.
              </p>
              <div className="relative w-full h-64">
                <Image
                  src="/assets/face_id.svg"
                  alt="Biometric Security"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Verification
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Upload documents in seconds for hassle-free verification.
              </p>
              <div className="relative w-full h-64">
                <Image
                  src="/assets/easy_verification.svg"
                  alt="Easy Verification"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Flexible Transactions
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Send money your way – bank transfer, mobile money, or cash
                pickup.
              </p>
              <div className="relative w-full h-64">
                <Image
                  src="/assets/send_money.svg"
                  alt="Flexible Transactions"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <About />
      </section>
      <section id="contact" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <Contact />
      </section>

      {/* Help Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px]">
              <Image
                src="/assets/faq.svg"
                alt="Customer Support"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                We&apos;re here to help
              </h2>
              <p className="text-gray-600 mb-6">
                Read through our FAQs and if you can&apos;t find what you&apos;re looking
                for, our experts will be happy to answer your questions.
              </p>
              <button className="bg-[#E88B8B] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                READ FAQ
              </button>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
