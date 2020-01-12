import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import NoticeList from "../sidebar/notice/NoticeList";
import Today from "../sidebar/today/Today";
import RightFooter from "../sidebar/rightfooter/RightFooter";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rightsidebar: {
      padding: 5,
      width: 340,
      marginRight: theme.spacing(26),
      display: "inline-block",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }
  })
);

const RightSideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.rightsidebar}>
      <Today></Today>
      <NoticeList></NoticeList>
      <RightFooter></RightFooter>
    </div>
  );
};

export default RightSideBar;
