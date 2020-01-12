import React from "react";
import { ListItem, makeStyles, Theme, Grid } from "@material-ui/core";
import CustomLink from "../../common/CustomLink";

const useStyles = makeStyles((theme: Theme) => ({
  titleLeft: {
    color: "gray",
    fontSize: 12,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  titleRight: {
    color: "gray",
    fontSize: 12,
    textAlign: "center",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  grid: {
    margin: "auto"
  },
  "@media (max-width: 1100px)": {
    root: {
      width: 350,
      margin: theme.spacing(1)
    }
  }
}));

export type NoticeBoardRowProps = {
  index: number;
  title: string;
  date: string;
  time: number;
};

const NoticeBoardRow = ({ index, title, date, time }: NoticeBoardRowProps) => {
  const classes = useStyles();
  return (
    <CustomLink path={`home/notice/${index}`}>
      <ListItem button>
        <Grid container className={classes.grid}>
          <Grid item xs={1}>
            <div className={classes.titleLeft}>{index}</div>
          </Grid>
          <Grid item xs={7}>
            <div className={classes.titleLeft}>{title}</div>
          </Grid>
          <Grid item xs={2}>
            <div className={classes.titleRight}>{date}</div>
          </Grid>
          <Grid item xs={2}>
            <div className={classes.titleRight}>{time}</div>
          </Grid>
        </Grid>
      </ListItem>
    </CustomLink>
  );
};

export default NoticeBoardRow;
