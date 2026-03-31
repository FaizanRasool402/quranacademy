"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "Noorani Qaida Online",
    tag: "Popular",
    image: "/images/norani.jpg",
    href: "/NooraniQaida",
  },
  {
    title: "Quran Translation",
    tag: "Trending",
    image: "/images/quran.webp",
    href: "/QuranTranslation",
  },
  {
    title: "Quran Tajweed",
    tag: "Featured",
    image: "/images/tajweed.png",
    href: "/QuranTajweed",
  },
  {
    title: "Quran Memorization",
    tag: "Popular",
    image: "/images/teaching.jpeg",
    href: "/QuranMemorization",
  },
  {
    title: "Quran Tafsir",
    tag: "Trending",
    image: "/images/tafsir.jpg",
    href: "/QuranTafsir",
  },
  {
    title: "Basic Islamic Studies",
    tag: "New",
    image: "/images/IslamicStudies.jpeg",
    href: "/IslamicStudies",
  },
  {
    title: "Salah and Six Kalmas",
    tag: "Popular",
    image: "/images/salah.jpeg",
    href: "/Salah",
  },
  {
    title: "Hadith Studies For Kids",
    tag: "Featured",
    image: "/images/teach.jpeg",
    href: "/Hadith",
  },
];

export default function Services() {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .service-card {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .service-card.animate-in {
          opacity: 1;
          transform: scale(1);
        }
        .service-card:nth-child(1) { transition-delay: 0s; }
        .service-card:nth-child(2) { transition-delay: 0.12s; }
        .service-card:nth-child(3) { transition-delay: 0.24s; }
        .service-card:nth-child(4) { transition-delay: 0.36s; }
        .service-card:nth-child(5) { transition-delay: 0.48s; }
        .service-card:nth-child(6) { transition-delay: 0.60s; }
        .service-card:nth-child(7) { transition-delay: 0.72s; }
        .service-card:nth-child(8) { transition-delay: 0.84s; }
      `}</style>
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
            Aiza Quran Academy Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed max-w-2xl mx-auto px-2">
            At Aiza Quran Academy, we offer a wide range of Quran and Islamic courses designed to guide learners of all ages toward a deeper connection with their faith.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <article
                key={service.title}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="service-card bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={72}
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
                    href={service.href}
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
    </>
  );
}
