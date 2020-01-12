import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import NoticeList from "../sidebar/notice/NoticeList";
import RightFooter from "../sidebar/rightfooter/RightFooter";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    leftsidebar: {
      width: 350,
      padding: 5
    }
  })
);

const RightSideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.leftsidebar}>
      <NoticeList></NoticeList>
      <RightFooter></RightFooter>
    </div>
  );
};

export default RightSideBar;
