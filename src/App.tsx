import * as React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`;

interface AppProps {
  greeting: string;
}

const App = (props: AppProps) => (
  <Title>{props.greeting}, this is another website.</Title>
);

export default App;
