/** @jsxImportSource @emotion/react */

import { css, jsx, useTheme } from "@emotion/react";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const todoStyle = css`
  display: inline;
  border: none;
  outline: none;
  padding: 2.5rem;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25);
`;

export default function Todo({ text = "this todo has no content", ...props }) {
  const theme = useTheme();

  return (
    <p {...props} css={todoStyle}>
      {props.children}
      {text}
    </p>
  );
}

export function TodoWithDoneStatus({ doneStatus = false, text, ...props }) {
  const theme = useTheme();

  return (
    <Todo
      css={{
        display: "inline",
      }}
      text={text}
      {...props}
    >
      {doneStatus && (
        <CheckIcon
          css={{
            fontSize: "extraLarge",
            color: theme.colors.primary.main,
          }}
        />
      )}
    </Todo>
  );
}
