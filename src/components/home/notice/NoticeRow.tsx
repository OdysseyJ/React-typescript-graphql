import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Grid
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";

const useStyles = makeStyles({
  text: {
    fontSize: 12
  }
});

type NoticeRowProps = {
  primary: string;
  index: number;
};

export default function NoticeRow({ primary, index }: NoticeRowProps) {
  const classes = useStyles();

  return (
    <ListItem button>
      <Grid container>
        <Grid item xs={2}>
          <ListItemText>{index}</ListItemText>
        </Grid>
        <Grid item xs={10}>
          <ListItemText classes={{ primary: classes.text }} primary={primary} />
        </Grid>
      </Grid>
    </ListItem>
  );
}
