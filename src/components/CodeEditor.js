import React, { useState, useEffect } from "react";
import Prism from "prismjs";
// import "../styles/prism.css"


const CodeEditor = props => {
  const [content, setContent] = useState(props.content);

  const handleKeyDown = e => {
    let value = content, selStartPos = e.currentTarget.selectionStart;

    console.log(e.currentTarget);

    // handle 4-space indent on
    if (e.key === "Tab") {
      value = value.substring(0, selStartPos) + "    " +
      value.substring(selStartPos, value.length);
      e.currentTarget.selectionStart = selStartPos + 3;
      e.currentTarget.selectionEnd = selStartPos + 4;
      e.preventDefault();

      setContent(value);
    }
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [props.language, content]);

  return (
    <div className="code-edit-container">
       
      <textarea
        className="code-input"
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyDown={handleKeyDown} >
          
      </textarea>
      <pre className="code-output">
            <code className={`language-${props.language}`}>{content}</code>
          </pre>
     
    </div>
  );
};

export default CodeEditor;