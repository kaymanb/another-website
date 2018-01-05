import * as React from "react";
import styled from "styled-components";
import { Link } from "./Link";
import { Title } from "./Title";

const Wrapper = styled.div`
  margin-bottom: 1em;
`;

export const Intro = () => (
  <Wrapper>
    <Title remark="sweet" />
    For some guy studying math and computer science at the{" "}
    <Link href="https://www.utoronto.ca/" target="_blank">
      University of Toronto
    </Link>{" "}
    , I don't think it's half bad.
  </Wrapper>
);
