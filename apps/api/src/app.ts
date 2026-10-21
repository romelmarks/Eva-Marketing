import { Hono } from "hono";
export const app = new Hono();
app.get("/health/live", (c) => c.json({ status: "ok" }));
app.get("/v1/system/version", (c) => c.json({ data: { name: "eva-marketing", version: "0.1.0" } }));
app.notFound((c) => c.json({ type: "about:blank", title: "Not Found", status: 404 }, 404));
