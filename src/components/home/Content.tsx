import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      minHeight: "100vh"
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2)
    }
  })
);

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <CssBaseline />
    </div>
  );
}
