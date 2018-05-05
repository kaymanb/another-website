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
  max-width: 50em;
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
        <MainImage src="./kayman_bruce_pen.jpg" />
      </Column>
      <Column>
        <Title />
        <p>
          I study math and computer science at the{" "}
          <Link url="https://www.utoronto.ca/">University of Toronto</Link>. My
          academic interests are mainly in logic, algorithms, complexity and
          programming languages.
        </p>
        <p>
          This summer I am working on a research project in models and
          algorithms for social networks, supported by an{" "}
          <Link url="http://www.nserc-crsng.gc.ca/Students-Etudiants/UG-PC/USRA-BRPC_eng.asp">
            NSERC URSA
          </Link>. Before that, I spent the year working as a software engineer
          at <Link url="https://flipp.com/home">Flipp</Link>.
        </p>
        <Social />
      </Column>
    </MainWrapper>
  </ThemeProvider>
);

export default App;
