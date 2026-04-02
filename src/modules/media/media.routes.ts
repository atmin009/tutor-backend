import { Router } from "express";
import type { Request, Response } from "express";
import { Readable } from "stream";

const mediaRouter = Router();

const ALLOWED_HOSTS = new Set(["storage.googleapis.com"]);

function parseAndValidateUrl(raw: unknown): URL | null {
  if (typeof raw !== "string" || !raw.trim()) return null;
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") return null;
  if (!ALLOWED_HOSTS.has(url.hostname)) return null;

  // Optional safety: lock to your bucket/path prefix to avoid open proxy abuse
  // Example expected path: /mtr-system/app-tutor/videos/...
  if (!url.pathname.startsWith("/mtr-system/")) return null;

  return url;
}

mediaRouter.get("/proxy", async (req: Request, res: Response) => {
  const target = parseAndValidateUrl(req.query.url);
  if (!target) {
    return res.status(400).json({ message: "Invalid or disallowed url" });
  }

  try {
    const range = req.headers.range;
    const upstream = await fetch(target.toString(), {
      headers: range ? { range } : undefined,
    });

    // Forward status for range / errors
    res.status(upstream.status);

    // Forward important headers for video playback
    const passthroughHeaders = [
      "content-type",
      "content-length",
      "accept-ranges",
      "content-range",
      "etag",
      "last-modified",
      "cache-control",
    ] as const;

    for (const h of passthroughHeaders) {
      const v = upstream.headers.get(h);
      if (v) res.setHeader(h, v);
    }

    // Allow browser to cache a bit (safe because URL is stable)
    if (!res.getHeader("cache-control")) {
      res.setHeader("cache-control", "public, max-age=300");
    }

    if (!upstream.body) {
      return res.end();
    }

    Readable.fromWeb(upstream.body as any).pipe(res);
  } catch (err) {
    console.error("media proxy error:", err);
    res.status(502).json({ message: "Failed to proxy media" });
  }
});

export default mediaRouter;

