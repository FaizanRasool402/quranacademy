import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";
export const metadata: Metadata = {
  title: "Contact Us – Book a Free Demo Class",
  description:
    "Contact Aiza Quran Academy for enrollment, course info or free trial. Ask about our online Quran & Islamic education programs for kids & adults worldwide.",
  alternates: { canonical: "/Contactus" },
};

export default function ContactPage() {
  return <ContactClient />;
}
