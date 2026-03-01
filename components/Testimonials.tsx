"use client";

import React from "react";

// Star Icon Component
const StarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const testimonials1 = [
  {
    id: 1,
    rating: 5,
    text: "Aiza Quran Academy has been a blessing for my children. The teachers are incredibly patient and knowledgeable. My son memorized his first Surah within just two weeks!",
    name: "Fatima Al-Rashid",
  },
  {
    id: 2,
    rating: 5,
    text: "I enrolled my daughter in Aiza Quran Academy and the results are amazing. She now reads the Quran with proper Tajweed. Highly recommend this academy to every Muslim family.",
    name: "Usman Malik",
  },
  {
    id: 3,
    rating: 5,
    text: "The online classes at Aiza Quran Academy are very well structured. The tutor is always on time, very professional, and makes learning the Quran enjoyable for kids.",
    name: "Ayesha Siddiqui",
  },
  {
    id: 4,
    rating: 5,
    text: "Alhamdulillah, my son has improved so much since joining Aiza Quran Academy. The one-on-one sessions are really effective. May Allah reward the teachers for their efforts.",
    name: "Hassan Ahmed",
  },
];


function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials1)[0];
}) {
  return (
    <div className="flex-shrink-0 w-[min(350px,85vw)] mr-5 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
      <div className="flex gap-1 text-[#fda600] mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="text-gray-700 text-sm mb-6 leading-relaxed">
        &quot;{testimonial.text}&quot;
      </p>
      <div>
        <h4 className="font-semibold text-gray-900 text-sm">
          {testimonial.name}
        </h4>
      </div>
    </div>
  );
}

function MarqueeRow({
  testimonials,
  direction = "forwards",
}: {
  testimonials: typeof testimonials1;
  direction?: "forwards" | "reverse";
}) {
  const duration = "60s";
  return (
    <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)" }}>
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${duration} linear infinite ${direction === "reverse" ? "reverse" : "normal"}`,
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#182b68] text-sm font-medium mb-2">
              What Clients Say
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Hear from our clients on how Aiza Quran Academy has delivered
              measurable impact and strategic value.
            </p>
          </div>

          {/* Marquee Row */}
          <div className="flex flex-col gap-6">
            <MarqueeRow testimonials={testimonials1} direction="forwards" />
          </div>
        </div>
      </section>
  );
}
