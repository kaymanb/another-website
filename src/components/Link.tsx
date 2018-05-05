import * as React from "react";
import styled from "styled-components";
import { Theme } from "../theme";

const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

interface StyledLinkProps {
  color?: string;
  theme: Theme;
}

const linkColor = (props: StyledLinkProps, light?: boolean) => {
  const baseColor = props.color || "lightBlue";
  const color = light ? "light" + capitalize(baseColor) : baseColor;
  return props.theme.colors[color];
};

const StyledLink = styled.a`
  color: ${props => linkColor(props)};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${props => linkColor(props, true)};
    cursor: pointer;
  }
`;

// If no url prop is passed, this just acts as ad hoc to
// change the color of children on hover.
interface LinkProps {
  url?: string;
  color?: string;
  children?: JSX.Element | string;
}

export const Link = (props: LinkProps) => (
  <StyledLink color="lightBlue" href={props.url} target="_blank">
    {props.children}
  </StyledLink>
);
