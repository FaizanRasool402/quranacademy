import type { Metadata } from "next";
import FaqsClient from "@/components/FaqsClient";
export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Aiza Quran Academy — courses, female tutors, class timings, fees, free trial classes & enrollment for kids & adults.",
  alternates: { canonical: "/Faqs" },
};

export default function FaqsPage() {
  return <FaqsClient />;
}
