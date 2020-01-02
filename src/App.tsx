import React from "react";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import Root from "./routes";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  );
};

export default App;
