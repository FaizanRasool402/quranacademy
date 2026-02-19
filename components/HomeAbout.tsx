"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="w-full bg-neutral-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-10 bg-[#182b68] rounded-full" />
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Best Online Quran Academy
            </h2>
            <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-md bg-[#182b68] text-white font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>

          {/* Right - Image */}
          <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3] max-h-[300px] sm:max-h-[350px] md:max-h-[400px] order-first md:order-none">
            <Image
              src="/images/choto.jpg"
              alt="Student reading Quran"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
