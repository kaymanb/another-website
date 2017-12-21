import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Intro } from "./components/Intro";

const theme = {
  mainFontFamily: "Martel, serif"
};

const Wrapper = styled.div`
  font-family: Open Sans, sans-serif;
  font-size: 20px;
  color: #333;

  margin: 10em auto;
  padding: 0 1em;
  max-width: 35em;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Intro remark="nice" />
    </Wrapper>
  </ThemeProvider>
);

export default App;
