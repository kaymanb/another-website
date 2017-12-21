import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Intro } from "./components/Intro";

const theme = {
  mainFontFamily: "Martel, serif"
};

const Wrapper = styled.div`
  margin: auto;
  padding: 0 1em;
  max-width: 35em;
  font-size: 20px;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Intro remark="nice" />
    </Wrapper>
  </ThemeProvider>
);

export default App;
