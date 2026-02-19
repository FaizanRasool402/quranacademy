"use client";

import Image from "next/image";

export default function TranslationOutline() {
  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col md:flex-row">
          {/* Left - Text Content */}
          <div className="w-full md:w-1/2 bg-[#f5f5f5] p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center order-1">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#182b68] mb-3 sm:mb-4 md:mb-5">
              Understand the Quran in Your Own Language
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 md:mb-5">
              Our Online Quran Translation Course is specially designed for those
              who want to go beyond recitation and truly understand the
              beautiful message of Allah. Learn the meaning of every verse with
              clarity and depth, guided by knowledgeable and experienced
              teachers.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Whether you are a beginner or already know how to recite the
              Quran, our structured lessons make it easy to understand the
              translation and Tafseer of the Quran from the comfort of your
              home, at your own pace.
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-[350px] lg:min-h-[400px] order-2">
            <Image
              src="/images/quran.webp"
              alt="Quran Translation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
