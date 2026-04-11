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
      {/* 1) Title + meta — sab se upar */}
      <header className="max-w-5xl mx-auto px-4 pt-8 sm:pt-10 pb-6 sm:pb-8 text-center sm:text-left">
        <Link
          href="/blogs"
          className="text-sm font-medium text-[#182b68] hover:text-[#fda600] mb-5 inline-block"
        >
          ← Back to blogs
        </Link>
        <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[#182b68] leading-tight tracking-tight">
          {post.mainHeading}
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      {/* 2) Featured image — landscape, title ke neeche */}
      {img ? (
        <div className="max-w-5xl mx-auto px-4 mb-10 sm:mb-12">
          <div className="relative w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md ring-1 ring-black/5 aspect-[16/9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      ) : null}

      {/* 3) Heading 2 blocks + paragraphs */}
      <div className="max-w-5xl mx-auto px-4 space-y-10 sm:space-y-12 text-[#1f2937] leading-relaxed">
        {(post.heading2First || post.paragraphFirst) && (
          <section>
            {post.heading2First ? (
              <h2 className="text-xl sm:text-2xl font-bold text-[#182b68] mb-4">{post.heading2First}</h2>
            ) : null}
            {post.paragraphFirst ? (
              <p className="text-base sm:text-[17px] whitespace-pre-wrap">{post.paragraphFirst}</p>
            ) : null}
          </section>
        )}

        {(post.heading2Second || post.paragraphSecond) && (
          <section>
            {post.heading2Second ? (
              <h2 className="text-xl sm:text-2xl font-bold text-[#182b68] mb-4">{post.heading2Second}</h2>
            ) : null}
            {post.paragraphSecond ? (
              <p className="text-base sm:text-[17px] whitespace-pre-wrap">{post.paragraphSecond}</p>
            ) : null}
          </section>
        )}
      </div>
    </article>
  );
}
