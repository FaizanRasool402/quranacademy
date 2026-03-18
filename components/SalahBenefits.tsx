 "use client";

const benefits = [
  {
    title: "Learn at Your Own Pace, Anytime and Anywhere",
    description:
      "Our Online Salah & Six Kalimas Course gives you the complete freedom to study anytime and anywhere according to your own schedule. No need to rush — learn the correct method of prayer and the Six Kalimas comfortably from the convenience of your home at a pace that suits you and your family best.",
  },
  {
    title: "Expert Qualified Islamic Teachers",
    description:
      "Our highly qualified and experienced Islamic teachers guide you step by step through the correct method of Salah and the Six Kalimas with proper pronunciation, meaning, and understanding. With years of teaching experience, our teachers ensure every student receives personal attention and develops a deep and heartfelt connection with their prayers.",
  },
  {
    title: "Build a Lifelong Connection With Allah Through Prayer",
    description:
      "Salah and the Six Kalimas are the most essential foundations of a Muslim's daily life and faith. Our structured lessons help beginners and young learners build a solid understanding of prayer and the declarations of Islamic faith, shaping their spiritual life, daily routine, and love for Allah from the very beginning.",
  },
];

export default function SalahBenefits() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#182b68] text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-3xl mx-auto px-2">
          Benefits of Online Salah & Six Kalimas Course
        </h2>

        {/* Cards */}
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

