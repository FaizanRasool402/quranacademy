import type { Metadata } from "next";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Islamic Blogs & Articles",
  description:
    "Read Islamic blogs by Aiza Quran Academy — Quran learning tips, Tajweed rules, Islamic education for kids & parenting guidance by our expert teachers.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return <Blog />;
}
