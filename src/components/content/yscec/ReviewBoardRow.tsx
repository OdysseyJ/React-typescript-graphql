import React from "react";
import { Grid, makeStyles, Theme, ListItem, Button } from "@material-ui/core";
import ClampLines from "react-clamp-lines";
import oc from "open-color";

export type ReviewBoardRowProps = {
  id: number;
  date: string;
  grade: string;
  view: number;
  preview: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  listItem: {
    padding: theme.spacing(1)
  },
  titleGrid: {
    alignContent: "center",
    paddingTop: 10
  },
  titleMainText: {
    paddingLeft: 5,
    fontSize: 12,
    fontWeight: 700
  },
  gradeButton: {
    display: "inline",
    fontSize: 12,
    height: 20,
    width: 50,
    textAlign: "center",
    backgroundColor: oc.red[2],
    borderRadius: "10%",
    padding: 5,
    margin: 2
  },
  viewButton: {
    display: "inline",
    fontSize: 12,
    height: 20,
    width: 50,
    textAlign: "center",
    backgroundColor: oc.yellow[2],
    borderRadius: "10%",
    padding: 5,
    margin: 2
  },
  subTitleText: {
    fontSize: 12,
    color: "gray",
    paddingBottom: 10
  }
}));

const ReviewBoardRow = ({
  id,
  date,
  grade,
  view,
  preview
}: ReviewBoardRowProps) => {
  const classes = useStyles();
  return (
    <ListItem button className={classes.listItem}>
      <Grid container className={classes.titleGrid}>
        <Grid item xs={12}>
          <div className={classes.titleMainText}>{date}</div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.gradeButton}>{grade}급 후기</div>
          <div className={classes.viewButton}>View {view}</div>
        </Grid>
        <Grid item xs={12}>
          <ClampLines
            text={preview}
            id={"yscecBoardRow"}
            lines={2}
            ellipsis="..."
            buttons={false}
            className={classes.subTitleText}
          ></ClampLines>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ReviewBoardRow;
