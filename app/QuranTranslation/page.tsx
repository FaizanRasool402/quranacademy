import type { Metadata } from "next";
import QuranTranslationHero from "@/components/QuranTranslationHero";
export const metadata: Metadata = {
  title: "Online Quran Translation Course",
  description:
    "Understand the Quran's meaning with our Translation course. Expert female tutors teach word-by-word Urdu & English translation for kids & adults worldwide.",
  alternates: { canonical: "/QuranTranslation" },
};
import TranslationOutline from "@/components/TranslationOutline";
import TranslationBenefits from "@/components/TranslationBenefits";

export default function QuranTranslationPage() {
  return (
    <div>
      <QuranTranslationHero />
      <TranslationOutline />
      <TranslationBenefits />
    </div>
  );
}
