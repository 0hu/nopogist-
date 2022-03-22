import React from "react";

export default function Todo({ text = "this todo has no content" }) {
  return (
    <div>
      {text}
      <button>X</button>
    </div>
  );
}

export function TodoWithDoneStatus({ text, doneStatus }) {
  return (
    <>
      <Todo text={text} />
    </>
  );
}
