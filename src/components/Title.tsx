import * as React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  margin-bottom: 1em;
`;

const YellowStop = styled.stop`
  stop-color: ${props => props.theme.colors.yellow};
`;

const RedStop = styled.stop`
  stop-color: ${props => props.theme.colors.red};
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

const linearGradient = (
  <linearGradient id="gr-simple" x1="0" y1="0" x2="100%" y2="100%">
    <YellowStop offset="10%" />
    <RedStop offset="90%" />
  </linearGradient>
);

// Things like gradients, curves, and other SVG elements that need to
// be declared insige the SVG so they can be referenced later
const svgSetup: ReadonlyArray<JSX.Element> = [linearGradient];

export const Title = (props: TitleProps) => (
  <SVG viewBox="0 0 800 200">
    {svgSetup}
    <Bold x="400" y="80" fill="url(#gr-simple)">
      <tspan x="50%">Damn, that is one</tspan>
      <tspan x="50%" y="170">
        {props.remark} webpage!
      </tspan>
    </Bold>
  </SVG>
);
