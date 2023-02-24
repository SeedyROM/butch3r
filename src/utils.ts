/**
 * Wrap the FileReader API in a promise
 * @param file
 * @returns
 */
export function readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as ArrayBuffer);
    };
    reader.onerror = () => {
      reject(reader.error);
    };
    reader.readAsArrayBuffer(file);
  });
}

/**
 * Get the dimensions of an image
 * @param file
 * @returns The dimensions of the image
 */
export async function getImageDimensions(
  file: File
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      resolve({
        width: image.width,
        height: image.height,
      });
    };

    image.onerror = (e) => {
      reject(e);
    };

    image.src = URL.createObjectURL(file);
  });
}

/**
 * Convert an ArrayBuffer to a base64 string
 * @param buffer
 * @returns
 */
export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

/**
 * Load an image from a base64 string
 * @param base64
 * @returns
 */
export function loadImageFromBase64(base64: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error);
    image.src = base64;
  });
}
