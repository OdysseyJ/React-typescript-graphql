import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Paper, List, Divider } from "@material-ui/core";
import BoardTitle from "./BoardTitle";
import BoardContent from "./BoardContent";
import { contents } from "../../../common/DataCenter";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      alignItems: "center",
      justifyContent: "center",
      width: 410,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      }
    },
    content: {
      margin: theme.spacing(2)
    },
    list: {
      padding: 0
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
    }
  })
);

type BoardProps = {
  boardName: string;
  path: string;
  children?: any;
};

export default function Board({ boardName, path, children }: BoardProps) {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.content}>
        <List className={classes.list}>
          <BoardTitle title={boardName} path={path}>
            {children}
          </BoardTitle>
          <Divider></Divider>
          {contents.map(content => {
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
