"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <div className="bg-[#182b68] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 p-6 sm:p-8 md:p-12 lg:py-20 lg:px-14 min-h-[180px] sm:min-h-[200px] md:min-h-[240px]">
        {/* Left - Text with vertical accent */}
        <div className="flex gap-4 sm:gap-5 flex-1 w-full md:w-auto">
          <div className="w-1 sm:w-1.5 shrink-0 bg-white rounded-full min-h-[60px] sm:min-h-[80px] self-stretch" />
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
            Join Aiza Quran Academy & Start Your Journey
              {/* <span className="block text-white text-xl sm:text-2xl md:text-3xl mt-1">
                Noorani Qaida
              </span> */}
            </h2>
            <p className="text-white/90 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 font-normal">
            Begin your Quran learning journey today with expert teachers, flexible timings, and personalized classes from the comfort of your home.
            </p>
          </div>
        </div>

        {/* Right - CTA Button */}
        <Link
          href="/NooraniQaida"
          className="shrink-0 w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-[#182b68] font-bold text-xs sm:text-sm uppercase tracking-wide rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.2)] border-2 border-amber-300/50 hover:bg-gray-100 transition-colors"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
}
