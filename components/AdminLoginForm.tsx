"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_EMAIL, ADMIN_PASSWORD, isAdminSession, setAdminSession } from "@/lib/adminAuth";

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAdminSession()) router.replace("/admin/dashboard");
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const trimmedEmail = email.trim().toLowerCase();
    if (trimmedEmail === ADMIN_EMAIL.toLowerCase() && password === ADMIN_PASSWORD) {
      setAdminSession();
      router.push("/admin/dashboard");
      router.refresh();
    } else {
      setError("Invalid email or password.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4 py-16 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-[#182b68]/10 bg-white shadow-[0_8px_40px_rgba(24,43,104,0.12)] overflow-hidden">
          <div className="bg-[#182b68] px-8 py-10 text-center">
            <p className="text-[#fda600] text-xs font-semibold tracking-[0.25em] uppercase mb-2">Admin</p>
            <h1 className="text-2xl font-bold text-white">Sign in</h1>
            <p className="text-white/70 text-sm mt-2">Aiza Quran Academy</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm px-4 py-3">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="admin-email" className="block text-xs font-semibold uppercase tracking-wide text-[#182b68] mb-2">
                Email
              </label>
              <input
                id="admin-email"
                type="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#182b68]/30 focus:border-[#182b68]"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="admin-password" className="block text-xs font-semibold uppercase tracking-wide text-[#182b68] mb-2">
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#182b68]/30 focus:border-[#182b68]"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#182b68] hover:bg-[#1e3a7a] text-white font-semibold py-3.5 transition-colors disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Log in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
