import * as React from "react";
import styled from "styled-components";
import { Theme } from "../theme";

const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

const linkColor = (props: StyledLinkProps, light?: boolean) => {
  console.debug(props);
  const baseColor = props.color || "lightBlue";
  const color = light ? "light" + capitalize(baseColor) : baseColor;
  return props.theme.colors[color];
};

interface StyledLinkProps {
  readonly color?: string;
  readonly theme: Theme;
}

const StyledLink = styled.a`
  color: ${props => linkColor(props)};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${props => linkColor(props, true)};
  }
`;

interface LinkProps {
  readonly url: string;
  readonly color?: string;
  readonly children?: JSX.Element | string | undefined;
}

export const Link = (props: LinkProps) => (
  <StyledLink color={props.color} href={props.url} target="_blank">
    {props.children}
  </StyledLink>
);
