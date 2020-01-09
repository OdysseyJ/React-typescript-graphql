import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, List, Divider, Button, Link } from "@material-ui/core";
import { useRouteMatch } from "react-router-dom";
import ScrollBoardRow, { ScrollBoardRowProps } from "./ScrollBoardRow";
import ScrollBoardTitle from "./ScrollBoardTitle";

const boardInfo: ScrollBoardRowProps[] = [
  {
    id: 1234,
    boardName: "noname",
    title: "생일인데 옆집 싸우고있어서 축하 못받음ㅠㅠ",
    date: "01월 03일 오후 4:20",
    nickname: "국가주의적인 딱정벌레",
    hasImage: true,
    like: 4,
    unlike: 2,
    comment: 6
  },
  {
    id: 1235,
    boardName: "noname",
    title: "생일인데 옆집 싸우고있어서 축하 못받음ㅠㅠ",
    date: "01월 03일 오후 4:20",
    nickname: "국가주의적인 딱정벌레",
    hasImage: false,
    like: 4,
    unlike: 2,
    comment: 6
  },
  {
    id: 1236,
    boardName: "noname",
    title: "생일인데 옆집 싸우고있어서 축하 못받음ㅠㅠ",
    date: "01월 03일 오후 4:20",
    nickname: "국가주의적인 딱정벌레",
    hasImage: true,
    like: 4,
    unlike: 2,
    comment: 6
  },
  {
    id: 1237,
    boardName: "noname",
    title: "생일인데 옆집 싸우고있어서 축하 못받음ㅠㅠ",
    date: "01월 03일 오후 4:20",
    nickname: "국가주의적인 딱정벌레",
    hasImage: false,
    like: 4,
    unlike: 2,
    comment: 6
  },
  {
    id: 1238,
    boardName: "noname",
    title: "생일인데 옆집 싸우고있어서 축하 못받음ㅠㅠ",
    date: "01월 03일 오후 4:20",
    nickname: "국가주의적인 딱정벌레",
    hasImage: true,
    like: 4,
    unlike: 2,
    comment: 6
  },
  {
    id: 1239,
    boardName: "noname",
    title: "생일인데 옆집 싸우고있어서 축하 못받음ㅠㅠ",
    date: "01월 03일 오후 4:20",
    nickname: "국가주의적인 딱정벌레",
    hasImage: false,
    like: 4,
    unlike: 2,
    comment: 6
  },
  {
    id: 1240,
    boardName: "noname",
    title: "생일인데 옆집 싸우고있어서 축하 못받음ㅠㅠ",
    date: "01월 03일 오후 4:20",
    nickname: "국가주의적인 딱정벌레",
    hasImage: true,
    like: 4,
    unlike: 2,
    comment: 6
  }
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: 600,
    margin: theme.spacing(3),
    padding: theme.spacing(2)
  },
  padding: {
    padding: theme.spacing(3)
  },
  demo1: {
    backgroundColor: theme.palette.background.paper
  },
  demo2: {
    backgroundColor: "#2e1534"
  },
  list: {
    padding: 0
  },
  titleListItem: {
    height: 40
  },
  titleLeft: {
    color: "gray",
    fontSize: 12
  },
  titleRight: {
    color: "gray",
    fontSize: 12,
    textAlign: "center"
  },
  grid: {
    margin: "auto"
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

export default function ScrollBoard() {
  const classes = useStyles();

  let { url } = useRouteMatch();

  const pathname = url.split("/")[3];
  return (
    <Paper elevation={3} className={classes.root}>
      <Link href="/home" style={{ textDecoration: "none" }}>
        <Button className={classes.backButton}>{"< 홈으로"}</Button>
      </Link>
      <List component="nav" className={classes.list}>
        <ScrollBoardTitle
          path={pathname}
          currentRandomNickname={"현세적인 흰조개"}
        ></ScrollBoardTitle>
        <Divider></Divider>
        {boardInfo.map((info: ScrollBoardRowProps) => {
          return (
            <div>
              <ScrollBoardRow
                id={info.id}
                boardName={pathname}
                title={info.title}
                date={info.date}
                nickname={info.nickname}
                hasImage={info.hasImage}
                like={info.like}
                unlike={info.unlike}
                comment={info.comment}
              ></ScrollBoardRow>
              <Divider></Divider>
            </div>
          );
        })}
      </List>
    </Paper>
  );
}
