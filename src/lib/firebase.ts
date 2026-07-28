const DATABASE_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

export const isFirebaseConfigured = Boolean(DATABASE_URL);

/**
 * Writes a lead to the `leads` node using the Realtime Database REST API.
 *
 * REST is used rather than the JS SDK deliberately: the SDK holds a
 * WebSocket open and its write promise only settles once the server
 * acknowledges, so a stalled socket leaves the form spinning forever. A
 * plain POST either succeeds or fails, and keeps the SDK out of the bundle.
 *
 * Returns false when the database URL is absent so the caller can decide
 * what to show; throws when the request itself fails.
 */
export async function saveLead(
  data: Record<string, unknown>
): Promise<boolean> {
  if (!DATABASE_URL) return false;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(`${DATABASE_URL}/leads.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        createdAt: { ".sv": "timestamp" },
        source: "landing-page",
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(
        `Realtime Database rejected the write (HTTP ${response.status})`
      );
    }

    return true;
  } finally {
    clearTimeout(timeout);
  }
}
