import * as React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  margin-bottom: 1em;
`;

const Bold = styled.text`
  font-family: ${props => props.theme.headerFontFamily};
  font-weight: 900;
  line-height: 1.25;
  font-size: 75px;
  text-anchor: middle;
`;

interface TitleProps {
  readonly remark: string;
}

export const Title = (props: TitleProps) => (
  <SVG viewBox="0 0 800 200">
    <Bold x="400" y="80">
      Damn, that is one
    </Bold>
    <Bold text-anchor="middle" x="400" y="170">
      {props.remark} webpage!
    </Bold>
  </SVG>
);
