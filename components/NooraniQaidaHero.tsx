"use client";

import Image from "next/image";

export default function NooraniQaidaHero() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/bgg.png"
        alt=""
        fill
        className="object-cover blur-[2px]"
        priority
        sizes="100vw"
      />
      {/* #182b68 Overlay */}
      <div className="absolute inset-0 bg-[#182b68]/75" />

      {/* Content - Centered "Online Noorani Qaida Course" */}
      <div className="relative z-10 text-center px-4">
        <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] uppercase text-[#fda600] mb-4 sm:mb-6">
          <span className="block w-8 sm:w-10 h-px bg-[#fda600] opacity-60" />
          Aiza Quran Academy
          <span className="block w-8 sm:w-10 h-px bg-[#fda600] opacity-60" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Online Noorani Qaida Course
        </h1>
        <div className="w-16 h-0.5 mx-auto mt-4 sm:mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #fda600, transparent)' }} />
      </div>
    </section>
  );
}
