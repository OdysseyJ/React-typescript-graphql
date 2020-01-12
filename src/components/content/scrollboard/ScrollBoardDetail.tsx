import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, List, ButtonBase, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import NickName from "./NickName";
import LikeButton from "./LikeButton";
import oc from "open-color";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 600,
    margin: theme.spacing(3),
    padding: theme.spacing(2)
  },
  list: {
    padding: 0
  },
  backButton: {
    color: "gray",
    fontSize: 12
  },
  title: {
    fontSize: 20,
    fontWeight: 700
  },
  content: {
    paddingTop: 10,
    paddingBottom: 10
  },
  view: {
    fontSize: 12,
    color: "gray"
  },
  buttonContainer: {
    textAlign: "center"
  },
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
    margin: 5
  },
  "@media (max-width: 1100px)": {
    root: {
      width: 350,
      margin: theme.spacing(1)
    }
  }
}));

export default function ScrollBoardDetail() {
  const classes = useStyles();

  const history = useHistory();

  return (
    <Paper elevation={3} className={classes.root}>
      <Button className={classes.backButton} onClick={() => history.goBack()}>
        {"< 돌아가기"}
      </Button>
      <div className={classes.title}>조기 졸업?</div>
      <NickName></NickName>
      <div className={classes.content}>
        6학기 졸업은 힘든 것 같고 7학기만에 졸업하는 건 할만한가요? 2021년 2학년
        1학기 끝내고 바로 군대가서 2023년 2학기에 복학하고 5년만에 졸업하는 건
        너무 말이 안되나...
      </div>
      <div className={classes.buttonContainer}>
        <LikeButton></LikeButton>
      </div>
      <div className={classes.view}>113명이 읽었어요</div>
      <List component="nav" className={classes.list}></List>
    </Paper>
  );
}
