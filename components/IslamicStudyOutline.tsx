 "use client";

import Image from "next/image";

export default function IslamicStudyOutline() {
  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col md:flex-row">
          {/* Left - Image */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-[350px] lg:min-h-[400px]">
            <Image
              src="/images/IslamicStudies.jpeg"
              alt="Basic Islamic Studies"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right - Text Content */}
          <div className="w-full md:w-1/2 bg-[#f5f5f5] p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#182b68] mb-3 sm:mb-4 md:mb-5">
              Build a Strong Foundation in Islamic Knowledge
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our Basic Islamic Studies Course is specially designed for those who wish to learn the true essence of Islam — its beliefs, practices, and divine guidance — in a simple, authentic, and meaningful way. Go beyond the surface and understand the complete teachings of our beautiful religion with clarity and confidence, guided by our qualified and knowledgeable Islamic scholars. Whether you are a complete beginner taking your first steps or someone looking to strengthen your existing Islamic knowledge, our well-structured lessons make it easy to study the fundamentals of Islam from the comfort of your home, in a way that truly transforms your heart, strengthens your faith, and brings you closer to Allah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

