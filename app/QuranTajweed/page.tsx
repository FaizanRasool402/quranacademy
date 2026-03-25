import type { Metadata } from "next";
import QuranTajweedHero from "@/components/QuranTajweedHero";
export const metadata: Metadata = {
  title: "Online Quran Tajweed Course",
  description:
    "Master Quran recitation with proper Tajweed at Aiza Quran Academy. Certified female tutors offer one-on-one online classes for kids & adults. Free Trial!",
  alternates: { canonical: "/QuranTajweed" },
};
import TajweedOutline from "@/components/TajweedOutline";
import TajweedBenefits from "@/components/TajweedBenefits";

export default function QuranTajweedPage() {
  return (
    <div>
      <QuranTajweedHero />
      <TajweedOutline />
      <TajweedBenefits />
    </div>
  );
}
