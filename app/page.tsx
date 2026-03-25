import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
// import StatsCounter from "@/components/Counters";
import Box from "@/components/Box";
export const metadata: Metadata = {
  title: {
    absolute: "Aiza Quran Academy | Learn Quran Online with Expert Tutors",
  },
  description:
    "Learn Quran online with expert female tutors. One-on-one classes for kids & adults — Tajweed, Hifz, Islamic Studies. Try 5 Days Free Trial!",
  alternates: { canonical: "/" },
};
import Points from "@/components/Points";
import HomeAbout from "@/components/HomeAbout";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const Download = dynamic(() => import("@/components/Download"));

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <StatsCounter /> */}
      <Box />
      <Points />
      <HomeAbout />
      <Services />
      <Testimonials />
      <Download />
    </div>
  );
}