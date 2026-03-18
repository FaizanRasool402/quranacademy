 "use client";

import Image from "next/image";

export default function SalahOutline() {
  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col md:flex-row">
          {/* Left - Image */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-[350px] lg:min-h-[400px]">
            <Image
              src="/images/salah.jpeg"
              alt="Salah & Six Kalimas"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right - Text Content */}
          <div className="w-full md:w-1/2 bg-[#f5f5f5] p-4 sm:p-5 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#182b68] mb-3 sm:mb-4 md:mb-5">
              Strengthen Your Faith With Prayer and the Words of Islam
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our Salah &amp; Six Kalimas Course is specially designed for those
              who wish to learn the correct method of prayer and the fundamental
              declarations of Islamic faith in a simple, authentic, and easy-to-understand
              way. Go beyond basic recitation and help yourself or your child truly
              understand the meaning, importance, and spiritual beauty of Salah and
              the Six Kalimas with clarity and devotion, guided by our qualified and
              experienced Islamic teachers. Whether you are a complete beginner taking
              your very first steps or looking to perfect your prayer and strengthen
              your knowledge, our well-structured lessons make it easy to learn from
              the comfort of your home, in a way that truly transforms your connection
              with Allah, deepens your faith, and fills your heart with the light of
              Islam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

