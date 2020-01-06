import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import NoticeList from "../sidebar/notice/NoticeList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      width: 500,
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }
  })
);

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <NoticeList></NoticeList>
    </div>
  );
};

export default Home;
