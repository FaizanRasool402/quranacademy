import SalahHero from "@/components/SalahHero";
import SalahOutline from "@/components/SalahOutline";
import SalahBenefits from "@/components/SalahBenefits";

export default function SalahPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <SalahHero />
      <SalahOutline />
      <SalahBenefits />
    </main>
  );
}

