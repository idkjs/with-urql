import React from "react";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import Companies from "./companies";

require("./index.css");

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://laft-with-prisma-oixcbzrkim.now.sh/"
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true
  // url: "https://api.graph.cool/simple/v1/cj9o4se940gsu0148s5a4helr"
});

const App = () => (
  <ApolloProvider client={client}>
    <Companies />
  </ApolloProvider>
);

export default App;
