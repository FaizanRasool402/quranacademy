"use client";

import Link from "next/link";
import { useState } from "react";

const quickLinks = [
  { label: "About Us", href: "/Aboutus" },
  { label: "Courses", href: "/Courses" },
  { label: "Teachers", href: "/Teachers" },
  { label: "Fee Chart", href: "/FeeChart" },
  { label: "Contact Us", href: "/Contactus" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1B1FDJrt96/",
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kids_quran_academy?igsh=cXB1MmY5amE3bWNs",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@digi-talquranacademyfemale3361?si=wmfL3uh0gmwwoyIR",
    icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

type QuickStatus = "idle" | "loading" | "success" | "error";

export default function Footer() {
  const [qcName, setQcName] = useState("");
  const [qcEmail, setQcEmail] = useState("");
  const [qcMessage, setQcMessage] = useState("");
  const [qcStatus, setQcStatus] = useState<QuickStatus>("idle");

  const handleQuickSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!qcName || !qcEmail || !qcMessage) return;

    setQcStatus("loading");

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

      const res = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: qcName,
          email: qcEmail,
          message: qcMessage,
          source: "footer_quick_contact",
        }),
      });

      if (res.ok) {
        setQcStatus("success");
        setQcName("");
        setQcEmail("");
        setQcMessage("");
      } else {
        setQcStatus("error");
      }
    } catch {
      setQcStatus("error");
    }
  };

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Primary Content Area - Light background with rounded edges, overlaps blue bar */}
      <div className="relative px-1 sm:px-2 lg:px-3">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#f8f8f8] rounded-2xl sm:rounded-[30px] md:rounded-[40px] pt-10 sm:pt-12 md:pt-16 pb-12 sm:pb-16 px-4 sm:px-5 md:px-6 lg:px-8 shadow-lg relative z-10 mb-[-60px] sm:mb-[-70px] md:mb-[-80px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-10">
              {/* Column 1 - About Us */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4">
                  About Us
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Aiza Quran Academy is one of the internationally leading Learn
                  Quran teaching institute. We offer online Quran classes,
                  Noorani Qaida, Tajweed, and memorization courses for students
                  worldwide.
                </p>
                <div className="flex items-start gap-2 text-gray-600 pt-2">
                  <svg
                    className="w-5 h-5 mt-0.5 shrink-0 text-[#182b68]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-sm">Lahore, Pakistan</span>
                </div>
              </div>

              {/* Column 2 - Quick Links */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-600 text-sm hover:text-[#182b68] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Contact Info */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4">
                  Contact Info
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-600 text-sm">
                    <svg
                      className="w-5 h-5 mt-0.5 shrink-0 text-[#182b68]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:Info@aizaquranacademy.com"
                      className="hover:text-[#182b68] transition-colors break-all"
                    >
                      Info@aizaquranacademy.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600 text-sm">
                    <svg
                      className="w-5 h-5 mt-0.5 shrink-0 text-[#182b68]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:+923088512527"
                      className="hover:text-[#182b68] transition-colors"
                    >
                      +92 308 8512527
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600 text-sm">
                    <svg
                      className="w-5 h-5 mt-0.5 shrink-0 text-[#182b68]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Lahore, Pakistan</span>
                  </li>
                </ul>

                {/* Social Links */}
                <div className="flex gap-3 pt-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-gray-400 hover:text-[#182b68] transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 4 - Quick Contact */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4">
                  Quick Contact
                </h3>
                <form className="space-y-3" onSubmit={handleQuickSubmit}>
                  <input
                    type="text"
                    placeholder="Name"
                    value={qcName}
                    onChange={(e) => setQcName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#182b68] transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={qcEmail}
                    onChange={(e) => setQcEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#182b68] transition-colors"
                  />
                  <textarea
                    placeholder="Message"
                    rows={3}
                    value={qcMessage}
                    onChange={(e) => setQcMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#182b68] transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    disabled={qcStatus === "loading"}
                    className="w-full py-3 rounded-lg bg-[#182b68] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {qcStatus === "loading" ? "Sending..." : "Submit Now"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Dark blue background */}
      <div className="bg-[#182b68] pt-20 sm:pt-24 pb-4 sm:pb-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Dotted line separator */}
          <div className="border-t border-dotted border-white/30 mb-6"></div>
          
          <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2">
            <p className="text-white/90 text-xs sm:text-sm text-center sm:text-right">
              © 2025 - Aiza Quran Academy
            </p>
          </div>
        </div>
      </div>


    </footer>
  );
}