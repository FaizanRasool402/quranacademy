import type { Metadata } from "next";
import dynamic from "next/dynamic";
export const metadata: Metadata = {
  title: "Islamic Blogs & Articles",
  description:
    "Read Islamic blogs by Aiza Quran Academy — Quran learning tips, Tajweed rules, Islamic education for kids & parenting guidance by our expert teachers.",
  alternates: { canonical: "/blogs" },
};

const Blog = dynamic(() => import("@/components/Blog"));

export default function BlogsPage() {
  return <Blog />;
}
