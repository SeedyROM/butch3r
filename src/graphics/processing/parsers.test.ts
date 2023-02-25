import { describe, expect, it } from "vitest";
import { ByteStreamParser } from "./parsers";

describe("ByteStreamParser", () => {
  it("should be able to take a number of bytes", () => {
    const parser = new ByteStreamParser(new Uint8Array([1, 2, 3, 4, 5]));
    expect(parser.take(3)).toEqual(new Uint8Array([1, 2, 3]));
    expect(parser.take(2)).toEqual(new Uint8Array([4, 5]));
  });

  it("should be able to take bytes while a predicate is true", () => {
    const parser = new ByteStreamParser(new Uint8Array([1, 2, 3, 4, 5]));
    expect(parser.takeWhile((byte) => byte < 4)).toEqual(
      new Uint8Array([1, 2, 3])
    );
    expect(parser.takeWhile((byte) => byte < 10)).toEqual(
      new Uint8Array([4, 5])
    );
  });

  it("should be able to take chunks while a predicate is true", () => {
    const parser = new ByteStreamParser(new Uint8Array([1, 2, 3, 4, 5]));
    expect(parser.takeChunksWhile(2, (bytes) => bytes[0] < 4)).toEqual([
      new Uint8Array([1, 2]),
      new Uint8Array([3, 4]),
    ]);
    expect(parser.takeChunksWhile(2, (bytes) => bytes[0] < 10)).toEqual([
      new Uint8Array([5]),
    ]);
  });
});
