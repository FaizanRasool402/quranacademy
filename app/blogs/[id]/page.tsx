import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PublicBlogPost, { type Post } from "@/components/PublicBlogPost";
import { getApiBase } from "@/lib/apiBase";

export const revalidate = 300;

async function fetchPost(id: string): Promise<Post | null> {
  const apiBase = getApiBase();
  try {
    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), 6000);
    const res = await fetch(`${apiBase}/api/public/blogs/${id}`, {
      signal: ac.signal,
      next: { revalidate: 300 },
    });
    clearTimeout(t);
    if (!res.ok) return null;
    const data = (await res.json()) as Post;
    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await fetchPost(id);
  if (!post) {
    return {
      title: "Blog",
      alternates: { canonical: `/blogs/${id}` },
    };
  }
  return {
    title: post.mainHeading,
    description: (post.introContent || "").slice(0, 160) || undefined,
    alternates: { canonical: `/blogs/${id}` },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id || !/^[a-f\d]{24}$/i.test(id)) {
    notFound();
  }
  const initialPost = await fetchPost(id);
  return <PublicBlogPost id={id} initialPost={initialPost} />;
}
