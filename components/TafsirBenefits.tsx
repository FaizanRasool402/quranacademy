"use client";

const benefits = [
  {
    title: "Strengthen Your Faith Through Deep Understanding",
    description:
      "Studying Tafsir goes far beyond simply reading the Quran — it opens the door to a deeper and more meaningful relationship with Allah. Understanding the context, wisdom, and divine message behind every verse helps strengthen your Iman and brings a profound transformation in your daily life.",
  },
  {
    title: "Learn from Authentic Islamic Sources",
    description:
      "Our Quran Tafsir course is based on authentic and well-recognized Islamic sources, ensuring that every explanation and interpretation is accurate and reliable. Our qualified scholars guide students through classical Tafsir books with clarity, making complex concepts easy to understand for every level of student.",
  },
  {
    title: "Apply Quranic Teachings in Daily Life",
    description:
      "The true purpose of learning Tafsir is to understand how the Holy Quran guides us in every aspect of our lives. Our course helps students connect Quranic teachings with real life situations, making it easier to follow the path of Allah with confidence, wisdom, and a truly enlightened heart.",
  },
];

export default function TafsirBenefits() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#182b68] text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 max-w-3xl mx-auto px-2">
          Benefits of Online Quran Tafsir Course
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
