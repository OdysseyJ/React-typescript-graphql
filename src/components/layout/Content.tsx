import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme, makeStyles } from "@material-ui/core/styles";
import ContentRouter from "../../routes/ContentRouter";

const useStyles = makeStyles((theme: Theme) => ({
  fixedContentSpace: {
    width: 1300,
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    zIndex: 50,
    position: "relative"
  },
  innerContentSpace: { width: 780, padding: 10, zIndex: 99 },
  "@media (max-width: 1024px)": {
    innerContentSpace: {
      width: "100%"
    }
  },
  "@media (max-width: 1300px)": {
    fixedContentSpace: {
      width: "auto"
    }
  }
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.fixedContentSpace}>
      <CssBaseline />
      <div className={classes.innerContentSpace}>
        <ContentRouter></ContentRouter>
      </div>
    </div>
  );
}
