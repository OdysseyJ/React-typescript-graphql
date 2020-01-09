import * as React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainContent from "../components/content/main/MainContent";
import NoticeBoard from "../components/content/notice/NoticeBoard";
import ScrollBoard from "../components/content/scrollboard/ScrollBoard";
import ScrollBoardDetail from "../components/content/scrollboard/ScrollBoardDetail";
import YscecBoard from "../components/content/yscec/YscecBoard";
import BoardDetail from "../pages/BoardDetail";

const ContentRouter = () => {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={MainContent}></Route>
      <Route path={`${path}/notice`} component={NoticeBoard}></Route>
      <Route path={`${path}/board/:id`} exact component={ScrollBoard}></Route>
      <Route
        path={`${path}/board/:id/:number`}
        exact
        component={BoardDetail}
      ></Route>
      <Route path={`${path}/subject/:id`} component={YscecBoard}></Route>
    </Switch>
  );
};

export default ContentRouter;
