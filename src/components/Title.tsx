import * as React from "react";
import styled from "styled-components";
import { Social } from "./Social";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1em;
`;

export const Title = () => (
  <Wrapper>
    <div>
      Kayman Johannes Brusse
      <Social />
    </div>
  </Wrapper>
);
