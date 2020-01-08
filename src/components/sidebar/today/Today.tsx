import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";
import oc from "open-color";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      alignItems: "center",
      justifyContent: "center",
      width: "88%",
      margin: theme.spacing(2),
      marginBottom: theme.spacing(0),
      marginLeft: theme.spacing(0)
    },
    div: {
      display: "inline-block"
    },
    colordiv: {
      display: "inline-block",
      color: oc.blue[6]
    },
    "@media (max-width: 700px)": {
      paper: {
        display: "none"
      }
    }
  })
);

export default function Today() {
  const classes = useStyles();
  const number = 3355;

  return (
    <Paper elevation={3} className={classes.paper}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>{/* <ImageIcon /> */}</Avatar>
          </ListItemAvatar>
          <div className={classes.div}>오늘 방문자 수:</div>
          <div className={classes.colordiv}>{number}</div>
          <div className={classes.div}>명</div>
        </ListItem>
      </List>
    </Paper>
  );
}
