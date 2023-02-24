import { FC, ReactNode, useState } from "react";
import EditorContext from "../../contexts/editor";
import { EditorImage } from "../../types";

interface EditorProviderProps {
  children: ReactNode;
}

const EditorProvider: FC<EditorProviderProps> = ({ children }) => {
  const [file, setFile] = useState<EditorImage | null>(null);

  return (
    <EditorContext.Provider value={{ file, setFile }}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
