 "use client";

const benefits = [
  {
    icon: "🌙",
    title: "Fun and Engaging Learning Experience",
    description:
      "Our Online Hadith Studies for Kids Course gives young learners the freedom to study anytime and anywhere according to their own schedule. No need to rush — children can learn the beautiful teachings of the Prophet ﷺ comfortably from the convenience of their home at a pace that suits them best.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Qualified Islamic Teachers",
    description:
      "Our highly qualified and experienced Islamic teachers guide young students step by step through authentic Hadiths in a simple, clear, and age-appropriate manner. With years of teaching experience, our teachers ensure every child receives personal attention and develops a true love and understanding of the Prophet's ﷺ teachings.",
  },
  {
    icon: "🧡",
    title: "Build Strong Islamic Character From an Early Age",
    description:
      "Hadith Studies is one of the most important steps towards raising a child with strong Islamic values and beautiful character. Our structured lessons help young learners build a solid foundation in the Sunnah of the Prophet ﷺ, shaping their personality, manners, and love for Allah from the very beginning.",
  },
];

export default function HadithBenefits() {
  return (
    <section className="w-full bg-[#f8fafc] py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#182b68] text-center mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-2">
          Benefits of Online Hadith Studies For Kids Course
        </h2>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 shadow-[0_4px_20px_rgba(24,43,104,0.08)] border border-[#182b68]/10 max-w-md mx-auto sm:max-w-none sm:mx-0 w-full"
            >
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#182b68] mb-1.5 sm:mb-2 md:mb-3">
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

