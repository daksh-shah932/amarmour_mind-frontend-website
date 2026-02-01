import { ENV } from "@/env";

export async function apiFetch(path: string, options?: RequestInit) {
  const res = await fetch(`${ENV.API_BASE_URL}${path}`, options);
  if (!res.ok) throw new Error("API error");
  return res.json();
}
