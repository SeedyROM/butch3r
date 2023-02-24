import { createContext } from "react";
import { EditorImage } from "../types";

/**
 * The state of the editor.
 */
export interface EditorContextState {
  file: EditorImage | null;
  setFile: (file: EditorImage | null) => void;
}

const EditorContext = createContext<EditorContextState | undefined>(undefined!);

export default EditorContext;
