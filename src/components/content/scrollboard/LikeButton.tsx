import React from "react";
import { ButtonBase, makeStyles, Theme } from "@material-ui/core";
import oc from "open-color";

const useStyles = makeStyles((theme: Theme) => ({
  blueButton: {
    backgroundColor: oc.blue[2],
    borderRadius: 20,
    width: 50,
    height: 20,
    margin: 5
  },
  redButton: {
    backgroundColor: oc.red[2],
    borderRadius: 20,
    width: 50,
    height: 20,
    margin: 4
  }
}));

const LikeButton = () => {
  const classes = useStyles();
  return (
    <>
      <ButtonBase
        disableRipple={true}
        className={classes.blueButton}
        onClick={() => console.log("Test")}
      >
        <div>{1}</div>
      </ButtonBase>
      <ButtonBase
        disableRipple={true}
        className={classes.redButton}
        onClick={() => console.log("Test")}
      >
        <div>{2}</div>
      </ButtonBase>
    </>
  );
};

export default LikeButton;
