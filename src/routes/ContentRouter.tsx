import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home, Auth, Detail, Join, Find } from "../pages";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/notice" exact component={Find}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
