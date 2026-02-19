"use client";

import Image from "next/image";

export default function MemorizationOutline() {
  return (
    <section className="w-full px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col md:flex-row">
          {/* Left - Text Content */}
          <div className="w-full md:w-1/2 min-w-0 bg-[#f5f5f5] p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 flex flex-col justify-center order-1">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#182b68] mb-2 sm:mb-3 md:mb-5 leading-tight">
              Become a Hafiz e Quran from the Comfort of Your Home
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3 md:mb-5">
              Our Online Quran Memorization Course is specially designed for
              those who carry the beautiful dream of memorizing the entire Holy
              Quran in their hearts. With the guidance of our highly qualified
              and experienced Huffaz teachers, we make this sacred journey
              structured, achievable, and truly rewarding.
            </p>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
              Whether you are a child taking the first steps or an adult
              fulfilling a lifelong dream, our personalized lessons and proven
              memorization techniques make it possible to become a Hafiz e Quran
              from the comfort of your home, at your own pace.
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-[300px] lg:min-h-[360px] xl:min-h-[400px] order-2">
            <Image
              src="/images/Memorization.jpg"
              alt="Quran Memorization"
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
