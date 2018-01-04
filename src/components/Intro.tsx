import * as React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: ${props => props.theme.headerFontFamily};
  font-weight: 900;
  font-size: 60px;
  margin-bottom: 0.5em;
  text-align: center;
`;

interface IntroProps {
  readonly remark: string;
}

export const Intro = (props: IntroProps) => (
  <React.Fragment>
    <Title>Damn, that is one {props.remark} webpage!</Title>
    For a third year student at the University of Toronto, currently working at
    Flipp, and mostly interested in logic, alorithms and complexity, I don't
    think it's half bad.
  </React.Fragment>
);
