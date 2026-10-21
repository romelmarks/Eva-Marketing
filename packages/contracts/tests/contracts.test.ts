import { describe, expect, it } from "vitest";
import { ProblemDetailsSchema, SystemVersionSchema } from "../src/index";

describe("foundation contracts", () => {
  it("validates version responses", () => {
    expect(SystemVersionSchema.safeParse({ data: { name: "eva-marketing", version: "0.1.0" } }).success).toBe(true);
  });
  it("rejects invalid problem status", () => {
    expect(ProblemDetailsSchema.safeParse({ type: "about:blank", title: "Error", status: 200 }).success).toBe(false);
  });
});
