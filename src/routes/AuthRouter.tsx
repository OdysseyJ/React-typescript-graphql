import * as React from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import { Join, Find } from "../pages";
import AuthForm from "../components/auth/AuthForm";

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth" component={AuthForm}></Route>
      <Route path="/auth/join" component={Join}></Route>
      <Route path="/auth/find" component={Find}></Route>
      <Redirect path="*" to="/auth"></Redirect>
    </Switch>
  );
};

export default AuthRouter;
