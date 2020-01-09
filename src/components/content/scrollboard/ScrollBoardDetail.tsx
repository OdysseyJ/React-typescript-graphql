import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, List, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import NickName from "./NickName";

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
      <div>조기 졸업?</div>
      <NickName></NickName>
      <div>
        6학기 졸업은 힘든 것 같고 7학기만에 졸업하는 건 할만한가요? 2021년 2학년
        1학기 끝내고 바로 군대가서 2023년 2학기에 복학하고 5년만에 졸업하는 건
        너무 말이 안되나...
      </div>
      <div>
        <Button>1</Button>
        <Button>2</Button>
      </div>
      <div>113명이 읽었어요</div>
      <List component="nav" className={classes.list}></List>
    </Paper>
  );
}
