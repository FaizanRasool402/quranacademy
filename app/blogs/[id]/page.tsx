import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PublicBlogPost from "@/components/PublicBlogPost";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: "Blog",
    alternates: { canonical: `/blogs/${id}` },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id || !/^[a-f\d]{24}$/i.test(id)) {
    notFound();
  }
  return <PublicBlogPost id={id} />;
}
