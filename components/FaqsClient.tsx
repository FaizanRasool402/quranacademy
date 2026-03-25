"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you offer free trial Quran classes?",
    answer:
      "Yes, Aiza Quran Academy offers 5 Days Free Demo Classes so parents and students can experience our teaching method before enrolling in regular online Quran classes.",
  },
  {
    question: "What is Aiza Quran Academy?",
    answer:
      "Aiza Quran Academy is an online Quran learning platform that provides one-to-one Quran classes for kids and adults with qualified male and female Quran tutors.",
  },
  {
    question: "Why choose Aiza Quran Academy for online Quran classes?",
    answer:
      "Aiza Quran Academy offers experienced teachers, flexible class timings, affordable fees, and personalized one-to-one Quran learning for students worldwide.",
  },
  {
    question: "Do you provide female Quran teachers?",
    answer:
      "Yes, we provide qualified female Quran teachers for sisters and children who prefer learning from a female tutor.",
  },
  {
    question: "Are your female Quran tutors experienced?",
    answer:
      "Yes, our female Quran tutors are trained, certified, and experienced in teaching Quran with Tajweed to kids and adults.",
  },
  {
    question: "Can kids learn Quran online with Tajweed?",
    answer:
      "Yes, kids can easily learn Quran online with Tajweed through our structured lessons starting from Noorani Qaida and progressing step-by-step.",
  },
  {
    question: "What is the best age for kids to start Quran classes?",
    answer:
      "Children can start learning the Quran at 4 to 5 years old, beginning with Arabic letters and Noorani Qaida.",
  },
  {
    question: "Do you offer one-to-one online Quran classes?",
    answer:
      "Yes, all classes at Aiza Quran Academy are one-to-one sessions, allowing the teacher to give full attention to each student.",
  },
  {
    question: "How can I enroll my child in Aiza Quran Academy?",
    answer:
      "Parents can enroll their child by contacting us through our website or WhatsApp, and we will arrange a free demo class.",
  },
  {
    question: "Do you teach Noorani Qaida for beginners?",
    answer:
      "Yes, we teach Noorani Qaida online, which helps beginners learn Arabic letters and pronunciation before starting Quran reading.",
  },
  {
    question: "Do you offer Quran memorization (Hifz) classes?",
    answer:
      "Yes, Aiza Quran Academy offers Quran memorization (Hifz) classes with experienced teachers who guide students step by step.",
  },
  {
    question: "Are your Quran classes available worldwide?",
    answer:
      "Yes, students from USA, UK, Canada, Australia, Middle East, and other countries can join our online Quran classes.",
  },
  {
    question: "Do you offer flexible class timings for different countries?",
    answer:
      "Yes, we provide flexible class timings according to different time zones so students from any country can attend easily.",
  },
  {
    question: "What languages do your Quran teachers speak?",
    answer:
      "Our Quran teachers can teach in English, Urdu, and basic Arabic to help students understand their lessons clearly.",
  },
  {
    question: "How long is each online Quran class?",
    answer:
      "Each class usually lasts 25 to 30 minutes, which is ideal for maintaining student focus and effective learning.",
  },
  {
    question: "How many Quran classes are offered per week?",
    answer:
      "Students can choose 3, 4, or 5 classes per week depending on their learning plan.",
  },
  {
    question: "What is the fee structure for online Quran classes?",
    answer:
      "Our fee depends on the number of classes per week and course type.",
  },
  {
    question: "Where can I check the fee details?",
    answer:
      "You can check the latest fee details on our Fee Chart page.",
  },
  {
    question: "Are your online Quran classes affordable?",
    answer:
      "Yes, Aiza Quran Academy offers affordable and flexible fee plans for families around the world.",
  },
  {
    question: "Do you offer weekend Quran classes?",
    answer:
      "Yes, weekend Quran classes are available for students who are busy during weekdays.",
  },
  {
    question: "Can adults also learn Quran online?",
    answer:
      "Yes, adults can also learn Quran online with Tajweed through our personalized classes.",
  },
  {
    question: "What courses are offered at Aiza Quran Academy?",
    answer:
      "We offer courses including Noorani Qaida, Quran Reading with Tajweed, Quran Memorization, Basic Islamic Studies, Namaz, and Duas.",
  },
  {
    question: "Do you teach Namaz and Islamic basics for kids?",
    answer:
      "Yes, we teach Namaz, Kalmas, Duas, and basic Islamic knowledge for children.",
  },
  {
    question: "What device is required for online Quran classes?",
    answer:
      "Students only need a smartphone, tablet, or computer with internet connection and headphones.",
  },
  {
    question: "What makes Aiza Quran Academy different from other academies?",
    answer:
      "Aiza Quran Academy provides experienced tutors, female teachers, flexible schedules, free demo classes, and personalized one-to-one learning.",
  },
  {
    question: "Do you have multiple female Quran tutors?",
    answer:
      "Yes, we have multiple female Quran tutors, allowing flexible scheduling for students.",
  },
  {
    question: "How experienced are the teachers at Aiza Quran Academy?",
    answer:
      "Our teachers have several years of teaching experience and strong knowledge of Tajweed and Quran education.",
  },
  {
    question: "Do you offer a refund policy?",
    answer:
      "Yes, Aiza Quran Academy has a fair refund policy. Parents can contact our support team if they are not satisfied.",
  },
  {
    question: "How can parents track their child's progress?",
    answer:
      "Parents can communicate with teachers and receive regular updates about their child's Quran learning progress.",
  },
  {
    question: "How can I contact Aiza Quran Academy?",
    answer:
      "You can contact us through WhatsApp at +923088512527 or our website contact form to start 5 Days Free Demo Classes.",
  },
];

export default function FaqsClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] px-4 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#182b68] rounded-full" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              FAQs
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Find quick answers about our online Quran classes, teachers, courses, and admission process at Aiza Quran Academy.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
          {faqs.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 hover:bg-gray-50/60 transition-colors focus:outline-none"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 text-xs sm:text-sm font-semibold text-[#182b68]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                      {item.question}
                    </h2>
                    <span
                      className={`shrink-0 inline-flex items-center justify-center text-[#fda600] transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                  {openIndex === index && (
                    <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-gray-700">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
