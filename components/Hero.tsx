"use client";

import Image from "next/image";
import Link from "next/link";

/** Tiny placeholder for LCP image — reduces CLS without extra network */
const HERO_BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQ/9k=";

export default function Hero() {
  return (
    <section className="relative min-h-[55vh] sm:min-h-[90vh] w-full overflow-hidden flex items-center">
      <style jsx>{`
        @keyframes slideFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-from-left {
          animation: slideFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-from-right {
          animation: slideFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Background Image */}
      <Image
        src="/images/mmmain.jpeg"
        alt=""
        fill
        className="object-cover"
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={75}
        placeholder="blur"
        blurDataURL={HERO_BLUR_DATA_URL}
        style={{ objectPosition: "center 70%" }}
      />
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-8 md:gap-12">
          {/* Center - Text & Buttons */}
          <div className="animate-from-left px-5 py-8 sm:px-10 sm:py-12 md:px-16 md:py-16 max-w-3xl w-full text-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 whitespace-normal md:whitespace-nowrap">
                Learn Quran Online
              </h1>
              <p className="text-white/95 text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-5 max-w-2xl mx-auto">
                Aiza Quran Academy is one of the internationally leading
                Learn Quran teaching institute
              </p>
              <Link
                href="/Contactus"
                className="inline-block px-10 py-2 sm:px-12 sm:py-2.5 rounded-full font-semibold text-base sm:text-lg text-white bg-[#fda600] hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(253,166,0,0.35)]"
              >
                Register Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
