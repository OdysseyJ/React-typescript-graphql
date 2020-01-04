import * as React from "react";
import PokemonDetail from "../components/pokemon/PokemonDetail";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home, Auth, Detail } from "../pages";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/:id" exact component={PokemonDetail}></Route>
        <Route path="/auth" exact component={Auth}></Route>
        <Route path="/detail" exact component={Detail}></Route>
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
