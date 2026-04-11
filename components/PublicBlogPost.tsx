"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getApiBase } from "@/lib/apiBase";

type Post = {
  id: string;
  mainHeading: string;
  heading2First: string;
  paragraphFirst: string;
  heading2Second: string;
  paragraphSecond: string;
  imageUrl: string | null;
  createdAt: string;
};

export default function PublicBlogPost({ id }: { id: string }) {
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${getApiBase()}/api/public/blogs/${id}`);
        if (!res.ok) {
          const j = await res.json().catch(() => ({}));
          throw new Error((j as { error?: string }).error || "Not found");
        }
        const data = (await res.json()) as Post;
        if (!cancelled) setPost(data);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Error");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const api = getApiBase();
  const img = post?.imageUrl ? `${api}${post.imageUrl}` : null;

  if (error) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center px-4 bg-white">
        <p className="text-gray-600 mb-4">{error}</p>
        <Link href="/blogs" className="text-[#182b68] font-semibold hover:text-[#fda600]">
          ← Back to blogs
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center text-gray-500 text-sm bg-white">
        Loading…
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen pb-16">
      <div className="relative h-56 sm:h-72 w-full bg-[#182b68]">
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={img} alt="" className="h-full w-full object-cover" />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <Link href="/blogs" className="text-white/90 text-sm font-medium hover:text-[#fda600] mb-3 inline-block">
            ← Blogs
          </Link>
          <h1 className="text-2xl sm:text-4xl font-bold text-white drop-shadow-md">{post.mainHeading}</h1>
          <p className="mt-2 text-sm text-white/80">
            {new Date(post.createdAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8 text-[#1f2937] leading-relaxed">
        {post.heading2First ? (
          <section>
            <h2 className="text-xl font-bold text-[#182b68] mb-2">{post.heading2First}</h2>
            {post.paragraphFirst ? <p className="whitespace-pre-wrap">{post.paragraphFirst}</p> : null}
          </section>
        ) : post.paragraphFirst ? (
          <p className="whitespace-pre-wrap">{post.paragraphFirst}</p>
        ) : null}

        {post.heading2Second ? (
          <section>
            <h2 className="text-xl font-bold text-[#182b68] mb-2">{post.heading2Second}</h2>
            {post.paragraphSecond ? <p className="whitespace-pre-wrap">{post.paragraphSecond}</p> : null}
          </section>
        ) : post.paragraphSecond ? (
          <p className="whitespace-pre-wrap">{post.paragraphSecond}</p>
        ) : null}
      </div>
    </article>
  );
}
