"use client";

const benefits = [
  {
    icon: "🕌",
    title: "Learn at Your Own Pace",
    description:
      "Our online Noorani Qaida course gives you the freedom to study anytime and anywhere according to your own schedule. No need to rush — learn comfortably from the convenience of your home at a speed that suits you best.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Qualified Teachers",
    description:
      "Our highly qualified and certified Quran tutors guide you step by step with proper Arabic pronunciation and Tajweed rules. With years of teaching experience, our teachers ensure every student gets personal attention and clear understanding.",
  },
  {
    icon: "📖",
    title: "Strong Quranic Foundation",
    description:
      "Noorani Qaida is the first and most important step towards reading the Holy Quran correctly. Our structured lessons help beginners build a solid foundation in Arabic letters, words, and Tajweed from the very beginning.",
  },
];

export default function NoraniBenefits() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#182b68] text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-3xl mx-auto px-2">
          Benefits of Online Noorani Qaida Course
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#f8f8f8] rounded-xl p-5 sm:p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 max-w-md mx-auto sm:max-w-none sm:mx-0 w-full"
            >
              {/* <div className="text-3xl sm:text-4xl mb-4">{benefit.icon}</div> */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
