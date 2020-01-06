import React from "react";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import Root from "./routes";
import Header from "./components/layout/Header";

//for test
import CityList from "./mobx/city";
import StoreProvider from "./mobx/context";
import Search from "./mobx/search";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Header></Header>
        <Root />
      </StoreProvider>
    </ApolloProvider>
  );
};

export default App;
