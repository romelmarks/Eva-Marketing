import { describe, expect, it } from "vitest";
import { app } from "../src/app";

describe("foundation API", () => {
  it("returns a minimal healthy response", async () => {
    const response = await app.request("/health/live");
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ status: "ok" });
    expect(response.headers.get("X-Request-ID")).toBeTruthy();
  });

  it("accepts valid structured input", async () => {
    const response = await app.request("/v1/system/validate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: "Hello EVA" }),
    });
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ data: { message: "Hello EVA" } });
  });

  it("rejects invalid input without disclosing internals", async () => {
    const response = await app.request("/v1/system/validate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: "" }),
    });
    expect(response.status).toBe(422);
    const body = await response.json();
    expect(body).toMatchObject({ status: 422, code: "VALIDATION_FAILED" });
    expect(JSON.stringify(body)).not.toContain("stack");
  });

  it("rejects malformed JSON", async () => {
    const response = await app.request("/v1/system/validate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: "{",
    });
    expect(response.status).toBe(400);
  });
});
