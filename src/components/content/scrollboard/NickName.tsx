import React from "react";
import { AccountCircle } from "@material-ui/icons";
import { makeStyles, Theme, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    alignItems: "center"
  },
  accountIcon: {
    color: "gray",
    margin: 5,
    marginLeft: 0,
    width: 25,
    height: 25
  },
  nickname: {
    color: "gray",
    fontSize: 11
  },
  time: {
    color: "gray",
    fontSize: 10
  }
}));

const NickName = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.grid}>
        <AccountCircle className={classes.accountIcon}></AccountCircle>
        <div>
          <div className={classes.nickname}>소폭적인 앵무</div>
          <div className={classes.time}>6시간전</div>
        </div>
      </Grid>
    </div>
  );
};
export default NickName;
