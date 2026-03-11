import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import AdmissionPopup from "@/components/AdmissionPopup";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Aiza Quran Academy",
  description: "Learn Quran online with expert teachers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} font-sans`}>
      <body className="font-sans antialiased">
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
