import { useEditorContext } from "../../hooks";
import ImagePreview from "../graphics/ImagePreview";

const EditorImagePreview = () => {
  const { file } = useEditorContext();

  if (!file) return <div>No Image</div>;

  const view = new Uint8Array(file!.data);

  for (let i = 1000; i < view.length; i++) {
    if (i % 2048) view[i] = view[i] / Math.floor(Math.random() * 8);
  }

  const newFile = {
    ...file!,
    data: view.buffer,
  };

  return <ImagePreview image={newFile} />;
};

export default EditorImagePreview;
