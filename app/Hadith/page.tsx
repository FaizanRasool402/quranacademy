import HadithHero from "@/components/HadithHero";
import HadithOutline from "@/components/HadithOutline";
import HadithBenefits from "@/components/HadithBenefits";

export default function HadithPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <HadithHero />
      <HadithOutline />
      <HadithBenefits />
    </main>
  );
}

