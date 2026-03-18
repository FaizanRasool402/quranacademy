 "use client";

const benefits = [
  {
    title: "Build a Strong Islamic Foundation",
    description:
      "Our Online Basic Islamic Studies Course gives you the opportunity to learn the core beliefs, practices, and teachings of Islam in a clear and structured way. From Aqeedah to Ibadat, every lesson is designed to help beginners and advanced students alike build a solid and authentic foundation in Islamic knowledge from the very beginning.",
  },
  {
    title: "Expert Qualified Islamic Scholars",
    description:
      "Our highly qualified and experienced Islamic scholars guide you step by step through every topic with clarity, depth, and patience. With years of teaching experience, our teachers ensure that every student receives personal attention and gains a true and correct understanding of Islam according to the Quran and Sunnah.",
  },
  {
    title: "Learn From the Comfort of Your Home",
    description:
      "Our online Basic Islamic Studies Course gives you the complete freedom to study anytime and anywhere according to your own schedule. No need to travel or rush — access live classes and recorded lectures easily from the comfort of your home at a pace that suits you best.",
  },
];

export default function IslamicStudyBenefits() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#182b68] text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-3xl mx-auto px-2">
          Benefits of Online Basic Islamic Studies Course
        </h2>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#f8f8f8] rounded-xl p-5 sm:p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 max-w-md mx-auto sm:max-w-none sm:mx-0 w-full"
            >
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

