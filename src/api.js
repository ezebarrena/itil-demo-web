const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

/** Calls the single route of itil-demo-api. */
export async function fetchMessage() {
  const res = await fetch(`${API_URL}/api/message`);
  if (!res.ok) throw new Error(`API responded ${res.status}`);
  return res.json();
}
