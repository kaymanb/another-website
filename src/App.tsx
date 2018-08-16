import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Title } from "./components/Title";
import { Link } from "./components/Link";

const EMAIL: string = "kaymanbrusse@gmail.com";

const MainWrapper = styled.div`
  font-family: Open Sans, sans-serif;
  font-size: 16px;
  color: #333;
  flex-direction: row;

  margin: 20vh auto;
  padding: 0 1em;
  max-width: 40em;
`;

const Row = styled.div`
  display: flex;
`;

const MainImage = styled.img`
  width: 220px;
  height: 112px;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <MainWrapper>
      <Row>
        <MainImage src="./kman_sleepy_g.jpg" />
        <Title />
      </Row>
      <p>
        I am studying math and computer science at the{" "}
        <Link url="https://www.utoronto.ca/">University of Toronto</Link>. My
        academic interests are mainly in logic, algorithms, computational
        complexity and programming languages.
      </p>
      <p>
        This summer I was at UofT researching models for community health inside
        of online social networks, supervised by Prof. Peter Marbach, and
        supported by an{" "}
        <Link url="http://www.nserc-crsng.gc.ca/Students-Etudiants/UG-PC/USRA-BRPC_eng.asp">
          NSERC URSA
        </Link>. Before that, I spent a year at{" "}
        <Link url="https://flipp.com/home">Flipp</Link> working as a software
        engineer.
      </p>
      <p>
        To get in touch, email me at <Link>{EMAIL}</Link>
      </p>
    </MainWrapper>
  </ThemeProvider>
);

export default App;
