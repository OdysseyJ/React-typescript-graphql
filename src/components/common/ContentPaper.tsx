import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    justifyContent: "center",
    alignItems: "center"
  }
}));

export default function ContentPaper({ children }: any) {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      {children}
    </Paper>
  );
}
