import React from "react";
import {
  ListItem,
  ListItemText,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    time: {
      fontSize: 12,
      color: "gray"
    },
    contentTitle: {
      width: 200,
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  })
);

export type BoardContentProps = {
  title: string;
  time: string;
};

const BoardContent = ({ title, time }: BoardContentProps) => {
  const classes = useStyles();
  return (
    <ListItem button>
      <ListItemText className={classes.contentTitle}>{title}</ListItemText>
      <div className={classes.time}>{time}</div>
    </ListItem>
  );
};

export default BoardContent;
