import type { Metadata } from "next";
import { Amiri, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import AdmissionPopup from "@/components/AdmissionPopup";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Aiza Quran Academy | Learn Quran Online with Expert Female Tutors",
    template: "%s | Aiza Quran Academy",
  },
  description:
    "Aiza Quran Academy is a trusted online Quran learning institute offering one-on-one classes for kids and adults. Learn Quran with Tajweed, Hifz, Tafsir, Islamic Studies and more from certified female tutors worldwide.",
  keywords: [
    "online Quran classes",
    "learn Quran online",
    "Quran for kids",
    "female Quran tutor",
    "Noorani Qaida online",
    "Quran Tajweed course",
    "Quran Memorization",
    "Quran Hifz online",
    "Islamic Studies online",
    "Aiza Quran Academy",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Aiza Quran Academy",
    title: "Aiza Quran Academy | Learn Quran Online with Expert Female Tutors",
    description:
      "Join Aiza Quran Academy for personalized online Quran classes. Expert female tutors teach kids and adults Quran with Tajweed, Hifz, Tafsir and Islamic Studies — start with 5 Days Free Trial.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aiza Quran Academy | Learn Quran Online",
    description:
      "Expert female Quran tutors for kids and adults. One-on-one online classes — Tajweed, Hifz, Islamic Studies and more. Try 5 Days Free!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${amiri.variable} font-sans bg-white`}>
      <body className="font-sans antialiased bg-white text-[#171717]">
        <Navbar />
        {children}
        <CTA />
        <Footer />
        <WhatsAppButton />
        <AdmissionPopup />
      </body>
    </html>
  );
}
