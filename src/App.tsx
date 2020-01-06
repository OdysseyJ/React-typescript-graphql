import React from "react";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import Root from "./routes";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header></Header>
      <Root />
    </ApolloProvider>
  );
};

export default App;
