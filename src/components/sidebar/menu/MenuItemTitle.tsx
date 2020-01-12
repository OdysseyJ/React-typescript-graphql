import React from "react";
import {
  ListItem,
  ListItemAvatar,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "auto",
      margin: theme.spacing(1)
    },
    div: {
      color: "gray",
      fontSize: 15,
      fontWeight: 600
    }
  })
);

type MenuItemTitleProps = {
  title: string;
  isButton?: boolean;
};

const MenuItemTitle = ({ title, isButton, children }: any) => {
  const classes = useStyles();
  if (isButton) {
    return (
      <ListItem button>
        <ListItemAvatar>{children}</ListItemAvatar>
        <div className={classes.div}>{title}</div>
      </ListItem>
    );
  }
  return (
    <ListItem>
      <ListItemAvatar>{children}</ListItemAvatar>
      <div className={classes.div}>{title}</div>
    </ListItem>
  );
};

export default MenuItemTitle;
