import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Paper,
  List,
  Divider,
  Button,
  Link,
  ListItem
} from "@material-ui/core";
import { useRouteMatch } from "react-router-dom";
import ScrollBoardRow, { ScrollBoardRowProps } from "./ScrollBoardRow";
import ScrollBoardTitle from "./ScrollBoardTitle";
import CustomLink from "../../common/CustomLink";
import oc from "open-color";
import { scrollBoardInfo } from "../../common/DataCenter";

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
  writeButtonList: { display: "flex", justifyContent: "flex-end" },
  writeButton: {
    alignItems: "right",
    backgroundColor: oc.blue[4],
    color: "white"
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
  console.log(url);
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
        <ListItem className={classes.writeButtonList}>
          <CustomLink path={`${url}/write`}>
            <Button className={classes.writeButton}>글쓰기</Button>
          </CustomLink>
        </ListItem>
        <Divider></Divider>
        {scrollBoardInfo.map((info: ScrollBoardRowProps) => {
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
