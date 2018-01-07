import * as React from "react";
import styled from "styled-components";
import {
  TiSocialGithubCircular,
  TiSocialInstagram,
  TiDocumentText,
  TiSocialAtCircular
} from "react-icons/lib/ti";
import { Link } from "./Link";

const iconSize: number = 25;

const Wrapper = styled.div`
  text-align: left;
  margin-top: 1em;
`;

export const Social = () => {
  return (
    <Wrapper>
      <Link url="https://github.com/kaymanb" color="blue">
        <TiSocialGithubCircular size={iconSize} />
      </Link>{" "}
      <Link url="public/kayman_brusse_cv.pdf" color="yellow">
        <TiDocumentText size={iconSize} />
      </Link>{" "}
      <Link url="" color="red">
        <TiSocialAtCircular size={iconSize} />
      </Link>{" "}
      <Link url="https://instagram.com/kaymnb" color="green">
        <TiSocialInstagram size={iconSize} />
      </Link>
    </Wrapper>
  );
};
