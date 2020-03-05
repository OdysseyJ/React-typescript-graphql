import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      // display: "flex",
    },
    grid: {
      display: "flex",
      justifyContent: "space-between"
    }
  })
);

const MainContent = () => {
  const classes = useStyles();
  return <div className={classes.mainContainer}>하이하이</div>;
};

export default MainContent;
