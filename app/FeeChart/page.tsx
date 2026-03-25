import type { Metadata } from "next";
import FeeHero from "@/components/FeeHero";
import FeeCards from "@/components/FeeCards";

export const metadata: Metadata = {
  title: "Fee Chart \u2013 Quran Course Pricing",
  description:
    "View affordable fee plans for all Quran courses at Aiza Quran Academy. Flexible pricing for kids & adults — Tajweed, Hifz, Islamic Studies & more.",
  alternates: { canonical: "/FeeChart" },
};

export default function FeeChartPage() {
  return (
    <div>
      <FeeHero />
      <FeeCards />
    </div>
  );
}
