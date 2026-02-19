"use client";

import Image from "next/image";

export default function TafsirOutline() {
  return (
    <section className="w-full px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col md:flex-row">
          {/* Left - Image */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-[300px] lg:min-h-[360px] xl:min-h-[400px]">
            <Image
              src="/images/tafsir.jpg"
              alt="Quran Tafsir"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right - Text Content */}
          <div className="w-full md:w-1/2 min-w-0 bg-[#f5f5f5] p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 flex flex-col justify-center">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#182b68] mb-2 sm:mb-3 md:mb-5 leading-tight">
              Discover the Deep Meaning and Wisdom of the Holy Quran
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3 md:mb-5">
              Our Online Quran Tafsir Course is specially designed for those who
              wish to explore the profound depth, wisdom, and divine guidance
              hidden within every verse of the Holy Quran. Go beyond recitation
              and translation — understand the complete message of Allah with
              clarity and spiritual insight, guided by our qualified and
              knowledgeable Islamic scholars.
            </p>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
              Whether you are a beginner seeking basic understanding or someone
              looking to deepen your existing knowledge, our well-structured
              lessons make it easy to study the authentic Tafsir of the Holy
              Quran from the comfort of your home, in a way that truly transforms
              your heart and strengthens your faith.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
