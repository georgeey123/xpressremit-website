import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#009460] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 mb-8">
          <SocialLink href="#" icon={Facebook} />
          <SocialLink href="https://www.instagram.com/xpressremit_app?igsh=MXF6Z3lzNGp3czRidA%3D%3D&utm_source=qr" icon={Instagram} />
          <SocialLink href="https://x.com/xpressremit_app?s=21" icon={Twitter} />
          <SocialLink href="#" icon={Linkedin} />
        </div>
        <div className="md:flex justify-center space-x-8 mb-8 hidden sm:block items-center">
          <Link href="/#about" className="hover:underline">
            About
          </Link>
          <Link href="/#contact" className="hover:underline">
            Contact us
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQs
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms and conditions
          </Link>
          <Link href="/privacy" className="hover:underline">
            Cookie policy
          </Link>
        </div>
        <div className="text-center text-sm">
          <p>Copyright © 2024 - Xpressremit</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon: Icon }: { href: string; icon: typeof Facebook }) {
  return (
    <a
      href={href}
      className="text-white hover:text-gray-200 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-6 w-6" />
    </a>
  )
}

