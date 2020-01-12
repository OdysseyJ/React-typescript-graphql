import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    lineHeight: 2
  }
}));

const YscecBoardDetailTitle = ({ children }: any) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default YscecBoardDetailTitle;
