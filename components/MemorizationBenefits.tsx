"use client";

const benefits = [
  {
    title: "Personalized Memorization Plan",
    description:
      "Every student is different, which is why we create a customized memorization plan for each individual. Our teachers set daily targets, track your progress, and adjust the pace according to your learning ability to ensure smooth and consistent Hifz.",
  },
  {
    title: "Revision & Retention System",
    description:
      "Memorizing the Quran is not just about learning new verses — it is equally important to revise and retain what you have already memorized. Our structured revision system ensures that every previously memorized portion stays strong and firm in your memory.",
  },
  {
    title: "Supportive & Encouraging Teachers",
    description:
      "Our dedicated Huffaz teachers provide constant motivation, support, and guidance throughout your entire Hifz journey. With regular feedback, gentle correction, and personal attention, we make sure every student stays focused, confident, and consistent on this blessed path.",
  },
];

export default function MemorizationBenefits() {
  return (
    <section className="w-full bg-[#f8fafc] py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#182b68] text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 max-w-3xl mx-auto px-2">
          Benefits of Online Quran Memorization Course
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 shadow-[0_4px_20px_rgba(24,43,104,0.08)] border border-[#182b68]/10 max-w-md mx-auto sm:max-w-none sm:mx-0 w-full"
            >
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#182b68] mb-1.5 sm:mb-2 md:mb-3 lg:mb-4">
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
