import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Paper, List, ListItem, ListItemAvatar } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 300,
      margin: theme.spacing(1)
    },
    div: {
      fontSize: 13
    }
  })
);

type UserProps = {
  username: string;
  feather: number;
};

const User = ({ username, feather }: UserProps) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <img src="/images/svg/senior.svg" width="24"></img>
          </ListItemAvatar>
          <div className={classes.div}>{username}</div>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img src="/images/svg/feather.svg" width="24"></img>
          </ListItemAvatar>
          <div className={classes.div}>{feather}</div>
        </ListItem>
      </List>
    </Paper>
  );
};

export default User;
