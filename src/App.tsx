import React from "react";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import Root from "./routes";
import StoreProvider from "./mobx/context";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Root></Root>
      </StoreProvider>
    </ApolloProvider>
  );
};

export default App;
