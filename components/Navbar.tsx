"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/Aboutus" },
  { label: "Fee Chart", href: "/FeeChart" },
  { label: "Teacher", href: "/Teachers" },
  { label: "Blogs", href: "/blogs" },
];

const coursesDropdown = [
  { label: "Online Noorani Qaida Course", href: "/NooraniQaida" },
  { label: "Quran Translation Course", href: "/QuranTranslation" },
  { label: "Quran Tajweed Course", href: "/QuranTajweed" },
  { label: "Quran Memorization Course", href: "/QuranMemorization" },
  { label: "Quran Tafsir Course", href: "/QuranTafsir" },
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
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-black hover:text-[#6b4c9a] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {/* Courses Dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="text-[15px] font-medium text-black hover:text-[#6b4c9a] transition-colors flex items-center gap-1"
            >
              Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[220px]">
                <Link
                  href="/Courses"
                  className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-50 hover:text-[#182b68] transition-colors"
                >
                  All Courses
                </Link>
                {coursesDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-50 hover:text-[#182b68] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks.slice(2).map((link) => (
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
