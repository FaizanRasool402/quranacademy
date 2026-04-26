"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { clearAdminSession, isAdminSession } from "@/lib/adminAuth";
import { getApiBase } from "@/lib/apiBase";

type BlogRow = {
  id: string;
  mainHeading: string;
  imageUrl: string | null;
  published: boolean;
  createdAt: string;
};

function resolveImageSrc(api: string, imageUrl: string | null) {
  if (!imageUrl) return null;
  if (imageUrl.startsWith("data:")) return imageUrl;
  if (/^https?:\/\//i.test(imageUrl)) return imageUrl;
  return `${api}${imageUrl}`;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [blogs, setBlogs] = useState<BlogRow[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [actionId, setActionId] = useState<string | null>(null);

  const loadBlogs = useCallback(async () => {
    setLoadingBlogs(true);
    try {
      const res = await fetch(`${getApiBase()}/api/blogs`);
      if (!res.ok) throw new Error("Failed to load");
      const data = (await res.json()) as BlogRow[];
      setBlogs(Array.isArray(data) ? data : []);
    } catch {
      setBlogs([]);
    } finally {
      setLoadingBlogs(false);
    }
  }, []);

  useEffect(() => {
    if (!isAdminSession()) {
      router.replace("/adminlogin");
      return;
    }
    setReady(true);
  }, [router]);

  useEffect(() => {
    if (ready) loadBlogs();
  }, [ready, loadBlogs]);

  const logout = () => {
    clearAdminSession();
    router.replace("/adminlogin");
  };

  const handlePublish = async (id: string) => {
    setActionId(id);
    try {
      const res = await fetch(`${getApiBase()}/api/blogs/${id}/publish`, { method: "PATCH" });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        alert((j as { error?: string }).error || "Publish failed");
        return;
      }
      await loadBlogs();
    } finally {
      setActionId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this blog permanently?")) return;
    setActionId(id);
    try {
      const res = await fetch(`${getApiBase()}/api/blogs/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        alert((j as { error?: string }).error || "Delete failed");
        return;
      }
      await loadBlogs();
    } finally {
      setActionId(null);
    }
  };

  if (!ready) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-gray-500 text-sm">
        Loading…
      </div>
    );
  }

  const api = getApiBase();

  return (
    <div className="min-h-[calc(100vh-120px)] bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-[#fda600] text-xs font-semibold tracking-[0.2em] uppercase mb-1">Admin</p>
            <h1 className="text-2xl font-bold text-[#182b68]">Dashboard</h1>
            <p className="text-gray-600 text-sm mt-1">Manage your blog content.</p>
          </div>
          <button
            type="button"
            onClick={logout}
            className="self-start sm:self-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Log out
          </button>
        </div>

        <Link
          href="/admin/create-blog"
          className="inline-flex items-center justify-center rounded-xl bg-[#182b68] px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[#1e3a7a] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#fda600]/40 focus:ring-offset-2 mb-10"
        >
          Add blog
        </Link>

        <h2 className="text-sm font-bold text-[#182b68] uppercase tracking-wider mb-4">Your blogs</h2>

        {loadingBlogs ? (
          <p className="text-gray-500 text-sm">Loading blogs…</p>
        ) : blogs.length === 0 ? (
          <p className="text-gray-500 text-sm rounded-xl border border-dashed border-gray-200 bg-white/80 px-6 py-10 text-center">
            No blogs yet. Click <strong>Add blog</strong> to create one.
          </p>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-1 md:grid-cols-2">
            {blogs.map((blog) => {
              const busy = actionId === blog.id;
              const imgSrc = resolveImageSrc(api, blog.imageUrl);
              return (
                <li
                  key={blog.id}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#182b68]/10"
                >
                  <div className="relative h-40 w-full bg-gray-100">
                    {imgSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imgSrc}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-gray-400">No image</div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="font-bold text-[#182b68] leading-snug line-clamp-2">{blog.mainHeading}</p>
                    <p className="mt-1 text-xs text-gray-400">
                      {new Date(blog.createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <span
                      className={`mt-2 inline-flex w-fit rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                        blog.published
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-900"
                      }`}
                    >
                      {blog.published ? "Published" : "Draft"}
                    </span>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        disabled={blog.published || busy}
                        onClick={() => handlePublish(blog.id)}
                        className="rounded-lg bg-[#182b68] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#1e3a7a] disabled:cursor-not-allowed disabled:opacity-45"
                      >
                        {busy && !blog.published ? "…" : "Publish"}
                      </button>
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => handleDelete(blog.id)}
                        className="rounded-lg border border-red-300 bg-white px-4 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-50 disabled:opacity-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
