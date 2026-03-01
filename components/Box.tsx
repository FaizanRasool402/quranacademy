"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Box() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <style jsx>{`
        @keyframes popupScale {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(40px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-popup {
          animation: popupScale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-left {
          animation: fadeInLeft 0.7s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-right {
          animation: fadeInRight 0.7s ease-out 0.5s forwards;
          opacity: 0;
        }
        .hidden-initial {
          opacity: 0;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className={`${isVisible ? 'animate-popup' : 'hidden-initial'} bg-gradient-to-br from-[#5a8a6f] to-[#4a7a5f] rounded-3xl overflow-hidden shadow-2xl relative`}>
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/cardback.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Left Side - Text Content */}
            <div className={`${isVisible ? 'animate-left' : 'hidden-initial'} flex flex-col justify-center space-y-6`}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Aiza Quran Academy
              </h1>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                With over 10 years of experience, we provide quality one-on-one 
                Quran education online via Zoom, Google Meet and Microsoft Teams. 
                Learn with expert tutors from the comfort of your home, focusing 
                on Tajweed, pronunciation, and clear understanding. Just a device 
                and internet is all you need. Join hundreds who trust us for their 
                Quran learning journey.
              </p>
            </div>

            {/* Right Side - Teacher Image/Video Placeholder */}
            <div className={`${isVisible ? 'animate-right' : 'hidden-initial'} flex items-center justify-center`}>
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-900">
                {/* YouTube Video */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/i6XCfAZgSEQ"
                  title="Aiza Quran Academy Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}