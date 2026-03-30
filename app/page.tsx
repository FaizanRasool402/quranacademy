import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const Box = dynamic(() => import("@/components/Box"));
const Points = dynamic(() => import("@/components/Points"));
const HomeAbout = dynamic(() => import("@/components/HomeAbout"));
const Services = dynamic(() => import("@/components/Services"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Download = dynamic(() => import("@/components/Download"));

export const metadata: Metadata = {
  title: {
    absolute: "Aiza Quran Academy | Learn Quran Online with Expert Tutors",
  },
  description:
    "Learn Quran online with expert female tutors. One-on-one classes for kids & adults — Tajweed, Hifz, Islamic Studies. Try 5 Days Free Trial!",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Box />
      <Points />
      <HomeAbout />
      <Services />
      <Testimonials />
      <Download />
    </div>
  );
}
