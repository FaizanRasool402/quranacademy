import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const PublicBlogPost = dynamic(() => import("@/components/PublicBlogPost"), { ssr: false });

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
  if (!id || id.length < 10) notFound();
  return <PublicBlogPost id={id} />;
}
