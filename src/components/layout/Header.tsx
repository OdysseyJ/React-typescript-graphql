import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: "white",
    display: "flex",
    justify: "center",
    height: 80
  },
  customizingToolbar: {
    height: 80,
    justifyContent: "center"
  },
  Image: {
    height: 60,
    width: "auto",
    cursor: "pointer",
    display: "flex",
    justifyItems: "center"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.customizingToolbar}>
        <img
          src={process.env.PUBLIC_URL + "/images/headerImage.png"}
          className={classes.Image}
        ></img>
      </Toolbar>
    </AppBar>
  );
}
