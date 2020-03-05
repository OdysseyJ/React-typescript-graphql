import * as React from "react";
import { Route, Switch } from "react-router-dom";
import MainContent from "../components/content/main/MainContent";

const ContentRouter = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={MainContent}></Route>
    </Switch>
  );
};

export default ContentRouter;
