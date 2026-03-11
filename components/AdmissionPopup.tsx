"use client";

import { useState, useEffect } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function AdmissionPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !phone || !message) return;

    setStatus("loading");

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

      const res = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          message,
          source: "admission_popup",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setMessage("");
        setTimeout(() => setOpen(false), 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-[#182b68] rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider">
            Admission
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/20 transition-colors shrink-0"
            aria-label="Close"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          <p className="text-center text-white/90 py-4">Thank you! We will contact you soon.</p>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name*"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-[#2a3a5c] border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone *"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-[#2a3a5c] border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
            />
            <textarea
              placeholder="Message *"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-[#2a3a5c] border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors resize-none"
            />
            {status === "error" && (
              <p className="text-red-300 text-sm">Failed to send. Please try again.</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 rounded-md bg-[#fda600] text-white font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Submit Now"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
