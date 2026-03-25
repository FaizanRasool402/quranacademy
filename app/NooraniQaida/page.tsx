import type { Metadata } from "next";
import NooraniQaidaHero from "@/components/NooraniQaidaHero";
import NoraniQaidaOutline from "@/components/NoraniQaidaOutline";
import NoraniBenefits from "@/components/NoraniBenefits";

export const metadata: Metadata = {
  title: "Online Noorani Qaida Course",
  description:
    "Learn Noorani Qaida online with expert female tutors. Perfect for beginners — kids & adults learn correct Arabic pronunciation & Quran reading.",
  alternates: { canonical: "/NooraniQaida" },
};

export default function NooraniQaidaPage() {
  return (
    <div>
      <NooraniQaidaHero />
      <NoraniQaidaOutline />
      <NoraniBenefits />
    </div>
  );
}
