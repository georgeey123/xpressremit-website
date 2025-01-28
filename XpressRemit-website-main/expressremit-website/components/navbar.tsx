// "use client";

// import Link from "next/link";
// import Image from "next/image"; // Make sure to import this
// import { usePathname } from "next/navigation";

// export function Navbar() {
//   const pathname = usePathname();

//   return (
//     <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/">
//               <Image
//                 src="/assets/Xpressremit.svg"
//                 alt="Xpress Remit Logo"
//                 width={150} // Set appropriate width and height for the logo
//                 height={40}
//                 className="object-contain"
//               />
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden sm:flex sm:space-x-8">
//             <NavLink href="/" active={pathname === "/"}>
//               Home
//             </NavLink>
//             <NavLink href="/#about" active={pathname === "/#about"}>
//               About Us
//             </NavLink>
//             <NavLink href="/#contact" active={pathname === "/#contact"}>
//               Contact Us
//             </NavLink>
//             <NavLink href="/faq" active={pathname === "/faq"}>
//               FAQs
//             </NavLink>
//           </div>

//           {/* Download App Button */}
//           <div className="flex-shrink-0">
//             <Link
//               href="/download"
//               className="bg-[#2F9E6E] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition"
//             >
//               Download App
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function NavLink({
//   href,
//   children,
//   active,
// }: {
//   href: string;
//   children: React.ReactNode;
//   active: boolean;
// }) {
//   return (
//     <Link
//       href={href}
//       className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
//         active
//           ? "border-[#2F9E6E] text-gray-900"
//           : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
//       }`}
//     >
//       {children}
//     </Link>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`sm:flex sm:space-x-8 hidden`}>
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
          <div className="hidden sm:flex sm:items-center">
            <Link
              href="/download"
              className="bg-[#2F9E6E] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition"
            >
              Download App
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
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
          </div>
        )}
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
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        active
          ? "bg-gray-100 text-gray-900"
          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
}