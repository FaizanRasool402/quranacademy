import type { Metadata } from "next";
import HadithHero from "@/components/HadithHero";
import HadithOutline from "@/components/HadithOutline";
import HadithBenefits from "@/components/HadithBenefits";

export const metadata: Metadata = {
  title: "Hadith Studies for Kids",
  description:
    "Teach kids authentic Hadiths of the Prophet via our online course. Expert female tutors make it engaging & age-appropriate for young Muslim learners.",
  alternates: { canonical: "/Hadith" },
};

export default function HadithPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <HadithHero />
      <HadithOutline />
      <HadithBenefits />
    </main>
  );
}
