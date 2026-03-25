import type { MetadataRoute } from "next";

function getBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

const paths: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/Aboutus", changeFrequency: "monthly", priority: 0.8 },
  { path: "/Courses", changeFrequency: "weekly", priority: 0.9 },
  { path: "/NooraniQaida", changeFrequency: "weekly", priority: 0.9 },
  { path: "/QuranTajweed", changeFrequency: "weekly", priority: 0.9 },
  { path: "/QuranTranslation", changeFrequency: "weekly", priority: 0.9 },
  { path: "/QuranTafsir", changeFrequency: "weekly", priority: 0.9 },
  { path: "/QuranMemorization", changeFrequency: "weekly", priority: 0.9 },
  { path: "/IslamicStudies", changeFrequency: "weekly", priority: 0.85 },
  { path: "/Salah", changeFrequency: "weekly", priority: 0.85 },
  { path: "/Hadith", changeFrequency: "weekly", priority: 0.85 },
  { path: "/Teachers", changeFrequency: "monthly", priority: 0.7 },
  { path: "/FeeChart", changeFrequency: "monthly", priority: 0.75 },
  { path: "/Countries", changeFrequency: "monthly", priority: 0.6 },
  { path: "/Faqs", changeFrequency: "monthly", priority: 0.65 },
  { path: "/blogs", changeFrequency: "weekly", priority: 0.7 },
  { path: "/Contactus", changeFrequency: "yearly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl();
  const now = new Date();

  return paths.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
