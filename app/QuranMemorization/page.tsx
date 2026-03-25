import type { Metadata } from "next";
import QuranMemorizationHero from "@/components/QuranMemorizationHero";
export const metadata: Metadata = {
  title: "Online Quran Memorization (Hifz) Course",
  description:
    "Memorize the Holy Quran online with qualified female tutors. Our structured Hifz program guides kids & adults step by step to become Hafiz from home.",
  alternates: { canonical: "/QuranMemorization" },
};
import MemorizationOutline from "@/components/MemorizationOutline";
import MemorizationBenefits from "@/components/MemorizationBenefits";

export default function QuranMemorizationPage() {
  return (
    <div>
      <QuranMemorizationHero />
      <MemorizationOutline />
      <MemorizationBenefits />
    </div>
  );
}
