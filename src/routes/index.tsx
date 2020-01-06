import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home, Auth, Detail, Join, Find } from "../pages";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/auth" exact component={Auth}></Route>
        <Route path="/auth/join" exact component={Join}></Route>
        <Route path="/auth/find" exact component={Find}></Route>
        <Route path="/detail" exact component={Detail}></Route>
        <Redirect path="*" to="/auth" />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
