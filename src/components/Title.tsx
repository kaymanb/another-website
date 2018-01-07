import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 1em;
`;

const Bold = styled.h1`
  font-family: ${props => props.theme.headerFontFamily};
  font-weight: 900;
  line-height: 0.25;
  font-size: 75px;
  text-anchor: middle;
  fill: #333;
`;

export const Title = () => (
  <Wrapper>
    <Bold>Hey</Bold>
  </Wrapper>
);
