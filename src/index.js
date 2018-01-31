import React from "react";
import { render } from "react-dom";
import { Client, Provider } from "urql";

import Companies from "./companies";

require("./index.css");

const client = new Client({
  url: "https://api.graph.cool/simple/v1/cj9o4se940gsu0148s5a4helr"
});

const App = () => (
  <Provider client={client}>
    <Companies />
  </Provider>
);

render(<App />, document.getElementById("root"));
