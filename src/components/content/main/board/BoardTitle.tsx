import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React from "react";

type BoardTitleProps = {
  title: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 20,
      fontWeight: 700
    },
    endtext: {
      fontSize: 12,
      color: "gray"
    }
  })
);

const BoardTitle = ({ title }: BoardTitleProps) => {
  const classes = useStyles();

  return (
    <>
      <ListItemText>
        <div className={classes.title}>{title}</div>
      </ListItemText>
      <div className={classes.endtext}>더보기 ></div>
    </>
  );
};

export default BoardTitle;
