"use client";

import { useEffect, useRef, useState } from "react";

// ── Stats data ──────────────────────────────────────────────
const stats = [
  { id: 1, target: 5000, label: "Students Enrolled", suffix: "+", icon: "users" },
  { id: 2, target: 150, label: "Expert Teachers", suffix: "+", icon: "graduation" },
  { id: 3, target: 20, label: "Courses Available", suffix: "+", icon: "book" },
  { id: 4, target: 98, label: "Satisfaction Rate", suffix: "%", icon: "thumbs" },
];

// ── Features data ────────────────────────────────────────────
const features = [
  { id: 1, icon: "userCheck", title: "Expert Male & Female Tutors", desc: "Qualified Quran teachers providing professional and caring guidance." },
  { id: 2, icon: "layout", title: "Personalized 1-on-1 Classes", desc: "Every student receives full attention for faster learning." },
  { id: 3, icon: "globe", title: "Flexible Global Schedule", desc: "Choose class timings that fit your routine anywhere in the world." },
  { id: 4, icon: "bookMarked", title: "Tajweed-Focused Learning", desc: "Learn correct Quran pronunciation with proper Tajweed rules." },
  { id: 5, icon: "smile", title: "Kids-Friendly Teaching Style", desc: "Engaging lessons designed especially for young learners." },
  { id: 6, icon: "dollar", title: "Affordable Monthly Plans", desc: "Quality Quran education at family-friendly prices." },
  { id: 7, icon: "gift", title: "Free Trial Classes", desc: "Start with free trial classes before joining regular lessons." },
  { id: 8, icon: "message", title: "Quick WhatsApp Support", desc: "Easy communication for parents anytime." },
];

// ── Count-up hook ────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ── Stat icon ────────────────────────────────────────────────
function StatIcon({ name }: { name: string }) {
  const c = "w-7 h-7";
  if (name === "users")
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  if (name === "graduation")
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    );
  if (name === "book")
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    );
  if (name === "thumbs")
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    );
  return null;
}

// ── Feature icon ──────────────────────────────────────────────
function FeatIcon({ name }: { name: string }) {
  const c = "w-5 h-5";
  const stroke = 1.6;
  if (name === "userCheck")
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={stroke} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={stroke} d="M17 11l2 2 4-4" />
      </svg>
    );
  if (name === "layout")
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={stroke} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    );
  if (name === "globe")
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={stroke} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  if (name === "bookMarked")
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={stroke} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    );
  if (name === "smile")
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={stroke} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  if (name === "dollar")
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={stroke} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  if (name === "gift")
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={stroke} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2H5z" />
      </svg>
    );
  if (name === "message")
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={stroke} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    );
  return null;
}

// ── Stat Card ────────────────────────────────────────────────
function StatCard({ stat, animate }: { stat: (typeof stats)[0]; animate: boolean }) {
  const count = useCountUp(stat.target, 2000, animate);
  return (
    <div className="stat-card">
      <div className="stat-icon-wrap">
        <StatIcon name={stat.icon} />
      </div>
      <div className="stat-number">
        {count.toLocaleString()}
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-line" />
    </div>
  );
}

// ── Feature Card ─────────────────────────────────────────────
function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
  return (
    <div className="feat-card">
      <div className="feat-icon-wrap">
        <FeatIcon name={feature.icon} />
      </div>
      <div className="feat-body">
        <div className="feat-check">✔</div>
        <h3 className="feat-title">{feature.title}</h3>
        <p className="feat-desc">{feature.desc}</p>
      </div>
    </div>
  );
}

// ── Main Section ─────────────────────────────────────────────
export default function StatsCounter() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .wcu-section {
          background: #f9fafb;
          padding: 90px 20px;
          font-family: var(--font-raleway), ui-sans-serif, system-ui, sans-serif;
        }

        .wcu-heading {
          text-align: center;
          margin-bottom: 48px;
          margin-top: 0;
        }
        .wcu-heading-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .wcu-heading-line {
          width: 4px;
          height: 2rem;
          background: #182b68;
          border-radius: 9999px;
        }
        .wcu-heading-label span {
          font-size: 0.875rem;
          font-weight: 600;
          color: #4b5563;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .wcu-heading h2 {
          color: #111827;
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          font-weight: 700;
          margin: 0 0 1rem 0;
        }
        .wcu-heading p {
          color: #4b5563;
          font-size: 0.9375rem;
          line-height: 1.6;
          margin: 0 auto;
          max-width: 42rem;
          padding: 0 0.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto 60px auto;
        }
        .stat-card {
          background: #ffffff;
          border: 1.5px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px 20px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(24,43,104,0.09);
          border-color: #fda600;
        }
        .stat-icon-wrap {
          display: flex; align-items: center; justify-content: center;
          width: 60px; height: 60px;
          border-radius: 14px;
          background: rgba(24,43,104,0.07);
          color: #182b68;
          margin: 0 auto 16px auto;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .stat-card:hover .stat-icon-wrap { background: #fda600; color: #fff; }
        .stat-number {
          color: #182b68; font-size: 2.5rem; font-weight: 800;
          line-height: 1; margin-bottom: 8px; letter-spacing: -1px;
        }
        .stat-suffix { font-size: 1.8rem; font-weight: 700; color: #fda600; }
        .stat-label { color: #6b7280; font-size: 0.88rem; font-weight: 500; margin-bottom: 14px; }
        .stat-line { width: 36px; height: 2px; background: #fda600; margin: 0 auto; border-radius: 2px; }

        .feat-section-title {
          text-align: center;
          margin-bottom: 36px;
        }
        .feat-section-title h3 {
          color: #182b68; font-size: 1.4rem; font-weight: 700; margin: 0 0 8px 0;
        }
        .feat-section-title p { color: #6b7280; font-size: 0.9rem; margin: 0; }

        .feat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .feat-card {
          background: #ffffff;
          border: 1.5px solid #e5e7eb;
          border-radius: 14px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .feat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(24,43,104,0.09);
          border-color: #fda600;
        }
        .feat-icon-wrap {
          display: flex; align-items: center; justify-content: center;
          width: 46px; height: 46px;
          border-radius: 12px;
          background: rgba(24,43,104,0.07);
          color: #182b68;
          flex-shrink: 0;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .feat-card:hover .feat-icon-wrap { background: #fda600; color: #fff; }
        .feat-body { display: flex; flex-direction: column; gap: 6px; }
        .feat-check { color: #fda600; font-size: 0.85rem; font-weight: 700; }
        .feat-title { color: #182b68; font-size: 0.92rem; font-weight: 700; margin: 0; line-height: 1.3; }
        .feat-desc { color: #6b7280; font-size: 0.82rem; margin: 0; line-height: 1.55; }

        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .feat-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .feat-grid { grid-template-columns: 1fr; }
          .stat-number { font-size: 2rem; }
        }
      `}</style>

      <section className="wcu-section" ref={sectionRef}>
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} animate={animate} />
          ))}
        </div>

        <div className="wcu-heading">
          <div className="wcu-heading-label">
            <div className="wcu-heading-line" />
            <span>Our Strengths</span>
          </div>
          <h2>Why Choose Aiza Quran Academy?</h2>
          <p>Trusted by thousands of students around the world.</p>
        </div>

        <div className="feat-grid">
          {features.map((f) => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </div>
      </section>
    </>
  );
}
