import React from "react";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider as Provider } from "react-apollo";
import Companies from "./companies";

require("./index.css");

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cj9o4se940gsu0148s5a4helr/"
  }),
  cache: new InMemoryCache()
  // url: "https://api.graph.cool/simple/v1/cj9o4se940gsu0148s5a4helr"
});

const App = () => (
  <Provider client={client}>
    <Companies />
  </Provider>
);

render(<App />, document.getElementById("root"));
