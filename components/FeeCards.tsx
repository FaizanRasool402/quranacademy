"use client";

import Link from "next/link";

const usaCanadaPlans = [
  {
    title: "Starter",
    price: 30,
    featured: false,
    features: [
      "3 Days Per Week",
      "30 Minute Class",
      "12 Classes Per Month",
      "First Student Fee 30$",
      "2nd Student Fee 25$",
    ],
  },
  {
    title: "Starter",
    price: 50,
    featured: true,
    features: [
      "4 Days Per Week",
      "30 Minute Class",
      "16 Classes Per Month",
      "First Student Fee 55$",
      "2nd Student Fee 50$",
    ],
  },
  {
    title: "Starter",
    price: 60,
    featured: false,
    features: [
      "5 Days Per Week",
      "30 Minute Class",
      "20 Classes Per Month",
      "First Student Fee 60$",
      "2nd Student Fee 55$",
    ],
  },
  {
    title: "Starter",
    price: 25,
    featured: false,
    features: [
      "Weekend Classes",
      "30 Minute Class",
      "08 Classes Per Month",
      "First Student Fee 25$",
      "2nd Student Fee 20$",
    ],
  },
];

const ukEuropePlans = [
  {
    title: "Starter",
    price: 20,
    priceLabel: "€20",
    featured: false,
    features: [
      "3 Days Per Week",
      "30 Minute Class",
      "12 Classes Per Month",
      "First Student Fee 25€",
      "2nd Student Fee 20€",
    ],
  },
  {
    title: "Starter",
    price: 30,
    priceLabel: "€30",
    featured: true,
    features: [
      "4 Days Per Week",
      "30 Minute Class",
      "16 Classes Per Month",
      "First Student Fee 30€",
      "2nd Student Fee 25€",
    ],
  },
  {
    title: "Starter",
    price: 40,
    priceLabel: "€40",
    featured: false,
    features: [
      "5 Days Per Week",
      "30 Minute Class",
      "20 Classes Per Month",
      "First Student Fee 40€",
      "2nd Student Fee 35€",
    ],
  },
  {
    title: "Starter",
    price: 20,
    priceLabel: "€20",
    featured: false,
    features: [
      "Weekend Classes",
      "30 Minute Class",
      "08 Classes Per Month",
      "First Student Fee 20€",
      "2nd Student Fee 18€",
    ],
  },
];

function FeeCardGrid({
  plans,
}: {
  plans: Array<{
    title: string;
    price: number;
    priceLabel?: string;
    featured: boolean;
    features: string[];
  }>;
}) {
  return (
    <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {plans.map((plan, index) => (
            <div
              key={`${plan.price}-${plan.features[0]}-${index}`}
              className={`rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col max-w-md mx-auto sm:max-w-none sm:mx-0 w-full ${
                plan.featured
                  ? "bg-[#182b68] text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              {/* Title */}
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl pt-5 sm:pt-6 md:pt-8 pb-3 sm:pb-4">
                {plan.title}
              </h3>

              {/* Price Oval */}
              <div className="flex justify-center px-4 pb-4 sm:pb-5">
                <div
                  className={`inline-flex items-baseline gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full ${
                    plan.featured ? "bg-white" : "bg-[#182b68]"
                  }`}
                >
                  <span
                    className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                      plan.featured ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {"priceLabel" in plan ? plan.priceLabel : `$${plan.price}`}
                  </span>
                  <span
                    className={`text-xs sm:text-sm ${
                      plan.featured ? "text-gray-700" : "text-white/90"
                    }`}
                  >
                    Month
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex-1 px-4 sm:px-6 pb-5 sm:pb-6 space-y-2 sm:space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-sm sm:text-[15px] font-medium ${
                      plan.featured ? "text-white/95" : "text-gray-700"
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2">
                <Link
                  href="/contact"
                  className={`block w-full py-2.5 sm:py-3 rounded-lg text-center font-semibold text-xs sm:text-sm border-2 transition-colors ${
                    plan.featured
                      ? "bg-white text-[#182b68] border-[#182b68] hover:bg-gray-50"
                      : "bg-white text-gray-900 border-gray-300 hover:border-[#182b68] hover:text-[#182b68]"
                  }`}
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
    </div>
  );
}

export default function FeeCards() {
  return (
    <section className="w-full py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        {/* USA & Canada Section */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#182b68] text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2">
            For USA & Canada Monthly Fee
          </h2>
          <FeeCardGrid plans={usaCanadaPlans} />
        </div>

        {/* UK & Europe Section */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#182b68] text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2">
            For UK and Europe Monthly Fee
          </h2>
          <FeeCardGrid plans={ukEuropePlans} />
        </div>
      </div>
    </section>
  );
}
