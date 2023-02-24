import tw, { styled } from "twin.macro";

import { useDropzone } from "react-dropzone";
import { useEditorImageDrop } from "../../hooks";

const FilePicker = styled.div`
  ${tw`bg-gray-100 border border-gray-300 rounded-md p-2 h-10`}
`;

function EditorImagePicker() {
  const onDrop = useEditorImageDrop();
  const {
    getRootProps: getRootPropsForDrop,
    getInputProps: getInputPropsForDrop,
  } = useDropzone({ onDrop, multiple: false });

  return (
    <FilePicker className="Editor" {...getRootPropsForDrop()}>
      <input {...getInputPropsForDrop()} />
    </FilePicker>
  );
}

export default EditorImagePicker;
