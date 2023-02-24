import { FC, useEffect, useRef } from "react";
import { EditorImage } from "../../types";
import { arrayBufferToBase64, loadImageFromBase64 } from "../../utils";

interface ImagePreviewProps {
  image: EditorImage | null;
}

const ImagePreview: FC<ImagePreviewProps> = ({ image }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawImage = async (image: EditorImage) => {
    // Check if the canvas is available and if we have an image
    if (!canvasRef.current || !image) return;

    // Load the image from the base64 string
    const previewImage = await loadImageFromBase64(
      "data:image/jpeg;base64," + arrayBufferToBase64(image.data)
    );

    // Get the canvas context
    const ctx = canvasRef.current!.getContext("2d");
    if (!ctx) return;

    // Draw the image to the canvas
    ctx.drawImage(previewImage, 0, 0);
  };

  useEffect(() => {
    if (!image) return;
    drawImage(image);
  }, [image]);

  return (
    (image! && (
      <canvas
        ref={canvasRef}
        width={image.dimensions.width}
        height={image.dimensions.height}
      />
    )) || <div>No Image</div>
  );
};

export default ImagePreview;
