/**
 * Hostinger / Vercel: build & runtime pe `NEXT_PUBLIC_API_URL` set karo — Node backend ka full origin
 * (e.g. https://darkturquoise-pigeon-295230.hostingersite.com) bina trailing slash.
 */
export function getApiBase(): string {
  const raw = process.env.NEXT_PUBLIC_API_URL?.trim();
  const u = raw?.replace(/\/$/, "");
  return u || "http://localhost:5001";
}
