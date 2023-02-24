import { useEditorContext } from "../../hooks";
import ImagePreview from "../graphics/ImagePreview";

const EditorImagePreview = () => {
  const { file } = useEditorContext();

  return <ImagePreview image={file} />;
};

export default EditorImagePreview;
