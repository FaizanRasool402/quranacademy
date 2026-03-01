"use client";

import { useEffect, useRef, useState } from "react";

const pdfs = [
  { id: 1, title: "Kalmas", arabic: "الكلمات", tag: "Foundations", file: "/pdfs/kalmas.pdf", description: "Learn the Six Kalmas with Arabic text, transliteration and English translation." },
  { id: 2, title: "Basic Islamic Questions", arabic: "أسئلة إسلامية", tag: "Knowledge", file: "/pdfs/basic-islamic-questions.pdf", description: "Essential Q&A every Muslim should know about their faith." },
  { id: 3, title: "Prayer Method for Women", arabic: "صلاة المرأة", tag: "Salah", file: "/pdfs/prayer-method-women.pdf", description: "Step-by-step guide to perform Salah correctly for women." },
  { id: 4, title: "Prayer Method for Men", arabic: "صلاة الرجل", tag: "Salah", file: "/pdfs/prayer-method-men.pdf", description: "Step-by-step guide to perform Salah correctly for men." },
  { id: 5, title: "My First Hadith's Book", arabic: "أحاديث", tag: "Hadith", file: "/pdfs/my-first-hadith.pdf", description: "Authentic Hadiths for young learners and new Muslims." },
  { id: 6, title: "Daily Dua's", arabic: "أدعية يومية", tag: "Supplication", file: "/pdfs/daily-duas.pdf", description: "Daily supplications with Arabic, transliteration and meaning." },
  { id: 7, title: "Madni Qaida", arabic: "القاعدة المدنية", tag: "Qaida", file: "/pdfs/madni-qaida-english.pdf", description: "Learn Arabic alphabets and pronunciation with Madni Qaida." },
  { id: 8, title: "Noorani Qaida", arabic: "القاعدة النورانية", tag: "Qaida", file: "/pdfs/noorani-qaida-english.pdf", description: "The classic Noorani Qaida — perfect for beginners." },
];

export default function Downloads() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const go = (idx: number) => {
    if (animating || idx === active) return;
    setAnimating(true);
    setActive(idx);
    setTimeout(() => setAnimating(false), 500);
  };

  const current = pdfs[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');

        .dl {
          --blue: #182b68;
          --blue-light: #2a3f7a;
          --gold: #fda600;
          --gold-light: #fda600;
          --white: #ffffff;
          --gray-50: #f9fafb;
          --gray-100: #f3f4f6;
          --gray-400: #9ca3af;
          --gray-600: #4b5563;
          --gray-900: #111827;
          background: var(--white);
          font-family: 'Raleway', sans-serif;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }

        /* ── BIG DECORATIVE ARABIC ── */
        .dl-deco-arabic {
          position: absolute;
          top: 50%;
          right: -0.5rem;
          transform: translateY(-50%);
          font-family: 'Amiri', serif;
          font-size: clamp(6rem, 14vw, 12rem);
          color: rgba(24,43,104,0.06);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          transition: all 0.5s ease;
          padding-left: 2rem;
        }

        /* ── LAYOUT ── */
        .dl-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          z-index: 1;
        }

        /* ── LEFT PANEL ── */
        .dl-left {
          padding: clamp(2rem,4vw,3.5rem) clamp(1.5rem,4vw,4rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid rgba(24,43,104,0.1);
          position: relative;
          gap: 1.5rem;
        }

        .dl-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .dl-eyebrow::before { content:''; display:block; width:32px; height:2px; background:var(--blue); border-radius: 2px; }

        .dl-count-strip {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .dl-current-num {
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-weight: 700;
          line-height: 1;
          color: var(--blue);
          transition: all 0.4s ease;
        }
        .dl-total {
          font-size: 1.25rem;
          font-weight: 400;
          color: rgba(24,43,104,0.25);
          align-self: flex-end;
          padding-bottom: 0.8rem;
        }

        .dl-tag {
          display: inline-block;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--white);
          background: var(--gold);
          padding: 0.35rem 0.9rem;
          border-radius: 4px;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .dl-main-title {
          font-size: clamp(1.5rem, 3.5vw, 2.5rem);
          font-weight: 700;
          line-height: 1.15;
          color: var(--gray-900);
          margin: 0 0 0.75rem;
          transition: all 0.4s ease;
        }

        .dl-arabic-display {
          font-family: 'Amiri', serif;
          font-size: clamp(1.25rem, 2.5vw, 1.75rem);
          color: var(--gold);
          direction: rtl;
          margin-bottom: 1rem;
          transition: all 0.4s ease;
        }

        .dl-desc {
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.7;
          color: var(--gray-600);
          max-width: 400px;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .dl-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.8rem 1.5rem;
          background: var(--blue);
          color: var(--white);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 6px;
          align-self: flex-start;
          transition: all 0.3s ease;
          border: 2px solid var(--blue);
        }
        .dl-download-btn:hover {
          background: transparent;
          color: var(--blue);
          transform: translateX(4px);
        }
        .dl-download-btn svg { width: 16px; height: 16px; }

        .dl-left-bottom {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ── RIGHT PANEL ── */
        .dl-right {
          padding: clamp(2rem,4vw,3.5rem) clamp(1.5rem,4vw,3rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          gap: 1rem;
        }

        .dl-right-top {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
        }
        .dl-academy-label {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gray-400);
          font-weight: 600;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }

        /* ── PDF LIST ── */
        .dl-pdf-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
          padding: 0.5rem 0;
        }

        .dl-pdf-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 0;
          border-bottom: 1px solid rgba(24,43,104,0.08);
          cursor: pointer;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          text-align: left;
          width: 100%;
          transition: padding-left 0.25s ease;
          position: relative;
          font-family: 'Raleway', sans-serif;
        }
        .dl-pdf-item:first-child { border-top: 1px solid rgba(24,43,104,0.08); }
        .dl-pdf-item:hover { padding-left: 0.5rem; }
        .dl-pdf-item.active { padding-left: 0.5rem; }

        .dl-item-num {
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(24,43,104,0.25);
          width: 28px;
          flex-shrink: 0;
          transition: color 0.25s;
        }
        .dl-pdf-item.active .dl-item-num,
        .dl-pdf-item:hover .dl-item-num { color: var(--gold); }

        .dl-item-info { flex: 1; }
        .dl-item-title {
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          font-weight: 600;
          color: var(--gray-900);
          display: block;
          line-height: 1.3;
          transition: color 0.25s;
        }
        .dl-pdf-item.active .dl-item-title,
        .dl-pdf-item:hover .dl-item-title { color: var(--blue); }

        .dl-item-tag {
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-400);
          font-weight: 500;
        }

        .dl-item-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--blue);
          transform: scaleY(0);
          transform-origin: center;
          transition: transform 0.3s ease;
          border-radius: 2px;
        }
        .dl-pdf-item.active .dl-item-bar,
        .dl-pdf-item:hover .dl-item-bar { transform: scaleY(1); }

        .dl-item-arrow {
          font-size: 0.9rem;
          color: rgba(24,43,104,0.2);
          transition: color 0.25s, transform 0.25s;
          flex-shrink: 0;
        }
        .dl-pdf-item.active .dl-item-arrow,
        .dl-pdf-item:hover .dl-item-arrow {
          color: var(--blue);
          transform: translateX(3px);
        }

        /* ── PROGRESS BAR ── */
        .dl-progress {
          display: flex;
          gap: 6px;
          padding-top: 2rem;
        }
        .dl-prog-dot {
          flex: 1;
          height: 3px;
          background: rgba(24,43,104,0.1);
          border-radius: 3px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .dl-prog-dot.active { background: var(--blue); }
        .dl-prog-dot:hover { background: rgba(24,43,104,0.3); }

        /* ── CONTENT FADE ── */
        .dl-content { transition: opacity 0.3s ease; }
        .dl-content.fading { opacity: 0; }

        /* ── BOTTOM NOTE ── */
        .dl-note {
          font-style: italic;
          font-size: 0.95rem;
          color: var(--gray-400);
          margin: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .dl-wrap { grid-template-columns: 1fr; min-height: auto; }
          .dl-left { border-right: none; border-bottom: 1px solid rgba(24,43,104,0.1); }
          .dl-right-top { display: none; }
          .dl-deco-arabic { font-size: 6rem; top: 50%; right: 0; }
        }

        @media (max-width: 500px) {
          .dl-left, .dl-right {
            padding: 2rem 1.5rem;
          }
          .dl-current-num {
            font-size: 4rem;
          }
        }
      `}</style>

      <section className="w-full px-4 sm:px-6">
      <div className="dl max-w-6xl mx-auto">
        <div className="dl-wrap">
          {/* ── LEFT ── */}
          <div className="dl-left">
            <div>
              <div className="dl-eyebrow">Free Islamic Resources</div>
            </div>

            <div className={`dl-content ${animating ? "fading" : ""}`}>
              <div className="dl-count-strip">
                <span className="dl-current-num">{String(active + 1).padStart(2, "0")}</span>
                <span className="dl-total">/ {String(pdfs.length).padStart(2, "0")}</span>
              </div>
              <span className="dl-tag">{current.tag}</span>
              <h2 className="dl-main-title">{current.title}</h2>
              <div className="dl-arabic-display">{current.arabic}</div>
              <p className="dl-desc">{current.description}</p>
            </div>

            <div className="dl-left-bottom">
              <a
                href={current.file}
                download
                className="dl-download-btn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Free PDF
              </a>
              <div className="dl-progress" style={{ marginTop: "1.5rem" }}>
                {pdfs.map((_, i) => (
                  <div
                    key={i}
                    className={`dl-prog-dot ${i === active ? "active" : ""}`}
                    onClick={() => go(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="dl-right">
            {/* Big decorative arabic in right panel */}
            <div className="dl-deco-arabic">{current.arabic}</div>
            
            <div className="dl-right-top">
              <span className="dl-academy-label">Aiza Quran Academy</span>
            </div>

            <div className="dl-pdf-list">
              {pdfs.map((pdf, i) => (
                <button
                  key={pdf.id}
                  className={`dl-pdf-item ${i === active ? "active" : ""}`}
                  ref={(el) => { refs.current[i] = el; }}
                  onClick={() => go(i)}
                >
                  <div className="dl-item-bar" />
                  <span className="dl-item-num">{String(pdf.id).padStart(2, "0")}</span>
                  <div className="dl-item-info">
                    <span className="dl-item-title">{pdf.title}</span>
                    <span className="dl-item-tag">{pdf.tag}</span>
                  </div>
                  <span className="dl-item-arrow">→</span>
                </button>
              ))}
            </div>

            <p className="dl-note">
              All resources are free — May Allah accept it. Ameen.
            </p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
