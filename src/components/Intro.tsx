import * as React from "react";
import styled from "styled-components";
import { Link } from "./Link";

const Title = styled.div`
  margin-bottom: 1em;
`;

const Header = styled.h1`
  font-family: ${props => props.theme.headerFontFamily};
  font-weight: 900;
  line-height: 1.25;
  font-size: 60px;
  text-align: center;
`;

interface IntroProps {
  readonly remark: string;
}

export const Intro = (props: IntroProps) => (
  <Title>
    <Header>Damn, that is one {props.remark} webpage!</Header>
    For some guy studying math and computer science at the{" "}
    <Link href="https://www.utoronto.ca/" target="_blank">
      University of Toronto
    </Link>{" "}
    , I don't think it's half bad.
  </Title>
);
