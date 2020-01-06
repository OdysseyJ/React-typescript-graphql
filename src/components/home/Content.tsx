import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import NoticeList from "../home/notice/NoticeList";
import { Grid } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      paddingTop: 100,
      padding: 10
    }
  })
);

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NoticeList></NoticeList>
    </div>
  );
}
