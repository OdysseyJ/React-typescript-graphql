import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ContentRouter from "../../routes/ContentRouter";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentin: {
      alignItems: "center",
      display: "flex",
      width: 850,
      flexDirection: "column",
      paddingTop: 70
    },
    "@media (max-width: 700px)": {
      contentin: {
        width: 400
      }
    }
  })
);

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.contentin}>
      <CssBaseline />
      <ContentRouter></ContentRouter>
    </div>
  );
}
