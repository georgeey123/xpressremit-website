"use client";

import Link from "next/link";
import Image from "next/image"; // Make sure to import this
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/Xpressremit.svg"
                alt="Xpress Remit Logo"
                width={150} // Set appropriate width and height for the logo
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex sm:space-x-8">
            <NavLink href="/" active={pathname === "/"}>
              Home
            </NavLink>
            <NavLink href="/#about" active={pathname === "/#about"}>
              About Us
            </NavLink>
            <NavLink href="/#contact" active={pathname === "/#contact"}>
              Contact Us
            </NavLink>
            <NavLink href="/faq" active={pathname === "/faq"}>
              FAQs
            </NavLink>
          </div>

          {/* Download App Button */}
          <div className="flex-shrink-0">
            <Link
              href="/download"
              className="bg-[#2F9E6E] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition"
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
        active
          ? "border-[#2F9E6E] text-gray-900"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
}
