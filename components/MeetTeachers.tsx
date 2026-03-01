"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  {
    number: "01",
    heading: "Qualified & Certified Female Teachers",
    description:
      "All of our teachers at Aiza Quran Academy are fully certified Hafizat and Aalimaat who have completed their formal Islamic education from reputable institutions. They are not just teachers — they are role models who inspire students to develop a lifelong love for the Holy Quran. Every teacher goes through a careful selection process to ensure the highest quality of education for our students.",
    icon: "✦",
  },
  {
    number: "02",
    heading: "Specialized Classes for Children",
    description:
      "We understand that children learn differently, and our teachers are specially trained to work with young learners. From Noorani Qaida for complete beginners to Tajweed and Hifz for advanced students, our Ustazat use fun, interactive, and age-appropriate teaching methods that keep children engaged and motivated. Our goal is to help every child build a strong and joyful connection with the Quran from an early age.",
    icon: "◈",
  },
  {
    number: "03",
    heading: "Comfortable Learning Environment for Adult Women",
    description:
      "It is never too late to begin your Quran journey. Our academy warmly welcomes adult women who wish to learn or improve their Quran recitation, whether they are complete beginners or looking to refine their Tajweed. Our female-only teaching environment ensures that every adult student feels comfortable, respected, and confident throughout their learning journey.",
    icon: "❋",
  },
  {
    number: "04",
    heading: "One-on-One Personalized Attention",
    description:
      "At Aiza Quran Academy, we do not believe in a one-size-fits-all approach. Every student is unique, and our teachers take the time to understand each student's pace, learning style, and goals. Our one-on-one sessions ensure that no student is left behind and that every lesson is tailored to meet the individual needs of the student.",
    icon: "◇",
  },
  {
    number: "05",
    heading: "Teaching with Heart & Dedication",
    description:
      "Our teachers are not just here to teach — they are here to inspire. They bring warmth, patience, and sincere dedication to every class. Many of our students describe their teachers as a source of motivation and spiritual encouragement. Our teachers regularly update their teaching methods to ensure they always deliver the best learning experience possible.",
    icon: "✿",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Students Taught" },
  { value: 6, suffix: "+", label: "Expert Teachers" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "", label: "Average Rating", hasStar: true },
];

export default function MeetTeachers() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hasAnimated) return;

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(current);
                return newCounts;
              });
            }, duration / steps);
          });
          statsObserver.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => statsObserver.disconnect();
  }, [hasAnimated]);

  return (
    <>
      <style>{`
        .mt-root {
          --white: #ffffff;
          --light-bg: #f8fafc;
          --blue: #182b68;
          --blue-light: #243a7a;
          --blue-pale: #e8ecf4;
          --gold: #fda600;
          --gold-light: #ffbe3d;
          --gold-pale: #fff5e0;
          --deep: #0f172a;
          --medium: #475569;
          --muted: #94a3b8;

          background-color: var(--white);
          color: var(--deep);
          overflow-x: hidden;
        }

        /* ── Hero ── */
        .mt-hero {
          position: relative;
          min-height: 40vh;
          padding: 3rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--blue);
        }

        .mt-hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(253,166,0,0.15) 0%, transparent 70%),
            radial-gradient(ellipse 50% 80% at 90% 100%, rgba(36,58,122,0.4) 0%, transparent 60%),
            linear-gradient(160deg, #182b68 0%, #1e3475 50%, #142252 100%);
        }

        .mt-hero-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image:
            repeating-linear-gradient(45deg, #fda600 0, #fda600 1px, transparent 0, transparent 50%),
            repeating-linear-gradient(-45deg, #fda600 0, #fda600 1px, transparent 0, transparent 50%);
          background-size: 30px 30px;
        }

        .mt-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 1rem;
          max-width: 72rem;
          width: 100%;
          margin: 0 auto;
        }
        @media (min-width: 640px) {
          .mt-hero-content {
            padding: 0 1.5rem;
          }
        }

        .mt-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 2rem;
        }

        .mt-eyebrow::before,
        .mt-eyebrow::after {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: var(--gold);
          opacity: 0.6;
        }

        .mt-hero-title {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 700;
          line-height: 1.1;
          color: var(--white);
          margin: 0 0 0.5em;
          letter-spacing: -0.02em;
        }

        .mt-hero-title em {
          font-style: italic;
          color: var(--gold);
        }

        .mt-hero-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          font-weight: 400;
          font-style: italic;
          color: rgba(255,255,255,0.6);
          margin: 0 0 3rem;
          letter-spacing: 0.02em;
        }

        .mt-hero-intro {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
          max-width: 640px;
          margin: 0 auto 3.5rem;
        }

        .mt-divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          margin: 0 auto 3.5rem;
          border-radius: 2px;
        }

        /* ── Stats ── */
        .mt-stats {
          display: flex;
          justify-content: center;
          gap: clamp(2rem, 6vw, 5rem);
          flex-wrap: wrap;
        }

        .mt-stat {
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .mt-stat:hover {
          transform: scale(1.1);
        }

        .mt-stat-value {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          line-height: 1;
          margin-bottom: 0.4rem;
        }

        .mt-stat-label {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        /* ── Sections ── */
        .mt-sections {
          padding: clamp(2rem, 5vw, 4rem) clamp(1.5rem, 6vw, 5rem);
          max-width: 72rem;
          width: 100%;
          margin: 0 auto;
        }

        .mt-section-item {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 2.5rem;
          padding: 3rem 0;
          border-bottom: 1px solid rgba(24,43,104,0.1);
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .mt-section-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .mt-section-item:first-child {
          border-top: 1px solid rgba(24,43,104,0.1);
        }

        .mt-section-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding-top: 0.25rem;
        }

        .mt-section-number {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--muted);
        }

        .mt-section-icon {
          font-size: 1.5rem;
          color: var(--gold);
          line-height: 1;
        }

        .mt-section-line {
          flex: 1;
          width: 2px;
          background: linear-gradient(to bottom, var(--gold), transparent);
          min-height: 60px;
          border-radius: 2px;
        }

        .mt-section-right {
          padding-top: 0.1rem;
        }

        .mt-section-heading {
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          font-weight: 700;
          color: var(--blue);
          margin: 0 0 1rem;
          line-height: 1.3;
        }

        .mt-section-desc {
          font-size: 0.95rem;
          font-weight: 400;
          line-height: 1.8;
          color: var(--medium);
          max-width: 680px;
        }

        /* ── Closing Banner ── */
        .mt-closing {
          background: linear-gradient(135deg, var(--blue) 0%, #142252 100%);
          padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .mt-closing::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 80% at 50% 50%, rgba(253,166,0,0.1) 0%, transparent 70%);
        }

        .mt-closing-content {
          position: relative;
          z-index: 1;
          max-width: 72rem;
          width: 100%;
          margin: 0 auto;
        }

        .mt-closing-icon {
          font-size: 2.5rem;
          color: var(--gold);
          margin-bottom: 1.5rem;
          display: block;
        }

        .mt-closing-text {
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          font-weight: 400;
          font-style: italic;
          color: var(--white);
          line-height: 1.7;
          margin: 0 0 2.5rem;
        }

        .mt-closing-text strong {
          font-style: normal;
          font-weight: 700;
          color: var(--gold);
        }

        .mt-closing-ameen {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          border: 1px solid rgba(253,166,0,0.4);
          padding: 0.75rem 2.5rem;
          border-radius: 4px;
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .mt-section-item {
            grid-template-columns: 50px 1fr;
            gap: 1.5rem;
          }
          .mt-stats {
            gap: 2rem;
          }
          .mt-section-line {
            display: none;
          }
        }
      `}</style>

      <div className="mt-root w-full">
        {/* ── Hero ── */}
        <section className="mt-hero">
          <div className="mt-hero-bg" />
          <div className="mt-hero-pattern" />
          <div className="mt-hero-content">
            
            <div className="mt-stats" ref={statsRef}>
              {stats.map((s, index) => (
                <div key={s.label} className="mt-stat">
                  <span className="mt-stat-value">
                    {counts[index]}{s.suffix}
                    {"hasStar" in s && s.hasStar && (
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="#fda600">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    )}
                  </span>
                  <span className="mt-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Content Sections ── */}
        <section className="mt-sections">
          {sections.map((sec, i) => (
            <div
              key={sec.number}
              className="mt-section-item"
              ref={(el) => {
                sectionRefs.current[i] = el;
              }}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="mt-section-left">
                <span className="mt-section-number">{sec.number}</span>
                <span className="mt-section-icon">{sec.icon}</span>
                <div className="mt-section-line" />
              </div>
              <div className="mt-section-right">
                <h2 className="mt-section-heading">{sec.heading}</h2>
                <p className="mt-section-desc">{sec.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ── Closing Banner ── */}
        <section className="mt-closing">
          <div className="mt-closing-content">
            <span className="mt-closing-icon">☽</span>
            <p className="mt-closing-text">
              Join <strong>Aiza Quran Academy</strong> today and let our wonderful
              teachers guide you or your child on the beautiful journey of learning the
              Holy Quran. May Allah bless every student and teacher on this path.
            </p>
            <span className="mt-closing-ameen">Ameen</span>
          </div>
        </section>
      </div>
    </>
  );
}
