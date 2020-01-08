import * as React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainContent from "../components/content/main/MainContent";
import NoticeBoard from "../components/content/notice/NoticeBoard";

const ContentRouter = () => {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={MainContent}></Route>
      <Route path={`${path}/notice`} component={NoticeBoard}></Route>
    </Switch>
  );
};

export default ContentRouter;
