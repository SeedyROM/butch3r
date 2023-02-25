import { ByteStreamParser } from "../parsers";

class JpegCorruptor {
  data: ByteStreamParser;

  constructor(buffer: ArrayBuffer) {
    this.data = new ByteStreamParser(new Uint8Array(buffer));
  }
}

export default JpegCorruptor;
