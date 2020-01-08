import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import BoardTitle from "./BoardTitle";
import BoardContent, { BoardContentProps } from "./BoardContent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      alignItems: "center",
      justifyContent: "center",
      width: 400,
      margin: theme.spacing(2)
    },
    list: {
      padding: 0
    },
    content: {
      margin: theme.spacing(2)
    },
    title: {
      fontSize: 20
    },
    endtext: {
      fontSize: 12,
      color: "gray"
    },
    div: {
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      marginBottom: theme.spacing(1),
      fontSize: 10,
      color: "gray"
    },
    "@media (max-width: 1100px)": {
      paper: {
        width: 350
      }
    }
  })
);

const contents: BoardContentProps[] = [
  { title: "프문예 다들 공부하시나요?", time: "1시간전" },
  { title: "토플 유효기간", time: "1시간전" },
  { title: "아이패드 관련해서여...", time: "2시간전" },
  { title: "새터 오티 질문입니다!", time: "3시간전" }
];

export default function Board() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.content}>
        <List className={classes.list}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <BoardTitle title="유머/화제게시판"></BoardTitle>
          </ListItem>
          <Divider></Divider>
          {contents.map(content => {
            console.log(content);
            return (
              <BoardContent
                title={content.title}
                time={content.time}
              ></BoardContent>
            );
          })}
        </List>
      </div>
    </Paper>
  );
}
