"use client";

import { useState } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center px-4 py-4">
      <div className="relative w-full max-w-6xl">
      <div className="w-full flex items-center justify-between gap-4 md:gap-8 bg-white rounded-full px-4 md:px-6 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
          <Image
            src="/images/logo.jpeg"
            alt="Aiza Quran Academy Logo"
            width={48}
            height={48}
            className="rounded-full object-cover w-12 h-12"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-black text-base md:text-lg">Aiza Quran</span>
            <span className="text-black text-xs md:text-sm">Academy</span>
          </div>
        </Link>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Nav Links - Desktop */}
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
            <Link
              href="/Courses"
              className="text-[15px] font-medium text-black hover:text-[#6b4c9a] transition-colors flex items-center gap-1"
            >
              Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[220px]">
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

        {/* Contact Button - Desktop */}
        <Link
          href="/contact"
          className="hidden md:inline-flex shrink-0 px-5 md:px-6 py-2 md:py-2.5 rounded-md bg-[#182b68] text-white font-semibold text-sm md:text-[15px] shadow-[0_4px_14px_rgba(24,43,104,0.4)] hover:opacity-90 transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 z-50 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 rounded-lg text-[15px] font-medium text-gray-800 hover:bg-gray-50 hover:text-[#182b68] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* Courses Accordion */}
            <div>
              <div className="flex items-center">
                <Link
                  href="/Courses"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-3 px-4 rounded-lg text-[15px] font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  Courses
                </Link>
                <button
                  type="button"
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className="p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className={`w-4 h-4 transition-transform ${coursesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {coursesOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-1">
                  {coursesDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 rounded-lg text-sm text-gray-600 hover:text-[#182b68]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 mx-4 py-3 rounded-lg bg-[#182b68] text-white font-semibold text-[15px] text-center hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
}
