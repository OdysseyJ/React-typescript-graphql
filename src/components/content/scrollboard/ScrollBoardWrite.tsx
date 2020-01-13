import React, { useState } from "react";
import ContentPaper from "../../common/ContentPaper";
import BackButton from "../../common/BackButton";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import { useRouteMatch } from "react-router-dom";
import { Divider, InputBase, Button } from "@material-ui/core";
import oc from "open-color";
import ImageUploader from "./ImageUploader";

const boardNames = ["noname", "freshman", "humor", "job"];
const writeBoardPlaceholder = [
  {
    name: "noname",
    title: "독수리익명게시판",
    content: `내용을 입력해 주세요

  24시간마다 닉네임이 바뀌는 익명게시판입니다. 솔직하고 배려하며 소통해요.
  
  [홍보 게시물 작성 금지]
  1. 회사/단체와 관련된 공모전, 대외활동, 구인, 펀딩 홍보
  2. 허가되지 않은 광고/홍보물 및 회사/상업체 연관 게시물 또는 이와 유사한 간접 홍보
  
  [이용약관에 어긋나는 행위 금지]
  1. 욕설, 비하, 음란물, 개인정보가 포함된 게시물 게시
  2. 특정인이나 단체/지역을 비방하는 행위
  3. 연플 이용약관에 어긋나는 행위`
  },
  { name: "freshman", title: "새내기게시판", content: "2" },
  { name: "humor", title: "유머/화제게시판", content: "3" },
  {
    name: "job",
    title: "취업진로게시판",
    content: `내용을 입력해 주세요
  
  이곳은 취업/진로에 대한 고민을 나누고`
  }
];

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: 18,
    fontWeight: 700,
    paddingBottom: 10
  },
  wrapper: {
    marginTop: 10
  },
  imageWrapper: {
    color: "gray",
    display: "flex"
  },
  image: { width: 20, heigh: 30, marginRight: 10 },
  input: {
    width: "100%",
    marginTop: 3,
    marginBottom: 3,
    fontSize: 12
  },
  imageUploader: {
    width: 200
  },
  buttonWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    marginTop: 10
  },
  writeButton: {
    backgroundColor: oc.blue[4],
    color: "white"
  }
}));

const ScrollBoardWrite = () => {
  const classes = useStyles();
  let { url } = useRouteMatch();

  const boardName = url.split("/")[3];
  let placeholder, title;

  boardNames.map(p => {
    if (boardName === p) {
      const filtered = writeBoardPlaceholder.filter(f => {
        if (f.name === boardName) {
          return f;
        }
      });
      title = filtered[0].title;
      placeholder = filtered[0].content;
    }
  });

  return (
    <div className={classes.wrapper}>
      <BackButton></BackButton>
      <ContentPaper>
        <div className={classes.title}>{title}</div>
        <Divider></Divider>
        <InputBase className={classes.input} placeholder="제목"></InputBase>
        <Divider></Divider>
        <div className={classes.imageWrapper}>
          <img
            className={classes.image}
            src={"/images/board/youtube.svg"}
          ></img>
          <InputBase
            className={classes.input}
            placeholder="Youtube 링크를 입력해주세요.(선택)"
          ></InputBase>
        </div>
        <Divider></Divider>
        <ImageUploader></ImageUploader>
        <Divider></Divider>
        <InputBase
          className={classes.input}
          placeholder={placeholder}
        ></InputBase>
        <Divider></Divider>
        <div className={classes.buttonWrapper}>
          <Button className={classes.writeButton}>작성완료</Button>
        </div>
      </ContentPaper>
    </div>
  );
};

export default ScrollBoardWrite;
