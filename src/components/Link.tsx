import * as React from "react";
import styled from "styled-components";
import { Theme } from "../theme";

interface StyledLinkProps {
  color?: string;
  theme: Theme;
}

const linkColor = (props: StyledLinkProps) => {
  const color = props.color || "lightBlue";
  return props.theme.colors[color];
};

const StyledLink = styled.a`
  color: ${props => linkColor(props)};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

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
