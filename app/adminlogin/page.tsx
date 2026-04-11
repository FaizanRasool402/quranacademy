import type { Metadata } from "next";
import AdminLoginForm from "@/components/AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Administrator sign-in for Aiza Quran Academy.",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return <AdminLoginForm />;
}
