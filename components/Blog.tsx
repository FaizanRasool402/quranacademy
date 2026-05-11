"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { getApiBase } from "@/lib/apiBase";

const BG_FALLBACKS = [
  "linear-gradient(145deg, #182b68 0%, #1e3a7a 60%, #182b68 100%)",
  "linear-gradient(145deg, #1a3a5c 0%, #234b6e 60%, #1a3a5c 100%)",
  "linear-gradient(145deg, #0f1f4a 0%, #182b68 60%, #0f1f4a 100%)",
];

function resolveImageSrc(api: string, imageUrl: string | null) {
  if (!imageUrl) return null;
  if (imageUrl.startsWith("data:")) return imageUrl;
  if (/^https?:\/\//i.test(imageUrl)) return imageUrl;
  return `${api}${imageUrl}`;
}

export type PublicBlogCard = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string | null;
  createdAt: string;
  readTime: string;
  slug?: string | null;
};

function formatBlogDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

const BLOGS_PAGE_SIZE = 9;
const SS_CACHE_KEY = "aqa:blogs:page1";
const SS_CACHE_TTL_MS = 20 * 1000;

type CachedPage1 = { items: PublicBlogCard[]; hasMore: boolean; ts: number };

function readPage1Cache(): CachedPage1 | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(SS_CACHE_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw) as CachedPage1;
    if (!p || typeof p.ts !== "number") return null;
    if (Date.now() - p.ts > SS_CACHE_TTL_MS) return null;
    return p;
  } catch {
    return null;
  }
}

function writePage1Cache(items: PublicBlogCard[], hasMore: boolean) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(
      SS_CACHE_KEY,
      JSON.stringify({ items, hasMore, ts: Date.now() } satisfies CachedPage1)
    );
  } catch { /* quota exceeded */ }
}

type BlogProps = {
  initialItems?: PublicBlogCard[];
  initialHasMore?: boolean;
};

export default function Blog({
  initialItems = [],
  initialHasMore = false,
}: BlogProps) {
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const fetchGen = useRef(0);
  const hasInitial = initialItems.length > 0;

  const [blogs, setBlogs] = useState<PublicBlogCard[]>(initialItems);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [nextPage, setNextPage] = useState(2);
  const [refetchTick, setRefetchTick] = useState(0);

  const apiBase = useMemo(() => getApiBase(), []);

  /* ─── Initial page-1 load ─────────────────────────────────────────── */
  useEffect(() => {
    const gen = ++fetchGen.current;
    let cancelled = false;

    // Session cache hit sirf tab use ho jab koi initial SSR data na ho
    const cached = readPage1Cache();
    if (cached && refetchTick === 0 && !hasInitial) {
      setBlogs(cached.items);
      setHasMore(cached.hasMore);
      setNextPage(2);
      setLoading(false);
      setError(null);
      return () => { cancelled = true; };
    }

    // Background mein fresh data fetch karo — agar initialItems hain to spinner mat dikhao
    if (!hasInitial) setLoading(true);
    setError(null);

    const url = `${apiBase}/api/public/blogs?page=1&limit=${BLOGS_PAGE_SIZE}`;
    // 4 attempts: immediate, then 2s, 4s, 8s delays between retries
    const RETRY_DELAYS = [0, 2000, 4000, 8000];
    const MAX_ATTEMPTS = 4;

    (async () => {
      for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
        if (cancelled || fetchGen.current !== gen) return;

        if (attempt > 0) {
          await new Promise((r) => setTimeout(r, RETRY_DELAYS[attempt]));
          if (cancelled || fetchGen.current !== gen) return;
        }

        // Per-attempt AbortController with 10s timeout
        const ac = new AbortController();
        const timeoutId = setTimeout(() => ac.abort(), 10000);

        try {
          const r = await fetch(url, { signal: ac.signal });
          clearTimeout(timeoutId);
          const payload = await r.json().catch(() => ({}));

          if (!r.ok) {
            const msg = (payload as { error?: string }).error || `Server error (${r.status})`;
            // Non-network server error — no point retrying
            if (fetchGen.current === gen && !cancelled) {
              setError(msg);
              setBlogs([]);
              setHasMore(false);
              setLoading(false);
            }
            return;
          }

          if (fetchGen.current !== gen || cancelled) return;

          const data = payload as { items?: PublicBlogCard[]; hasMore?: boolean } | PublicBlogCard[];
          let items: PublicBlogCard[];
          let more: boolean;
          if (Array.isArray(data)) {
            items = data.slice(0, BLOGS_PAGE_SIZE);
            more = data.length > BLOGS_PAGE_SIZE;
          } else {
            items = Array.isArray(data.items) ? data.items : [];
            more = !!data.hasMore;
          }
          setBlogs(items);
          setHasMore(more);
          setNextPage(2);
          setLoading(false);
          writePage1Cache(items, more);
          return; // success

        } catch (e: unknown) {
          clearTimeout(timeoutId);
          if (cancelled || fetchGen.current !== gen) return;

          const isNetworkOrTimeout =
            (e instanceof DOMException && e.name === "AbortError") ||
            (e instanceof Error && (e.name === "AbortError" || e.message === "Failed to fetch"));

          if (!isNetworkOrTimeout) {
            // Unexpected error — don't retry
            const msg = e instanceof Error ? e.message : "Failed to load articles.";
            setError(msg);
            setBlogs([]);
            setHasMore(false);
            setLoading(false);
            return;
          }

          // Network / timeout — retry if attempts remain, otherwise show error
          if (attempt < MAX_ATTEMPTS - 1) continue;

          setError("Unable to load blogs. Please check your connection and try again.");
          setBlogs([]);
          setHasMore(false);
          setLoading(false);
        }
      }
    })();

    return () => { cancelled = true; };
  }, [apiBase, refetchTick]);

  /* ─── Load More ──────────────────────────────────────────────────── */
  const handleLoadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    const ac = new AbortController();
    const timeoutId = setTimeout(() => ac.abort(), 8000);
    try {
      const url = `${apiBase}/api/public/blogs?page=${nextPage}&limit=${BLOGS_PAGE_SIZE}`;
      const r = await fetch(url, { signal: ac.signal });
      const payload = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error((payload as { error?: string }).error || "Failed");
      const data = payload as { items?: PublicBlogCard[]; hasMore?: boolean };
      const items = Array.isArray(data.items) ? data.items : [];
      const more = !!data.hasMore;
      setBlogs((prev) => [...prev, ...items]);
      setHasMore(more);
      setNextPage((p) => p + 1);
    } catch {
      /* silently ignore — user can try again */
    } finally {
      clearTimeout(timeoutId);
      setLoadingMore(false);
    }
  }, [loadingMore, hasMore, nextPage, apiBase]);

  /* ─── Scroll-in animation for newly added cards ───────────────────── */
  useEffect(() => {
    if (loading || blogs.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, [loading, blogs]);

  return (
    <>
      <style>{`
        .bl {
          --blue: #182b68;
          --blue-light: #2a3f7a;
          --gold: #fda600;
          --gold-light: #ffb833;
          --white: #ffffff;
          --gray-50: #f9fafb;
          --gray-100: #f3f4f6;
          --gray-400: #9ca3af;
          --gray-600: #4b5563;
          --gray-900: #111827;
          --line: rgba(24,43,104,0.1);
          background: var(--white);
          font-family: 'Raleway', sans-serif;
        }

        /* ══ HERO ══ */
        .bl-hero {
          position: relative;
          height: 75vh;
          min-height: 500px;
          max-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--blue);
        }

        /* Layered radial glows */
        .bl-hero-glow1 {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(253,166,0,0.18) 0%, transparent 65%);
          top: -180px; left: -120px;
          animation: bl-pulse1 7s ease-in-out infinite;
          pointer-events: none;
        }
        .bl-hero-glow2 {
          position: absolute;
          width: 450px; height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(253,166,0,0.12) 0%, transparent 65%);
          bottom: -120px; right: -80px;
          animation: bl-pulse2 9s ease-in-out infinite;
          pointer-events: none;
        }
        .bl-hero-glow3 {
          position: absolute;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%);
          top: 40%; right: 25%;
          animation: bl-pulse3 11s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes bl-pulse1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(40px,30px) scale(1.1); }
        }
        @keyframes bl-pulse2 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(-30px,-40px) scale(1.12); }
        }
        @keyframes bl-pulse3 {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(20px,-30px); }
        }

        /* Subtle grid */
        .bl-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(253,166,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(253,166,0,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        /* Circular Text Bismillah */
        .bl-hero-bismillah {
          position: absolute;
          top: 45%; left: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
          width: clamp(280px, 40vw, 420px);
          height: clamp(280px, 40vw, 420px);
          animation: bl-rotate 60s linear infinite;
        }
        .bl-hero-bismillah svg {
          width: 100%;
          height: 100%;
        }
        .bl-hero-bismillah text {
          font-family: var(--font-amiri), serif;
          font-size: 18px;
          fill: rgba(253,166,0,0.12);
          letter-spacing: 10px;
        }
        @keyframes bl-rotate {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }

        /* Content */
        .bl-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 1.5rem;
        }

        .bl-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1rem;
          animation: bl-up 0.8s 0.1s both;
        }
        .bl-hero-eyebrow-line {
          display: block;
          width: 2rem;
          height: 1px;
          background: var(--gold);
          opacity: 0.6;
        }
        @media (min-width: 640px) {
          .bl-hero-eyebrow-line {
            width: 2.5rem;
          }
        }

        .bl-hero-title {
          font-size: clamp(3.5rem,9vw,7rem);
          font-weight: 700;
          line-height: 1;
          color: var(--white);
          margin: 0 0 1.25rem;
          letter-spacing: -0.01em;
          animation: bl-up 0.8s 0.25s both;
        }
        .bl-hero-title em {
          font-style: italic;
          color: var(--gold);
        }

        .bl-hero-sub {
          font-size: clamp(1rem,2vw,1.25rem);
          font-weight: 400;
          font-style: italic;
          color: rgba(255,255,255,0.45);
          margin: 0;
          animation: bl-up 0.8s 0.4s both;
        }

        /* Bottom wave divider */
        .bl-hero-wave {
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 70px;
          pointer-events: none;
          z-index: 3;
        }

        @keyframes bl-up {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* ══ CARDS SECTION ══ */
        .bl-section {
          max-width: 72rem;
          margin: 0 auto;
          padding: clamp(3rem,6vw,5rem) clamp(1rem,4vw,1.5rem);
        }

        .bl-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        /* ══ CARD ══ */
        .bl-card {
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          background: #fff;
          box-shadow: 0 4px 20px rgba(24,43,104,0.08);
          border: 1px solid var(--line);
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.65s ease,
            transform 0.65s ease,
            box-shadow 0.3s ease;
        }
        .bl-card.in {
          opacity: 1;
          transform: translateY(0);
        }
        .bl-card:hover {
          box-shadow: 0 20px 50px rgba(24,43,104,0.15);
          transform: translateY(-8px);
        }

        /* Card visual */
        .bl-card-visual {
          height: 200px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .bl-card-visual-bg {
          position: absolute; inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
          display: block;
        }
        .bl-card:hover .bl-card-visual-bg {
          transform: scale(1.06);
        }
        .bl-card-visual::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 25%, rgba(0,0,0,0.5) 100%);
        }
        .bl-card-arabic {
          position: absolute;
          font-family: var(--font-amiri), serif;
          font-size: 5rem;
          direction: rtl;
          line-height: 1;
          right: 1rem; top: 0.75rem;
          z-index: 2;
          opacity: 0.25;
          transition: opacity 0.3s, transform 0.3s;
          pointer-events: none;
        }
        .bl-card:hover .bl-card-arabic {
          opacity: 0.45;
          transform: scale(1.07) rotate(-3deg);
        }
        .bl-card-num {
          position: absolute;
          bottom: 0.85rem; left: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.5);
          z-index: 3;
        }

        /* Card body */
        .bl-card-body {
          padding: 1.5rem 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 0.6rem;
        }

        .bl-card-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .bl-card-date {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gray-400);
        }
        .bl-card-sep {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--line);
        }
        .bl-card-rt {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--gray-400);
        }

        .bl-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--gray-900);
          line-height: 1.3;
          margin: 0;
          transition: color 0.25s;
        }
        .bl-card:hover .bl-card-title { color: var(--blue); }

        .bl-card-excerpt {
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.75;
          color: var(--gray-600);
          margin: 0;
          flex: 1;
        }

        .bl-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          border-top: 1px solid var(--line);
          margin-top: auto;
        }
        .bl-card-cta {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--blue);
          transition: gap 0.25s, color 0.25s;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .bl-card:hover .bl-card-cta {
          gap: 0.6rem;
          color: var(--gold);
        }
        .bl-card-arrow {
          width: 30px; height: 30px;
          border-radius: 50%;
          border: 2px solid var(--line);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.8rem;
          color: var(--gray-400);
          transition: all 0.25s;
        }
        .bl-card:hover .bl-card-arrow {
          border-color: var(--blue);
          color: var(--white);
          background: var(--blue);
          transform: rotate(-45deg);
        }

        /* ══ FOOTER ══ */
        .bl-footer {
          background: var(--blue);
          padding: 2rem;
          text-align: center;
        }
        .bl-footer-text {
          font-style: italic;
          font-size: 1rem;
          color: rgba(255,255,255,0.45);
          margin: 0;
        }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 900px) {
          .bl-cards { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .bl-cards { grid-template-columns: 1fr; }
          .bl-hero-title { font-size: clamp(2.5rem,10vw,4rem); }
        }

        .bl-loadmore {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }
        .bl-loadmore-btn {
          font-family: inherit;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.9rem 2.5rem;
          border-radius: 50px;
          border: 2px solid var(--blue);
          background: transparent;
          color: var(--blue);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          transition: background 0.22s, color 0.22s, border-color 0.22s, transform 0.18s;
        }
        .bl-loadmore-btn:hover:not(:disabled) {
          background: var(--blue);
          color: #fff;
          transform: translateY(-2px);
        }
        .bl-loadmore-btn:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
        .bl-loadmore-spin {
          width: 14px;
          height: 14px;
          border: 2px solid currentColor;
          border-top-color: transparent;
          border-radius: 50%;
          animation: bl-spin 0.7s linear infinite;
        }
        @keyframes bl-spin {
          to { transform: rotate(360deg); }
        }

        /* ══ SKELETON ══ */
        .bl-skeleton {
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 4px 20px rgba(24,43,104,0.08);
          border: 1px solid var(--line);
        }
        .bl-skeleton-img {
          height: 200px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: bl-shimmer 1.4s infinite;
        }
        .bl-skeleton-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .bl-skeleton-line {
          border-radius: 6px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: bl-shimmer 1.4s infinite;
        }
        @keyframes bl-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      <div className="bl">

        {/* ══ HERO ══ */}
        <section className="bl-hero">
          <div className="bl-hero-glow1" />
          <div className="bl-hero-glow2" />
          <div className="bl-hero-glow3" />
          <div className="bl-hero-grid" />
          <div className="bl-hero-bismillah">
            <svg viewBox="0 0 200 200">
              <defs>
                <path id="circlePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
              </defs>
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ • بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ • بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ •
                </textPath>
              </text>
            </svg>
          </div>

          <div className="bl-hero-content">
            <div className="bl-hero-eyebrow">
              <span className="bl-hero-eyebrow-line" />
              Aiza Quran Academy
              <span className="bl-hero-eyebrow-line" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">Blogs</h1>
            <p className="text-sm sm:text-base text-white font-medium tracking-wide mt-3">
              Knowledge · Guidance · Inspiration
            </p>
            <div className="w-16 h-0.5 mx-auto mt-4 sm:mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #fda600, transparent)' }} />
          </div>

          {/* Wave SVG bottom */}
          <svg className="bl-hero-wave" viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
          </svg>
        </section>

        {/* ══ CARDS (published posts from database) ══ */}
        <div className="bl-section">
          {loading ? (
            <div className="bl-cards">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bl-skeleton">
                  <div className="bl-skeleton-img" />
                  <div className="bl-skeleton-body">
                    <div className="bl-skeleton-line" style={{ height: "12px", width: "45%" }} />
                    <div className="bl-skeleton-line" style={{ height: "20px", width: "85%" }} />
                    <div className="bl-skeleton-line" style={{ height: "14px", width: "100%" }} />
                    <div className="bl-skeleton-line" style={{ height: "14px", width: "70%" }} />
                    <div style={{ paddingTop: "0.85rem", borderTop: "1px solid rgba(24,43,104,0.1)", marginTop: "0.5rem" }}>
                      <div className="bl-skeleton-line" style={{ height: "12px", width: "30%" }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12 max-w-md mx-auto space-y-3">
              <p className="text-red-600 text-sm font-medium">{error}</p>
              <button
                type="button"
                className="text-sm font-semibold text-[#182b68] underline underline-offset-2 hover:text-[#fda600]"
                onClick={() => setRefetchTick((t) => t + 1)}
              >
                Try again
              </button>
            </div>
          ) : blogs.length === 0 ? (
            <p className="text-center text-gray-500 py-12 max-w-md mx-auto">
              No published articles yet. When an admin publishes a post from the dashboard, it will appear here.
            </p>
          ) : (
            <div className="bl-cards">
              {blogs.map((blog, i) => {
                const img = resolveImageSrc(apiBase, blog.imageUrl);
                const bgFallbackStyle = img
                  ? undefined
                  : { background: BG_FALLBACKS[i % BG_FALLBACKS.length] };
                const cardIndex = i + 1;
                // Pehli row eager (LCP), baqi lazy
                const isAboveFold = i < 3;
                return (
                  <Link
                    key={blog.id}
                    href={`/blogs/${blog.id}`}
                    className="bl-card"
                    ref={(el) => { cardRefs.current[i] = el; }}
                    style={{ transitionDelay: `${i * 0.12}s` }}
                    prefetch={isAboveFold}
                  >
                    <div className="bl-card-visual">
                      {img ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={img}
                          alt={blog.title}
                          className="bl-card-visual-bg"
                          loading={isAboveFold ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={isAboveFold ? "high" : "low"}
                          width={600}
                          height={400}
                        />
                      ) : (
                        <div className="bl-card-visual-bg" style={bgFallbackStyle} />
                      )}
                      <span className="bl-card-arabic" style={{ color: "#fda600" }}>بسم الله</span>
                      <span className="bl-card-num">{String(cardIndex).padStart(2, "0")}</span>
                    </div>

                    <div className="bl-card-body">
                      <div className="bl-card-meta">
                        <span className="bl-card-date">{formatBlogDate(blog.createdAt)}</span>
                        <div className="bl-card-sep" />
                        <span className="bl-card-rt">{blog.readTime}</span>
                      </div>
                      <h2 className="bl-card-title">{blog.title}</h2>
                      <p className="bl-card-excerpt">{blog.excerpt}</p>
                      <div className="bl-card-footer">
                        <span className="bl-card-cta">Read Article →</span>
                        <div className="bl-card-arrow">↗</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
          {!loading && hasMore ? (
            <div className="bl-loadmore">
              <button
                type="button"
                className="bl-loadmore-btn"
                disabled={loadingMore}
                onClick={handleLoadMore}
              >
                {loadingMore ? (
                  <>
                    <span className="bl-loadmore-spin" />
                    Loading…
                  </>
                ) : (
                  "Load More Articles ↓"
                )}
              </button>
            </div>
          ) : null}
        </div>

      </div>
    </>
  );
}
