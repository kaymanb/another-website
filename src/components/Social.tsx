import * as React from "react";
import styled from "styled-components";
import { Link } from "./Link";

const Wrapper = styled.div`
  text-align: left;
`;

export const Social = () => {
  return (
    <Wrapper>
      <Link url="https://github.com/kaymanb" color="darkBlue">
        github
      </Link>
      <br />
      <Link url="kayman_brusse_resume_sept_2018.pdf" color="yellow">
        resume
      </Link>
      <br />
      <Link url="https://instagram.com/kaymnb" color="green">
        instagram
      </Link>
    </Wrapper>
  );
};
