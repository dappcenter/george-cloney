import React, { ReactElement } from "react";
import { EditorProps } from "./types";
import { split as SplitEditor } from "react-ace";

const Editor = (props: EditorProps): ReactElement | null => {
  const { code, storage, currentStep } = props;

  const initialCodeValue = code.length > 0 ? "// Contract Code \n" + JSON.stringify(code, null, 2) : "// Contract Code";
  const initialStorageValue = storage
    ? "// Initial Storage Code \n" + JSON.stringify(storage, null, 2)
    : "// Initial Storage Code ";

  if (currentStep !== 1) return null;
  return (
    <>
      <div id="contract-code-editor">
        <button></button>
        {/* This is because of a types issue on Ace SplitEditor 
            // @ts-ignore */}
        <SplitEditor
          width="700px"
          height="300px"
          mode="json"
          theme="monokai"
          tabSize={2}
          splits={2}
          style={{ borderRadius: "5px", margin: "0 auto" }}
          orientation="beside"
          value={[initialCodeValue, initialStorageValue]}
          name="contract-code-editor"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      )}
    </>
  );
};

export default Editor;
