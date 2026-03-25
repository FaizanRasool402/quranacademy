import type { Metadata } from "next";
import TeacherHero from "@/components/TeacherHero";
export const metadata: Metadata = {
  title: "Our Quran Teachers",
  description:
    "Meet our certified female Quran tutors — specialists in Tajweed, Hifz & Islamic Studies, dedicated to teaching kids & adults worldwide.",
  alternates: { canonical: "/Teachers" },
};
import MeetTeachers from "@/components/MeetTeachers";

export default function TeachersPage() {
  return (
    <div>
      <TeacherHero />
      <MeetTeachers />
    </div>
  );
}
