import EditorImagePicker from "./EditorImagePicker";
import EditorImagePreview from "./EditorImagePreview";
import EditorProvider from "./EditorProvider";

const Editor = () => {
  return (
    <EditorProvider>
      <EditorImagePicker />
      <EditorImagePreview />
    </EditorProvider>
  );
};

export default Editor;
