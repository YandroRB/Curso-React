import Quill from "quill";
import { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";
function TextEditor() {
  const containerRef = useRef(null);
  const quill = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const toolbarOptions = [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        ["link", "image", "video", "formula"],
        // custom button values
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
      ];
      quill.current = new Quill(containerRef.current, {
        modules: {
          toolbar: toolbarOptions,
        },
        theme: "snow",
      });
    }
  }, []);
  const handleButton =()=>{
    const targetDiv= document.getElementById('result');
    targetDiv.innerHTML=quill.current.root.innerHTML;
  }

  return (
    <>
        <div ref={containerRef}></div>
        <button onClick={handleButton}>make as a html element</button>
        <div id="result"></div>
    </>
  )
}

export default TextEditor;
