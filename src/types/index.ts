/**
 * A file that can be edited
 */
export interface EditorImage {
  name: string;
  file: File;
  dimensions: {
    width: number;
    height: number;
  };
  data: ArrayBuffer;
}
