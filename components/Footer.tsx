"use client";

import Image from "next/image";
import Link from "next/link";

const latestBlogs = [
  {
    title: "Dua Between Two Sujood",
    date: "February 6, 2026",
    href: "/blogs/1",
    image: "/images/choto.jpg",
  },
  {
    title: "Dua for Sehri (Arabic, Translation)",
    date: "January 28, 2026",
    href: "/blogs/2",
    image: "/images/choto.jpg",
  },
  {
    title: "How to Complete the Quran in 30 Days",
    date: "January 27, 2026",
    href: "/blogs/3",
    image: "/images/choto.jpg",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "YouTube",
    href: "#",
    icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "Google Plus",
    href: "#",
    icon: "M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.331 3.295-2.604 0-4.731-2.16-4.731-4.823 0-2.662 2.122-4.822 4.728-4.822 1.485 0 2.479.633 3.045 1.178l2.073-1.994c-1.33-1.245-3.056-1.995-5.115-1.995C3.412 4.365 0 7.785 0 12s3.414 7.635 7.635 7.635c4.41 0 7.332-3.098 7.332-7.461 0-.501-.054-.885-.12-1.265H7.635zm16.365 0h-2.183V8.726h-2.183v2.183h-2.182v2.181h2.182v2.184h2.183v-2.184H24",
  },
];

export default function Footer() {
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

              {/* Column 2 - Latest Blog */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4">
                  Latest Blog
                </h3>
                <ul className="space-y-4">
                  {latestBlogs.map((blog, index) => (
                    <li key={index}>
                      <Link
                        href={blog.href}
                        className="flex gap-3 group hover:opacity-80 transition-opacity"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-200">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-gray-800 text-sm font-medium leading-snug mb-1 line-clamp-2">
                            {blog.title}
                          </h4>
                          <p className="text-gray-500 text-xs flex items-center gap-1">
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {blog.date}
                          </p>
                        </div>
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
                      href="tel:+923014834874"
                      className="hover:text-[#182b68] transition-colors"
                    >
                      +92 301 4834874
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
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#182b68] transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#182b68] transition-colors"
                  />
                  <textarea
                    placeholder="Message"
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#182b68] transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#182b68] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Submit Now
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