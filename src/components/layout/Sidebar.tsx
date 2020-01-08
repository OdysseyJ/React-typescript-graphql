import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import NoticeList from "../sidebar/notice/NoticeList";
import Today from "../sidebar/today/Today";
import RightFooter from "../sidebar/rightfooter/RightFooter";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      alignItems: "center",
      width: 350,
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      paddingTop: 70
    },
    "@media (max-width: 700px)": {
      sidebar: {
        width: 400,
        paddingTop: 0
      }
    }
  })
);

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <Today></Today>
      <NoticeList></NoticeList>
      <RightFooter></RightFooter>
    </div>
  );
};

export default Home;
