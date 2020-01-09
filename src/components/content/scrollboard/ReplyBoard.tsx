import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, List, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 600,
    margin: theme.spacing(3),
    padding: theme.spacing(2)
  },
  list: {
    padding: 0
  },
  backButton: {
    color: "gray",
    fontSize: 12
  },
  "@media (max-width: 1100px)": {
    root: {
      width: 350,
      margin: theme.spacing(1)
    }
  }
}));

export default function ReplyBoard() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <List component="nav" className={classes.list}></List>
    </Paper>
  );
}
