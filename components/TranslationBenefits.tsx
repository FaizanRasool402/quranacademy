"use client";

const benefits = [
  {
    icon: "📖",
    title: "Connect with the Words of Allah",
    description:
      "Learn the true meaning of every Quranic verse in your own language. Understanding the words of Allah directly helps strengthen your faith, improve your prayers, and build a deeper personal connection with the Holy Quran.",
  },
  {
    icon: "🕌",
    title: "Explore the Wisdom Behind Every Verse",
    description:
      "Go beyond simple translation and explore the deeper meaning and context behind each verse. Our teachers explain the background and wisdom of Quranic ayaat in a simple and easy-to-understand way for every level of student.",
  },
  {
    icon: "🌍",
    title: "No Boundaries, No Limits",
    description:
      "Our fully online classes give you the freedom to learn Quran translation from the comfort of your home, no matter where you are in the world. Flexible timings make it easy to fit learning into your daily routine without any hassle.",
  },
];

export default function TranslationBenefits() {
  return (
    <section className="w-full bg-[#f8fafc] py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#182b68] text-center mb-4 sm:mb-6 max-w-3xl mx-auto px-2">
          Benefits of Online Quran Translation Course
        </h2>
        <p className="text-gray-600 text-sm sm:text-base text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
          Discover why our Quran Translation course helps you understand the
          beautiful message of Allah in your own language.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-[0_4px_20px_rgba(24,43,104,0.08)] border border-[#182b68]/10 max-w-md mx-auto sm:max-w-none sm:mx-0 w-full"
            >
              {/* <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                {benefit.icon}
              </div> */}
              <h3 className="text-base sm:text-lg font-bold text-[#182b68] mb-2 sm:mb-3">
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
