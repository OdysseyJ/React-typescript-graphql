import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  createStyles,
  Theme,
  Link
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React from "react";

type BoardTitleProps = {
  title: string;
  path: string;
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
    },
    button: {
      color: "black"
    }
  })
);

const BoardTitle = ({ title, path, children }: any) => {
  const classes = useStyles();

  return (
    <Link
      href={`home/board/${path}`}
      style={{ textDecoration: "none" }}
      color="inherit"
    >
      <ListItem button className={classes.button}>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText>
          <div className={classes.title}>{title}</div>
        </ListItemText>
        <div className={classes.endtext}>더보기 ></div>
      </ListItem>
    </Link>
  );
};

export default BoardTitle;
