const points = [
  {
    title: "Professional Teachers",
    description:
      "Our experienced teachers are dedicated to providing high-quality Quran education with proper Tajweed and Islamic knowledge.",
    icon: (
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Online Classes",
    description:
      "Learn Quran from the comfort of your home through our live one-on-one online sessions, available seven days a week at flexible timings.",
    icon: (
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Female Teachers",
    description:
      "We offer dedicated female Quran teachers for sisters and children, ensuring a comfortable, respectful, and nurturing learning environment.",
    icon: (
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
];

export default function Points() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {points.map((point) => (
            <div
              key={point.title}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#182b68] border-4 border-white flex items-center justify-center shadow-lg mb-4 sm:mb-6">
                {point.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed max-w-sm mx-auto sm:mx-0">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
