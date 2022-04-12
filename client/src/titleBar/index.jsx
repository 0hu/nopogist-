/** @jsxImportSource @emotion/react */

import { jsx, css, useTheme } from "@emotion/react";
import React from "react";

export default function TitleBar() {
  const theme = useTheme();

  return (
    <header>
      <h1
        css={{
          marginLeft: 30,
        }}
      >
        NOPOGIST
      </h1>
    </header>
  );
}
