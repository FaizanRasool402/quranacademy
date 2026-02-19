"use client";

import Image from "next/image";

export default function NoraniQaidaOutline() {
  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col md:flex-row">
          {/* Left - Image */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-[350px] lg:min-h-[400px]">
            <Image
              src="/images/norani.jpg"
              alt="Noorani Qaida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right - Text Content */}
          <div className="w-full md:w-1/2 bg-[#f5f5f5] p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#182b68] mb-3 sm:mb-4 md:mb-5">
              Best Online Noorani Qaida Course
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 md:mb-5">
              Our Noorani Qaida course is specially designed for beginners who
              want to learn the correct pronunciation of Arabic letters and
              Quranic words from scratch, guided by qualified and experienced
              teachers.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Whether you are a child or an adult, our structured lessons make it
              easy to start reading the Quran with proper Tajweed from the very
              first day, all from the comfort of your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
