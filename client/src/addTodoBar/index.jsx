/** @jsxImportSource @emotion/react */

import { useTheme, css } from "@emotion/react";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { red } from "@mui/material/colors";

export default function AddTodoBar() {
  const theme = useTheme();
  const { mainColor } = theme.colors.primary;
  const [todoText, setTodoText] = useState("");

  function handleTodoTextChange(event) {
    setTodoText(event.target.value);
  }

  return (
    <div>
      <textarea
        type="text"
        value={todoText}
        onChange={handleTodoTextChange}
        placeholder="Type something..."
        css={{
          outline: "none",
          border: "none",
          boxSizing: "border-box",
          width: "48em",
          height: "8em",
          padding: "2em 1em",
          borderRadius: 10,
          margin: "24px 16px",
        }}
      />
      <button css={addButton} type="button">
        <AddIcon />
      </button>
    </div>
  );
}

const addButton = css`
  display: "flex";
  justify-content: "center";
  align-items: "center";
  outline: "none";
  border: "none";
  box-sizing: "border-box";
  width: "2.5rem";
  height: "2.5rem";
  cursor: pointer;
`;
