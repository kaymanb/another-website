import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Intro } from "./components/Intro";
import { Link } from "./components/Link";

const theme = {
  headerFontFamily: "Martel, serif",

  /* Colors from http://www.color-hex.com/color-palette/52402 */
  colors: {
    lightBlue: "#0098d4",
    red: "#e32017",
    yellow: "#ffd300",
    green: "#00782a",
    blue: "#003688"
  }
};

const MainWrapper = styled.div`
  font-family: Open Sans, sans-serif;
  font-size: 20px;
  color: #333;

  margin: 10em auto;
  padding: 0 1em;
  max-width: 35em;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <MainWrapper>
      <Intro remark="sweet" />
      I am currently working full-time at{" "}
      <Link href="https://flipp.com/home" target="_blank">
        Flipp
      </Link>
      .
    </MainWrapper>
  </ThemeProvider>
);

export default App;
