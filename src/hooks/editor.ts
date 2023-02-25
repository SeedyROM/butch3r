import { useContext } from "react";
import EditorContext from "../contexts/editor";
import { getImageDimensions, readFileAsArrayBuffer } from "../utils";

/**
 * Hook to get the editor context.
 * @returns The editor context.
 * @throws Will throw an error if the context is not available.
 */
export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditorContext must be used within an EditorContext");
  }
  return context;
};

/**
 * Hook to
 * @returns The onDrop callback.
 */
export const useEditorImageDrop = () => {
  const { setFile } = useEditorContext();
  const onDrop = async (acceptedFiles: File[]) => {
    // Only accept one file
    const file = acceptedFiles[0];

    // Create the editor file
    const data = await readFileAsArrayBuffer(file);

    // Get the image dimensions
    const dimensions = await getImageDimensions(file);

    setFile({
      name: file.name,
      file,
      dimensions,
      data,
      originalData: data,
    });
  };
  return onDrop;
};
