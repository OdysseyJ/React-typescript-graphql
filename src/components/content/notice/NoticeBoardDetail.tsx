import React from "react";
import ContentPaper from "../../common/ContentPaper";
import { makeStyles, Theme, Button } from "@material-ui/core";
import NoticeBoardDetailTitle from "./NoticeBoardDetailTitle";
import { noticeBoardDetailData } from "../../common/DataCenter";
import CustomLink from "../../common/CustomLink";

const useStyles = makeStyles((theme: Theme) => ({
  boardData: {
    lineHeight: 3
  },
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "left"
  },
  backButton: {
    color: "gray",
    fontSize: 12
  }
}));

const NoticeBoardRow = () => {
  const classes = useStyles();
  return (
    <ContentPaper>
      <CustomLink path="home/notice">
        <div className={classes.container}>
          <Button className={classes.backButton}>{"< 돌아가기"}</Button>
        </div>
      </CustomLink>
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
