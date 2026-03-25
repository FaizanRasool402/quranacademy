"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

      const res = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "contactus_page_quick_contact",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');

        .cp {
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
          min-height: 100vh;
        }

        .cp-hero {
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

        .cp-hero-glow1 {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(253,166,0,0.18) 0%, transparent 65%);
          top: -180px; left: -120px;
          animation: cp-pulse1 7s ease-in-out infinite;
          pointer-events: none;
        }
        .cp-hero-glow2 {
          position: absolute;
          width: 450px; height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(253,166,0,0.12) 0%, transparent 65%);
          bottom: -120px; right: -80px;
          animation: cp-pulse2 9s ease-in-out infinite;
          pointer-events: none;
        }
        .cp-hero-glow3 {
          position: absolute;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%);
          top: 40%; right: 25%;
          animation: cp-pulse3 11s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes cp-pulse1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(40px,30px) scale(1.1); }
        }
        @keyframes cp-pulse2 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(-30px,-40px) scale(1.12); }
        }
        @keyframes cp-pulse3 {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(20px,-30px); }
        }

        .cp-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(253,166,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(253,166,0,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        .cp-hero-arabic-deco {
          position: absolute;
          top: 45%; left: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
          width: clamp(280px, 40vw, 420px);
          height: clamp(280px, 40vw, 420px);
          animation: cp-rotate 60s linear infinite;
        }
        .cp-hero-arabic-deco svg { width: 100%; height: 100%; }
        .cp-hero-arabic-deco text {
          font-family: 'Amiri', serif;
          font-size: 20px;
          fill: rgba(253,166,0,0.12);
          letter-spacing: 12px;
        }
        @keyframes cp-rotate {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }

        .cp-hero-wave {
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 70px;
          pointer-events: none;
          z-index: 3;
        }

        .cp-hero-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 1.5rem;
        }

        .cp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1rem;
          animation: cp-up 0.8s 0.1s both;
        }
        .cp-eyebrow-line {
          display: block;
          width: 2rem;
          height: 1px;
          background: var(--gold);
          opacity: 0.6;
        }

        .cp-h1 {
          font-size: clamp(2.5rem,8vw,5rem);
          font-weight: 700;
          line-height: 1;
          color: var(--white);
          margin: 0 0 1rem;
          animation: cp-up 0.8s 0.25s both;
        }

        .cp-hero-sub {
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          margin: 0;
          animation: cp-up 0.8s 0.4s both;
        }

        .cp-hero-divider {
          width: 4rem;
          height: 2px;
          margin: 1.5rem auto 0;
          border-radius: 9999px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          animation: cp-up 0.8s 0.5s both;
        }

        @keyframes cp-up {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .cp-body {
          max-width: 72rem;
          margin: 0 auto;
          padding: clamp(3rem,6vw,5rem) clamp(1rem,4vw,1.5rem);
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: clamp(2rem,5vw,4rem);
          align-items: start;
        }

        .cp-left {}
        .cp-section-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gray-400);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        .cp-section-label::after { content:''; flex:1; height:1px; background:var(--line); }

        .cp-contact-block { margin-bottom: 2rem; }
        .cp-contact-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 0.4rem;
        }
        .cp-contact-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--gray-900);
        }
        .cp-contact-sub {
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--gray-400);
          margin-top: 0.2rem;
        }

        .cp-divider { width:100%; height:1px; background:var(--line); margin: 2rem 0; }

        .cp-quote {
          font-size: 1rem;
          font-style: italic;
          font-weight: 400;
          color: var(--gray-600);
          line-height: 1.8;
          border-left: 3px solid var(--gold);
          padding-left: 1.2rem;
        }

        .cp-arabic-deco {
          font-family: 'Amiri', serif;
          font-size: 2rem;
          color: rgba(24,43,104,0.1);
          direction: rtl;
          margin-top: 1.5rem;
        }

        .cp-form-wrap {
          background: var(--white);
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: clamp(1.5rem,4vw,2rem);
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .cp-form-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #182b68 !important;
          margin: 0 0 1.5rem;
        }

        .cp-input, .cp-textarea, .cp-select {
          padding: 1rem 1.25rem;
          border: 1px solid #e5e7eb;
          border-radius: 9999px;
          background: var(--white);
          font-family: 'Raleway', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: var(--gray-900);
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
          width: 100%;
          box-sizing: border-box;
          margin-bottom: 1rem;
        }
        .cp-input:focus, .cp-textarea:focus, .cp-select:focus {
          border-color: #182b68 !important;
          box-shadow: 0 0 0 3px rgba(24,43,104,0.08) !important;
        }
        .cp-input::placeholder, .cp-textarea::placeholder, .cp-select { color: #9ca3af; }
        .cp-textarea {
          resize: vertical;
          min-height: 100px;
          border-radius: 1.5rem;
        }
        .cp-select {
          border-radius: 9999px;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.25rem;
          padding-right: 3rem;
        }

        .cp .cp-form-wrap .cp-submit-btn,
        .cp-submit-btn,
        button.cp-submit-btn {
          width: auto !important;
          min-width: 180px;
          padding: 1rem 2rem !important;
          border-radius: 0.75rem !important;
          background: #182b68 !important;
          background-color: #182b68 !important;
          color: #ffffff !important;
          font-weight: 600 !important;
          font-size: 0.875rem !important;
          letter-spacing: 0.025em !important;
          border: none !important;
          cursor: pointer !important;
          transition: opacity 0.2s !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0.5rem !important;
          margin-top: 0.5rem !important;
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          appearance: none !important;
        }
        .cp .cp-form-wrap .cp-submit-btn:hover,
        .cp-submit-btn:hover,
        button.cp-submit-btn:hover {
          opacity: 0.9 !important;
        }
        .cp .cp-form-wrap .cp-submit-btn:disabled,
        .cp-submit-btn:disabled,
        button.cp-submit-btn:disabled {
          opacity: 1 !important;
          cursor: not-allowed !important;
        }

        .cp-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .cp-success { text-align: center; padding: 2.5rem 1.5rem; }
        .cp-success-icon {
          width: 60px; height: 60px;
          border-radius: 50%;
          background: rgba(24,43,104,0.1);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 1.5rem;
          color: #182b68;
        }
        .cp-success-title { font-size: 1.75rem; font-weight: 700; color: var(--gray-900); margin: 0 0 0.5rem; }
        .cp-success-desc { font-size: 0.9rem; font-weight: 400; color: var(--gray-600); line-height: 1.8; margin: 0 0 1.5rem; }
        .cp-success-back {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: #182b68;
          cursor: pointer; background: none;
          border: 2px solid #182b68;
          padding: 0.6rem 1.5rem; border-radius: 6px; transition: all 0.25s;
        }
        .cp-success-back:hover { background: #182b68; color: #ffffff; }

        .cp-error-msg {
          font-size: 0.85rem; color: #c0392b; margin-top: 0.8rem;
          padding: 0.7rem 1rem;
          background: rgba(192,57,43,0.06);
          border: 1px solid rgba(192,57,43,0.15); border-radius: 6px;
        }

        @media (max-width: 900px) {
          .cp-body { grid-template-columns: 1fr; }
          .cp-left { order: 2; }
          .cp-form-wrap { order: 1; }
        }
        @media (max-width: 550px) {
          .cp-field-row { grid-template-columns: 1fr; }
          .cp-submit-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="cp">
        <section className="cp-hero">
          <div className="cp-hero-glow1" />
          <div className="cp-hero-glow2" />
          <div className="cp-hero-glow3" />
          <div className="cp-hero-grid" />
          <div className="cp-hero-arabic-deco">
            <svg viewBox="0 0 200 200">
              <defs>
                <path id="contactCirclePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
              </defs>
              <text>
                <textPath href="#contactCirclePath" startOffset="0%">
                  تواصل معنا • تواصل معنا • تواصل معنا • تواصل معنا •
                </textPath>
              </text>
            </svg>
          </div>

          <div className="cp-hero-inner">
            <div className="cp-eyebrow">
              <span className="cp-eyebrow-line" />
              Aiza Quran Academy
              <span className="cp-eyebrow-line" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">Contact Us</h1>
            <p className="text-sm sm:text-base text-white font-medium tracking-wide mt-3">We would love to hear from you</p>
            <div className="cp-hero-divider" />
          </div>

          <svg className="cp-hero-wave" viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
          </svg>
        </section>

        <div className="cp-body">
          <div className="cp-left">
            <div className="cp-section-label">Contact Info</div>

            <div className="cp-contact-block">
              <div className="cp-contact-label">Email</div>
              <div className="cp-contact-value">info@aizaquranacademy.com</div>
              <div className="cp-contact-sub">We reply within 24 hours</div>
            </div>

            <div className="cp-contact-block">
              <div className="cp-contact-label">Academy</div>
              <div className="cp-contact-value">Aiza Quran Academy</div>
              <div className="cp-contact-sub">Online · Available Worldwide</div>
            </div>

            <div className="cp-contact-block">
              <div className="cp-contact-label">Classes For</div>
              <div className="cp-contact-value">Children & Adult Women</div>
              <div className="cp-contact-sub">Taught by qualified female teachers</div>
            </div>

            <div className="cp-divider" />

            <div className="cp-quote">
              &quot;Seeking knowledge is an obligation upon every Muslim.&quot;
              <br />
              <small style={{ fontSize: "0.8rem", color: "var(--gray-400)", fontStyle: "normal" }}>— Prophet Muhammad ﷺ</small>
            </div>

            <div className="cp-arabic-deco">تواصل معنا</div>
          </div>

          <div className="cp-form-wrap">
            {status === "success" ? (
              <div className="cp-success">
                <div className="cp-success-icon">✓</div>
                <h3 className="cp-success-title">JazakAllah Khair!</h3>
                <p className="cp-success-desc">
                  Your message has been sent successfully. We have also sent a confirmation to your email. We will get back to you within 24 hours, In sha Allah.
                </p>
                <button className="cp-success-back" onClick={() => setStatus("idle")}>
                  ← Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="cp-form-title" style={{ color: "#182b68" }}>Quick Contact</h2>

                <input className="cp-input" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                <input className="cp-input" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <select className="cp-select" name="subject" value={form.subject} onChange={handleChange}>
                  <option value="">Subject</option>
                  <option value="Enrollment Inquiry">Enrollment Inquiry</option>
                  <option value="Course Information">Course Information</option>
                  <option value="Fee & Pricing">Fee &amp; Pricing</option>
                  <option value="Schedule & Timing">Schedule &amp; Timing</option>
                  <option value="Other">Other</option>
                </select>
                <textarea className="cp-textarea" name="message" placeholder="Message" value={form.message} onChange={handleChange} />

                {status === "error" && (
                  <div className="cp-error-msg">⚠ {errorMsg}</div>
                )}

                <div className="mt-4 flex justify-center">
                  <button
                    className="cp-submit-btn"
                    style={{ background: "#182b68", backgroundColor: "#182b68", color: "#fff" }}
                    onClick={handleSubmit}
                    disabled={status === "loading" || !form.name || !form.email || !form.message}
                  >
                    {status === "loading" ? (
                      <><div className="cp-spinner" /> Sending...</>
                    ) : (
                      <>Submit Now</>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
