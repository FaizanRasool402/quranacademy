"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <Image
        src="/images/bg.jpg"
        alt=""
        fill
        className="object-cover blur-[2px]"
        priority
        sizes="100vw"
      />
      {/* #182b68 Overlay */}
      <div className="absolute inset-0 bg-[#182b68]/75" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
          {/* Left - Text & Buttons */}
          <div className="relative bg-[#fda600] px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 rounded-lg md:rounded-xl max-w-xl shadow-xl">
            {/* Subtle texture pattern */}
            <div
              className="absolute inset-0 rounded-lg md:rounded-xl opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8Z' fill='%23000' fill-opacity='1'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4">
                Learn Quran with us
              </h1>
              <p className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md">
                Aiza Quran Academy is one of the internationally leading
                Learn Quran teaching institute
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/admission"
                  className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 rounded-md bg-[#182b68] text-white font-semibold text-sm sm:text-[15px] hover:opacity-90 transition-opacity"
                >
                  Get Admission
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 rounded-md bg-[#182b68] text-white font-semibold text-sm sm:text-[15px] hover:opacity-90 transition-opacity"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Right - Admission Form */}
          <div className="bg-[#182b68]/90 backdrop-blur-sm rounded-lg md:rounded-xl p-6 sm:p-8 md:p-10 max-w-md mx-auto md:ml-auto md:mr-0 border border-white/10 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wider text-center mb-6 sm:mb-8">
              Admission
            </h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name*"
                required
                className="w-full px-4 py-3 rounded-md bg-[#2a3a5c] border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone *"
                required
                className="w-full px-4 py-3 rounded-md bg-[#2a3a5c] border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
              />
              <textarea
                placeholder="Message *"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-md bg-[#2a3a5c] border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-md bg-[#fda600] text-white font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
