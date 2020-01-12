import * as React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainContent from "../components/content/main/MainContent";
import NoticeBoard from "../components/content/notice/NoticeBoard";
import ScrollBoard from "../components/content/scrollboard/ScrollBoard";
import NoticeBoardDetail from "../components/content/notice/NoticeBoardDetail";
import YscecBoard from "../components/content/yscec/YscecBoard";
import BoardDetail from "../pages/BoardDetail";
import YscecBoardDetail from "../components/content/yscec/YscecBoardDetail";
import ScrollBoardWrite from "../components/content/scrollboard/ScrollBoardWrite";

const ContentRouter = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path} exact component={MainContent}></Route>
      <Route path={`${path}/notice`} exact component={NoticeBoard}></Route>
      <Route
        path={`${path}/notice/:number`}
        exact
        component={NoticeBoardDetail}
      ></Route>
      <Route path={`${path}/board/:id`} exact component={ScrollBoard}></Route>
      <Route
        path={`${path}/board/:id/write`}
        exact
        component={ScrollBoardWrite}
      ></Route>
      <Route
        path={`${path}/board/:id/:number`}
        exact
        component={BoardDetail}
      ></Route>
      <Route path={`${path}/subject/:id`} exact component={YscecBoard}></Route>
      <Route
        path={`${path}/subject/:id/:number`}
        component={YscecBoardDetail}
      ></Route>
    </Switch>
  );
};

export default ContentRouter;
