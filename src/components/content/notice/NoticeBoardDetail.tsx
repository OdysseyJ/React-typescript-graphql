import React from "react";
import ContentPaper from "../../common/ContentPaper";
import { makeStyles, Theme } from "@material-ui/core";
import NoticeBoardDetailTitle from "./NoticeBoardDetailTitle";
import { noticeBoardDetailData } from "../../common/DataCenter";

const useStyles = makeStyles((theme: Theme) => ({
  boardData: {
    lineHeight: 3
  }
}));

const NoticeBoardRow = () => {
  const classes = useStyles();
  return (
    <ContentPaper>
      <NoticeBoardDetailTitle
        title={"연플 Ver 1.1 업데이트 완료"}
        date={"2019.10.16"}
        view={537}
      ></NoticeBoardDetailTitle>
      <div className={classes.boardData}>{noticeBoardDetailData}</div>
    </ContentPaper>
  );
};

export default NoticeBoardRow;
