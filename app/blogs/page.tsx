import type { Metadata } from "next";
import Blog, { type PublicBlogCard } from "@/components/Blog";
import { getApiBase } from "@/lib/apiBase";

export const metadata: Metadata = {
  title: "Islamic Blogs & Articles",
  description:
    "Read Islamic blogs by Aiza Quran Academy — Quran learning tips, Tajweed rules, Islamic education for kids & parenting guidance by our expert teachers.",
  alternates: { canonical: "/blogs" },
};

/**
 * ISR — Next ko har 60s pe page background me revalidate karne ka kehta hai.
 * Pehla load HTML me already blogs ke saath aata hai, isliye user ko spinner
 * dikhne ke bajaye seedha cards visible hote hain.
 */
export const revalidate = 30;

const BLOGS_PAGE_SIZE = 9;

type InitialPayload = {
  items: PublicBlogCard[];
  hasMore: boolean;
  error: string | null;
};

async function fetchInitialBlogs(): Promise<InitialPayload> {
  const apiBase = getApiBase();
  const url = `${apiBase}/api/public/blogs?page=1&limit=${BLOGS_PAGE_SIZE}`;

  try {
    const ac = new AbortController();
    const timeout = setTimeout(() => ac.abort(), 6000);
    const r = await fetch(url, {
      signal: ac.signal,
      next: { revalidate: 60 },
    });
    clearTimeout(timeout);

    if (!r.ok) {
      return { items: [], hasMore: false, error: null };
    }
    const data = (await r.json()) as
      | { items?: PublicBlogCard[]; hasMore?: boolean }
      | PublicBlogCard[];
    if (Array.isArray(data)) {
      return {
        items: data.slice(0, BLOGS_PAGE_SIZE),
        hasMore: data.length > BLOGS_PAGE_SIZE,
        error: null,
      };
    }
    return {
      items: Array.isArray(data.items) ? data.items : [],
      hasMore: !!data.hasMore,
      error: null,
    };
  } catch {
    // Backend cold start ya net error — client side se retry chal jayega
    return { items: [], hasMore: false, error: null };
  }
}

export default async function BlogsPage() {
  const initial = await fetchInitialBlogs();
  return (
    <Blog
      initialItems={initial.items}
      initialHasMore={initial.hasMore}
    />
  );
}
