import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Title } from "./components/Title";
import { Link } from "./components/Link";
import { Social } from "./components/Social";

const MainWrapper = styled.div`
  font-family: Open Sans, sans-serif;
  font-size: 16px;
  color: #333;
  display: flex;
  flex-direction: row;

  margin: 20vh auto;
  padding: 0 1em;
  max-width: 40em;
`;

const Column = styled.div`
  margin: 10px;
`;

const MainImage = styled.img`
  width: 200px;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <MainWrapper>
      <Column>
        <MainImage src="./me_and_skittles.jpg" title="Selfie with Skittles" />
      </Column>
      <Column>
        <Title />
        <div>
          I study math and computer science at the{" "}
          <Link url="https://www.utoronto.ca/">University of Toronto</Link>
          , and work at <Link url="https://flipp.com/home">Flipp</Link>
          . My academic interests are mainly in logic, algorithms, complexity
          and programming languages.
        </div>
        <Social />
      </Column>
    </MainWrapper>
  </ThemeProvider>
);

export default App;
