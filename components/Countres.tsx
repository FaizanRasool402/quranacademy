import Image from "next/image";

const countries = [
  { name: "USA", image: "/images/usa.png" },
  { name: "Australia", image: "/images/australia.jpg" },
  { name: "UK", image: "/images/uk.png" },
  { name: "Germany", image: "/images/germany.png" },
  { name: "Canada", image: "/images/canada.png" },
  { name: "Norway", image: "/images/norway.png" },
  { name: "France", image: "/images/france.png" },
  { name: "UAE", image: "/images/uae.png" },
];

export default function Countres() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#182b68] rounded-full" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Countries
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Worldwide Access to Qualified Quran Teachers
          </h2>
          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed max-w-2xl mx-auto px-2">
            Learn Quran online from anywhere in the world — certified teachers, flexible schedules, and personalized one-on-one sessions tailored just for you.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {countries.map((country) => (
            <div
              key={country.name}
              className="group flex items-center gap-3 sm:gap-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 px-4 sm:px-5 py-3.5 sm:py-4 transition-all duration-300 hover:border-[#182b68]/30 hover:bg-[#182b68]/5 hover:shadow-[0_4px_16px_rgba(24,43,104,0.08)]"
            >
              <span className="relative flex h-9 w-14 sm:h-10 sm:w-16 shrink-0 overflow-hidden rounded-md bg-gray-100/80 transition-all duration-300 group-hover:ring-2 group-hover:ring-[#182b68]/20">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </span>
              <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-[#182b68] transition-colors">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
