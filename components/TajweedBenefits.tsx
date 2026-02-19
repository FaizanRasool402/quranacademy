"use client";

const benefits = [
  {
    icon: "🎙️",
    title: "Recite with Confidence & Perfection",
    description:
      "Master the correct rules of Tajweed and recite the Holy Quran with confidence, beauty, and accuracy. Proper Tajweed not only improves your recitation but also adds a deep sense of spirituality and connection to every word you recite.",
  },
  {
    icon: "📚",
    title: "Step by Step Structured Learning",
    description:
      "Our course is carefully structured from basic to advanced Tajweed rules, making it easy for every student to follow and understand. Each lesson builds on the previous one, ensuring steady and consistent progress throughout the entire course.",
  },
  {
    icon: "🕌",
    title: "One-on-One Personalized Classes",
    description:
      "Learn in a comfortable and focused environment with personalized attention from our qualified Tajweed teachers. Every student gets individual feedback and correction to ensure they are applying Tajweed rules accurately in their daily recitation.",
  },
];

export default function TajweedBenefits() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#182b68] text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 max-w-3xl mx-auto px-2">
          Benefits of Online Quran Tajweed Course
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#f8f8f8] rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 max-w-md mx-auto sm:max-w-none sm:mx-0 w-full"
            >
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3 lg:mb-4">
                 {benefit.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
