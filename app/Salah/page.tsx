import type { Metadata } from "next";
import SalahHero from "@/components/SalahHero";
import SalahOutline from "@/components/SalahOutline";
import SalahBenefits from "@/components/SalahBenefits";

export const metadata: Metadata = {
  title: "Online Salah & Six Kalimas Course",
  description:
    "Learn correct Salah & Six Kalimas online. Expert female tutors guide kids & adults with proper pronunciation & deep understanding of Islamic prayer.",
  alternates: { canonical: "/Salah" },
};

export default function SalahPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <SalahHero />
      <SalahOutline />
      <SalahBenefits />
    </main>
  );
}
