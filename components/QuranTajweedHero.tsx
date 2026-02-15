"use client";

import Image from "next/image";

export default function QuranTajweedHero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden flex items-center justify-center">
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

      {/* Content - Centered "Online Tajweed Course" */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Online Tajweed Course
        </h1>
      </div>
    </section>
  );
}
