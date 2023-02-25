export class ByteStreamParser {
  data: Uint8Array;
  offset: number = 0;

  constructor(data: Uint8Array) {
    this.data = data;
  }

  take(count: number): Uint8Array {
    const result = this.data.slice(this.offset, this.offset + count);
    this.offset += count;
    return result;
  }

  takeWhile(predicate: (byte: number) => boolean): Uint8Array {
    const start = this.offset;
    while (predicate(this.data[this.offset])) {
      this.offset++;
    }
    return this.data.slice(start, this.offset);
  }

  takeChunksWhile(
    size: number,
    predicate: (bytes: Uint8Array) => boolean
  ): Uint8Array[] {
    const chunks: Uint8Array[] = [];
    while (predicate(this.data.slice(this.offset, this.offset + size))) {
      chunks.push(this.take(size));
    }
    return chunks;
  }
}
