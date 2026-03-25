import type { Metadata } from "next";
import CoursesHero from "@/components/CoursesHero";
export const metadata: Metadata = {
  title: "Online Quran Courses",
  description:
    "Explore all Quran courses at Aiza Quran Academy — Noorani Qaida, Tajweed, Hifz, Tafsir, Translation, Islamic Studies, Salah & Hadith. Expert female tutors.",
  alternates: { canonical: "/Courses" },
};
import Services from "@/components/Services";

export default function CoursesPage() {
  return (
    <div>
      <CoursesHero />
      <Services />
    </div>
  );
}
