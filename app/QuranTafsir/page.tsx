import type { Metadata } from "next";
import QuranTafsirHero from "@/components/QuranTafsirHero";
export const metadata: Metadata = {
  title: "Online Quran Tafsir Course",
  description:
    "Deepen your Quran understanding with our online Tafsir course. Learn the meaning & wisdom behind every verse from experienced female Islamic scholars.",
  alternates: { canonical: "/QuranTafsir" },
};
import TafsirOutline from "@/components/TafsirOutline";
import TafsirBenefits from "@/components/TafsirBenefits";

export default function QuranTafsirPage() {
  return (
    <div>
      <QuranTafsirHero />
      <TafsirOutline />
      <TafsirBenefits />
    </div>
  );
}
