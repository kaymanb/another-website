import * as React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: ${props => props.theme.mainFontFamily};
  font-weight: 900;
  font-size: 60px;
  margin-top: 1em;
  margin-bottom: 0;
`;

interface IntroProps {
  readonly remark: string;
}

export const Intro = (props: IntroProps) => (
  <React.Fragment>
    <Title>Wow, {props.remark} webpage!</Title>
  </React.Fragment>
);
