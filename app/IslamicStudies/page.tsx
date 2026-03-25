import type { Metadata } from "next";
import IslamicStudiesHero from "@/components/IslamicStudiesHero";
export const metadata: Metadata = {
  title: "Online Basic Islamic Studies Course",
  description:
    "Learn Islamic Studies online with qualified female tutors. Covers Aqeedah, Ibadat & Islamic manners for kids & adults in structured one-on-one sessions.",
  alternates: { canonical: "/IslamicStudies" },
};
import IslamicStudyOutline from "@/components/IslamicStudyOutline";
import IslamicStudyBenefits from "@/components/IslamicStudyBenefits";

export default function IslamicStudiesPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <IslamicStudiesHero />
      <IslamicStudyOutline />
      <IslamicStudyBenefits />
    </main>
  );
}

