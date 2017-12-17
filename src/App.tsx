import * as React from "react";

interface AppProps {
  name: string;
}

const App = (props: AppProps) => (
  <h1>This is another website, made by {props.name}</h1>
);

export default App;
