"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/Aboutus" },
  { label: "Courses", href: "/Courses" },
  { label: "Fee Chart", href: "/FeeChart" },
  { label: "Teacher", href: "/Teachers" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center px-4 py-4">
      <div className="w-full max-w-6xl flex items-center justify-between gap-8 bg-white rounded-full px-6 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.jpeg"
            alt="Aiza Quran Academy Logo"
            width={48}
            height={48}
            className="rounded-full object-cover w-12 h-12"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-black text-lg">Aiza Quran</span>
            <span className="text-black text-sm">Academy</span>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-black hover:text-[#6b4c9a] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Button - picture wala design */}
        <Link
          href="/contact"
          className="shrink-0 px-6 py-2.5 rounded-md bg-[#182b68] text-white font-semibold text-[15px] shadow-[0_4px_14px_rgba(24,43,104,0.4)] hover:opacity-90 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
