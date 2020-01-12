import * as React from "react";
import NickName from "./NickName";
import LikeButton from "./LikeButton";
import { Grid, makeStyles, Theme, ButtonBase } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";

const useStyles = makeStyles((theme: Theme) => ({
  grid: { textAlign: "right" },
  grayButton: {
    borderRadius: 20,
    width: 60,
    height: 20,
    color: "gray",
    marginTop: 5
  },
  grayButtonIcon: {
    width: 15,
    height: 15,
    marginRight: 5
  }
}));

export type ReplyBoardRowProps = {
  nickname: string;
  time: string;
  content: string;
};

export default function ReplyBoardRow({
  nickname,
  time,
  content
}: ReplyBoardRowProps) {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={7}>
          <NickName></NickName>
        </Grid>
        <Grid item xs={5} className={classes.grid}>
          <LikeButton></LikeButton>
        </Grid>
      </Grid>
      <div>{content}</div>
      <ButtonBase
        disableRipple={true}
        className={classes.grayButton}
        onClick={() => console.log("Test")}
      >
        <CommentIcon className={classes.grayButtonIcon}></CommentIcon>
        <div>{"답글쓰기"}</div>
      </ButtonBase>
    </div>
  );
}
