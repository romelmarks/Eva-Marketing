import { Hono } from "hono";
import { randomUUID } from "node:crypto";
import { z } from "zod";

export const app = new Hono();

app.use("*", async (c, next) => {
  const requestId = randomUUID();
  c.header("X-Request-ID", requestId);
  await next();
});

app.get("/health/live", (c) => c.json({ status: "ok" }));

app.get("/v1/system/version", (c) =>
  c.json({ data: { name: "eva-marketing", version: "0.1.0" } }),
);

const EchoSchema = z.object({ message: z.string().trim().min(1).max(200) }).strict();
app.post("/v1/system/validate", async (c) => {
  let payload: unknown;
  try {
    payload = await c.req.json();
  } catch {
    return c.json({ type: "about:blank", title: "Invalid JSON", status: 400, code: "INVALID_JSON" }, 400);
  }
  const parsed = EchoSchema.safeParse(payload);
  if (!parsed.success) {
    return c.json({ type: "about:blank", title: "Validation failed", status: 422, code: "VALIDATION_FAILED" }, 422);
  }
  return c.json({ data: parsed.data });
});

app.notFound((c) => c.json({ type: "about:blank", title: "Not Found", status: 404 }, 404));

app.onError((error, c) => {
  console.error("API request failed", { error: error.name, path: c.req.path });
  return c.json({ type: "about:blank", title: "Internal Server Error", status: 500 }, 500);
});
