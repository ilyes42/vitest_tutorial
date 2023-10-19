import { describe, expect, expectTypeOf, it } from "vitest";

import { sum, divide } from "./math";

describe("math.ts sum()", () => {
  it("should output a number", () => {
    const res = sum(1, 2);
    expectTypeOf(res).toBeNumber();
  });
  it("should output the correct result", () => {
    const res = sum(1, 2);
    expect(res).toStrictEqual(3);
  });
});

describe("math.ts divide()", () => {
  it("should throw error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrowError("zero_division");
  });
  it("should output a number", () => {
    const res = divide(1, 2);
    expectTypeOf(res).toBeNumber();
  });
  it("should output the correct result", () => {
    const res = divide(1, 2);
    expect(res).toStrictEqual(0.5);
  });
});
