export function getApiBase(): string {
  const u = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
  return u || "http://localhost:5001";
}
