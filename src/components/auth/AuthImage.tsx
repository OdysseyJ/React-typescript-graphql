import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme?: any) => ({
  image: {
    display: "flex",
    height: 500,
    width: "auto",
    margin: theme.spacing(5),
    marginRight: theme.spacing(20),
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

const AuthImage = () => {
  const classes = useStyles();
  return (
    <img className={classes.image} src="images/auth/mainImage.jpg" alt=""></img>
  );
};

export default AuthImage;
