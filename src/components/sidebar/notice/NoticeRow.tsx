import React from "react";
import { ListItem, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  text: {
    fontSize: 12,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  listindex: {
    color: "gray",
    fontSize: 12
  },
  listitem: {
    height: 40
  },
  grid: {
    margin: "auto"
  }
});

type NoticeRowProps = {
  primary: string;
  index: number;
};

export default function NoticeRow({ primary, index }: NoticeRowProps) {
  const classes = useStyles();

  return (
    <ListItem button className={classes.listitem}>
      <Grid container>
        <Grid item xs={2}>
          <div className={classes.listindex}>{index}</div>
        </Grid>
        <Grid item xs={10} className={classes.grid}>
          <div className={classes.text}>{primary}</div>
        </Grid>
      </Grid>
    </ListItem>
  );
}
