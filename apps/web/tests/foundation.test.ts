import { describe, expect, it } from "vitest";
describe("web foundation", () => {
  it("identifies the application", () => {
    expect("EVA Marketing").toMatch(/EVA Marketing/);
  });
});
