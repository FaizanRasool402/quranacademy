import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
export const metadata: Metadata = {
  title: "About Us – Online Quran Academy",
  description:
    "Aiza Quran Academy is a trusted online Quran institute with certified female tutors for kids & adults. Learn Tajweed, Hifz & Islamic values.",
  alternates: { canonical: "/Aboutus" },
};
import HomeAbout from "@/components/HomeAbout";

export default function AboutUsPage() {
  return (
    <div>
      <AboutHero />
      <HomeAbout />
    </div>
  );
}
