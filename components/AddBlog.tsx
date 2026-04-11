"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getApiBase } from "@/lib/apiBase";

export default function AddBlog() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [mainHeading, setMainHeading] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [heading2First, setHeading2First] = useState("");
  const [paragraphFirst, setParagraphFirst] = useState("");

  const [heading2Second, setHeading2Second] = useState("");
  const [paragraphSecond, setParagraphSecond] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setImageFile(file);
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!mainHeading.trim()) {
      setError("Please enter a main heading.");
      return;
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("mainHeading", mainHeading.trim());
      fd.append("heading2First", heading2First.trim());
      fd.append("paragraphFirst", paragraphFirst.trim());
      fd.append("heading2Second", heading2Second.trim());
      fd.append("paragraphSecond", paragraphSecond.trim());
      if (imageFile) fd.append("featuredImage", imageFile);

      const res = await fetch(`${getApiBase()}/api/blogs`, {
        method: "POST",
        body: fd,
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error || "Could not save blog. Try again.");
      }

      setSuccess("Blog saved to database.");
      setTimeout(() => router.push("/admin/dashboard"), 1200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] bg-gradient-to-b from-[#f8fafc] to-white px-4 py-10 sm:py-12">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/admin/dashboard"
          className="text-sm font-medium text-[#182b68] hover:text-[#fda600] mb-8 inline-block"
        >
          ← Back to dashboard
        </Link>

        <form onSubmit={handleSubmit} className="space-y-10">
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {error}
            </div>
          )}
          {success && (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              {success}
            </div>
          )}
          {/* Main heading — bold, bordered field like Heading 2, centered */}
          <div className="space-y-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#182b68]/8 text-center">
            <label
              htmlFor="addblog-main-heading"
              className="block text-sm font-bold text-[#182b68]"
            >
              Main heading
            </label>
            <input
              id="addblog-main-heading"
              type="text"
              value={mainHeading}
              onChange={(e) => setMainHeading(e.target.value)}
              placeholder="Type your main title here…"
              className="w-full max-w-2xl mx-auto block rounded-lg border border-gray-200 bg-white px-4 py-3 text-center text-[24px] sm:text-3xl font-bold text-[#182b68] placeholder:font-normal placeholder:text-gray-400 focus:border-[#182b68] focus:outline-none focus:ring-2 focus:ring-[#182b68]/15"
            />
          </div>

          {/* Image upload */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#182b68] mb-3 text-center sm:text-left">
              Featured image
            </p>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full rounded-2xl border-2 border-dashed border-[#182b68]/20 bg-white p-8 text-center transition hover:border-[#fda600]/50 hover:bg-[#182b68]/[0.02]"
            >
              {imagePreview ? (
                <span className="relative mx-auto block max-h-64 w-full max-w-lg overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mx-auto max-h-64 w-auto object-contain"
                  />
                </span>
              ) : (
                <span className="text-gray-500 text-sm">
                  Click to upload a picture
                  <span className="block mt-1 text-xs text-gray-400">PNG, JPG, WebP</span>
                </span>
              )}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleImageChange}
              className="hidden"
            />
            {imageFile && (
              <button
                type="button"
                onClick={() => {
                  setImageFile(null);
                  if (imagePreview) URL.revokeObjectURL(imagePreview);
                  setImagePreview(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="mt-2 text-sm text-red-600 hover:underline"
              >
                Remove image
              </button>
            )}
          </div>

          {/* Block 1: Heading 2 + paragraph */}
          <div className="space-y-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#182b68]/8">
            <label htmlFor="addblog-h2-1" className="block text-sm font-bold text-[#182b68]">
              Heading 2
            </label>
            <input
              id="addblog-h2-1"
              type="text"
              value={heading2First}
              onChange={(e) => setHeading2First(e.target.value)}
              placeholder="Section heading"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-[#171717] placeholder:text-gray-400 focus:border-[#182b68] focus:outline-none focus:ring-2 focus:ring-[#182b68]/15"
            />
            <label htmlFor="addblog-p-1" className="block text-sm font-medium text-gray-600 pt-2">
              Paragraph
            </label>
            <textarea
              id="addblog-p-1"
              value={paragraphFirst}
              onChange={(e) => setParagraphFirst(e.target.value)}
              placeholder="Write your paragraph here…"
              rows={5}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#182b68] focus:outline-none focus:ring-2 focus:ring-[#182b68]/15 resize-y min-h-[120px]"
            />
          </div>

          {/* Block 2: Heading 2 + paragraph */}
          <div className="space-y-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#182b68]/8">
            <label htmlFor="addblog-h2-2" className="block text-sm font-bold text-[#182b68]">
              Heading 2
            </label>
            <input
              id="addblog-h2-2"
              type="text"
              value={heading2Second}
              onChange={(e) => setHeading2Second(e.target.value)}
              placeholder="Section heading"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-[#171717] placeholder:text-gray-400 focus:border-[#182b68] focus:outline-none focus:ring-2 focus:ring-[#182b68]/15"
            />
            <label htmlFor="addblog-p-2" className="block text-sm font-medium text-gray-600 pt-2">
              Paragraph
            </label>
            <textarea
              id="addblog-p-2"
              value={paragraphSecond}
              onChange={(e) => setParagraphSecond(e.target.value)}
              placeholder="Write your paragraph here…"
              rows={5}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#182b68] focus:outline-none focus:ring-2 focus:ring-[#182b68]/15 resize-y min-h-[120px]"
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-xl bg-[#182b68] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#1e3a7a] disabled:opacity-60 disabled:pointer-events-none"
            >
              {submitting ? "Adding…" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
