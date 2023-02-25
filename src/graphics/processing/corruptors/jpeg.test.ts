import { expect, it } from "vitest";

import JpegCorruptor from "./jpeg";

// Convert string to array buffer
function stringToArrayBuffer(string: string): ArrayBuffer {
  const buffer = new ArrayBuffer(string.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < string.length; i++) {
    view[i] = string.charCodeAt(i);
  }
  return buffer;
}

it("should be able to decode a jpeg", async () => {
  // Load an image as a base64 string
  const data = await fetch(
    "https://www.askdavetaylor.com/0-blog-pics/tiger_1.jpg"
  ).then((res) => res.text());

  // Convert to an ArrayBuffer
  const buffer = stringToArrayBuffer(data);

  const corruptor = new JpegCorruptor(buffer);

  expect(corruptor).toBeDefined();
});
