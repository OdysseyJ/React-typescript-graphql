import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Join, Find } from "../pages";
import AuthMain from "../containers/auth/AuthMain";

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth" component={AuthMain}></Route>
      <Route path="/auth/join" component={Join}></Route>
      <Route path="/auth/find" component={Find}></Route>
      <Redirect path="*" to="/auth"></Redirect>
    </Switch>
  );
};

export default AuthRouter;
