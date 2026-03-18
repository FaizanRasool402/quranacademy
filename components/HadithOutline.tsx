 "use client";

import Image from "next/image";

export default function HadithOutline() {
  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col md:flex-row">
          {/* Left - Text Content */}
          <div className="w-full md:w-1/2 bg-[#f5f5f5] p-4 sm:p-5 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center order-1">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#182b68] mb-2 sm:mb-3 md:mb-5">
              Inspire Young Hearts With the Teachings of the Prophet ﷺ
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3 md:mb-5">
              Our Hadith Studies for Kids Course is specially designed for young
              learners who wish to explore the beautiful sayings and teachings of
              our beloved Prophet Muhammad ﷺ in a simple, engaging, and age-appropriate
              way. Go beyond basic knowledge and help your child understand the true
              wisdom and guidance of the Prophet ﷺ with clarity and love, guided by
              our qualified and experienced Islamic teachers.
            </p>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
              Whether your child is just beginning their Islamic journey or looking to
              deepen their understanding, our well-structured lessons make it easy
              to learn authentic Hadiths from the comfort of your home, in a way
              that truly inspires young hearts, builds strong character, and brings
              your child closer to Allah and the Sunnah of His beloved Prophet ﷺ.
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-[320px] lg:min-h-[380px] xl:min-h-[400px] order-2">
            <Image
              src="/images/teach.jpeg"
              alt="Hadith Studies for Kids"
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

