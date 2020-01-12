import React from "react";
import { Button, makeStyles, Theme } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "left",
    marginTop: 30
  },
  backButton: {
    color: "gray",
    fontSize: 12
  }
}));

const BackButton = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.container}>
      <Button className={classes.backButton} onClick={() => history.goBack()}>
        {"< 돌아가기"}
      </Button>
    </div>
  );
};

export default BackButton;
