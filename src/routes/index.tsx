import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home, Auth } from "../pages";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/auth" component={Auth}></Route>
        <Redirect path="*" to="/auth"></Redirect>
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
