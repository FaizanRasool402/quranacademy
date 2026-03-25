import type { Metadata } from "next";
import CountHero from "@/components/CountHero";
export const metadata: Metadata = {
  title: "Countries We Serve",
  description:
    "Aiza Quran Academy serves students in USA, UK, Canada, Australia & UAE. Join flexible one-on-one online Quran classes from anywhere in the world.",
  alternates: { canonical: "/Countries" },
};
import Countres from "@/components/Countres";

export default function CountriesPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <CountHero />
      <Countres />
    </main>
  );
}

