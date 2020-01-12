import React from "react";
import ContentPaper from "../../common/ContentPaper";
import { makeStyles, Theme } from "@material-ui/core";
import NoticeBoardDetailTitle from "./NoticeBoardDetailTitle";
import { noticeBoardDetailData } from "../../common/DataCenter";

const useStyles = makeStyles((theme: Theme) => ({
  titleLeft: {
    color: "gray",
    fontSize: 12,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  "@media (max-width: 1100px)": {
    root: {
      width: 350,
      margin: theme.spacing(1)
    }
  }
}));

const NoticeBoardRow = () => {
  return (
    <ContentPaper>
      <NoticeBoardDetailTitle
        title={"연플 Ver 1.1 업데이트 완료"}
        date={"2019.10.16"}
        view={537}
      ></NoticeBoardDetailTitle>
      {noticeBoardDetailData}
    </ContentPaper>
  );
};

export default NoticeBoardRow;
