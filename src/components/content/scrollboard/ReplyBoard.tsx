import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, List, Button } from "@material-ui/core";
import ReplyBoardRow from "./ReplyBoardRow";
import ReplyBoardWriteButton from "./ReplyBoardWriteButton";
import ContentPaper from "../../common/ContentPaper";

const useStyles = makeStyles((theme: Theme) => ({
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

export default function ReplyBoard() {
  const classes = useStyles();

  return (
    <ContentPaper>
      <List component="nav" className={classes.list}>
        <ReplyBoardRow
          nickname={"외향적인 파랑취지"}
          time={"31분전"}
          content={"그러게요"}
        ></ReplyBoardRow>
      </List>
      <ReplyBoardWriteButton></ReplyBoardWriteButton>
    </ContentPaper>
  );
}
