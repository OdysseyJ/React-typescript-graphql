import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textDecoration: "none",
    color: "inherit",
    textDecorationColor: "none"
  }
}));

const CustomLink = ({ path, children }: any) => {
  const classes = useStyles();
  return (
    <Link to={`/${path}`} className={classes.root}>
      {children}
    </Link>
  );
};

export default CustomLink;
