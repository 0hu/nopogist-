/** @jsxImportSource @emotion/react */
import "./App.css";
import Body from "./body";
import TitleBar from "./titleBar";
import { css, jsx, ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    primary: {
      extraLight: "#dcedc8",
      light: "#c5e1a5",
      main: "#aed581",
      dark: "#9ccc65",
      extraDark: "#8bc34a",
    },
    secondary: {
      extraLight: "",
      light: "#f05545",
      main: "#7c1ea3",
      dark: "#7f0000",
      extraDark: "",
    },
    error: "#d50000",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div css={ContainerStyle}>
        <TitleBar />
        <Body />
        <div>footer</div>
      </div>
    </ThemeProvider>
  );
}

const ContainerStyle = css`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export default App;
