/** Client-only demo auth. Replace with server sessions / httpOnly cookies before production. */
export const ADMIN_SESSION_KEY = "aiza_admin_session";

export const ADMIN_EMAIL = "aizaquranacademy@gmail.com";
export const ADMIN_PASSWORD = "aizaquranacademy@12345#";

export function isAdminSession(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";
}

export function setAdminSession(): void {
  sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
}

export function clearAdminSession(): void {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
}
