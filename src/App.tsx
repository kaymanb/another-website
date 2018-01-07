import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Social } from "./components/Social";
import { Title } from "./components/Title";
import { Link } from "./components/Link";

const MainWrapper = styled.div`
  font-family: Open Sans, sans-serif;
  font-size: 18px;
  color: #333;

  margin: 20vh auto;
  padding: 0 1em;
  max-width: 35em;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <MainWrapper>
      <Title />
      <span>
        I study math and computer science at the{" "}
        <Link url="https://www.utoronto.ca/">University of Toronto</Link>
        , and work at <Link url="https://flipp.com/home">Flipp</Link>
        . My academic interests are mainly in logic, algorithms, complexity and
        programming languages.
      </span>
      <Social />
    </MainWrapper>
  </ThemeProvider>
);

export default App;
