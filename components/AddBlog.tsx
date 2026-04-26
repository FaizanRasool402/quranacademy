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
  const [imageAltText, setImageAltText] = useState("");
  const [introContent, setIntroContent] = useState("");

  const [subheadings, setSubheadings] = useState<Array<{ title: string; content: string }>>([
    { title: "", content: "" },
  ]);
  const [conclusion, setConclusion] = useState("");

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
      fd.append("imageAltText", imageAltText.trim());
      fd.append("introContent", introContent.trim());
      fd.append(
        "subheadings",
        JSON.stringify(
          subheadings
            .map((item) => ({ title: item.title.trim(), content: item.content.trim() }))
            .filter((item) => item.title || item.content)
        )
      );
      fd.append("conclusion", conclusion.trim());
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
            <div className="mt-4">
              <label htmlFor="addblog-image-alt" className="block text-sm font-semibold text-[#182b68] mb-2">
                Image alt text
              </label>
              <input
                id="addblog-image-alt"
                type="text"
                value={imageAltText}
                onChange={(e) => setImageAltText(e.target.value)}
                placeholder="Describe the featured image for accessibility"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-[#171717] placeholder:text-gray-400 focus:border-[#182b68] focus:outline-none focus:ring-2 focus:ring-[#182b68]/15"
              />
            </div>
          </div>

          {/* Content / Introduction */}
          <div className="space-y-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#182b68]/8">
            <label htmlFor="addblog-intro" className="block text-sm font-bold text-[#182b68]">
              Content (Introduction)
            </label>
            <textarea
              id="addblog-intro"
              value={introContent}
              onChange={(e) => setIntroContent(e.target.value)}
              placeholder="Write opening content here…"
              rows={6}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#182b68] focus:outline-none focus:ring-2 focus:ring-[#182b68]/15 resize-y min-h-[120px]"
            />
          </div>

          {/* Optional Subheadings (5 - 10) */}
          <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#182b68]/8">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-[#182b68]">Subheadings (Optional, up to 10)</p>
              <button
                type="button"
                onClick={() => {
                  if (subheadings.length >= 10) return;
                  setSubheadings((prev) => [...prev, { title: "", content: "" }]);
                }}
                className="rounded-lg border border-[#182b68]/20 px-3 py-1.5 text-xs font-semibold text-[#182b68] hover:border-[#fda600]/50 hover:text-[#fda600]"
              >
                + Add subheading
              </button>
            </div>
            {subheadings.map((item, idx) => (
              <div key={`subheading-${idx}`} className="rounded-xl border border-gray-200 p-4 space-y-3">
                <label htmlFor={`addblog-subheading-title-${idx}`} className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Subheading {idx + 1}
                </label>
                <input
                  id={`addblog-subheading-title-${idx}`}
                  type="text"
                  value={item.title}
                  onChange={(e) => {
                    const next = [...subheadings];
                    next[idx] = { ...next[idx], title: e.target.value };
                    setSubheadings(next);
                  }}
                  placeholder="Subheading title"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-[#171717] placeholder:text-gray-400 focus:border-[#182b68] focus:outline-none focus:ring-2 focus:ring-[#182b68]/15"
                />
                <textarea
                  id={`addblog-subheading-content-${idx}`}
                  value={item.content}
                  onChange={(e) => {
                    const next = [...subheadings];
                    next[idx] = { ...next[idx], content: e.target.value };
                    setSubheadings(next);
                  }}
                  placeholder="Subheading content"
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#182b68] focus:outline-none focus:ring-2 focus:ring-[#182b68]/15 resize-y min-h-[110px]"
                />
                {subheadings.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setSubheadings((prev) => prev.filter((_, i) => i !== idx))}
                    className="text-xs font-medium text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="space-y-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#182b68]/8">
            <label htmlFor="addblog-conclusion" className="block text-sm font-bold text-[#182b68]">
              Conclusion
            </label>
            <textarea
              id="addblog-conclusion"
              value={conclusion}
              onChange={(e) => setConclusion(e.target.value)}
              placeholder="Write a strong conclusion..."
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
