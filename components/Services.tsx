"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Online Quran Recitation",
    tag: "Popular",
    image: "/images/choto.jpg",
  },
  {
    title: "Noorani Qaida Online",
    tag: "Trending",
    image: "/images/choto.jpg",
  },
  {
    title: "Quran Memorization",
    tag: "Featured",
    image: "/images/choto.jpg",
  },
  {
    title: "Quran Translation",
    tag: "Popular",
    image: "/images/choto.jpg",
  },
  {
    title: "Tajweed Classes",
    tag: "Trending",
    image: "/images/choto.jpg",
  },
  {
    title: "Online Quran Classes",
    tag: "Featured",
    image: "/images/choto.jpg",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#182b68] rounded-full" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Quran For All Academy Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed max-w-2xl mx-auto px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Tag */}
              <div className="px-6 pt-5 pb-2 flex justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm text-gray-500 bg-sky-50/80 border border-sky-100">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  {service.tag}
                </span>
              </div>

              {/* Headline */}
              <h3 className="px-6 pb-4 text-center text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-snug">
                {service.title}
              </h3>

              {/* Read more Button */}
              <div className="px-6 pb-6 flex justify-center">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#182b68] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Read more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
