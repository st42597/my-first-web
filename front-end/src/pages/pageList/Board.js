import Editor from "rich-markdown-editor";

function Board() {
  return(
    <div>
      <Editor
        defaultValue="Hello world!"
      />
    </div>
  )
}
export default Board;